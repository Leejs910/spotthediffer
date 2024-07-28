//박스 선택
var myCanvas = document.querySelector('#box2')
//문제수//
var numberToGo = 5;
//문제 선택//
var numbersToGoInput = document.getElementById('numbersToGo');
//문제 내부html//
numbersToGoInput.innerHTML = numberToGo;

//생명 게이지 //
var numbersToLife = 20;

var numbersToLifeInput = document.getElementById('numbersToLife')

// 생명 내부 html //
numbersToLifeInput.innerHTML = numbersToLife;






// //실행문제 상태 //
// https://stackoverflow.com/questions/8260156/how-do-i-create-dynamic-variable-names-inside-a-loop
for (var i = 0; i < 5; i++) {
	window['isDone'+i] = false; 
}
var positionArray =[
        "92,465",
        "460,261",
        "307,434",
        "218,169",
        "472,76"
    ];

//박스12의 이벤트 리스너
myCanvas.addEventListener('click',function(event){ 
    var rect = myCanvas.getBoundingClientRect();
    var x = event.clientX - rect.left; 
    var y = event.clientY - rect.top;
    console.log(x,y);
    console.log(positionArray);
    for(var i = 0; i< 5; i++){
        if(
            window['isDone' + i] == false
            &&
            x > positionArray[i].split(',')[0] * 0.90
            &&
            x < positionArray[i].split(',')[0] * 1.10
            &&
            y > positionArray[i].split(',')[1] * 0.90
            &&
            y < positionArray[i].split(',')[1] * 1.10
            ){
                console.log(positionArray[i].split(',')[0]);
                console.log(positionArray[i].split(',')[1]);
                var c = document.getElementById("box2");
                var ctx = c.getContext("2d");
                ctx.beginPath();
                ctx.lineWidth = 5;
                ctx.arc(positionArray[i].split(',')[0], positionArray[i].split(',')[1], 40, 0, 2 * Math.PI);
                ctx.strokeStyle = 'red';
                ctx.stroke();
                window['isDone' + i] = true;
                numberToGo = numberToGo - 1;
                numbersToGoInput.innerHTML = numberToGo;
                showFinished(numberToGo);
            }
        }
    });
                
            
    
            
            
    
    
 

    
    
            

// 다음 단계 //

function showFinished($num){
    if($num==0){
        
        var modalContainer = document.getElementById('modal-container')

        var finishMessage =document.getElementById('finishMessage');
        finishMessage.innerHTML ="축하합니다. 다음 단계 시작하세요!"
        finishMessage.style="color:red"
        setTimeout(()=>{
            modalContainer.style='display:flex';
        },1*500)
        
    }
}


