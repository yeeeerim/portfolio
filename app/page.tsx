import GameStartComponent from "@/app/_components/game-start-component";

export default function Home() {
  return (
    <main className="flex justify-between md:px-6 h-full gap-10 py-24 max-w-7xl mx-auto min-h-screen items-center">
      <GameStartComponent />
    </main>
  );
}
