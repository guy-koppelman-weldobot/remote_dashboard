const config = {};

    config.common = {};

        config.ROOT_FOLDER                  =   '/';
        config.SERVER_FOLDER                =   'server';
        config.CLIENT_FOLDER                =   'client';


        config.common.CC_PORT               =    3000;
        config.common.CCW_PORT              =    3001;
        config.common.HOST                  =    'localhost';
        config.common.CC_SOCKET_PORT        = 3000;
        config.common.CCW_SOCKET_PORT       = 3001;


        //config.default_stuff =  ['red','green','blue','apple','yellow','orange','politics'];
        //config.web.port = process.env.WEB_PORT || 9980;

module.exports = config;