import React, { useState } from "react";

const NewMovieInput = () => {
  const [title, setTitle] = useState("");
  const [openingtext, setOpeningtext] = useState("");
  const [releasedate, setReleasedate] = useState("");
  function onAddData(e) {
    e.preventDefault();
    let item = {
      title,
      openingtext,
      releasedate,
    };
    console.log("items", item);
    setTitle("");
    setOpeningtext("");
    setReleasedate("");
  }

  return (
    <form onSubmit={onAddData}>
      Title:
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <br />
      Opening Text:
      <input
        type="text"
        value={openingtext}
        onChange={(e) => setOpeningtext(e.target.value)}
      />
      <br />
      Release Date:
      <input
        type="Date"
        value={releasedate}
        onChange={(e) => setReleasedate(e.target.value)}
      />
      <br />
      <button>Add Movie</button>
    </form>
  );
};
export default NewMovieInput;
