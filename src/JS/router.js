import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Url from "./url";
import { PrivateRoute } from "./PrivateRoute";
import Deploy from '../Pages/deploy';
import Login from "../Pages/login"

const DeployRouter = () => {
    console.log(Url.LOGIN);
    return (
        <div className='router'>
            <div className='router-app'>
                <main>
                    <Router>
                        <Routes>
                            <Route exact path={Url.LOGIN} element={<Login/>}/>
                            <Route element={<PrivateRoute />}>
                                <Route path={Url.DEPLOY} element={<Deploy />} />
                            </Route>
                        </Routes>
                    </Router>
                </main>
            </div>
        </div>
    );
};

export default DeployRouter;