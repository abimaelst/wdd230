const directoryContent = document.getElementById("directoryContent");
const listViewBtn = document.getElementById("listViewBtn");
const gridViewBtn = document.getElementById("gridViewBtn");

fetch("./data/members.json")
  .then((response) => response.json())
  .then((members) => {
    displayMembers(members, "grid-view");

    listViewBtn.addEventListener("click", () => {
      listViewBtn.classList.add("active");
      gridViewBtn.classList.remove("active");
      displayMembers(members, "list-view");
    });

    gridViewBtn.addEventListener("click", () => {
      gridViewBtn.classList.add("active");
      listViewBtn.classList.remove("active");
      displayMembers(members, "grid-view");
    });
  });

function displayMembers(members, viewMode) {
  directoryContent.innerHTML = "";
  directoryContent.classList = viewMode;

  if (viewMode === "list-view") {
    const table = document.createElement("table");
    const headerRow = table.insertRow();
    ["Name", "Address", "Phone", "Website", "Membership"].forEach(
      (headerText) => {
        const th = document.createElement("th");
        th.textContent = headerText;
        headerRow.appendChild(th);
      }
    );

    members.forEach((member) => {
      const row = table.insertRow();
      const nameCell = row.insertCell();
      nameCell.innerHTML = `<h3>${member.name}</h3>`;
      row.insertCell().textContent = member.address;
      row.insertCell().textContent = member.phone;
      const websiteCell = row.insertCell();
      websiteCell.innerHTML = `<a href="${member.website}" target="_blank">Website</a>`;
      row.insertCell().textContent = member.membership;
    });

    directoryContent.appendChild(table);
  } else {
    members.forEach((member) => {
      let item = document.createElement("div");
      item.classList.add("member-item");
      item.innerHTML = `
          <h3>${member.name}</h3>
          <img src="images/${member.image}" alt="${member.name} logo">
          <p>${member.address}</p>
          <p>${member.phone}</p>
          <a href="${member.website}" target="_blank">Website</a>
          <p>Membership: ${member.membership}</p>
        `;
      directoryContent.appendChild(item);
    });
  }
}
