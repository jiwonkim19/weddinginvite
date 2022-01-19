class Client {
  async fetchFoo() {
    return this.get('/foo');
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
