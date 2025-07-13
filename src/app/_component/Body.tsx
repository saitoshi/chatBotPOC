import './style.css';
import { MessageContainer } from './MessageContainer';
export const Body = () => {
    return (
        <div id='chatBotBody'>
            <div className='messageInner'>
                <div className='messageDate'>
                    2025/07/13
                </div>
                <MessageContainer />
                <MessageContainer/>
            </div>
        </div>
    )
}