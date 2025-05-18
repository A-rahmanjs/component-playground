import React from "react";
import { format } from "date-fns/format";
function Clock() {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const refresh = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(refresh);
  }, [time]);
  return (
    <div>
      <span>{format(time, "hh:mm:ss a")}</span>
      <br />
      <span>{format(time, "MM/dd/yyyy")}</span>
    </div>
  );
}

export default Clock;
