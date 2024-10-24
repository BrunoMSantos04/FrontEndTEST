const quantityInput = document.getElementById('quantity');
const itemList = document.getElementById('itemList');


quantityInput.addEventListener('input', function(e) {

    const quantity = parseInt(this.value) || 0;
    

    if (quantity < 0) {
        this.value = 0;
        return;
    }
    
    updateList(quantity);
});


function updateList(quantity) {

    itemList.innerHTML = '';
    

    for (let i = 1; i <= quantity; i++) {
        const li = document.createElement('li');
        li.className = 'list-item';
        li.textContent = ` ${i}`;
        
        
        setTimeout(() => {
            itemList.appendChild(li);
        }, i * 30);
    }
}
updateList(0);