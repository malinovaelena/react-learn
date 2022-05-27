import React from "react";

// *React component*
class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount() {
    this.setTimer()
  }
  setTimer() {
    setInterval(() => {
      console.log(this.state);
    }, 1000)
  }
  shouldComponentUpdate() {
    console.log(this.state);
  }
  render() {
    return <h1>Hello world (as React component)</h1>;
  }
}

export default Welcome;

