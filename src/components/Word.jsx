import { useState } from "react"

export default function Word() {
    const [currentWord, setCurrentWord] = useState("react")

    const letters = currentWord.split("").map((letter, index) => (
        <span key={index}>{letter.toUpperCase()}</span>
    ))
    

    return (
        <section className="word">
            {letters}
        </section>
    )
}
