import { useState } from "react";
import Button from "./Button";
import "./Galaxy.css";

export default function Galaxy({ nama, gambar, deskripsi }) {
  const [like, setLike] = useState(true);
  const [more, setMore] = useState(false);

  function handleMoreClick() {
    setMore(!more);
  }

  function handleLikeClick() {
    setLike(!like);
  }

  return (
    <div className="card">
      <h1>{nama}</h1>
      <img src={gambar} />
      {more && <p>{deskripsi}</p>}
      <Button className="description" onClick={handleMoreClick}>
        {more ? "Hide" : "Show"} Description
      </Button>
      <Button
        onClick={handleLikeClick}
        style={{
          backgroundColor: like ? "blue" : "red",
        }}
      >
        {like ? "Like" : "Unliked"}
      </Button>
    </div>
  );
}
