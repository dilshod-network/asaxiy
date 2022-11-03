import React, { useState } from "react";
import "./Discount.scss";

function Discount() {
  const [days, setDays] = useState(0);
  const [disHours, setDisHours] = useState(0);
  const [disMinutes, setDisMinutes] = useState(0);
  const [disSeconds, setDisSeconds] = useState(0);

  const deadline = "2022-12-25";

  const getTime = (endTime) => {
    const total = Date.parse(endTime) - Date.parse(new Date()),
      day = Math.floor(total / 1000 / 3600 / 24),
      hours = Math.floor((total / 1000 / 3600) % 24),
      minutes = Math.floor(
        (total - day * 24 * 3600 * 1000 - hours * 3600 * 1000) / 1000 / 60
      ),
      seconds = Math.floor(
        (total -
          day * 24 * 3600 * 1000 -
          hours * 3600 * 1000 -
          minutes * 60 * 1000) /
          1000
      );
    return { day, hours, minutes, seconds, total };
  };

  const updateClock = () => {
    const timer = getTime(deadline);
    setDays(getZero(timer.day));
    setDisHours(getZero(timer.hours));
    setDisMinutes(getZero(timer.minutes));
    setDisSeconds(getZero(timer.seconds));
    if (timer.total === 0) {
      clearInterval(timeInterval);
    }
  };
  const timeInterval = setInterval(updateClock, 1000);

  function getZero(number) {
    if (number > 0 && number < 10) {
      return "0" + number;
    } else {
      return number;
    }
  }

  return (
    <div className="discount">
      <img
        className="img-fluid"
        src="https://assets.asaxiy.uz/uploads/toptoday/mobile/634d4db8c4403.jpg"
        alt=""
      />
      <div className="discount__product">
        <div className="discount-days item">{days}</div>
        <div className="seperater">:</div>
        <div className="discount-hours item">{disHours}</div>
        <div className="seperater">:</div>
        <div className="discount-minutes item">{disMinutes}</div>
        <div className="seperater">:</div>
        <div className="discount-seconds item">{disSeconds}</div>
      </div>
    </div>
  );
}

export default Discount;
