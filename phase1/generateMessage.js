const namesAndDiscounts = [
    { name: 'Anna', discount: 50 },
    { name: 'Laura', discount: 40 },
    { name: 'Josh', discount: 30 },
    { name: 'Min', discount: 50 },
    { name: 'Karla', discount: 60 }
  ];

const generateMessage = (clients) => {
    console.log(`Hi ${clients.name}! ${clients.discount}% off our best candies for you!`);
}

const massages = namesAndDiscounts.map(generateMessage);

