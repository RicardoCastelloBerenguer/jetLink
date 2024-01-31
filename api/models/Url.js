import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Url = sequelize.define('Url', {
    id : {
        primaryKey: true,
        type:DataTypes.INTEGER,
        autoIncrement: true,
        allowNull:false,
    },
    urlId : {
        type:DataTypes.STRING,
        allowNull:false,
    },
    origUrl : {
        type: DataTypes.STRING(2048),
        allowNull:false,
    },
    shortUrl : {
        type:DataTypes.STRING,
        allowNull:false,
    },
    clicks : {
        type:DataTypes.INTEGER,
        defaultValue: 0,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
},
{
    timestamps: true,
})

Url.associate = models => {
    Url.belongsTo(models.User, {
        foreignKey: {
            field: 'userId', 
            allowNull: false,
        }
    });
}

export default Url;