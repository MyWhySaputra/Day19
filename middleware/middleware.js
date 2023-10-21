const { ResponseTemplate } = require('../helper/template.helper')

function PrintSuccess(req, res, next) {
    console.log('Berhasil akses User');
    next();
}

function PrintSuccessRoute(req, res, next) {
    console.log('Berhasil akses User lewat Route level');
    next();
}

function CheckPostReq(req, res, next) {
    if (req.body.name == undefined || req.body.address == undefined) {
        let respErr = ResponseTemplate(null, 'Invalid request', new Error('Invalid request'), 400)
        res.json(respErr)
    }
    next();
}

module.exports = {
    PrintSuccess,
    PrintSuccessRoute,
    CheckPostReq
}