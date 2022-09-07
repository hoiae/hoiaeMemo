const getConnection = require('../database/connection');
const MemoRepository = require('../repositories/memo-repo');

exports.findAllMemos = () => {

    return new Promise((resolve, reject) => {

        const connection = getConnection();

        const results = MemoRepository.selectAllMemos(connection);

        connection.end();

        resolve(results);

    });
};

exports.registNewMemo = (memo) => {
    
    const connection = getConnection();

    const results = MemoRepository.insertNewMemo(connection,memo);
}

exports.updateMemo = (memo) =>{

 
    const connection = getConnection();

    MemoRepository.updateMemo(connection,memo);

}

exports.deleteMemo = (memoCode) =>{
    
    console.log('동작하고있나요..? memo-repo')

    const connection = getConnection();

    const results = MemoRepository.deleteMemo(connection, memoCode);
    console.log(results)
}