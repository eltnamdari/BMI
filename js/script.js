let button = document.getElementById("btn");
let firstname = document.getElementById("firstName");
let lastname = document.getElementById("lastName");

button.addEventListener("click", calculateBMI);

function calculateBMI() {
  let height = parseInt(document.getElementById("height").value);
  let weight = parseInt(document.getElementById("weight").value);
  let firstname = parseInt(document.getElementById("firstName").value);
  let lastname = parseInt(document.getElementById("lastName").value);

  let result = document.getElementById("result");

  {
    let bmi = weight / ((height * height) / 10000);

    if (bmi < 18.6)
      result.innerHTML = `<h1> dear ${name} you are under weight</h1>`;
    else if (bmi >= 18.6 && bmi < 24.9)
      result.innerHTML = `<h1> dear ${name} you are in normal weight</h1>`;
    else result.innerHTML = `<h1> dear ${name} you are over weight</h1>`;
  }
}
