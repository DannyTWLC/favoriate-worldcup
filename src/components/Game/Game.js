import React, { useState, useEffect } from "react";
import { FlexBox } from "./style";

const items = [
  {
    name: "햄버거",
    src: require("../../img/burger.jpg")
  },
  {
    name: "볶음밥",
    src: require("../../img/fried-rice.jpg")
  },
  {
    name: "파스타",
    src: require("../../img/pasta.jpg")
  },
  {
    name: "라면",
    src: require("../../img/ramen.jpg")
  }
];

const Game = () => {
  const [candidates, setCandidates] = useState([]);
  const [displays, setDisplays] = useState([]);
  const [winners, setWinners] = useState([]);
  useEffect(() => {
    items.sort(() => Math.random() - 0.5);
    setCandidates(items);
    setDisplays([items[0], items[1]]);
  }, []);

  const clickHandler = candidate => () => {
    if (candidates.length <= 2) {
      if (winners.length === 0) {
        setDisplays([candidate]);
      } else {
        let updatedCandidate = [...winners, candidate];
        setCandidates(updatedCandidate);
        setDisplays([updatedCandidate[0], updatedCandidate[1]]);
        setWinners([]);
      }
    } else if (candidates.length > 2) {
      setWinners([...winners, candidate]);
      setDisplays([candidates[2], candidates[3]]);
      setCandidates(candidates.slice(2));
    }
  };
  return (
    <FlexBox>
      <h1 className="title">Favorite Worldcup</h1>
      {displays.map(d => {
        return (
          <div className="flex-1" key={d.name} onClick={clickHandler(d)}>
            <img className="candidate-img" src={d.src} alt={d.name} />
            <div className="name">{d.name}</div>
          </div>
        );
      })}
    </FlexBox>
  );
};

export default Game;
