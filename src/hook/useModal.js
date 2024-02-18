import React from 'react'

export const useModal = (props) => {
    const [isOpen, setIsopen] = React.useState(props ? props : false)
    const close = () => setIsopen(false)
    const open = () => setIsopen(true)
    const toggle = ()=> setIsopen(!isOpen)
}
