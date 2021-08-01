



// About link section coding 
var div1        = document.querySelector(".demo1");
var div2        = document.querySelector(".demo2");
var div3        = div1.innerText;
var h1          = document.querySelector('.about-heading1');
var h2          = document.querySelector('.about-heading2');
var h3          = h1.innerText;
var nodeText1   = document.createTextNode;
var nodeText2   = document.createTextNode;
var heading     =[];
var span       = [];

nodeText1 = h3;
nodeText2 = div3;
 // heading section

setTimeout(() => {

    for (let i=0; i<nodeText1.length; i++) {
        heading[i] = document.createElement('span');
        heading[i].innerHTML = nodeText1[i];
        heading[i].style.opacity='0';
        h2.appendChild(heading[i]);
       }
    var k= 0;
    var t1 = setInterval(() => {
    
        heading[k].style.opacity="1";
        k=k+1;
    
        if(k===heading.length) {
            clearInterval(t1);
        }
        
    }, 100);
     
 },500);
setTimeout(() => {
    for (let i=0; i<nodeText2.length; i++) {
        span[i] = document.createElement('span');
        span[i].innerHTML = nodeText2[i];
        span[i].style.opacity='0';
        div2.appendChild(span[i]);
    
       }
    
    var j= 0;
    
    var t2 = setInterval(() => {
    
        span[j].style.opacity="1";
        j=j+1;
    
        if(j===span.length) {
            clearInterval(t2);
        }
        
    }, 100);
    
}, 4000);


