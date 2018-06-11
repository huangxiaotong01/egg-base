"use strict";

// had enabled by egg
// exports.static = true;

exports.ejs = {
    enable: true,
    package: "egg-view-ejs"
};

exports.nunjucks = {
    enable: true,
    package: "egg-view-nunjucks"
};

// mysql
exports.mysql = {
    enable: true,
    package: "egg-mysql"
};

// sequelize
exports.sequelize = {
    enable: true,
    package: "egg-sequelize"
};

// mongoDB
// exports.mongoose = {
//     enable: true,
//     package: "egg-mongoose"
// };
