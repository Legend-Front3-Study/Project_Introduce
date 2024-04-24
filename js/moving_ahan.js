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
            "https://media.discordapp.net/attachments/1051894462491656192/1232112311674732654/ESTJ.png?ex=66299702&is=66284582&hm=0a747e6967aaf8fe9fb4428a932b77e5b95b1f0f822759865c2b9cedf12ad968&";
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
            "https://media.discordapp.net/attachments/1051894462491656192/1232120458321592381/back.png?ex=66299e98&is=66284d18&hm=25f4b889b9c662d18d83a2ca7edc68781ec0a4ac51664146d0197d20eb248d55&";
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
            "https://media.discordapp.net/attachments/1051894462491656192/1232120945548988488/python.png?ex=66299f0d&is=66284d8d&hm=2c2a9cd2a235e4243e2446fc4f1765518e865611e9b2e1439b6ea87010c68e46&";
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
