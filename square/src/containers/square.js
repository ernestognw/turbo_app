import React, { Component } from 'react';

type State = {
  size: number,
};

const DEFAULT_STATE = {
  size: 10,
};

class Square extends Component<{}, State> {
  constructor(props){
    super(props);
    this.state = DEFAULT_STATE;
  }

  increase = () => {
    this.setState(prevState => ({
      size: prevState.size + 20,
    }));
  }

  decrease = () => {
    this.setState(prevState => ({
      size: prevState.size - 20,
    }));
  }

  render() {
    const size = this.state.size;
    return(
      <div>
        <button onClick={this.increase} className="increase">Increase Size</button>
        <button onClick={this.decrease} className="decrease">Decrease Size</button>
        <div className="square" style={{width: size, height: size}} />
      </div>
    )
  }
}

export default Square;