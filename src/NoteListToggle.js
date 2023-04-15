import React, { useState } from 'react'
import WithToggel from './HOC/WithToggel'

function NoteListToggle({ toggleHandler, isShow }) {


    return (
        <div className='container mt-5'>
            <button onClick={toggleHandler} className='btn btn-primary'>
                {isShow ? "-" : '+'}
            </button>
            {isShow ? (<form className='form'>
                <div className='form-group'>
                    <lable htmlFOR='toggle'>Add New Note: </lable>
                    <input type='text' className='form-control' />
                </div>
                <button className='btn btn-primary mt-3'>Add New Note</button>
            </form>) : ''}

        </div>
    )
}

export default WithToggel(NoteListToggle)
