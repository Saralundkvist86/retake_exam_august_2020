import React, { Component } from "react";
import { fetchSeries } from "./modules/fetchSeries";
import ViaplayHeader from "./ViaplayHeader";
import ViaplayFooter from "./ViaplayFooter";

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
          <div id="viaplay-image">
            <img
              src={serie.content.images.landscape.url}
              alt="viaplay-series"
            />
          </div>
        </>
      );
    });
    return (
      <>
        <ViaplayHeader />
        <div data-cy="series-list">{seriesList}</div>
        <ViaplayFooter />
      </>
    );
  }
}

export default App;
