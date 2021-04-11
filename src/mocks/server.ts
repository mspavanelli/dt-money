import { createServer, Model } from 'miragejs'

const server = () => {
  createServer({
    models: {
      transaction: Model,
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
