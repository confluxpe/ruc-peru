const axios = require('axios');
const verifyRuc = require('ruc-validate');

const URL_RUC = 'https://ruc.conflux.pe/ruc';
const URL_DNI = 'https://ruc.conflux.pe/dni';
const URL_AFP = 'https://ruc.conflux.pe/afp';

class RucPeru {
	constructor(token) {
		if (token === undefined) {
			token = process.env.RUC_TOKEN;
		}
		this.token = token;
	}
	/**
	 * Método para obtener RUC
	 * @method
	 * @param {String} documento
	 * @returns {Promise}
	 */
	ruc(documento) {
		return new Promise(async (resolve, reject) => {
			if (this.token === undefined) reject('No hay un token establecido.');
			try {
				if (verifyRuc(documento)) {
					const headers = {
						Authorization: this.token,
					};
					const { data } = await axios.get(`${URL_RUC}/${documento}`, {
						headers,
					});
					resolve(data);
				} else {
					reject('RUC inválido, verifique por favor.');
				}
			} catch (error) {
				reject(error);
			}
		});
	}
	/**
	 * Método para obtener DNI
	 * @method
	 * @param {String} documento
	 * @returns {Promise}
	 */
	dni(documento) {
		return new Promise(async (resolve, reject) => {
			if (this.token === undefined) reject('No hay un token establecido.');
			try {
				const pattern = /^[0-9]{8}$/;
				if (!pattern.test(documento))
					reject('El documento no es un DNI válido.');
				const headers = {
					Authorization: this.token,
				};
				const { data } = await axios.get(`${URL_DNI}/${documento}`, {
					headers,
				});
				resolve(data);
			} catch (error) {
				reject(error);
			}
		});
	}
	/**
	 * Método para obtener AFP
	 * @method
	 * @returns {Promise}
	 */
	afp() {
		return new Promise(async (resolve, reject) => {
			if (this.token === undefined) reject('No hay un token establecido.');
			try {
				const headers = {
					Authorization: this.token,
				};
				const { data } = await axios.get(`${URL_AFP}`, {
					headers,
				});
				resolve(data);
			} catch (error) {
				reject(error);
			}
		});
	}
}

module.exports = function (token) {
	return new RucPeru(token);
};
