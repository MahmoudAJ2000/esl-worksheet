import ButtonCreate from "@/components/ButtonCreate";
import DashboardLabel from "@/components/DashboardLabel";

export default function Dashboard() {
  return (
    <div>
      <section className="p-8">
        <DashboardLabel label="Age of Students" />
        <fieldset className="fieldset">
          <input type="number" className="input" placeholder="Type here" />
        </fieldset>
      </section>
      <section className="p-8">
        <DashboardLabel label="Level of Students" />
        <div className="flex justify-between">
          <div className="hover:bg-base-300 duration-100 cursor-pointer rounded-xl p-4 border border-[#4397F7] bg-base-300">A1 Beginner</div>
          <div className="hover:bg-base-300 duration-100 cursor-pointer rounded-xl p-4 border border-[#4397F7] bg-base-300">A2 Elementary</div>
          <div>B1 Intermediate</div>
          <div>B2 Upper-Intermediate</div>
          <div>C1 Advanced</div>
          <div>C2 Fluent</div>
        </div>
      </section>
      <section className="p-8">
        <DashboardLabel label="Topics" />
      </section>
      <section className="p-8">
        <DashboardLabel label="Types of Questions" />
      </section>
      <section className="p-8">
        <ButtonCreate />
      </section>
    </div>
  );
}
