const Teams_Names = [
  "Info 1",
  "Info 2",
  "Info 3 ",
  "4 Engines",
];

const lists = document.querySelectorAll("ul");

Teams_Names.forEach((ele) => {
    let element = document.createElement("li");
    element.setAttribute("draggable", "true");
    element.innerHTML = ele;
    lists[0].append(element);
});

let Teams_ = document.querySelectorAll("li");
let selected = null;

Teams_.forEach((list) => {
  list.addEventListener("dragstart", (e) => {
    selected = e.target;
    selected.classList.add("dragging");
  });
});

lists.forEach((list) => {
  list.addEventListener("dragover", (e) => {
   e.preventDefault();
  });

  list.addEventListener("drop", () => {
    if (selected) {
      list.append(selected);
      selected.classList.remove("dragging")
      selected = null;
      
    }
  });
});
