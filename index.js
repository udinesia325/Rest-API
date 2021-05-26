const express = require("express");
const app = express();
const port = 3000;
let siswa = [
	{
		id: 1,
		nama: "udin",
		umur: 17,
	},
];
app.use("/telahAda", (req, res) => {
	res.json({
		Pesan: "Data telah Ada",
		Error: "Gagal di Tambahkan",
	});
});
//get method
app.get("/", (req, res) => {
	res.json(siswa);
});
app.get("/:id", (req, res) => {
	let id = req.params.id;
	if (!isNaN(id)) {
		res.json(getData(id));
	} else {
		res.json({ pesan: "id tidak valid", status: "404" });
	}
});
//post method
app.post("/:id/:nama/:umur", (req, res, next) => {
	let id = parseInt(req.params.id);
	let nama = req.params.nama;
	let umur = parseInt(req.params.umur);
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
		res.json({
			Pesan: "Url Parameter Yang Anda Masukkan Salah",
			status: "401",
			saran: "Baca dokumentasi lengkapnya di https://github.com/udinesia325/Rest-API.git",
		});
	}
});
//put method
app.put("/:id/:nama/:umur", (req, res) => {
	let id = parseInt(req.params.id);
	let nama = req.params.nama;
	let umur = parseInt(req.params.umur);
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
		res.json(idSalah());
	}
});

//delete method

app.delete("/:id", (req, res) => {
	let id = req.params.id;
	let dataSiswa = siswa;
	if (siswa.some((s) => s.id == id)) {
		let hapusSiswa = dataSiswa.filter((s) => s.id != id);
		siswa = hapusSiswa;
		res.json(siswa);
	} else {
		res.json(idSalah());
	}
});
app.delete("/:id/", (req, res) => {
	res.redirect("/");
});
app.use("/", (req, res) => {
	res.send("<h1>404 Page not found</h1>");
});
app.listen(port, () => console.log(`Server Berjalan Pada Port ${port}`));
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
		status: "400",
		hasil: {
			pesan: "id tidak valid",
		},
	};
}
