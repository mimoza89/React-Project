import * as request from './requester';

const baseUrl = 'http://localhost:3030/data/players'

export const getAll = () => request.get(baseUrl);

export const create = (playersData) => request.post(baseUrl, playersData);

export const chooseOnePlayer = (playerId) => request.get(`${baseUrl}/${playerId}`);

export const remove = (playerId) => request.del(`${baseUrl}/${playerId}`);

export const edit = (playerId, playerData) => request.put(`${baseUrl}/${playerId}`, playerData);

export const getMyPlayers = (ownerId) => {
    let query = encodeURIComponent(`_ownerId="${ownerId}"`);

    return request.get(`${baseUrl}/players?where=${query}`);
}
