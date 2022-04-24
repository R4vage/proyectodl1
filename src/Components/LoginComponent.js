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
        if (loginData.email=="julianm@gmail.com" & loginData.password=="password123" & loginData.estado=="alumno")
        {
            alert("Exito")  
            setLoginState("exito")
        }
        else {
            alert("Has fallado :(")  
            setLoginState("fallo")
        }
    };
    
    function forgot (){
        alert("Para recuperar tu contraseña, envianos tus datos a: julianm@gmail.com.")  
    }

    function MensajeLogin () {
        if (loginState=="exito") {
            return <p className="loginMensaje loginExito">Ha ingresado exitosamente <br/> Sus datos son:<br/> Email: {loginData.email}<br/>Tipo: {loginData.estado}</p>}
        if (loginState=="fallo") { 
            return <p className="loginMensaje loginFallo">Datos incorrectos</p>}
            
        }
    
    return(
    <>
        <div className="Login">
            <div className="LoginComponent">
                <MensajeLogin/>
                <h1>Login</h1>
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

                    <h3 className="loginFormularioForgot" onClick={forgot}>Forgot password?</h3>

                    <input type="submit" value="Login" className="loginFormularioSubmit" onClick={console.log()}/>

                </form>
                <h3 className="loginFormularioRegister">¿Todavía no te registraste? <a href="/register">Clickea acá maese!!</a></h3>
            </div>
        </div>
    </>
    )
}