import { Component } from 'react';

interface CounterProps {
    defaultCount: number;
}

interface CounterState {
    count: number;
}

class Counter extends Component<CounterProps, CounterState> {
    constructor(props: CounterProps) {
      super(props);
  
      this.state = {
        count: props.defaultCount,
      };
    }

    state: CounterState;

    render() {
      return (
        <div>
          <h1>Current Count: {this.state.count}</h1>
          <button
            onClick={() =>
              this.setState(({ count }) => ({
                count: count - 1,
              }))
            }
          >
            -
          </button>
          <button
            onClick={() =>
              this.setState(({ count }) => ({
                count: count + 1,
              }))
            }
          >
            +
          </button>
        </div>
      );
    }
  }

export default Counter;