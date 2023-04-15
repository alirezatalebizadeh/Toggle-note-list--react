import React, { useState } from 'react'


export default function WithToggel(OriginalComponent) {
    function NewComponent() {
        const [isShow, SetIsShow] = useState(false)

        const toggleHandler = () => {
            SetIsShow(prevIsShow => !prevIsShow)
        }

        return <OriginalComponent isShow={isShow} toggleHandler={toggleHandler} />


    }
    return NewComponent
}

