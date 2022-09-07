import {useDispatch, useSelector} from "react-redux";
import {useParams, useNavigate} from 'react-router-dom';
import {useEffect} from 'react';
import {callGetMemoAPI, callDeleteMemoAPI ,callUpdateMemoAPI} from '../apis/MemoApiCalls';
import {UPDATE_DETAIL, UPDATE_TITLE , UPDATE_CODE } from '../modules/MemoCreateModule';
import Nav from './Nav'
import style from './componentStyle.css';

function Detail(){
    
    
    const dispatch = useDispatch();
    const memos = useSelector(state => state.memoIndexReducer);
    const state = useSelector(state => state.memoCreateReducer);
    
    
    const navigate = useNavigate();
    const {memoCode} = useParams();
    
    useEffect(
        () => {
            dispatch(callGetMemoAPI())
        }
        ,[]
        );
       

    memos.filter(memo => console.log(typeof(memo.memoCode))) ;
    
    const memo = memos.filter(memo => memo.memoCode === parseInt(memoCode))[0];

    const moveToList = () =>{
        navigate('/board')
    }
    const deleteMemo = () => {
        callDeleteMemoAPI(memoCode);
        console.log('동작하고있나요')
        navigate('/board');
    }

    
    useEffect(()=>{

        dispatch({type:UPDATE_TITLE, payload: memo.memoTitle});
        dispatch({type:UPDATE_DETAIL, payload: memo.memoDetail});
        
    },[memo]);
        
    //
    const updateMemo= ()=>{

        dispatch({type:UPDATE_CODE, payload: memoCode});
        dispatch(callUpdateMemoAPI());
        window.location.replace("/board");
        navigate("/board");
    };

    const onChangeHandlerTitle= (e)=>{
        
        dispatch({type:UPDATE_TITLE, payload : e.target.value});

    };

    const onChangeHandlerDetail= (e)=>{

        dispatch({type:UPDATE_DETAIL, payload : e.target.value});
  
    };
   
    //

    return(
        memo&&(<div className="outerStyle">
            <div className="boaderBoxStyle">
                <div>
                    <Nav currMemoCode = {parseInt(memoCode)}/>
                </div>

                <div>
                    <input className="title" type="text" id='title' name='title' value={state.memoTitle} size={98} onChange={onChangeHandlerTitle} required></input><br/>
                    <textarea className='detail' id='detail' name='detail' value={state.memoDetail } cols={100} rows={5} onChange={onChangeHandlerDetail} required></textarea><br/>
                    {memo.memoDate}
                </div>

                <div>
                    <button onClick={updateMemo}>등록</button>
                    
                    <span>
                        <button onClick={deleteMemo}>삭제</button>
                        <button onClick={moveToList}>목록</button>
                    </span>
                    
                </div>
            </div>
        </div>)
    );
}

export default Detail;