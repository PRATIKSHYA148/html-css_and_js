let names = [];

function pushNames() {
  names.push("Panda", "Cat", "Dog");
  updateUI();
  document.getElementById("removedName").querySelector("span").textContent = "None";
}

function popName() {
  if (names.length === 0) {
    alert("⚠️ No names to pop!");
    return;
  }
  const removed = names.pop();
  updateUI();
  document.getElementById("removedName").querySelector("span").textContent = removed;
}

function updateUI() {
  const list = document.getElementById("nameList");
  list.innerHTML = "";
  names.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    list.appendChild(li);
  });
}
