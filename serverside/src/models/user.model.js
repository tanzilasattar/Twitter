
var db = require("../models/dbConnection");

const createUser = (email, hash) => {
  return new Promise(async (resolve, reject) => {
    let sql = `INSERT INTO signup (email,password) VALUES ('${email}','${hash}')`;
    await db.query(sql, (err, result) => {
      if (err) {
        reject(err);
      } else {
        console.log('DAta in service',result);
        resolve(result);
      }
    });
  });
};

const loginUser = (email) => {
  console.log(email);
  return new Promise(async (resolve, reject) => {
    let sql = `SELECT * FROM login WHERE Email = "${email}"`;
    await db.query(sql, async(err, result) => {
      if (err) {
        console.log("err");
        reject(err);
      } else {
        console.log(result);
        resolve(result);
      }
    });
  });
};
const getNewsFeed = () => {
  return new Promise(async (resolve, reject) => {
    let sql = "SELECT * FROM tweets";
    await db.query(sql,(err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });

};

const postNewsFeed = () => {
 
return new Promise(async (resolve, reject) => {
  let sql ="select tweets.id, user.email,tweets.text FROM tweets INNER JOIN user ON  user_id='1'"
  await db.query(sql,(err, result) => {
    if (err) {
      reject(err);
    } else {
      resolve(result);
    }
  });
});
}
module.exports = {
  createUser,
  loginUser,
  getNewsFeed,
postNewsFeed
};