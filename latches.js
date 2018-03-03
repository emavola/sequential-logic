const Bem = require('boolean-exp-minimizer');

const SR = (len, nameS, nameR, variables) => {
	this.bS = new Bem(len, {name: nameS, alpha: variables});
	this.bR = new Bem(len, {name: nameR, alpha: variables});

	this.pushBit = (nowBit, afterBit, minTerm) => {
		if (nowBit & afterBit) {
			this.bS.pushDontCare(minTerm);
		} else if (nowBit & afterBit) {
			this.bS.push(minTerm);
		}

		if (!(nowBit | afterBit)) {
			this.bR.pushDontCare(minTerm);
		}
	};

	this.getExpression = () => {
		return [this.bS, this.bR];
	};
};

const JK = (len, nameJ, nameK, variables) => {
	this.bJ = new Bem(len, {name: nameJ, alpha: variables});
	this.bK = new Bem(len, {name: nameK, alpha: variables});

	this.pushBit = (nowBit, afterBit, minTerm) => {
		if (nowBit) {
			this.bJ.pushDontCare(minTerm);
			if (afterBit) {
				this.bK.push(minTerm);
			}
		} else {
			this.bK.pushDontCare(minTerm);
			if (afterBit) {
				this.bJ.push(minTerm);
			}
		}
	};

	this.getExpression = () => {
		return [this.bJ, this.bK];
	};
};

const D = (len, nameD, variables) => {
	this.bD = new Bem(len, {name: nameD, alpha: variables});

	this.pushBit = (nowBit, afterBit, minTerm) => {
		if (afterBit) {
			this.bD.push(minTerm);
		}
	};

	this.getExpression = () => {
		return [this.bD];
	};
};

const T = (len, nameT, variables) => {
	this.bT = new Bem(len, {name: nameT, alpha: variables});

	this.pushBit = (nowBit, afterBit, minTerm) => {
		if (nowBit ^ afterBit) {
			this.bT.push(minTerm);
		}
	};

	this.getExpression = () => {
		return [this.bT];
	};
};

module.exports = {
	SR,
	JK,
	D,
	T
};
