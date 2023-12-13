const { connectMysql } = require('../dbconnection');
class ComentariosModel {
    static async consultar() {
        let db = await connectMysql();
        let query = db('Comentarios');
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('Comentarios').where('id_comentario', id);
    }

    static async insertar(datos) {
        let db = await connectMysql();
        const result = await db('Comentarios').insert(datos).returning('id_comentario');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectMysql();
        return await db('Comentarios').where('id_comentario', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectMysql();
        newData['id_comentario'] = id;
        await db('Comentarios').where('id_comentario', id).del();
        await db.insert(newData).into('Comentarios');
        return id;
    }
}

module.exports = ComentariosModel;