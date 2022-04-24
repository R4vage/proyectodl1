import "../CSS/LoginComponent.css"


export default function LoginComponent (){

    return(
    <div className="Login">
        <div className="LoginComponent">
            <h1>Stax Food Admin Login</h1>
            <form className="loginFormulario">

                <label className="loginFormularioInput">
                    <h2>Email:</h2>
                    <input type="text" name="Email" />
                </label>

                <label className="loginFormularioInput">
                    <h2>Contraseña:</h2>
                    <input type="text" name="Contraseña" />
                </label>

                <select className="loginFormularioSelect">
                    <option value="profesor">Profesor</option>
                    <option value="alumno">Alumno</option>
                </select>
                <h3 className="loginFormularioForgot"><a>Forgot password?</a></h3>
                <input type="submit" value="Login" />

            </form>
            <h3>¿Todavía no te registraste? Clickea<a> acá</a> maese!!</h3>
        </div>
    </div>
    )
}