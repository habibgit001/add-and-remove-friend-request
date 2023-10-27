var allBtn = document.querySelector("#btn");
var h2 = document.querySelector("h1");
check = 0
allBtn.addEventListener('click', function () {
    if(check == 0){
        h2.innerHTML = "Friends";
        h2.style.color = "green";
        allBtn.innerHTML = "Remove friend"
        check =1;
    } else{
        h2.innerHTML = "Stranger";
        h2.style.color = "red";
        allBtn.innerHTML = "Add friend"

        check = 0;
    }
})