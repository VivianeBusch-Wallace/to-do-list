const addItem = () => {
  // grab value of input >>
  let listItem = document.querySelector("#new-to-do-item").value;
  //if input is empty don't add to to do list >>
  if (listItem != "") {
    // create new list item for ul >>
    let newLi = document.createElement("li");
    // define text, create node from listItem >>
    let itemText = document.createTextNode(listItem);
    // inject nodes into html >>
    newLi.appendChild(text);
    document.querySelector(".to-do-list").appendChild(newLi);
    // clear input area for next item to add >>
    document.querySelector("#new-to-do-item").value = "";
  } else {
    // remind user of input >>
    document.querySelector("#new-to-do-item").placeholder =
      "Please enter text first";
  }
};
