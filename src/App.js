import "./App.css";
import Search from "./components/Search";
import Button from "./components/Button";
import SideMenuItem from "./components/SideMenuItem";
import PaymentDetails from "./components/PaymentDetails";

function App() {
  let card = {
    image: "mastercard",
    number: "12233",
    expiry: "23/2019",
  };
  return (
    <div className="App">
      <Search />
      <Button text="Download All" image="download" />
      <SideMenuItem text="Dashboard" image="dashboard" />

      <PaymentDetails card={card} />

      <SideMenuItem
        text="Settings"
        image="settings"
        count="10"
        isActive={true}
      />
    </div>
  );
}

export default App;
