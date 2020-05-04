module.exports = (sequelize, DataTypes) => {
     return sequelize.define(
          "hashtag",
          {
               title: {
                    type: DataTypes.STRING(15),
                    allowNull: false,
                    unique: true,
               },
          },
          { timestamp: true, paranoid: true }
     );
};
