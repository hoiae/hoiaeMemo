exports.selectAllMemos = () => {
    return `
        SELECT
               A.MEMO_CODE
            ,  A.MEMO_TITLE
            ,  A.MEMO_DETAIL
            ,  A.MEMO_DATE
            ,  A.MEMO_IMAGE
          FROM TBL_MEMO A
    `
}

exports.insertNewMemo = () => {
    return`
        INSERT
          INTO TBL_MEMO 
        (MEMO_TITLE, MEMO_DETAIL, MEMO_IMAGE , MEMO_DATE)
        VALUES
        (?,?,?,SYSDATE())
    `
}

exports.updateMemo = () => {
  
    return`
        UPDATE TBL_MEMO
        SET MEMO_TITLE = ?, MEMO_DETAIL = ?
        WHERE MEMO_CODE= ?
    `
}

exports.deleteMemo = () => {

    return`
        DELETE 
          FROM TBL_MEMO
        WHERE MEMO_CODE = (?)

    `
}

exports.alignMemos1=()=>{
    return`
        set @cnt = 0
    `
}

exports.alignMemos2=()=>{
    return`
        update tbl_memo set memo_code=@cnt:=@cnt+1
    `
}