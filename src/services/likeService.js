import * as request from './requester';

const baseUrl = 'http://localhost:3030/data'

export const like = ( userId, playerId) => request.post(`${baseUrl}/likes`, {userId, playerId})

export const getPlayerLikes = ( playerId) => {
    const query = encodeURIComponent(`playerId="${playerId}"`);
    return request.get(`${baseUrl}/likes?select=userId&where=${query}`)
        .then(res => res.map(x => x.userId))
} 