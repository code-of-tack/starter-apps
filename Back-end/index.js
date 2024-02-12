import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
dotenv.config()

//Schema
const schemaData = mongoose.Schema({
  name: {
      type: String,
      required: true,
  },
  email: {
      type: String,
      required: true,
      unique: true,
  },
  password: {
      type: String,
      required: true,
  },
  createdAt: {
      type: Date,
      default: Date.now,
    },
});
  

const userModel = mongoose.model("user", schemaData)

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

const SampleModel = mongoose.model('Sample', { message: String });

app.get('/api/status', async (req, res) => {
  try {
    const sample = new SampleModel({ message: "/starter-application route accessed" });
    await sample.save();
    res.send('Data saved to MongoDB');
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});

// Close MongoDB connection when the Node.js application exits
process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('MongoDB connection closed');
  process.exit(0);
});

