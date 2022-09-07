import { createActions, handleActions } from 'redux-actions';


const initialState = [];


export const GET_MEMOS = 'memos/GET_MEMOS';

const actions = createActions({
    [GET_MEMOS]: () => {}
});


const memoIndexReducer = handleActions(
    {
        [GET_MEMOS]: (state, { payload }) => {

            return payload;
        }
    },
    initialState
);

export default memoIndexReducer;