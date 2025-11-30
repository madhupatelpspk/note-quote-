const journalForm = document.getElementById("diary-form");
const entriesDiv = document.getElementById("entries");

journalForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const dateInput = document.getElementById("date");
  const entryInput = document.getElementById("entry");

  const newEntry = {
    date: dateInput.value,
    entry: entryInput.value
  };

  // Save the new entry to local storage (or another storage method)
  // This example just shows how to add it to the UI for demonstration

  const entryElement = document.createElement("div");
  entryElement.classList.add("entry");

  const dateHeading = document.createElement("h2");
  dateHeading.textContent = newEntry.date;
  entryElement.appendChild(dateHeading);

  const entryParagraph = document.createElement("p");
  entryParagraph.textContent = newEntry.entry;
  entryElement.appendChild(entryParagraph);

  entriesDiv.appendChild(entryElement);

  journalForm.reset();
});
