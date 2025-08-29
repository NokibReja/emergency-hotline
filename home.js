// heart button feature
const hearts = document.getElementsByClassName('heart-btn');
for (const heart of hearts) {
    heart.addEventListener('click', function () {
        const heartNum = parseInt(document.getElementById('heart-count').innerText)
        const newHeartNum = heartNum + 1;
        document.getElementById('heart-count').innerText = newHeartNum;
    })
}

// call button feature
const calls = document.getElementsByClassName('call-btn');
for (const call of calls) {
    call.addEventListener('click', function () {
        const coin = parseInt(document.getElementById('coin').innerText);
        if (coin < 20) {
            alert('You do not have enough coin');
            return;
        }
        const newCoin = coin - 20;
        document.getElementById('coin').innerText = newCoin;
    })
}

// copy button feature 
const copys = document.getElementsByClassName('copy-btn');
for(const copy of copys){
    copy.addEventListener('click', function(){
        const copyCount = parseInt(document.getElementById('copy-count').innerText);
        const newCopyCount = copyCount+1;
        document.getElementById('copy-count').innerText = newCopyCount; 
    })
}
