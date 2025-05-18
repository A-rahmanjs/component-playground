import React, { useState, useId, FormEvent, ChangeEvent } from "react";
import Button from "../Button/Button";

const ENDPOINT = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,sexist,explicit&type=single&amount=";

type Joke = {
  joke: string;
  id: number;
};
type Statuses = "Idle" | "Loading" | "Ready" | "Fail";

function JokeFetcher() {
  const [jokes, setJokes] = useState<Joke[]>([]);
  const [jokesAmount, setJokesAmount] = useState<number>(3);
  const [status, setStatus] = useState<Statuses>("Idle");
  const id = React.useId();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Loading");

    let jokesENDPOINT = `${ENDPOINT}${jokesAmount}`;
    
    let jokesENDPOINTsingle = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,sexist,explicit&type=single"
    
    const response = await fetch(jokesAmount == 1 ? jokesENDPOINTsingle : jokesENDPOINT);
    const json = await response.json();

    if (!json.error) {
      setStatus("Ready");
      if (jokesAmount === 1) {
        setJokes([{
          joke: json.joke,
          id: json.id
        }])
      } else {
        setJokes(json.jokes)
      }
    } else {
      setStatus("Fail");
    }
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setJokesAmount(Number(event.target.value));
  }
  return (
    <div className="mt-10 mb-10 border-t-1">
      <h1 className="text-3xl text-center text-cyan-600 p-20">Jokes Fetcher</h1>

      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center flex-col gap-3 mb-10"
      >
        <Button type="submit">
          {status === "Loading" ? <p>Loading..</p> : <p>Get Jokes</p>}
        </Button>

        <label htmlFor={`jokesNum${id}`}>Number of jokes: &nbsp;</label>
        <input
          className="border-cyan-600 border rounded text-center p-1"
          value={jokesAmount}
          type="number"
          id={`jokesNum${id}`}
          max={10}
          min={1}
          onChange={handleChange}
        />
      {jokes.length > 0 && (
        <Button onClick={() => setJokes([])}>Clear Jokes</Button>
      )}
      </form>

      {status === "Fail" && (
        <p className="text-red-600 uppercase text-3xl">Error Fetching Jokes</p>
      )}
      <div className="flex flex-col p-20 bg-[#f9f9f9] shadow-lg rounded-2xl">
        {jokes.map(({ joke, id }, index) => (
          <span key={id} className="text-2xl text-left p-1">
            <span className="text-blue-700">{index + 1}</span>
            - {joke}
          </span>
        ))}
      </div>
    </div>
  );
}

export default JokeFetcher;
