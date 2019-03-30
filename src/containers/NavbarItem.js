import { connect } from 'react-redux';
import { toggleDropdown } from '../actions/dropdowns';
import NavbarItem from '../components/NavbarItem';

const mapDispatchToProps = {
  toggleDropdown
};

export default connect(
  null,
  mapDispatchToProps,
)(NavbarItem);
