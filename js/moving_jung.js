document.getElementById("pokeball1").addEventListener("click", function () {
    this.src = "assets/img/열린포켓볼.png";

    function increaseSize() {
        let currentSize = parseInt(getComputedStyle(pokeball1).width); // 현재 이미지 크기
        const targetSize = 150; // 목표 이미지 크기
        const increment = 2; // 크기 증가량

        if (currentSize < targetSize) {
            currentSize += increment;
            pokeball1.style.width = currentSize + "px"; // 이미지 크기 업데이트
            setTimeout(increaseSize, 50); // 10ms마다 크기를 증가시켜 부드럽게 키웁니다.
        }
    }

    increaseSize(); // 함수 호출

    setTimeout(() => {
        this.src = "assets/img/ISTJ.png";
    }, 500);
});

document.getElementById("pokeball2").addEventListener("click", function () {
    this.src = "assets/img/열린포켓볼.png";

    function increaseSize() {
        let currentSize = parseInt(getComputedStyle(pokeball2).width); // 현재 이미지 크기
        const targetSize = 150; // 목표 이미지 크기
        const increment = 2; // 크기 증가량

        if (currentSize < targetSize) {
            currentSize += increment;
            pokeball2.style.width = currentSize + "px"; // 이미지 크기 업데이트
            setTimeout(increaseSize, 50); // 10ms마다 크기를 증가시켜 부드럽게 키웁니다.
        }
    }

    increaseSize(); // 함수 호출

    setTimeout(() => {
        this.src = "assets/img/front.png";
    }, 500);
});

document.getElementById("pokeball3").addEventListener("click", function () {
    this.src = "assets/img/열린포켓볼.png";

    function increaseSize() {
        let currentSize = parseInt(getComputedStyle(pokeball3).width); // 현재 이미지 크기
        const targetSize = 150; // 목표 이미지 크기
        const increment = 2; // 크기 증가량

        if (currentSize < targetSize) {
            currentSize += increment;
            pokeball3.style.width = currentSize + "px"; // 이미지 크기 업데이트
            setTimeout(increaseSize, 50); // 10ms마다 크기를 증가시켜 부드럽게 키웁니다.
        }
    }

    increaseSize(); // 함수 호출

    setTimeout(() => {
        this.src = "assets/img/mern.png";
    }, 500);
});

document.getElementById("pokeball4").addEventListener("click", function () {
    this.src = "assets/img/열린포켓볼.png";

    function increaseSize() {
        let currentSize = parseInt(getComputedStyle(pokeball4).width); // 현재 이미지 크기
        const targetSize = 150; // 목표 이미지 크기
        const increment = 2; // 크기 증가량

        if (currentSize < targetSize) {
            currentSize += increment;
            pokeball4.style.width = currentSize + "px"; // 이미지 크기 업데이트
            setTimeout(increaseSize, 50); // 10ms마다 크기를 증가시켜 부드럽게 키웁니다.
        }
    }

    increaseSize(); // 함수 호출

    setTimeout(() => {
        this.src = "assets/img/포켓볼.png";
    }, 500);
});

runningObject = document.querySelector("#running");
