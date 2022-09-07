// import { useParams } from 'react-router-dom';
// import { useState, useEffect } from 'react';
import {NavLink} from 'react-router-dom';

function MemoDetails({memo}){

    const activeStyle = {
        border : "solid red",
      }

    console.log('memoCode at MemoDetails :'+memo.memoCode);
    return(
        <div className='list'>
            <NavLink className='nav' to={`/board/${memo.memoCode}`}>
                <span>No.{memo.memoCode}</span>
                <span>     {memo.memoTitle}</span>
            </NavLink>
        </div>
    );
}

export default MemoDetails;