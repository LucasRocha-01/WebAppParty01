import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App'

createServer({
    models: {
        party: Model,
    },

    seeds(server) {
        server.db.loadData({
            parties: [
                {
                    id: 1,
                    title: 'color party',
                    data: new Date('2021-06-15 21:00:00'),
                    description: 'lorem ipsum',
                    category: 'Paint',
                    createdAt: new Date('2021-03-12 09:00:00'),
                },
                {
                    id: 2,
                    title: 'Harry poarty',
                    data: new Date('2021-07-11 21:00:00'),
                    description: 'lorem ipsum',
                    category: 'Fantasy',
                    createdAt: new Date('2021-05-12 09:00:00'),
                },
                {
                    id: 3,
                    title: 'Harry poarty',
                    data: new Date('2021-07-11 21:00:00'),
                    description: 'lorem ipsum',
                    category: 'Fantasy',
                    createdAt: new Date('2021-05-12 09:00:00'),
                }
            ],
        })
    },

    routes() {
        this.namespace = 'api';

        this.get('/parties', () => {
            return this.schema.all('party');
        })

        this.post('/parties', (schema, request) => {
            const data = JSON.parse(request.requestBody)

            return schema.create('party', data);
        })
    }
})

ReactDOM.render(
    <React.StrictMode> 
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);