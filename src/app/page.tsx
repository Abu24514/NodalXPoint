import Navbar from "@/components/layout/Navbar/Navbar";
import Hero from "@/components/sections/Hero/Hero";
export default function Home() {
  return (
      <>
      <Navbar />
      <Hero/>

      <main className="flex h-screen items-center justify-center">
        <h1 className="text-5xl font-bold text-white">
          Welcome to NodalXPoint
        </h1>
      </main>
    </>
  );
}