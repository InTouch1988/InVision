import axios from 'axios';
import {fileNameGenerator} from '../Helpers/FileNameGenerator';

describe('Trello API tests', async ()=> {

    const api = axios.create({
        baseURL: 'https://api.trello.com/',
        params: {
            key: '2c44ca660d4976a1bd8157cdcb7c00b6', 
            token: 'ATTAa6d34abf994aa661e1a5a9070c00e29cf2363917564838c81230c7d714055316B854CEB1',
            name: fileNameGenerator() + ' Board'
        }
    });

    let ids = {
        boardId: '',
        toDoListId: '',
        doneListId: '',
        cardId: ''
    }

    it('Create a board', async () => {
        const response = await api.post('1/boards');
        ids.boardId = await response.data.id;
        console.log(await ids.boardId);
    });

    it('Create TODO list', async() => {
        const response = api.post('1/lists', undefined, { params: { idBoard: ids.boardId, name: 'TODO'}});
        ids.toDoListId = await (await response).data.id;
    });

    it('Create DONE list', async() => {
        const response = api.post('1/lists', undefined, { params: { idBoard: ids.boardId, name: 'DONE'}});
        ids.doneListId = await (await response).data.id;
    });

    it('Create a card in TODO list', async() => {
        const response = api.post('1/cards', undefined, { params: { idList: ids.toDoListId, name: 'Some new card'}});
        ids.cardId = await (await response).data.id;
    });

    it('Move a card to DONE list', async() => {
        const response = api.put(`1/cards/${ids.cardId}`, undefined, { params: { idList: ids.doneListId}});
    });

    it('Get all boards', async () => {
        const response = await api.get('1/members/me/boards');
    });

    it('Delete a board', async() => {
        const response = await api.delete(`1/boards/${ids.boardId}`);
        console.log(await response);
    });
});