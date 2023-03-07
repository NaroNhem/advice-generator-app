import { useEffect, useState } from "react";

export default function AdviceCard() {
  const [advice, setAdvice] = useState(null);

  useEffect(() => {
    console.log("before");
    const fetchData = async () => {
      const response = await fetch("https://api.adviceslip.com/advice");
      const { slip } = await response.json();
      setAdvice(slip);
    };
    fetchData();
  }, [setAdvice]);
  console.log(advice);
  return (
    <div className="card">
      {advice === null ? (
        <h5>loading..</h5>
      ) : (
        <>
          <p>A D V I C E # {advice.id}</p>
          <h4>{advice.advice}</h4>
          <img src="/images/pattern-divider-desktop.svg" alt="divider" />
          <button className="diceBtn">
            <img src="/images/icon-dice.svg" alt="dice" className="dice" />
          </button>
        </>
      )}
    </div>
  );
}
