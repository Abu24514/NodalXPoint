import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center">
      <h1 className="font-display text-3xl font-semibold tracking-tight">
        <span className="text-body">nodal</span>
        <span className="bg-linear-to-r from-node to-signal bg-clip-text text-transparent">
          X
        </span>
        <span className="text-body">point</span>
      </h1>
    </Link>
  );
}