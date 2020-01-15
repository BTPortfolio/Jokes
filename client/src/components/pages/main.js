import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import axios from "axios";

const Main = () => {

    const [jokes, setJokes] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/jokes")
            .then(res => {
                console.log(res, "this is res for jokes")
                setJokes(res.data);
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            {jokes.map((i) => {
                return (
                    <div>
                        <h4>{i.setup}</h4>
                        <h5>{i.punchline}</h5>
                    </div>
                )
            })}
        </div>
    );
}

export default Main;