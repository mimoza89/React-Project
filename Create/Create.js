
import styles from './Create.module.css';

const CreatePost = () => {
    return (
        <section className={styles['create-post']}>
            <form className={styles['create-form']} onSubmit={onSubmit}>
                <div className={styles['create-container']}>
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

                    <button className={styles.button}> Submit</button>
                
                </div>
            </form>
        </section>
    )
}

export default CreatePost