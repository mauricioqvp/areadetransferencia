export function copyToClipBoard() {

    console.log('Estou dentro da funcao Clip Board');

    var content = document.getElementById('textArea');
    
    content.select();
    document.execCommand('copy');

    alert("Copied!");
}