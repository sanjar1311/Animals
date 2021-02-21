var $_ = function (selector, node = document) {
  return node.querySelector(selector);
};

var $$_ = function (selector, node = document) {
  return node.querySelectorAll(selector);
};

var createElement = function (tagName, className, text) {
  var element = document.createElement(tagName);
  element.setAttribute('class', className);

  if (text) {
    element.textContent = text;
  }

  return element;
};

const elDogImg = $_('.dogs-img');
const elDogBtn = $_('.dogs-btn');

elDogBtn.addEventListener('click', ()=> {
  fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => {
    if(response.status === 200) {
      return response.json()
    }
  })
  .then(response => {
    if(response.status === 'success') {
      elDogImg.src = response.message
    }
  })
})