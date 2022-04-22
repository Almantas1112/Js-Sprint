function submit() {
    let items = document.querySelector('input').value;
    let cart = document.querySelector('.cart');
    if (items != ""){
        const newDiv = document.createElement("div");
        newDiv.className = 'item';
        newDiv.id = 'product';
        newDiv.textContent = items;
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
        button.textContent = 'X';
        newBtn.appendChild(button);
        //Creating update button
        const buttonUpdate = document.createElement("button");
        buttonUpdate.type = 'button';
        buttonUpdate.id = 'update';
        buttonUpdate.setAttribute("onclick","update()");
        buttonUpdate.textContent = '+';
        newBtn.appendChild(buttonUpdate);
    }
    else {
        alert("Nothing added to list!")
    }
}

function remove() {
    let evnt = event.target;
    let parent = evnt.parentElement.parentElement;
    parent.remove(parent);
}

function update() {
    newItem = prompt("Please update item!");
    if(newItem != null)
    {
        let evnt = event.target;
        let parent = evnt.parentElement.parentElement;
        console.log(parent);
        console.log(parent.textContent = newItem);
        //Creating button div
        const newBtn = document.createElement("div");
        newBtn.className = 'buttons';
        newBtn.id = 'button';
        parent.appendChild(newBtn);
        //Creating remove button
        const button = document.createElement("button");
        button.type = 'button';
        button.id = 'delete';
        button.setAttribute("onclick","remove()");
        button.textContent = 'X';
        newBtn.appendChild(button);
        //Creating update button
        const buttonUpdate = document.createElement("button");
        buttonUpdate.type = 'button';
        buttonUpdate.id = 'update';
        buttonUpdate.setAttribute("onclick","update()");
        buttonUpdate.textContent = '+';
        newBtn.appendChild(buttonUpdate);
    }
    else
    {
        prompt("Nothing updated! please enter new item or cancel!");
    }
}