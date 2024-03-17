function tech_info(val){
    let info = document.getElementById("tech_info");
    info.style.background = "radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)"
    info.style.padding = "1.2rem 1.2rem";
    
    if(val == 0){
        info.innerHTML =  "<b>Java</b> :<br>I have acquired proficiency in Java, mastering key concepts such as object-oriented programming, data structures, and algorithm implementation. I am confident in my ability to design and develop robust applications using Java, demonstrating a strong understanding of the language's syntax, libraries, and best practices.";
    }
    else if(val == 1){
        info.innerHTML =  "<b>Javascript</b> :<br>I have acquired proficiency in JavaScript, mastering its core concepts, syntax, and functionalities, enabling me to confidently develop dynamic and interactive web applications";
    }
    else if(val == 2){
        info.innerHTML =  "<b>PHP</b> :<br>I am well-versed in PHP, having successfully learned and applied its principles to develop dynamic and efficient web applications.";
    }
    else if(val == 3){
        info.innerHTML =  "<b>RHEL</b> :<br>I'm certified with RedHat Certified System Administrator (RHCSA) in RHEL-8 with understanding of 1)Understand and use essential tools. 2)Operate running systems 3)Configure local storage 4)Create and configure file systems 5)Deploy, configure, and maintain systems 6)Manage users and groups 7)Manage security 8)Configure basic networking etc..";
    }    

    
}

function clear_info()
{
    let info = document.getElementById("tech_info");
    info.innerHTML =  "";
    info.style.padding = "0 0";
    
}

function view_res(){
    open('docs/Resume-Mohit-Khambekar.pdf','_blank');
}


  
