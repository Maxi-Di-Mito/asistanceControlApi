/**
 * Created by maximiliano.dimito on 4/3/2017.
 */
/**
 * Created by maximiliano.dimito on 3/23/2017.
 */
import winston from 'winston';

const logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({
            name: 'info-file',
            filename: './logs/filelog-info.log',
            level: 'info'
        }),
        new (winston.transports.File)({
            name: 'error-file',
            filename: './logs/filelog-error.log',
            level: 'error'
        })
    ]
});



export default (moduleName) => {
    return {
        info: (text) => logger.info(`${new Date()} - ${moduleName} - ${text}`),
        error: (text) => logger.error(`${new Date()} - ${moduleName} - ${text}`)
    }
}