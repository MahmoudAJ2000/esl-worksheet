import Navbar from "../components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar hasButton={true} />
      <section className="py-24 sm:pb-64 xl:pb-72">
        <div className="max-w-xl mx-auto px-10 sm:max-w-4xl xl:max-w-7xl">
          <h1 className="text-4xl font-extrabold mb-8 sm:text-7xl">
            ESL Worksheets Created Just for
            <span className="text-accent"> Your</span> Students
          </h1>
          <h2 className="text-2xl opacity-85 mb-10">
            Built for busy teachers. Designed for real classrooms.
          </h2>
          <p className="text-xl opacity-85 mb-4">
            ✔️ Personalized to Your Students
          </p>
          <p className="text-xl opacity-85 mb-4">✔️ Printable </p>
          <p className="text-xl opacity-85 mb-10">✔️ Takes Seconds </p>

          <Link href="/dashboard" className="btn btn-lg btn-primary">
            Create Worksheet
          </Link>
        </div>
      </section>

      <section className="bg-base-300 py-24">
        <div className="max-w-xl mx-auto px-10 sm:max-w-4xl xl:max-w-7xl">
          <h1 className="text-3xl font-extrabold mb-14 sm:text-4xl">Say Goodbye To...</h1>
          <h2 className="text-xl opacity-85 font-bold mb-12 sm:text-2xl">
            ❌ Spending hours preparing new class material every week.
          </h2>
          <h2 className="text-xl opacity-85 font-bold mb-12 sm:text-2xl">
            ❌ Struggling to find worksheets that match your students' level.
          </h2>
          <h2 className="text-xl opacity-85 font-bold sm:text-2xl">
            ❌ Using your free time to create extra class material.
          </h2>
        </div>
      </section>

      <section className="py-24 sm:pb-64 xl:pb-72">
        <div className="max-w-xl mx-auto px-10 sm:max-w-4xl xl:max-w-7xl">
          <h1 className="text-3xl font-extrabold mb-14 sm:text-4xl">Our worksheets are:</h1>
          <h2 className="text-2xl font-bold mb-4 sm:text-3xl">✅ Time Efficient</h2>
          <p className="text-xl opacity-85 mb-12 sm:text-2xl">
            Save time, and teach more. No more endless Googling or formatting PDFs. Create printable,
            custom worksheets in under seconds.
          </p>
          <h2 className="text-2xl font-bold mb-4 sm:text-3xl">🎯 Tailored to Your Class</h2>
          <p className="text-xl opacity-85 mb-12 sm:text-2xl">
            Set student age, proficiency level, and topic, to get
            worksheets that fit your exact needs.
          </p>
          <h2 className="text-2xl font-bold mb-4 sm:text-3xl">✏️ Interactive & Print-Ready</h2>
          <p className="text-xl opacity-85 mb-12 sm:text-2xl">
            Print it, project it, or assign it digitally. Our worksheets are
            classroom-tested and ready to use your way.
          </p>
          <h2 className="text-2xl font-bold mb-4 sm:text-3xl">🌍 ESL-Specific Intelligence</h2>
          <p className="text-xl opacity-85 sm:text-2xl">
            Unlike generic worksheet tools, this is built specifically for ESL
            teachers, by an ESL teacher.
          </p>
        </div>
      </section>

      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Made by MahmoudAJ - Copyright © {new Date().getFullYear()}
          </p>
        </aside>
      </footer>
    </div>
  );
}
