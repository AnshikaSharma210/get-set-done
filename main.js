var tasks = [];

function addtask() {
    var tasknm = document.getElementById("add");
    var taskname = tasknm.value;
    if (taskname !== "") {
        tasks.push({ task: taskname, complete: false });
        tasknm.value = "";
        update();
    }
    else{
        alert("Please enter a Task");
    }
}

function update() {
    var pendingtasks = document.querySelector("#pendingsect");
    var completedtasks = document.querySelector("#completedsect");
    pendingtasks.innerHTML = "";
    completedtasks.innerHTML = "";
    for ( var i = 0; i < tasks.length; i++) {
        var task = tasks[i];
        var div= document.createElement("div");
        var button = document.createElement("button");
        var p = document.createElement("p");
        p.innerText = task.task;
        if (task.complete) {
            button.innerText = "";
            button.onclick = (function (i) {
                return function () {
                    tasks.splice(i, 1);
                    update();
                };
            })(i);
            div.classList.add("completed");
            div.appendChild(button);
            div.appendChild(p);
            completedtasks.appendChild(div);
        } else {
            button.innerText = "";
            button.onclick = (function (i) {
                return function () {
                    tasks[i].complete = true;
                    update();
                };
            })(i);
            div.appendChild(button);
            div.appendChild(p);
            pendingtasks.appendChild(div);
        }
    }
}

var addInput = document.getElementById("add");
addInput.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        document.getElementById("addbtn").click();
    }
});

update();
