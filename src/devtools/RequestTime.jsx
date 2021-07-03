import React from 'react'
import { useLocalStorageState } from '../hooks/useLocalStorage'
import { InputNumber } from 'antd'

export const RequestTime = () => {
  const [minTime, setMinTime] = useLocalStorageState(
    '__typezilla_min_request_time__',
    200
  )

  const handleChange = (value) => setMinTime(Number(value))

  return (
    <InputNumber
      style={{ width: '100px' }}
      className={'item'}
      formatter={(value) => `${value}ms`}
      parser={(value) => value.replace('ms', '')}
      value={minTime}
      min={0}
      max={1000 * 60}
      onChange={handleChange}
    />
  )
}
