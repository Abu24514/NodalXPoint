import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <h1 className="text-3xl font-bold tracking-tight">
        <span className="text-white">nodal</span>
        <span className="bg-linear-to-r from-cyan-400 to-orange-300 bg-clip-text text-transparent">
          X
        </span>
        <span className="text-white">point</span>
      </h1>
    </Link>
  );
}