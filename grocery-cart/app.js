const iceCreamShop = {
    menu: {
        0:{
            name: 'Choco',
            price: 3,
            imgSrc: './img/choco-ic.jfif'
        },
        1:{
            name: 'Coconut',
            price: 3,
            imgSrc: './img/coconut-ic.jpg'
        },
        2:{
            name: 'Cookie Dough',
            price: 5,
            imgSrc: './img/cookie-dough-ic.jpg'
        },
        3:{
            name: 'Cookies N\' Cream',
            price: 3,
            imgSrc: './img/cookies-n-cream-ic.jpg'
        },
        4:{
            name: 'Mango',
            price: 3,
            imgSrc: './img/mango-ic.jpg'
        },
        5:{
            name: 'Matcha',
            price: 5,
            imgSrc: './img/matcha-ic.jfif'
        },
        6:{
            name: 'Mint Choco',
            price: 5,
            imgSrc: './img/mint-choco-ic.jpg'
        },
        7:{
            name: 'Strawberry',
            price: 3,
            imgSrc: './img/strawberry-ic.jpg'
        },
        8:{
            name: 'Vanilla',
            price: 3,
            imgSrc: './img/vanilla-ic.jpg'
        }
    },

    amount: {
        amountTotal: 0
    },

    init(){
        const itemsContainer = document.querySelector('.items__container');
        itemsContainer.appendChild(this._createCards());
        
        const addToCartButton = document.querySelectorAll('.item__add-button');
        addToCartButton.forEach( button => {
            button.addEventListener('click', (button) => {
                this.getPrice(button.target.getAttribute('data-price'));
            });
        })
        
    },

    _createCards(){
        const fragments = document.createDocumentFragment();
        const items = Object.keys(this.menu);

        items.forEach(item => {
            const itemWrapper = document.createElement('div');
            itemWrapper.classList.add('item');

            const itemImg = document.createElement('img');
            itemImg.classList.add('item__img');
            itemImg.src = this.menu[item].imgSrc;

            const itemInfoWrapper = document.createElement('div');
            itemInfoWrapper.classList.add('item__info-wrapper');

            itemWrapper.appendChild(itemImg, itemInfoWrapper);   // append to item div // append img to item div
            itemWrapper.appendChild(itemInfoWrapper);

            const itemInfo = document.createElement('p');           // creates p for item name and price
            itemInfo.textContent = `${this.menu[item].name} $${this.menu[item].price}`;
            const addToCartButton = document.createElement('button');
            addToCartButton.setAttribute('data-name',this.menu[item].name);
            addToCartButton.setAttribute('data-price',this.menu[item].price);
            addToCartButton.innerHTML = '<i class="las la-cart-plus"></i>';
            addToCartButton.classList.add('item__add-button');
            // append itemInfo & addToCartBTn to iteminfoWrapper
            itemInfoWrapper.appendChild(itemInfo);
            itemInfoWrapper.appendChild(addToCartButton);
            fragments.appendChild(itemWrapper);
        })
        return fragments;
    },

    createCartList(name, price){
        const listItem = document.createElement('li');
        listItem.innerText = `${name} Ice Cream ---- $${price}`
        const removeItemButton = document.createElement('button');
    },

    getPrice(price){
        this.amount.amountTotal = this.amount.amountTotal + parseFloat(price);
    }
}

window.addEventListener('DOMContentLoaded', function(){
    iceCreamShop.init();
})