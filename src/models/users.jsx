// import { hashHistory } from 'dva/router'
// import {create, remove, update, query} from '../services/users'

// 处理异步请求
import { query } from '../services/users'

export default {
  namespace: 'users',

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === '/users') {
          dispatch({
            type: 'querySuccess',
            payload: {}
          })
        }
      })
    }
  },

  state: {
    list: [],
    total: null,
    loading: false, // 控制加载状态
    current: null, // 当前分页信息
    currentItem: {}, // 当前操作的用户对象
    modalVisible: false, // 弹出窗显示状态
    modalType: 'create' // 弹出窗类型（添加用户、编辑用户）
  },

  // 控制数据流程
  effects: {
    // call: 调用执行一个函数
    // put: dispatch执行一个action
    // select: 操作其他modal
    *query({ payload }, { select, call, put }) {
      yield put({ type: 'showLoading' })
      const { data } = yield call(query)
      if (data) {
        yield put({
          type: 'querySuccess',
          payload: {
            list: data.data,
            total: data.page.total,
            current: data.page.current
          }
        })
      }
    },
    *create() {},
    *delete() {},
    *update() {}
  },

  // 修改 model 的 state
  reducers: {
    showLoading({ state }) {
      return { ...state, loading: true }
    }, // 控制加载状态的 reducer
    showModal() {}, // 控制 Modal 显示状态的reducer
    hideModal() {},
    // 使用静态数据返回
    querySuccess(state, action) {
      // const mock = {
      //   total: 3,
      //   current: 1,
      //   loading: false,
      //   list: [
      //     {
      //       id: 1,
      //       name: '张三',
      //       age: 23,
      //       address: '郑州'
      //     },
      //     {
      //       id: 2,
      //       name: 'Lisa',
      //       age: 18,
      //       address: '香港'
      //     },
      //     {
      //       id: 3,
      //       name: '李华',
      //       age: 25,
      //       address: '上海'
      //     },
      //     {
      //       id: 4,
      //       name: '韩梅梅',
      //       age: 21,
      //       address: '北京'
      //     }
      //   ]
      // }
      return { ...state, ...action.payload, loading: false }
    },
    createSuccess() {},
    deleteSuccess() {},
    updateSuccess() {}
  }
}
