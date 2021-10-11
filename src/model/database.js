import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });

const Conexion = process.env.DATABASE_URL;

const client = new MongoClient(Conexion, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

let database;

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