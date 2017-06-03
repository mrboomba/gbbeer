var winston = require('winston');

var logger = new(winston.Logger)({
    levels: { error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5 },
    colors: {
        silly: 'grey',
        debug: 'blue',
        verbose: 'cyan',
        info: 'green',
        warn: 'yellow',
        error: 'red'
    }
});

logger.add(winston.transports.Console, {
    level: 'silly',
    prettyPrint: true,
    colorize: true,
    silent: false,
    timestamp: false
});

module.exports = logger;
