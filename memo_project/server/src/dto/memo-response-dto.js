class MemoDTO{
    memoCode;
    memoTitle;
    memoDetail;
    memoDate;
    memoImage;

    constructor(data){
        this.memoCode = data.MEMO_CODE;
        this.memoTitle = data.MEMO_TITLE;
        this.memoDetail = data.MEMO_DETAIL;
        this.memoDate = data.MEMO_DATE;
        this.memoImage = data.MEMOIMAGE;
    }
}

module.exports = MemoDTO;