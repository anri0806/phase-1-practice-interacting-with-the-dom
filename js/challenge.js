document.addEventListener("DOMContentLoaded", function () {
  let counter = document.getElementById("counter");

  const timer = setInterval(function () {
    counter.innerText = parseInt(counter.innerText) + 1;
  }, 1000);

  //decrement
  const minus = document.querySelector("#minus");
  minus.addEventListener("click", function () {
    counter.innerText = parseInt(counter.innerText) - 1;
  });

  //increment
  const plus = document.querySelector("#plus");
  plus.addEventListener("click", function () {
    counter.innerText = parseInt(counter.innerText) + 1;
  });

  //likes
  let heart = document.querySelector("#heart");
  heart.addEventListener("click", function () {
    let likeMessage = document.querySelector("ul.likes");
    let countLike = 0;
    countLike += 1;
    let li = document.createElement("li");
    li.innerText = `${counter.innerText} has been liked ${countLike} times.`;
    likeMessage.append(li);
  });

  //pause counter
  let pause = document.querySelector("button#pause");
  pause.addEventListener("click", function () {
    let disableBtn = document.getElementsByClassName("disable");

    if (pause.innerText === "pause") {
      //pause the counter
      clearInterval(timer);

      //disable buttons
      for (let i = 0; i < disableBtn.length; i++) {
        disableBtn[i].disabled = true;
      }
      //switch label
      pause.innerText = "resume";

    } else if (pause.innerText === "resume") {
      //resume counter
      setInterval(function () {
        counter.innerText = parseInt(counter.innerText) + 1;
      }, 1000)
      //enable buttons
      for (let i = 0; i < disableBtn.length; i++) {
        disableBtn[i].disabled = false;
      }
      //switch label
      pause.innerText = "pause";
    }
  });

  //comment
  let submit = document.querySelector("#submit");
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    let input = document.querySelector("input#comment-input");
    let p = document.createElement("p");
    p.innerHTML = input.value;
    let list = document.querySelector("#list");
    list.appendChild(p);

    document.querySelector("#comment-form").reset();
  });
});
