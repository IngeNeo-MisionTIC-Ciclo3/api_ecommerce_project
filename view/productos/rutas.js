import Express from 'express';
import {
	consultarTodosProductos,
	crearProducto,
	editarProducto,
	eliminarProducto
} from '../../controller/productos/controller.js';

//Router se usa para poder tomar la decision de que ruta debe tomar el sistema en determinada peticion
const rutasProducto = Express.Router();

const AllCallback = (res) => (err, result) => {
	if (err) {
		res.status(500).send('Error en operacion con los Productos');
	} else {
		res.json(result);
	}
};

rutasProducto.route('/Productos').get((req, res) => {
	console.log('alguien hizo get en la ruta /Productos');
	consultarTodosProductos(AllCallback(res));
});

rutasProducto.route('/Productos/:id').patch((req, res) => {
	console.log('alguien hizo patch en la ruta /Productos');
	editarProducto(req.params.id, req.body, (AllCallback(res)));
});

rutasProducto.route('/Productos/:id').delete((req, res) => {
	console.log('alguien hizo delete en la ruta /Productos');
	eliminarProducto(req.params.id, AllCallback(res));
});

rutasProducto.route('/Productos').post((req, res) => {
	crearProducto(req.body, (AllCallback(res)));
});

export default rutasProducto;
