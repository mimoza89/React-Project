import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import { DataContext } from '../../contexts/DataContext';
import styles from './Catalog.module.css';

const PlayerCard = ( {player} ) => {

    const { user } = useAuthContext
    return (
        <div className={styles.players}>
            <div className={styles['info-for-player']}>
                <img className={styles.img} src={player.imageUrl} alt="" />
                <h2> Name: {player.name}</h2>
                <h3> Nationality: {player.nationality}</h3>
                <h4>Age: {player.age}</h4>
                <h5>Most successful Tournament: {player.mostSuccessfulTournament}</h5>
                <Link to={`/catalog/${player._id}`} className="details-button">
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