const memoQuery = require('../database/memo-query');
const MemoDTO = require('../dto/memo-response-dto');

exports.selectAllMemos = (connection) => {

    return new Promise((resolve, reject) => {
        connection.query(memoQuery.selectAllMemos(), (err,results, fields) => {
            
            if(err){
                console.log('err :', err);
                reject(err);
            }
            
            console.log('results: ', results);

            const memos = [];
            for(let i=0; i < results.length; i++){
                memos.push(new MemoDTO(results[i]));
            }
            resolve(memos);
        });

    });
};

exports.insertNewMemo = (connection, memo) => {

    connection.query(memoQuery.insertNewMemo(),
    [memo.memoTitle,memo.memoDetail,memo.memoImage]
    )

    connection.query(memoQuery.alignMemos1());
    connection.query(memoQuery.alignMemos2());
}

exports.updateMemo = (connection, memo) => {

    console.log(memo.memoTitle, memo.memoDetail , memo.memoCode)
    connection.query(memoQuery.updateMemo(),
    [memo.memoTitle, memo.memoDetail , memo.memoCode]
    )
}

exports.deleteMemo = (connection ,memoCode) => {
    


    results = connection.query(memoQuery.deleteMemo(),memoCode);
    connection.query(memoQuery.alignMemos1());
    connection.query(memoQuery.alignMemos2());

    return results;
    

}