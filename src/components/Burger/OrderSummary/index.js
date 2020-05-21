import React from 'react';
import { Card } from 'antd';

import burgerImg from '../../../assets/images/tsImage.jpg'


const Order = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map((igkey) => {
        return (
            <li key={igkey}>
                <span style={{ textTransform: 'capitalize' }}>{igkey}</span>
            </li>
        )
    });
    return (
        <React.Fragment>
            <Card
                title='Your order'
                hoverable
                headStyle={{ color: 'blue' }}
                cover={
                    <div style={{ width: '100%', marginLeft: 'calc(50% - 100px)', marginTop: '10px' }}>
                        <img
                            style={{ width: '200px', height: '200px', backgroundColor: '#fff' }}
                            alt=''
                            src={burgerImg}
                        />
                    </div>
                }
            >
                <p>A delicious burger with the following ingredients:</p>
                {/* gan igKey cua ingredients vao */}
                <ul>{ingredientSummary}</ul>
                <p>
                    <strong>
                        Total Price: <span style={{ color: '#d88282', marginLeft: '5px' }}>{props.price}S</span>
                    </strong>
                </p>
                <p>Continute to Checkout?</p>
            </Card>
        </React.Fragment>
    )
}
export default Order;