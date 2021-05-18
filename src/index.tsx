import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import { App } from './App'

createServer({
    routes() {
        this.namespace = 'api';

        this.get('/partys', () => {
            return [
                {
                    id: 1,
                    title: 'Party 1',
                    category: 'Color Fest',
                    createdAt: new Date(),
                }
            ]
        })
    }
})

ReactDOM.render(
    <React.StrictMode> 
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);