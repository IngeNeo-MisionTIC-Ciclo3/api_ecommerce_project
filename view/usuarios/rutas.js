import Express from 'express';
import {
	crearUsuario,
	consultarTodosUsuarios,
	editarUsuario,
	eliminarUsuario
} from '../../controller/usuarios/controller.js';

//Router se usa para poder tomar la decision de que ruta debe tomar el sistema en determinada peticion
const rutasUsuario = Express.Router();

const AllCallback = (res) => (err, result) => {
	if (err) {
		res.status(500).send('Error en operacion con los Usuarios');
	} else {
		res.json(result);
	}
};

rutasUsuario.route('/Usuarios').post((req, res) => {
	console.log('Se realiza post en la ruta /Usuarios');
	crearUsuario(req.body, (AllCallback(res)));
});

rutasUsuario.route('/Usuarios').get((req, res) => {
	console.log('Se realiza get en la ruta /Usuarios');
	consultarTodosUsuarios(AllCallback(res));
});

rutasUsuario.route('/Usuarios/:id').patch((req, res) => {
	console.log('Se realiza patch en la ruta /Usuarios');
	editarUsuario(req.params.id, req.body, (AllCallback(res)));
});

rutasUsuario.route('/Usuarios/:id').delete((req, res) => {
	console.log('Se realiza delete en la ruta /Usuarios');
	eliminarUsuario(req.params.id, AllCallback(res));
});

export default rutasUsuario;
