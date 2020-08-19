import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { NativeSelect } from '@material-ui/core';
import { DarkText14 } from './Fonts';

const SelectStyle = styled(NativeSelect)`
   width: 100%;
   margin-bottom: 30px;
`;

const Select = props => {
    const { placeholder, onChange, options, valueKey, labelKey, label, value, ...rest} = props;
    return (
        <div>
            {label && <DarkText14>{label}</DarkText14>}
            <SelectStyle {...rest} onChange={onChange} value={value}>
                <option>{placeholder}</option>
                {
                    options && options.length && options.map(option =>  <option value={option[valueKey]} key={option[valueKey]}>{option[labelKey]}</option>)
                }
            </SelectStyle>
        </div>
    )
}

Select.propTypes = {
    valueKey: PropTypes.string,
    labelKey: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
}

Select.defaultProps = {
    valueKey: "value",
    labelKey: "name",
    label: null,
    placeholder: "Select"
}

export default Select
