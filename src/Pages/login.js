import React, {useState} from 'react';
import MyButton from "../Components/button";
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const navigate = useNavigate();

    const goToDeploy = () => {
        console.log("navigating");
        navigate('/deploy');
    };
    
    return (
        <div className="App">
            <div className="login">
                <img src="../../../public/logo.png" height={100} width={100}/>
                <MyButton
                    onClick={goToDeploy}
                    label='Login with jumpcloud'
                />
            </div>
        </div>
    );
}

export default Login;