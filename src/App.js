import React, { Component } from "react";

class Arrow extends Component {
  mensagem = () => {
    return "neymar acima de tudo e fernando acima de todos";
  };

  dobro = (x) => {
    return x * 2;
  };

  render() {
    return (
      <div>
        <h1>{this.mensagem()}</h1>
        <h2>{this.dobro(2)}</h2>
      </div>
    );
  }
}

export default Arrow;
