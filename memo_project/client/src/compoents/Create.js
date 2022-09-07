import {useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { CallPostMemoAPI} from '../apis/MemoApiCalls';
import {UPDATE_DETAIL, UPDATE_TITLE } from '../modules/MemoCreateModule';
import {useNavigate} from 'react-router-dom';
function Create(){

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const state = useSelector(state => state.memoCreateReducer);

    const onClickHandler= ()=>{

        dispatch(CallPostMemoAPI());
        window.location.replace("/board");
        navigate("/board");
    };
   
    const onChangeHandlerTitle= (e)=>{
        
        dispatch({type:UPDATE_TITLE, payload : e.target.value});

    };

    const onChangeHandlerDetail= (e)=>{
        
        dispatch({type:UPDATE_DETAIL, payload : e.target.value});
  
    };

 
    console.log(state)
    
    return(
        <div className='outerStyle'>
            <h2>새로운 메모 작성</h2>
            <div className='boaderBoxStyle'>
                
                <input className = 'title'type="text" id='title' name='title' size={80} onChange={onChangeHandlerTitle} required></input><br/>
                <textarea className='detail' id='detail' name='detail' cols={82} rows={5}  onChange={onChangeHandlerDetail} required ></textarea><br/>
                <button onClick={onClickHandler}>등록</button>
            </div>
        </div>
    );
}

export default Create;