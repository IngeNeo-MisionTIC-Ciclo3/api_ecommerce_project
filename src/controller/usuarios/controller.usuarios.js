import { ObjectId } from 'mongodb';
import { getDB } from '../../model/database.js';

const crearUsuario = async (datosUsuario, callback) => {
	if (
		Object.keys(datosUsuario).includes('TipoDocumento') &&
		Object.keys(datosUsuario).includes('Documento') &&
		Object.keys(datosUsuario).includes('Nombres') &&
		Object.keys(datosUsuario).includes('Apellidos') &&
		Object.keys(datosUsuario).includes('Telefono') &&
		Object.keys(datosUsuario).includes('Correo') &&
		Object.keys(datosUsuario).includes('TipoUsuario') &&
		Object.keys(datosUsuario).includes('EstadoUsuario')
	) {
		console.log("Entro a la validación");
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