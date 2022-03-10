const adminRoles = [process.env.USERID1, process.env.USERID2, process.env.USERID3];

module.exports = {
    name: 'messageCreate',
    once: false,
    execute(message) {
        gmodChannel = process.env.GMOD;
        testGmodChannel = process.env.TEST_GMOD;

        goodMessage = `${message.author.username} said \"${message.content}\" in #gmod :D`;
        badMessage = `${message.author.username} said \"${message.content}\" in #gmod >:(`;

        /* Only used when testing
        if (message.author.id == process.env.USERID1 && message.content == "kill") {
            killBot();
        }
        */

        if (adminRoles.includes(message.author.id) && message.channel == gmodChannel && message.content == "gmod") {
            console.log(goodMessage);
            return
        } else if (adminRoles.includes(message.author.id) && message.channel == gmodChannel && message.content !== "gmod") {
            message.delete();
            message.author.send("RDM RDM >:( ADMIN BAN THIS GUY");
            console.log(`${badMessage}\nTimeout unsuccessful: User has MODERATE_MEMBERS permission, message deleted instead`);
            return
        }

        if (message.content == "gmod" && message.channel == gmodChannel) {
            console.log(goodMessage);
        } else if (message.channel == gmodChannel && message.content !== "gmod") {
            message.member.timeout(60000, `Saying ${message.content} in #gmod`);
            message.author.send("RDM RDM >:( ADMIN BAN THIS GUY");
            console.log(`${badMessage}\nTimeout successful: User does not have MODERATE_MEMBERS permission`);
        }
    },
};

function killBot() {
    console.log("Quitting");
    process.exit(1);
}
