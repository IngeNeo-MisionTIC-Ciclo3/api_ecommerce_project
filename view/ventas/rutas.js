import Express from 'express';
import {
	consultarTodosVentas,
	editarVenta,
	eliminarVenta,
} from '../../controller/ventas/controller.js';

//Router se usa para poder tomar la decision de que ruta debe tomar el sistema en determinada peticion
const rutasVentas = Express.Router();

const AllCallback = (res) => (err, result) => {
	if (err) {
		res.status(500).send('Error en operacion con los Productos');
	} else {
		res.json(result);
	}
};

rutasVentas.route('/Ventas').get((req, res) => {
	console.log('alguien hizo get en la ruta /Ventas');
	consultarTodosVentas(AllCallback(res));
});

rutasVentas.route('/Ventas/:id').patch((req, res) => {
	console.log('alguien hizo patch en la ruta /Ventas');
	editarVenta(req.params.id, req.body, (AllCallback(res)));
});

rutasVentas.route('/Ventas/:id').delete((req, res) => {
	console.log('alguien hizo delete en la ruta /Ventas');
	eliminarVenta(req.params.id, AllCallback(res));
});

export default rutasVentas;