const { Sequelize, DataTypes } = require('sequelize')

export const sequelize = new Sequelize('d7h1c3hu4fa8ke', 'zyxrejtagrdmoy', 'c08dff69e57d0ae68c293de18691f594b38ec5098d39caad81890cab4658d39c', {
    host: 'ec2-3-213-66-35.compute-1.amazonaws.com',
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
          require: true, // This will help you. But you will see nwe error
          rejectUnauthorized: false // This line will fix new error
        }
    },
})

export const Contest = sequelize.define('Contest', {
    contestPubkey: {
        type: DataTypes.STRING,
        allowNull: false
    },
    creator: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pythPriceFeed: {
        type: DataTypes.STRING,
        allowNull: false
    },
    endTime: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
    }, {
    // Other model options go here
})