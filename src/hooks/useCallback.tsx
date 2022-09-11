import React, { memo, useState } from 'react';

type FizzProps = {
  isFizz: boolean;
};

const Fizz = (props: FizzProps) => {
  const { isFizz } = props;
  console.log('Fizz再描画');
  return <span>{isFizz ? 'Fizz' : ''}</span>;
};

type BuzzProps = {
  isBuzz: boolean;
};

const Buzz = memo<BuzzProps>((props) => {
  const { isBuzz } = props;
  console.log('Buzz再描画');
  return <span>{isBuzz ? 'Buzz' : ''}</span>;
});

export const Parent = () => {
  const [count, setCount] = useState(1);
  const isFizz = count % 3 === 0;
  const isBuzz = count % 5 === 0;

  console.log('再描画');
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
      <p>{`現在のカウント: ${count}`}</p>
      <p>
        <Fizz isFizz={isFizz}></Fizz>
        <Buzz isBuzz={isBuzz}></Buzz>
      </p>
    </div>
  );
};
