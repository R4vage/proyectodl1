import React, { useState } from "react"
import "../CSS/LoginComponent.css"


export default function RegisterComponent (){

    const [registerData, setRegisterData] = useState({
        nombre: "",
        apellido: "",
        email: "",
        password: "",
    })

    const handleChange = (event) => {
        setRegisterData({ ...registerData, [event.target.name]: event.target.value });
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (registerData.email.length == 0, registerData.password.length == 0, registerData.nombre.length == 0, registerData.apellido.length == 0)
        {
            alert("Debés completar todos los campos :(")  
        }
        else {
            alert("Te has registrado con éxito :)")  
            console.log(registerData)
        }
    };

    
    return(
    <>
        <div className="Login">
            <div className="LoginComponent">
                <h1>Registro</h1>
                <form className="loginFormulario" onSubmit={handleSubmit}>
                    <h3 className="loginFormularioSubtitle">Por favor, rellene los campos con sus datos</h3>

                    <label className="loginFormularioInputContainer">
                        <h3>Nombre:</h3>
                        <input type="text" name="nombre" className="loginFormularioInput" placeholder="Ingrese su nombre" value={registerData.nombre} onChange={handleChange}/>
                    </label>

                    <label className="loginFormularioInputContainer">
                        <h3>Apellido:</h3>
                        <input type="text" name="apellido" className="loginFormularioInput" placeholder="Ingrese su apellido" value={registerData.apellido} onChange={handleChange}/>
                    </label>

                    <label className="loginFormularioInputContainer">
                        <h3>E-mail:</h3>
                        <input type="text" name="email" className="loginFormularioInput" placeholder="Ingrese su e-mail" value={registerData.email} onChange={handleChange}/>
                    </label>

                    <label className="loginFormularioInputContainer">
                        <h3>Contraseña:</h3>
                        <input type="password" name="password" className="loginFormularioInput" placeholder="Ingrese su contraseña" value={registerData.password}  onChange={handleChange} />
                    </label>

                    <input type="submit" value="Registrarme" className="loginFormularioSubmit" onClick={console.log()}/>

                </form>
                <h3 className="loginFormularioRegister">¿Ya estás registrado? <a href="/">Clickea acá maese!!</a></h3>
            </div>
        </div>
    </>
    )
}