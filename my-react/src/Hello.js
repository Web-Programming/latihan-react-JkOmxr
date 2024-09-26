import React from "react";

function Hello(props){
    const {name, pesan} = props;
    return(
        <h1>Hallo nama saya {name}, {pesan}</h1>
    )
}

Hello.defaultProps ={
    name: "Admin",
    pesan: "Selamat datang Admin"
};
export default Hello;