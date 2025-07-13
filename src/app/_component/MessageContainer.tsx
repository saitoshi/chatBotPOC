import './style.css';

export const MessageContainer = () => {
    return (
        <div id='chatBotBody'>
 <div className='messageContainer'>
            <div className='botThumbnailLeft'>
                <p className='image'>
                    <img className='botIcon' src={"https://image.ana.bedore.jp/6c2c0ad8-1f00-4bfb-aaf…2473002f/7678ef91-44f0-46a9-88b3-9e82f6cb2d3d.png"}/>
                </p>
            </div>
            <div className='messageBoxRightContainer'>
                <span className='messageBoxContainerContent'>
                    <p>以下の内容については自動チャットにてご案内いたします。　ご希望の内容を選択してお進みください。</p>
                    <br />
                    <p>I will guide you through the following topic in this ANA Chatbot</p>
                    <br />
                    <p>（選択ボタンは一度のみご選択が可能です。）</p>
                    <br />
                    <p>（You can only select the button once.）</p>
                </span>
            </div>
            </div>
        </div>
    
    
    )
}