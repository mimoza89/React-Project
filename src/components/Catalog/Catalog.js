import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../../contexts/DataContext';
import styles from './Catalog.module.css';

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

const Catalog = ( ) => {
    const { players} = useContext(DataContext)
    return (
        <section id="catalog">
            <h1> Players Included</h1>
            {players.length > 0
            ? players.map(x => <PlayerCard key={x._id} player={x} /> )
            : <h3 className='no-players'>There are no players yet</h3>
            }        
        </section>
    )
}


export default Catalog;