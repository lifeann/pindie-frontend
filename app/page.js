"use client";
import { Banner } from "./components/Banner/Banner";
import { CardsListSection } from "./components/CardsList/CardsListSection";
import { Promo } from "./components/Promo/Promo";
import { endpoints } from "./api/config";
import { useGetDataByCategory } from "./api/api-hooks";
import { Preloader } from "./components/Preloader/Preloader";

export default function Home() {
  const popularGames = useGetDataByCategory(endpoints.games, "popular");
  const newGames = useGetDataByCategory(endpoints.games, "new");
  return (
    <main className="main">
      <Banner />
      {popularGames && newGames ? (
        <>
          <CardsListSection
            id="new"
            title="Новые"
            data={newGames}
            type="slider"
          />
          <CardsListSection
            id="popular"
            title="Популярные"
            data={popularGames}
            type="slider"
          />
        </>
      ) : (
        <Preloader />
      )}
      <Promo />
    </main>
  );
}
