console.log("page loaded...");

function acceptRequest(element) {
    var reqNum = document.getElementById('_requests');
    var curCon = document.getElementById('_connections');

    reqNum.innerText = parseInt(reqNum.textContent) - 1;
    curCon.innerText = parseInt(curCon.textContent) + 1;
    element.parentElement.parentElement.remove();
}

function denyRequest(element) {
    var reqNum = document.getElementById('_requests');
    
    reqNum.innerText = parseInt(reqNum.textContent) - 1;
    element.parentElement.parentElement.remove();
}

function editProfile() {
    var userName = document.querySelector('.card-body h1');

    userName.innerText = "Robert Teets";
}
