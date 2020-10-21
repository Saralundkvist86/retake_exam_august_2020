import axios from "axios";

const fetchSeries = async () => {
  let series = await axios.get(
    "https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://content.viaplay.se/pc-se/serier/samtliga"
  );
  return series.data._embedded["viaplay:blocks"][0]._embedded[
    "viaplay:products"
  ];
};

export { fetchSeries };
