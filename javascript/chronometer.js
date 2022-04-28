class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    if (callback) { 
      this.intervalId = setInterval(() => {
        this.currentTime += 1;
      }, 1000) 
    } else {
        this.intervalId = setInterval(() => {
        this.currentTime += 1;
        }, 1000) 
      }
    }

  getMinutes() {
      const minutes = Math.floor(this.currentTime / 60);
      return `${minutes} minutes have passed`;
  }

  getSeconds() {
      const seconds = this.currentTime % 60;
      return `${seconds} seconds have passed`;
  }

  computeTwoDigitNumber(value) {
    let TwoDigitNumber = ("0" + value).slice(-2)
    return TwoDigitNumber
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    //this.stop();
    this.currentTime = 0;
    // We also need to reset the values in our HTML file, by using .innerHTML.
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())} : ${this.computeTwoDigitNumber(this.getSeconds())}` 
  } 
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
