global.fetch = require('jest-fetch-mock');
let app;

describe('app', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
        app = require('../js/api')
    })

    afterEach(() => {
        fetch.resetMocks();
    })

    describe('requests', () => {
        describe('getPosts', () => {
            it('makes a get request to /posts', () => {
                app.getPosts();
                
                expect(fetch.mock.calls[0][0]).toBeDefined()
            })
        });
    })
})
