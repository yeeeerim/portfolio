import CharacterList from "./_components/CharacterList";

export default function Home() {
  return (
    <section className="flex justify-between h-full gap-10 py-8 md:py-10">
      <CharacterList />
      <div className="flex-1 h-full border" />
      <div className="flex-1 h-full border" />
    </section>
  );
}
