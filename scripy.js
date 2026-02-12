const modal = document.getElementById("modal");
const modalImg = document.getElementById("imgModal");
const captionText = document.getElementById("caption");
const fechar = document.querySelector(".fechar");

document.querySelectorAll(".desenho img").forEach(img => {
  img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.nextElementSibling.innerText;
  };
});

fechar.onclick = function () {
  modal.style.display = "none";
};
