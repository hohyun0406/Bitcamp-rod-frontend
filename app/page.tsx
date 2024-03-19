"use client";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";

const SERVER = `http://localhost:8080/`;
export default function Home() {
  const [name, setName] = useState("");

  const handleChange = (e: any) => {
    setName(e.target.value);
  };

  const handleClick = () => {
    alert(name);
    const url = `${SERVER}name`;
    const data = { name: name };
    const config = {
      headers: {
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
        Authorization: `Bearer blah ~`,
        "Access-Control-Allow-Origin": "*",
      },
    };

    axios.post(url, data, config).then((res) => {
      alert("리스판스가 가져온 이름 : " + JSON.stringify(res.data));
    });
  };

  return (
    <>
      <h3>이름 입력 하세요</h3>
      <input type="text" onChange={handleChange} />
      <br />
      <button onClick={handleClick}>버튼</button>
    </>
  );
}
