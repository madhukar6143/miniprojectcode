 function dateTime()
{  
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(); 
    return date+'T'+time;
}

function dateTimeEnd()
{  
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+2)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(); 
    return date+'T'+time;
}



module.exports={dateTime,dateTimeEnd};

