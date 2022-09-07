import {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {callGetMemoAPI} from '../apis/MemoApiCalls';
import MemoDetails from '../compoents/MemoDetails';
import {NavLink} from 'react-router-dom';

function Board(){

    const dispatch = useDispatch();
    const memos = useSelector(state => state.memoIndexReducer);
    console.log('result at board : ', memos)
    
    useEffect(
        ()=> {
            dispatch(callGetMemoAPI())
        }
        ,[]
        );
        
    console.log('memos' + memos);

  
    return(
        memos && (
            <div className='outerStyle'>
                <div className = 'boaderBoxStyle'>
                    <div>
                        {memos.map(memo => <MemoDetails key={memo.memoCode} memo={memo}/>)}
                    </div>
                    <div className='createBox'>
                        <NavLink className='nav' to='create'>
                            <div>
                                <h3>메모작성</h3>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    );
}
export default Board;