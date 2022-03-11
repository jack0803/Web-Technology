var num, temp;
function oddeven()
{
  num = parseInt(document.getElementById("num").value);
  if(num)
  {
    temp = document.getElementById("show");
    temp.style.display = "block";
    if(num%2==0)
    {
      document.getElementById("number").innerHTML = num+" is Even";
      document.getElementById("number").style.color ='green';
    }
      else
      {
       document.getElementById("number").innerHTML =num+ " is Odd";
       document.getElementById("number").style.color ='red';
    }
    }
}