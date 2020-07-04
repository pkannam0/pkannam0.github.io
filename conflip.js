function printMessage() {
    var x = document.getElementById("button1")
    const replies = ['Heads', 'Tails'];

    const result = Math.floor((Math.random() * replies.length));
    alert(`You got ${replies[result]}!`);
}