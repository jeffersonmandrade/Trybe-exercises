const express = require("express");
const bodyParser = require("body-parser");
const User = require('./models/User')


const { validadePassword,validadelastName,validadeFirstName,validadeemail } = require('./validations')

const app = express();

app.use(bodyParser.json());

app.post(
  "/user",
  validadePassword,
  validadelastName,
  validadeFirstName,
  validadeemail,
  async(req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const result = await User.insertUser(firstName, lastName, email, password)
    console.log(result)
    res.status(201).json(result)
  }
);
app.get('/user',async(req,res) => {
  const result = await User.getAll()
  res.status(200).json(result)
})

app.get('/user/:id', async(req,res) => {
  const{ id } = req.params;
  const result  = await User.getUserId(id)
  if(!result){
    return res.status(404).json(  {
      "error": true,
      "message": "Usuário não encontrado"
  })
  }
  res.status(200).json(result)
})

app.put('/user/:id',(req,res) => {

})


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});