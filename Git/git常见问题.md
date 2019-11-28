1. 如何删除本地库
    > rm -rf .git
    > 就是删除本地的隐藏的.git文件夹
2. 删除远程分支
    > 在Git v1.7.0 之后，可以使用这种语法删除远程分支：
    > $ git push origin --delete "branchName"