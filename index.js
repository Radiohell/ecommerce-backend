const server = require ('./app');
const mongoose = require('mongoose')

// mongodb+srv://acontreras145:<C4BEn4eqgW2hbDXi>@eit-64910.yofgiwb.mongodb.net/

async function dbConnect(){
    try{
        await mongoose.connect("mongodb+srv://acontreras145:C4BEn4eqgW2hbDXi@eit-64910.yofgiwb.mongodb.net/ecommerce")
        console.log(`CONEXION A LA DB CORRECTA!`)
        
        server.listen(3000, ()=>{
    console.log('Server is running at port 3000');
})

    } catch (error) {
        console.log(error)
    }
}

dbConnect()





// app.get('/', (req,res) => {
//     console.log(`Endpoint llamado`)
//     res.send('Hello World!');
// })

