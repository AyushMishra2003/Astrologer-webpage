hamburger = document.getElementById("hamburg")
cross = document.getElementById("cross")
sideBar = document.getElementById("side-bar")

function ham() {
    hamburger.classList.toggle("not-active")
    cross.classList.toggle("active")
    sideBar.classList.toggle("side-active")
}

myNum = document.querySelectorAll('.count')

let speed = 2;
let x=1
let isNotRun=true
myNum.forEach( (myCount) => {
    // isRun=true
    let end = myCount.dataset.count;
    // console.log(typeof target_count);
    let start = parseInt(myCount.innerText);
    // console.log(typeof init_count);
    // console.log(target_count)
    
    let increment_num = Math.floor(end / speed);
    
    const updateNumber = () => {
        isNotRun=false
        start +=  increment_num;
        myCount.innerText = start;
        // console.log("kya mai chala");
        if(start < end){
            setTimeout(() => {updateNumber()}, 5)
        }
     }
     updateNumber()
    //  isNotRun=false
    // window.addEventListener('scroll',function(){
    //     x = window.scrollY;
    //     if(x>1840 && x<2286)
    //     {
    //         updateNumber(); 
    //     }
    //     console.log("my scrool is",x);
        
    // })
})
