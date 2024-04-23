document.getElementById("pokeball1").addEventListener("click", function () {
    this.src = "/images/열린포켓볼.png";

    function increaseSize() {
        let currentSize = parseInt(getComputedStyle(pokeball1).width); // 현재 이미지 크기
        const targetSize = 150; // 목표 이미지 크기
        const increment = 2; // 크기 증가량

        if (currentSize < targetSize) {
            currentSize += increment;
            pokeball1.style.width = currentSize + "px"; // 이미지 크기 업데이트
            setTimeout(increaseSize, 10); // 10ms마다 크기를 증가시켜 부드럽게 키웁니다.
        }
    }

    increaseSize(); // 함수 호출

    setTimeout(() => {
        this.src = "/images/ISTJ.png";
    }, 1000);
});

document.getElementById("pokeball2").addEventListener("click", function () {
    this.src = "/images/열린포켓볼.png";

    function increaseSize() {
        let currentSize = parseInt(getComputedStyle(pokeball2).width); // 현재 이미지 크기
        const targetSize = 150; // 목표 이미지 크기
        const increment = 2; // 크기 증가량

        if (currentSize < targetSize) {
            currentSize += increment;
            pokeball2.style.width = currentSize + "px"; // 이미지 크기 업데이트
            setTimeout(increaseSize, 10); // 10ms마다 크기를 증가시켜 부드럽게 키웁니다.
        }
    }

    increaseSize(); // 함수 호출

    setTimeout(() => {
        this.src = "/images/front.png";
    }, 1000);
});

document.getElementById("pokeball3").addEventListener("click", function () {
    this.src = "/images/열린포켓볼.png";

    function increaseSize() {
        let currentSize = parseInt(getComputedStyle(pokeball3).width); // 현재 이미지 크기
        const targetSize = 150; // 목표 이미지 크기
        const increment = 2; // 크기 증가량

        if (currentSize < targetSize) {
            currentSize += increment;
            pokeball3.style.width = currentSize + "px"; // 이미지 크기 업데이트
            setTimeout(increaseSize, 10); // 10ms마다 크기를 증가시켜 부드럽게 키웁니다.
        }
    }

    increaseSize(); // 함수 호출

    setTimeout(() => {
        this.src = "/images/mern.png";
    }, 1000);
});

document.getElementById("pokeball4").addEventListener("click", function () {
    this.src = "/images/열린포켓볼.png";

    function increaseSize() {
        let currentSize = parseInt(getComputedStyle(pokeball4).width); // 현재 이미지 크기
        const targetSize = 150; // 목표 이미지 크기
        const increment = 2; // 크기 증가량

        if (currentSize < targetSize) {
            currentSize += increment;
            pokeball4.style.width = currentSize + "px"; // 이미지 크기 업데이트
            setTimeout(increaseSize, 10); // 10ms마다 크기를 증가시켜 부드럽게 키웁니다.
        }
    }

    increaseSize(); // 함수 호출

    setTimeout(() => {
        this.src = "/images/hyosung.png";
    }, 1000);
});

runningObject = document.querySelector("#running");
