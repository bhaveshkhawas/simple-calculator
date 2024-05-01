let display= document.getElementById('inputbox');
let buttons= document.querySelectorAll('button');// var is buttons
let buttonarray =Array.from(buttons);
let string ='';

buttonarray.forEach(btn =>
{
    btn.addEventListener('click',(e)=>
    { 
        if(e.target.innerHTML == 'DEL')
        {
            string=string.substring(0,string.length-1);
            display.value=string;
        }
        else if(e.target.innerHTML == 'C')
        {
                       string=' ';
                       display.value=string;
        }
        else if(e.target.innerHTML == '=')
        {
            string=eval(string);
            display.value=string;
        }
        else{
        string += e.target.innerHTML ;
        display.value=string;
        }
         

        // console.log(e.target.innerHTML)
    });
});

