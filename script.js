//	https://api.adviceslip.com/advice
const getAdviceButton = document.querySelector('#getAdvice');
getAdviceButton.addEventListener('click',getAdvice);

const adviceId = document.querySelector('#adviceId');
const loader = document.querySelector('#loader');
const adviceText = document.querySelector('#advice');


function getAdvice(){
  adviceText.innerText = "";
  adviceId.innerText = "";
  loading(true);
  fetch("https://api.adviceslip.com/advice")
  .then(response => {
    return response.json();
  })
  .then(data => {
    loading(false);
    adviceText.innerText = data.slip.advice;
    adviceId.innerText = data.slip.id;
  })
}

getAdvice();


function loading(isLoading){
  if(isLoading){
    loader.style.display = "block";
  }else{
    loader.style.display = "none";
  }
}