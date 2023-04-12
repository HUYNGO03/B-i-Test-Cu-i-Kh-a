function numberOneTriangle(n) {
  // Kiểm tra tham số truyền vào
  if (n < 1 || n > 10) {
    alert("Nhập sai vui lòng nhập từ 1 đến 10!!");
    return;
  }

  // In hình tam giác
  let triangle = '';
  for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row += '*';
    }
    triangle += row + '<br>';
  }
  document.getElementById('result').innerHTML = triangle;
}

function printTriangle() {
  const numberInput = document.getElementById('number-a');
  const n = parseInt(numberInput.value);
  numberOneTriangle(n);
}
