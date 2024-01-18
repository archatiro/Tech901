let
minute = prompt('Number of cricket chirps in 1 minute');
number = Number(minute);
console.log('The temperature is ' + Math.round(((number + 40) * 2)/2) + ' degrees farenheit');