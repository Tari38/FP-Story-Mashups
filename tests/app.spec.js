const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

describe('index.html', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    })
    describe('head', () => {
        test('it has a title', (() => {
            let title = document.querySelector('title');
            expect(title).toBeTruthy();
        }))
        
        test('it has a link', (() => {
            let link = document.querySelector('link');
            expect(link).toBeTruthy();
        }))

    })
    
    describe('main', () => {
        test('it has a button', (() => {
            let button = document.querySelector('button');
            expect(button).toBeTruthy();
        }))
    })


})

// const fs = require('fs');
// const path = require('path');
// const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

// global.fetch = require('jest-fetch-mock');
// let app;
