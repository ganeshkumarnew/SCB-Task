import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Input from "../libs/Input";
import Button from "../libs/Button";
import GridContainer from "../libs/GridContainer";
import GridItem from "../libs/GridItem";
import { API_KEY, SEARCH_ENDPOINT } from "../endPoint";

const GiphyFetchComponent = () => {
  const history = useHistory();
  const [gifFetchData, setGifFetchData] = useState([]);
  const [gifInput, setGifInput] = useState("");

  async function fetchData(searchItem) {
    await axios
      .get(SEARCH_ENDPOINT + searchItem + "&api_key=" + API_KEY + "&limit=10")
      .then((response) => setGifFetchData(response?.data?.data))
      .catch((err) => console.log(err));
  }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const handleClick = () => {
    history?.push("/trending");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && event.target.value) {
      setGifInput(event.target.value)
      fetchData(event.target.value);
    }
  };

  const handleSearch = () => {
    if(gifInput){
      fetchData(gifInput);
    }
  };

  return (
    <div>
      <Input
        type="text"
        name="search"
        value={gifInput}
        placeholder="Enter Keyword"
        onKeyDown={handleKeyPress}
        onChange={(e)=>setGifInput(e.target.value)}
        data-testid={"searchInput"}
      />
      <Button type="button" name="Submit" onClick={handleSearch}>
        Search
      </Button>
      <Button $primary onClick={handleClick} data-testid="trending">
        Trending
      </Button>
      <GridContainer>
        {gifFetchData?.length > 0 &&
          gifFetchData.map(function (value, index) {
            return (
              <GridItem>
                <span>
                  <img src={value?.images?.fixed_height?.url} />
                </span>
                {value.title}
              </GridItem>
            );
          })}
      </GridContainer>
    </div>
  );
};

export default GiphyFetchComponent;
