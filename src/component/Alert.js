import React from 'react';

export default function Alert(props) {
  var cap = (word)=>{
    var newWord = word.toLowerCase();
    return newWord.charAt(0).toUpperCase() + newWord.slice(1);
  }
  return (
    <div style={{height: "50px"}}>
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{cap(props.alert.type)}</strong>: {props.alert.msg}
    </div>}
    </div>
   
  );
}
