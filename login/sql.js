/**
 * Created by dllo on 17/4/25.
 */
var mysql = require('mysql');
//options 创建连接的参数
var options = {
    user: 'root',//连接数据库的用户
    password: '123456',//用户的密码
    host: 'localhost',//连接数据库的主机名/ip地址
    port: 3306,//端口号 默认为:3306
    database: 'HTML5',//需要打开的数据库
    charset: 'utf8'//打开数据库的编码格式
};
//1.创建连接器
var connection = mysql.createConnection(options);
//2.连接器建立连接
connection.connect(function (error) {
    if (error) {
        console.log('连接失败');
        console.error(error);
    } else {
        console.log('连接成功');

    }
});
//3.查询语句
// var selectSOL = 'select * from h161217';
// //一般,查询为复数
// connection.query(selectSOL, function (error, results) {
//     if (error) {
//         console.log('查询失败');
//         console.error(error);
//     } else {
//         console.log('查询成功');
//         console.log(results);
//     }
// });
//4.插入
//SQL语句的插入写法
// var insertSOL='insert into h161217 (name,age)values (\'曲儿\',30)';
//集合的插入方式 set?
var insertSOL1='insert into h161217 set?';
var stu={
    username:'小丁',
    password:'123'

};
connection.query(insertSOL1,stu,function (error) {
    handleError(error,'插入');
});
// connection.query(insertSOL,function (error) {
//     handleError(error,'插入');
// });

function handleError(error,operation,results) {
    if(error){
        console.log(operation+'失败');
        console.error(error);
    } else{
        console.log(operation+'成功');
        if(results){
            console.log(results);
        }
    }
}
