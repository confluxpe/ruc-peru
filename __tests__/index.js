const rucPeru = require('../lib/index');

test('should fail RUC ABCD0000', async () => {
	const ruc = new rucPeru();
	await expect(ruc.ruc('ABCD0000')).rejects.toEqual(
		'RUC inválido, verifique por favor.'
	);
});

test('should fail RUC 20406494171', async () => {
	const ruc = new rucPeru();
	await expect(ruc.ruc('20406494171')).rejects.toEqual(
		'RUC inválido, verifique por favor.'
	);
});

/*test('should fail RUC 20406494171', async () => {
	const ruc = new rucPeru();
	await expect(ruc.ruc('20406494171')).rejects.toThrow(
		'Request failed with status code 500'
	);
});*/

test('should get RUC 20406494170', async () => {
	const ruc = new rucPeru();
	await expect(ruc.ruc('20406494170')).toBeInstanceOf(Object);
});

test('should get RUC 20406494170', async () => {
	const ruc = new rucPeru();
	const data = await ruc.ruc('20406494170');
	expect(data.nombre).toEqual(
		'CONFLUX MULTISERVICIOS SOCIEDAD COMERCIAL DE RESPONSABILIDAD LIMITADA'
	);
});

test('should fail DNI ABCD0000', async () => {
	const ruc = new rucPeru();
	await expect(ruc.dni('ABCD0000')).rejects.toEqual(
		'El documento no es un DNI válido.'
	);
});

test('should fail DNI 66666666', async () => {
	const ruc = new rucPeru();
	await expect(ruc.dni('66666666')).rejects.toThrow(
		'Request failed with status code 500'
	);
});

test('should get DNI 70479264', async () => {
	const ruc = new rucPeru();
	const data = await ruc.dni('70479264');
	expect(data.name).toEqual('MONTESINOS ARAMAYO JORGE OSMAR');
});

test('should get AFP', async () => {
	const ruc = new rucPeru();
	const data = await ruc.afp();
	expect(data[0].name).toEqual('HABITAT');
});
