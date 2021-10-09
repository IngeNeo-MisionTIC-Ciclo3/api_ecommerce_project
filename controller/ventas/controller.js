import { ObjectId } from 'mongodb';
import { getDB } from '../../model/database.js';

//Se usa el async y el await para que la funcion espere el resultado de la operacion y luego continue
const consultarTodosVentas = async (callback) => {
	const BD = getDB();
	await BD.collection('Ventas').find({}).toArray(callback);
};

const editarVenta = async (id, edicion, callback) => {
	const identificarVenta = { _id: new ObjectId(id) };
	const orden = {
		$set: edicion,
	};
	const DB = getDB();
	//Con el findOneAndUpdate buscar el elemento con dicho identificador y lo actualiza
	await DB
		.collection('Ventas')
		.findOneAndUpdate(identificarVenta, orden, { upsert: true, returnOriginal: true }, callback);
};

const eliminarVenta = async (id, callback) => {
	const identificarVenta = { _id: new ObjectId(id) };
	const DB = getDB();
	//Con el deleteOne buscar el elemento con dicho identificador y lo elimina
	await DB.collection('Ventas').deleteOne(identificarVenta, callback);
};

export { consultarTodosVentas, editarVenta, eliminarVenta };
