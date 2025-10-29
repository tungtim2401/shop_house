import { Layout } from "antd";
import AppHeader from "../../sections/Header";
import Landing from "../../sections/Landing";

const { Header, Content } = Layout;

function Home() {
  return (
    <div>
      <AppHeader />

      <Content>
        <Landing />
      </Content>
    </div>
  );
}

export default Home;
