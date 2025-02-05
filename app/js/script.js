document.addEventListener("DOMContentLoaded", function () {
  var timers = document.querySelectorAll(".js-timer");

  timers.forEach(function (timer) {
      var startTime = timer.classList.contains("timer_big") 
          ? 5 * 3600 + 45 * 60 + 47  // Таймер big: 05:45:47
          : 3 * 3600 + 24 * 60 + 56; // Таймер small: 03:24:56

      function updateTimer() {
          var hours = Math.floor(startTime / 3600);
          var minutes = Math.floor((startTime % 3600) / 60);
          var seconds = startTime % 60;

          timer.querySelector("span").textContent =
              String(hours).padStart(2, "0") + ":" +
              String(minutes).padStart(2, "0") + ":" +
              String(seconds).padStart(2, "0");
      }

      // Оновлюємо таймер одразу
      updateTimer();

      var timerId = setInterval(function () {
          if (startTime === 0) {
              clearInterval(timerId);
              document.location.reload();
          } else {
              startTime--;
              updateTimer();
          }
      }, 1000);
  });
});
  