import './index.css'
import PropTypes from 'prop-types';


export default function Scoreboard({currentScore, highestScore}) {
    Scoreboard.propTypes = {
        currentScore: PropTypes.number.isRequired,
        highestScore: PropTypes.number.isRequired,
    }
    return (
    <div>
        <h4>Scoreboard</h4>
        <span>Current Score: {currentScore}</span>
        <span>Highest Score: {highestScore}</span>
    </div>
    )
}
