const { connectMysql } = require('../dbconnection');
class AmigosModel {
    static async consultar() {
        let db = await connectMysql();
        let query = db('Amigos');
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('Amigos').where('id_amistad', id);
    }

    static async insertar(datos) {
        let db = await connectMysql();
        const result = await db('Amigos').insert(datos).returning('id_amistad');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectMysql();
        return await db('Amigos').where('id_amistad', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectMysql();
        newData['id_amistad'] = id;
        await db('Amigos').where('id_amistad', id).del();
        await db.insert(newData).into('Amigos');
        return id;
    }
}

module.exports = AmigosModel;