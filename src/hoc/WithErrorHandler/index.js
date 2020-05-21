import React from 'react';

import { Modal } from 'antd';
import userHttpErrorHandler from '../../hooks/http-error-handler';

const withErrorHandler = (WappedComponent, axios)=>{
    return ( props )=>{
        const [error, clearError] = userHttpErrorHandler(axios);
        return(
            <React.Fragment>
                <Modal visible={error} onCancel={clearError}>
{error && error.mesage}
                </Modal>
                <WappedComponent {...props}/>
            </React.Fragment>
        )
    }
}
export default withErrorHandler;