# ruc-peru

Librería para buscar RUC, DNI y AFP en la base de datos de SUNAT

```
npm install rucperu
```

## Obtener Token

Se debe crear una cuenta en https://ruc.conflux.pe

## Uso

```
const rucPeru = require('ruc-peru');

(async function(){
	const TOKEN = 'XXXXXX';
	const client = new rucPeru(TOKEN);

	const ruc = await client.ruc('20100128056');
	const dni = await client.dni('06477277');
	const afp = await client.afp();

	console.log({ ruc, dni, afp });
})();
```

## Token oculto

Puede configurar **process.env.RUC_TOKEN** como su token por defecto. En ese caso, ya no es necesario el uso del token en la declaración de la instancia del objeto.
