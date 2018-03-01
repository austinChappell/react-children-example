import React, { Component } from 'react';
import '../App.css';

import Container from './Container';

class App extends Component {
  state = {
    isFun: false,
  };

  toggleFun = () => {
    const { isFun } = this.state;
    this.setState({ isFun: !isFun });
  };

  render() {
    const appClassName = this.state.isFun ? 'App crazy' : 'App';
    return (
      <div className={appClassName}>
        <Container funMode={this.state.isFun} toggleFun={this.toggleFun} />
      </div>
    );
  }
}

export default App;
