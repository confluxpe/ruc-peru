const rucConflux = require("../index");

test("should fail with RUC 20406494171 ", async () => {
    const ruc = new rucConflux();
    await expect(ruc.ruc("20406494171")).rejects.toThrow("Request failed with status code 500");
});

test("should get RUC 20406494170 ", async () => {
    const ruc = new rucConflux();
    await expect(ruc.ruc("20406494170")).toBeInstanceOf(Object);
});

test("should get RUC 20406494170 ", async () => {
    const ruc = new rucConflux();
    const data = await ruc.ruc("20406494170");
    expect(data.nombre).toEqual("CONFLUX MULTISERVICIOS SOCIEDAD COMERCIAL DE RESPONSABILIDAD LIMITADA");
});

test("should get DNI 70479264 ", async () => {
    const ruc = new rucConflux();
    const data = await ruc.dni("70479264");
    expect(data.name).toEqual("MONTESINOS ARAMAYO JORGE OSMAR");
});
