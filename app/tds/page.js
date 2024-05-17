"use client";

import { endpoints } from "@/app/api/config";
import { useGetDataByCategory } from "../api/api-hooks";
import { Preloader } from "../components/Preloader/Preloader";
import { CardsListSection } from "../components/CardsList/CardsListSection";

export default function New() {
  const tdsGames = useGetDataByCategory(endpoints.games, "TDS");

  return (
    <main className="main-inner">
      {tdsGames ? (
        <CardsListSection id="tds" title="TDS" data={tdsGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}
