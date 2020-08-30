module.exports = {
    name: 'ping',
    description: "simple ping-pong command for testing purposes",
    execute(message, args){
        message.channel.send('pong!')
    }
}