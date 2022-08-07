import { useState, useEffect } from "react";
import * as playersService from '../../services/dataService';
import { useAuthContext } from "../../contexts/AuthContext";
import PlayerCard from "../PlayerCard/PlayerCard";

const MyPlayers = ( { player } ) => {
    const [ players, setPlayers] = useState([]) 
    const { user } = useAuthContext();
    
        useEffect(() => {
            playersService.getMyPlayers(user._id)
                .then(playerData => {
                    setPlayers(playerData);
                });
        }, []);
    return (
        <section id="my-players-page" className="my-players">
            <h1>My Players</h1>
                {players.length > 0 
                    ? players.map(x => <PlayerCard key={x._id} player={x} /> )
                    : <h3 className='no-players'>There are no players yet</h3>}        
        </section>
    )
    }

export default MyPlayers;