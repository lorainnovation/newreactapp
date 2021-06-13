import React from 'react'

const Button = ({color, text, onAdding}) => {

    return <button onClick={onAdding} style={{backgroundColor: color}} className="btn">{text}</button>
}

Button.defaultProps={   

    color: "steelblue"
}

Button.propsType={


}

export default Button
