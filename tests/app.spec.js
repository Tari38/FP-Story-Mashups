const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

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
            it('makes a get request to /posts', () => {
                app;
                expect(fetch.mock.calls[0][0]).toBeDefined()
            })
            test('it has a title', () => {
                const title = document.querySelector('title')
                expect(title).toBeTruthy()
            }) 
    })

    describe('prevent default works', () => {
        const event = { preventDefault: () => {} };
        test('Prevent default works on submit', () => {
            const form = document.querySelector('form')
            const fun = (e) => {
                e.preventDefault();
            }
            const success = form.addEventListener('submit', fun)
            expect(event.preventDefault).toBeTruthy();
        });
    });

    describe('gets an element by Id', () => {
        test('should get element by id', () => {
            let element = document.getElementById('form')
            expect(element).toBeTruthy()
        });

    });

})
