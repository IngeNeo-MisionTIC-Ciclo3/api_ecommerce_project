import { ObjectId } from 'mongodb';
import { getDB } from '../../model/database.js';

//Función de creación se recibe el body que se debe incluir en la DB (Ejemplos los cuerpos esta en rutas)
const crearUsuario = async (datosUsuario, callback) => {
	if (
		Object.keys(datosUsuario).includes('tdocumento') &&
		Object.keys(datosUsuario).includes('ndocumento') &&
		Object.keys(datosUsuario).includes('nombres') &&
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

//Creamos la función para consultar todos los usuarios de la base de datos
const consultarTodosUsuarios = async (callback) => {
	const DB = getDB();
	await DB.collection('Usuarios').find({}).toArray(callback);
};

//Función de actualización se recibe el id del usuario y el body que se debe actualizar (Ejemplos los cuerpos esta en rutas)
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

//Función de eliminación se recibe el id del usuario a eliminar.
const eliminarUsuario = async (id, callback) => {
	const identificarUsuario = { _id: new ObjectId(id) };
	const DB = getDB();
	await DB.collection('Usuarios')
		.deleteOne(identificarUsuario, callback);
};

//Exportamos las funciones a usar en rutas
export { crearUsuario, consultarTodosUsuarios, editarUsuario, eliminarUsuario };