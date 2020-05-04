module.exports = (sequelize, DataTypes) => {
     return sequelize.define(
          "post",
          {
               content: {
                    type: DataTypes.STRING(300),
                    allowNull: true,
               },
               img: {
                    type: DataTypes.STRING(200),
                    allowNull: false,
               },
          },
          { timestamp: true, paranoid: true }
     );
};
