import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .jokeCard{
        width: 40%;
        padding: 2%;
        margin: 2%;
        text-align: center;
        border: 1px black solid;
        border-radius: 10px;
    }
`;

const Main = () => {

    const [jokes, setJokes] = useState([]);
    const categories = [
        "Animals",
        "Space"
    ]

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
        <Container>
            <div className="categories">
                <button>Animals</button>
                <button>Space</button>
                {/* <button></button>
                <button></button> */}
            </div>
            {jokes.map((i) => {
                return (
                    <div className="jokeCard">
                        <h4>{i.setup}</h4>
                        <h5>{i.punchline}</h5>
                    </div>
                )
            })}
        </Container>
    );
}

export default Main;