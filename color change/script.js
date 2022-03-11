var color=new Array(6);
color[0]="red";
color[1]="#000000";
color[2]="#99CCHF";
color[3]="blue";
color[4]="pink";
color[5]="green";

function changeColor()
{
var ranNum= Math.floor(Math.random()*6);
document.body.style.backgroundColor=color[ranNum];
}
