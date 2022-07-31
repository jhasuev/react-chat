import BaseApi from '../utils/BaseApi'

export default class AuthService {
  static register(payload) {
    return BaseApi.post('/auth/register', payload)
  }
}