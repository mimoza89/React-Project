import { createContext, useReducer, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import * as dataService from '../services/dataService';

export const DataContext = createContext();

const playerReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_PLAYERS':
            return action.payload.map(x => ({ ...x, comments: [], likes: [] }));
        case 'ADD_PLAYER':
            return [...state, action.payload];
        case 'FETCH_PLAYER_DETAILS':
        case 'EDIT_PLAYER_INFO':
            return state.map(x => x._id === action.playerId ? action.payload : x);
        case 'REMOVE_PLAYER':
            return state.filter(x => x._id !== action.playerId);
        case 'ADD_COMMENT':
            return state.map(x => x._id === action.playerId ? {...x, comments: [...x.comments, action.payload]} : x)
        case 'ADD_LIKE':
            return state.map (x => x._id === action.playerId ? {...x, likes:[...x.likes, action.payload]}: x)
            
        default:
            return state;
    }
};

export const PlayerProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [players, dispatch] = useReducer(playerReducer, []);

    useEffect(() => {
        dataService.getAll()
            .then(result => {
                const action = {
                    type: 'ADD_PLAYERS',
                    payload: result
                };

                dispatch(action);
            });
    }, []);

    const selectPlayer = (playerId) => {
        return players.find(x => x._id === playerId) || {};
    };

    const fetchPlayerDetails = (playerId, playerDetails) => {
        dispatch({
            type: 'FETCH_PLAYER_DETAILS',
            payload: playerDetails,
            playerId,
        })
    }

    const playerAdd = (playerData) => {
        dispatch({
            type: 'ADD_PLAYER',
            payload: playerData,
        })

        navigate('/catalog');
    };

    const playerInfoEdit = (playerId, playerData) => {
        dispatch({
            type: 'EDIT_PLAYER_INFO',
            payload: playerData,
            playerId,
        });
    };

    const playerRemove = (playerId) => {
        dispatch({
            type: 'REMOVE_PLAYER',
            playerId
        })
    }

    const addComment = ( playerId, comment) => {
        dispatch({
            type: 'ADD_COMMENT',
            payload: comment,
            playerId
        })
    }

    const addLike = ( playerId, like) => {
        dispatch({
            type: 'ADD_COMMENT',
            payload: like,
            playerId
        })
    }
    return (
        <DataContext.Provider value={{
            players,
            playerAdd,
            playerInfoEdit,
            fetchPlayerDetails,
            selectPlayer,
            playerRemove,
            addLike,
            addComment
        }}>
            {children}
        </DataContext.Provider>
    );
}
