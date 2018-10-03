import React, {Component} from 'react';

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()};
    console.log('Hola esto es desde el constructor')
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    console.log('Hola esto es dede el component did mount')
  }

  tick() {
    this.setState({date: new Date()})
    console.log('Hola esto se ejecuta cada vez que se hace un setState')
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
    console.log('Hola esto es dede el component did unmount')
  }

  render() {
    return <div>{this.state.date.toLocaleTimeString()}</div>
  }
}

export default Clock;