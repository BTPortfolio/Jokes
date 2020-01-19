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
    const [searchResults, setSearchResults] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/jokes`)
            .then(res => {
                setJokes(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/jokes/${searchTerm}`)
            .then(res => {
                setJokes(res.data)
                setSearchResults(res.data)
            })
            .catch(err => console.log(err))
    }, [searchTerm])

    return (
        <Container>
            <div className="categories">
                <button onClick={() => setSearchTerm('')}>All</button>
                <button onClick={() => setSearchTerm("animals")}>Animals</button>
                <button onClick={() => setSearchTerm("space")}>Space</button>
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