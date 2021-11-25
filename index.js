var menuIcon = document.getElementById("menu");
menuIcon.onclick = 
function()
{
    var myUl = document.getElementById("list-container");
    if(myUl.style.display == "none") 
    {
        myUl.style.backgroundColor = "white";
        myUl.style.padding = "10px";
        myUl.style.display = "block";
        myUl.style.zIndex = "1";
    }
    else
    {
        myUl.style.display = "none";
    }
}