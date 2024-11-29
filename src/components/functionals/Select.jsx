
import PropTypes from 'prop-types'
import { useState } from 'react'

function Select({options}) {

    const [citySelect, setCitySelect] = useState('')
    const handlerSlect = (e) =>{

    setCitySelect(e.target.vaule)
    }
  return (
    <select value={citySelect} onChange={handlerSlect}>
        <option>Selecciona</option>
        {options.map((option, index) => {
            <option key={index} value={option}>
            </option>
        })}
    </select>
  )
}

Select.propTypes = {
    options: PropTypes.array
}

export default Select
