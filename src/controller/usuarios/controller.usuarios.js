import { ObjectId } from 'mongodb';
import { getDB } from '../../model/database.js';

const crearUsuario = async (datosUsuario, callback) => {
	if (
		Object.keys(datosUsuario).includes('tdocumento') &&
		Object.keys(datosUsuario).includes('ndocumento') &&
		Object.keys(datosUsuario).includes('nombre') &&
		Object.keys(datosUsuario).includes('apellido') &&
		Object.keys(datosUsuario).includes('telefono') &&
		Object.keys(datosUsuario).includes('correo') &&
		Object.keys(datosUsuario).includes('tusuario') &&
		Object.keys(datosUsuario).includes('estado')
	) {
		const DB = getDB();
		await DB.collection('Usuarios').insertOne(datosUsuario, callback);
	} else {
		return 'Error al insertar nuevo usuario';
	}

}

const consultarTodosUsuarios = async (callback) => {
	const DB = getDB();
	await DB.collection('Usuarios').find({}).toArray(callback);
};

const editarUsuario = async (id, edicion, callback) => {
	const identificarUsuario = { _id: new ObjectId(id) };
	const orden = {
		$set: edicion,
	};
	const DB = getDB();
	await DB
		.collection('Usuarios')
		.findOneAndUpdate(identificarUsuario, orden, { upsert: true, returnOriginal: true }, callback);
};

const eliminarUsuario = async (id, callback) => {
	const identificarUsuario = { _id: new ObjectId(id) };
	const DB = getDB();
	await DB.collection('Usuarios')
		.deleteOne(identificarUsuario, callback);
};

export { crearUsuario, consultarTodosUsuarios, editarUsuario, eliminarUsuario };