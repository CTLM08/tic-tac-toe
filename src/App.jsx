import React, { useEffect, useState } from "react";

const App = () => {
  let row1 = [0, 1, 2];
  let row2 = [3, 4, 5];
  let row3 = [6, 7, 8];
  const [winner, setWinner] = useState();
  let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
  ];
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [x, setX] = useState([]);
  const [y, setY] = useState([]);
  const [combination, setCombination] = useState([]);
  const CheckWin = () => {
    let WinX = 0;

    let WinY = 0;
    for (let i = 0; i < win.length; i++) {
      for (let j = 0; j < x.length; j++) {
        if (win[i].includes(x[j])) {
          WinX++;
        }
      }
      for (let j = 0; j < y.length; j++) {
        if (win[i].includes(y[j])) {
          WinY++;
        }
      }
      if (WinX == 3) {
        setWinner("X");
      }
      if (WinY == 3) {
        setWinner("Y");
      } else {
        WinX = 0;
        WinY = 0;
      }
    }
    if (currentPlayer >= 9 && winner == undefined) {
      setWinner("Draw");
    }
  };
  useEffect(() => {
    setCombination([...x, ...y]);
  }, [x, y]);
  useEffect(() => {
    CheckWin();
  }, [currentPlayer]);
  const Restart = () => {
    setCurrentPlayer(0);
    setX([]);
    setY([]);
    setWinner(undefined);
  };
  return (
    <div className="h-screen w-full flex justify-center items-center absolute bg-zinc-900 text-white flex-col">
      <p>winner:{winner}</p>
      <main className="flex flex-col justify-center items-center w-full">
        <div className="flex flex-row justify-center items-center w-full">
          {row1.map((row) => (
            <button
              disabled={combination.includes(row)}
              onClick={() => {
                setCurrentPlayer(currentPlayer + 1);
                if (currentPlayer % 2 === 0) {
                  setX([...x, row]);
                } else {
                  setY([...y, row]);
                }
                CheckWin();
              }}
              className="w-32 h-32 flex justify-center items-center border-2 border-white/5  0 "
            >
              {x.includes(row) ? (
                <p>X</p>
              ) : y.includes(row) ? (
                <p>Y</p>
              ) : (
                <p></p>
              )}
            </button>
          ))}
        </div>
        <div className="flex flex-row justify-center items-center w-full">
          {row2.map((row) => (
            <button
              disabled={combination.includes(row)}
              onClick={() => {
                if (currentPlayer % 2 === 0) {
                  setX([...x, row]);
                } else {
                  setY([...y, row]);
                }
                setCurrentPlayer(currentPlayer + 1);
              }}
              className="w-32 h-32 flex justify-center items-center border-white/5 border-2  "
            >
              {x.includes(row) ? (
                <p>X</p>
              ) : y.includes(row) ? (
                <p>Y</p>
              ) : (
                <p></p>
              )}
            </button>
          ))}
        </div>
        <div className="flex flex-row justify-center items-center w-full">
          {row3.map((row) => (
            <button
              disabled={combination.includes(row)}
              onClick={() => {
                setCurrentPlayer(currentPlayer + 1);
                if (currentPlayer % 2 === 0) {
                  setX([...x, row]);
                } else {
                  setY([...y, row]);
                }
                CheckWin();
              }}
              className="w-32 h-32 flex justify-center items-center border-white/5 border-2  "
            >
              {x.includes(row) ? (
                <p>X</p>
              ) : y.includes(row) ? (
                <p>Y</p>
              ) : (
                <p></p>
              )}
            </button>
          ))}
        </div>
      </main>

      {winner !== undefined ? (
        <div
          className={`h-screen w-full fixed flex justify-center items-center  flex-col ${
            winner == "X"
              ? "bg-cyan-400/50"
              : winner == "Y"
              ? "bg-red-400/50"
              : ""
          }  `}
        >
          <h1 className="text-5xl font-semibold">Game Over!</h1>
          <p className="">The Winnner is {winner} ❤️</p>
          <button
            onClick={() => Restart()}
            className="mt-5 h-11 w-32 border-2 rounded-sm border-white"
          >
            Restart
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
