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
        this.src =
            "https://cdn.discordapp.com/attachments/1051894462491656192/1232112311674732654/ESTJ.png?ex=66284582&is=6626f402&hm=7fcf61a69815c58ff93e7a990648678a7bd69a84413dc4a513ba0dccc13cf1f4&";
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
        this.src =
            "https://cdn.discordapp.com/attachments/1051894462491656192/1232120458321592381/back.png?ex=66284d18&is=6626fb98&hm=2da016f6b0ce3fe589c0a01346861c73ea3540dfac6d9e5dea74c84d7285a3fa&";
    }, 1000);
});

document.getElementById("pokeball3").addEventListener("click", function () {
    this.src = "/images/열린포켓볼.png";

    function increaseSize() {
        let currentSize = parseInt(getComputedStyle(pokeball3).width); // 현재 이미지 크기
        const targetSize = 180; // 목표 이미지 크기
        const increment = 2; // 크기 증가량

        if (currentSize < targetSize) {
            currentSize += increment;
            pokeball3.style.width = currentSize + "px"; // 이미지 크기 업데이트
            setTimeout(increaseSize, 10); // 10ms마다 크기를 증가시켜 부드럽게 키웁니다.
        }
    }

    increaseSize(); // 함수 호출

    setTimeout(() => {
        this.src =
            "https://cdn.discordapp.com/attachments/1051894462491656192/1232120945548988488/python.png?ex=66284d8d&is=6626fc0d&hm=a3b7936ecfc3dd34ba3a97662c79c503b9e22dbd5f2ff84c98e10819d8c38bc0&";
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
