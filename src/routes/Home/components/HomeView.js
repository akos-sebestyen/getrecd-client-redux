import React from 'react'
import classes from './HomeView.scss'
import TournamentsList from 'components/Tournaments'

export const HomeView = (props) => (
  <div>
    <h4>Welcome!</h4>
    {props.tournaments.length ? <TournamentsList tournaments={props.tournaments}></TournamentsList> : null}
  </div>
)

HomeView.propTypes = {
    tournaments : React.PropTypes.array.isRequired
}


export default HomeView
