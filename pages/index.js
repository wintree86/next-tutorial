import React from "react";
import styles from "../styles.scss";

class App extends React.PureComponent {
  render() {
    return (
      <div className={styles.example}>
        Hello world 
        <p>scoped!</p>
      </div>
    );
  }
}

export default App;
