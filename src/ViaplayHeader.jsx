import React from "react";
import { Header, Segment } from "semantic-ui-react";

const ViaplayHeader = () => {
  return (
    <>
      <Segment inverted>
        <Header as="h1" id="header">
          <img src="https://kundservice.viaplay.se/wp-content/themes/viaplaycs/assets/dist/images/viaplay_white.svg" />
        </Header>
      </Segment>
    </>
  );
};
export default ViaplayHeader;
