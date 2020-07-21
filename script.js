//first-slider-part-one-start
let ap = document.getElementById('pro')
let ap2 = document.getElementById('pro2')

let earpods = "img/just.png";
let withcase = "img/just3.jpg";

ap.addEventListener('click', function(){
 document.getElementById('desimage').src=earpods;
 document.getElementById('head1').innerHTML= "Old Heading";
 document.getElementById('para1').innerHTML="THIS IS OLD PARA";
 
})

ap2.addEventListener('click', function(){
document.getElementById('desimage').src=withcase;
document.getElementById('head1').innerHTML= "New Heading";
document.getElementById('para1').innerHTML="THIS IS NEW PARA";
})
//first-slider-part-one-end


