const { ResponseTemplate } = require('../helper/template.helper')

function TestUser(req, res) {
    let resp = ResponseTemplate(null, 'Berhasil akses User', null, 200)
    res.json(resp)
}

function TestUserPost(req, res) {
    console.log(req.query.name)
    let objRest = {
        name: req.body.name,
        address: req.body.address
    }
    let resp = ResponseTemplate(objRest, 'Berhasil akses User', null, 200)
    res.json(resp)
}

module.exports = {
    TestUser,
    TestUserPost
}