let container = document.getElementById("container");
fetch("https://rickandmortyapi.com/api/character")
  .then((res) => res.json())
  .then((data) => {
    data.results.map((item) => {
      let cards = document.createElement("div");
      cards.classList.add("cards");

      let para = document.createElement("p");
      para.textContent = `person names:---------- ${item.name}`;

      let img = document.createElement("img");
      img.src = item.image;

      cards.appendChild(img);
      cards.appendChild(para);
      container.appendChild(cards);
    });
  });
