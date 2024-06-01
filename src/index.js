const express= require('express');
const bodyParser= require('body-parser');
const {PORT}=require('./config/server-config')
const sendBasicEmail = require('./services/emailservice') 
const setUpAndStartServer=()=>{
const app= express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.listen(PORT,()=>{
  console.log(`server started at ${PORT}`);
  sendBasicEmail(
    'hi@gmail.com',
    'nasimsheikh688@gmail.com',
    'hi can we meet',
    'I am shreya'
  );
});

}
setUpAndStartServer();