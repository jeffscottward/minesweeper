import moment from "moment";
export default function (HOCsignal, killcode) {
  let duration = moment.duration({minutes: 5, seconds: 2});
  let timestamp = new Date(0, 0, 0, 2, 10, 30);
  const interval = 1;

  let timer = setInterval(function() {
    timestamp = new Date(timestamp.getTime() + interval * 1000);
    
    duration = moment.duration(
      duration.asSeconds() - interval,
      "seconds"
    );

    let min = duration.minutes();
    let sec = duration.seconds();

    sec -= 1;

    if (min < 0) return clearInterval(timer);

    if (min < 10 && min.length != 2) min = "0" + min;

    if (sec < 0 && min != 0) {
      min -= 1;
      sec = 59;
    } else {
      if (sec < 10 && sec.length != 2) sec = "0" + sec;
    }

    HOCsignal({
      type: "CLOCK_TICK",
      payload: (min + ":" + sec)
    });
    
    if (min === 0 && sec === 0) {
      clearInterval(timer);
    }
  }, 1000);
}