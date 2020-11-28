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

// end-point "/kubus" dengan method POST
app.post("/decimal", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let d = Number(req.body.d) // mengambil nilai sisi dari body

    let biner = s * s * s
    let luaspermukaan = 6 * s * s

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        sisi: s,
        volume: volume,
        luaspermukaan: luaspermukaan
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})