function createRoom() {
    let name_field = document.querySelector('.name_field');

    if(name_field.value == "" || name_field.value.replace(/\s/g, '').length == "") {
        name_field.color = 0xff0000;
        name_field.placeholder = "You must type in your name!";
    } else {
        window.location = "create_room.html"
    }
    
}

function joinRoom() {
    let name_field = document.querySelector('.name_field');
    
    if(name_field.value == "" || name_field.value.replace(/\s/g, '').length == "") {
        name_field.color = 0xff0000;
        name_field.placeholder = "You must type in your name!";
    } else {
        window.location = "create_room.html"
    }
}

function rules() {
    window.location;
}

function isAllWhiteSpace(string) {
    if (string.length == string.replace(" ", "").length) {
        return false
    }
    return true
}