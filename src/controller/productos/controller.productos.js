import { ObjectId } from 'mongodb';
import { getDB } from '../../model/database.js';


const consultarTodosProductos = async (callback) => {
	const DB = getDB();
	await DB.collection('Productos').find({}).toArray(callback);
};

const editarProducto = async (id, edicion, callback) => {
	const identificarProducto = { _id: new ObjectId(id) };
	const orden = {
		$set: edicion,
	};
	const DB = getDB();
	await DB
		.collection('Productos')
		.findOneAndUpdate(identificarProducto, orden, { upsert: true, returnOriginal: true }, callback);
};

const eliminarProducto = async (id, callback) => {
	const identificarProducto = { _id: new ObjectId(id) };
	const DB = getDB();
	await DB.collection('Productos').deleteOne(identificarProducto, callback);
};

const crearProducto = async (datosProducto, callback)=> {
	if (
		Object.keys(datosProducto).includes('nom_producto') &&
		Object.keys(datosProducto).includes('descripcion') &&
		Object.keys(datosProducto).includes('valorU') &&
		Object.keys(datosProducto).includes('cantidad') &&
		Object.keys(datosProducto).includes('estado')
	) {
		const DB = getDB();
		await DB.collection('Productos').insertOne(datosProducto, callback);
	} else {
		return 'Error no se puede insertar';
	}
};

export { consultarTodosProductos, editarProducto, eliminarProducto, crearProducto };