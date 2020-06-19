import * as mongoose from 'mongoose';

export async function setMongo() {
  const mongodbURI = process.env.NODE_ENV === 'test' ? process.env.MONGODB_TEST_URI : process.env.MONGODB_URI;

  mongoose.Promise = global.Promise;
  mongoose.set('useCreateIndex', true);
  mongoose.set('useNewUrlParser', true);
  mongoose.set('useFindAndModify', false);
  mongoose.set('useUnifiedTopology', true);
  // Connect to MongoDB using Mongoose

  await mongoose.connect(mongodbURI).then(() => console.log('Connected to MongoDB'));
}
