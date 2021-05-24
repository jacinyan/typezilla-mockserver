import React from 'react'
import { Button } from 'antd'

export const Reset = () => {
  function clear() {
    const confirmed = window.confirm(
      'Are you sure you remove all the data(account info included)?'
    )
    if (confirmed) {
      window.localStorage.clear()
      window.location.replace(window.location.origin)
    }
  }
  return <Button onClick={clear}>Clear DB</Button>
}
