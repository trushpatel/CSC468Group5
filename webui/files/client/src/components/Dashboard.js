import React, { Fragment, useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export const Dashboard = ({ setAuth }) => {
    const [name, setName] = useState("");
    
    async function getName() {
        try {
            const response = await fetch("http://localhost:5000/dashboard", {
                method: "GET",
                headers: { token: localStorage.token }
            });
            const parseRes = await response.json();
            setName(parseRes.user_name);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getName();
    }, []);

    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        setAuth(false);
    }

    return (
        <Fragment>
            <button className="btn btn-primary my-5" onClick={e => logout(e)}>Logout</button>
            <div>
                <Link to="/gameSession" ><button className="btn btn-primary my-5">Play Now</button></Link>
            </div>
            <h1 className="text-center mt-5">{name}</h1>
            <h2 className="text-center mt-5 my-5">Dashboard</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th>Wins</th>
                        <th>Losses</th>
                        <th>Stalemates</th>
                        <th>Elo</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </Fragment>
    );
};