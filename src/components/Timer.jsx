import { useTimer } from "react-timer-hook";

function Timer({ timeInSecs }) {
  const time = new Date();
  time.setSeconds(time.getSeconds() + timeInSecs);
  const { hours, seconds, minutes } = useTimer({
    expiryTimestamp: time
  });

  return timeInSecs > 3601 ? (
    <span>{`${hours}:${minutes}:${seconds}`}</span>
  ) : timeInSecs <= 3600 && timeInSecs > 60 ? (
    <span>{`${minutes}:${seconds}`}</span>
  ) : (
    <span>{`${seconds}`}</span>
  );
}

export default Timer;
