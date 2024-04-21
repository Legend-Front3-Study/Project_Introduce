document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#todo-form");
    const input = document.querySelector("#todo-input");
    const todoList = document.querySelector(".todoList");
    const taskLists = document.querySelectorAll(".taskList");

    // 폼 제출 이벤트 처리
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (input.value.trim() !== "") {
            createTaskElement(input.value, todoList, true, "task-todo"); // 드래그 가능하도록 추가
            input.value = "";
            updateToDo(); // 로컬 스토리지 업데이트
        } else {
            input.setAttribute("placeholder", "할 일을 입력해주세요.");
        }
    });

    // 각 항목의 드래그 이벤트 추가
    function addDragEvents(task) {
        task.addEventListener("dragstart", () => {
            task.classList.add("is-dragging");
        });
        task.addEventListener("dragend", () => {
            task.classList.remove("is-dragging");
            updateToDo(); // 드래그 종료 후 로컬 스토리지 업데이트
        });
    }

    // 로컬 스토리지 업데이트 함수
    function updateToDo() {
        taskLists.forEach((list) => {
            const updatedTasks = [];
            list.querySelectorAll(".task").forEach((task) => {
                updatedTasks.push({
                    content: task.textContent.replace("X", "").trim(),
                });
            });
            localStorage.setItem(list.className, JSON.stringify(updatedTasks));
        });
    }

    // 항목 생성 함수
    function createTaskElement(value, parent, draggable, additionalClass) {
        const newTaskElement = document.createElement("p");
        newTaskElement.className = `task ${additionalClass}`;
        newTaskElement.setAttribute("draggable", "true");

        const textSpan = document.createElement("span");
        textSpan.textContent = value;
        newTaskElement.appendChild(textSpan);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.className = "delete-btn";
        deleteBtn.onclick = function () {
            if (confirm("이 항목을 삭제하시겠습니까?")) {
                newTaskElement.remove();
                updateToDo(); // 로컬 스토리지에서도 삭제 후 업데이트
            }
        };
        newTaskElement.appendChild(deleteBtn);

        if (draggable) {
            addDragEvents(newTaskElement);
        }

        parent.appendChild(newTaskElement);
    }

    // 페이지 로드 시 로컬 스토리지에서 할 일 항목 로드
    window.onload = function () {
        taskLists.forEach((list) => {
            const tasks = JSON.parse(localStorage.getItem(list.className));
            if (tasks) {
                tasks.forEach((task) => {
                    let additionalClass = "task-todo";
                    if (list.classList.contains("doingList")) {
                        additionalClass = "task-doing";
                    } else if (list.classList.contains("completeList")) {
                        additionalClass = "task-done";
                    }
                    createTaskElement(
                        task.content,
                        list,
                        true,
                        additionalClass
                    );
                });
            }
        });
    };
});
