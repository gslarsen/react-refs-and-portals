import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();
  const [name, setName] = useState("");

  const handleSetName = () => {
    setName(playerName.current.value);
    playerName.current.value = "";
  };

  return (
    <section id="player">
      <h2>Welcome {name || "unknown entity"}</h2>
      <p>
        <input
          ref={playerName}
          type="text"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSetName();
            }
          }}
          name="player-name"
        />
        <button onClick={handleSetName}>Set Name</button>
      </p>
    </section>
  );
}
