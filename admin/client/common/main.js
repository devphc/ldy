$(function () {
    $("#popup-close").click(function () {

    });
})
disablePopup = function () {
    $(".bg").hide();
}

format = function (str) {
    if (str) {
        var d = new Date(str);

        return d.getFullYear() + "年" + (d.getMonth() + 1) + "月" + d.getDate() + "日";
    } else {
        return "-/-/-"
    }
}
format2 = function (str) {
    if (str) {
        var d = new Date(str);

        return pad(d.getHours(), 2) + ":" + pad(d.getMinutes(), 2);
    } else {
        return "--:--"
    }
}
pad = function (num, n) {
    var len = num.toString().length;
    while (len < n) {
        num = "0" + num;
        len++;
    }
    return num;
}
