import ButtonDashboard from "../components/ButtonDashboard";
import FAQItem from "@/components/FAQItem";

export default function Home() {
  return (
    <div>
      <section className="bg-base-200 text-sm flex justify-between items-center p-2">
        <div className="text-primary font-bold">ESL Worksheet Generator</div>
        <div>
          <ButtonDashboard />
        </div>
      </section>
      <section className="text-center px-8 py-32 max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-6">
          Create Worksheets for Your ESL Students
        </h1>
        <p className="opacity-50 mb-8">
          Found yourself ahead of your lesson plan? Create a worksheet for
          students in minutes
        </p>
        <ButtonDashboard />
      </section>
      <section className="text-center max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center">Frequently Asked Questions</h1>
        <ul>{[{ question: "Is this a question?", answer: "yes, it is!" }, {question: "Is this a question too?", answer: "yes, it is!"}].map((qa) => (
         <FAQItem key={qa.question} question={qa.question} answer={qa.answer}/>
        ))}</ul>
      </section>
    </div>
  );
}
