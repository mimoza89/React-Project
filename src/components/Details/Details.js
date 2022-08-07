import { useEffect, useState, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { DataContext } from '../../contexts/DataContext';
import { useAuthContext } from '../../contexts/AuthContext';

import * as playerService from '../../services/dataService';
import * as likeService from '../../services/likeService';
import * as commentService from '../../services/commentsService'
import styles from './Details.module.css';

const Details = () => {
    const navigate = useNavigate();
    const { fetchPlayerDetails, selectPlayer, playerRemove, addComment, addLike } = useContext(DataContext);
    const { user, isAuthenticated } = useAuthContext();
    const { playerId } = useParams();
    const [liked, setIsLiked] = useState(false)
    const [like, setLike] = useState(0)

    const currentPlayer = selectPlayer(playerId);

    const isOwner = currentPlayer._ownerId === user._id;

    useEffect(() => {
        (async () => {
            const playerDetails = await playerService.chooseOnePlayer(playerId);

            const playerComments = await commentService.getCommentsByPlayerId(playerId)
            fetchPlayerDetails(playerId, { ...playerDetails,  comments: playerComments.map(x => `${x.user.email}: ${x.text}`)  });
        })();
    }, [])


    useEffect(() => {

        likeService.getPlayerLikes(playerId)
            .then(likes => {
                addLike(state => ({...state, likes}))
            }
                )
    }, [])

    const likeBtnHandler = () => {

        likeService.like(user._id, playerId)
            .then( result => {
                addLike(state => ({...state, likes: [...state, user._id] }) )

              window.alert('Successfully liked the player!')
              setLike(like + (liked?-1:1))
              setIsLiked(!liked)
            })
        
    }

    const addCommentHandler = ( e ) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const comment = formData.get('comment');


        commentService.create(playerId, comment)
            .then(result => {
                addComment(playerId, comment);
            });
        

    }

    const playerDeleteHandler = () => {
        const confirmation = window.confirm('Are you sure you want to delete this post?');

        if (confirmation) {
            playerService.remove(playerId)
                .then(() => {
                    playerRemove(playerId);
                    navigate('/catalog');
                })
        }
    }

    return (
        <div className="styles.player">
            <div className={styles['info-for-player']}>
                <img className={styles.img} src={currentPlayer.imageUrl} alt="" />
                <h2> Name: {currentPlayer.name}</h2>
                <h3> Nationality: {currentPlayer.nationality}</h3>
                <h4>Age: {currentPlayer.age}</h4>
                <h5>Most successful Tournament: {currentPlayer.mostSuccessfulTournament}</h5> 
                <h6>More info: {currentPlayer.description} </h6>
                { isAuthenticated && currentPlayer._ownerId !== user._id
                ? <button onClick={likeBtnHandler} disabled={liked}>Like</button>
                : null }
                <div className='likes-number'>
                    <span id="likes-total">Likes: {like || 0} </span>
                </div>
                {isOwner
                ? <div className="buttons">
                    <Link to={`/players/${playerId}/edit`} className="btn"> Edit</Link>
                    <button onClick={playerDeleteHandler} className="btn">Delete</button>
                  </div>
                : null
                }
            </div>

            <div className="details-comments">
                <h2>Comments for the player:</h2>
                <ul>
                    {currentPlayer.comments?.map(x =>
                        <li key={x} className="comment">
                            <p> {x}</p>
                        </li>
                    )}
                </ul>

                    {currentPlayer.comments.length === 0 &&
                      <p className="no-comment">No comments.</p>                    
                    }
            </div>

            <div className={styles.comments}>
                {isAuthenticated
                ?<div>
                    <form className={styles['comments-form']} onSubmit={addCommentHandler}>
                        <h1>Comments:</h1>
                        <textarea id="comment" name="comment" type="text" placeholder="Write you comment here"></textarea>
                        <button type="submit">Add your comment</button>
                    </form>
                </div>
                :null}
            </div>
        </div>
)};

export default Details;  