const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

global.fetch = require('jest-fetch-mock');
let app;

describe('api requests', () => {

    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
        app = require('../js/api')
    })

    afterEach(() => {
        fetch.resetMocks();
    })

    describe('get requests', () => {
        describe('getPosts', () => {
            it('makes a get request to /posts', () => {
                // app.renderMsg;
                
                expect(fetch.mock.calls[0][0]).toBeDefined()
            })
        });
    })
})


