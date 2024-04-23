const canvas = document.querySelector(".canvas");
const context = canvas.getContext("2d");
const movingObjectlist = [];
const mousePos = { x: 0, y: 0 };
context.font = "bold 30px sans-serif";
let selectedObject;
let drawStop = false;
const lifeList = [];
let checkLoose = true;
let retryImo;

const parentWidth = canvas.parentElement.clientWidth; // 부모 요소의 너비를 가져옵니다.
const desiredWidth = parentWidth * 0.95; // 부모 요소의 너비의 75%를 계산합니다.
canvas.width = desiredWidth;

const img = new Image();
img.src = "/images/pngwing.com.png";

const img2 = new Image();
img2.src = "/images/1.com.png";

const img3 = new Image();
img3.src = "/images/3.com.png";

const img4 = new Image();
img4.src = "/images/4.com.png";

const hidden = new Image();
hidden.src = "/images/hidden.com.png";

const stop1 = new Image();
stop1.src = "/images/두고보자 복수하겠어!.png";

const loose = new Image();
loose.src = "/images/바보.png";

const life = new Image();
life.src = "/images/life.png";

const retry = new Image();
retry.src = "/images/잠만보(re).png";

let oX = canvas.width * 0.5;
let oY = canvas.height * 0.5 - 225;

let wX = canvas.width * 0.9 + 50;
let wY = canvas.height * 0.9;

life.onload = function () {
    for (let i = 0; i < 5; i++) {
        lifeList.push(new lifeObject(wX, wY + 33));
        wX -= 40; // 다음 생명 이미지의 x 좌표를 조정합니다.
    }

    lifeList.forEach((object) => {
        object.draw();
    });
};

retry.onload = function () {
    retryObj = new retryObject(oX - 130, oY + 320);
};

loose.onload = function () {
    console.log("loose 이미지 생성 완료!");
};

stop1.onload = function () {
    console.log("stop 이미지 생성 완료!");
};

hidden.onload = function () {
    console.log("고라파덕 이미지 생성 완료!");

    let tempX, tempY, tempSpeed;

    tempX = Math.random() * canvas.width * 0.8;
    tempY = Math.random() * canvas.height * 0.8;
    tempSpeed = 7;
    movingObjectlist.push(new movingObject_hidden(0, tempX, tempY, tempSpeed));

    // 모든 객체를 그림
    movingObjectlist.forEach((object) => {
        object.draw();
    });
};

img4.onload = function () {
    console.log("이상해씨 생성 완료!");

    let tempX, tempY, tempSpeed;
    for (let i = 0; i < 4; i++) {
        tempX = Math.random() * canvas.width * 0.7;
        tempY = Math.random() * canvas.height * 0.7;
        tempSpeed = Math.random() * 4 + 1;
        movingObjectlist.push(new movingObject4(i, tempX, tempY, tempSpeed));
    }

    // 모든 객체를 그림
    movingObjectlist.forEach((object) => {
        object.draw();
    });
};

img3.onload = function () {
    console.log("꼬북이 생성 완료!");

    let tempX, tempY, tempSpeed;
    for (let i = 0; i < 4; i++) {
        tempX = Math.random() * canvas.width * 0.7;
        tempY = Math.random() * canvas.height * 0.7;
        tempSpeed = Math.random() * 4 + 1;
        movingObjectlist.push(new movingObject3(i, tempX, tempY, tempSpeed));
    }

    // 모든 객체를 그림
    movingObjectlist.forEach((object) => {
        object.draw();
    });
};

img2.onload = function () {
    console.log("파이리 생성 완료!");

    let tempX, tempY, tempSpeed;
    for (let i = 0; i < 4; i++) {
        tempX = Math.random() * canvas.width * 0.7;
        tempY = Math.random() * canvas.height * 0.7;
        tempSpeed = Math.random() * 4 + 1;
        movingObjectlist.push(new movingObject2(i, tempX, tempY, tempSpeed));
    }

    // 모든 객체를 그림
    movingObjectlist.forEach((object) => {
        object.draw();
    });
};

img.onload = function () {
    console.log("피카츄 생성 완료!");

    let tempX, tempY, tempSpeed;
    for (let i = 0; i < 4; i++) {
        tempX = Math.random() * canvas.width * 0.7;
        tempY = Math.random() * canvas.height * 0.7;
        tempSpeed = Math.random() * 4 + 1;
        movingObjectlist.push(new movingObject(i, tempX, tempY, tempSpeed));
    }

    // 모든 객체를 그림
    movingObjectlist.forEach((object) => {
        object.draw();
    });
};

canvas.addEventListener("click", clickHandler);

function clickHandler(event) {
    console.log(event.layerX, event.layerY);
    const x = event.layerX;
    const y = event.layerY;
}

class retryObject {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.draw();
    }

    draw() {
        context.drawImage(retry, this.x, this.y, 200, 200);
    }
}

class lifeObject {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.draw();
    }
    draw() {
        context.drawImage(life, this.x, this.y, 30, 30);
    }
}

class movingObject_hidden {
    constructor(index, x, y, speed) {
        this.index = index;
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.width = 40;
        this.height = 25;
        this.draw();
    }

    draw() {
        // context.globalAlpha = 0.5;
        context.drawImage(hidden, this.x, this.y, 80, 100);
        // context.globalAlpha = 1.0;
    }
}

class movingObject4 {
    constructor(index, x, y, speed) {
        this.index = index;
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.width = 100;
        this.height = 25;
        this.draw();
    }

    draw() {
        // context.globalAlpha = 0.5;
        context.drawImage(img4, this.x, this.y, 80, 100);
        // context.globalAlpha = 1.0;
    }
}

class movingObject3 {
    constructor(index, x, y, speed) {
        this.index = index;
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.width = 100;
        this.height = 25;
        this.draw();
    }

    draw() {
        // context.globalAlpha = 0.5;
        context.drawImage(img3, this.x, this.y, 90, 100);
        // context.globalAlpha = 1.0;
    }
}

class movingObject2 {
    constructor(index, x, y, speed) {
        this.index = index;
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.width = 100;
        this.height = 25;
        this.draw();
    }

    draw() {
        // context.globalAlpha = 0.5;
        context.drawImage(img2, this.x, this.y, 90, 100);
        // context.globalAlpha = 1.0;
    }
}

class movingObject {
    constructor(index, x, y, speed) {
        this.index = index;
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.width = 100;
        this.height = 25;
        this.draw();
    }

    draw() {
        // context.globalAlpha = 0.5;
        context.drawImage(img, this.x, this.y, 90, 100);
        // context.globalAlpha = 1.0;
    }
}

function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    let movingObject;
    for (let i = 0; i < movingObjectlist.length; i++) {
        movingObject = movingObjectlist[i];
        movingObject.x += movingObject.speed;
        if (movingObject.x > canvas.width) {
            movingObject.x = -movingObject.width;
            const newTempY = Math.random() * canvas.height * 0.8;
            movingObject.y = newTempY;
        }
        movingObject.draw();
    }

    lifeList.forEach((lifeObj) => {
        lifeObj.draw();
    });

    if (drawStop) {
        context.drawImage(stop1, oX, oY, 500, 500); // drawStop 플래그가 true일 때 이미지를 그림
        retryObj.draw();
        //retryImo = context.drawImage(retry, oX-130, oY+320, 200, 200);
        canvas.addEventListener("click", retryClickHandler);
        return;
    }

    if (!checkLoose) {
        context.drawImage(loose, oX, oY, 500, 500);
        retryObj.draw();
        //retryImo = context.drawImage(retry, oX-130, oY+320, 200, 200);
        canvas.addEventListener("click", retryClickHandler);
        return;
    }

    requestAnimationFrame(render);
}

function retryClickHandler(event) {
    const boundingRect = canvas.getBoundingClientRect();
    const clickX = event.clientX - boundingRect.left;
    const clickY = event.clientY - boundingRect.top;

    // 클릭한 위치가 Retry 이미지의 범위 내에 있는지 확인
    if (
        clickX > retryObj.x &&
        clickX < retryObj.x + 200 && // retry 이미지의 너비
        clickY > retryObj.y &&
        clickY < retryObj.y + 200 // retry 이미지의 높이
    ) {
        location.reload(); // 페이지를 새로고침하여 게임을 재시작
    }
}

canvas.addEventListener("click", (e) => {
    const boundingRect = canvas.getBoundingClientRect();
    const clickX = e.clientX - boundingRect.left;
    const clickY = e.clientY - boundingRect.top;

    let object;
    for (let i = 0; i < movingObjectlist.length; i++) {
        object = movingObjectlist[i];
        if (
            clickX > object.x &&
            clickX < object.x + object.width &&
            clickY > object.y &&
            clickY < object.y + object.height
        ) {
            selectedObject = object;
            console.log(selectedObject.index);
            break;
        }
    }

    if (!selectedObject) {
        console.log("background");
        lifeList.pop();
    } else if (selectedObject instanceof movingObject_hidden) {
        drawStop = true;
    }

    if (lifeList.length == 0) {
        checkLoose = false;
    }

    selectedObject = null;
});

if (!drawStop) {
    render();
} else {
}
