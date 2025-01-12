const botao = document.getElementById("contactbutton");

botao.addEventListener("mouseover", () => {
  botao.style.transform = "scale(1.1)";
  botao.style.boxShadow = "0 0 15px rgba(31, 124, 255, 0.8), 0 0 30px rgba(31, 124, 255, 0.6)";
});

botao.addEventListener("mouseout", () => {
  botao.style.transform = "scale(1)";
  botao.style.boxShadow = "0 0 10px rgba(31, 124, 255, 0.5), 0 0 20px rgba(31, 124, 255, 0.3)";
});

botao.addEventListener("mouseover", () => {
  const afterElement = botao.querySelector("::after");
  if (afterElement) {
    afterElement.style.opacity = "1";
    afterElement.style.transform = "scale(1.2)";
  }
});

botao.addEventListener("mouseout", () => {
  const afterElement = botao.querySelector("::after");
  if (afterElement) {
    afterElement.style.opacity = "0";
    afterElement.style.transform = "scale(0.8)";
  }
});
