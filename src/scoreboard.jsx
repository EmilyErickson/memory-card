import './index.css'
import PropTypes from 'prop-types';


export default function Scoreboard({currentScore, highestScore}) {
    Scoreboard.propTypes = {
        currentScore: PropTypes.number.isRequired,
        highestScore: PropTypes.number.isRequired,
    }

    return (
    <div className='scoreboard'>
        <h3 className='scoreboard-title'>Scoreboard</h3>
        <span className='score current-score'>Current Score: {currentScore}</span>
        <span className='score high-score'>Highest Score: {highestScore}</span>
    </div>
    )
}
