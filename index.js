import Express from 'express';
import Cors from 'cors';
import dotenv from 'dotenv';
import { connectDatabase } from './src/model/database.js';
import rutasProducto from './src/router/productos/rutas.productos.js';
import rutasVentas from './src/router/ventas/rutas.ventas.js';
import rutasUsuario from './src/router/usuarios/rutas.usuarios.js';
import jwt from 'express-jwt';
import jwks from 'jwks-rsa';

//Nos permite usar los archivos .env para tener las rutas en otro lado no visibles en el repo
dotenv.config({ path: './.env' });

const app = Express();

app.use(Express.json());

//Nos permite decirle al servidor que puede recibir peticiones desde cualquier localización, movil, web, etc.
app.use(Cors());

var jwtCheck = jwt({
	secret: jwks.expressJwtSecret({
		cache: true,
		rateLimit: true,
		jwksRequestsPerMinute: 5,
		jwksUri: 'https://ingeneomisionticciclo3ecommerceproject.us.auth0.com/.well-known/jwks.json'
	}),
	audience: 'API-Ecommerce-Project',
	issuer: 'https://ingeneomisionticciclo3ecommerceproject.us.auth0.com/',
	algorithms: ['RS256']
});

app.use(jwtCheck);

//Los middleware de las diferentes Endpoints del aplicativo
app.use(rutasVentas);
app.use(rutasProducto);
app.use(rutasUsuario);

//Función para iniciar el servidor en su escucha, usando el puerto definido desde la variables de entorno
const principal = () => {
	return app.listen(process.env.PORT, () => {
		console.log(`Trabajando en el puerto ${process.env.PORT}`);
	});
};

// Usamos la función de conectar a la base de datos y una vez exista conexión a la misma llama a la función principal
// para que el servidor puedas escuchar peticiones
connectDatabase(principal);