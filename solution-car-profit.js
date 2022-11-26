window.addEventListener("load", carProfit);

function carProfit() {

    let sum = Number(0);
    let profit = document.getElementById('profit');

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

        if (carMake === '' || carModel === '' || carYear === '' || carFuel === '' || carOriginalPrice === '' || carSellingPrice === '') {
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
        input.make.value = '';
        input.model.value = '';
        input.year.value = '';
        input.fuel.value = '';
        input.originalPrice.value = '';
        input.sellingPrice.value = '';


        lists.sellingOfferList.appendChild(tr);

        const editBtn = tr.querySelector('.edit');
        const sellBtn = tr.querySelector('.sell');
        editBtn.addEventListener("click", edit);
        sellBtn.addEventListener("click", sell);

        function edit() {
            input.make.value = carMake;
            input.model.value = carModel;
            input.year.value = carYear;
            input.fuel.value = carFuel;
            input.originalPrice.value = carOriginalPrice;
            input.sellingPrice.value = carSellingPrice;

            tr.remove();
        }

        function sell() {
            const li = document.createElement('li');

            li.className = 'each-list';
            li.innerHTML =
                `<span>${carMake} ${carModel}</span>
             <span>${carYear}</span>
             <span>${carSellingPrice - carOriginalPrice}</span>
            `
            lists.publishList.appendChild(li);
            tr.remove();

            let total = `${carSellingPrice - carOriginalPrice}`;
            sum += Number(total);
            profit.textContent = sum;
        }
    }
}