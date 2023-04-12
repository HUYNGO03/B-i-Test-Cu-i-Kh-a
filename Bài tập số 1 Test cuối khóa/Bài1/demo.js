function sumPrimes (a, b) {
    let sum = 0;
    for (let i = a; i <= b; i++) {
      if (isPrime (i)) {
        sum += i;
      }
    }
    return sum;
  }
  
  //function to check if a number is prime or not
  function isPrime (x) {
    for (let i = 2; i < x; i++) {
      if (x % i === 0) return false;
    }
    return x !== 1 && x !== 0;
  }
  
  function calculate() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let result = document.getElementById("result");
    result.innerHTML = "Tổng các số nguyên tố trong khoảng  " + a + " và " + b + " là " + sumPrimes(a, b);
  }