function Sub_ul1()
{
  var dr2 = document.getElementById("DropMenu2");

  if(dr2.style.display == "none")
  {
    dr2.style.display = "block";
  }
  else {
    dr2.style.display = "none";
  }
}


function Sub_ul2()
{
  var dr2 = document.getElementById("DropMenu3");

  if(dr2.style.display == "none")
  {
    dr2.style.display = "block";
  }
  else {
    dr2.style.display = "none";
  }
}

function Sub_ul3()
{
  var dr2 = document.getElementById("DropMenu4");

  if(dr2.style.display == "none")
  {
    dr2.style.display = "block";
  }
  else {
    dr2.style.display = "none";
  }
}



function showList(v)
 {
   //debugger;
  document.getElementById(v.id);
  v.nextElementSibling.classList.toggle("hide-list");
  //debugger;
}

function Search_k()
{
  debugger;
  // Create variable to search by name id , ul , li ,filter convert all input to LowerCase
  var Search_id = document.getElementById("Search");
  var ul_id = document.getElementById("DropMenu");
  var ul_li = ul_id.getElementsByTagName("li");

  var filter = Search_id.value.toLowerCase();

  // loop on all items inside all li 
  for(var i = 0 ; i < ul_li.length ; i++)
  {
    //link of li = [0] (one element) of ul_li
    var li_a = ul_li[i].getElementsByTagName("a")[0];

    if (li_a.innerHTML.toLowerCase().indexOf(filter) >= 0)
     {
      ul_li[i].style.display = "";
    } 
    else
     {
      ul_li[i].style.display = "none";
    }
  }
  debugger;
}

function Search_l()
{
  //debugger;
  var Search_id = document.getElementById("Search1");
  var div_id = document.getElementById("search-items");
  var div_p = div_id.getElementsByTagName("li");

  var filter = Search_id.value.toLowerCase();

  for(i = 0 ; i <= div_p.length ; i++)
  {
    var p_h3 = div_p[i].getElementsByTagName("h3")[0];

    if(p_h3.innerHTML.toLowerCase().indexOf(filter) >= 0)
    {
      div_p[i].style.display = "";
    }
    else
    {
      div_p[i].style.display = "none";
    }
  }

 // debugger;
}
