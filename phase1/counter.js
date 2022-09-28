let counter = 0;

const increment = (myCounter) => {
   while (myCounter <= 10 ) {
    myCounter += 1; 
    console.log(myCounter);
   }
}

setInterval(increment, 2000, counter);