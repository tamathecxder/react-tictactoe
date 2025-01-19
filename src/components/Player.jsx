import { useState } from "react";

export default function Player({ name, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  function handleInputChange(event) {
    setPlayerName(event.target.value);
  }

  let playerNameElement = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    playerNameElement = (
      <input
        type="text"
        placeholder="Type your name here..."
        defaultValue={playerName}
        onChange={handleInputChange}
        required
      />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerNameElement}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{!isEditing ? "Edit" : "Save"}</button>
    </li>
  );
}
