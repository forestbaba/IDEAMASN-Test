import React from 'react'
import './style.scss'
const GameItem = ({ home, away, status, homeTeamScore, awayTeamScore, handleClick }) => {
    return (
        <div className='game' onClick={handleClick}>

            <div>
                <p className='title'>Home team name:</p>
                <p className={homeTeamScore > awayTeamScore ? 'case' : ''}>{home}</p>
            </div>
            <div>
                <p className='title'>Away team name: </p>
                <p className={awayTeamScore > homeTeamScore ? 'case' : ''}>{away}</p>
            </div>
            <div>
                <p className='title'>Home team score:</p>
                <p className='case'>{homeTeamScore}</p>
            </div>
            <div>
                <p className='title'>Away team score:</p>
                <p className='case'>{awayTeamScore}</p>
            </div>

            <div>
                <p className='title'>Game status:</p>
                <p className='case'>{status}</p>
            </div>
        </div>
    )
}

export default GameItem;
