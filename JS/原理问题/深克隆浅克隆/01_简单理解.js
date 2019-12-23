    let a = "Google";
    let b = a;
    a = "Next"; //改变a的值不影响b的值

    // console.log("TCL: b", b); //Google
    // console.log(" This: a", a); //Next

    let arr1 = [1, 2, 3, 4];
    let arr2 = arr1;
    arr1[0] = 10; //改变arr1的值影响arr2的值
    // console.log("This: arr1", arr1); // [10, 2, 3, 4]
    // console.log("This: arr2", arr2); // [10, 2, 3, 4]
    /* 
        对于基本数据类型而言，把a的值赋值给b后，a的修改，不会影响到b。
        对于引用数据类型而言，把arr1赋值给arr2后，arr1的修改，会影响到arr2对应的值
        基本数据类型是直接存储在栈内存中的，而引用数据类型，则仅仅是把地址存储在栈内存中,
        真正的数据是存储在堆内存中的，赋值操作时，仅仅把地址进行了赋值。
    */