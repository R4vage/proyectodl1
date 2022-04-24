import React, { useState } from "react"
import "../CSS/LoginComponent.css"


export default function LoginComponent (){

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
        estado:"profesor"
    })
    const [loginState, setLoginState] = useState("")

    const handleChange = (event) => {
        setLoginData({ ...loginData, [event.target.name]: event.target.value });
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(loginData)
        if (loginData.email=="julianm" & loginData.password=="password123" & loginData.estado=="alumno")
        {
            alert("Exito")  
            setLoginState("exito")
        }
        else {
            alert("Has fallado :(")  
            setLoginState("fallo")
        }
    };

    function MensajeLogin () {
        if (loginState=="exito") {
            return <h3 className="loginExito">Ha ingresado exitosamente</h3>}
        if (loginState=="fallo") { 
            return <h3 className="loginExito">Datos incorrectos</h3>}
            
        }
    
    return(
    <>
        <div className="Login">
           <MensajeLogin/>
            <div className="LoginComponent">
                <h1>Stax Food Admin Login</h1>
                <form className="loginFormulario" onSubmit={handleSubmit}>
                    <h3 className="loginFormularioSubtitle">Por favor, rellene los campos con sus credenciales únicas</h3>
                    <label className="loginFormularioInputContainer">
                        <h3>Email:</h3>
                        <input type="text" name="email" className="loginFormularioInput" value={loginData.email} onChange={handleChange}/>
                    </label>

                    <label className="loginFormularioInputContainer">
                        <h3>Contraseña:</h3>
                        <input type="password" name="password" className="loginFormularioInput" value={loginData.password}  onChange={handleChange}/>
                    </label>

                    <select className="loginFormularioSelect" name="estado" value={loginData.estado} onChange={handleChange}>
                        <option value="profesor">Profesor</option>
                        <option value="alumno">Alumno</option>
                    </select>

                    <h3 className="loginFormularioForgot"><a>Forgot password?</a></h3>

                    <input type="submit" value="Login" className="loginFormularioSubmit" onClick={console.log()}/>

                </form>
                <h3 className="loginFormularioRegister">¿Todavía no te registraste? Clickea<a> acá</a> maese!!</h3>
            </div>
        </div>
    </>
    )
}