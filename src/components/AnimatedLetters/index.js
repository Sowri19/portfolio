import './index.scss';

// first argument is class applied to the characters
// array of the characters
// index is the starting point and also set the delay of the characters and the animation
const AnimatedLetters = ({letterClass, strArray, idx}) => {
    return(
        <span>
            { strArray.map((char, i) => ((
                <span key={char + i} className={`${letterClass} _${i +idx}`}>
                    {char}
                </span>
            )))}
        </span>
    )
};

export default AnimatedLetters;