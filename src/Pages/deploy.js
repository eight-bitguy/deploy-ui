import React, {useState} from 'react';
import MyButton from "../Components/button";
import Url from "../JS/url";

const Deploy = (props) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);


    const onLogin = async () => {
        setError(null);
        if (!user.isValidForLogin() || isLoading) {
            return;
        }

        const response = false;
        const parsedResponse = response.response;
        if (parsedResponse && parsedResponse.data && parsedResponse.data.errors) {
            setError(parsedResponse.data.errors);
            return;
        }

        const userProfile = response.data;
        await window.setToken(userProfile['token']);

    };

    return (
        <div className="login-container">
            <div className="login">
                <MyButton
                    loading={false}
                    onClick={() => {}}
                    label='Login'
                />
            </div>
        </div>
    );
}

export default Deploy;