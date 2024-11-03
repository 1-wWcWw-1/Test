// 导入模块
import mysql from 'mysql2/promise';

// 创建一个数据库连接
const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '0523886R@wcw',
  database: 'test_1',
});

// 简单查询
try {
  const [results, fields] = await connection.query(
    'SELECT * FROM `user`;'
  );

  console.log(results); // 结果集
  console.log(fields); // 额外的元数据（如果有的话）
} catch (err) {
  console.log(err);
}

// 使用占位符
try {
  const [results] = await connection.query(
    'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
    ['Page', 45]
  );

  console.log(results);
} catch (err) {
  console.log(err);
}