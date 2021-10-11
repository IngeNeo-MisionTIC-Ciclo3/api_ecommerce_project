import Express from 'express';
import {
	consultarTodosVentas,
	editarVenta,
	eliminarVenta,
	agregarVenta,
} from '../../controller/ventas/controller.ventas.js';

const rutasVentas = Express.Router();

const AllCallback = (res) => (err, result) => {
	if (err) {
		res.status(500).send('Error en operacion con los Productos');
	} else {
		res.json(result);
	}
};

rutasVentas.route('/ventas').get((req, res) => {
	consultarTodosVentas(AllCallback(res));
});

rutasVentas.route('/ventas/:id').patch((req, res) => {
	editarVenta(req.params.id, req.body, (AllCallback(res)));
});

rutasVentas.route('/ventas/:id').delete((req, res) => {
	eliminarVenta(req.params.id, AllCallback(res));
});

rutasVentas.route('/ventas').post((req, res) => {
	agregarVenta(req.body, AllCallback(res));
});

export default rutasVentas;