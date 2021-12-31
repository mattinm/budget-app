import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const PORT = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

const swaggerDefinition = {
    info: {
        title: 'Budget App API',
        version: '0.0.1',
        description: 'A simple web-based budgeting app API',
    },
    host: `localhost:${PORT}`,
    basePath: '/'
};

const options = {
    swaggerDefinition,
    apis: ['./routes/route.*.ts']
};

const swaggerSpec = swaggerJsdoc(options);

app.get('/api-docs.json', (_: Request, res: Response) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});

app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerSpec));

import routes from './routes/routes';
routes.setup(app);

const server = app.listen(PORT, () => {
    console.log(`Listening at ${PORT}.`);
});

module.exports = { app, server };