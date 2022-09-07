import { createActions, handleActions } from 'redux-actions';

const initialState={
    
    memoTitle:"",
    memoDetail:"",
    memoImage:"",
    memoCode:""
};

export const UPDATE_TITLE ='create/UPDATE_TITLE';
export const UPDATE_DETAIL ='create/UPDATE_DETAIL';
export const UPDATE_CODE='create/UPDATE_CODE';


const {create : {update_title,update_detail}} = createActions({
    [UPDATE_TITLE]:() => {},
    [UPDATE_DETAIL]:() => {},
    [UPDATE_CODE]: () => {}
});

const memoCreateRedcer = handleActions(
    {
        [UPDATE_TITLE] : (state, {payload}) => {

            return({
                ...state,
                memoTitle: payload   
            });
        },
        [UPDATE_DETAIL] : (state,{payload}) =>{

            return({
                ...state,
                memoDetail: payload   
            });
        },
        [UPDATE_CODE] : (state,{payload}) =>{

            return({
                ...state,
                memoCode: payload   
            });
        }
    },
    initialState
);

export default memoCreateRedcer;