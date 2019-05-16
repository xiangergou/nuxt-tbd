import fetch from '@/utils/request'

export const listApi = {
  // 查询 达人榜下除综合外的领域 因为榜单数量不多 所以一次性返回
  getAreas(params = { secret: '', status: ''}) {
    return fetch({
      url: '/api/latestlist/areas',
      method: 'get',
      params
    })
  },

  // 查询 翻页查询达人榜排名
  getDaren(params = { lastMaxId: '', secret: '', size: '', version: '' }) {
    return fetch({
      url: '/api/latestlist/daren',
      method: 'get',
      params
    })
  }

}