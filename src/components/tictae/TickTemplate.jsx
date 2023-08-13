import { styled } from "styled-components";

const TickTemplateStyle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 800px;
  height: 600px;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TickTemplate = ({ children }) => {
  return <TickTemplateStyle>{children}</TickTemplateStyle>;
};

export default TickTemplate;
