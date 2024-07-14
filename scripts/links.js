const baseURL = "https://abimaelst.github.io/wdd230/";

const linksURL = "https://abimaelst.github.io/wdd230/data/links.json";

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  console.log(data);

  listElement = document.querySelector("#weeks-activity");

  if (listElement) {
    data.weeks.forEach((item) => {
      const li = document.createElement("li");

      let linksHTML = "";

      item.links.map((link, index) => {
        linksHTML += `<a href="${link.url}">${link.title}</a> ${
          index + 1 < item.links.length ? " | " : ""
        } `;
        return;
      });

      li.innerHTML = `
                <span>${item.week}:</span>
                ${linksHTML}
            `;
      listElement.appendChild(li);
    });
  }
}

getLinks();
