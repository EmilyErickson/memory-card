import './index.css'
import PropTypes from 'prop-types';

export default function RandomCards({cardArray, handleClick}) {

    RandomCards.propTypes = {
        cardArray: PropTypes.array.isRequired,
        handleClick: PropTypes.func.isRequired
    }


    function Card({cardNumber}) {
        Card.propTypes = {
            cardNumber: PropTypes.element.isRequired
        }
        return (
            <img src={"https://picsum.photos/200?random=" + cardNumber} />
        )
    }

    
return (
    <div className="card-container">
        {cardArray.map((card) => (
            <div className='card' key={card.key} onClick={() => handleClick(card)}>
                <Card cardNumber={card.cardNumber}/>
            </div>
        ))}
    </div>
)
}
