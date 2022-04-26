//Local storage reader and adding data
let cart = document.querySelector('.cart');
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const newDiv = document.createElement("div");
    newDiv.id = 'product';
    newDiv.className = 'item';
    newDiv.textContent = localStorage.getItem(key);
    cart.appendChild(newDiv);
    //Creating button div
    const newBtn = document.createElement("div");
    newBtn.className = 'buttons';
    newBtn.id = 'button';
    newDiv.appendChild(newBtn);
    //Creating remove button
    const button = document.createElement("button");
    button.type = 'button';
    button.id = 'delete';
    button.setAttribute("onclick","remove()");
    button.textContent = '-';
    newBtn.appendChild(button);
    //Creating update button
    const buttonUpdate = document.createElement("button");
    buttonUpdate.type = 'button';
    buttonUpdate.id = 'update';
    buttonUpdate.setAttribute("onclick","update()");
    buttonUpdate.textContent = '+';
    newBtn.appendChild(buttonUpdate);
}


function submit() {
    let item = document.querySelector('input').value;
    let savingLength = localStorage.length;
    if (item != ""){
        if(savingLength == 0){
            localStorage.setItem(0, item);
            window.location.reload();
        }
        else {
            let save = savingLength;
            localStorage.setItem(save++, item);
            window.location.reload();
        }
    } else {
        alert("Nothing added to list!");
    }
}

document.querySelector('input').addEventListener('keypress' , function (e) {
    if (e.key === 'Enter') {
        submit();
    }
})

function remove() {
    let evnt = event.target;
    const parents = evnt.parentNode.parentNode.childNodes[0].nodeValue;
    let convertToString = JSON.stringify(localStorage);
    let fullResult = convertToString.substring(convertToString.search(parents) - 5, convertToString.search(parents) + parents.length + 1);
    let valueResult = convertToString.substring(convertToString.search(parents) + 4, convertToString.search(parents));
    let regex = /\d+/g;
    let keyResult = regex.exec(fullResult);
    localStorage.removeItem(keyResult[0], valueResult);
    window.location.reload();
}

function update() {
    newItem = prompt("Please update item!");
    if(newItem != null){
        let evnt = event.target;
        const parents = evnt.parentNode.parentNode.childNodes[0].nodeValue;
        let convertToString = JSON.stringify(localStorage);
        let fullResult = convertToString.substring(convertToString.search(parents) - 5, convertToString.search(parents) + parents.length + 1);
        let regex = /\d+/g;
        let keyResult = regex.exec(fullResult);
        localStorage.setItem(keyResult[0], newItem);
        window.location.reload();
    }
}

function clearAll() {
    if(localStorage.length == 0){
        alert("Nothing to delete here!")
    } else {
        localStorage.clear();
        window.location.reload();
    }
}