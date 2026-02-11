const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI_CLOUD, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connect Successfully!!!');
  } catch (error) {
    console.log('Connect Error!!!', error);
  }
}

module.exports = { connect };
