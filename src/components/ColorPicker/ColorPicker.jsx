import React from 'react';

function Colorpicker() {
  const [color, setColor] = React.useState('#FF0000');
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div>
      <div style={{ backgroundColor: color, height: 150, width: 200 }}></div>
      <form onSubmit={handleSubmit}>
        <input
          type="color"
          value={color}
          onChange={(event) => setColor(event.target.value)}
        />
      </form>
    </div>
  );
}

export default Colorpicker;
