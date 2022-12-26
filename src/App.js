import "./App.css";
import TextInput from "./components/TextInput";
import Button from "./components/Button";
import SideMenu from "./components/SideMenu";
import PaymentDetails from "./components/PaymentDetails";
import Table from "./components/Table";
import RadioButton from "./components/RadioButton";
import Plus from "./assets/img/plus.svg";

function App() {
  const cards = [
    {
      image: "mastercard",
      name: "Mastercard",
      number: "1234",
      expiry: "06/2024",
      isActive: true,
    },
    {
      image: "visa",
      name: "Visa",
      number: "1234",
      expiry: "06/2024",
    },
  ];

  const items = [
    "My Details",
    "Profile",
    "Password",
    "Team",
    "Plan",
    "Billing",
    "Integrations",
    "API",
  ];

  const headers = ["Invoice", "Amount", "Date", "Status", "Users on Plan", ""];

  const mobileHeaders = ["Invoice", "Amount"];

  const tableData = [
    {
      invoice: "Basic Plan - Dec 2022",
      amount: "USD $10.00",
      date: "Dec 1, 2022",
      status: "Paid",
      users: "user_avatars1",
    },
    {
      invoice: "Basic Plan - Nov 2022",
      amount: "USD $10.00",
      date: "Nov 1, 2022",
      status: "Paid",
      users: "user_avatars2",
    },
    {
      invoice: "Basic Plan - Oct 2022",
      amount: "USD $10.00",
      date: "Oct 1, 2022",
      status: "Paid",
      users: "user_avatars3",
    },
    {
      invoice: "Basic Plan - Sep 2022",
      amount: "USD $10.00",
      date: "Sep 1, 2022",
      status: "Paid",
      users: "user_avatars4",
    },
    {
      invoice: "Basic Plan - Aug 2022",
      amount: "USD $10.00",
      date: "Aug 1, 2022",
      status: "Paid",
      users: "user_avatars5",
    },
    {
      invoice: "Basic Plan - Jul 2022",
      amount: "USD $10.00",
      date: "Jul 1, 2022",
      status: "Paid",
      users: "user_avatars6",
    },
    {
      invoice: "Basic Plan - Jun 2022",
      amount: "USD $10.00",
      date: "Jun 1, 2022",
      status: "Paid",
      users: "user_avatars7",
    },
  ];
  return (
    <div className="App container max-w-full overflow-x-scroll">
      <main className="flex flex-wrap w-full">
        <SideMenu className=" " />
        <main className=" grow text-left bg-gray-50 py-4 px-8">
          <main>
            <p className="text-2xl font-medium text-gray-900">Settings</p>
            <p className="text-md text-gray-500">
              Manage your team and preferences here.
            </p>
          </main>

          <main className="flex max-w-100 overflow-x-scroll my-4">
            {items.map((item, index) => (
              <p
                className="p-3 border text-gray-700 font-medium "
                key={index}
                item={item}
              >
                {item}
              </p>
            ))}
          </main>

          <main className="my-4">
            <p className="text-xl font-medium text-gray-900">Payment Method</p>
            <p className="text-sm text-gray-500">
              Update your billing details and address.
            </p>
          </main>

          <hr className="bg-gray-200 my-4" />

          <main className="flex flex-wrap text-sm">
            <main className="w-full md:w-2/5">
              <p className="font-medium text-gray-700">Contact Email</p>
              <p className="text-gray-500">Where should invoices be sent?</p>
            </main>
            <main className="w-full md:w-3/5">
              <main className="my-3 flex items-start">
                <main>
                  <RadioButton id={"existing"} />
                </main>
                <main className="">
                  <p className="font-medium text-gray-700">
                    Send to my account email
                  </p>
                  <p className="text-gray-500">olivia@untitledui.com</p>
                </main>
              </main>

              <main className="my-3 flex items-start">
                <main>
                  <RadioButton id={"new"} />
                </main>
                <main className="">
                  <p className="font-medium text-gray-700">
                    Send to an alternative email
                  </p>
                  <TextInput
                    type="email"
                    placeholder="billing@untitledui.com"
                  />
                </main>
              </main>
            </main>
          </main>

          <hr className="bg-gray-200 my-4" />

          <main className="flex flex-wrap text-sm">
            <main className="w-full md:w-2/5">
              <p className="font-medium text-gray-700">Contact Email</p>
              <p className="text-gray-500">Where should invoices be sent?</p>
            </main>
            <main className="w-full md:w-3/5">
              <main>
                {cards.map((card, index) => (
                  <PaymentDetails
                    className="p-3 border text-gray-700 font-medium"
                    key={index}
                    card={card}
                  ></PaymentDetails>
                ))}
                <main className="flex text-sm text-gray-500 cursor-pointer">
                  <img className="mx-2" src={Plus}></img> Add new payment method
                </main>
              </main>
            </main>
          </main>

          <main>
            <main className="flex w-full justify-between my-4">
              <p className="text-gray-900 text-xl font-medium">
                Billing History
              </p>
              <Button text="Download All" image="download" />
            </main>

            <Table
              headers={headers}
              tableData={tableData}
              mobileHeaders={mobileHeaders}
            />
          </main>
        </main>
      </main>
    </div>
  );
}

export default App;
