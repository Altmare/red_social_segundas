const { connectMysql } = require('../dbconnection');
class LikesModel {
    static async consultar() {
        let db = await connectMysql();
        let query = db('Likes');
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('Likes').where('id_like', id);
    }

    static async insertar(datos) {
        let db = await connectMysql();
        const result = await db('Likes').insert(datos).returning('id_like');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectMysql();
        return await db('Likes').where('id_like', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectMysql();
        newData['id_like'] = id;
        await db('Likes').where('id_like', id).del();
        await db.insert(newData).into('Likes');
        return id;
    }
}

module.exports = LikesModel;