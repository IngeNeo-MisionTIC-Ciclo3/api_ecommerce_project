import { ObjectId } from 'mongodb';
import { getDB } from '../../model/database.js';

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
	await DB
		.collection('Ventas')
		.findOneAndUpdate(identificarVenta, orden, { upsert: true, returnOriginal: true }, callback);
};

const eliminarVenta = async (id, callback) => {
	const identificarVenta = { _id: new ObjectId(id) };
	const DB = getDB();
	await DB.collection('Ventas').deleteOne(identificarVenta, callback);
};

const agregarVenta = async (datosVenta, callback) => {
	const DB = getDB();
	await DB
		.collection('Ventas')
		.insertOne(datosVenta, callback);
};

export { consultarTodosVentas, editarVenta, eliminarVenta, agregarVenta };