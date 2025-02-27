// Home.jsx
import React from "react";
import ServinPP from "../assets/ServinPP.png";

export default function Home() {
    return (
        <main>
            <div className="container">
                HTB
            </div>
            <div>
                <img src={ServinPP} width={500} height={500} alt="Servin Profile" />
            </div>
        </main>
    );
}
