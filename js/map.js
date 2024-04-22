var map,
    ps,
    infowindow,
    imageSrc,
    imageSize,
    imageOption,
    markers = [];

function initMap() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                var currentPosition = new kakao.maps.LatLng(
                    position.coords.latitude,
                    position.coords.longitude
                );

                var container = document.getElementById("map");
                var options = {
                    center: currentPosition,
                    level: 3,
                };
                map = new kakao.maps.Map(container, options);

                ps = new kakao.maps.services.Places();
                infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
                imageSrc = "/images/pngwing.png";
                imageSize = new kakao.maps.Size(64, 69);
                imageOption = { offset: new kakao.maps.Point(27, 69) };

                var markerImage = new kakao.maps.MarkerImage(
                    imageSrc,
                    imageSize,
                    imageOption
                );
                var initialMarker = new kakao.maps.Marker({
                    map: map,
                    position: currentPosition,
                    image: markerImage,
                });

                kakao.maps.event.addListener(
                    initialMarker,
                    "click",
                    function () {
                        var content =
                            '<div style="padding:5px;"><a href="https://place.map.kakao.com/27206049" target="_blank" style="font-size:12px; text-decoration:none;">한성대학교에듀센터<br>카카오맵에서 보기</a></div>';
                        infowindow.setContent(content);
                        infowindow.open(map, initialMarker);
                    }
                );
            },
            function (error) {
                console.error("Geolocation error:", error);
            }
        );
    } else {
        alert("이 브라우저에서는 Geolocation이 지원되지 않습니다.");
    }
}

function searchPlaces() {
    var keyword = document.getElementById("keyword").value;

    if (!keyword.replace(/^\s+|\s+$/g, "")) {
        alert("키워드를 입력해주세요!");
        return;
    }

    ps.keywordSearch(keyword, placesSearchCB, { location: map.getCenter() });
    document.getElementById("keyword").value = "";
}

function removeAllMarkers() {
    markers.forEach(function (marker) {
        marker.setMap(null);
    });
    markers = [];
}

function placesSearchCB(data, status, pagination) {
    if (status === kakao.maps.services.Status.OK) {
        removeAllMarkers();
        var bounds = new kakao.maps.LatLngBounds();

        data.forEach(function (place) {
            displayMarker(place);
            bounds.extend(new kakao.maps.LatLng(place.y, place.x));
        });

        map.setBounds(bounds);
    } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
        alert("검색 결과가 존재하지 않습니다.");
    } else {
        alert("검색 결과를 가져오는 데 실패했습니다.");
    }
}

function displayMarker(place) {
    var marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
        image: new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
    });

    kakao.maps.event.addListener(marker, "click", function () {
        var mapLink =
            "https://map.kakao.com/link/map/" +
            encodeURIComponent(place.place_name) +
            "," +
            place.y +
            "," +
            place.x;
        var content =
            '<div style="padding:5px;"><a href="' +
            mapLink +
            '" target="_blank" style="font-size:12px; text-decoration:none;">' +
            place.place_name +
            "<br>카카오맵에서 보기</a></div>";
        infowindow.setContent(content);
        infowindow.open(map, marker);
    });

    markers.push(marker);
}

function toggleAndSearch(category, sectionId) {
    var weAreHereText = document.querySelector("#first-title");
    var allSections = document.querySelectorAll("#searchBox > div");

    weAreHereText.style.opacity = "0";
    weAreHereText.style.visibility = "hidden";

    allSections.forEach(function (section) {
        section.style.display = section.id === sectionId ? "flex" : "none";
        section.style.opacity = section.id === sectionId ? "1" : "0";
        section.style.visibility =
            section.id === sectionId ? "visible" : "hidden";
    });

    var searchBox = document.getElementById("searchButton");
    searchBox.style.display = "flex";
    searchBox.style.opacity = "1";
    searchBox.style.visibility = "visible";

    removeAllMarkers();
    ps.categorySearch(category, placesSearchCB, {
        location: map.getCenter(),
        useMapBounds: true,
    });
}

function searchFoodPlaces1() {
    toggleAndSearch("FD6", "restaurant");
}
function searchFoodPlaces2() {
    toggleAndSearch("CE7", "cafe");
}
function searchFoodPlaces3() {
    toggleAndSearch("CS2", "mart");
}
function searchFoodPlaces4() {
    toggleAndSearch("SW8", "subway");
}

function resetMap() {
    removeAllMarkers();
    map.setCenter(
        new kakao.maps.LatLng(
            map.getCenter().getLat(),
            map.getCenter().getLng()
        )
    );
}

initMap(); // 지도 초기화
