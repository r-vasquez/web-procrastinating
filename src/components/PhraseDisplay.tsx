import { useState } from 'react';
import { phrases } from '../utils/phrases';

function PhraseDisplay(): JSX.Element {
  const [randIndex, setRandIndex] = useState(Math.floor(Math.random() * phrases.length));
  const [randPhrase, setRandPhrase] = useState(phrases[randIndex]);

  const onClickHandler = () => {
    const randNum = Math.floor(Math.random() * phrases.length);
    setRandIndex(randNum);
    setRandPhrase(phrases[randNum]);
  };
  return (
    <h1 className="randomPhrase" onClick={() => onClickHandler()}>
      {randPhrase}
    </h1>
  );
}

export default PhraseDisplay;
