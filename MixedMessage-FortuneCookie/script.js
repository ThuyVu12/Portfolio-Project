const greeting =['Hi!', 'Howdy!', 'Hello!', 'What\'s up?', 'Aloha!', 'How is it going?', 'What a great day!!!'];
const fortuneMessage = ['Do not be afraid of competition.', 'You love peace.', 'Get your mind set…confidence will lead you on.', 'You will always be surrounded by true friends.', 'Sell your ideas-they have exceptional merit.', 'You should be able to undertake and complete anything.', 'You are kind and friendly.', 'You are wise beyond your years.', 'Attitude is a little thing that makes a big difference.', 'Expect the unexpected.', 'Stay healthy. Walk a mile.'];

//testing

//console.log(message.length);

function generateMessage(messageArr) {
    return messageArr[Math.floor(Math.random() * messageArr.length)];
}

console.log(`${generateMessage(greeting)} Your fortune cookie is here. The message today for you today is \"${generateMessage(fortuneMessage)}\". Hope you enjoyed your cookie. Good day!`);

