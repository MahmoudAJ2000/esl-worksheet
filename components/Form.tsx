"use client";

import { useState } from "react";
import Navbar from "./Navbar";

export default function Form() {
  const [selectedLevel, setSelectedLevel] = useState("A1");
  const [studentAge, setStudentAge] = useState("");
  const [topic, setTopic] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const levels = [
    { id: "A1", label: "Beginner", emoji: "🥚" },
    { id: "A2", label: "Elementary", emoji: "🐣" },
    { id: "B1", label: "Intermediate", emoji: "🐥" },
    { id: "B2", label: "Upper Intermediate", emoji: "🐓" },
    { id: "C1", label: "Advanced", emoji: "🦅" },
    { id: "C2", label: "Proficiency", emoji: "🐦‍🔥" },
  ];

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);

    if (isLoading) return;

    try {
      const res = await fetch("/api", {
        method: "POST",
        body: JSON.stringify({ selectedLevel, studentAge, topic }),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        alert("Failed to generate worksheet");
        setIsLoading(false);
        return;
      }
      // Create a blob from the response and trigger a download
      // This will allow the user to download the generated PDF file
      // with the name "worksheet.pdf"
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "worksheet.pdf";
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
     <Navbar hasButton={false} />
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-4">
        <fieldset className="fieldset p-4 mb-4">
          <legend className="fieldset-legend text-2xl">Age</legend>
          <input
            type="number"
            className="input input-lg w-full"
            name="studentAge"
            id="studentAge"
            autoComplete="off"
            pattern="[0-9]*"
            inputMode="numeric"
            placeholder="Students Age"
            min={1}
            max={99}
            required
            value={studentAge}
            onChange={(event) => {
              setStudentAge(event.target.value);
            }}
          />
        </fieldset>

        <fieldset className="fieldset p-4 mb-4">
          <legend className="fieldset-legend text-2xl">Students Level</legend>

          <div className="grid md:grid-cols-6 gap-2">
            {levels.map((lvl) => (
              <button
                key={lvl.id}
                type="button"
                onClick={() => setSelectedLevel(lvl.id)}
                className={`flex items-center rounded-lg md:flex-col hover:bg-base-300 ${
                  selectedLevel === lvl.id ? "bg-base-200 border" : "bg-neutral"
                }`}
              >
                <div className="text-4xl p-4 md:text-6xl">{lvl.emoji}</div>
                <span className="text-sm my-2">
                  {lvl.id}: {lvl.label}
                </span>
              </button>
            ))}
          </div>
          <input type="hidden" name="level" value={selectedLevel} />
        </fieldset>

        <fieldset className="fieldset p-4 mb-4">
          <legend className="fieldset-legend text-2xl">Topic</legend>
          <input
            type="text"
            className="input input-lg w-full"
            name="topic"
            id="topic"
            autoComplete="off"
            placeholder="Topic"
            required
            value={topic}
            onChange={(event) => {
              setTopic(event.target.value);
            }}
          />
        </fieldset>
        <div className="flex flex-col items-center">
          <button
            className="btn btn-primary btn-lg mt-6"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              ""
            )}
            Create Worksheet
          </button>
        </div>
      </form>
    </div>
  );
}
