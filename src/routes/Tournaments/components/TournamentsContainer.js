import React from 'react'
import TournamentsForm from './TournamentsForm'
import TournamentsList from 'components/Tournaments'


export const TournamentsContainer = (props) => (
  <div className="row">
    <div className="col-md-6">
        <h3>Create Tourney</h3>
        <TournamentsForm onSubmit={props.onSubmit}></TournamentsForm>
    </div>
    <TournamentsList tournaments={props.tournaments}></TournamentsList>
  </div>
)

TournamentsContainer.propTypes = {
    tournaments : React.PropTypes.array.isRequired,
    onSubmit : React.PropTypes.func.isRequired
}

export default TournamentsContainer
