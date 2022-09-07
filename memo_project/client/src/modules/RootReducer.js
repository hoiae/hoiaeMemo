import {combineReducers} from 'redux';
import memoCreateReducer from './MemoCreateModule';
import memoIndexReducer from './MemoIndexModule';

const rootReducer = combineReducers({
    memoCreateReducer, memoIndexReducer
});

export default rootReducer;
