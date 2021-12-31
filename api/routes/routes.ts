import { Express } from 'express';

const routes = [
    'transactions',
];

const setup = (app: Express) => {
    routes.forEach((route) => {       
        const routeSetup = require(`./route.${route}`);
        routeSetup.default.setup(app);
    });
};

export default { setup };