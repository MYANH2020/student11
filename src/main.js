function publishResult(){
    const math=document.getElementById("math").value;
    const physics=document.getElementById("physics").value;
    const computer=document.getElementById("computer").value;
    const programming=document.getElementById("programming").value;
    const chemistry=document.getElementById("chemistry").value;
    const id=document.getElementById("id").value;

    let total= parseFloat(math) + parseFloat(physics) + parseFloat(computer) + parseFloat(programming) + parseFloat(chemistry);
    document.getElementById("sum").innerHTML="The Sum Is:" + total;
    let percentage=(total*100)/500;
     document.getElementById("id").innerHTML="ID is :" + id;
    document.getElementById("percentage").innerHTML="The Percentage Is:" + percentage;

    if (percentage>=90) {
        document.getElementById("grade").innerHTML="You'r Passed In A+ Grade";
    }
    else if (percentage>=80) {
        document.getElementById("grade").innerHTML="You'r Passed In A Grade";
    }
    else if (percentage>=70) {
        document.getElementById("grade").innerHTML="You'r Passed In B+ Grade";
    }
    else if (percentage>=60) {
        document.getElementById("grade").innerHTML="You'r Passed In B Grade";
    }
    else if (percentage>=50) {
        document.getElementById("grade").innerHTML="You'r Passed In C+ Grade";
    }
    else if (percentage>=40) {
        document.getElementById("grade").innerHTML="You'r Passed In C Grade";
    }
    else if (percentage>=30) {
        document.getElementById("grade").innerHTML="You'r Passed In D+ Grade";
    }
    else{
        document.getElementById("grade").innerHTML="You'r Failed";;

    }
}
