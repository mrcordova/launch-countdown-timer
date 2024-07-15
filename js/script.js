({
  plugins: ["jsdom-quokka-plugin"],
  jsdom: { file: "index.html" }, // Located in project root
});

const countdownDate = new Date();
countdownDate.setTime(countdownDate.getTime() + 14 * 24 * 60 * 60 * 1000);

const days = document.querySelectorAll(".days");
const hours = document.querySelectorAll(".hours");
const minutes = document.querySelectorAll(".minutes");
const seconds = document.querySelectorAll(".seconds");

window.addEventListener("load", () => {
  //   startCountdown();
  setInterval(function () {
    const now = new Date().getTime();

    const distance = countdownDate.getTime() - now;
    const daysNum = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hoursNum = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const secondsNum = Math.floor((distance % (1000 * 60)) / 1000);

    for (const day of days) {
      day.textContent = `${daysNum}`;
    }
    for (const hour of hours) {
      hour.textContent = `${hoursNum}`;
    }
    for (const minute of minutes) {
      minute.textContent = `${mins}`;
    }
    for (const second of seconds) {
      second.textContent = `${secondsNum + 1}`;
      if (second.classList.contains("top-number")) {
        second.parentElement.classList.toggle("top-half-anim");
      } else if (second.classList.contains("main-seconds")) {
        second.textContent = `${secondsNum}`;
        // second.parentElement.classList.toggle("bottom-half-anim");
      }
    }
  }, 500);
});
