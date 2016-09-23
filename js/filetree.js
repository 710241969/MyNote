var icon_open = "<i class='fi fi-folderopen'></i>";//文件夹打开图标
var icon_close = "<i class='fi fi-folderclose'></i>";//文件夹关闭图标
var icon_file = "<i class='fi fi-file'></i>";//文件图标
var icon_rightarray = "<i class='fi fi-rightarray'></i>";
var icon_downarray = "<i class='fi fi-downarray'></i>";


var array = [];//结点数组，存放所有结点

//树结点对象
function treeNode(item) {

    // this.id = id;//int 每个节点都有唯一ID，增加节点时需要手工定义一个ID。 

    // this.pid = pid;//int 父节点ID，根节点的父节点是-1。

    this.name = item.name;//String 节点名称（显示名字）

    this.type = item.type;//类型，0为文件夹，1为文件

    this.isroot = item.isroot;

    this.dl = document.createElement('dl');//结点的dl元素

    this.dt = this.dl.appendChild(document.createElement('dt'));//结点的dt元素

    this.dd = null;//结点的dd元素

    this.initProperty();//初始化该结点的元素属性

    //if (id != 0) {
    // if (this.type === "file") {
    //     this.dd = null;//.style.display = "none";
    // }
    // this.addNode();
    // }

}
//成员函数，初始化结点的元素属性
treeNode.prototype.initProperty = function () {

    //为结点元素设置图像    
    if (this.type === "dir") {

        this.dd = this.dl.appendChild(document.createElement('dd'));

        if (this.isroot == true) {
            this.dt.innerHTML = icon_downarray + icon_open + this.name;

            this.dd.style.display = "";
        }
        else {
            this.dt.innerHTML = icon_rightarray + icon_close + this.name;

            this.dd.style.display = "none";
        }
    }
    else {
        this.dt.innerHTML = icon_file + this.name;
    }

    var host = this;
    //为结点dt元素添加点击事件
    this.dt.onclick = function () {
        if (host.type === "dir") {
            if (host.dd.style.display == "none") {
                host.dt.innerHTML = icon_downarray + icon_open + host.name;
                host.dd.style.display = "";
            }
            else {
                host.dd.style.display = "none";
                host.dt.innerHTML = icon_rightarray + icon_close + host.name;
            }
        }
    }
}
//成员函数，将创建的结点插入树中
/*treeNode.prototype.addNode = function (nodeitem) {
    //array[this.pid].
    this.dd.appendChild(nodeitem.dl);
}*/
treeNode.prototype.walktree = function (td) {

    for (var i = 0; i < td.length; i++) {

        var node = new treeNode(td[i]);

        this.dd.appendChild(node.dl);

        if (td[i].type === 'dir') {

            node.walktree(td[i].children);
        }
    }
}


/*树对象*/
function Tree(id_div, id_pdiv, a_Node) {

    this.initDIV(id_div, id_pdiv);//函数，创建id为"tree"的div元素

    this.root;//树的根节点

    this.initRoot(treedatas, id_div);//函数，初始化树的根节点

};
//创建文件树div元素
Tree.prototype.initDIV = function (id_div, id_pdiv) {

    var div_tree = document.createElement("div");//创建div元素

    var id_tree = div_tree.setAttribute("id", id_div);//给创建的该div元素添加id属性，并将该属性设置为传入id_div的变量

    document.getElementById(id_pdiv).appendChild(div_tree);//给页面中id为"file"的元素插入创建的div元素

}
//初始化树的根节点并插入树中
Tree.prototype.initRoot = function (treedatas, id_div) {

    this.root = new treeNode(treedatas);

    //array.push(this.root);

    this.root.walktree(treedatas.children);

    document.getElementById(id_div).appendChild(this.root.dl);
}



//创建树对象
var fileTree = new Tree("tree", "file");




/*
for (var i = 0; i < dirdatas.length; i++) {
    array.push(new treeNode(dirdatas[i][0], dirdatas[i][1], dirdatas[i][2], dirdatas[i][3]));
}
for (var i = 0; i < docdatas.length; i++) {
    array.push(new treeNode(docdatas[i][0], docdatas[i][1], docdatas[i][2], docdatas[i][3]));
}

array.push(new treeNode(1, 0, "腾", 0));
array.push(new treeNode(2, 1, "腾讯", 0));
array.push(new treeNode(3, 1, "腾讯网", 1));
array.push(new treeNode(4, 2, "腾讯网络", 0));
array.push(new treeNode(5, 2, "腾讯网络有", 1));
array.push(new treeNode(6, 4, "腾讯网络有限", 1));
array.push(new treeNode(7, 0, "腾讯网络有限公", 0));
array.push(new treeNode(0, "腾讯网络有限公司"));*/