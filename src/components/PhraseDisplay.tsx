import {phrases} from '../utils/phrases'

function PhraseDisplay () {
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];

    return <h3>{randomPhrase}</h3>
}

export default PhraseDisplay