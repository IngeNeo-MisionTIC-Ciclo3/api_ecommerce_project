import Express from 'express';
import {
	crearUsuario,
	consultarTodosUsuarios,
	editarUsuario,
	eliminarUsuario
} from '../../controller/usuarios/controller.usuarios.js';

//Definimos la variable para usar las rutas de Express
const rutasUsuario = Express.Router();

//Creamos una función estandarizada para las respuestas hacia el FrontEnd
const AllCallback = (res) => (err, result) => {
	if (err) {
		res.status(500).send('Error en operacion con los Usuarios');
	} else {
		res.json(result);
	}
};

//Definimos la ruta a usar para el metodo GET en usuarios, esto para obtener todos los usuarios de MongoDB
rutasUsuario.route('/usuarios').get((req, res) => {
	consultarTodosUsuarios(AllCallback(res));
});

/*Definimos la ruta a usar para el metodo POST en usuarios, esto para realizar la creación del nuevo usuario en el sistema
* Se envia un request con los datos a insertar en la DB
* el cuerpo seria como el siguiente:
* data: {
*		"tdocumento": "Cédula de ciudadanía",
*		"ndocumento": 80203987,
*		"nombre": "Roger Alexis",
*		"apellido": "Valencia García",
*		"telefono": 3205557788,
*		"correo": "roger_valencia@yahoo.com",
*		"tusuario": "Administrador",
*		"estado": "Pendiente"
*	}
* la respuesta se procesa con la funcion AllCallback que retorna al FrontEnd el estado de la solicitud
*/
rutasUsuario.route('/usuarios').post((req, res) => {
	crearUsuario(req.body, (AllCallback(res)));
});

/*Definimos la ruta a usar para el metodo PATCH en usuarios, esto para realizar la actualización de un usuario en especifico
* Se envia un request con el id que se quiere actualizar asi como los datos a cambiar en la DB
* el cuerpo seria como el siguiente:
* data: {
*		"tdocumento": "Cédula de ciudadanía",
*		"ndocumento": 80203987,
*		"nombre": "Roger Alexis",
*		"apellido": "Valencia García",
*		"telefono": 3205557788,
*		"correo": "roger_valencia@yahoo.com",
*		"tusuario": "Administrador",
*		"estado": "Autorizado"
*	}
* la respuesta se procesa con la funcion AllCallback que retorna al FrontEnd el estado de la solicitud
*/
rutasUsuario.route('/usuarios/:id').patch((req, res) => {
	editarUsuario(req.params.id, req.body, (AllCallback(res)));
});

/*Definimos la ruta a usar para el metodo DELETE en usuarios, esto para realizar la eliminación de un producto en especifico
* Se envia un request con el id que se desea eliminar
* la respuesta se procesa con la funcion AllCallback que retorna al FrontEnd el estado de la solicitud
*/
rutasUsuario.route('/usuarios/:id').delete((req, res) => {
	eliminarUsuario(req.params.id, AllCallback(res));
});

//Se exporta la ruta para usarla posteriormente
export default rutasUsuario;