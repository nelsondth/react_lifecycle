import React from 'react';
import Clock from '../clock';

class Hello extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Clock/>
  }
}

export default Hello;