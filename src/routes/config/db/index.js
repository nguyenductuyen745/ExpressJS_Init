const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect(
      'mongodb+srv://nguyenductuyen745_db_user:epsThPE7WcQHOz1F@express-course-db.xkop1is.mongodb.net/',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    );
    console.log('Connect Successfully!!!');
  } catch (error) {
    console.log('Connect Error!!!', error);
  }
}

module.exports = { connect };
