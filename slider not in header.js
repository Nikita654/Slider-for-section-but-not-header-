function rpostsImage(n){
    
    let image = document.getElementsByClassName("rposts-img1");
    let circle = document.getElementsByClassName("rposts-circle");
    if (n==0){slideindex=5;n=5};
    if (n==6){slideindex=1;n=1;};
    image[0].style.filter= "brightness(100%)";
    image[0].style.opacity="1";
    for(let i=0; i<5;i++){
    circle[i].classList.remove("rposts-circle-active");};
    image[0].style.animationName="switching ";
    
    setTimeout(function(){
        
        if(n==1){
            circle[0].classList.add("rposts-circle-active");
            image[0].style.backgroundImage="url(Waxommain/img/rposts-img1.png)";
        };
        if(n==2){
            circle[1].classList.add("rposts-circle-active");
            image[0].style.backgroundImage="url(Waxommain/img/pr-img4.png)";
        };
        if(n==3){
            circle[2].classList.add("rposts-circle-active");
    
            image[0].style.backgroundImage="url(Waxommain/img/pr-img6.png)";
        };
        if(n==4){
            circle[3].classList.add("rposts-circle-active");
            
    
            image[0].style.backgroundImage="url(Waxommain/img/pr-img2.png)";
        };
        if(n==5){
            circle[4].classList.add("rposts-circle-active");
    
            image[0].style.backgroundImage="url(Waxommain/img/pr-img1.png)";
        };
        
        
        image[0].style.animationName="switching1";;},2000);
               

};