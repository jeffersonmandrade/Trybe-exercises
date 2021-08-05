import React from 'react';

class Input extends React.Component{
render(){
const{type,handleChange,name,max}=this.props

  return(
    <input type={type} name={name} onChange={handleChange} placeholder={`Digite o ${name}:`} maxlength={max} />
  );
};
};

export default Input