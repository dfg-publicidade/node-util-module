declare class Util {
    static readonly millisecondsToSecondsConv: number;
    static readonly byteToKByteConv: number;
    static readonly kbyteToMByteConv: number;
    static readonly codeLength: number;
    static parsePort(port: any): string;
    static normalizePort(bind: any): string;
    static removeEmptyFields(obj: any): any;
    static delay(ms: number): Promise<void>;
    static delay100ms(): Promise<void>;
}
export default Util;
