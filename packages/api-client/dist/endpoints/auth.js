"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAuthEndpoints = createAuthEndpoints;
function createAuthEndpoints(client) {
    return {
        login: (body) => client.post('/auth/login', body),
        register: (body) => client.post('/auth/register', body),
        me: () => client.get('/auth/me'),
    };
}
