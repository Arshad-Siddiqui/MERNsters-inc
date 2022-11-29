import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

const Card = ({ card }) => {
  const [{ x}, api] = useSpring(() => ({ x: 0, y: 0 }))

  // Set the drag hook and define component movement based on gesture data
  const bind = useDrag(({ down, movement: [mx, my] }) => {
    api.start({ x: down ? mx : 0, y: down ? my : 0, immediate: down })

    if (mx > 100 && !down) {
      console.log('right')
    }

    if (mx < -100 && !down) {
      console.log('left')
    }
  })


  return (
    <animated.div {...bind()} className="user-card" style={{ x }} >
      <img src={card.profilePic} alt={card.firstName + card.lastName} width="500px" height='300px' draggable='false' />
      <div className="user-card-body-container">
        <div className="user-card-body">
          <h4>
            <b>{card.firstName} {card.lastName}</b>
          </h4>
          <p>{card.interests}</p>
        </div>
      </div>
    </animated.div>
  );
};

export default Card;
