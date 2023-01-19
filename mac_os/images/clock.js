function currentTime() {
  const date = new Date(); 
  let mo = date.getMonth() + 1;
  let dd = date.getDate();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  if (hh == 0) {
    hh = 12;
  }

  if (hh > 12) {
    hh = hh - 12;
    session = "PM";
  }

  hh = (hh < 10) ? "0" + hh : hh;
  mm = (mm < 10) ? "0" + mm : mm;
  ss = (ss < 10) ? "0" + ss : ss;

  const clock = mo + "월 " + dd + "일 " + hh + ":" + mm + " " + session;

  document.getElementById("clock").innerText = clock; 

  setTimeout(() => currentTime(), 1000);
}
currentTime();