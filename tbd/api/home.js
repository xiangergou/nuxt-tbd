import fetch from '@/utils/request'

// 登录
export const homeApi = {
  getBanners(params = {}) {
    return fetch({
      url: '/api/mainpage/listMaster',
      method: 'get',
      params
    })
  }
}