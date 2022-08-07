import styles from './Edit.module.css';
import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';

import * as playerService from '../../services/dataService';
import { DataContext } from "../../contexts/DataContext";

const Edit = () => {
    const [currentPlayer, setCurrentPlayer] = useState({});
    const { playerInfoEdit } = useContext(DataContext);
    const { playerId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        playerService.chooseOnePlayer(playerId)
            .then(playerData => {
                setCurrentPlayer(playerData);
            })
    }, [])

    const onEdit = (e) => {
        e.preventDefault();

        const playerData = Object.fromEntries(new FormData(e.target));

        playerService.edit(playerId, playerData)
            .then(result => {
                playerInfoEdit ( {playerId, result} );
                navigate(`/catalog/${playerId}`)
            });
    };





    return (
        <section className={styles['edit-post']}>
        <form className={styles['edit-form']} onSubmit={onEdit} >
            <div className={styles['edit-container']}>
            <div>
                    <label htmlFor="imageUrl"> Photo: </label>
                    <input className={styles.input} type="text" id="imageUrl" name="imageUrl" defaultValue={currentPlayer.imageUrl} />
                </div>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input className={styles.input} type="text" id="name" name="name" defaultValue={currentPlayer.name} />
                </div>
                <div>
                    <label htmlFor="nationality">Nationality: </label>
                    <input className={styles.input} type="text" id="nationality" name="nationality" defaultValue={currentPlayer.nationality} />
                </div>
                <div>
                    <label htmlFor="age">Age: </label>
                    <input className={styles.input} type="number" id="age" name="age" defaultValue={currentPlayer.age}/>
                </div>
                <div>
                    <label htmlFor="mostSuccessfulTournament"> Most successful Tournament: </label>
                    <input className={styles.input} type="text" id="mostSuccessfulTournament" name="mostSuccessfulTournament" defaultValue={currentPlayer.mostSuccessfulTournament}/>
                </div>
                <div>
                    <label htmlFor="description"> More info: </label>
                    <input className={styles.input} type="text" id="description" name="description" defaultValue={currentPlayer.description}/>
                </div>

                <button className={styles.button}> Edit</button>
            
            </div>
        </form>
    </section>
    )
}

export default Edit;