"use client";
import { useState } from "react";

export default function FAQItem(props: { question: String; answer: String }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li className="p-8">
      <div className="py-8 flex items-center justify-between mb-2 border-b font-semibold w-full">
        <button className="" onClick={()=>setIsOpen(!isOpen)}>{props.question}</button>
        <div>{isOpen ? "-" : "+"}</div>
      </div>
      <div className={`${isOpen?"block":"hidden"}`}>{props.answer}</div>
    </li>
  );
}
