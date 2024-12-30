function fun(){
    let date = new Date();
    var dd = date.getDate();
    var mm = date.getMonth();
    var yyyy = date.getFullYear();

    var day=date.getDay();

    var mon = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    var mm=mon[mm];
    document.getElementById("date").innerHTML=`${dd}-${mm}-${yyyy}`;

    var dayn = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var day=dayn[day];
    document.getElementById("day").innerHTML=`${day}`;

    var hh = date.getHours();
    var mm = date.getMinutes();
    var ss = date.getSeconds();
    var am_pm="am";
    if(hh>=12){
        am_pm="pm";
        if(hh>12){
            hh-12;
        } 
    }
    if(hh==0){
        hh==12;
    }
    function sec(){
        if(ss>=0 && ss<=9){
            document.getElementById("sec").innerHTML=`0${ss}`;
        }
        else{
            document.getElementById("sec").innerHTML=`${ss}`;
        }
    }
    sec();
    
    function mins(){
        if(mm>=0 && mm<=9){
            document.getElementById("min").innerHTML=`:0${mm}:`;
        }
        else{
            document.getElementById("min").innerHTML=`:${mm}:`;
        }
    }
    mins();
    function hour(){
        if(hh>=0 && hh<=9){
            document.getElementById("hour").innerHTML=`0${hh}`;
        }
        else{
            document.getElementById("hour").innerHTML=`${hh}`;
        }
    }
    hour();
    document.getElementById("ampm").innerHTML=`${am_pm}`;
    function newyear(){
        if(hh==0 && mm>=0 && yyyy==2025){
            document.getElementById("snow").style.display="none";
            document.getElementById("crackers").style.display="block";
            document.getElementById("sec").style.display="none";
            document.getElementById("con").style.display="none";
            document.getElementById("newyear").style.display="flex"; 
        }
    }
    newyear();
    function backcol(){
        let n=ss%10;
        var arr=["blue","red","purple","lime","deeppink"];
        if(n==1 || n==6){
            document.getElementById("sec").style.textShadow=`${arr[0]} 2px 2px 5px,${arr[0]} -2px -2px 5px`;
            document.getElementById("day").style.textShadow=`${arr[0]} 2px 2px 5px,${arr[0]} -2px -2px 5px`;
            document.getElementById("date").style.textShadow=`${arr[0]} 2px 2px 5px,${arr[0]} -2px -2px 5px`;
            document.getElementById("hour").style.textShadow=`${arr[0]} 2px 2px 5px,${arr[0]} -2px -2px 5px`;
            document.getElementById("min").style.textShadow=`${arr[0]} 2px 2px 5px,${arr[0]} -2px -2px 5px`;
            document.getElementById("ampm").style.textShadow=`${arr[0]} 2px 2px 5px,${arr[0]} -2px -2px 5px`;
            document.getElementById("newyear").style.textShadow=`${arr[0]} 2px 2px 5px,${arr[0]} -2px -2px 5px`;
            document.getElementById("y2025").style.textShadow=`${arr[0]} 2px 2px 5px,${arr[0]} -2px -2px 5px`;
        }    
        else if(n==2 || n==7){
            document.getElementById("sec").style.textShadow=`${arr[1]} 2px 2px 5px,${arr[1]} -2px -2px 5px`;
            document.getElementById("day").style.textShadow=`${arr[1]} 2px 2px 5px,${arr[1]} -2px -2px 5px`;
            document.getElementById("date").style.textShadow=`${arr[1]} 2px 2px 5px,${arr[1]} -2px -2px 5px`;
            document.getElementById("hour").style.textShadow=`${arr[1]} 2px 2px 5px,${arr[1]} -2px -2px 5px`;
            document.getElementById("min").style.textShadow=`${arr[1]} 2px 2px 5px,${arr[1]} -2px -2px 5px`;
            document.getElementById("ampm").style.textShadow=`${arr[1]} 2px 2px 5px,${arr[1]} -2px -2px 5px`;
            document.getElementById("newyear").style.textShadow=`${arr[1]} 2px 2px 5px,${arr[1]} -2px -2px 5px`;
            document.getElementById("y2025").style.textShadow=`${arr[1]} 2px 2px 5px,${arr[1]} -2px -2px 5px`;
        }
        else if(n==3 || n==8)
        {
            document.getElementById("sec").style.textShadow=`${arr[2]} 2px 2px 5px,${arr[2]} -2px -2px 5px`;
            document.getElementById("day").style.textShadow=`${arr[2]} 2px 2px 5px,${arr[2]} -2px -2px 5px`;
            document.getElementById("date").style.textShadow=`${arr[2]} 2px 2px 5px,${arr[2]} -2px -2px 5px`;
            document.getElementById("hour").style.textShadow=`${arr[2]} 2px 2px 5px,${arr[2]} -2px -2px 5px`;
            document.getElementById("min").style.textShadow=`${arr[2]} 2px 2px 5px,${arr[2]} -2px -2px 5px`;
            document.getElementById("ampm").style.textShadow=`${arr[2]} 2px 2px 5px,${arr[2]} -2px -2px 5px`;
            document.getElementById("newyear").style.textShadow=`${arr[2]} 2px 2px 5px,${arr[2]} -2px -2px 5px`;
            document.getElementById("y2025").style.textShadow=`${arr[2]} 2px 2px 5px,${arr[2]} -2px -2px 5px`;
        }
        else if(n==4 || n==9)
        {
            document.getElementById("sec").style.textShadow=`${arr[3]} 2px 2px 5px,${arr[3]} -2px -2px 5px`;
            document.getElementById("day").style.textShadow=`${arr[3]} 2px 2px 5px,${arr[3]} -2px -2px 5px`;
            document.getElementById("date").style.textShadow=`${arr[3]} 2px 2px 5px,${arr[3]} -2px -2px 5px`;
            document.getElementById("hour").style.textShadow=`${arr[3]} 2px 2px 5px,${arr[3]} -2px -2px 5px`;
            document.getElementById("min").style.textShadow=`${arr[3]} 2px 2px 5px,${arr[3]} -2px -2px 5px`;
            document.getElementById("ampm").style.textShadow=`${arr[3]} 2px 2px 5px,${arr[3]} -2px -2px 5px`;
            document.getElementById("newyear").style.textShadow=`${arr[3]} 2px 2px 5px,${arr[3]} -2px -2px 5px`;
            document.getElementById("y2025").style.textShadow=`${arr[3]} 2px 2px 5px,${arr[3]} -2px -2px 5px`;
        }
        else if(n==5 || n==0)
        {
            document.getElementById("sec").style.textShadow=`${arr[4]} 2px 2px 5px,${arr[4]} -2px -2px 5px`;
            document.getElementById("day").style.textShadow=`${arr[4]} 2px 2px 5px,${arr[4]} -2px -2px 5px`;
            document.getElementById("date").style.textShadow=`${arr[4]} 2px 2px 5px,${arr[4]} -2px -2px 5px`;
            document.getElementById("hour").style.textShadow=`${arr[4]} 2px 2px 5px,${arr[4]} -2px -2px 5px`;
            document.getElementById("min").style.textShadow=`${arr[4]} 2px 2px 5px,${arr[4]} -2px -2px 5px`;
            document.getElementById("ampm").style.textShadow=`${arr[4]} 2px 2px 5px,${arr[4]} -2px -2px 5px`;
            document.getElementById("newyear").style.textShadow=`${arr[4]} 2px 2px 5px,${arr[4]} -2px -2px 5px`;
            document.getElementById("y2025").style.textShadow=`${arr[4]} 2px 2px 5px,${arr[4]} -2px -2px 5px`;
        }
    }
    backcol();
}
setInterval(fun,1000);