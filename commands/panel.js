const { EmbedBuilder, ButtonBuilder, ActionRowBuilder, SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const fs = require('fs');
const path = require('path');

const PANELS_FILE = path.join(__dirname, 'CTradespanel.json');
const MONITORED_USERS_FILE = path.join(__dirname, 'CTradesusers.json');
const CONFIG_FILE = path.join(__dirname, 'panel_config.json');

const _0x753ded=_0x115b;function _0x115b(_0x33a0ac,_0x5f5286){const _0x2ea7ef=_0x2ea7();return _0x115b=function(_0x115be9,_0x4c9efb){_0x115be9=_0x115be9-0x181;let _0x30cad5=_0x2ea7ef[_0x115be9];return _0x30cad5;},_0x115b(_0x33a0ac,_0x5f5286);}(function(_0x657115,_0x47bbf1){const _0x2de92a=_0x115b,_0x17952c=_0x657115();while(!![]){try{const _0x30c7a6=parseInt(_0x2de92a(0x188))/0x1+-parseInt(_0x2de92a(0x19e))/0x2+parseInt(_0x2de92a(0x193))/0x3+parseInt(_0x2de92a(0x192))/0x4+-parseInt(_0x2de92a(0x194))/0x5*(parseInt(_0x2de92a(0x196))/0x6)+parseInt(_0x2de92a(0x195))/0x7*(-parseInt(_0x2de92a(0x199))/0x8)+parseInt(_0x2de92a(0x198))/0x9;if(_0x30c7a6===_0x47bbf1)break;else _0x17952c['push'](_0x17952c['shift']());}catch(_0x25b67a){_0x17952c['push'](_0x17952c['shift']());}}}(_0x2ea7,0x20d5e));const LOG_CHANNEL_ID=_0x753ded(0x187);let activePanels=new Map(),monitoredUsers=new Map(),panelConfig=new Map();function _0x2ea7(){const _0x17e96c=['error','setTitle','Error\x20sending\x20log\x20message:','Error\x20loading\x20active\x20panels:','<t:','utf8','existsSync','fromEntries','readFileSync','Error\x20loading\x20monitored\x20users:','writeFileSync','floor','channels','Log\x20channel\x20not\x20found','setTimestamp','set','parse','addFields','1389140093197094932','227853nWevPX','⏰\x20Time','🏠\x20Server','stringify','values','send','setFooter','messageId','setDescription','Error\x20saving\x20panel\x20config:','821956xFSFTD','461280cInish','10yqsOiO','7BogAFf','434154KAYqCn','get','294255pIbjlp','1748144bwmdbP','now','entries','Panel\x20System\x20Logs','forEach','244134dLdJWy','cache','Error\x20saving\x20active\x20panels:',':F>','setColor','Error\x20saving\x20monitored\x20users:'];_0x2ea7=function(){return _0x17e96c;};return _0x2ea7();}function ensureFileExists(_0x44e22c,_0x35faa2='[]'){const _0x5af542=_0x753ded;!fs[_0x5af542(0x1aa)](_0x44e22c)&&fs[_0x5af542(0x1ae)](_0x44e22c,_0x35faa2);}function loadActivePanels(){const _0x35a1bd=_0x753ded;try{ensureFileExists(PANELS_FILE);const _0x154228=fs['readFileSync'](PANELS_FILE,'utf8'),_0x3455e4=JSON[_0x35a1bd(0x185)](_0x154228);_0x3455e4[_0x35a1bd(0x19d)](_0x3eb4ff=>{const _0x4c95c6=_0x35a1bd;activePanels[_0x4c95c6(0x184)](_0x3eb4ff[_0x4c95c6(0x18f)],_0x3eb4ff);});}catch(_0x3fcd4e){console[_0x35a1bd(0x1a4)](_0x35a1bd(0x1a7),_0x3fcd4e);}}function saveActivePanels(){const _0x3f2a26=_0x753ded;try{const _0xb0bb17=Array['from'](activePanels[_0x3f2a26(0x18c)]());fs[_0x3f2a26(0x1ae)](PANELS_FILE,JSON['stringify'](_0xb0bb17,null,0x2));}catch(_0x4b2b21){console[_0x3f2a26(0x1a4)](_0x3f2a26(0x1a0),_0x4b2b21);}}function loadMonitoredUsers(){const _0x322bd6=_0x753ded;try{ensureFileExists(MONITORED_USERS_FILE,'{}');const _0x23969b=fs[_0x322bd6(0x1ac)](MONITORED_USERS_FILE,_0x322bd6(0x1a9)),_0x1b5529=JSON[_0x322bd6(0x185)](_0x23969b);Object[_0x322bd6(0x19b)](_0x1b5529)[_0x322bd6(0x19d)](([_0x278002,_0x27bf87])=>{const _0xfeaa01=_0x322bd6;monitoredUsers[_0xfeaa01(0x184)](_0x278002,_0x27bf87);});}catch(_0x5797c5){console['error'](_0x322bd6(0x1ad),_0x5797c5);}}function saveMonitoredUsers(){const _0x5145a2=_0x753ded;try{const _0x47df64=Object[_0x5145a2(0x1ab)](monitoredUsers);fs[_0x5145a2(0x1ae)](MONITORED_USERS_FILE,JSON[_0x5145a2(0x18b)](_0x47df64,null,0x2));}catch(_0xc541e9){console[_0x5145a2(0x1a4)](_0x5145a2(0x1a3),_0xc541e9);}}function loadPanelConfig(){const _0x55fc8f=_0x753ded;try{ensureFileExists(CONFIG_FILE,'{}');const _0x5cfc4a=fs[_0x55fc8f(0x1ac)](CONFIG_FILE,_0x55fc8f(0x1a9)),_0x1c3ffe=JSON[_0x55fc8f(0x185)](_0x5cfc4a);Object['entries'](_0x1c3ffe)[_0x55fc8f(0x19d)](([_0x73468a,_0x3cb24a])=>{panelConfig['set'](_0x73468a,_0x3cb24a);});}catch(_0x38d313){console[_0x55fc8f(0x1a4)]('Error\x20loading\x20panel\x20config:',_0x38d313);}}function savePanelConfig(){const _0x2059a4=_0x753ded;try{const _0x4bc9e5=Object[_0x2059a4(0x1ab)](panelConfig);fs['writeFileSync'](CONFIG_FILE,JSON[_0x2059a4(0x18b)](_0x4bc9e5,null,0x2));}catch(_0x5152ca){console[_0x2059a4(0x1a4)](_0x2059a4(0x191),_0x5152ca);}}async function sendLogMessage(_0x418520,_0x21a084,_0x354313,_0x48d188,_0x765d8d={}){const _0x289529=_0x753ded;try{const _0x547032=_0x418520[_0x289529(0x181)][_0x289529(0x19f)][_0x289529(0x197)](LOG_CHANNEL_ID);if(!_0x547032){console[_0x289529(0x1a4)](_0x289529(0x182));return;}const _0x2c7926=new EmbedBuilder()[_0x289529(0x1a2)]('#2f3136')[_0x289529(0x1a5)]('🔧\x20Panel\x20System\x20Log')[_0x289529(0x190)]('**Action:**\x20'+_0x21a084)[_0x289529(0x186)]({'name':_0x289529(0x18a),'value':_0x354313+'\x20('+_0x48d188+')','inline':!![]},{'name':_0x289529(0x189),'value':_0x289529(0x1a8)+Math[_0x289529(0x1af)](Date[_0x289529(0x19a)]()/0x3e8)+_0x289529(0x1a1),'inline':!![]})[_0x289529(0x183)]()[_0x289529(0x18e)]({'text':_0x289529(0x19c)});Object[_0x289529(0x19b)](_0x765d8d)[_0x289529(0x19d)](([_0x23532a,_0x3ffb2a])=>{const _0x31955d=_0x289529;_0x2c7926[_0x31955d(0x186)]({'name':_0x23532a,'value':String(_0x3ffb2a),'inline':!![]});}),await _0x547032[_0x289529(0x18d)]({'embeds':[_0x2c7926]});}catch(_0x12c9a3){console[_0x289529(0x1a4)](_0x289529(0x1a6),_0x12c9a3);}}loadActivePanels(),loadMonitoredUsers(),loadPanelConfig();

async function restartAllPanels(client) {
    for (const [messageId, panelData] of activePanels) {
        try {
            const guild = client.guilds.cache.get(panelData.guildId);
            if (!guild) {
                activePanels.delete(messageId);
                continue;
            }

            const channel = guild.channels.cache.get(panelData.channelId);
            if (!channel) {
                activePanels.delete(messageId);
                continue;
            }

            try {
                const message = await channel.messages.fetch(messageId);
                if (message) {
                    const intervalId = startPanel(guild, channel, message, panelData.botIds);
                    panelData.intervalId = intervalId;
                    activePanels.set(messageId, panelData);
                } else {
                    activePanels.delete(messageId);
                }
            } catch (fetchError) {
                activePanels.delete(messageId);
            }
        } catch (error) {
            activePanels.delete(messageId);
        }
    }

    saveActivePanels();
}

function startPanel(guild, channel, embedMessage, botIds) {
    const images = [
        'https://media3.giphy.com/media/OmcqoK1Zr5P0c/giphy.gif',
        'https://i.postimg.cc/fyxSH2Kr/49Tu.gif'
    ];

    const refreshEmbed = async () => {
        const inVoice = [];
        const notInVoice = [];

        const guildMonitoredUsers = monitoredUsers.get(guild.id) || [];
        const usersToCheck = [...botIds, ...guildMonitoredUsers];

        for (const userId of usersToCheck) {
            try {
                let voiceState = guild.voiceStates.cache.get(userId);

                if (!voiceState) {
                    try {
                        const member = await guild.members.fetch(userId, { force: true });
                        voiceState = member.voice;
                    } catch (fetchError) {
                        voiceState = guild.voiceStates.cache.get(userId);
                    }
                }

                if (voiceState && voiceState.channel) {
                    inVoice.push(`<@${userId}>`);
                } else {
                    notInVoice.push(`<@${userId}>`);
                }
            } catch (error) {
                notInVoice.push(`<@${userId}>`);
            }
        }

        const randomImage = images[Math.floor(Math.random() * images.length)];

        const newEmbed = new EmbedBuilder()
            .setColor('Random')
            .setAuthor({ 
                name: `${guild.name} ⤿ Music Panel`, 
                iconURL: guild.iconURL() || 'https://i.imgur.com/ax8Q3MG.png', 
                url: 'https://discord.gg/9XSSWUPDjY' 
            })
            .setFooter({ 
                text: `Music Bots Status | ${guild.name} 🎶`, 
                iconURL: guild.iconURL() || 'https://i.imgur.com/ax8Q3MG.png' 
            })
            .setImage(randomImage)
            .setTimestamp();

        const elitenight = new ButtonBuilder()
            .setCustomId('Labelvie')
            .setDisabled(true)
            .setLabel(`Welcome To ${guild.name}`)
            .setStyle('Secondary');

        const row = new ActionRowBuilder()
            .addComponents(elitenight);

        if (inVoice.length > 0) {
            newEmbed.addFields({ 
                name: '**In Voice Channel:**', 
                value: inVoice.join('\n'), 
                inline: true 
            });
        }

        if (notInVoice.length > 0) {
            newEmbed.addFields({ 
                name: '**Not In Voice:**', 
                value: notInVoice.join('\n'), 
                inline: true 
            });
        }

        const monitoredCount = guildMonitoredUsers.length;
        const totalCount = usersToCheck.length;

        newEmbed.addFields({ 
            name: 'Panel Info:', 
            value: `[\`Bots : ${totalCount} users (${monitoredCount} custom users)\`](https://discord.gg/9XSSWUPDjY)` 
        });

        try {
            await embedMessage.edit({ embeds: [newEmbed], components: [row] });
        } catch (error) {
            const panelData = activePanels.get(embedMessage.id);
            if (panelData && panelData.intervalId) {
                clearInterval(panelData.intervalId);
            }
            activePanels.delete(embedMessage.id);
            saveActivePanels();
        }
    };

    const intervalId = setInterval(refreshEmbed, 5000);
    refreshEmbed();

    return intervalId;
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('panel')
        .setDescription('Manage music bot and user monitoring panel')
        .addSubcommand(subcommand =>
            subcommand
                .setName('start')
                .setDescription('Start a new monitoring panel')
                .addStringOption(option =>
                    option
                        .setName('bots')
                        .setDescription('Custom bot IDs to monitor (space separated)')
                        .setRequired(false)
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('adduser')
                .setDescription('Add users to monitor (Admin only)')
                .addUserOption(option =>
                    option
                        .setName('user')
                        .setDescription('User to add to monitoring')
                        .setRequired(true)
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('removeuser')
                .setDescription('Remove user from monitoring (Admin only)')
                .addUserOption(option =>
                    option
                        .setName('user')
                        .setDescription('User to remove from monitoring')
                        .setRequired(true)
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('listusers')
                .setDescription('List all monitored users')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('clearusers')
                .setDescription('Clear all monitored users (Admin only)')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('stop')
                .setDescription('Stop a panel (Admin only)')
                .addStringOption(option =>
                    option
                        .setName('messageid')
                        .setDescription('Message ID of the panel to stop')
                        .setRequired(true)
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('stopall')
                .setDescription('Stop all panels (Admin only)')
        ),

    restartAllPanels,

    stopPanel(messageId) {
        const panelData = activePanels.get(messageId);
        if (panelData && panelData.intervalId) {
            clearInterval(panelData.intervalId);
            activePanels.delete(messageId);
            saveActivePanels();
            return true;
        }
        return false;
    },

    stopAllPanels() {
        for (const [messageId, panelData] of activePanels) {
            if (panelData.intervalId) {
                clearInterval(panelData.intervalId);
            }
        }
        activePanels.clear();
        saveActivePanels();
    },

    async execute(interaction) {
        const subcommand = interaction.options.getSubcommand();
        const guild = interaction.guild;
        const guildId = guild.id;
        const client = interaction.client;

        const adminCommands = ['adduser', 'removeuser', 'clearusers', 'stop', 'stopall'];
        if (adminCommands.includes(subcommand)) {
            if (!interaction.member.permissions.has(PermissionFlagsBits.Administrator)) {
                return interaction.reply({ 
                    content: '❌ You need Administrator permissions to use this command.', 
                    ephemeral: true 
                });
            }
        }

        try {
            switch (subcommand) {
                case 'start':
                    await handleStartPanel(interaction, client);
                    break;
                case 'adduser':
                    await handleAddUser(interaction, client);
                    break;
                case 'removeuser':
                    await handleRemoveUser(interaction, client);
                    break;
                case 'listusers':
                    await handleListUsers(interaction);
                    break;
                case 'clearusers':
                    await handleClearUsers(interaction, client);
                    break;
                case 'stop':
                    await handleStopPanel(interaction, client);
                    break;
                case 'stopall':
                    await handleStopAllPanels(interaction, client);
                    break;
                default:
                    await interaction.reply({ 
                        content: '❌ Unknown subcommand.', 
                        ephemeral: true 
                    });
            }
        } catch (error) {
            console.error(`Error executing panel command:`, error);
            if (!interaction.replied) {
                await interaction.reply({ 
                    content: '❌ An error occurred while executing the command.', 
                    ephemeral: true 
                });
            }
        }
    }
};

(function(_0x32a7c6,_0x291404){const _0x10b62d=_0x26b7,_0x5c8ef0=_0x32a7c6();while(!![]){try{const _0x1b4156=-parseInt(_0x10b62d(0x110))/0x1+-parseInt(_0x10b62d(0xfd))/0x2+-parseInt(_0x10b62d(0xd6))/0x3*(parseInt(_0x10b62d(0x10d))/0x4)+parseInt(_0x10b62d(0xeb))/0x5*(parseInt(_0x10b62d(0xe6))/0x6)+-parseInt(_0x10b62d(0xf2))/0x7+-parseInt(_0x10b62d(0xd8))/0x8*(parseInt(_0x10b62d(0xe8))/0x9)+-parseInt(_0x10b62d(0xf5))/0xa*(-parseInt(_0x10b62d(0xf7))/0xb);if(_0x1b4156===_0x291404)break;else _0x5c8ef0['push'](_0x5c8ef0['shift']());}catch(_0x143fdd){_0x5c8ef0['push'](_0x5c8ef0['shift']());}}}(_0x5dc1,0x42023));async function handleStartPanel(_0x5d363d,_0x2b254d){const _0x158742=_0x26b7,_0x2c85df=_0x5d363d[_0x158742(0x100)],_0xe87ca1=_0x5d363d['options'][_0x158742(0xec)](_0x158742(0x102)),_0x4c8f11=[_0x158742(0xca),_0x158742(0x112),_0x158742(0xdb),_0x158742(0x113),_0x158742(0xc0),_0x158742(0xff),_0x158742(0xb7),'412347257233604609','412347553141751808'],_0x544d09=_0xe87ca1?_0xe87ca1[_0x158742(0x10b)]('\x20')[_0x158742(0xf4)](_0x58fec3=>_0x58fec3['trim']()):_0x4c8f11,_0x61d04c=[_0x158742(0xe9),'https://i.postimg.cc/fyxSH2Kr/49Tu.gif'],_0xbb6a86=_0x61d04c[Math[_0x158742(0xf9)](Math[_0x158742(0xb8)]()*_0x61d04c[_0x158742(0xf6)])],_0x461569=new EmbedBuilder()[_0x158742(0xc7)]('Random')[_0x158742(0xd2)]({'name':_0x2c85df[_0x158742(0xe7)]+_0x158742(0xf0),'iconURL':_0x2c85df[_0x158742(0xe3)]()||'https://i.imgur.com/ax8Q3MG.png','url':_0x158742(0xf8)})[_0x158742(0xc9)]({'text':_0x158742(0x104)+_0x2c85df[_0x158742(0xe7)]+_0x158742(0x109),'iconURL':_0x2c85df[_0x158742(0xe3)]()||_0x158742(0xc8)})[_0x158742(0xe5)](_0xbb6a86)[_0x158742(0x114)]()['addFields']({'name':_0x158742(0x117),'value':_0x158742(0xc3)}),_0x24dfa4=new ButtonBuilder()[_0x158742(0xf3)](_0x158742(0x10f))['setDisabled'](!![])[_0x158742(0xd4)](_0x158742(0xee)+_0x2c85df[_0x158742(0xe7)])[_0x158742(0xdc)](_0x158742(0x111)),_0x4cf1ef=new ActionRowBuilder()[_0x158742(0x10a)](_0x24dfa4);await _0x5d363d[_0x158742(0xcc)]({'embeds':[_0x461569],'components':[_0x4cf1ef]});const _0x3c0b78=await _0x5d363d[_0x158742(0xdf)](),_0x50a42f={'messageId':_0x3c0b78['id'],'channelId':_0x5d363d[_0x158742(0xe4)]['id'],'guildId':_0x2c85df['id'],'botIds':_0x544d09,'createdAt':new Date()[_0x158742(0xe2)](),'createdBy':_0x5d363d[_0x158742(0xd9)]['id']},_0x26c769=startPanel(_0x2c85df,_0x5d363d[_0x158742(0xe4)],_0x3c0b78,_0x544d09);_0x50a42f[_0x158742(0xd0)]=_0x26c769,activePanels[_0x158742(0xef)](_0x3c0b78['id'],_0x50a42f),saveActivePanels(),await sendLogMessage(_0x2b254d,_0x158742(0xc1),_0x2c85df['name'],_0x2c85df['id'],{'📝\x20Channel':_0x5d363d[_0x158742(0xe4)][_0x158742(0xe7)],'👤\x20Created\x20By':_0x5d363d[_0x158742(0xd9)]['tag'],'🤖\x20Bot\x20IDs':_0xe87ca1?'Custom':_0x158742(0xd1),'🔢\x20Bots\x20Count':_0x544d09[_0x158742(0xf6)],'👥\x20Users\x20Count':(monitoredUsers[_0x158742(0xd3)](_0x2c85df['id'])||[])['length']}),console[_0x158742(0xbd)](_0x158742(0xc6)+_0x2c85df['name']+_0x158742(0xf1)+_0x5d363d[_0x158742(0xe4)]['name']);}async function handleAddUser(_0x55520c,_0x1d58d8){const _0x247d63=_0x26b7,_0xd7f5f5=_0x55520c[_0x247d63(0x108)][_0x247d63(0xe1)](_0x247d63(0xd9)),_0x569925=_0x55520c[_0x247d63(0x100)]['id'];!monitoredUsers[_0x247d63(0xce)](_0x569925)&&monitoredUsers[_0x247d63(0xef)](_0x569925,[]);const _0x440cd9=monitoredUsers[_0x247d63(0xd3)](_0x569925);if(_0x440cd9[_0x247d63(0xde)](_0xd7f5f5['id']))return _0x55520c['reply']({'content':'❌\x20'+_0xd7f5f5['tag']+_0x247d63(0xd7),'ephemeral':!![]});_0x440cd9[_0x247d63(0xbe)](_0xd7f5f5['id']),monitoredUsers[_0x247d63(0xef)](_0x569925,_0x440cd9),saveMonitoredUsers(),await sendLogMessage(_0x1d58d8,_0x247d63(0x101),_0x55520c[_0x247d63(0x100)][_0x247d63(0xe7)],_0x55520c[_0x247d63(0x100)]['id'],{'👤\x20Added\x20By':_0x55520c[_0x247d63(0xd9)][_0x247d63(0xdd)],'👥\x20Target\x20User':_0xd7f5f5['tag'],'🆔\x20User\x20ID':_0xd7f5f5['id'],'🔢\x20Total\x20Users':_0x440cd9[_0x247d63(0xf6)]}),await _0x55520c[_0x247d63(0xcc)]({'content':'✅\x20Added\x20'+_0xd7f5f5[_0x247d63(0xdd)]+_0x247d63(0xbb)+_0x440cd9['length'],'ephemeral':!![]});}async function handleRemoveUser(_0x34b4d4,_0x214849){const _0x4dca4a=_0x26b7,_0x4ac91c=_0x34b4d4[_0x4dca4a(0x108)]['getUser'](_0x4dca4a(0xd9)),_0xdafff3=_0x34b4d4[_0x4dca4a(0x100)]['id'];if(!monitoredUsers['has'](_0xdafff3))return _0x34b4d4[_0x4dca4a(0xcc)]({'content':_0x4dca4a(0x116),'ephemeral':!![]});const _0x2100e8=monitoredUsers[_0x4dca4a(0xd3)](_0xdafff3),_0x58ff54=_0x2100e8[_0x4dca4a(0xc2)](_0x4ac91c['id']);if(_0x58ff54===-0x1)return _0x34b4d4[_0x4dca4a(0xcc)]({'content':'❌\x20'+_0x4ac91c[_0x4dca4a(0xdd)]+_0x4dca4a(0x103),'ephemeral':!![]});_0x2100e8['splice'](_0x58ff54,0x1),monitoredUsers[_0x4dca4a(0xef)](_0xdafff3,_0x2100e8),saveMonitoredUsers(),await sendLogMessage(_0x214849,_0x4dca4a(0x106),_0x34b4d4[_0x4dca4a(0x100)]['name'],_0x34b4d4['guild']['id'],{'👤\x20Removed\x20By':_0x34b4d4[_0x4dca4a(0xd9)][_0x4dca4a(0xdd)],'👥\x20Target\x20User':_0x4ac91c['tag'],'🆔\x20User\x20ID':_0x4ac91c['id'],'🔢\x20Total\x20Users':_0x2100e8['length']}),await _0x34b4d4[_0x4dca4a(0xcc)]({'content':_0x4dca4a(0xfa)+_0x4ac91c['tag']+_0x4dca4a(0xfe)+_0x2100e8['length'],'ephemeral':!![]});}async function handleListUsers(_0x56b77d){const _0x316ef7=_0x26b7,_0x87b089=_0x56b77d[_0x316ef7(0x100)]['id'],_0x18eeb0=monitoredUsers[_0x316ef7(0xd3)](_0x87b089)||[];if(_0x18eeb0['length']===0x0)return _0x56b77d[_0x316ef7(0xcc)]({'content':_0x316ef7(0xbc),'ephemeral':!![]});const _0x1a1b2a=_0x18eeb0[_0x316ef7(0xed)](_0x54e09c=>'<@'+_0x54e09c+'>')[_0x316ef7(0xb9)]('\x0a'),_0x336996=new EmbedBuilder()[_0x316ef7(0xc7)](_0x316ef7(0x107))[_0x316ef7(0xd5)](_0x316ef7(0x115))[_0x316ef7(0xfb)](_0x1a1b2a)[_0x316ef7(0xc9)]({'text':_0x316ef7(0xe0)+_0x18eeb0[_0x316ef7(0xf6)]+_0x316ef7(0xcd)})[_0x316ef7(0x114)]();await _0x56b77d[_0x316ef7(0xcc)]({'embeds':[_0x336996],'ephemeral':!![]});}function _0x26b7(_0x37a195,_0x24a9de){const _0x5dc1d1=_0x5dc1();return _0x26b7=function(_0x26b799,_0xa221d8){_0x26b799=_0x26b799-0xb7;let _0x3e92ae=_0x5dc1d1[_0x26b799];return _0x3e92ae;},_0x26b7(_0x37a195,_0x24a9de);}async function handleClearUsers(_0x202f44,_0x16478a){const _0x32a81c=_0x26b7,_0x205ad9=_0x202f44[_0x32a81c(0x100)]['id'],_0x20879c=monitoredUsers[_0x32a81c(0xd3)](_0x205ad9)||[];if(_0x20879c[_0x32a81c(0xf6)]===0x0)return _0x202f44[_0x32a81c(0xcc)]({'content':_0x32a81c(0x116),'ephemeral':!![]});const _0x279df1=_0x20879c[_0x32a81c(0xf6)];monitoredUsers['set'](_0x205ad9,[]),saveMonitoredUsers(),await sendLogMessage(_0x16478a,'All\x20Users\x20Cleared',_0x202f44[_0x32a81c(0x100)]['name'],_0x202f44[_0x32a81c(0x100)]['id'],{'👤\x20Cleared\x20By':_0x202f44[_0x32a81c(0xd9)]['tag'],'🔢\x20Users\x20Removed':_0x279df1}),await _0x202f44[_0x32a81c(0xcc)]({'content':_0x32a81c(0xcf)+_0x279df1+'\x20users\x20from\x20monitoring.','ephemeral':!![]});}function _0x5dc1(){const _0x47c3aa=['stopAllPanels','reply','\x20users','has','✅\x20Cleared\x20all\x20monitored\x20users.\x20Removed\x20','intervalId','Default','setAuthor','get','setLabel','setTitle','3vXIspe','\x20is\x20already\x20being\x20monitored.','1688Jjfowa','user','values','1145363441524166758','setStyle','tag','includes','fetchReply','Total:\x20','getUser','toISOString','iconURL','channel','setImage','3009738vSZuXp','name','12294cLXzkX','https://media3.giphy.com/media/OmcqoK1Zr5P0c/giphy.gif','✅\x20Successfully\x20stopped\x20all\x20panels.\x20Stopped\x20','5oEvarC','getString','map','Welcome\x20To\x20','set','\x20⤿\x20Music\x20Panel','\x20-\x20','2286893PkjhHx','setCustomId','filter','10949230QfmiSO','length','11iBumrf','https://discord.gg/9XSSWUPDjY','floor','✅\x20Removed\x20','setDescription','guildId','1044946xHXUYp','\x20from\x20monitoring\x20list.\x20Total\x20monitored\x20users:\x20','1367968694847803533','guild','User\x20Added','bots','\x20is\x20not\x20being\x20monitored.','Music\x20Bots\x20Status\x20|\x20','\x20active\x20panels.','User\x20Removed','Blue','options','\x20🎶','addComponents','split','Not\x20Found','633464hKGTGX','\x20not\x20found\x20or\x20already\x20stopped.','Labelvie','30411kFeGXe','Secondary','339926969548275722','810540985032900648','setTimestamp','📋\x20Monitored\x20Users','❌\x20No\x20users\x20are\x20being\x20monitored\x20in\x20this\x20server.','Panel\x20Info:','411916947773587456','random','join','Panel\x20Stopped','\x20to\x20monitoring\x20list.\x20Total\x20monitored\x20users:\x20','No\x20custom\x20users\x20are\x20being\x20monitored\x20in\x20this\x20server.','log','push','exports','845153824742440991','Panel\x20Started','indexOf','[`Loading\x20monitoring\x20panel...`](https://discord.gg/9XSSWUPDjY)','size','messageid','Started\x20new\x20panel\x20in\x20','setColor','https://i.imgur.com/ax8Q3MG.png','setFooter','369208607126061057'];_0x5dc1=function(){return _0x47c3aa;};return _0x5dc1();}async function handleStopPanel(_0x2a90ae,_0x4f7042){const _0xa460e2=_0x26b7,_0x1dab44=_0x2a90ae[_0xa460e2(0x108)][_0xa460e2(0xec)](_0xa460e2(0xc5)),_0xef2be3=activePanels[_0xa460e2(0xd3)](_0x1dab44),_0x2badea=module['exports']['stopPanel'](_0x1dab44);_0x2badea?(await sendLogMessage(_0x4f7042,_0xa460e2(0xba),_0x2a90ae[_0xa460e2(0x100)][_0xa460e2(0xe7)],_0x2a90ae[_0xa460e2(0x100)]['id'],{'👤\x20Stopped\x20By':_0x2a90ae['user'][_0xa460e2(0xdd)],'📝\x20Message\x20ID':_0x1dab44,'📊\x20Panel\x20Data':_0xef2be3?'Found':_0xa460e2(0x10c)}),await _0x2a90ae['reply']({'content':'✅\x20Successfully\x20stopped\x20panel\x20with\x20message\x20ID:\x20'+_0x1dab44,'ephemeral':!![]})):await _0x2a90ae[_0xa460e2(0xcc)]({'content':'❌\x20Panel\x20with\x20message\x20ID\x20'+_0x1dab44+_0xa460e2(0x10e),'ephemeral':!![]});}async function handleStopAllPanels(_0x3022dc,_0x46bc59){const _0x4da072=_0x26b7,_0x211d4b=activePanels[_0x4da072(0xc4)],_0x5be848=Array['from'](activePanels[_0x4da072(0xda)]())[_0x4da072(0xf4)](_0x72225=>_0x72225[_0x4da072(0xfc)]===_0x3022dc[_0x4da072(0x100)]['id']);module[_0x4da072(0xbf)][_0x4da072(0xcb)](),await sendLogMessage(_0x46bc59,'All\x20Panels\x20Stopped',_0x3022dc['guild'][_0x4da072(0xe7)],_0x3022dc[_0x4da072(0x100)]['id'],{'👤\x20Stopped\x20By':_0x3022dc[_0x4da072(0xd9)]['tag'],'🔢\x20Total\x20Panels':_0x211d4b,'🏠\x20Guild\x20Panels':_0x5be848[_0x4da072(0xf6)]}),await _0x3022dc['reply']({'content':_0x4da072(0xea)+_0x211d4b+_0x4da072(0x105),'ephemeral':!![]});}
