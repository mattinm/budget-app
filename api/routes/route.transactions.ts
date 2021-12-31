
import { Express } from 'express';

const setup = (app: Express) => {
    /**
     * @openapi
     * definitions:
     *   Transaction:
     *     required:
     *       - date
     *       - amount
     *     properties:
     *       date:
     *         type: string
     *       amount:
     *         type: number
     *       note:
     *         type: string
     *       location:
     *         type: string
     */

    /**
     * @openapi
     * tags:
     *   name: Transactions
     *   description: Transaction management
     */

    /**
     * @openapi
     * /transaction:
     *   get:
     *     description: Get all the transactions
     *     tags:
     *       - Transactions
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: username
     *         description: Unique username
     *         required: false
     *         type: string
     *     responses:
     *       200:
     *         description: Transactions for the user
     *         schema:
     *           type: array
     *           $ref: '#/definitions/Transaction'
     */
    app.get('/transcation', (_, res) => {
        res.json([
            {
                date: '3/12/1987',
                amount: 100000,
                note: 'Marshall was born!',
                location: 'Utah'
            }
        ]);
    });
};

export default { setup };