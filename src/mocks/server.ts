import { createServer, Model } from 'miragejs'

const server = () => {
  createServer({
    models: {
      transaction: Model,
    },

    seeds(server) {
      server.db.loadData({
        transactions: [
          {
            id: 1,
            title: 'Site Blank',
            amount: 10000,
            type: 'income',
            category: 'Prestação de Serviços',
            createdAt: new Date('2017-05-25 13:00:00'),
          },
          {
            id: 2,
            title: 'Alugel',
            amount: 2300,
            type: 'outcome',
            category: 'Moradia',
            createdAt: new Date('2020-02-20 09:00:00'),
          },
        ],
      })
    },

    routes() {
      this.namespace = 'api'

      this.get('/transactions', () => {
        return this.schema.all('transaction')
      })

      this.post('/transactions', (schema, request) => {
        const data = JSON.parse(request.requestBody)
        console.table(data)

        return schema.create('transaction', data)
      })
    },
  })
}

export default server
