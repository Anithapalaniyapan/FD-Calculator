function fdRate() {
  const months = Number(document.getElementById("input").value);
  let rate = 0;
  if (months < 3) rate = 5.8;
  else if (months >= 3 && months <= 6) rate = 6.5;
  else if (months >= 7 && months <= 9) rate = 6.8;
  else rate = 7;

  let result = document.querySelector("#result");
  result.innerHTML = "Your interest rate is " + rate + "%";
}
