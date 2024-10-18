import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import facts from "./assets/facts.json";

function App() {
    const generateResponse = async () => {
        const factsValues = Object.values(facts)[0];

        const randomIndex = Math.floor(Math.random() * factsValues.length);

        console.log(factsValues);

        setResponse(factsValues[randomIndex].fact);
    };

    const [response, setResponse] = useState("Nothing Yet...");

    console.log(response);

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold mt-3 mb-10">
                Random Bahamian Fact Generator
            </h1>
            <p className="text-xl font-semibold mt-3">{response}</p>
            <button className="mt-3" onClick={() => generateResponse()}>
                Generate Fact
            </button>
        </div>
    );
}

export default App;
