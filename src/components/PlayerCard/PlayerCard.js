import styles from './PlayerCard.module.css';
import { Link } from 'react-router-dom';

const PlayerCard = ( {player} ) => {

    return (
        <div className={styles.players}>
            <div className={styles['info-for-player']}>
                <img className={styles.img} src={player.imageUrl} alt="" />
                <h2> Name: {player.name}</h2>
                <Link to={`/catalog/${player._id}`} className={styles['details-button']}>
                    Details
                </Link>
            </div>
        </div>
    )
} 

export default PlayerCard;