const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const allHands = document.querySelectorAll('.hand')

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360 ) + 90; // 60 seconds per round + 90 degree offset
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  if(secondsDegrees === 90) {
    allHands.forEach(hand => hand.style.transition = 'none');
  } else {
    allHands.forEach(hand => hand.style.transition = '');
  }

  const mins = now.getMinutes();
  const minsDegree = ((mins / 60) * 360 ) + 90; // 60 minutes per round
  minHand.style.transform = `rotate(${minsDegree}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12 ) * 360 ) + 90; // 12 hours per round
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

