import { homeApi } from '~/api/home'

const state = () => ({
  bannerImgList: []
})

const mutations = {
  SET_BANNER_SESSION: (state, data) => {
    // state.bannerImgList = data
  }
}

const actions = {
  // 获取banner
  getBanner ({ commit, state }) {
    return new Promise((resolve, reject) => {
      homeApi.getBanners({
      }).then(response => {
        const data = response.data.data
        commit('SET_BANNER_SESSION', data)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  /**
   * @param {*} { commit, state }
   * @returns 新歌速递
   */
  getNewCourier ({ commit, state }, type) {
    return new Promise((resolve, reject) => {
      homeApi.getNewCourier(type).then(response => {
        const data = response.data.data
        window.sessionStorage.setItem('newCourier', JSON.stringify(data))
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  /**
   * @param {*} { commit, state }
   * @returns 推荐歌单
   */
  getPlayList ({ commit, state }) {
    return new Promise((resolve, reject) => {
      homeApi.getPlayList().then(response => {
        const data = response.data
        window.sessionStorage.setItem('personalized', JSON.stringify(data))
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  /**
   * @returns 获取获取每日推荐歌单
   */
  getResource ({ commit, state }) {
    return new Promise((resolve, reject) => {
      homeApi.getResource().then(response => {
        const data = response.data
        window.sessionStorage.setItem('userResource', JSON.stringify(data))
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  /**
   *
   * @param {*} { commit, state }
   * @returns 获取用户歌单
   */
  getUserPlaylist ({ commit, state }) {
    return new Promise((resolve, reject) => {
      homeApi.getUserPlaylist({
        uid: getSessionId()
      }).then(res => {
        window.sessionStorage.setItem('userPlayList', JSON.stringify(res))
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  }

}

export default {
  state,
  mutations,
  actions
}
