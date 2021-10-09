import { ObjectId } from 'mongodb';
import { getDB } from '../../model/database.js';

//Se usa el async y el await para que la funcion espere el resultado de la operacion y luego continue
const consultarTodosProductos = async (callback) => {
	const BD = getDB();
	await BD.collection('Productos').find({}).toArray(callback);
};

const editarProducto = async (id, edicion, callback) => {
	const identificarProducto = { _id: new ObjectId(id) };
	const orden = {
		$set: edicion,
	};
	const DB = getDB();
	//Con el findOneAndUpdate buscar el elemento con dicho identificador y lo actualiza
	await DB
		.collection('Productos')
		.findOneAndUpdate(identificarProducto, orden, { upsert: true, returnOriginal: true }, callback);
};

const eliminarProducto = async (id, callback) => {
	const identificarProducto = { _id: new ObjectId(id) };
	const DB = getDB();
	//Con el deleteOne buscar el elemento con dicho identificador y lo elimina
	await DB.collection('Productos').deleteOne(identificarProducto, callback);
};

export { consultarTodosProductos, editarProducto, eliminarProducto };
