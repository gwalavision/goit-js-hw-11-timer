const refs = {
    daysIndicator: document.querySelector('[data-value="days"]'),
    hoursIndicator: document.querySelector('[data-value="hours"]'),
    minsIndicator: document.querySelector('[data-value="mins"]'),
    secsIndicator: document.querySelector('[data-value="secs"]'),
}

const timeCounter = (time) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000)

    refs.daysIndicator.textContent = days
    refs.hoursIndicator.textContent = hours
    refs.minsIndicator.textContent = mins
    refs.secsIndicator.textContent = secs
}

function pad(value) {
  return String(value).padStart(2, '0');
}


class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  start() {
    timeCounter(0);

    setInterval(() => {
      const delta = this.targetDate - Date.now();

      timeCounter(delta);
    }, 1000);
  }
}

const countdownTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});

countdownTimer.start();




