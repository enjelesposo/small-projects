const popup = document.querySelector('.popup');     // the entire pop-up
const book = document.querySelector('.book-wrapper');   // the book wrapper for when the mouse hovers
const heartButton = document.querySelector('.heart-button');   // heart button 
const addButton = document.querySelector('.add-button');    // add button

// mouse hover diplay the card
book.addEventListener('mouseover', function(e){
  popup.style.display = 'block';
})
// mouse hover out display: none
book.addEventListener('mouseout', function(e){
  popup.style.display = 'none';
})

// heart button color change on-click
heartButton.addEventListener('click', function(){
  if(heartButton.classList.contains('active-heart')){
    heartButton.className = 'heart-button';
  } else {
    heartButton.className = 'active-heart';
  }
})

// add button color change on-click
addButton.addEventListener('click', function(){
  if (addButton.classList.contains('active-add')){
    addButton.className = 'add-button';
  } else {
    addButton.className = 'active-add';
  }
})
