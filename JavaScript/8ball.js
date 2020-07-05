function eightball() {
    const replies = ['Yes', 'No', 'Probably', 'Probably not', 'I don\'t think so', 'Definitely', 'Of course', 'Definitely not', 'Maybe'];

    const result = Math.floor((Math.random() * replies.length));

    var question = prompt("Please enter your question:", "");
    if (question == null || question == "") {
        alert("Please ask a full question!");
    } else {
        // txt = "Question: " + question + "\nAnswer: "  + replies[result]
        alert("Question: " + question + "\nAnswer: " + replies[result]);
    }
}