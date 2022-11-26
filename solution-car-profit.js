window.addEventListener("load", carProfit);

function carProfit() {
    
    const input = {
        make: document.getElementById('make'),
        model: document.getElementById('model'),
        year: document.getElementById('year'),
        fuel: document.getElementById('fuel'),
        originalPrice: document.getElementById('original-cost'),
        sellingPrice: document.getElementById('selling-price')
    };

    const lists = {
        sellingOfferList: document.getElementById('table-body'),
        publishList: document.getElementById('cars-list')
    };

    const publishBtn = document.getElementById('publish');
    publishBtn.addEventListener("click", publish);

    function publish(ev) {
        ev.preventDefault();

        let carMake = input.make.value;
        let carModel = input.model.value;
        let carYear = input.year.value;
        let carFuel = input.fuel.value;
        let carOriginalPrice = input.originalPrice.value;
        let carSellingPrice = input.sellingPrice.value;

        if(carMake === '' || carModel === '' || carYear === '' || carFuel === '' || carOriginalPrice === '' || carSellingPrice === '') {
            return;
        }

        const tr = document.createElement('tr');
        tr.className = 'row';
        tr.innerHTML = 
        `<td>${carMake}</td>
        <td>${carModel}</td>
        <td>${carYear}</td>
        <td>${carFuel}</td>
        <td>${carOriginalPrice}</td>
        <td>${carSellingPrice}</td>
        <td>
        <button class="action-btn edit">Edit</button>
        <button class="action-btn sell">Sell</button>
        </td>
        `
        lists.sellingOfferList.appendChild(tr);
    }
}