
let flag =0;
let num = flag;
slideshow(flag);
document.getElementById("prev").addEventListener("click",function(){
    slideclose(flag);
    if(flag>0){
        flag--;

    }
    else{
        flag=2
    }
    slideshow(flag)
})
document.getElementById("next").addEventListener("click",function(){
    slideclose(flag);
    if(flag<2){
        flag++;

    }
    else{
        flag=0;
        

    }
    slideshow(flag)
})

function slideshow(num){
    let slides =document.getElementsByClassName("slide");
    slides[num].style.display="block";


}
function slideclose(num){
    let slides = document.getElementsByClassName("slide");
    slides[num].style.display="none";

}