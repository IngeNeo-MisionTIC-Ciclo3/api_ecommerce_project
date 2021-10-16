### Backend - Proyecto Sitio Web - Venta de prendas de vestir - Equipo 10 Ciclo 3

Desarrollado en NodeJS - Express - MongoDB

### Grupo 10 - Ciclo 3 MinTic - WhatsApp

#### Colaboradores

|     | Colaboradores                        | Interfaz - (Backend)                       |
| --- | ------------------------------------ | ------------------------------------------ |
| `1` | Roger Alexis Valencia Garcia.        | Maestro de producto - Get - Patch - Delete |
| `2` | Diana Marcela Pinilla Ortegón        | Registro de producto - Post                |
| `3` | Rafael Alejandro Lancheros Rodríguez | Maestro de venta - Get - Patch - Delete    |
| `4` | Leidy Viviana Gallardo Rico          | Registro de venta - Post                   |
| `5` | Javier Esteban Romero Medina         | Maestro de usuario - Get - Patch - Delete  |

### Link al tablero de Trello

`<link>` : [Tablero de Trello ](https://trello.com/invite/b/t2gHdrIk/a17019d3002206077d24e6f8f3b0bcd4/scrum-equipo-10 "Tablero de Trello")

### Descripción de rutas y cuerpo del request

Para la eliminación y la modificación del registro se debe enviar el _id":"xxxxxxxxxxxxxxxxxxxx" del elemento dentro de la URl del API_TEST

Delete and PATCH : 'http://localhost:XXXX/ruta/xxxxxxxxxxxxxxxxxxx


#### Administración

##### MAESTRO USUARIOS:

{
method: 'GET',
url: 'http://localhost:XXXX/usuarios/'
};

Ejemplo respuesta esperada:

```
[
{
	"_id": "XXXXXXXXXXXXXXXXXXXXXXX",
	"tdocumento": "Cédula de ciudadanía",
	"ndocumento": 79654258,
	"nombre": "Roger Alexis",
	"apellido": "Valencia García",
	"telefono": 3205557788,
	"correo": "rogervalencia@gmail.com",
	"tusuario": "Administrador",
	"estado": "No Autorizado"
}
]
```

{
	method: 'PATCH',
	url: 'http://localhost:XXXX/usuarios/xxxxxxxxxxxxxxxxxxx',

	data: {
		"tdocumento": "Cédula de ciudadanía",
		"ndocumento": 80203987,
		"nombre": "Roger Alexis",
		"apellido": "Valencia García",
		"telefono": 3205557788,
		"correo": "roger_valencia@yahoo.com",
		"tusuario": "Administrador",
		"estado": "Autorizado"
	}
};

Ejemplo respuesta esperarda:

```
{
	"lastErrorObject": {
		"n": 1,
		"updatedExisting": true
	},
	"value": {
		"_id": "XXXXXXXXXXXXXXXXXXXXXXX",
		"tdocumento": "Cédula de ciudadanía",
		"ndocumento": 79654258,
		"nombre": "Roger Alexis",
		"apellido": "Valencia García",
		"telefono": 3205557788,
		"correo": "rogervalencia@gmail.com",
		"tusuario": "Administrador",
		"estado": "No Autorizado"
	},
	"ok": 1,
	"$clusterTime": {
		"clusterTime": {
		"$timestamp": "7017935252668547074"
		},
		"signature": {
		"hash": "o8NqWHGXF30DKvPmHWbifhWUjRM=",
		"keyId": {
			"low": 1,
			"high": 1623321998,
			"unsigned": false
			}
		}
	},
	"operationTime": {
		"$timestamp": "7017935252668547074"
	}
}
```

{
	method: 'DELETE',
	url: 'http://localhost:XXXX/usuarios/xxxxxxxxxxxxxxxxxxx'
};

Ejemplo respuesta esperarda:

```
{
	"acknowledged": true,
	"deletedCount": 1
}
```

##### PRODUCTOS:

{
method: 'POST',
url: 'http://localhost:XXXX/productos/'

	data: {
		"nom_producto":"Camisa formal",
		"descripcion": "Prueba Crear",
		"valorU": 50000,
		"cantidad": 15,
		"estado": "Disponible"
	}

};

Ejemplo respuesta esperarda:

```
{
	"acknowledged": true,
	"insertedId": "xxxxxxxxxxxxxxxxxxx"
}

```

##### MAESTRO PRODUCTOS:

{
method: 'GET',
url: 'http://localhost:XXXX/productos/'
};

Ejemplo respuesta esperada:

```
[
{
	"_id": "xxxxxxxxxxxxxxxxxxx",
	"nom_producto":"Camisa formal",
	"descripcion": "Prueba Crear",
	"valorU": 50000,
	"cantidad": 15,
	"estado": "Disponible"
}
]
```

{
	method: 'PATCH',
	url: 'http://localhost:XXXX/productos/xxxxxxxxxxxxxxxxxxx',

	data: {
		"nom_producto":"Camisa formal",
		"descripcion": "Prueba Modificar",
		"valorU": 50000,
		"cantidad": 15,
		"estado": "No Disponible"
	}
};

Ejemplo respuesta esperarda:

```
{
	"lastErrorObject": {
		"n": 1,
		"updatedExisting": true
	},
	"value": {
		"_id": "xxxxxxxxxxxxxxxxxxx'",
		"nom_producto":"Camisa formal",
		"descripcion": "Prueba Crear",
		"valorU": 50000,
		"cantidad": 15,
		"estado": "Disponible"
	},
	"ok": 1,
	"$clusterTime": {
		"clusterTime": {
		"$timestamp": "7017935252668547074"
		},
		"signature": {
		"hash": "o8NqWHGXF30DKvPmHWbifhWUjRM=",
		"keyId": {
			"low": 1,
			"high": 1623321998,
			"unsigned": false
			}
		}
	},
	"operationTime": {
		"$timestamp": "7017935252668547074"
	}
}
```

{
	method: 'DELETE',
	url: 'http://localhost:XXXX/productos/xxxxxxxxxxxxxxxxxxx'
};

Ejemplo respuesta esperarda:

```
{
	"acknowledged": true,
	"deletedCount": 1
}
```

##### VENTAS:

{
method: 'POST',
url: 'http://localhost:XXXX/ventas/'

	data: {
		"factura": "FAC-01",
		"id_cliente": "10123654789",
		"nom_cliente": "Cliente1",
		"id_vendedor": "10478912365",
		"nom_vendedor": "Vendedor1",
		"id_producto": "XXXXXXXXXXXX",
		"nom_producto": "Camiseta elegante",
		"cantidad": 2,
		"v_unitario": 80000,
		"v_total": 160000
	}

};

Ejemplo respuesta esperarda:

```
{
	"acknowledged": true,
	"insertedId": "xxxxxxxxxxxxxxxxxxx"
}

```

##### MAESTRO VENTAS:

{
	method: 'GET',
	url: 'http://localhost:XXXX/ventas/'
};

Ejemplo respuesta esperarda:

```
[
{
	"_id": "xxxxxxxxxxxxxxxxxxx",
	"factura": "FAC-01",
	"id_cliente": "10123654789",
	"nom_cliente": "Cliente1",
	"id_vendedor": "10478912365",
	"nom_vendedor": "Vendedor1",
	"id_producto": "XXXXXXXXXXXX",
	"nom_producto": "Camiseta elegante",
	"cantidad": 2,
	"v_unitario": 80000,
	"v_total": 160000
}
]
```

{
	method: 'PATCH',
	url: 'http://localhost:XXXX/ventas/xxxxxxxxxxxxxxxxxxx',

	data: {
		"factura": "FAC-01",
		"id_cliente": "10123654789",
		"nom_cliente": "Cliente1",
		"id_vendedor": "10478912365",
		"nom_vendedor": "Vendedor1",
		"id_producto": "XXXXXXXXXXXX",
		"nom_producto": "Camiseta informal",
		"cantidad": 3,
		"v_unitario": 40000,
		"v_total": 120000
	}
};

Ejemplo respuesta esperarda:

```
{
	"lastErrorObject": {
	"n": 1,
	"updatedExisting": true
	},
	"value": {
		"_id": "xxxxxxxxxxxxxxxxxxx",
		"factura": "FAC-01",
		"id_cliente": "10123654789",
		"nom_cliente": "Cliente1",
		"id_vendedor": "10478912365",
		"nom_vendedor": "Vendedor1",
		"id_producto": "XXXXXXXXXXXX",
		"nom_producto": "Camiseta elegante",
		"cantidad": 2,
		"v_unitario": 80000,
		"v_total": 160000
	},
	"ok": 1,
	"$clusterTime": {
		"clusterTime": {
			"$timestamp": "7017935252668547074"
			},
		"signature": {
			"hash": "o8NqWHGXF30DKvPmHWbifhWUjRM=",
			"keyId": {
			"low": 1,
			"high": 1623321998,
			"unsigned": false
			}
		}
	},
	"operationTime": {
		"$timestamp": "7017935252668547074"
	}
}
```

{
	method: 'DELETE',
	url: 'http://localhost:XXXX/ventas/xxxxxxxxxxxxxxxxxxx'
};

Ejemplo respuesta esperarda:

```
{
	"acknowledged": true,
	"deletedCount": 1
}
```

### Comandos a ejecutar:

Puedes comprobar tu versión de Node con el siguiente comando

`$ node --version`

te recomendamos tener la version v14.17.6

Puedes comprobar tu versión de npm con el siguiente comando

`$ npm --version`

te recomendamos tener la versión v6.14.15 aunque solo usaremos para descargar el gestor de paquetes yarn

Posterior al clonar el repositorio es necesario ejecutar el comando.

`$ npm install -g yarn`

Luego para tener el node_modules y actualizar las dependencias del proyecto ejecutamos.

`$ yarn install`

Luego instalar el demonio para nodeJS

`$ yarn add nodemon -g`

Es necesario configurar el archivo .env con el puerto y el string de conexión a la base de datos MongoDB, posterior a ello =>

Para correr el proyecto en el equipo se usará el comando

`$ yarn start`

### Gracias
