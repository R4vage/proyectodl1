import React, { useState, useEffect } from "react"
import "../CSS/LoginComponent.css"


export default function LoginComponent (){
    const [loginState, setLoginState] = useState("")
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
        estado:""
    })

    const handleChange = (event) => {
        setLoginData({ ...loginData, [event.target.name]: event.target.value });
      }; //Handler para los inputs. Selecciona el valor que pone el usuario y se lo da al estado LoginData

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(loginData)
        if (loginData.email === "julianm@gmail.com" & loginData.password === "password123" & loginData.estado === "alumno")
        {
            alert("Exito")  
            setLoginState("exito")
        }
        else if (loginData.email.length === 0 || loginData.password.length === 0 || loginData.estado.length === 0){ alert("Debés completar todos los campos :(") }
        else { 
            alert("Los datos ingresados son incorrectos :(")  
            setLoginState("fallo")
        }
    };//Handler para el submit.
    
    function forgot (){
        alert("Para recuperar tu contraseña, envianos tus datos a: julianm@gmail.com.")  
    }//Alerta para el botón forget

    function MensajeLogin () {
        if (loginState==="exito") {
            return <p className="loginMensaje loginExito">Ha ingresado exitosamente <br/> Sus datos son:<br/> Email: {loginData.email}<br/>Tipo: {loginData.estado}</p>}
        if (loginState==="fallo") { 
            return <p className="loginMensaje loginFallo">Datos incorrectos</p>}
        }//Mensaje ubicado arriba del formulario. En lugar de usar un booleano, use una terna de valores en strings, asi el valor de null o "" no muestra nada. Esto lo tendria que pasar a otro componente.
    
        //Tarea para el ciclo de vida de los componentes. Dos por uno, si se quiere.
        useEffect(() => {
            console.log("loginMount")
            return () => {
            console.log("loginUnmount")
            };
          },[]);
        //

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
                        <input type="text" name="email" className="loginFormularioInput" placeholder="Ingrese su e-mail" value={loginData.email} onChange={handleChange}/>
                    </label>

                    <label className="loginFormularioInputContainer">
                        <h3>Contraseña:</h3>
                        <input type="password" name="password" className="loginFormularioInput" placeholder="Ingrese su contraseña" value={loginData.password}  onChange={handleChange}/>
                    </label>

                    <select className="loginFormularioSelect" name="estado" value={loginData.estado} onChange={handleChange}>
                        <option className="loginFormularioSelectPlaceholder" value="" disabled defaultValue hidden>Seleccione su ocupación</option>
                        <option value="profesor">Profesor</option>
                        <option value="alumno">Alumno</option>
                    </select>

                    <h3 className="loginFormularioForgot">¿Te olvidaste la contraseña? <a onClick={forgot} href>Clickea aquí</a></h3>

                    <input type="submit" value="Login" className="loginFormularioSubmit" onClick={console.log()}/>

                </form>
                <h3 className="loginFormularioRegister">¿Todavía no te registraste? <a href="/register">Clickea acá maese!!</a></h3>
            </div>
        </div>
    </>
    )
}