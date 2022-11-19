import { auth, provider } from "../firebase/firebase";
import { signInWithPopup } from "firebase/auth";
import "./Login.css"
import GoogleButton from 'react-google-button'
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import Dashboard from "../components/Dashboard";



const Login = () => {
    const navigate = useNavigate();
        useEffect(() => {
        auth.onAuthStateChanged((user) =>
        {
            if (user) {
                navigate("/Home")
            }

        })
        
    }, [])

    const handleclick = () => {
        signInWithPopup(auth, provider)
            .then(() => {
                navigate("/Home")
            }
            )

    }
    const addTodo = (
        <div className="text">
            <h1>LOGIN</h1>
            <p>LOGIN
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet at eleifend feugiat vitae faucibus nibh dolor dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet at eleifend feugiat vitae faucibus nibh dolor dui.Button Title
            </p>
            <div className="gbutton">
                <GoogleButton onClick={handleclick} />
            </div>

        </div>

    );
    const rightPart = (<div className="rightpartlogin">

    </div>)
    return (
        <Dashboard addTodo={addTodo} rightPart={rightPart} />


    );
}
export default Login;






