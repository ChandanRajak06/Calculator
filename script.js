let string = "";

let buttons = document.querySelectorAll("Button");

Array.from(buttons).forEach((button)=>{
    button.addEventListener("click",(evt)=>{

        if(evt.target.innerHTML == "="){
            string = eval(string);
            document.querySelector("input").value=string;
        }
        else if(evt.target.innerHTML == "C"){
            string ="";
            document.querySelector("input").value=string;
        }
        else{
        console.log(evt.target)
        string = string + evt.target.innerHTML;
        document.querySelector("input").value=string;
        }
    })
})