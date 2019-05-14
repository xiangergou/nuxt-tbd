import fetch from '@/utils/request'

// 登录
export const homeApi = {
  getBanners(params = {}) {
    return fetch({
      url: '/api/mainpage/listMaster',
      method: 'get',
      params
    })
  },

  // 获取指定篇数的淘内热文
  getTaoHot(params = { number: 3}) {
    return fetch({
      url: '/api/mainpage/taohot',
      method: 'get',
      params
    })
  },

  // 获取指定分类文章 目前是按照时间排序
  getCategoryArticles(params = { categoryId: 3, number: 3 }) {
    return fetch({
      url: '/api/mainpage/categoryArticles',
      method: 'get',
      params
    })
  },

  // 获取所有的副banner
  getListAssistant() {
    return fetch({
      url: '/api/mainpage/listAssistant',
      method: 'get'
    })
  },

  // 返回所有的副广告 目前有1个
  getListMainAdv() {
    return fetch({
      url: '/api/mainpage/listMainAdv',
      method: 'get'
    })
  },

  // 获取首页展示的榜单
  getCategoryArticles(params = { number: 3 }) {
    return fetch({
      url: '/api/mainpage/ranklists',
      method: 'get',
      params
    })
  },

  // 获取榜单的统计信息
  getRanklistsummation() {
    return fetch({
      url: '/api/mainpage/ranklistsummation',
      method: 'get',
      params
    })
  }
}