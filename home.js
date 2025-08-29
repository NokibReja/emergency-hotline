
// heart button feature
const hearts = document.getElementsByClassName('heart-btn')
for(const heart of hearts){
    heart.addEventListener('click', function(){
       const heartNum = parseInt(document.getElementById('heart-count').innerText)
       const newHeartNum = heartNum + 1;
       document.getElementById('heart-count').innerText = newHeartNum;
    })
}

