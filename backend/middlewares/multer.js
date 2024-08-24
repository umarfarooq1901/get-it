const multer  = require('multer');

const upload = multer({dest: 'uploads/'});

const multimid = upload.single('image');


module.exports = multimid