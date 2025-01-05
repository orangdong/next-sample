"use client";
import { useState } from "react";

function DataTab({
  dataSource,
  title,
}: {
  dataSource: string[];
  title: string;
}) {
  const [show, setShow] = useState(false);
  return (
    <div className="mt-3 w-ful border-t-[1px] pb-5 pt-3 flex flex-col border-white">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="">Status: {dataSource.length > 0 ? "ok" : "error"}</p>
      <div className="flex">
        <p className="me-3">Data: </p>
        <button
          onClick={() => setShow(!show)}
          className="bg-blue-500 text-white px-2 py-1 rounded-md"
        >
          show
        </button>
      </div>
      <div className={show ? "flex flex-col" : "hidden"}>
        {dataSource.map((data: string, i: number) => (
          <div key={i} className="flex flex-col">
            <p>{data}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DataTab;
