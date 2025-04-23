import GameStartComponent from "@/components/game-start-component";

export default function Home() {
  return (
    <main className="flex justify-between px-6 h-full gap-10 py-24 max-w-7xl mx-auto">
      <GameStartComponent />
    </main>
  );
}
