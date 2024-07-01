import SearchBar, { fetchWeatherData } from "./Weather";

function Weather() {
  return (
<div className="App">
            <header className="App-header">
                <h1>Weather Forecast </h1>
            </header>
            <main>
                <SearchBar /> {                                 }
            </main>
        </div>
  );
}

export default Weather;
