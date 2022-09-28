const isValidLength = (phoneNumber) => {
    const validLength = 10;
    if (phoneNumber.length === validLength) {
      return true;
    } else {
      return false;
    }
  }

console.log(isValidLength('12347890'));