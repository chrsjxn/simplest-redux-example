import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux';
import EditableTitle from './editable_title.js'

// React component
class Counter extends Component {
  render() {
    const { value, onIncrease, onReset } = this.props
    return (
      <div>
        <EditableTitle />
        <div>
          <h2 onClick={onIncrease}>{value}</h2>
          <button onClick={onReset}>Reset</button>
        </div>
      </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrease: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
}

//Actions
const increaseAction = { type: 'increase' };
const resetAction = { type: 'reset' };

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    value: state.count
  };
};

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncrease: () => dispatch(increaseAction),
    onReset: () => dispatch(resetAction)
  };
};

// Connected Component
const ConnectedCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default ConnectedCounter;
