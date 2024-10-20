import { useState } from "react";
import "./App.css";

import facts from "./assets/facts.json";
import LottieAnimationJson from "./assets/ideas-generator.json";
import Lottie from "lottie-react";

const App = () => {
    const generateResponse = async () => {
        const factsValues = Object.values(facts)[0];

        const randomIndex = Math.floor(Math.random() * factsValues.length);

        setResponse(factsValues[randomIndex].fact);
    };

    const [response, setResponse] = useState<string | null>(null);

    return (
        <div className="flex flex-col items-center justify-center">
            <Lottie
                className="w-[300px] h-[300px]"
                animationData={LottieAnimationJson}
                height={100}
                width={100}
            />
            <h1 className="text-3xl font-bold mt-3">
                Random Bahamian Fact Generator
            </h1>
            {response && (
                <p className="text-xl font-semibold mt-6 max-w-[600px] bg-[#ffffff4d] p-10 text-black rounded-xl">
                    {response}
                </p>
            )}
            
            <button
                className="mt-6 bg-white text-black"
                onClick={() => generateResponse()}
            >
                Generate Fact
            </button>
        </div>
    );
};

export default App;
