
sat = [];
map = [];

function loadPictures(evt) {
    var files = evt.target.files;

    sat_filter = document.getElementById("sat_filter").value;
    map_filter = document.getElementById("map_filter").value;

    sat = [];
    map = [];

    for (var i = 0, file; file = files[i]; i++) {
        if (file.name.includes(sat_filter)) {
            sat.push(file);
        } else if (file.name.includes(map_filter)) {
            map.push(file);
        }
    }


    sat.sort();
    map.sort();

    changeIndex(0);
}

function loadSatPictures(evt) {
    var files = evt.target.files;

    sat = [];

    for (var i = 0, file; file = files[i]; i++) {

        sat.push(file);

    }

    sat.sort()
    changeIndex(0);
}

function loadMapPictures(evt) {
    var files = evt.target.files;

    map = [];

    for (var i = 0, file; file = files[i]; i++) {

        map.push(file);

    }

    map.sort()
    changeIndex(0);
}


document.addEventListener('DOMContentLoaded', (event) => {
    document.body.onkeydown = function (evt) {
        // console.log(evt)
        switch (evt.keyCode) {
            case 37: // Left
                console.log("LEFT")
                deltaIndex(-1);
                break;
            case 39: // Right
                console.log("RIGHT")
                deltaIndex(1);
                break;
        }
    }

})



curr_index = 0;


function deltaIndex(amount) {
    changeIndex(curr_index + amount);
}

function changeIndex(index) {
    curr_index = index;

    if (sat.length == 0 || map.length == 0) {
        console.log("Skipping index change; one of the arrays is empty.")
        return;
    }

    dom_sat = document.getElementById("sat");
    dom_map = document.getElementById("map");
    dom_overlay_sat = document.getElementById("overlay_sat");
    dom_overlay_map = document.getElementById("overlay_map");

    image_sat = sat[curr_index];
    image_map = map[curr_index];


    var reader_sat = new FileReader();
    reader_sat.onload = function () {
        var dataURL = reader_sat.result;
        dom_sat.src = dataURL;
        dom_sat.title = image_sat.name
        dom_overlay_sat.src = dataURL;
        dom_overlay_sat.title = image_sat.name
    };
    reader_sat.readAsDataURL(image_sat);


    var reader_map = new FileReader();
    reader_map.onload = function () {
        var dataURL = reader_map.result;
        dom_map.src = dataURL;
        dom_map.title = image_map.name;
        dom_overlay_map.src = dataURL;
        dom_overlay_map.title = image_map.name;
    };
    reader_map.readAsDataURL(image_map);

    // TODO: Overlay
}