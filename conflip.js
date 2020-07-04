function printMessage() {
    const replies = ['Heads', 'Tails'];

    const result = Math.floor((Math.random() * replies.length));
    console.log(`You got ${replies[result]}!`);
}