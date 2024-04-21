const draggables = document.querySelectorAll(".task");
const droppables = document.querySelectorAll(".swim-lane");

// 드래그 하면 is-dragging 클래스 붙여주기
draggables.forEach((task) => {
    task.addEventListener("dragstart", () => {
        task.classList.add("is-dragging");
    });
    task.addEventListener("dragend", (e) => {
        task.classList.remove("is-dragging");
    });
});

//
droppables.forEach((zone) => {
    zone.addEventListener("dragover", (e) => {
        const div = zone.querySelector("div");
        const bottomTask = insertAboveTask(zone, e.clientY);
        const curTask = document.querySelector(".is-dragging");
        if (!bottomTask) {
            div.appendChild(curTask);
        } else {
            div.insertBefore(curTask, bottomTask);
        }
        updateToDo();
    });
});

const insertAboveTask = (zone, mouseY) => {
    const els = zone.querySelectorAll(".task:not(.is-dragging)");
    let closestTask = null;
    let closestOffset = Number.NEGATIVE_INFINITY;

    els.forEach((task) => {
        const { top } = task.getBoundingClientRect();
        const offset = mouseY - top;
        if (offset < 0 && offset > closestOffset) {
            closestOffset = offset;
            closestTask = task;
        }
    });

    return closestTask;
};

document.addEventListener("dragover", (event) => {
    event.preventDefault(); // 드래그 중에 발생하는 이벤트의 기본 동작을 방지
});

document.addEventListener("drop", (event) => {
    event.preventDefault();
    const draggingElement = document.querySelector(".is-dragging");
    const dropZone = event.target.closest(".swim-lane");

    if (draggingElement && dropZone) {
        const div = dropZone.querySelector(".taskList");
        div.appendChild(draggingElement);
        updateTaskStyle(draggingElement, dropZone.id);
        updateToDo();
    }
});

function updateTaskStyle(task, zoneId) {
    task.className = "task"; // 기존 클래스 초기화
    switch (zoneId) {
        case "todo":
            task.classList.add("task-todo");
            break;
        case "doing":
            task.classList.add("task-doing");
            break;
        case "complete":
            task.classList.add("task-done");
            break;
    }
}
