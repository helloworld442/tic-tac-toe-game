import { useContext } from "react";
import { styled } from "styled-components";
import { TickContext } from "../../container/TickContainer";

const TickHeadStyle = styled.div`
  width: 600px;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .user-profile {
    display: inline-block;
    width: 250px;
    height: 50px;
    padding: 0 20px;
    border: 1px solid #333;
    border-radius: 5px;
    box-sizing: border-box;
    font-size: 1.4rem;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .active {
    border-bottom: 2px solid ${(props) => props.theme.baseColor};
  }
`;

const TickHead = () => {
  const { user } = useContext(TickContext);

  return (
    <TickHeadStyle>
      <span className={user ? "user-profile active" : "user-profile"}>
        X<span>-</span>
      </span>
      <span className={!user ? "user-profile active" : "user-profile"}>
        O<span>-</span>
      </span>
    </TickHeadStyle>
  );
};

export default TickHead;
