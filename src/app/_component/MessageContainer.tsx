import './style.css';

type messageInputs = {
    speaker: string, 
    messageContent: string,
    options?: string,
}
export const MessageContainer = ({ speaker, messageContent, options }: messageInputs) => {
    
    return (
        <div id='chatBotBody'>
            {speaker === "bot" ?  <div className='messageContainer'>
            <div className='botThumbnailLeft'>
                <p className='image'>
                    <img className='botIcon' src={"customerService.png"}/>
                </p>
            </div>
            <div className='messageBoxRightContainer'>
                <span className='messageBoxContainerContent'>
                        <p>{messageContent}</p>
                </span>
            </div>
            </div> :
            <div className='messageContainer'>
                    <div className='userMessageGap'>
                        
                    </div>
                    <div className='userMessageContent'>
                    <p>{messageContent}</p>
                    </div></div>
            }
        </div>
    
    
    )
}