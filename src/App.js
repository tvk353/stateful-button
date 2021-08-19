import { Component } from "react";
import "./App.css";

class App extends Component {
  state = { isLoading: true };

  renderLoadingButton = () => {
    const { isLoading } = this.state;
    if (isLoading) {
      return (
        <>
          <button className="cancel">Cancel</button>
          <button className="loading">Loading</button>
        </>
      );
    }
    return <button className="cancel">Cancel</button>;
  };

  render() {
    return <div className="container">{this.renderLoadingButton()}</div>;
  }
}

export default App;
