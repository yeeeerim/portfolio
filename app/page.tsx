import CharacterInfo from "@/components/character-info";
import CharacterList from "@/components/character-list";

export default function Home() {
  return (
    <section className="flex justify-between h-full gap-10 py-8 md:py-10">
      <CharacterList />
      <div className="flex-1 h-full border border-default-100" />
      <CharacterInfo />
    </section>
  );
}
