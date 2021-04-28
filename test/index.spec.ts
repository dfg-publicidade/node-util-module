import { expect } from 'chai';
import { describe, it } from 'mocha';
import Util from '../src';

/* Tests */
describe('index.ts', (): void => {
    it('1. parsePort', async (): Promise<void> => {
        const pipe: string = Util.parsePort('test');
        // eslint-disable-next-line no-magic-numbers
        const port: string = Util.parsePort(80);

        expect(pipe).to.be.equal('tunnel test');
        expect(port).to.be.equal('port 80');
    });

    it('2. normalizePort', async (): Promise<void> => {
        expect(Util.normalizePort('test')).to.be.equal('test');
        // eslint-disable-next-line no-magic-numbers
        expect(Util.normalizePort(80)).to.be.equal('80');
        expect(Util.normalizePort(-1)).to.be.undefined;
    });

    it('3. removeEmptyFields', async (): Promise<void> => {
        const test: any = {
            id: 1,
            name: 'Test',
            field1: '',
            field2: undefined,
            field3: {
                id: 2,
                field4: '',
                field5: undefined
            },
            field6: [{
                id: 3,
                field7: '',
                field8: undefined
            }]
        };

        expect(Util.removeEmptyFields(undefined)).to.be.deep.eq(undefined);
        expect(Util.removeEmptyFields(test)).to.be.deep.eq({
            id: 1,
            name: 'Test',
            field3: {
                id: 2
            },
            field6: [{
                id: 3
            }]
        });
    });

    it('4. delay', async (): Promise<void> => {
        const delayTime: number = 500;
        const tolerance: number = 10;

        const time1: number = new Date().getTime();
        await Util.delay(delayTime);
        const time2: number = new Date().getTime();

        expect(time2 - time1).to.be.approximately(delayTime, tolerance);
    });

    it('5. delay', async (): Promise<void> => {
        let delayError: any;
        try {
            await Util.delay(undefined);
        }
        catch (err) {
            delayError = err;
        }

        expect(delayError).to.exist;
        expect(delayError.message).to.be.eq('Delay duration must me set.');
    });

    it('6. delay100ms', async (): Promise<void> => {
        const delayTime: number = 100;
        const tolerance: number = 10;

        const time1: number = new Date().getTime();
        await Util.delay100ms();
        const time2: number = new Date().getTime();

        expect(time2 - time1).to.be.approximately(delayTime, tolerance);
    });
});
