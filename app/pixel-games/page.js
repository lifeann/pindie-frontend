"use client";
import { endpoints } from "../api/config";
import { useGetDataByCategory } from "../api/api-hooks";
import { Preloader } from "../components/Preloader/Preloader";
import { CardsListSection } from "../components/CardsList/CardsListSection";

export default function New() {
  const pixelGames = useGetDataByCategory(endpoints.games, "pixel");

  return (
    <main className={"main-inner"}>
      {pixelGames ? (
        <CardsListSection
          id="pixel-games"
          title="Пиксельные"
          data={pixelGames}
        />
      ) : (
        <Preloader />
      )}
    </main>
  );
}
