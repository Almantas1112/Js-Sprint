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
        //Creating button
        const button = document.createElement("button");
        button.type = 'button';
        button.id = 'delete';
        button.textContent = 'X';
        newBtn.appendChild(button);
    }
}