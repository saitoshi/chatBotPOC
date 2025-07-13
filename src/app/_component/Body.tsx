import './style.css';
import { MessageContainer } from './MessageContainer';
import { InputArea } from './InputArea';
export const Body = () => {
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return (
        <div id='chatBotBody'>
            <div className='messageInner'>
                <div className='messageDate'>
                    {year}/{month}/{day}
                </div>
                <MessageContainer />
                <MessageContainer />
      
            </div>
            <InputArea/>
        </div>
    )
}