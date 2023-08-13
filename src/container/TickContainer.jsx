import { createContext, useEffect, useState } from "react";

const TickContext = createContext(null);

const TickContainer = ({ children }) => {
  const [user, setUser] = useState(true);
  const [tictae, setTicTae] = useState(Array(9).fill(null));

  const onClickItem = (index) => {
    const newTicTae = [...tictae];

    //만약 클릭을 했다면...
    if (newTicTae[index]) return;

    //만약 클릭을 하지 않았다면....
    if (user) {
      newTicTae[index] = "X";
    } else {
      newTicTae[index] = "O";
    }
    setTicTae(newTicTae);
    setUser(!user);
  };

  const onCheckGame = () => {
    const answer = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < answer.length; i++) {
      const [a, b, c] = answer[i];
      if (tictae[a] && tictae[a] === tictae[b] && tictae[a] === tictae[c]) {
        return tictae[a];
      }
    }
    return;
  };

  const onResetGame = () => {
    window.location.reload();
  };

  return (
    <TickContext.Provider value={{ user, tictae, onClickItem, onCheckGame, onResetGame }}>
      {children}
    </TickContext.Provider>
  );
};

export { TickContext, TickContainer };
