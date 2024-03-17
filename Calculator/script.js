function get_val(data){
    document.getElementById('screen').value+=""+data;
}

function All_Clr(){
    document.getElementById('screen').value="";
}

function Ans_Is()
{
    let elem = document.getElementById('screen').value;
    let ans = eval(elem);
    document.getElementById('screen').value=ans;
}

function DEL(){
    let temp = document.getElementById('screen');
    temp.value = temp.value.slice(0,-1);

}