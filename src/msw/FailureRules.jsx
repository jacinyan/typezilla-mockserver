import React, { useState } from 'react'
import { Button, Form, Input, List, Select, Typography } from 'antd'
import { useLocalStorageState } from '../hooks/useLocalStorage'

const { Text, Link } = Typography

const { Option } = Select

export const FailRules = () => {
  const [method, setMethod] = useState('all')
  const [url, setUrl] = useState('')

  const [failConfig, setFailConfig] = useLocalStorageState(
    '__typezilla_request_fail_config__',
    []
  )

  function handleRemoveClick(index) {
    setFailConfig((c) => [...c.slice(0, index), ...c.slice(index + 1)])
  }

  function handleSubmit() {
    if (!method && !url) {
      alert('Please specify request method or URL')
      return
    }
    setFailConfig((c) => [
      ...c,
      { requestMethod: method.toUpperCase(), urlMatch: url }
    ])
    setMethod('')
    setUrl('')
  }

  const prefixSelector = (
    <Form.Item name='prefix' noStyle>
      <Select defaultValue={'all'} onChange={setMethod} style={{ width: 100 }}>
        <Option value='all'>ALL</Option>
        <Option value='get'>GET</Option>
        <Option value='post'>POST</Option>
        <Option value='delete'>DELETE</Option>
        <Option value='patch'>PATCH</Option>
      </Select>
    </Form.Item>
  )

  return (
    <div
      style={{
        display: 'grid',
        gridColumnGap: '30px',
        gridTemplateColumns: '1.2fr 2fr'
      }}
    >
      <Form onFinish={handleSubmit} style={{ paddingTop: '12px' }}>
        <Form.Item
          name='url'
          rules={[{ required: true, message: 'Please type in the url' }]}
        >
          <Input
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            addonBefore={prefixSelector}
            placeholder={'/api/projects'}
          />
        </Form.Item>
        <Form.Item>
          <Button htmlType={'submit'}>Add</Button>
        </Form.Item>
      </Form>
      <List
        header={'list'}
        dataSource={failConfig}
        renderItem={(item, index) => (
          <List.Item
            actions={[
              <a onClick={() => handleRemoveClick(index)} key='delete'>
                Delete
              </a>
            ]}
          >
            <Text mark> Request Method：{item.requestMethod || 'none'} </Text>
            <Typography.Text>URL: {item.urlMatch || 'none'}</Typography.Text>
          </List.Item>
        )}
      />
    </div>
  )
}
