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
                <MessageContainer speaker='bot' messageContent='一部はAIが回答しています。AIが適切に回答できない場合、表現を変えて質問をご入力ください。ご利用にあたっては、ANAウェブサイト利用規約をご確認ください。
Some answers are provided by AI.; please rephrase your question if not answered properly. Please refer to ANA Website Terms and Conditions before use.'/>
                <MessageContainer speaker='user' messageContent='国際線特典航空空席案内'/>
 
      
            </div>
            <InputArea/>
        </div>
    )
}