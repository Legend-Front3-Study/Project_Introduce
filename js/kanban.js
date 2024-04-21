const input = document.querySelector("#todo-input");
const form = document.querySelector("#todo-form");
const todoList = document.querySelector(".todoList");
const taskList = document.querySelectorAll(".taskList");
const add = document.querySelector(".add");

// 할일 추가 버튼 클릭
add.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value !== "") {
        createPTag(input.value, todoList);
        input.value = "";
        updateToDo();
    } else {
        input.setAttribute("placeholder", "할 일을 입력해주세요.");
    }
});

// 목록 삭제 기능(현재 할일만 가능)
taskList.forEach((task) => {
    task.addEventListener("dblclick", (e) => {
        if (e.target.classList.contains("fixed")) {
            alert("삭제 하실 수 없습니다.");
        } else {
            const check = confirm(e.target.innerText + " 를 지우시겠습니까?");
            if (check) {
                if (e.target.classList.contains("task")) {
                    e.target.remove();
                    updateToDo();
                }
            }
        }
    });

    task.addEventListener("input", (e) => {
        updateToDo();
    });
});

// localhost 값 HTML 생성 기능
function displayTasks() {
    const todoAll = document.querySelectorAll(".taskList");
    for (let value1 of todoAll) {
        const storageObj = JSON.parse(
            localStorage.getItem(value1.classList[0])
        );
        if (storageObj !== null) {
            for (let value of storageObj) {
                createPTag(value.content, value1);
            }
        }
    }
}

window.onload = displayTasks;

// p태그 생성해주는 함수
function createPTag(value, parent) {
    const newTaskElement = document.createElement("p");
    newTaskElement.setAttribute("draggable", "true");
    newTaskElement.setAttribute("class", "task");
    newTaskElement.setAttribute("contenteditable", "true");
    newTaskElement.innerText = value;
    newTaskElement.addEventListener("dragstart", () => {
        newTaskElement.classList.add("is-dragging");
    });

    newTaskElement.addEventListener("dragend", () => {
        newTaskElement.classList.remove("is-dragging");
    });

    parent.appendChild(newTaskElement);
}

// HTML 값 localStorage에 업데이트
function updateToDo() {
    const todoAll = document.querySelectorAll(".taskList");
    for (let value of todoAll) {
        const todo = value.querySelectorAll(".task");
        const array = [];
        todo.forEach((task, index) => {
            const updateObj = {
                id: index,
                content: task.innerText,
            };
            array.push(updateObj);
        });

        localStorage.setItem(value.classList[0], JSON.stringify(array));
    }
}

taskList.forEach((task) => {
    task.addEventListener("blur", (e) => {
        console.log("zzz");
        updateToDo();
    });
});
