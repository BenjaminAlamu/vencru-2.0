import React from "react";
import "./index.scss";
import Download from "../../assets/img/download.svg";
import Check from "../../assets/img/check.svg";

const Table = (props) => {
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
    <main className="text__input">
      <div className="overflow-x-auto">
        <table className="w-full table-auto overflow-x-scroll w-full block w-full shadow-2xl rounded-lg bg-white">
          <thead className="border-b bg-gray-50 rounded-lg text-left p-4">
            {/* <tr className="flex bg-gray-50"> */}
            <th className="text-xs font-medium text-gray-500 py-3 px-6 w-2/3 sm:w-3/12">
              <main className=" ">
                <span className="">
                  <input className="" type="checkbox" />
                </span>
                <span className="mb-3"> Invoice</span>
              </main>
            </th>

            <th className="text-xs font-medium text-gray-500 py-3 px-6 w-1/3 sm:w-2/12 bg-gray-50">
              Amount
            </th>
            <th className="text-xs font-medium text-gray-500 py-3 px-6 hidden sm:table-cell sm:w-2/12">
              Date
            </th>
            <th className="text-xs font-medium text-gray-500 py-3 px-6 hidden sm:table-cell sm:w-1/12">
              Status
            </th>
            <th className="text-xs font-medium text-gray-500 py-3 px-6 hidden sm:table-cell sm:w-3/12">
              Users on Plan
            </th>
            <th className="text-xs font-medium text-gray-500 py-3 px-6 hidden sm:table-cell sm:w-1/12"></th>
            {/* </tr> */}
          </thead>
          <tbody className="bg-white ">
            {tableData.map((data, index) => (
              <tr
                key={index}
                scope="col"
                className="text-sm text-gray-500   text-left border-b"
              >
                <td className="font-medium py-4 text-gray-900 px-6 w-2/3 sm:w-3/12">
                  <input className="mr-2" type="checkbox" />
                  {data.invoice}
                </td>
                <td className="px-6 w-1/3 sm:w-2/12">{data.amount}</td>
                <td className="px-6 hidden sm:table-cell sm:w-2/12">
                  {data.date}
                </td>
                <td className="hidden sm:table-cell sm:w-2/12">
                  <p className="mx-2 w-20 bg-success-50 text-success-700 rounded-2xl text-center py-1 flex items-center justify-center">
                    <img className="h-4 mr-1" src={Check}></img>
                    <span>{data.status}</span>
                  </p>
                </td>
                <td className="px-6 hidden sm:table-cell">
                  <img
                    className="mx-2"
                    src={require(`../../assets/img/${data.users}.svg`)}
                  ></img>
                </td>
                <td className="px-6 hidden sm:table-cell">
                  <img className="mx-2" src={Download}></img>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};
export default Table;
