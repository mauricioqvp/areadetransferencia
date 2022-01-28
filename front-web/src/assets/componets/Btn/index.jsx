
 function Btn() {
    return (
        <div>
            <textarea id="textArea" value="We are learning to copy text to clipboard in JavaScript."></textarea>
            <button onClick="copyToClipBoard()">Copy</button>

            <script src="./copyToClipBoard.js"></script>
        </div>
    );
}

export default Btn;