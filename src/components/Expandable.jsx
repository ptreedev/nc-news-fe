import { useState } from 'react'

const Expandable = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <button onClick={toggleOpen} >
                {isOpen ? " Hide" : " Show Comments"}
            </button>
            {isOpen ? children : null}
        </>
    )
}

export default Expandable