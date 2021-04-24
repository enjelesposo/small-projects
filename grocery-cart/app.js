const iceCreamShop = {
    menu: {
        0:{
            name: 'Choco',
            price: '$3',
            imgSrc: './img/choco-ic.jfif'
        },
        1:{
            name: 'Coconut',
            price: '$3',
            imgSrc: './img/coconut-ic.jpg'
        },
        2:{
            name: 'Cookie Dough',
            price: '$3',
            imgSrc: './img/cookie-dough-ic.jpg'
        },
        3:{
            name: 'Cookies N\' Cream',
            price: '$3',
            imgSrc: './img/cookies-n-cream-ic.jpg'
        },
        4:{
            name: 'Mango',
            price: '$3',
            imgSrc: './img/mango-ic.jpg'
        },
        5:{
            name: 'Match',
            price: '$3',
            imgSrc: './img/matcha-ic.jfif'
        },
        6:{
            name: 'Mint Choco',
            price: '$3',
            imgSrc: './img/mint-choco-ic.jpg'
        },
        7:{
            name: 'Strawberry',
            price: '$3',
            imgSrc: './img/strawberry-ic.jpg'
        },
        8:{
            name: 'Vanilla',
            price: '$3',
            imgSrc: './img/vanilla-ic.jpg'
        }
    },

    init(){
        const itemsContainer = document.querySelector('.items__container');
        itemsContainer.appendChild(this._createCards());
        
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
            itemInfo.textContent = `${this.menu[item].name} ${this.menu[item].price}`;
            const addToCartButton = document.createElement('button');
            addToCartButton.innerHTML = '<i class="las la-cart-plus"></i>';
            // append itemInfo & addToCartBTn to iteminfoWrapper
            itemInfoWrapper.appendChild(itemInfo);
            itemInfoWrapper.appendChild(addToCartButton);
            fragments.appendChild(itemWrapper);
        })
        return fragments;
    },

    appendIceCream(){

    },

    getTotal(){

    },
}

window.addEventListener('DOMContentLoaded', function(){
    iceCreamShop.init();
})