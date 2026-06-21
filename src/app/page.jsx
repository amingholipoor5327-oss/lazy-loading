import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
    <h1>Hi!</h1>
    <Link href={"/allproducts"}> go see products</Link>
      </main>
    </div>
  );
}
