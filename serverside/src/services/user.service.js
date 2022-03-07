const bcrypt = require("bcrypt");
const { schema } = require("../auth/validation");
const userModel = require("../models/user.model");

const createUser = async (userBody) => {
// console.log(email,hash);
  await schema.validateAsync(userBody);
  let email = userBody.email;
  let pass = userBody.password;
  let salt =await bcrypt.genSalt(10);
  let hash = await bcrypt.hash(pass, salt);
  return new Promise(async (resolve, reject) => {
    await userModel
      .createUser(email, hash)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const loginUser = async (userBody) => {
 
  let email = userBody.email;
  let pass = userBody.password;
  await schema.validateAsync(userBody);
  return new Promise(async (resolve, reject) => {
    console.log(email);
    
    await userModel.loginUser(email)
      .then(async (data) => {
        // resolve(data);
        console.log("Data in server", data);
        if (email === data[0].email) {
          const validPass = await bcrypt.compare(pass, data[0].password);
          if (validPass) {
            console.log("Valid Email and Pass");
            resolve(200);
          } else {
            console.log("Wrong pass");
            resolve(404);
          }
        } else {
          console.log("User Not Found");
          resolve(500);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const getNewsFeed = () => {
  console.log('services');
  return new Promise((resolve,reject) => {
     userModel.getNewsFeed().then((data)=>{
        resolve(data);
    }).catch((err) => {
        reject(err);
    })
  }); 
}
const postNewsFeed = (userBody) => {
  let user_id = userBody.email;;
      let  text = userBody.text;
  console.log('services');

  return new Promise((resolve,reject) => {
     userModel.postNewsFeed( user_id).then((data)=>{
        resolve(data);
    }).catch((err) => {
        reject(err);
    })
  }); 
}

module.exports = {
  createUser,
  loginUser,
  getNewsFeed,
  postNewsFeed
};