import moment from "moment";


function Clock() {
  return (<div className="flex flex-col items-end text-main-color" aria-label="datetime">
  <div className="text-6xl  " aria-label="time">{ moment(new Date()).format("HH:mm")}</div>
  <div aria-label="date">{ moment(new Date()).format("dddd D MMM")}</div>
</div>);
}

export default Clock;