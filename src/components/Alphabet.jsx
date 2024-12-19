export default function Alphabet({onClick}) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    const alphabetKeyboard = alphabet.split("").map(letter => <button key={letter} onClick={() => onClick(letter.toUpperCase())}>{letter.toUpperCase()}</button>)

    return (
        <section className="keyboard">{alphabetKeyboard}</section>
    )
}
