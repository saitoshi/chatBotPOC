import './style.css';

export const InputArea = () => {
    return (
        <div id='inputAreaBox'>
            <button className='clipItemButton'>
            <i className="fa fa-paperclip"></i>
            </button>
            <textarea className='inputAreaBox' placeholder='質問入力/Start Typing'>

            </textarea>
            <button className='sendInputMessage'>
            <i className="fa fa-paper-plane-o"></i>
            </button>
</div>
    )
}