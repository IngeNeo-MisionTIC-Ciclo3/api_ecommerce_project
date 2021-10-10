import Express from 'express';
import {
	crearUsuario,
	consultarTodosUsuarios,
	editarUsuario,
	eliminarUsuario
} from '../../controller/usuarios/controller.js';

const rutasUsuario = Express.Router();

const AllCallback = (res) => (err, result) => {
	if (err) {
		res.status(500).send('Error en operacion con los Usuarios');
	} else {
		res.json(result);
	}
};

rutasUsuario.route('/Usuarios').post((req, res) => {
	crearUsuario(req.body, (AllCallback(res)));
});

rutasUsuario.route('/Usuarios').get((req, res) => {
	consultarTodosUsuarios(AllCallback(res));
});

rutasUsuario.route('/Usuarios/:id').patch((req, res) => {
	editarUsuario(req.params.id, req.body, (AllCallback(res)));
});

rutasUsuario.route('/Usuarios/:id').delete((req, res) => {
	eliminarUsuario(req.params.id, AllCallback(res));
});

export default rutasUsuario;