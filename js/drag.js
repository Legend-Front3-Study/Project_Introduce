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
