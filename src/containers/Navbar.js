import { connect } from 'react-redux'
import Navbar from '../components/Navbar'

const mapStateToProps = (state) => ({
  items: state.navbar
})

export default connect(
  mapStateToProps,
)(Navbar)
