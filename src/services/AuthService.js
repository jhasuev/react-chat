import BaseApi from '../utils/BaseApi'

export default class AuthService {
  static register(payload) {
    return BaseApi.post('/auth/register', payload)
  }
  
  static login(payload) {
    return BaseApi.post('/auth/login', payload)
  }
}