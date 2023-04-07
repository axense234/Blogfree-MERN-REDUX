// Components
import GreenLine from "../Others/GreenLine";
import SearchResultsContent from "./SearchResultsContent";
// CSS
import "../../styles/SearchResults/SearchResultsTemp.css";

const SearchResultsTemp = ({ query }) => {
  return (
    <div className='search-results-temp'>
      <GreenLine />
      <SearchResultsContent query={query} />
      <GreenLine />
    </div>
  );
};

export default SearchResultsTemp;
