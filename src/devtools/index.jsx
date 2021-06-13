import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Drawer, Tabs, Tooltip, Typography } from 'antd'
import { RequestTime } from './RequestTime'
import {
  GlobalOutlined,
  SettingOutlined,
  SettingTwoTone,
  StopOutlined
} from '@ant-design/icons'
import { FailureRate } from './FailureRate'
import { Reset } from './Reset'
import { FailureRules } from './FailureRules'
import { ReactQueryDevtoolsPanel } from 'react-query/devtools'
import 'antd/dist/antd.css'

const { Text, Link } = Typography
const { TabPane } = Tabs

export const DevTool = () => {
  const [visible, setVisible] = useState(false)
  return (
    <div>
      {visible ? null : (
        <div
          style={{
            position: 'fixed',
            bottom: '50px',
            right: '50px',
            zIndex: 9999
          }}
        >
          <Tooltip title={'Click this to open the devtools'}>
            <SettingTwoTone
              style={{ fontSize: '22px' }}
              onClick={() => setVisible(true)}
            />
          </Tooltip>
        </div>
      )}
      <Drawer
        visible={visible}
        onClose={() => setVisible(false)}
        bodyStyle={{ padding: '10px' }}
        placement={'bottom'}
        key={'bottom'}
        height={'40%'}
      >
        <Text type='secondary'>DevTools</Text>
        <Tabs defaultActiveKey='1'>
          <TabPane
            tab={
              <span>
                <SettingOutlined />
                Console
              </span>
            }
            key='1'
          >
            <div style={{ marginBottom: '0.5rem' }} className={'form-item'}>
              <Reset />
            </div>
            <div
              style={{
                marginBottom: '0.3rem',
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <label>Minimum request time</label>
              <RequestTime />
            </div>
            <div
              className={'form-item'}
              style={{
                marginBottom: '0.3rem',
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <label>Failure Rate</label>
              <FailureRate />
            </div>
          </TabPane>
          <TabPane
            tab={
              <span>
                <StopOutlined />
                Async Failure Settings
              </span>
            }
            key='2'
          >
            <FailureRules />
          </TabPane>
          <TabPane
            tab={
              <span>
                <GlobalOutlined />
                React Query
              </span>
            }
            key='3'
          >
            <ReactQueryDevtoolsPanel />
          </TabPane>
        </Tabs>

        {/*<RequestTime/>*/}
      </Drawer>
    </div>
  )
}

export const installDevTool = () => {
  const devToolsRoot = document.createElement('div')
  document.body.appendChild(devToolsRoot)
  ReactDOM.render(<DevTool />, devToolsRoot)
}
