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

        const contactCard = call.parentNode.parentNode;
        const callTitle = contactCard.children[2].innerText;
        const callNumber = contactCard.children[3].innerText;

        const coin = parseInt(document.getElementById('coin').innerText);
        if (coin < 20) {
            alert('You do not have enough coin. To make a call minimum 20 coin');
            return;
        }
        alert(`Calling ${callTitle} ${callNumber}...`);
        const newCoin = coin - 20;
        document.getElementById('coin').innerText = newCoin;

        // history added
        const currentTime = new Date().toLocaleTimeString();
        const historyClear = document.getElementById('call-history-container');
        
        // history card
        const newCard = document.createElement("div");
        newCard.innerHTML = `
                <div class="mx-auto my-2 bg-[#F2F2F2] rounded-xl flex justify-between items-center flex-row p-3">
                    <div class="">
                        <h2 class="font-semibold text-base mt-2">${callTitle}</h2>
                        <p class="py-2 text-[#5C5C5C]">${callNumber}</p>
                    </div>
                    <div>
                        <p class="text-sm text-[#5C5C5C]">${currentTime}</p>
                    </div>
                </div>
            `;

        historyClear.append(newCard);
    })
}

// copy button feature 
const copys = document.getElementsByClassName('copy-btn');
for (const copy of copys) {
    copy.addEventListener('click', function () {
        const numberToCopy = copy.parentNode.parentNode.children[3].innerText;

        // number copy and count
        navigator.clipboard.writeText(numberToCopy).then(() => {
            alert(`Number has copied: ${numberToCopy}`)
            const copyCount = parseInt(document.getElementById('copy-count').innerText);
            const newCopyCount = copyCount + 1;
            document.getElementById('copy-count').innerText = newCopyCount;
        })
    })
}

// Call History Clear
document.getElementById('btn-clear')
    .addEventListener('click', function () {
        const callHistoryClear = document.getElementById('call-history-container');
        callHistoryClear.innerHTML = "";
    })
