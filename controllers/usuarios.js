const { response, request } = require('express');

const usuariosGet = (req, res = response) => {
    const { q, nombre, apikey, page, limit } = req.query;
    res.json({
        ok: true,
        msg: 'get api - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const usuariosPut = (req, res = response) => {
    let id = req.params.id;

    res.json({
        ok: true,
        msg: 'put api - controlador',
        id

    });
}

const usuariosPost = (req, res = response) => {
    const body = req.body;
    res.json({
        ok: true,
        msg: 'post api - controlador',
        body
    });
}

const usuariosDelete = (req, res = response) => {
    res.status(400).json({
        ok: true,
        msg: 'delete api - controlador'
    });
}
const usuariosPatch = (req, res = response) => {
    res.status(400).json({
        ok: true,
        msg: 'patch api - controlador'
    });
}


module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}