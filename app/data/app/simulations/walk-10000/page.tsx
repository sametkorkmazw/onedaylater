import { walk10000 } from "@/data/simulations";

export const metadata = {
  title: "What happens if you walk 10,000 steps today?",
  description:
    "Walking 10,000 steps today can impact your health within 24 hours and beyond.",
};

export default function WalkSimulation() {
  return (
    <main style={{ padding: "40px", maxWidth: "900px", margin: "auto" }}>
      <h1>{walk10000.title}</h1>

      {walk10000.timeline.map((item, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h3>{item.time}</h3>
          <p>{item.effect}</p>
        </div>
      ))}

      <p style={{ fontSize: "12px", marginTop: "40px" }}>
        For educational purposes only. Not medical advice.
      </p>
    </main>
  );
}
