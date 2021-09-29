document.addEventListener("DOMContentLoaded", function () {
  let sec = 0;
  let counter = document.getElementById("counter");
  setInterval(function () {
    counter.innerHTML = sec + 1;
    sec++;

    const minus = document.querySelector("#minus");
    minus.addEventListener("click", function () {
      counter.innerHTML = sec - 1;
    });
  }, 1000);

});

//id=minus, plus
//clearInterval for pause button
