for (let i = 0; i < 10; i++) {
    //let声明的变量只在代码块内有效
    console.log(i)
}
console.log(i);//报错
/**
 * 不存在变量提升
 * var会出现变量提升现象，即在变量声明之前使用，此时会导致undefined，let改变语法行为声明的变量必须在声明之后去使用否则报错
 * */
