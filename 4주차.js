const submitBtn = document.getElementById("submitBtn");
const ordered = document.getElementsByTagName("ol");
const removeBtn = document.getElementById("removeBtn");

function onAddClick() {
    const string = document.getElementById('todolistAdd').value;
    const list = document.createElement('li');
    const text = document.createTextNode(string);
    list.appendChild(text);
    ordered[0].appendChild(list);
}

function onRemoveClick() {
    const lists = document.querySelectorAll('li');
    const string = document.getElementById('todolistRemove').value;
    const num = parseInt(string, 10);
    lists[num-1].remove()
}

// function onChangeClick(event) {
//     let tmp = "";
//     let str = prompt("수정할 값을 입력하시오:");

//     if (str == null || str == "") {
//         tmp = "입력값이 없습니다.";
//     } else {
//         tmp = str;
//     }
//     console.log(tmp);
// }

submitBtn.addEventListener("click", onAddClick);
removeBtn.addEventListener("click", onRemoveClick);
