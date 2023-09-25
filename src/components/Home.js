import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log("Loading Home page...");
  }, []);

    return <h1>Home Page</h1>;
  }