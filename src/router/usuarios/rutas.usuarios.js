import Express from 'express';
import {
	crearUsuario,
	consultarTodosUsuarios,
	editarUsuario,
	eliminarUsuario
} from '../../controller/usuarios/controller.usuarios.js';

const rutasUsuario = Express.Router();

const AllCallback = (res) => (err, result) => {
	if (err) {
		res.status(500).send('Error en operacion con los Usuarios');
	} else {
		res.json(result);
	}
};

rutasUsuario.route('/usuarios').post((req, res) => {
	crearUsuario(req.body, (AllCallback(res)));
});

rutasUsuario.route('/usuarios').get((req, res) => {
	consultarTodosUsuarios(AllCallback(res));
});

rutasUsuario.route('/usuarios/:id').patch((req, res) => {
	editarUsuario(req.params.id, req.body, (AllCallback(res)));
});

rutasUsuario.route('/usuarios/:id').delete((req, res) => {
	eliminarUsuario(req.params.id, AllCallback(res));
});

export default rutasUsuario;