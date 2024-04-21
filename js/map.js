var container = document.getElementById("map");
var options = {
    center: new kakao.maps.LatLng(37.582336, 127.001844),
    level: 3,
};
var map = new kakao.maps.Map(container, options);

var ps = new kakao.maps.services.Places();

var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

var imageSrc = "/images/pngwing.png",
    imageSize = new kakao.maps.Size(64, 69),
    imageOption = { offset: new kakao.maps.Point(27, 69) };

var initialPosition = new kakao.maps.LatLng(37.582336, 127.001844);
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
var initialMarker = new kakao.maps.Marker({
    map: map,
    position: initialPosition,
    image: markerImage,
});

// 초기 마커에 대한 인포윈도우 설정
kakao.maps.event.addListener(initialMarker, "click", function () {
    var content =
        '<div style="padding:5px;">' +
        '<a href="https://place.map.kakao.com/27206049" target="_blank" style="font-size:12px; text-decoration:none;">' +
        "한성대학교에듀센터<br>카카오맵에서 보기</a></div>";
    infowindow.setContent(content);
    infowindow.open(map, initialMarker);
});

function searchPlaces() {
    var keyword = document.getElementById("keyword").value;

    if (!keyword.replace(/^\s+|\s+$/g, "")) {
        alert("키워드를 입력해주세요!");
        return;
    }

    ps.keywordSearch(keyword, placesSearchCB);
    document.getElementById("keyword").value = "";
}

var markers = [];

function removeAllMarkers() {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = [];
}

function placesSearchCB(data, status, pagination) {
    if (status === kakao.maps.services.Status.OK) {
        removeAllMarkers();
        var bounds = new kakao.maps.LatLngBounds();

        for (var i = 0; i < data.length; i++) {
            displayMarker(data[i]);
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

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
        // 카카오맵 링크 생성
        var mapLink =
            "https://map.kakao.com/link/map/" +
            encodeURIComponent(place.place_name) +
            "," +
            place.y +
            "," +
            place.x;
        infowindow.setContent(
            '<div style="padding:5px;"><a href="' +
                mapLink +
                '" target="_blank" style="font-size:12px; text-decoration:none;">' +
                place.place_name +
                "<br>카카오맵에서 보기</a></div>"
        );
        infowindow.open(map, marker);
    });

    markers.push(marker);
}

function toggleAndSearch(category, sectionId) {
    var weAreHereText = document.querySelector(".h1-title-center");
    var allSections = document.querySelectorAll("#searchBox > div");

    weAreHereText.style.opacity = "0";
    weAreHereText.style.visibility = "hidden";

    allSections.forEach(function (section) {
        if (section.id === sectionId) {
            section.style.display = "flex";
            section.style.opacity = "1";
            section.style.visibility = "visible";
        } else {
            section.style.display = "none";
            section.style.opacity = "0";
            section.style.visibility = "hidden";
        }
    });

    removeAllMarkers();
    var position = new kakao.maps.LatLng(37.582336, 127.001844);
    map.setCenter(position);
    ps.categorySearch(category, placesSearchCB, {
        location: position,
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
    map.setCenter(new kakao.maps.LatLng(37.582336, 127.001844));
}
