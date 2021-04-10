import { createServer } from 'miragejs'

const server = () => {
  createServer({
    routes() {
      this.namespace = 'api'

      this.get('/transactions', () => {
        return {
          todo: [],
        }
      })
    },
  })
}

export default server
