const express= require('express');
const bodyParser= require('body-parser');
const {PORT}=require('./config/server-config')
const sendBasicEmail = require('./services/email-service')
const  TickerController= require('./controllers/ticket-controller') 
const setUpJobs= require('./utils/job')
const setUpAndStartServer=()=>{
const app= express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.post('/api/v1/tickets',TickerController.create);
app.listen(PORT,()=>{
  console.log(`server started at ${PORT}`);
setUpJobs();
  // sendBasicEmail(
  //   'hi@gmail.com',
  //   'sharukhsheikh547@gmail.com',
  //   'hi can we meet',
  //   'I am shreya , can we meet i want to  '
  // );
});

}
setUpAndStartServer();