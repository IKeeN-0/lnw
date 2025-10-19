const display = document.getElementById("display");
const nums = document.querySelectorAll(".num");
const ops = document.querySelectorAll(".op");
const clearBtn = document.querySelector(".clear");
const totalBtn = document.querySelector(".total");

let current = "";
let operator = "";
let previous = "";

nums.forEach(btn => {
  btn.addEventListener("click", () => {
    // ถ้าพึ่งคำนวณเสร็จแล้วกดเลขใหม่ ให้เริ่มใหม่
    if (previous === "" && operator === "" && display.textContent == current) {
      current = "";
    }

    current += btn.textContent;
    display.textContent = previous + " " + operator + " " + current;
  });
});

ops.forEach(btn => {
  btn.addEventListener("click", () => {
    if (current === "" && previous === "") return;
    if (previous !== "" && current !== "") calculate();
    operator = btn.dataset.op;
    previous = current || previous
    current = "";
    display.textContent = previous + " " + operator;
  });
});

totalBtn.addEventListener("click", () => {
  if (previous === "" || current === "") return;
  calculate();
  operator = "";
});

clearBtn.addEventListener("click", () => {
  current = "";
  previous = "";
  operator = "";
  display.textContent = "";
});

function calculate() {
  const prev = parseFloat(previous);
  const curr = parseFloat(current);
  let result = 0;

  switch (operator) {
    case "+": result = prev + curr; break;
    case "-": result = prev - curr; break;
    case "*": result = prev * curr; break;
    case "/": result = prev / curr; break;
  }

  display.textContent = result;
  current = result.toString();
  previous = "";
}

// const display = document.getElementById("display");
// const nums = document.querySelectorAll(".num");
// const ops = document.querySelectorAll(".op");
// const clearBtn = document.querySelector(".clear");
// const totalBtn = document.querySelector(".total");

// let current = "";
// let operator = "";
// let previous = "";

// // เมื่อกดตัวเลข
// nums.forEach(btn => {
//   btn.addEventListener("click", () => {
//     current += btn.textContent;
//     display.textContent = current;
//   });
// });

// // เมื่อกดเครื่องหมาย + - × ÷
// ops.forEach(btn => {
//   btn.addEventListener("click", () => {
//     if (current === "") return;
//     if (previous !== "") calculate();
//     operator = btn.dataset.op;
//     previous = current;
//     current = "";
//   });
// });

// // เมื่อกดปุ่ม =
// totalBtn.addEventListener("click", () => {
//   if (previous === "" || current === "") return;
//   calculate();
//   operator = "";
// });

// // เมื่อกดปุ่ม C
// clearBtn.addEventListener("click", () => {
//   current = "";
//   previous = "";
//   operator = "";
//   display.textContent = "";
// });

// // ฟังก์ชันคำนวณ
// function calculate() {
//   const prev = parseFloat(previous);
//   const curr = parseFloat(current);
//   let result = 0;

//   switch (operator) {
//     case "+": result = prev + curr; break;
//     case "-": result = prev - curr; break;
//     case "*": result = prev * curr; break;
//     case "/": result = prev / curr; break;
//   }

//   display.textContent = result;
//   current = result.toString();
//   previous = "";
// }
