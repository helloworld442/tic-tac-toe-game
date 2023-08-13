import { useContext, useEffect, useState } from "react";
import { TickContext } from "../../container/TickContainer";
import { css, styled } from "styled-components";
import TickItem from "./TickItem";

const TickListBox = styled.div`
  width: 600px;
  height: 500px;
  padding: 50px;
  box-sizing: border-box;
  border: 5px solid ${(props) => props.theme.lineColor};
  border-radius: 5px;
  background: ${(props) => props.theme.baseColor};
`;

const TickListStyle = styled.ul`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
`;

const TickSuccssBox = styled.div`
  width: 100%;
  height: 100%;
  font-size: 12rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  animation: fadein 1.5s;

  ${(props) =>
    props.success === "X" &&
    css`
      color: #888;
    `}

  ${(props) =>
    props.success === "O" &&
    css`
      color: #fff;
    `}
`;

const TickList = () => {
  const { tictae, onClickItem, onCheckGame, onResetGame } = useContext(TickContext);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    const response = onCheckGame();
    setSuccess(response);
  }, [tictae]);

  return (
    <TickListBox>
      {success ? (
        <TickSuccssBox success={success} onClick={onResetGame}>
          {success}
        </TickSuccssBox>
      ) : (
        <TickListStyle>
          {tictae.map((tick, i) => (
            <TickItem key={i} tick={tick} index={i} onToggle={onClickItem} />
          ))}
        </TickListStyle>
      )}
    </TickListBox>
  );
};

export default TickList;
