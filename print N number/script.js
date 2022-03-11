
function printnumber()
{
    var num = parseInt(prompt());
  
    let answer="";
    for (let i=0;i<=num;i++)
        answer+=i+"<br>";
    
    document.getElementById("number").innerHTML = answer;
     
   
  
}