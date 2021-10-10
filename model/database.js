import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });

//Tomamos el sting de conexion de MongoDB desde el archivo .env
const Conexion = process.env.DATABASE_URL;

//Instanciamos el cliente de mongo
const client = new MongoClient(Conexion, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

//Generamos una variable global para la base de datos
let database;

//Usamos un callback esperando la confimación de la conexion de la base de datos
const connectDatabase = (callback) => {
	client.connect((err, db) => {
		if (err) {
			console.error('Error conectando a la base de datos');
			return 'error';
		}
		database = db.db('EcommerceMinTIC');
		console.log('Conexion exitosa a la base de datos');
		return callback();
	});
};

const getDB = () => {
	return database;
};

export { connectDatabase, getDB };