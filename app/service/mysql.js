"use strict";

const Service = require("egg").Service;

class MysqlService extends Service {
    /*
    * 测试mysql
    */
    async mysqlTest() {
        const sql = "select * from userinfo";
        const rs = await this.app.mysql.query(sql);
        return rs;
    }

    /**
     * 使用model
     */
    async modelTest() {
        const ctx = this.ctx;
        const { UserInfo } = ctx.model;
        const rs = await UserInfo.findAll({
            where: {
                id: 1
            }
        });
        return rs;
    }

    /**
     * sqquelize增刪改查語法
     * const Op = Sequelize.Op;

    Post.findAll({
        where: {
            authorId: 2
        }
    });
    // SELECT * FROM post WHERE authorId = 2

    Post.findAll({
        where: {
            authorId: 12,
            status: 'active'
        }
    });
    // SELECT * FROM post WHERE authorId = 12 AND status = 'active';

    Post.findAll({
        where: {
            [Op.or]: [{authorId: 12}, {authorId: 13}]
        }
    });
    // SELECT * FROM post WHERE authorId = 12 OR authorId = 13;

    Post.findAll({
        where: {
            authorId: {
            [Op.or]: [12, 13]
            }
        }
    });
    // SELECT * FROM post WHERE authorId = 12 OR authorId = 13;

    Post.destroy({
        where: {
            status: 'inactive'
        }
    });
    // DELETE FROM post WHERE status = 'inactive';

    Post.update({
        updatedAt: null,
        }, {
        where: {
            deletedAt: {
            [Op.ne]: null
            }
        }
    });
    // UPDATE post SET updatedAt = null WHERE deletedAt NOT NULL;

    Post.findAll({
        where: sequelize.where(sequelize.fn('char_length', sequelize.col('status')), 6)
        });
    // SELECT * FROM post WHERE char_length(status) = 6;
    *
    */
}

module.exports = MysqlService;
