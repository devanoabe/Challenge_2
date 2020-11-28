const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library body-parser
const cors = require("cors") // memanggil library cors
const app = express()

// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())

// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))

// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

// menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
})

// end-point "/bmi" dengan method POST
app.post("/bmi", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let tinggi = Number(req.body.tinggi) // mengambil nilai panjang dari body
    let berat = Number(req.body.berat) // mengamil nilai lebar dari body

    let finalbmi = berat/(tinggi * tinggi)
    var message = message

    if(finalbmi < 18.5){
        message = ("kekurangan berat badan")
        }

    else if(finalbmi < 25){
        message = ("normal (ideal).")
        }

    else if(finalbmi < 30){
        message = ("kelebihan berat badan")
        }
    else{
        message = ("kegemukan (obesitas)")
        }    

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        tinggi: tinggi,
        berat: berat,
        bmi: finalbmi,
        status: message
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

