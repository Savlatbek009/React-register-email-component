import "../App";
import { Component } from "react";

export default class Form extends Component {
  state = {
    email: "",
    subscription: "",
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  checkedHandler = (e) => {
    this.setState({ [e.target.name]: e.target.checked });
  };
  checkAll = () => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!this.state.subscription) {
      alert("Are you agree terms and condition");
    } else if (!re.test(this.state.email)) {
      alert("Your email isn't match");
    } else {
      alert("Your data sent successfuly");
    }
  };

  render() {
    const { email, subscription } = this.state;

    return (
      <div className="container">
        <input
          className="form-control m-2"
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={this.changeHandler}
        />
        <label className="m-2">
          <input
            type="checkbox"
            name="subscription"
            onChange={this.checkedHandler}
            checked={subscription}
          />
          <span> I agree terms and conditions</span>
        </label>
        <br />
        <div className="btn-send">
          <button onClick={this.checkAll} className="btn btn-primary">
            Send
          </button>
        </div>
      </div>
    );
  }
}
