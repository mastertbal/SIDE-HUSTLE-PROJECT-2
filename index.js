var menuIcon = document.getElementById("menu");
menuIcon.onclick = 
function()
{
    var myUl = document.getElementById("list-container");
    if(myUl.style.display == "none") 
    {
        myUl.style.display = "block";
        myUl.style.backgroundColor = "white";
        myUl.style.padding = "10px";
    }
    else
    {
        myUl.style.display = "none";
    }
}