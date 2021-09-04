const validadePassword = (req,res,next) => {
  const {password} = req.body
  if(password.length < 6){
    return res.status(400).json(  {
      "error": true,
      "message": "O campo 'password' deve ter pelo menos 6 caracteres"
  })
  }
  next()
}
const validadeFirstName = (req,res,next) =>{
  const{firstName} = req.body
  if(!firstName){
    return res.status(400).json(  {
      "error": true,
      "message": "O campo 'password' deve ter pelo menos 6 caracteres"
  })

  }
  next()
}
const validadelastName = (req,res,next) =>{
  const{lastName} = req.body
  if(!lastName){
    return res.status(400).json(  {
      "error": true,
      "message": "O campo 'password' deve ter pelo menos 6 caracteres"
  })

  }
  next()
}
const validadeemail = (req,res,next) =>{
  const{email} = req.body
  if(!email){
    return res.status(400).json(  {
      "error": true,
      "message": "O campo 'password' deve ter pelo menos 6 caracteres"
  })

  }
  next()
}



module.exports = {validadePassword,validadelastName,validadeFirstName,validadeemail}