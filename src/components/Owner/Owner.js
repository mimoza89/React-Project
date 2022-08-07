import { useContext } from "react";
import { Outlet, useParams, Navigate } from "react-router-dom";

import { useAuthContext } from "../../contexts/AuthContext";
import { DataContext } from "../../contexts/DataContext";

const Owner = ({ children }) => {
    const { selectPlayer } = useContext(DataContext);
    const { user, isAuthenticated } = useAuthContext();
    const { playerId } = useParams();

    const selectedPlayer = selectPlayer(playerId);

    if (!isAuthenticated){
        return <Navigate to='/catalog' replace />
    }

    return children ? children : <Outlet />;
};

export default Owner;
