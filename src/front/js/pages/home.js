import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [winNum, setWinNum] = useState(Math.round(Math.random() * 100 + 1));
  //   const winNum = Math.round(Math.random() * 100 + 1);
  //   setWinNum(store.winningNum);
  //   setWinNum(Math.random()*100+1);
  const [guess, setGuess] = useState(null);
  const [result, setResult] = useState(null);
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (guess > winNum) {
        setResult("Too high, guess a lower number!");
      } else if (guess < winNum) {
        setResult("Too low, guess a higher number!");
      } else if (guess == winNum) {
        setResult("Perfect Guess! You Win!");
      }
    }
  };
  const giveResult = () => {
    if (guess > winNum) {
      setResult("Too high, guess a lower number!");
    } else if (guess < winNum) {
      setResult("Too low, guess a higher number!");
    } else if (guess == winNum) {
      setResult("Perfect Guess! You Win!");
    }
  };
  return (
    <div className="text-center mt-5">
      <h1>Hello Rigo!!</h1>
      <p>
        <img src={rigoImageUrl} />
      </p>
      <div className="alert alert-info">
        {store.message ||
          "Loading message from the backend (make sure your python backend is running)..."}
      </div>
      <p>
        This boilerplate comes with lots of documentation:{" "}
        <a href="https://github.com/4GeeksAcademy/react-flask-hello/tree/95e0540bd1422249c3004f149825285118594325/docs">
          Read documentation
        </a>
      </p>
      <h1> current winning number: {winNum}</h1>
      <h2>current guess: {guess}</h2>
      <h2> result text: {result}</h2>
      <label for="guess">Enter Guess Here</label>
      <input
        type="number"
        onChange={(e) => setGuess(e.target.value)}
        onKeyDown={(e) => {
          if (e.target.value === "Enter") {
            giveResult();
          }
        }}
        id="guess"
        name="guess"
      ></input>
      <button onClick={giveResult}>Guess!</button>
    </div>
  );
};
