

var fs = require("fs");//文件模块

var dir = "F:/CNTV";

/*
var stat = null;
var isNull = 0;//判断目录是否不存在

try {
    stat = fs.statSync(dir);
} catch (e) {
    isNull = 1;
}

var data_dir = [];//目录信息数组
var data_doc = [];//文件信息数组

var id = 1;
var pid = 0;

function walk(dir, pid) {
    var dirArray = fs.readdirSync(dir);
    for (var i = 0; i < dirArray.length; i++) {
        var tmp_dir = dir + '/' + dirArray[i];
        var tmp_stat = fs.statSync(tmp_dir);
        if (tmp_stat.isDirectory()) {
            data_dir.push([id, pid, dirArray[i], 0]);
            id++;
            walk(tmp_dir, pid + 1);
        }
        else {
            data_doc.push([-1, pid, dirArray[i], 1]);
        }
    }
}

if (stat.isDirectory()) {
    walk(dir, pid);
}

//将目录信息和文件信息分别存储到文件中
fs.writeFileSync("dirdatas.js", 'var dirdatas = ' + JSON.stringify(data_dir));
fs.writeFileSync("docdatas.js", 'var docdatas = ' + JSON.stringify(data_doc));

*/



class FileTree {

    constructor(dir) {

        var stat = null;

        this.tree = {
            name: "我的笔记",
            type: 'dir',
            isroot: true,
            children: []
        }

        try {

            stat = fs.statSync(dir);

        } catch (e) {

            console.log(e);

        }

        if (stat && stat.isDirectory()) {

            this.walk(dir, this.tree);

        }
        /*else if (stat && stat.isFile()) {

            this.tree = {
                name: dir.split(/[\/|\\]/).pop(),
                type: 'file',
                isroot: false
            }
        }*/

    }


    walk(dir, tree) {

        const items = fs.readdirSync(dir);

        var dirArray = fs.readdirSync(dir);

        var tmpf = [];

        for (var i = 0; i < dirArray.length; i++) {

            var tmp_dir = dir + '/' + dirArray[i];

            var tmp_stat = fs.statSync(tmp_dir);

            if (tmp_stat.isDirectory()) {

                var subtree = {
                    name: dirArray[i],
                    type: 'dir',
                    isroot: false,
                    children: []
                }

                tree.children.push(subtree);

                this.walk(tmp_dir, subtree);

            }

            else {

                //tree.children.
                tmpf.push({
                    name: dirArray[i],
                    type: 'file',
                    isroot: false
                })

            }

        }
        for (var i = 0; i < tmpf.length; i++) {
            tree.children.push(tmpf[i]);
        }
    }

    save() {

        fs.writeFile('datas.js', "var treedatas=" + JSON.stringify(this.tree), (err) => {

            if (err) {
                console.error('Error');
            } else {
                console.log('Success');
            }
        })
    }
}

const fileTree = new FileTree(dir);

fileTree.save();