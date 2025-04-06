const express=require(`express`)
const bodyparser=require(`body-parser`)
const {PORT}=require(`./config/index`)
const apiroutes=require(`./routes/index`)
const db=require(`./models/index`);
const app=express();

const serverStart=()=>{
    app.use(bodyparser.json())
    app.use(bodyparser.urlencoded({extended:true}))
    app.use(`/api`,apiroutes);
    app.listen(PORT,()=>{
        console.log("Server started on PORT:",PORT);
        if(process.env.DB_SYNC){
            db.sequelize.sync({alter: true});
            console.log("DB SYNCED");
        }
    })
}
serverStart();