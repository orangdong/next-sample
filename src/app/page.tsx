/* eslint-disable @typescript-eslint/no-explicit-any */
// import Image from "next/image";

import DataTab from "@/components/DataTab";

async function fetchFromInternet() {
  const response = await fetch("https://api.vercel.app/blog");
  const data = await response.json();
  return data.map((item: { title: any }) => item.title);
}

// async function fetchFromUbuntu() {
//   const response = await fetch("https://api.vercel.app/ubuntu");
//   const data = await response.json();
//   return data.map((item: any) => item.title);
// }

export default async function Home() {
  const internetData: string[] = await fetchFromInternet();
  const ubuntuData: string[] = [];
  const windowsData: string[] = [];

  return (
    <div className="ms-5 mt-5">
      <h1 className="text-4xl font-bold">Dummy Fetch Site</h1>
      <DataTab title={"Internet Data"} dataSource={internetData} />
      <DataTab title="Ubuntu Data" dataSource={ubuntuData} />
      <DataTab title="Windows Data" dataSource={windowsData} />
    </div>
  );
}
