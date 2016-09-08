import React from 'react'
import classes from './Tournaments.scss'

export const TournamentsList = (props) => (
    <div className="col-md-12">
        <h3>Tourney List</h3>
        {props.tournaments.map(function(tournament){
            return <div className={classes.tournamentListItem} key={tournament.id}>
                        <h4>{tournament.tournamentName}</h4>
                        <p><span>Pools</span> {tournament.numOfPools}</p>
                        <p><span>Teams</span> {tournament.numOfTeams}</p>
                    </div>
        })}
    </div>
)

TournamentsList.propTypes = {
    tournaments : React.PropTypes.array.isRequired
}

export default TournamentsList
