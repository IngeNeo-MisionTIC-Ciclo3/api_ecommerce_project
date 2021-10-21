import { ObjectId } from 'mongodb';
import { getDB } from '../model/database.js';
import jwt_decode from 'jwt-decode';

const validarEstadoUsuario = async (req, res, next) => {

	const token = req.headers.authorization.split('Bearer ')[1];
	const user = jwt_decode(token)['http://localhost/userData'];
	console.log(user);

	// paso 2: consultar el usuario en la BD
	const DB = getDB();
	await DB.collection('Usuarios').findOne({ email: user.email }, async (err, response) => {
		if (response) {
			console.log(response);
			if (response.estado === 'Rechazado') {
				res.sendStatus(401);
				res.end();
			} else {
				console.log('habilitado');
				next();
			}
		} else {
			next();
		}
	});
};

export default validarEstadoUsuario;
