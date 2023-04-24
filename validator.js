const validator = {
  isValid: function(creditCardNumber){
    const reverseCard = creditCardNumber.split('').reverse();

    let addNumbers = 0;

    for(let i = 0; i < reverseCard.length; i++){
      let numberCardValidater = parseInt(reverseCard[i])

      if (i % 2 === 1) {
        numberCardValidater = numberCardValidater * 2;
        if (numberCardValidater > 9) {
          numberCardValidater = numberCardValidater - 9;
        }
      }

      addNumbers = addNumbers + numberCardValidater;
    }

    if(addNumbers % 10 === 0) {
      return true
    }
    else {
      return false
    }
  },

  maskify: function(creditCardNumber){
    const numMask = creditCardNumber.replace(/.(?=.{4})/g, "#");

    return numMask;
  }

};
export default validator;
