let siswa = [
	{
		id: 1,
		nama: "udin",
		umur: 17,
	},
];

module.exports = {
	get: function (req, res) {
		res.json(siswa);
	},
	getById: function (req, res) {
		let id = req.params.id;
		if (!isNaN(id)) {
			res.json(getData(id));
		} else {
			res.status(401).json({ pesan: "id tidak valid" });
		}
	},
	putById: function (req, res) {
		let id = parseInt(req.params.id);
		let nama = req.body.nama;
		let umur = parseInt(req.body.umur);
		let dataAsli = siswa;
		if (siswa.some((s) => s.id == id)) {
			let ubahData = dataAsli.filter((s) => s.id != id);
			let dataBaru = {
				id,
				nama,
				umur,
			};
			ubahData.push(dataBaru);

			res.json(ubahData);
		} else {
			res.status(401).json(idSalah());
		}
	},
	postById: (req, res, next) => {
		let id = parseInt(req.params.id);
		let nama = req.body.nama;
		let umur = parseInt(req.body.umur);
		if (!isNaN(id) && isNaN(nama) && !isNaN(umur)) {
			let tambahData = {
				id,
				nama,
				umur,
			};
			if (siswa.some((a) => a.id == id)) {
				res.redirect("/telahAda");
			} else {
				siswa.push(tambahData);
				res.json(siswa);
			}
		} else {
			res.status(403).json({
				Pesan: "Url Parameter Yang Anda Masukkan Salah",

				saran: "Baca dokumentasi lengkapnya di https://github.com/udinesia325/Rest-API.git",
			});
		}
	},
	deleteById: (req, res) => {
		let id = req.params.id;
		let dataSiswa = siswa;
		if (siswa.some((s) => s.id == id)) {
			let hapusSiswa = dataSiswa.filter((s) => s.id != id);
			siswa = hapusSiswa;
			res.json(siswa);
		} else {
			res.status(401).json(idSalah());
		}
	},
};

//functions
function getData(a) {
	let data = siswa.filter((b) => b.id == a);
	if (data.length > 0) {
		return data;
	} else {
		return "Data tidak ada";
	}
}

function idSalah() {
	return {
		hasil: {
			pesan: "id tidak valid",
		},
	};
}
