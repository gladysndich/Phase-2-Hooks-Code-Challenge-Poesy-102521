import React from "react";
import Poem from "./Poem";

function PoemsContainer({ poems }) {
  return (
    <div className="poems-container">
      {/* render a list of <Poem> components in here */}
      {poems.map((p) => (
        <Poem
        key = {p.id}
        id = {p.id}
        title = {p.title}
        content = {p.content}
        author = {p.author}
        />
      ))}
    </div>
  );
}

export default PoemsContainer;
