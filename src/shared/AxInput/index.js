import React, { Fragment } from 'react';
import { ReactComponent as User } from '../../assets/icons/icon-user.svg';
import { ReactComponent as IconEail } from '../../assets/icons/icon-mail.svg';
import { ReactComponent as IconEdit } from '../../assets/icons/icon-edit.svg';
import '../styles.css';


const AxInput = () => {

    return (

        <Fragment>
            <div className='ax-input'>
                <div className='your-name'>
                    <input className="input" type="text" placeholder='Your name' />
                    <User className='icon-user' />
                </div>
                <div className="email">
                    <input className="input" type="text" placeholder='E-mail' />
                    <IconEail className='icon-email' />
                </div>
            </div>
            <div className='ax-textarea'>
                <div className='textarea-icon'>
                    <textarea className='textarea' id="w3review" name="w3review" rows="4" cols="50">
                    </textarea>
                    <IconEdit  className="icon-edit"/>
                </div>
                <button className='button'>SEND</button>
            </div>
        </Fragment>
    )
}

export default AxInput;