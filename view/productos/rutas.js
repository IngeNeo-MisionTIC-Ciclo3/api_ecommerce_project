import Express from 'express';
import {
	consultarTodosProductos,
	crearProducto,
	editarProducto,
	eliminarProducto,
	consultarProducto,
} from '../../controller/productos/controller.js';

const rutasProducto = Express.Router();

const AllCallback = (res) => (error, resultado) => {
	if (error) {
		res.status(500).send('Error en operacion con los Productos');
	} else {
		res.json(resultado);
	}
};

rutasProducto.route('/Productos').get((req, res) => {
	console.log('alguien hizo get en la ruta /Productos');
	consultarTodosProductos(AllCallback(res));
});

rutasProducto.route('/Productos').post((req, res) => {
	console.log('alguien hizo post en la ruta /Productos');
	crearProducto(req.body, AllCallback(res));
});

rutasProducto.route('/Productos/:id').patch((req, res) => {
	console.log('alguien hizo patch en la ruta /Productos');
	editarProducto(req.params.id, req.body, AllCallback(res));
});

rutasProducto.route('/Productos/:id').delete((req, res) => {
	console.log('alguien hizo delete en la ruta /Productos');
	eliminarProducto(req.params.id, AllCallback(res));
});

export default rutasProducto;
