import "./App.css";
import Form from "./components/Form";
import { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div className="App my-3">
        <div className="d-block">
          <Form />
        </div>
      </div>
    );
  }
}
