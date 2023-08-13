import { Mainlayout } from "../layout/MainLayout";
import { TickContainer } from "../container/TickContainer";
import TickTemplate from "../components/tictae/TickTemplate";
import TickHead from "../components/tictae/TickHead";
import TickList from "../components/tictae/TickList";

const Home = () => {
  return (
    <Mainlayout>
      <TickContainer>
        <TickTemplate>
          <TickHead />
          <TickList />
        </TickTemplate>
      </TickContainer>
    </Mainlayout>
  );
};

export default Home;
