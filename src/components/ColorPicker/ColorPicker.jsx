import React from "react";
import useLocalStorage from "../../Hooks/useLocalStorage/useLocalStorage";

function Colorpicker() {
  const { getItem, setItem } = useLocalStorage("color");
  const initialColor = getItem() || "#4A6DA5";

  const [color, setColor] = React.useState(initialColor);

  React.useEffect(() => {
    setItem(color);
  }, [color, setItem]);
  return (
    <div className="flex items-center justify-center flex-col mt-10">
      <h1 className="text-cyan-600 text-4xl text-center m-5">Color Picker</h1>
      <div
        className="h-[250px] lg:w-[700px] w-[300px] mb-5 rounded border-cyan-500 border "
        style={{ backgroundColor: color }}
      ></div>
      <form>
        <input
          type="color"
          value={color}
          onChange={(event) => setColor(event.target.value)}
          className="h-10 w-10 hover:cursor-pointer rounded-4xl"
        />
      </form>
    </div>
  );
}

export default Colorpicker;
