import React from 'react'
import { Button } from './Button'

type FilterButtonsPropsType = {
}

export const FilterButtons = ({ }: FilterButtonsPropsType) => {
    return (
        <div>
            <Button title='All' />
            <Button title='Active' />
            <Button title='Completed' />
        </div>
    )
}