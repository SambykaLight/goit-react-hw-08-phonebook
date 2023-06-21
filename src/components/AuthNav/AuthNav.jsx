import { Link } from "react-router-dom"


export const AuthNav =() =>{
    return(
        <div>
            <Link style={{textDecoration:"none", color: "white", paddingRight: 20}} to="LoginView" color="inherit"> 
            Login</Link>
          <Link style={{textDecoration:"none", color: "white"}} to="RegistrationView" color="inherit">Sign Up</Link>
        </div>
    )
}