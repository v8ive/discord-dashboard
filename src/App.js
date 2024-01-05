import SideBar from "./components/SideBar";
import ChannelBar from "./components/ChannelBar";
import Contant from "./components/ContentArea";

function App() {
  return (
    <div className="flex">
      <SideBar />
      <ChannelBar />
      <Contant />
    </div>
  );
}

export default App;
