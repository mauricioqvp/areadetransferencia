
type Props = {
    copyToClipBoard : Function;
}

 function Btn({copyToClipBoard} : Props ) {
    return (
        <div>
            <textarea id="textArea" value="We are learning to copy text to clipboard in JavaScript."></textarea>
            <button onClick={() => copyToClipBoard(
                console.log("Ola mundo")
            )}>
                Copy
            </button>

        </div>
    );
}

export default Btn;