const sr = (nowBit, afterBit) => {
	let s;
	let r;

	if (nowBit & afterBit) {
		s = '-';
	} else {
		s = nowBit & afterBit;
	}

	if (nowBit | afterBit) {
		r = 0;
	} else {
		r = '-';
	}

	return [s, r];
};

const jk = (nowBit, afterBit) => {
	let j;
	let k;

	if (nowBit) {
		j = '-';
		k = afterBit;
	} else {
		j = afterBit;
		k = '-';
	}
	return [j, k];
};

const d = (nowBit, afterBit) => {
	return afterBit;
};

const t = (nowBit, afterBit) => {
	return nowBit ^ afterBit;
};

module.exports = {
	sr,
	jk,
	d,
	t
};
