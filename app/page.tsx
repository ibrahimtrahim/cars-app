import { CustomFilter, Hero, Searchbar } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h2 className="text-4xl font-extrabold">Car Catalogue</h2>
          <p>Explore out cars you might like</p>
        </div>
        <div className="home__filters">
          <Searchbar />
          <div className="home__filter-container">
            <CustomFilter titel="fuel" />
            <CustomFilter titel="year" />
          </div>
        </div>
      </div>
    </main>
  );
}
