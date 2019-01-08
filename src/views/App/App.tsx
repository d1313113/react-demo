import * as React from "react";
import "./App1.scss";

import logo from "./logo1.svg";

class App extends React.Component {
  constructor(props:any) {
    super(props);
  }

  public a(value:string):void {
    console.log(value);
  };


  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title" onClick={ this.a.bind(this, "123") }>Welcome to React hot</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
