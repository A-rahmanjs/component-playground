import React from "react";

function Colorpicker() {
  const [color, setColor] = React.useState("#4A6DA5");
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div className="flex items-center justify-center flex-col mt-10">
      <div
        className="h-[250px] lg:w-[700px] w-[300px] mb-5 rounded border-cyan-500 border "
        style={{ backgroundColor: color }}
      ></div>
      <form onSubmit={handleSubmit}>
        <input
          type="color"
          value={color}
          onChange={(event) => setColor(event.target.value)}
          className="h-10 w-10 rounded hover:cursor-pointer"
        />
      </form>
    </div>
  );
}

export default Colorpicker;
