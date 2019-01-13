import React from "react";
import styles from "../styles.scss";

import axios from "axios";
import Page from "../components/Page";

class App extends React.PureComponent {
  static async getInitialProps({ req }) {
    const APP_KEY = "e00fffef01dcf6aefc89f215024ae08f";
    const res = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=Seoul&APPID=${APP_KEY}`
    );
    const json = await res.data;

    return { weathers: json.weather };
  }

  render() {
    return (
      <React.Fragment>
        <Page>
          <div className={styles.example}>
            Today is {this.props.weathers[0].main}
          </div>
        </Page>
      </React.Fragment>
    );
  }
}

export default App;
