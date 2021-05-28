const express = require("express");
const app = express();
const {
	get,
	getById,
	postById,
	putById,
	deleteById,
} = require("./controller/url");
const port = 3000;
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/telahAda", (req, res) => {
	res.json({
		Pesan: "Data telah Ada",
		Error: "Gagal di Tambahkan",
	});
});
app.route("/:id").get(getById).post(postById).put(putById).delete(deleteById);
//get method
app.get("/", get);

app.delete("/:id/", (req, res) => {
	res.redirect("/");
});
app.use("/", (req, res) => {
	res.send("<h1>404 Page not found</h1>");
});
app.listen(port, () => console.log(`Server Berjalan Pada Port ${port}`));
