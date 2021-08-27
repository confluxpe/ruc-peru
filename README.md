# ruc-peru

Library to search RUC on SUNAT database

```
npm install rucperu
```

[🇵🇪 Spanish - Español](https://github.com/confluxpe/ruc-peru/blob/main/README.ES.md)

## Get Token

You have to create an account on https://ruc.conflux.pe

## Use

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

## Explicit token

You can configure **process.env.RUC_TOKEN** as your default token. In that case, it's no longer require the token on instance declaration.
