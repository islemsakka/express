const express=require('express')
const app=express()
// app.get('/home',(req,res)=>{
//     res.sendFile(__dirname +'/public/home.html')
// })
// app.get('/OurServices',(req,res)=>{
//     res.sendFile(__dirname +'/public/ourservices.html')
// })
// app.get('/Contact',(req,res)=>{
//     res.sendFile(__dirname +'/public/contact.html')
// })

app.use(OpeningTime=(req,res,next)=>{
    let reqOutput=new Date()
    let HourAt=reqOutput.getHours();
    if (HourAt<8||HourAt>15){res.send('Our office is not open now')}
    next()
})

app.use(express.static(__dirname+'/public')) 


app.listen(3000,(err)=>{
    if (err){console.log("le serveur n'est fonctionnel")}
    else console.log('le serveur fonctionne sur le port 3000' )
})