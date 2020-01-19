import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    .categories{
        button{
            
        }
    }
    .jokes{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        .jokeCard{
            width: 40%;
            padding: 2%;
            margin: 2%;
            text-align: center;
            border: 1px black solid;
            border-radius: 10px;
        }
    }
`;

const Main = () => {

    const [jokes, setJokes] = useState([]);
    const categories = [
        "Animals",
        "Space"
    ]

    const categoryWidth = 100 / categories.length;

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/jokes")
            .then(res => {
                console.log(res, "this is res for jokes")
                setJokes(res.data);
                console.log(categoryWidth);
            })
            .catch(err => console.log(err))
    }, [])

    const filterJokes = () => {

    }

    return (
        <Container>
            <div className="categories">
                {categories.map(i => {
                    return <button>{i}</button>
                })}
            </div>
            <div className="jokes">
                {jokes.map((i) => {
                    return (
                        <div className="jokeCard">
                            <h4>{i.setup}</h4>
                            <h5>{i.punchline}</h5>
                        </div>
                    )
                })}
            </div>
        </Container>
    );
}

export default Main;