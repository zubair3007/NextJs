import mongoose from 'mongoose';

export async function connect() {

    try{
        mongoose.connect(process.env.mongo_url!);
        const connection = mongoose.connection;

        connection.on('connected', () =>{
            console.log('database is connected');
        
        });

        connection.on('error', (err) =>{
            console.log('Mongodb connection error, please make sure mongo db is running.' + err);
            process.exit();

        })

    }

    catch(error)
    {
        console.log('something went wrong');
        console.log(error);
    }
}