const x = document.getElementById("login");
const y = document.getElementById("signup");
const z = document.getElementById("switchCol");

const signup = () => {
  x.style.left = "-400px";
  y.style.left = "50px";
  z.style.left = "110px";
}

const login = () => {
  x.style.left = "50px";
  y.style.left = "450px";
  z.style.left = "0px";
}