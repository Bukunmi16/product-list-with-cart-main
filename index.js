const jsonData = 
[
        {
           "image": {
                "thumbnail": "./assets/images/image-waffle-thumbnail.jpg",
                "mobile": "./assets/images/image-waffle-mobile.jpg",
                "tablet": "./assets/images/image-waffle-tablet.jpg",
                "desktop": "./assets/images/image-waffle-desktop.jpg"
           },
           "name": "Waffle with Berries",
           "category": "Waffle",
           "price": 6.50
        },
        {
            "image": {
                "thumbnail": "./assets/images/image-creme-brulee-thumbnail.jpg",
                "mobile": "./assets/images/image-creme-brulee-mobile.jpg",
                "tablet": "./assets/images/image-creme-brulee-tablet.jpg",
                "desktop": "./assets/images/image-creme-brulee-desktop.jpg"
            },
            "name": "Vanilla Bean Crème Brûlée",
            "category": "Crème Brûlée",
            "price": 7.00
         },
         {
            "image": {
                "thumbnail": "./assets/images/image-macaron-thumbnail.jpg",
                "mobile": "./assets/images/image-macaron-mobile.jpg",
                "tablet": "./assets/images/image-macaron-tablet.jpg",
                "desktop": "./assets/images/image-macaron-desktop.jpg"
            },
            "name": "Macaron Mix of Five",
            "category": "Macaron",
            "price": 8.00
         },
         {
            "image": {
                "thumbnail": "./assets/images/image-tiramisu-thumbnail.jpg",
                "mobile": "./assets/images/image-tiramisu-mobile.jpg",
                "tablet": "./assets/images/image-tiramisu-tablet.jpg",
                "desktop": "./assets/images/image-tiramisu-desktop.jpg"
            },
            "name": "Classic Tiramisu",
            "category": "Tiramisu",
            "price": 5.50
         },
         {
            "image": {
                "thumbnail": "./assets/images/image-baklava-thumbnail.jpg",
                "mobile": "./assets/images/image-baklava-mobile.jpg",
                "tablet": "./assets/images/image-baklava-tablet.jpg",
                "desktop": "./assets/images/image-baklava-desktop.jpg"
            },
            "name": "Pistachio Baklava",
            "category": "Baklava",
            "price": 4.00
         },
         {
            "image": {
                "thumbnail": "./assets/images/image-meringue-thumbnail.jpg",
                "mobile": "./assets/images/image-meringue-mobile.jpg",
                "tablet": "./assets/images/image-meringue-tablet.jpg",
                "desktop": "./assets/images/image-meringue-desktop.jpg"
            },
            "name": "Lemon Meringue Pie",
            "category": "Pie",
            "price": 5.00
         },
         {
            "image": {
                "thumbnail": "./assets/images/image-cake-thumbnail.jpg",
                "mobile": "./assets/images/image-cake-mobile.jpg",
                "tablet": "./assets/images/image-cake-tablet.jpg",
                "desktop": "./assets/images/image-cake-desktop.jpg"
            },
            "name": "Red Velvet Cake",
            "category": "Cake",
            "price": 4.50
         },
         {
            "image": {
                "thumbnail": "./assets/images/image-brownie-thumbnail.jpg",
                "mobile": "./assets/images/image-brownie-mobile.jpg",
                "tablet": "./assets/images/image-brownie-tablet.jpg",
                "desktop": "./assets/images/image-brownie-desktop.jpg"
            },
            "name": "Salted Caramel Brownie",
            "category": "Brownie",
            "price": 4.50
         },
         {
            "image": {
                "thumbnail": "./assets/images/image-panna-cotta-thumbnail.jpg",
                "mobile": "./assets/images/image-panna-cotta-mobile.jpg",
                "tablet": "./assets/images/image-panna-cotta-tablet.jpg",
                "desktop": "./assets/images/image-panna-cotta-desktop.jpg"
            },
            "name": "Vanilla Panna Cotta",
            "category": "Panna Cotta",
            "price": 6.50
        }
    ]
    
    
    const newData = []
    let idCounter = 1
    jsonData.forEach(item => {
        newData.push({
            image: {
                thumbnail: item.image.thumbnail,
                mobile: item.image.mobile,
                tablet: item.image.tablet,
                desktop: item.image.desktop,
            },
            name: item.name,
            category: item.category,
            price: item.price,
            id: idCounter++,
        })
    })
    
    const yourOrder = []

let totalCost = 0

const desserts = document.querySelector(".desserts")
const occupiedCart = document.querySelector('.occupied-cart-box')
const emptyCart = document.querySelector('.empty-cart-box')

const totalContainer = document.createElement('div')
totalContainer.setAttribute('class', 'total-container')

const totalTitle = document.createElement('p')
totalTitle.textContent = 'Order Total'
totalTitle.setAttribute('class','total-title')
totalContainer.appendChild(totalTitle)

const total = document.createElement('p')
total.setAttribute('class','total')
totalContainer.appendChild(total)
occupiedCart.appendChild(totalContainer)

const deliveryType = document.createElement('div')
deliveryType.setAttribute('class', 'delivery-type')
occupiedCart.appendChild(deliveryType)

const carbonNeutral = document.createElement('img')
carbonNeutral.src = "assets/images/icon-carbon-neutral.svg"
deliveryType.appendChild(carbonNeutral)

const deliveryTypeParagraph = document.createElement('p')
deliveryTypeParagraph.textContent = `This is a carbon-neutral delivery`
const words = deliveryTypeParagraph.textContent.split(' ')

words[3] =`<span class="bold-text"> ${words[3]}</span>`
deliveryTypeParagraph.innerHTML = words.join(' ')

deliveryType.appendChild(deliveryTypeParagraph)

const submitButton = document.createElement('button')
submitButton.setAttribute('class', 'submit-button')
submitButton.textContent = 'Confirm Order'
occupiedCart.appendChild(submitButton)

const displayDessert = document.querySelector('.display-desserts')
const confirmedOrderContainer = document.querySelector('.confirmed-order')
const overlayTotalCost = document.querySelector('.confirmed-total-cost')
const startNewOrderBtn = document.querySelector('.start-new-order')
const contentOverlay = document.querySelector('#content')

function startNewOrder() {
    location.reload()    
}

startNewOrderBtn.onclick = startNewOrder

function orderConfirmed() {
    confirmedOrderContainer.style.display = 'flex'
    const ordersContainer = document.createElement('div')
    ordersContainer.setAttribute('class', 'orders')
    overlayTotalCost.textContent = `$${totalCost.toFixed(2)}`
    contentOverlay.style.pointerEvents = 'none'
    contentOverlay.style.filter= 'blur(2px)'

    for (let i = 0; i < yourOrder.length; i++) {
    // console.log(yourOrder[i]);
    const orderImage = document.createElement('img')
    orderImage.src = yourOrder[i].thumbnail
    
    const detailsContainer = document.createElement('div')
    detailsContainer.setAttribute('class','order-container')
    
    const nameAndNumbersContainer = document.createElement('div')
    nameAndNumbersContainer.setAttribute('class','name-and-numbers-container')
    
    const pictureAndDetails = document.createElement('div')
    pictureAndDetails.setAttribute('class','picture-and-details-container')

    const orderName = document.createElement('p')
    orderName.setAttribute('class', 'order-name')
    orderName.textContent = `${yourOrder[i].name}`
    
    const quantityAndPrice = document.createElement('div')
    quantityAndPrice.setAttribute('class','order-quantity-and-price')
    
    const orderQuantity = document.createElement('p')
    orderQuantity.setAttribute('class','order-quantity-number')
    orderQuantity.textContent = `${yourOrder[i].quantity}x`
    
    const orderPrice = document.createElement('p')
    orderPrice.setAttribute('class','order-price-per-one')
    orderPrice.textContent = `@ $${yourOrder[i].price.toFixed(2)}`
    
    quantityAndPrice.appendChild(orderQuantity)
    quantityAndPrice.appendChild(orderPrice)
    
    const quantityPrice = yourOrder[i].quantity * yourOrder[i].price

    const orderQuantityPrice = document.createElement('p')
    orderQuantityPrice.setAttribute('class','order-price-per-quantity')
    orderQuantityPrice.textContent = `$${quantityPrice.toFixed(2)}`
    
    nameAndNumbersContainer.appendChild(orderName)
    nameAndNumbersContainer.appendChild(quantityAndPrice)
    
    displayDessert.appendChild(detailsContainer)
    pictureAndDetails.appendChild(orderImage)
    pictureAndDetails.appendChild(nameAndNumbersContainer)
    detailsContainer.appendChild(pictureAndDetails)
    detailsContainer.appendChild(orderQuantityPrice)
    }

    
    
}

submitButton.addEventListener('click', orderConfirmed)

newData.forEach(element => {   
    const box = document.createElement('div')
    box.setAttribute('class', 'box')    

    const boxContent = document.createElement('div')
    boxContent.setAttribute('class', 'box-content')

    const foodImage = document.createElement('img')
    foodImage.setAttribute('class', 'food-image')
    function updateImageSize() {   
        const width = window.innerWidth
        if ( width <= 375 ){
            foodImage.src = element.image.mobile
        }
        if ( width > 375) {
            foodImage.src =  element.image.tablet
        }
        if ( width > 768 ) {
            foodImage.src =  element.image.desktop
        }
    }
    updateImageSize()
    window.addEventListener("resize", updateImageSize)

    const addToCartContainer = document.createElement('div')
    addToCartContainer.setAttribute('class', 'add-to-cart')   


    const notClicked = document.createElement('div')
    notClicked.setAttribute('class', 'not-clicked') 

    const clicked = document.createElement('div')
    clicked.setAttribute('class', 'clicked') 
    clicked.style.display = 'none'
    
    
    

    //CLICK
    function clickToAddToCart() {
        // if(element.quantity > 1){
            notClicked.style.display = 'none'
        clicked.style.display = 'flex'
        foodImage.style.border = '1.5px solid brown'
        number.textContent = 1
        // }
        totalCost += Number(element.price)
        total.textContent = `$${totalCost.toFixed(2)}`

        yourOrder.push({
            name: element.name,
            id: element.id,
            price: element.price,
            category: element.category,
            quantity: 1,
            thumbnail: element.image.thumbnail
        }) 
        
const numberOfDessertsInCart = document.querySelector('.total-items')
numberOfDessertsInCart.textContent = yourOrder.length

        renderDessert()
    }
    
             
    
    function renderDessert() {
        
        const occupiedBox = document.querySelector('.occupied-cart-box')
        
        const yourOrderContainer = document.createElement('div')
        yourOrderContainer.setAttribute('class', 'your-order')
        
        yourOrderContainer.innerHTML = ''
        
        const details = document.createElement('div')
        details.setAttribute('class', 'details')
        
        const foodNameParagraph = document.createElement('p')
        foodNameParagraph.setAttribute('class', 'food-name')
        
            const quantityContainer = document.createElement('span')
            quantityContainer.setAttribute('class','quantity')
             
            const quantityNumber = document.createElement('p')
            quantityNumber.setAttribute('class','quantity-number')

            const pricePerOne = document.createElement('p')
            pricePerOne.setAttribute('class','price-per-one')
            const pricePerQuantity = document.createElement('p')
            pricePerQuantity.setAttribute('class','price-per-quantity')
            
            const closeBtnMarkUp = `<svg xmlns="http://www.w3.org/2000/svg" class="remove-item-button" width="10"
             height="10" fill="none" viewBox="0 0 10 10"><path fill="" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>`

            const removeItem = document.createElement('div')
            removeItem.setAttribute('class', 'remove-item-container')
            removeItem.innerHTML = closeBtnMarkUp
            
            yourOrder.forEach(element => {            
                yourOrderContainer.appendChild(details)
                details.appendChild(foodNameParagraph)
            details.appendChild(quantityContainer)
            quantityContainer.appendChild(quantityNumber)
            quantityContainer.appendChild(pricePerOne)
            quantityContainer.appendChild(pricePerQuantity)
            yourOrderContainer.appendChild(removeItem) 
            foodNameParagraph.textContent = element.name
            pricePerOne.textContent = `@ ${element.price.toFixed(2)}`
            quantityNumber.textContent = `${1}x`
            pricePerQuantity.textContent = `$${element.price.toFixed(2)}`
                     
           function removeDessert() {
                const index = yourOrder.findIndex(cartItem => cartItem.id === element.id)
                yourOrder.splice(index, 1)
                yourOrderContainer.style.display = 'none'
                notClicked.style.display = 'flex'
                clicked.style.display = 'none'
                foodImage.style.border = 'none'
                number.textContent = ''
                const numberDisplay = document.querySelector('.total-items')
                numberDisplay.textContent = yourOrder.length
                console.log(yourOrder);
                
                totalCost -= Number(element.price * element.quantity)
        total.textContent = `$${totalCost.toFixed(2)}`

                if (yourOrder.length === 0) {
                    occupiedCart.style.display = 'none'
                emptyCart.style.display = 'flex'  
            }       
        }
    

        removeItem.onclick = removeDessert
        

    
        if (yourOrder.length === 0) {
                console.log('nothing');
            emptyCart.style.display = 'flex'
            console.log(yourOrder);
            
        }else if (yourOrder.length > 0) {
            emptyCart.style.display = 'none'    
            occupiedCart.style.display = 'flex'  
        }
    });
    
    
    occupiedBox.appendChild(yourOrderContainer) 
}


    //ADD TO CART

    notClicked.addEventListener('click', clickToAddToCart)


    const addBtnMarkUp = `
        <svg xmlns="http://www.w3.org/2000/svg" class="add-items" width="10" height="10" fill="none"
         viewBox="0 0 10 10"><path fill="" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>
    `

   const increment = document.createElement('div')
   increment.setAttribute('class', 'add-item-container')
   increment.innerHTML = addBtnMarkUp
    
   const subtractBtnMarkUp = `
        <svg xmlns="http://www.w3.org/2000/svg" width="10" class="subtract-items" height="2" fill="none"
        viewBox="0 0 10 2"><path fill="" d="M0 .375h10v1.25H0V.375Z"/></svg>
   `

   const decrement = document.createElement('div')
   decrement.setAttribute('class', 'subtract-item-container')
   decrement.innerHTML = subtractBtnMarkUp
   
        
       
        
        const number = document.createElement('p')        
        
        const minQuantity = 0
        function increaseQuantity() {
            const findDessert = yourOrder.find(item => item.id === element.id)
            const wholePage = number.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement            
            const cartElement = wholePage.querySelector('.cart')
            const dessertName = findDessert.name

            const quantityElements = cartElement.querySelectorAll('p')
            const dessertInCart = Array.from(quantityElements).find(element => 
            element.textContent.trim() === dessertName)
            const foodParentElement = dessertInCart.parentElement
            const quantityElement = foodParentElement.querySelector('.quantity-number')
            const costPerQuantity = foodParentElement.querySelector('.price-per-quantity')
            
            const numberTextContent = findDessert.quantity + 1 
            number.textContent = numberTextContent
            costPerQuantityValue = numberTextContent * findDessert.price
            // console.log(costPerQuantityValue);
            
            totalCost += Number(findDessert.price)
            total.textContent = `$${totalCost.toFixed(2)}`
            

            if(findDessert){
                findDessert.quantity += 1
                quantityElement.textContent = `${findDessert.quantity}x`
                costPerQuantity.textContent = `$${costPerQuantityValue.toFixed(2)}`
            }else{
                console.log('we no find am!');
                
            }
            if (element.quantity === minQuantity) {
            notClicked.style.display = 'flex'
            clicked.style.display = 'none'
            foodImage.style.border = 'none'
        }
        

        
    }
    
    function decreaseQuantity() {
        const findDessert = yourOrder.find(item => item.id === element.id)
          const wholePage = number.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement            
            const cartElement = wholePage.querySelector('.cart')
            const dessertName = findDessert.name

            const quantityElements = cartElement.querySelectorAll('p')
            const dessertInCart = Array.from(quantityElements).find(element => 
                element.textContent.trim() === dessertName)
            const foodParentElement = dessertInCart.parentElement
            const quantityElement = foodParentElement.querySelector('.quantity-number')

            const costPerQuantity = foodParentElement.querySelector('.price-per-quantity')
            const numberTextContent = findDessert.quantity - 1 
            number.textContent = numberTextContent
            costPerQuantityValue = numberTextContent * findDessert.price
            console.log(costPerQuantityValue);

            totalCost -= Number(findDessert.price)
            total.textContent = `$${totalCost.toFixed(2)}`

           if(findDessert.quantity !== 0 ){
               quantityElement.textContent = findDessert.quantity - 1
           } 

        if (findDessert && findDessert.quantity > minQuantity) {
                findDessert.quantity -= 1
                quantityElement.textContent = `${findDessert.quantity}x`
                costPerQuantity.textContent = `$${costPerQuantityValue.toFixed(2)}`

            }else{
         console.log('no desert quantity to deduct from.');
            
        }
        if (findDessert.quantity === 0) {
            notClicked.style.display = 'flex'
            clicked.style.display = 'none'
            foodImage.style.border = 'none'
            const index = yourOrder.findIndex(obj => obj.id === element.id)
            yourOrder.splice(index, 1)
            const foodDetailsContainer = foodParentElement.parentElement
            foodDetailsContainer.style.display = 'none'
            if (yourOrder.length === 0) {
            occupiedCart.style.display = 'none'
            emptyCart.style.display = 'flex'  
            }
            
        }
    }

    
    increment.addEventListener('click', increaseQuantity)
    decrement.addEventListener('click', decreaseQuantity)

    //YOUR SHOP

    const trolleyIcon = document.createElement('img')
    trolleyIcon.setAttribute('src', 'assets/images/icon-add-to-cart.svg')

    const addToCartParagraph = document.createElement('p')
    addToCartParagraph.textContent = 'Add To Cart'

    const foodDetailsContainer = document.createElement('div')
    foodDetailsContainer.setAttribute('class', 'food-details')

    const foodCategory = document.createElement('p')
    foodCategory.setAttribute('class', 'food-category')
    foodCategory.textContent = element.category
    
    const foodName = document.createElement('p')
    foodName.setAttribute('class', 'food-name')
    foodName.textContent = element.name
       
    const price = document.createElement('p')
    price.setAttribute('class', 'price')
    price.textContent = `$${parseFloat(element.price).toFixed(2)}`

    desserts.appendChild(box)
    box.appendChild(boxContent)
    boxContent.appendChild(foodImage)
    boxContent.appendChild(addToCartContainer)
    addToCartContainer.appendChild(notClicked)
    notClicked.appendChild(trolleyIcon)
    notClicked.appendChild(addToCartParagraph)
    
    addToCartContainer.appendChild(clicked)
    clicked.appendChild(decrement)
    clicked.appendChild(number)
    clicked.appendChild(increment)

    boxContent.appendChild(foodDetailsContainer)
    foodDetailsContainer.appendChild(foodCategory)
    foodDetailsContainer.appendChild(foodName)
    foodDetailsContainer.appendChild(price)
})


