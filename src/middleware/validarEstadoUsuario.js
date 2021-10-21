import { ObjectId } from 'mongodb';
import { getDB } from '../model/database.js';
import jwt_decode from 'jwt-decode';

const validarEstadoUsuario = async (req, res, next) => {

	const token = req.headers.authorization.split('Bearer ')[1];
	const user = jwt_decode(token)['http://localhost/userData'];
	const DB = getDB();
	await DB.collection('Usuarios').findOne({ email: user.email }, async (err, response) => {
		if (response) {
			console.log(response);
			if (response.estado === 'Rechazado') {
				console.log('No se le permite el ingreso');
				res.sendStatus(401);
				res.end();
			} else {
				console.log('Puede Ingresar');
				next();
			}
		} else {
			next();
		}
	});
};

export default validarEstadoUsuario;
