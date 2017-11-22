$(function() {
    var height = Math.max(document.documentElement.clientHeight, document.body.offsetHeight);
    document.getElementById('container').style.height = height - 80 + 'px';
})

window.onresize = function() {
    var height = Math.max(document.documentElement.clientHeight, document.body.offsetHeight);
    document.getElementById('container').style.height = height - 80 + 'px';
}

function DB(type){
      switch (type) {
        case "postbuy":
            $("#centerFrame").attr('src','https://www.starcompass.net/bi/Viewer?proc=1&action=viewer&hback=true&db=DEMO!2f!SGM!2f!Postbuy.db');
            break;
        case "competitor":
            $("#centerFrame").attr('src','https://www.starcompass.net/bi/Viewer?proc=1&action=viewer&hback=true&db=DEMO!2f!SGM!2f!Competitor%20report.db');
            break;
    }
}