module.exports = function toReadable (number) {
    n=number.toString().split('');
    let a=["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let b=[" ","ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    let c=[" ","eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

    if (n.length===1){
      return a[number];
    }

    if (number>=11 && number <=19) {
        return c[number%10];
    }

    if (n.length===2 && number%10===0){
            return b[number/10];
    }

    if (n.length===2 && number%10!==0 && number>19){
        return (b[Math.floor(number/10)] + " " + a[number%10]);
    }

    if (n.length===3 && number%100===0) {
        return a[number/100] + " " + "hundred";
    }

    if (n.length===3 && number%100 >= 11 && number%100 <= 19) {
        return a[Math.floor(number/100)] + " " + "hundred" + " " + c[number%100 - 10];
    }

    if (n.length===3 && number%100 >= 1 && number%100 <= 9) {
        return a[Math.floor(number/100)] + " " + "hundred" + " " + a[number%100];
    }

    if (n.length===3 && (number%100)%10===0) {
        return a[Math.floor(number/100)] + " " + "hundred" + " " + b[(number%100)/10];
    }

    if (n.length===3 && (number%100)%10!==0) {
        return a[Math.floor(number/100)] + " " + "hundred" + " " + b[Math.floor((number%100)/10)] + " " + a[(number%100)%10] ;
    }
};

