import { NextRequest, NextResponse } from 'next/server'
import { GoogleGenAI } from "@google/genai";
import { pdf } from "@react-pdf/renderer";
import { PdfDocument } from "@/components/PDFDocument";

// This is the API route that handles the form submission
// It receives the data from the form, processes it with Google GenAI, and generates a PDF document
// The PDF document is then returned as a response
export function GET() {
  return NextResponse.json({ message: "Testing API....." });
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  if (!['A1', 'A2','B1','B2','C1','C2',].includes(body.selectedLevel)){
    return new Response("Invalid level", { status: 500 });
  }

  const apiKey = process.env.AI_API_KEY

  const ai = new GoogleGenAI({
    apiKey: apiKey,
  });

  const content = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `
You are an ESL teacher. 
Create a worksheet for students at level ${body.selectedLevel}, aged ${body.studentAge}, on the topic of "${body.topic}". 
The worksheet should include:
1. A short reading passage (3-5 sentences)
2. 3 comprehension questions
3. 2 grammar exercises
Do not include answer keys. Use clear section titles. 
Output the content in markdown format.
  `,
  });

  // Create a PDF document using the content generated by Google GenAI
  // The content is passed to the PdfDocument component which formats it into a PDF structure
  if (!content.text) {
    return new Response("No content generated", { status: 500 });
  }

  const pdfDoc = await pdf(<PdfDocument content={content.text} />).toBlob();


  // Return the PDF document as a response with appropriate headers
  return new NextResponse(pdfDoc, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=worksheet.pdf",
    },
  });
}
