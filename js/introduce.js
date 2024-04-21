document.querySelectorAll(".card-container").forEach(function (container) {
    var card = container.querySelector(".card-image");
    var overlay = container.querySelector(".overlay");

    card.addEventListener("mousemove", function (e) {
        var x = e.offsetX;
        var y = e.offsetY;
        var rotateX = (4 / 30) * y - 20;
        var rotateY = (-1 / 5) * x + 20;

        overlay.style.backgroundPosition = `${x / 5 + y / 5}px`;
        card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseout", function () {
        overlay.style.filter = "opacity(0)";
        card.style.transform = "perspective(350px) rotateY(0deg) rotateX(0deg)";
    });
});
