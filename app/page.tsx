import GameStartComponent from "@/components/game-start-component";

export default function Home() {
  return (
    <section className="flex justify-between h-full gap-10 py-8 md:py-10">
      <GameStartComponent />
    </section>
  );
}
