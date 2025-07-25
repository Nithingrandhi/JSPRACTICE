const taskinput = document.getElementById("inputtask");
const addtaskbtn = document.getElementById("addtask");
const tasklist = document.getElementById("tasklist");

addtaskbtn.addEventListener("click", () => {
    const tasktext = taskinput.value.trim();
    if (tasktext !== "") {
        addtask(tasktext);
        taskinput.value = "";
    }
});

function addtask(text) {
    const li = document.createElement('li');
    li.textContent = text;
    tasklist.append(text);
}