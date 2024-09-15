import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const [string, setString] = useState("");

  useEffect(() => {
    getHome();
  }, []);

  const apiUrl = process.env.REACT_APP_BACKEND_API_URL;

  const getHome = async () => {
    const axiosInstance = axios.create({
      baseURL: apiUrl,
      headers: {
        "Content-Type": "application/json",
      },
    });

    try {
      const response = await axiosInstance.get("/");
      console.log("response:", response);
      setString(response.data);
    } catch (error) {
      console.error("error:", error);
    }
  };

  return <div>{string}</div>;
}

export default Home;
