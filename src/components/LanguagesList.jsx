import { languages } from "../languages"

export default function LanguagesList() { 

    return (
        <section className="language-chips">
            {languages.map(language => 
                <span 
                    key={language.name} 
                    style={{backgroundColor:language.backgroundColor, color: language.color}}
                    className="chip"
                >
                    {language.name}
                </span>
            )}
        </section>
     )
}
