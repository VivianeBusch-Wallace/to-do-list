const addItem = () => {
  // grab value of input >>
  let listItem = document.querySelector("#new-to-do-item").value;
  //if input is empty don't add to to do list >>
  if (listItem != "") {
    // create new list item for ul >>
    let newLi = document.createElement("li");
    const button1 = document.createElement("input");
    const button2 = document.createElement("input");
    const button3 = document.createElement("input");

    const label1 = document.createElement("label");
    const label2 = document.createElement("label");
    const label3 = document.createElement("label");

    // define text, create node from listItem >>
    let itemText = document.createTextNode(listItem);
    newLi.appendChild(itemText);
    // defining type of input boxes >>
    button1.type = "radio";
    button2.type = "radio";
    button3.type = "radio";
    // naming of input boxes so that it toggles between them >>
    button1.name = listItem;
    button2.name = listItem;
    button3.name = listItem;

    label1.innerText = "priority one";
    label2.innerText = "priority two";
    label3.innerText = "priority three";
    // append radio buttons to each list item >>

    label1.appendChild(button1);
    label2.appendChild(button2);
    label3.appendChild(button3);

    newLi.appendChild(label1);
    newLi.appendChild(label2);
    newLi.appendChild(label3);

    // document.querySelector(".to-do-list").appendChild(newLi);
    // creating a priority element >>
    let priority = document.querySelector(".ordered-list");
    priority.appendChild(newLi);
    // document.querySelector(".ordered-list").appendChild(priority);
    console.log(itemText);
    // clear input area for next item to add >>
    document.querySelector("#new-to-do-item").value = "";
  } else {
    // remind user of input >>
    document.querySelector("#new-to-do-item").placeholder =
      "Please enter text first";
  }
};

// ========== For Hadi's to do list example ==========

const addToList = (e) => {
  // Preventing the from sending information out aka Reloading the page
  e.preventDefault();
  let userData = document.querySelector("#userData").value;
  console.log(userData);
  // Checking my input if it has a text
  if (userData != "") {
    let newLi = document.createElement("li");
    let text = document.createTextNode(userData);
    newLi.appendChild(text);
    // Adding random colour to my list item
    newLi.style.color = colorGen();
    document.querySelector(".result").appendChild(newLi);
    document.querySelector("#userData").value = "";
    // Other way to add random colours for all of the list items that are in my page
    // const listItems = document.querySelectorAll("li");
    // listItems.forEach((item) => {
    //   item.style.color = colorGen();
    // });
    const newContainer = document.createElement("div");
    const doneButton = document.createElement("button");
    const deleteButton = document.createElement("button");
    // const checkBox = document.createElement("input");
    // checkBox.type = "checkbox";
    // newContainer.appendChild(checkBox);
    // Adding some text
    doneButton.innerHTML = "✓";
    deleteButton.innerHTML = "✗";
    // Injecting the buttons into the container
    newContainer.appendChild(doneButton);
    newContainer.appendChild(deleteButton);
    // Adding class
    doneButton.classList.add("done");
    // append container
    newLi.appendChild(newContainer);
    // Complete function
    // toggle will check if the class name exist, will remove it and if it's not will add it
    const check = () => newLi.classList.toggle("completed");
    // const del = () => newLi.remove();
    // Adding event listener to my buttons
    deleteButton.addEventListener("click", () => newLi.remove());
    doneButton.addEventListener("click", check);
  } else {
    document.querySelector("#userData").placeholder = "Please Enter text first";
  }
};
// backgroundcolor generator for font color of list items
// Random colour generator in hexa number
const colorGen = () => {
  let result = "#";
  let colorCode = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    result += colorCode[Math.floor(Math.random() * 16)];
  }
  return result;
};
// Functional check which key the user is pressing
const keyCheck = (event) => {
  console.log(event);
  if (e.key == "Enter") addToList();
};
// Adding event listener to the input
// const userInput = document.querySelector("#userData");
// userInput.addEventListener("keypress", keyCheck);

// Adding event listener to the form
// document.querySelector("form").addEventListener("submit", addToList);
