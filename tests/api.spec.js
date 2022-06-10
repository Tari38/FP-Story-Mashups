const res = require('express/lib/response');
const fs = require('fs');
const { ServerResponse } = require('http');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

global.fetch = require('jest-fetch-mock');

describe('apihelpers', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
        app = require('../js/index')
    })

    afterEach(() => {
        fetch.resetMocks();
    })

    let app;
    test('should fetch giphy api', () => {
        app;
        fetch.mockResponse(JSON.stringify({ access_token: '12345' }))
        
    });

    test('should fetch giphy api', () => {
        app;
        fetch.mockResponse(JSON.stringify({ access_token: '12345' }))
    });

    it('rejects with an Aborted! Error once then mocks with empty response', async () => {
        fetch.mockAbortOnce()
        await expect(fetch('https://api.giphy.com/v1/gifs/search?api_key=FlLcKnBPn6Wpd1tyqGXPsXj8WEbOhCYQ&q=cat&limit=1&offset=0&rating=g&lang=en')).rejects.toThrow('The operation was aborted.')
        await expect(res).toBeInstanceOf(ServerResponse)
      })
})

describe('Index.js', () => {

    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
        app = require('../js/index')
    })

    afterEach(() => {
        fetch.resetMocks();
    })

    test('should work', () => {
        app;
        
    });   
});


