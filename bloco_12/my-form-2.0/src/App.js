import React from 'react';
import Input from './components/Input'
import ComboBox from './components/ComboBox'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      nome:'',
      email:'',
      cpf:'',
      endereco:'',
      cidade:''
    }

  }

  handleChange = ({target:{value,name}}) => {

    if(name==='nome'){
      console.log(name)
      let maiusculo = value.toUpperCase() // pq não da certo???
      console.log(maiusculo)
    this.setState({[name]: maiusculo.toUpperCase() })
    }

    this.setState({[name]: value})

  }

  render(){
    return (
      <main>
        <h1>Formulario de Cadastro</h1>
        <fieldset>
      <form>
        <Input type="text" value={this.state.email} name="email" handleChange={this.handleChange} max="40"  />
        <Input type="text" value={this.state.nome} name="nome" handleChange={this.handleChange} max="50"  />
        <Input type="text" value={this.state.cpf} name="cpf" handleChange={this.handleChange} max="11"  />
        <Input type="text" value={this.state.endereco} name="endereco" handleChange={this.handleChange} max="200" required={'required'} />
        <ComboBox />
        <button type="submit">Submit</button>

      </form>

        </fieldset>
      </main>
    );
  }
}

export default App;
