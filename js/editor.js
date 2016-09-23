
var id_toolbar = document.getElementById("tb");//工具栏id

var id_textarea = document.getElementById("text");//文本框id


//var boldid = document.getElementById("bold");//加粗按钮id

var flag_canuse = 1;//编辑框是否可用的标志

/*右上角按钮功能实现*/
document.getElementById("hideshow").onclick = function () {
    if (flag_canuse == 1) {
        document.getElementById("hideshow").innerHTML = "<i class=\"fi fi-lock\"></i>存储阅读";
        id_toolbar.style.visibility = "visible";//编辑工具条可见
        id_textarea.contentEditable = true;//编辑框可用
        if (id_textarea.innerText == "") {
            var time = Date().toString().replace("GMT+0800 (中国标准时间)", "");
            id_textarea.innerHTML = time;
        }
        flag_canuse = 0;
    }
    else {
        document.getElementById("hideshow").innerHTML = "<i class=\"fi fi-unlock\"></i>修改编辑";
        id_toolbar.style.visibility = "hidden";//编辑工具条隐藏
        id_textarea.contentEditable = false;//编辑框不可用
        flag_canuse = 1;
    }
}




/*选中文本加粗*/
document.getElementById("bold").onclick = function () {
    document.execCommand("Bold", true, "null");
}

/*选中文本斜体*/
document.getElementById("italic").onclick = function () {
    document.execCommand("Italic", false, "null");
}

document.getElementById("underline").onclick = function () {
    document.execCommand("Underline", false, "null");
}

document.getElementById("strikethrough").onclick = function () {
    document.execCommand("StrikeThrough", false, "null");
}

document.getElementById("textcolors").onclick = function () {
    document.execCommand("ForeColor", "false", "#ff0000");
}

document.getElementById("bgcolor").onclick = function () {
    document.execCommand("BackColor", "false", "#555555");
}

document.getElementById("ulist").onclick = function () {
    document.execCommand("InsertUnorderedList");
}

document.getElementById("olist").onclick = function () {
    document.execCommand("InsertOrderedList");
}

document.getElementById("left").onclick = function () {
    document.execCommand("JustifyLeft");
}

document.getElementById("justify").onclick = function () {
    document.execCommand("JustifyFull");
}

document.getElementById("right").onclick = function () {
    document.execCommand("JustifyRight");
}

document.getElementById("center").onclick = function () {
    document.execCommand("JustifyCenter");
}

document.getElementById("supers").onclick = function () {
    document.execCommand("Superscript");
}

document.getElementById("subs").onclick = function () {
    document.execCommand("Subscript");
}