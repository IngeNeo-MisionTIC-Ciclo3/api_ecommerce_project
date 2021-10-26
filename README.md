### Backend - Proyecto Sitio Web - Venta de prendas de vestir - Equipo 10 Ciclo 3

Desarrollado en NodeJS - Express - MongoDB

### Grupo 10 - Ciclo 3 MinTic - WhatsApp

#### Colaboradores

|     | Colaboradores                        |
| --- | ------------------------------------ |
| `1` | Roger Alexis Valencia Garcia.        |
| `2` | Diana Marcela Pinilla Ortegón        |
| `3` | Rafael Alejandro Lancheros Rodríguez |
| `4` | Leidy Viviana Gallardo Rico          |
| `5` | Javier Esteban Romero Medina         |

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
	{
		"clientID":"1rCaefPr0j6RjQsGzrmJKPcGcunKCHiW",
		"created_at":"2021-10-23T03:55:14.661Z",
		"email":"javier.rom1911@gmail.com",
		"email_verified":true,
		"family_name":"Romero",
		"given_name":"Javier Esteban",
		"locale":"es-419",
		"name":"Javier Esteban Romero",
		"nickname":"javier.rom1911",
		"picture":"https://lh3.googleusercontent.com/a/AATXAJzuHB0JWr_Mt2FQNRgujfiXh88rLRxVAUAjq-Br=s96-c",
		"updated_at":"2021-10-23T03:55:14.661Z",
		"user_id":"google-oauth2|113315330490166023804",
		"auth0ID":"e3cb12c7ef1f82aa1faedead70dcfaa5",
		"tusuario":"Administrador",
		"estado":"Autorizado",
		"ndocumento":"XXXXXXXXX",
		"tdocumento":"Cédula de Ciudadania",
		"telefono":"3126949137"
	}
}
]
```

{
	method: 'PATCH',
	url: 'http://localhost:XXXX/usuarios/xxxxxxxxxxxxxxxxxxx',

	data: {
		[
			{
				{
					"clientID":"1rCaefPr0j6RjQsGzrmJKPcGcunKCHiW",
					"created_at":"2021-10-23T03:55:14.661Z",
					"email":"javier.rom1911@gmail.com",
					"email_verified":true,
					"family_name":"Romero",
					"given_name":"Javier Esteban",
					"locale":"es-419",
					"name":"Javier Esteban Romero",
					"nickname":"javier.rom1911",
					"picture":"https://lh3.googleusercontent.com/a/AATXAJzuHB0JWr_Mt2FQNRgujfiXh88rLRxVAUAjq-Br=s96-c",
					"updated_at":"2021-10-23T03:55:14.661Z",
					"user_id":"google-oauth2|113315330490166023804",
					"auth0ID":"e3cb12c7ef1f82aa1faedead70dcfaa5",
					"tusuario":"Administrador",
					"estado":"Autorizado",
					"ndocumento":"XXXXXXXXX",
					"tdocumento":"Cédula de Ciudadania",
					"telefono":"3126949137"
				}
			}
		]
	}
};

Ejemplo respuesta esperarda:

```
{
	"lastErrorObject": {
		"n": 1,
		"updatedExisting": true
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
		{"_id":
			{"$oid":"617368ad4ee07322fa0e53c2"},
			"id_cliente":"XXXXXXX",
			"nom_cliente":"Roger Alexis Valencia Garcia",
			"vendedor":{
				"_id":"6161ce3307bec00891feba3d",
				"estado":"Autorizado",
				"ndocumento":{"$numberInt":"1151970864"},
				"tdocumento":"Cedula",
				"telefono":{"$numberDouble":"3126621010.0"},
				"tusuario":"Vendedor",
				"email":"javierromero@gmail.com",
				"name":"Javier Esteban Romero Medica"
				},
			"productos":[[{"_id":"617375e34ee07322fa0e53c3",
				"nom_producto":"Prueba NewProduct",
				"descripcion":"Polombia",
				"valorU":"50000",
				"cantidad":"5",
				"estado":"Disponible",
				"total":{"$numberInt":"250000"}}]],
				"fecha":"2021-10-22",
				"estado":"En proceso"}
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
	data: {
		{"_id":
			{"$oid":"617368ad4ee07322fa0e53c2"},
			"id_cliente":"XXXXXXXX",
			"nom_cliente":"Roger Alexis Valencia Garcia",
			"vendedor":{
				"_id":"6161ce3307bec00891feba3d",
				"estado":"Autorizado",
				"ndocumento":{"$numberInt":"XXXXXXXX"},
				"tdocumento":"Cedula",
				"telefono":{"$numberDouble":"3126621010.0"},
				"tusuario":"Vendedor",
				"email":"javierromero@gmail.com",
				"name":"Javier Esteban Romero Medica"
				},
			"productos":[[{"_id":"617375e34ee07322fa0e53c3",
				"nom_producto":"Prueba NewProduct",
				"descripcion":"Polombia",
				"valorU":"50000",
				"cantidad":"5",
				"estado":"Disponible",
				"total":{"$numberInt":"250000"}}]],
				"fecha":"2021-10-22",
				"estado":"En proceso"}
	}
]
```

{
	method: 'PATCH',
	url: 'http://localhost:XXXX/ventas/xxxxxxxxxxxxxxxxxxx',

	data: {
		{"_id":
			{"$oid":"617368ad4ee07322fa0e53c2"},
			"id_cliente":"XXXXXXXX",
			"nom_cliente":"Roger Alexis Valencia Garcia",
			"vendedor":{
				"_id":"6161ce3307bec00891feba3d",
				"estado":"Autorizado",
				"ndocumento":{"$numberInt":"XXXXXXXX"},
				"tdocumento":"Cedula",
				"telefono":{"$numberDouble":"3126621010.0"},
				"tusuario":"Vendedor",
				"email":"javierromero@gmail.com",
				"name":"Javier Esteban Romero Medica"
				},
			"productos":[[{"_id":"617375e34ee07322fa0e53c3",
				"nom_producto":"Prueba NewProduct",
				"descripcion":"Polombia",
				"valorU":"50000",
				"cantidad":"5",
				"estado":"Disponible",
				"total":{"$numberInt":"250000"}}]],
				"fecha":"2021-10-22",
				"estado":"En proceso"}
	}
};

Ejemplo respuesta esperarda:

```
{
	"lastErrorObject": {
	"n": 1,
	"updatedExisting": true
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
