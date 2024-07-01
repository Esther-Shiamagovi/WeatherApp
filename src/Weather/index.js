const SearchBar = () => {
    const [location, setLocation] = useState('');
    const [weatherData, setWeatherData] = useState(null);
  
    const handleSearch = async () => {
      try {
        const response = await fetch(`YOUR_API_ENDPOINT?city=${location}`);
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    return (
      <div>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter city"
        />
        <button onClick={handleSearch}>Search</button>
        {/* Display weather data */}
      </div>
    );
  };
  
  export default SearchBar;