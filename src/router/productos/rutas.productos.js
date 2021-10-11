import Express from 'express';
import {
	consultarTodosProductos,
	crearProducto,
	editarProducto,
	eliminarProducto
} from '../../controller/productos/controller.productos.js';

const rutasProducto = Express.Router();

const AllCallback = (res) => (err, result) => {
	if (err) {
		res.status(500).send('Error en operacion con los Productos');
	} else {
		res.json(result);
	}
};

rutasProducto.route('/productos').get((req, res) => {
	consultarTodosProductos(AllCallback(res));
});

rutasProducto.route('/productos/:id').patch((req, res) => {
	editarProducto(req.params.id, req.body, (AllCallback(res)));
});

rutasProducto.route('/productos/:id').delete((req, res) => {
	eliminarProducto(req.params.id, AllCallback(res));
});

rutasProducto.route('/productos').post((req, res) => {
	crearProducto(req.body, (AllCallback(res)));
});

export default rutasProducto;
