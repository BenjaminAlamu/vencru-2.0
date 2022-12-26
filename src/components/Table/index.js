import React from "react";
import "./index.scss";
import Download from "../../assets/img/download.svg";
import Check from "../../assets/img/check.svg";

const Table = (props) => {
  const { headers, tableData, mobileHeaders } = props;

  return (
    <main className="text__input">
      <div className="overflow-x-auto">
        <table className="w-full table-auto overflow-x-scroll w-full block w-full shadow-lg rounded-md bg-white">
          <thead className="border-b bg-gray-50 text-left p-4">
            <tr className="">
              <th className="text-xs font-medium text-gray-500 py-3 px-6 w-3/4 sm:w-3/12">
                <main className=" ">
                  <span className="">
                    <input className="" type="checkbox" />
                  </span>
                  <span className="mb-3"> Invoice</span>
                </main>
              </th>

              <th className="text-xs font-medium text-gray-500 py-3 px-6 w-1/4 sm:w-2/12">
                <main className=" ">Amount</main>
              </th>
              <th className="text-xs font-medium text-gray-500 py-3 px-6 collapse sm:visible sm:w-2/12">
                <main className=" ">Date</main>
              </th>
              <th className="text-xs font-medium text-gray-500 py-3 px-6 collapse sm:visible sm:w-1/12">
                <main className=" ">Status</main>
              </th>
              <th className="text-xs font-medium text-gray-500 py-3 px-6 collapse sm:visible sm:w-3/12">
                <main className=" ">Users on Plan</main>
              </th>
              <th className="text-xs font-medium text-gray-500 py-3 px-6 collapse sm:visible sm:w-1/12">
                <main className=" "></main>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white ">
            {tableData.map((data, index) => (
              <tr
                key={index}
                scope="col"
                className="text-sm text-gray-500   text-left border-b"
              >
                <td className="font-medium py-4 text-gray-900 px-6 w-3/4 sm:w-3/12">
                  <input className="mr-2" type="checkbox" />
                  {data.invoice}
                </td>
                <td className="px-6 w-1/4 sm:w-2/12">{data.amount}</td>
                <td className="px-6 collapse sm:visible sm:w-2/12">
                  {data.date}
                </td>
                <td className="collapse sm:visible sm:w-2/12">
                  <p className="mx-2 w-20 bg-success-50 text-success-700 rounded-2xl text-center py-1 flex items-center justify-center">
                    <img className="h-4 mr-1" src={Check}></img>
                    <span>{data.status}</span>
                  </p>
                </td>
                <td className="px-6 collapse sm:visible">
                  <img
                    className="mx-2"
                    src={require(`../../assets/img/${data.users}.svg`)}
                  ></img>
                </td>
                <td className="px-6 collapse sm:visible">
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
