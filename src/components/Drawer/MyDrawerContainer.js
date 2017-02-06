import { connect } from 'react-redux'
import { toggleDrawer } from './MyDrawermodule'

import MyDrawer from './MyDrawerComponent'

const mapDispatchToProps = {
  toggleDrawer
}

const mapStateToProps = (state) => ({
  open: state.drawerState
})

export default connect(mapStateToProps, mapDispatchToProps)(MyDrawer)
