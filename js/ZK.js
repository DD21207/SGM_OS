$(function() {
    var width = $(".item").css('width');
    $(".item").css('height', width);
    var height = Math.max(document.documentElement.clientHeight, document.body.offsetHeight);
    document.getElementById('container').style.height = height - 80 + 'px';
    // var line-height = $(".title_box").css('height');
    // $(".title_box").css('line-height',line-height)
   var type = GetQueryString("type");
    switch (type) {
        case "1":
            $("#centerFrame").attr('src','PPT/ZK_container1.html');
            break;
        case "2":
            $("#centerFrame").attr('src','PPT/ZK_container2.html');
            break;
        case "3":
            $("#centerFrame").attr('src','PPT/ZK_container3.html');
            break;
        case "4":
            $("#centerFrame").attr('src','PPT/ZK_container4.html');
            break;
    }


})

window.onresize = function() {
    var width = $(".item").css('width');
    $(".item").css('height', width);
    var height = Math.max(document.documentElement.clientHeight, document.body.offsetHeight);
    document.getElementById('container').style.height = height - 80 + 'px';
}

function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

