import { BaseService } from './BaseService'

class TestService extends BaseService {

  static ENDPOINT = '/tests'

  getList() {
    return fetch(TestService.ENDPOINT, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'same-origin'
    })
      .then(this.checkStatus)
      .then((response) => {
        return response.json()
      })
  }

  getItem(id) {
    return fetch(`${TestService.ENDPOINT}/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(this.checkStatus)
      .then((response) => {
        return response.json()
      })
  }

  create(test) {
    return fetch(`${TestService.ENDPOINT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(test)
    })
      .then(this.checkStatus)
      .then((response) => {
        return response.json()
      })
  }
}

export {
  TestService
}