import { GET_MEMOS } from "../modules/MemoIndexModule";
import { useNavigate } from "react-router-dom";

export function callGetMemoAPI(url){

    const requestURL = url || 'http://192.168.0.50:9409/memos';

    return async function getMemos(dispatch, getState){

        const results = await fetch(requestURL).then(res => res.json())
                           
        console.log('result at api: ', results.result)
        
        dispatch({type: GET_MEMOS , payload:results.result});
    }

}

export function callUpdateMemoAPI(){

    const requestURL = 'http://192.168.0.50:9409/memos'

    return async function updateMemo(dispatch,getState){

        console.log(getState().memoCreateReducer)
        await fetch(requestURL,
            
            {
                method: 'PUT',
                headers:  {'Content-Type': 'application/json'},
                body: JSON.stringify(getState().memoCreateReducer)
            }
        ) 
    }
}

export function CallPostMemoAPI(){
    
    // const navigate = useNavigate();

    const requestURL = 'http://192.168.0.50:9409/memos'

    return async function postMemo(dispatch, getState){

        await fetch(requestURL,
            
            {
                method: 'POST',
                headers:  {'Content-Type': 'application/json'},
                body: JSON.stringify(getState().memoCreateReducer)
            }
        )
    }

}



export async function callDeleteMemoAPI(memoCode){

    const requestURL= 'http://192.168.0.50:9409/memos'

    const result = await fetch(requestURL,
        {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({'memoCode':memoCode})
            }
        )
        
}