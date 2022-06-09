const {init} = require('../js/index');
const fs = require('fs');
const path = require('path');
// const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

global.fetch = require('jest-fetch-mock');
let app;

describe('api requests', () => {
    beforeEach(() => {
        app = require('../js/index')
    })

    afterEach(() => {
        fetch.resetMocks();
    })  

    describe('giphy', () => {
        test('should return 200', () => {
                expect(fetch.mock.calls[0][0]).toBeDefined()
        });
    })
})

