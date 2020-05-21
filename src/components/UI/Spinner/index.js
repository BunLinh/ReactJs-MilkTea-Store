import React from 'react'
import { Spin } from 'antd';
const Spinner = ({classname='', spinning, children }) => (
    <Spin tip='Loading...' className={classname} spinning={spinning} >
        {/* <Alert
            message="burger is excting"
            description="Have a nice day when you eat me !!!."
            type="info"
        /> */}
        {children}
    </Spin>
)
export default Spinner;