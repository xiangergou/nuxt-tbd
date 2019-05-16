import fetch from '@/utils/request'

export const homeApi = {
  getBanners(params = {}) {
    return fetch({
      url: '/api/mainpage/listMaster',
      method: 'get',
      params,
      cache: true
    })
  },

  // 获取指定篇数的淘内热文
  getTaoHot(params = { number: 9}) {
    return fetch({
      url: '/api/mainpage/taohot',
      method: 'get',
      params,
      cache: true
    })
  },

  // 获取指定分类文章 目前是按照时间排序
  getCategoryArticles(params = { number: 9 }) {
    return fetch({
      url: '/api/mainpage/categoryArticles',
      method: 'get',
      params,
      cache: true
    })
  },

  // 获取所有的副banner
  getListAssistant() {
    return fetch({
      url: '/api/mainpage/listAssistant',
      method: 'get',
      cache: true
    })
  },

  // 返回所有的副广告 目前有1个
  getListMainAdv() {
    return fetch({
      url: '/api/mainpage/listMainAdv',
      method: 'get',
      cache: true
    })
  },

  // 获取首页展示的榜单
  getCategoryArticles(params = { number: 3 }) {
    return fetch({
      url: '/api/mainpage/ranklists',
      method: 'get',
      params,
      cache: true
    })
  },

  // 获取榜单的统计信息
  getRanklistsummation() {
    return fetch({
      url: '/api/mainpage/ranklistsummation',
      method: 'get',
      cache: true
    })
  },

  // 获取友情链接
  getListlinks() {
    return fetch({
      url: '/api/link/listlinks',
      method: 'get',
      cache: true
    })
  },

  // 获取爆文
  getPageQuery(params = { page: 1, pageSize: 32}) {
    return fetch({
      url: '/api/taohot/pageQuery',
      method: 'get',
      params,
      cache: true
    })
  },

}