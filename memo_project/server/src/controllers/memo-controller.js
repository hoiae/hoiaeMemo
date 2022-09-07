const { OK } = require('http-status');
const HttpStatus = require('http-status');
const MemoService = require('../services/memo-service');

exports.findAllMemos = async (req, res, next) => {

    const results = await MemoService.findAllMemos();

    res.status(HttpStatus.OK).json({
        status: HttpStatus.OK,
        message: 'successfully found all memos',
        result: results
    });
}

exports.registNewMemo = (req,res,next) => {

    MemoService.registNewMemo(req.body);

}

exports.updateMemo=(req,res,next) => {

    console.log(req.body);
    MemoService.updateMemo(req.body);

   

}

exports.deleteMemo = (req,res,next) => {
   
    console.log('동작좀....서버')
    MemoService.deleteMemo(req.body.memoCode);

    res.status(HttpStatus.OK).json({
        status: HttpStatus.OK,
        message: 'successfully delete memo',
    
    })
}

