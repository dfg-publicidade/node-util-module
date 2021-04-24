/* Module */
class Util {
    // eslint-disable-next-line no-magic-numbers
    public static readonly millisecondsToSecondsConv: number = 1000;
    // eslint-disable-next-line no-magic-numbers
    public static readonly byteToKByteConv: number = 1024;
    // eslint-disable-next-line no-magic-numbers
    public static readonly kbyteToMByteConv: number = 1024;
    // eslint-disable-next-line no-magic-numbers
    public static readonly codeLength: number = 8;

    public static parsePort(port: any): string {
        return typeof port === 'string'
            ? `tunnel ${port}`
            : `port ${port}`;
    }

    public static normalizePort(bind: any): string {
        const port: number = parseInt(bind, 10);

        if (isNaN(port)) {
            return bind;
        }

        if (port >= 0) {
            return port.toString();
        }

        return undefined;
    }

    public static removeEmptyFields(obj: any): any {
        if (!obj) {
            obj = undefined;
        }
        else if (Array.isArray(obj)) {
            obj = obj.map((item: any): any => this.removeEmptyFields(item));
        }
        else if ((obj instanceof Object)) {
            obj = { ...obj };

            let key: string;
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

    public static async delay(ms: number): Promise<void> {
        if (!ms) {
            throw new Error('Delay duration must me set.')
        }

        return new Promise<void>((
            resolve: () => void
        ): void => {
            setTimeout(resolve, ms);
        });
    }

    public static async delay100ms(): Promise<void> {
        const ms: number = 100;
        return this.delay(ms);
    }
}

export default Util;
