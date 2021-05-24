import React from 'react'
import { useLocalStorageState } from '../hooks/useLocalStorage'
import { InputNumber } from 'antd'

export const FailureRate = () => {
  const [failureRate, setFailureRate] = useLocalStorageState(
    '__typezilla_failure_rate__',
    0
  )

  const handleChange = (value) => {
    setFailureRate(Number(value))
  }

  return (
    <InputNumber
      style={{ width: '100px' }}
      className={'item'}
      formatter={(value) => `${value}%`}
      parser={(value) => value.replace('%', '')}
      value={failureRate}
      min={0}
      max={100}
      defaultValue={0}
      onChange={handleChange}
    />
  )
}
