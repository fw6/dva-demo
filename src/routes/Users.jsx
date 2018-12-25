import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'

// Users 的 Presentational Component
import UserList from '../components/Users/UserList'
import UserModal from '../components/Users/UserModal'
import UserSearch from '../components/Users/UserSearch'

import styles from './Users.less'

function Users({ location, dispatch, users }) {
  const {
    loading,
    list,
    total,
    current
    // currentItem,
    // modalVisible,
    // modalType
  } = users

  const userSearchProps = {}
  const userListProps = {
    total,
    current,
    loading,
    dataSource: list
  }
  const userModalProps = {}

  return (
    <div className={styles.normal}>
      {/* 用户筛选搜索框 */}
      <UserSearch {...userSearchProps} />
      {/* 用户信息展示列表 */}
      <UserList {...userListProps} />
      {/* 添加用户 && 修改用户弹出浮层 */}
      <UserModal {...userModalProps} />
    </div>
  )
}

Users.propTypes = {
  users: PropTypes.object
}

// 指定订阅数据
function mapStateToProps({ users }) {
  return { users }
}

export default connect(mapStateToProps)(Users)
