import React from "react";
import styles from "../styles.scss";
import Head from "next/head";
import "isomorphic-unfetch";
import Link from "next/link";

class App extends React.PureComponent {
  static async getInitialProps({ req }) {
    const APP_KEY = "e00fffef01dcf6aefc89f215024ae08f";
    const res = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=Seoul&APPID=${APP_KEY}`
    );
    const json = await res.json();

    return { weathers: json.weather };
  }

  render() {
    return (
      <React.Fragment>
        <Head>
          <title>Next.js Tutorials</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <div className={styles.example}>
          Today is {this.props.weathers[0].main}
          <h3>
            <Link href="/about">
              <a>Go About</a>
            </Link>
          </h3>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
