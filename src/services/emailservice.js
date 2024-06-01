const { response } = require('express')
const sender = require('../config/email-config')
const sendBasicEmail= (from, to , mailSubject,mailBody)=>{
  sender.sendMail(
    {
      from:from,
      to:to,
      subject:mailSubject,
      text:mailBody
    }
   
  )
  
}
module.exports=sendBasicEmail