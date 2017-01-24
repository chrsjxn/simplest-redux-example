import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

class EditableTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {name: this.props.name};
  }

  onChange(event) {
    this.setState({name: event.target.value});
  }

  handleEditEnd(event) {
    if (event.key === 'Enter') {
      this.props.onRenameEnd(this.state.name);
    }
  }

  render() {
    const { name, onRenameStart, renaming } = this.props;
    let title;

    if (renaming) {
      title = (<input value={this.state.name} onChange={this.onChange.bind(this)} onKeyPress={this.handleEditEnd.bind(this)}></input>);
    } else {
      title = (<h1 onClick={onRenameStart}>{name}</h1>)
    }
    return (<div>{title}</div>);
  };
};

EditableTitle.propTypes = {
  name: PropTypes.string.isRequired,
  onRenameStart: PropTypes.func.isRequired,
  onRenameEnd: PropTypes.func.isRequired,
  renaming: PropTypes.bool.isRequired
}

//Actions
const renameStartAction = { type: 'renameStart' };
const renameEndActionType = 'renameEnd';

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    name: state.name,
    renaming: state.renaming
  };
};

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onRenameStart: () => dispatch(renameStartAction),
    onRenameEnd: (name) => dispatch({type: renameEndActionType, name: name})
  };
};

// Connected Component
const ConnectedEditableTitle = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditableTitle);

export default ConnectedEditableTitle;
