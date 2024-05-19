"use client";
import { endpoints } from "../api/config";
import { useGetDataByCategory } from "../api/api-hooks";
import { Preloader } from "../components/Preloader/Preloader";
import { CardsListSection } from "../components/CardsList/CardsListSection";

export default function New() {
  const runnerGames = useGetDataByCategory(endpoints.games, "runner");

  return (
    <main className="main-inner">
      {runnerGames ? (
        <CardsListSection id="new" title="Ранеры" data={runnerGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}
