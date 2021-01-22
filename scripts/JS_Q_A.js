function Write_QUestion()
{
    //debugger;
    //var div_post = document.createElement("div");
    var post = document.getElementById("input_Q_A").value;
    
    var patt1 = /@/i;
    var patt2 = /.com/i;
    var i = 1;
    while(i<=100)
    {
         if(post.match(patt1) && post.match(patt2))
            {
                var div_post = document.getElementById("Q_A1");
                div_post.innerHTML = post;
                post.classList("class_ADD");
                document.body.appendChild(div_post);
                break;
            }
        else
        {
            alert("Please Write Email");
            break;
        }
        
        i++;
    }
    ///debugger;
}
