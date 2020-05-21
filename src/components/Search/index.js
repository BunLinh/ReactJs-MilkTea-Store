import React from 'react';

import classes from './styles.module.css';
// import FormInput from '../FormItem/FormInput';
import { Input, Form } from 'antd';
const { Search } = Input;

const SearchInput = (props) => {
    return (
        // <FormInput name='search'></FormInput>
        <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />
    )
}
export default SearchInput