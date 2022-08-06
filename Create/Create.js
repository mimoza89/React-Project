import { useContext } from 'react';
import { DataContext } from '../../contexts/DataContext';
import * as playersService from '../../services/dataService';
import styles from './Create.module.css';

const CreatePost = () => {
    const { playerAdd } = useContext(DataContext)

    const onSubmit = (e) => {
        e.preventDefault();
        const playerInfo =  Object.fromEntries(new FormData(e.target))

        playersService.create(playerInfo)
            .then(result => {
                playerAdd(result)
            })
    }
    return (
        <section className={styles['create-post']}>
            <form className={styles['create-form']} onSubmit={onSubmit} >
                <div className={styles['create-container']}>
                <div>
                        <label htmlFor="imageUrl"> Photo: </label>
                        <input className={styles.input} type="text" id="imageUrl" name="imageUrl" defaultValue={''} />
                    </div>
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input className={styles.input} type="text" id="name" name="name" defaultValue={''} />
                    </div>
                    <div>
                        <label htmlFor="nationality">Nationality: </label>
                        <input className={styles.input} type="text" id="nationality" name="nationality" defaultValue={''} />
                    </div>
                    <div>
                        <label htmlFor="age">Age: </label>
                        <input className={styles.input} type="number" id="age" name="age" defaultValue={0}/>
                    </div>
                    <div>
                        <label htmlFor="mostSuccessfulTournament"> Most successful Tournament: </label>
                        <input className={styles.input} type="text" id="mostSuccessfulTournament" name="mostSuccessfulTournament" defaultValue={''}/>
                    </div>
                    <div>
                        <label htmlFor="description"> More info: </label>
                        <input className={styles.input} type="text" id="description" name="description" defaultValue={''}/>
                    </div>

                    <button className={styles.button}> Submit</button>
                
                </div>
            </form>
        </section>
    )
}

export default CreatePost