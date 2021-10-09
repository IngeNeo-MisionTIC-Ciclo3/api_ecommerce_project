import { ObjectId } from 'mongodb';
import { getDB } from '../../model/database.js';

//Se usa el async y el await para que la funcion espere el resultado de la operacion y luego continue

const crearUsuario = async (datosUsuario, callback) => {
	console.log("Entro a la creación");
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
		// InsertOne se usa para crear un nuevo usuario dentro del documento de Mongo
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
	//Con el findOneAndUpdate buscar el usuario con dicho identificador y lo actualiza
	await DB
		.collection('Usuarios')
		.findOneAndUpdate(identificarUsuario, orden, { upsert: true, returnOriginal: true }, callback);
};

const eliminarUsuario = async (id, callback) => {
	const identificarUsuario = { _id: new ObjectId(id) };
	const DB = getDB();
	//Con el deleteOne buscar el usuario con dicho identificador y lo elimina
	await DB.collection('Usuarios')
	.deleteOne(identificarUsuario, callback);
};

export { crearUsuario, consultarTodosUsuarios, editarUsuario, eliminarUsuario };
