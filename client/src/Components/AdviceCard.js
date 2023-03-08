import { useEffect, useState, useCallback } from "react";

export default function AdviceCard() {
  const [advice, setAdvice] = useState(null);

  const fetchData = useCallback(async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const { slip } = await response.json();
    setAdvice(slip);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const fetchAdvice = () => {
    fetchData();
  };

  return (
    <div className="card">
      {advice === null ? (
        <h5>loading..</h5>
      ) : (
        <>
          <p>A D V I C E # {advice.id}</p>
          <h4>{advice.advice}</h4>
          <img src="/images/pattern-divider-desktop.svg" alt="divider" />
          <button className="diceBtn" onClick={fetchAdvice}>
            <img src="/images/icon-dice.svg" alt="dice" className="dice" />
          </button>
        </>
      )}
    </div>
  );
}
