import { useState } from "react"

export default function Word({ currentWord }) {
    const letters = currentWord.split("").map((letter, index) => (
        <span key={index}>{letter.toUpperCase()}</span>
    ))
    

    return (
        <section className="word">
            {letters}
        </section>
    )
}
