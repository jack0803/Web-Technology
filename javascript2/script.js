function fibonaci(){
    let x= prompt("Enter the number");
    let i=0;
    let j=1;
    let ans=1;
    let answer=[];
    answer.push(i);
    answer.push(j);
    for (let m=2;m<x;m++){
        ans=i+j;
        i=j;
        j=ans;
        answer.push(ans);
    }
    document.getElementById("demo").innerHTML= answer;

}