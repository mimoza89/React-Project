import * as request from "./requester";

const baseUrl = 'http://localhost:3030/data/comments';

export const create = (playerId, comment) =>
    request.post(baseUrl, { playerId, text: comment });

export const getCommentsByPlayerId = (playerId) => {
    const relations = encodeURIComponent(`user=_ownerId:users`);
    const search = encodeURIComponent(`playerId="${playerId}"`);

    return request.get(`${baseUrl}?where=${search}&load=${relations}`);
}
