// const logo = document.querySelectorAll("#logo path");

// const rects = document.querySelectorAll("#logo rect");

var link = '../index.html'

// for(let i = 0; i < logo.length; i++){
//     console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
// }


// for(let i = 0; i < rects.length; i++){
//     console.log(`Letter ${i} is ${rects[i].getTotalLength()}`);
// }


// setTimeout(() => replace.href= link , 5000);


setTimeout(function replaceLink() {
    
    
    location.replace(link);

  }, 5000);
