import { connect } from 'react-redux'

import HomeView from '../components/HomeView'

const mapStateToProps = (state) => ({
    tournaments : state.tournaments.tournaments
})

export default connect(mapStateToProps)(HomeView)
