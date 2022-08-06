import "./styles.css";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const options = {
    method: "POST",
    url: "https://motivational-quotes1.p.rapidapi.com/motivation",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "f9066ba7f0msh52a65825122fb8cp196d3fjsna875afaaa16a",
      "X-RapidAPI-Host": "motivational-quotes1.p.rapidapi.com"
    },
    data: '{"key1":"value","key2":"value"}'
  };
  QuoteGenerate = () => {
    axios
      .request(options)
      .then(function (response) {
        document.getElementById("quote").textContent = response.data;
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  return (
    <div className="App">
      <h1>Random Quote</h1>
      <Box>
        <div id="quote"></div>
        <button onClick={QuoteGenerate}>Generate a Quote</button>
      </Box>
    </div>
  );
}
const Box = styled.div`
  width: 250px;
  height: 180px;
  background-color: hsl(0, 100%, 90%, 0.2);
  margin: 0 auto;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  position: relative;

  button {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: green;
    color: white;
    font-weight: 520;
    border: 0;
    height: 30px;
    border-radius: 7px;

    margin: 10 auto;
  }
  button:hover {
    cursor: pointer;
  }
`;
