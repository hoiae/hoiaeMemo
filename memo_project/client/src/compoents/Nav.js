import {useDispatch, useSelector} from "react-redux";
import {showIndex} from "../functions/Functions";
import {callGetMemoAPI} from '../apis/MemoApiCalls';
import {useEffect} from 'react';
import {NavLink} from 'react-router-dom';

function Nav({currMemoCode}){

    const dispatch = useDispatch();
    const memos = useSelector(state => state.memoIndexReducer);


    useEffect(()=>{
        dispatch(callGetMemoAPI)
    },[]);



    /*메모들의 마지막 메모코드 확인*/
    const lastMemoCode = memos[memos.length-1].memoCode;

    const prev = (currMemoCode - 1) < 1 ? undefined : (currMemoCode - 1);
    const curr = currMemoCode;
    const next = (currMemoCode + 1) > lastMemoCode ? undefined : (currMemoCode + 1); 

    const onClickHandelr = () =>{

        // await dispatch(callGetMemoAPI)
        //window.location.replace(`/board/${prev}`);

    }

    console.log(lastMemoCode);
   
    console.log('previndex' + prev);
    console.log('currindex' + curr);
    console.log('nextindex' + next);
    return(
        
        <div>
            {prev&&(        
                <NavLink onClick={onClickHandelr} className='preNextNav' to={`/board/${prev}`}>
                    <div>
                        <span>No.{memos[prev-1].memoCode}</span>
                        <span>     {memos[prev-1].memoTitle}</span>
                    </div>
                </NavLink>)}
            
                {/* {prev&&(        
            <NavLink onClick={onClickHandelr} className='preNextNav' to={`/board/${prev}`}>
            <div>
                <span>No.{memos[prev-1].memoCode}</span>
                <span>     {memos[prev-1].memoTitle}</span>
            </div>
            </NavLink>)} */}
            
            
       
            <NavLink className='currNav' to={`/board/${curr}`}>
            <div>
                 <span>No.{memos[curr-1].memoCode}</span>
                <span>     {memos[curr-1].memoTitle}</span>
            </div>
            </NavLink>
            

            {next&&(
            <NavLink className='preNextNav' to={`/board/${next}`}>
            <div>
                <span>No.{memos[next-1].memoCode}</span>
                <span>     {memos[next-1].memoTitle}</span>
            </div>
            </NavLink>)}
        </div>
        
    );
}

export default Nav;