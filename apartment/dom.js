let cards = document.getElementsByClassName("card")
cards = Array.from(cards)// to convert to an array
console.log(cards)


// we r trying to setup a funiction and connect it to html and css without assign this thing to the html
cards.forEach((card) => {
    card.adEventListener('click',()=>{
        card.classList.toggle('transparent')
    })
    
});