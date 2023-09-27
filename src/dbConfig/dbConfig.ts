import mongoose from "mongoose";


// Connect to MongoDB
export async function connect() {
    try {
        // Connect to MongoDB using Mongoose
        await mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;

        // Listen for connection events
        connection.on('connected', () => {
            console.log('MongoDB Connected successfully!')
        })

        connection.on('error', (err) => {
            console.log('MongoDB connection error. Please make sure MobgiDB is running.' + err);
            process.exit();
        })
        } catch (error) {
            console.log('Something Went Wrong!');
            console.log(error);
        }
}
