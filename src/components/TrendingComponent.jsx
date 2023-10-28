import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { API_KEY, TRENDING_ENDPOINT } from "../endPoint";
import Button from "../libs/Button";
import GridContainer from "../libs/GridContainer";
import GridItem from "../libs/GridItem";

const TrendingComponent = () => {
  const history = useHistory();
  const [trendingData, setTrendingData] = useState([]);

  async function fetchData() {
    await axios
      .get(
        TRENDING_ENDPOINT +
          "?&api_key=" +
          API_KEY +
          "&limit=20&offset=0&rating=g&bundle=messaging_non_clips"
      )
      .then((response) => setTrendingData(response?.data?.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const goBackToSearch = () => {
    history?.push("/");
  };

  return (
    <div>
      <h1>Trending GIPHY</h1>
      <Button onClick={goBackToSearch} data-testid={"backToSearch"}>Back to Search Items</Button>
      <GridContainer>
        {trendingData?.length > 0 &&
          trendingData.map(function (value, index) {
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

export default TrendingComponent;
