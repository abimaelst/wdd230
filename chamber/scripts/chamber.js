const dateOption = {
    year: "numeric"
};

document.querySelector("#year").textContent = new Date().toLocaleDateString("en-Us", dateOption);

// This code is to show when last the site was updated
const lastModifie = document.lastModified;
color = document.querySelector("#lastModified");
color.style.color = "#0E1208";
color.textContent = (`This site was last modified: ${lastModifie}`);

// This code is create a hambugger for the mobile view
const menu = document.querySelector("#menu");
const links = document.querySelector("nav");

menu.addEventListener("click", () => {
    links.classList.toggle("open");
    menu.classList.toggle("open");
});



const visit = document.querySelector(".visits");

// Get the current date and time
const now = new Date();

// Check if this is the user's first visit
if (!localStorage.getItem('lastVisit')) {
  // Set the last visit date to now
  localStorage.setItem('lastVisit', now.getTime());
  visit.textContent = 'Welcome! Let us know if you have any questions.';
  visit.style.fontWeight = "bold";
} else {
  // Get the last visit date from localStorage
  const lastVisit = new Date(parseInt(localStorage.getItem('lastVisit')));

  // Calculate the time difference between visits
  const timeDiff = now.getTime() - lastVisit.getTime();
  const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));

  // Display the appropriate message
  if (daysDiff == 0) {
    visit.textContent = 'Back so soon! Awesome!';
    visit.style.fontWeight = "bold";
  } else {
    const daysText = daysDiff == 1 ? 'day' : 'days';
    visit.textContent = `You last visited ${daysDiff} ${daysText} ago.`;
    visit.style.fontWeight = "bold";
  }

//   lastVisit++;
  // Update the last visit date to now
  localStorage.setItem('lastVisit', now.getTime());
}
