const express = require('express');
const router = express.Router();
const MemoController = require('../controllers/memo-controller');

router.get('/', MemoController.findAllMemos);
router.post('/', MemoController.registNewMemo);
router.delete('/',MemoController.deleteMemo);
router.put('/',MemoController.updateMemo);

module.exports = router;