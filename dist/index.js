"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Module */
class Util {
    static parsePort(port) {
        return typeof port === 'string'
            ? `tunnel ${port}`
            : `port ${port}`;
    }
    static normalizePort(bind) {
        const port = parseInt(bind, 10);
        if (isNaN(port)) {
            return bind;
        }
        if (port >= 0) {
            return port.toString();
        }
        return undefined;
    }
    static removeEmptyFields(obj) {
        if (!obj) {
            obj = undefined;
        }
        else if (Array.isArray(obj)) {
            obj = obj.map((item) => this.removeEmptyFields(item));
        }
        else if ((obj instanceof Object)) {
            obj = Object.assign({}, obj);
            let key;
            for (key of Object.keys(obj)) {
                if (!obj[key]) {
                    delete obj[key];
                }
                else {
                    obj[key] = this.removeEmptyFields(obj[key]);
                }
            }
        }
        return obj;
    }
    static async delay(ms) {
        if (!ms) {
            throw new Error('Delay duration must me set.');
        }
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    }
    static async delay100ms() {
        const ms = 100;
        return this.delay(ms);
    }
}
// eslint-disable-next-line no-magic-numbers
Util.millisecondsToSecondsConv = 1000;
// eslint-disable-next-line no-magic-numbers
Util.byteToKByteConv = 1024;
// eslint-disable-next-line no-magic-numbers
Util.kbyteToMByteConv = 1024;
// eslint-disable-next-line no-magic-numbers
Util.codeLength = 8;
exports.default = Util;
