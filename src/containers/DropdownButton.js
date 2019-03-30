import React from 'react';
import { connect } from 'react-redux';
import { toggleDropdown } from '../actions/dropdowns';
import Button from '../components/Button';

const mapStateToProps = (state) => ({
  switchTo: !state.dropdown.dropdowns || false
});

const mapDispatchToProps = (dispatch) => ({
action: (args) => dispatch(toggleDropdown(0))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Button);
