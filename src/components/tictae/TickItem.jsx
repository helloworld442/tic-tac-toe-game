import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faO } from "@fortawesome/free-solid-svg-icons";

const TickItemStyle = styled.li`
  border: 8px solid ${(props) => props.theme.lineColor};
  border-radius: 15px;
`;

const TickXBox = styled.div`
  width: 100%;
  height: 100%;
  font-size: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #888;
`;

const TickOBox = styled.div`
  width: 100%;
  height: 100%;
  font-size: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

const TickItem = ({ tick, index, onToggle }) => {
  return (
    <TickItemStyle onClick={() => onToggle(index)}>
      {tick === "X" && <TickX />}
      {tick === "O" && <TickO />}
    </TickItemStyle>
  );
};

const TickX = () => {
  return (
    <TickXBox>
      <FontAwesomeIcon icon={faX} />
    </TickXBox>
  );
};

const TickO = () => {
  return (
    <TickOBox>
      <FontAwesomeIcon icon={faO} />
    </TickOBox>
  );
};

export default TickItem;
