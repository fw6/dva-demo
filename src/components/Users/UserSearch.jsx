import React from 'react'
import styles from './UserSearch.less'
import { Button } from 'antd'

export default ({ form, field, keyword, onSearch, onAdd }) => (
  <div className={styles.normal}>
    <div className={styles.search} />
    <div className={styles.create}>
      <Button type="ghost" onClick={onAdd}>
        添加
      </Button>
    </div>
  </div>
)
