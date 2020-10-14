import React, { Component } from "react";
import { fetchSeries } from "./modules/fetchSeries";

class App extends Component {
  state = {
    series: [],
  };

  componentDidMount = async () => {
    const series = await fetchSeries();
    this.setState({ series: series });
  };

  render() {
    let seriesList = this.state.series.map((serie) => {
      return (
        <>
          <img
            src={`${serie.content.images.landscape.url}`}
            alt="viaplay-series"
          />
        </>
      );
    });
    return <div id="viaplay-image">{seriesList}</div>;
  }
}

export default App;
