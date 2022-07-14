const btn = document.querySelector(".button");

function clickBtn() {
  if (this.value === "turnOff") {
    document.querySelector("html").style.backgroundColor = "#403650";
    document.querySelector("body").style.backgroundColor = "#403650";
    document.querySelector(".button").style.backgroundColor = "#8879B0";
    document.querySelector("body").style.color = "#D7CDF5";
    document.querySelector("p").style.color = "#D7CDF5";
    document.querySelector(".button").style.color = "#f9e882";
    this.value = "turnOn";
  } else {
    document.querySelector("html").style.backgroundColor = "#D7CDF5";
    document.querySelector("body").style.backgroundColor = "#D7CDF5";
    document.querySelector(".button").style.backgroundColor = "#f9e882";
    document.querySelector("body").style.color = "#403650";
    document.querySelector("p").style.color = "#403650";
    document.querySelector(".button").style.color = "#8879B0";
    this.value = "turnOff";
  }
}

btn.addEventListener("click", clickBtn);
