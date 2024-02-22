const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const button = document.getElementById("button");
const nameTableBody = document.getElementById("name-table-body");

function addName() {
  // Create a new row
  const newRow = document.createElement("tr");

  // Create new cells for the first and last names
  const firstNameCell = document.createElement("td");
  const lastNameCell = document.createElement("td");

  // Set the content of the new cells
  firstNameCell.textContent = firstName.value;
  lastNameCell.textContent = lastName.value;

  // Create a delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function () {
    // Remove the corresponding row when the delete button is clicked
    newRow.remove();
  });

  // Append the new cells and delete button to the new row
  newRow.appendChild(firstNameCell);
  newRow.appendChild(lastNameCell);
  newRow.appendChild(deleteButton);

  // Append the new row to the table body
  nameTableBody.appendChild(newRow);

  // Clear input fields after adding the name
  firstName.value = "";
  lastName.value = "";
}

button.addEventListener("click", addName);
