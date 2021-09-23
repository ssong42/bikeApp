const Hapi = require('@hapi/hapi');
const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});

// Get all parts
server.route({
    method: 'GET',
    path: '/parts',
    handler: (req, h) => {
        return 'Return all parts';
    }
});

// Get all bicycles
server.route({
    method: 'GET',
    path: '/bicycles',
    handler: (req, h) => {
        return 'Return all bicycles';
    }
});

// Update the details of a bicycle
server.route({
    method: 'PUT',
    path: '/bicycles/{id}',
    handler: (req, h) => {
        return 'Update a single bicycle';
    }
});

server.start();
console.log('Server running on %s', server.info.uri);