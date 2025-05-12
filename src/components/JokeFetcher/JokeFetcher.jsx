import React from "react";
import Button from "../Button/Button";

const ENDPOINT = "https://v2.jokeapi.dev/joke/Any?type=single&amount=";

function JokeFetcher() {
  const [jokes, setJokes] = React.useState([]);
  const [jokesAmount, setJokesAmount] = React.useState(3);
  const [status, setStatus] = React.useState("idle");
  const id = React.useId();

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");

    const jokesENDPOINT = `${ENDPOINT}${jokesAmount}`;
    const response = await fetch(jokesENDPOINT);
    const json = await response.json();

    if (json.error == false) {
      setStatus("Ready");
      setJokes(json.jokes);
    } else {
      setStatus("Fail");
    }
  }
  return (
    <div className="mt-10 mb-10 border-t-1">
      <h1 className="text-3xl text-center text-cyan-600 p-20">Jokes Fetcher</h1>

      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center flex-col gap-3 mb-10"
      >
        <Button type="submit">
          {status === "loading" ? <p>Loading..</p> : <p>Get Jokes</p>}
        </Button>

        <label htmlFor={`jokesNum${id}`}>Amount of jokes: &nbsp;</label>
        <input
          className="border-cyan-600 border rounded text-center p-1"
          value={jokesAmount}
          type="number"
          id={`jokesNum${id}`}
          max={10}
          min={1}
          onChange={(event) => setJokesAmount(event.target.value)}
        />
      </form>

      {status === "Fail" && (
        <p className="text-red-600 uppercase text-3xl">Error Fetching Jokes</p>
      )}
      <div className="flex flex-col justify-center align-center text-center bg-[#f9f9f9] shadow-lg rounded-2xl">
        {jokes.map(({ joke, id }, index) => (
          <span key={id}>
            {index + 1}- {joke}
          </span>
        ))}
        {jokes && <Button onClick={() => setJokes([])}>Clear Jokes</Button>}
      </div>
    </div>
  );
}

export default JokeFetcher;
