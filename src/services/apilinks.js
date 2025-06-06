class ApiLinks {
	constructor(baseUrl) {
		if (baseUrl) {
			this.baseUrl = baseUrl;
		}
	}
	static getVos() {
		return 'https://api.weirdgloop.org/runescape/vos';
	}

	static getTms() {
		return 'https://runescape.wiki/api.php?format=json&action=parse&prop=text&disablelimitreport=1&text={{Travelling%20Merchant/api%7Coffset=0%7Cformat=simple}}';
	}

	static getThalmund() {
		return 'https://runescape.wiki/api.php?format=json&action=parse&prop=text&disablelimitreport=1&text={{Thalmund%27s%20Wares%20current%20stock}}';
	}
}

module.exports = ApiLinks;
