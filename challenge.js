document.addEventListener("DOMContentLoaded", () => {

    let counter = document.getElementById("counter");
    let decreaseBtn = document.getElementById("-");
    let increaseBtn = document.getElementById("+");
    let heartBtn = document.getElementById("<3");
    let pauseBtn = document.getElementById("pause");
    let submitBtn = document.getElementById("submit");
    let form = document.getElementById("comment-form");
    let input = document.getElementById("input");
    let likes = {}
    
    let autoCounter = window.setInterval(increaseTime, 1000);

    increaseBtn.addEventListener("click", increaseTime);
    decreaseBtn.addEventListener("click", decreaseTime);

    pauseBtn.addEventListener("click", function(e){
        if (e.target.innerText === "pause"){
            e.target.innerText = "resume";
            window.clearInterval(autoCounter)
            decreaseBtn.disabled = true;
            increaseBtn.disabled = true;
            heartBtn.disabled = true;
            submitBtn.disabled = true;
        }else{
            e.target.innerText = "pause";
            window.setInterval(increaseTime, 1000);
            decreaseBtn.disabled = false;
            increaseBtn.disabled = false;
            heartBtn.disabled = false;
            submitBtn.disabled = false;
        }
    });

    heartBtn.addEventListener("click", function(e) {

        function numberExists(){
            let lis = document.getElementsByTagName("li");

            if (lis.length > 0){
                for (const line of lis){
                    let arr = line.innerText.split(" ");
                    if (arr[0] === counter.innerText ){
                        console.log(true);
                        return true;
                    }
                }
            }else{
                return false;
            }
        }

        if (numberExists()){
            let myLis = document.getElementsByTagName("li");
            for (const line of myLis){
                let arr = line.innerText.split(" ");
                if (arr[0] === counter.innerText ){
                    arr[4] = parseInt(arr[4]) + 1;
                    arr[5] = "times";
                    line.innerText = arr.join(" ");
                }
            }
        }else{
            let newLike = document.createElement("li")
            newLike.innerHTML = `${counter.innerText} has been liked 1 time`
            document.getElementsByTagName("ul")[0].appendChild(newLike)
        }

        // for (let key in likes) {
        //     let wordTimes
        //     likes[key] === 1 ? wordTimes = "time" : wordTimes = "times"
        //     if ( document.getElementById(key) ) {
        //       document.getElementById(key).innerText = `${key} has been liked ${likes[key]} ${wordTimes}`
        //     } else {
        //       let likeLi = document.createElement('li')
        //       let likesUl =   document.getElementsByTagName("ul")[0]
        //       likeLi.innerText = `${key} has been liked ${likes[key]} ${wordTimes}`
        //       likeLi.setAttribute('id', key)
        //       likesUl.appendChild(likeLi)
        //     }
        // }
      });

      form.addEventListener("submit", function(e){
        e.preventDefault();
        if (input.value){
            let p = document.createElement("p");
            p.innerText = input.value;
            document.getElementById("list").prepend(p);
            this.reset();
        }
      })

    function increaseTime(){
        counter.innerText = parseInt(counter.innerText) + 1;
    }

    function decreaseTime(){
        counter.innerText = parseInt(counter.innerText) - 1;
    }

    let list = document.getElementsByTagName("li")

    // Search if true
    // let tempArr = []
    // for (const item of list){
    //     let newArr = item.split(" ")
    //     if (parseInt(newArr[0]) === parseInt(counter.innerText)){
    //         tempArr.push(true)
    //     }
    // }

    // for (const item of list){
    //     let newArr = item.split(" ")
    //     if (parseInt(newArr[0]) === parseInt(counter.innerText)){
    //         newArr[4] = parseInt(newArr[4]) + 1;
    //         newArr[5] = "times";
    //     }
    // }
});