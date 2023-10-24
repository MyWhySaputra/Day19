const { ResponseTemplate } = require('../helper/template.helper')

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

function TestUser(req, res) {
    let resp = ResponseTemplate(null, 'Berhasil akses User', null, 200)
    res.json(resp)
}

async function TestUserPost(req, res) {

    const { name } = req.body

    const payload = {
        name,
    }

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