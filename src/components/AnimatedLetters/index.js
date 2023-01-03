import './index.scss';

const AnimatedLetters = ({letters, strArray, idx}) => {
    return(
        <span>
            { strArray.map((char, i) => ((
                <span key={i} className={i === idx ? 'active' : ''}></span>
            )))}
        </span>
    )
}