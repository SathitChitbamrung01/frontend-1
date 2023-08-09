const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_users'
  });

  export default function handler(req, res) {
    const { id } = req.query
  connection.query(
    'SELECT * FROM `tbl_users` WHERE id = ?', [id],
    function(err, results,) {
      console.log(results); 
      res.status(200).json({users:results});
    }
  );
}


