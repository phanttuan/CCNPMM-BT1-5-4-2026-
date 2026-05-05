    const mongoose = require('mongoose');

    // ----- MySQL (Sequelize) -----
    // const { Sequelize } = require('sequelize'); // ES5 module
    //
    // // Option 3: Passing parameters separately (other dialects)
    // const sequelize = new Sequelize('node_fulltask', 'root', '123456', {
    //     host: 'localhost',
    //     dialect: 'mysql',
    //     logging: false
    // });

    let connectDB = async () => {
        try {
            // ----- MySQL (Sequelize) -----
            // await sequelize.authenticate();
            // console.log('Connection has been established successfully.');

            // ----- MongoDB (Atlas) -----
            await mongoose.connect(process.env.MONGODB_URI);
            console.log('MongoDB connection has been established successfully.');

            const collections = await mongoose.connection.db.listCollections({ name: 'users' }).toArray();
            if (collections.length === 0) {
                await mongoose.connection.db.createCollection('users');
                console.log('MongoDB collection "users" created.');
            }
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    };

    module.exports = connectDB;