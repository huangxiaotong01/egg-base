"use strict";

// 用户信息
module.exports = app => {
    const { STRING, INTEGER } = app.Sequelize;

    const UserInfo = app.model.define(
        "userinfo",
        {
            id: {
                type: INTEGER.UNSIGNED,
                primaryKey: true
            },
            name: {
                type: STRING(20)
            },
            password: STRING(45),
            register_time: STRING(32)
        },
        {
            freezeTableName: true,
            timestamps: false
        }
    );

    return UserInfo;
};
