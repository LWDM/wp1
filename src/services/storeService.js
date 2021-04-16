import api from '../services/api'
export default {
  fetchStores () {
    return api().get('tt_book')
  },
  addNewStore (params) {
    return api().post('test', params)
  },
  getPost (params) {
    return api().get(`tt_book/${params.id}`)
  }
}
