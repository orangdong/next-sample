/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import Image from "next/image";

import DataTab from "@/components/DataTab";

async function fetchFromInternet() {
  try {
    const response = await fetch("https://api.vercel.app/blog");
    const data = await response.json();
    return data.map((item: { title: any }) => item.title);
  } catch (error) {
    console.log(error);
    return [];
  }
}

async function fetchFromUbuntu() {
  try {
    const url = process.env.NEXT_PUBLIC_UBUNTU_HOST ?? "";
    const response = await fetch(url);
    const data = await response.json();
    return data.map((item: any) => `${item.name} - ${item.email}`);
  } catch (error) {
    console.log(error);
    return [];
  }
}

async function fetchWindows() {
  try {
    const url = process.env.NEXT_PUBLIC_WINDOWS_HOST ?? "";
    const response = await fetch(url);
    const data = await response.json();
    return data.map((item: any) => `${item.name} - ${item.email}`);
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default async function Home() {
  const internetData: string[] = await fetchFromInternet();
  const ubuntuData: string[] = await fetchFromUbuntu();
  const windowsData: string[] = await fetchWindows();

  return (
    <div className="ms-5 mt-5">
      <h1 className="text-4xl font-bold">Dummy Fetch Site</h1>
      <DataTab title={"Internet Data"} dataSource={internetData} />
      <DataTab title="Ubuntu Data" dataSource={ubuntuData} />
      <DataTab title="Windows Data" dataSource={windowsData} />
    </div>
  );
}
