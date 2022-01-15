class Client {
  constructor(baseURL) {
    this.baseURL = baseURL
  }

  async fetchFoo() {
    const url = this.baseURL + '/foo'

    return this.get(url);
  }

  async get(url) {
    const resp = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return await resp.json()
  }
}

export default Client
