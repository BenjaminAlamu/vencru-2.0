import "./App.css";
import Search from "./components/Search";
import Button from "./components/Button";
import SideMenu from "./components/SideMenu";
import PaymentDetails from "./components/PaymentDetails";

function App() {
  let card = {
    image: "mastercard",
    number: "12233",
    expiry: "23/2019",
  };
  return (
    <div className="App">
      <main className="flex flex-wrap w-full">
        <SideMenu />
        <main>
          <Button text="Download All" image="download" />
          <Search />
          <PaymentDetails card={card} />
        </main>
      </main>
    </div>
  );
}

export default App;
