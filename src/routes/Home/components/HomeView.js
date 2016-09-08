import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import classes from './HomeView.scss'
import TournamentsList from 'components/Tournaments'

export const HomeView = (props) => (
  <div>
    <h4>Welcome!</h4>
    <img
      alt='This is a duck, because Redux!'
      className={classes.duck}
      src={DuckImage} />
    {props.tournaments.length ? <TournamentsList tournaments={props.tournaments}></TournamentsList> : null}
  </div>
)

HomeView.propTypes = {
    tournaments : React.PropTypes.array.isRequired
}


export default HomeView
