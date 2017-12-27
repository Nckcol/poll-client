import { BaseService } from './BaseService'

class SubjectService extends BaseService {

  static ENDPOINT = '/subjects'

  getList() {
    return fetch(SubjectService.ENDPOINT, {
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
    return fetch(`${SubjectService.ENDPOINT}/${id}`, {
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
  SubjectService
}