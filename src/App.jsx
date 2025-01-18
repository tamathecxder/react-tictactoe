import Player from "./components/Player";

function App() {
  return (
    <>
      <header>
        <img src={undefined} alt={undefined} />
        <p>Coming soon...</p>
      </header>

      <main>
        <div id="game-container">
          <ol id="players">
            <Player name="Player 1" symbol="X" />
            <Player name="Player 2" symbol="Y" />
          </ol>
          Game Board
        </div>
      </main>
    </>
  );
}

export default App;
