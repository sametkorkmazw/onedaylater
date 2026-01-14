import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "40px", maxWidth: "900px", margin: "auto" }}>
      <h1>What happens one day later if you change one habit today?</h1>
      <p>
        Explore how today’s small decisions affect your body, mind,
        and life — from tomorrow to one year later.
      </p>

      <h2>Popular Simulations</h2>

      <ul>
        <li>
          <Link href="/simulations/walk-10000">
            What happens if you walk 10,000 steps today?
          </Link>
        </li>
      </ul>
    </main>
  );
}
