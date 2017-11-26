import { BaseService } from './BaseService'

class TestService extends BaseService {

  static ENDPOINT = '/test'

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
}

export {
  TestService
}