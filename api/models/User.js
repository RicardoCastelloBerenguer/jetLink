import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const User = sequelize.define('User', {
    id : {
        primaryKey: true,
        type:DataTypes.INTEGER,
        autoIncrement: true,
        allowNull:false,
    },
    email : {
        type:DataTypes.STRING,
        allowNull:false,
    },
    password : {
        type: DataTypes.STRING(2048),
        allowNull:false,
    },
},
{
    timestamps: true,
    defaultScope: {
        // attributes: { exclude: ['password'] },
    },
})


User.associate = models => {
    User.hasMany(models.Url, {
        foreignKey: 'userId',
        onDelete: "cascade"
    });
}

export default User;