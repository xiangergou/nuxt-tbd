import fetch from '@/utils/request'

export const artApi = {
  // 获取所有的分类
  getCategory() {
    return fetch({
      url: '/api/article/category',
      method: 'get',
      cache: true
    })
  },
  // 查看指定文章详情
  getDetail(params = { articleId: 1}) {
    return fetch({
      url: '/api/article/detail',
      method: 'get',
      params
    })
  },

  // 查看指定文章详情
  getDetail(params = { articleId: 1 }) {
    return fetch({
      url: '/api/article/detail',
      method: 'get',
      params
    })
  },

  // 搜索指定标题的资讯
  getPageQuery(params) {
    console.log(params, 'params')
    params = { categoryId: 1, page: 1, pageSize: 10, ...params}
    return fetch({
      url: '/api/article/pageQuery',
      method: 'get',
      params
    })
  },
  // 搜索指定标题的资讯
  getSearch(params = { keyword: '' }) {
    return fetch({
      url: '/article/search',
      method: 'get',
      params
    })
  }
}