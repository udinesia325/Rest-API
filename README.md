###Rest-Api
	Selamat Datang Di Aplikasi Rest Api Saya

#Pengenalan 
Api ini sudah mendukung GET, POST, PUT, DELETE
Dimana di setiap Request akan Mengembalikan JSON

-Api ini menerima 3 data, yaitu id, nama, umur
-Secara Default Api ini memiliki data json awal yaitu
[
{
"id":"1",
"nama","udin",
"umur","17"
}
]
-Data dari Api ini dapat disimpan namun hanya sementara, jadi setiap ingin memulai(Restart)  api ini maka data akan kembali ke data json awal seperti di atas ^^^

##Pemasangan
-Lakukan cloning ke repo ini
 https://github.com/udinesia325/Rest-API.git
-Install framework Express ke Folder hasil Cloning
$npm i express --save
-Jalankan API dengan menjalankan perintah
$node index.js
#Catatan
-jika di mesin anda telah terinstall nodemon
-jalankan perintah
$npm start

##Penggunaan

#GET
-method ini dapat menanmpilkan semua data yang ada di API INI
#Endpoint
http://localhost:3000/

-jika anda hanya ingin menampilkan data dengan id tertentu, gunakan endpoint ini

http://localhost:3000/{nomorId}

-Semisal http://localhost:3000/1 maka akan menampilkan data json dengan id 1

#POST
-method ini dapat menambah data baru pada API ini
-aturan parameter 
#EndPoint
http://localhost:3000/{id}/{nama}/{umur}

-contoh http://localhost:3000/2/Riska/16
-maka di dalam API akan bertambah data seperti ini
{
"id":"2",
"nama":"Riska",
"umur":"16"
}
-dan silahkan cek dengan Endpoint GET
#PUT
-method ini dapat mengubah isi dari data API
#EndPoint
http://localhost:3000/{idYangTelahAda}/{nama}/{umur}
-maka API akan merubah isi data dengan id yang telah ada 
-contoh http://localhost:3000/2/Riska Mitta/16
-maka data awal yang seperti ini
{                                                     "id":"2",                                             "nama":"Riska",
"umur":"16"                                           }
-menjadi
{                                                     "id":"2",                                             "nama":"Riska Mitta",
"umur":"16"                                           }
#Catatan
-id di dalam API ini bersifat permanen dan tidak dapat di ubah
#DELETE
-method ini dapat menghapus data di dalam API berdasarkan id
#EndPoint
- http://localhost:3000/{id}
-contoh http://localhost:3000/2
-maka data json dengan id 2 akan terhapus


##API ini masih sangat banyak kesalahan di dalamnya, kami mohon maaf. kritik dan saran kami terima

#Silahkan di aplikasikan se kreatif mungkin
-jangan di salahkan gunakan



######Jangan Lupa Titik Koma

