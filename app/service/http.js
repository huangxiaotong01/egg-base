"use strict";

const Service = require("egg").Service;

class HttpService extends Service {
    async httpClient() {
        const ctx = this.ctx;
        const result = await ctx.curl(
            "http://rpc-console-dev.dz11.com/rpc_config/auth/fetch?group_id=10000",
            {
                method: "GET",
                dataType: "json"
            }
        );
        return result;
    }
}

module.exports = HttpService;
