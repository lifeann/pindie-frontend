"use client";
import { endpoints } from "../api/config";
import { useGetDataByCategory } from "../api/api-hooks";
import { Preloader } from "../components/Preloader/Preloader";
import { CardsListSection } from "../components/CardsList/CardsListSection";

export default function New() {
  const shooterGames = useGetDataByCategory(endpoints.games, "shooter");

  return (
    <main className="main-inner">
      {shooterGames ? (
        <CardsListSection id="new" title="Шутеры" data={shooterGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}
