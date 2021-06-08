import React from 'react';
import ReactDOM from 'react-dom';
// import { createServer, Model } from 'miragejs';
import { App } from './App'

// createServer({
//     models: {
//         party: Model,
//     },

//     seeds(server) {
//         server.db.loadData({
//             parties: [
//                 {
//                     id: 1,
//                     title: 'color party',
//                     date: new Date(20210615),
//                     description: 'lorem ipsum',
//                     category: 'Paint',
//                     createdAt: new Date('2021-03-12'),
//                 },
//                 {
//                     id: 2,
//                     title: 'harry party',
//                     date: new Date(20210801),
//                     description: 'blablabal',
//                     category: 'fantasy',
//                     createdAt: new Date('2021-03-12'),
//                 }
//             ]
//         })
//     },

//     routes() {
//         this.namespace = 'api';

//         this.get('/parties', () => {
//             return this.schema.all('party');
//         })

//         this.post('/parties', (schema, request) => {
//             const data = JSON.parse(request.requestBody)

//             return schema.create('party', data);
//         })
//     }
// })

ReactDOM.render(
    <React.StrictMode> 
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);