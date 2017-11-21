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
            $("#centerFrame").attr('src','PPT/ZK_container1.html');
            break;
        case "competitor":
            $("#centerFrame").attr('src','PPT/ZK_container2.html');
            break;
    }
}