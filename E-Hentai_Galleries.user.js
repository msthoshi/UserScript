// ==UserScript==
// @name         E-Hentai Galleries
// @namespace    https://github.com/msthoshi/UserScript
// @version      2025-10-05T17:46:00
// @description  E-Hentai Galleries
// @author       Yuyushiki
// @homepageURL  https://github.com/msthoshi/UserScript
// @supportURL   https://github.com/msthoshi/UserScript
// @updateURL    https://github.com/msthoshi/UserScript/raw/main/E-Hentai_Galleries.user.js
// @downloadURL  https://github.com/msthoshi/UserScript/raw/main/E-Hentai_Galleries.user.js
// @match        https://e-hentai.org/
// @match        https://e-hentai.org/?f_*
// @match        https://e-hentai.org/g/*/*/
// @match        https://e-hentai.org/g/*/*/?p=*
// @match        https://e-hentai.org/s/*/*
// @icon         https://e-hentai.org/favicon.ico
// @grant        none
// ==/UserScript==

if ((/^https?:\/\/e-hentai\.org\/(?:\?f_.+)?$/).test(document.URL)){
    RunYuyushiki = function (){
        var elements, element, arrtitle, regtitle;

        arrtitle = [
            '42961512', //9527
            '103109616', //緊縛執行者
            '106119305', //シンクレア
            '115558864', //るいり
            '115698769', //ぴょん
            'AELLOW',
            'AI Chloe Grace Moretz',
            'AI Photo2',
            'Ai Porn Work',
            'AIBUNNY',
            'AiFantasy',
            'AI_Omaga',
            'AI-TAKASHI-YA',
            'AIusagichan',
            'AI小松鸟',
            'Allenby',
            'Amakawa is reflecting',
            'Anilvl',
            'Anipai|ANIPAI',
            'Ankake Nameko|餡掛けなめこ',
            'Anor Londo',
            'ARD [\\s\\S]+ \\(Patreon\\)|\\[ARD\\]',
            'Asphyxia',
            'atorieHJ',
            'Balecxi',
            'BBstaff|BBStaff',
            'Benj17',
            'Bigornox',
            'Black Miracle',
            'Boryuka',
            'BribristleBowie',
            'BubbleTeeXL',
            'ByTheBroken1',
            'Chickenbeautiful',
            'chiko_',
            'Chocopizza|ChocoPizza',
            'ChurnVeil',
            'Cidrex',
            'CodeMistake',
            'Comboappofrice',
            'Coolsummer',
            'corntoss',
            'Creamy AI',
            'Cyber-Wifu',
            'DarkFallenAngel',
            'DeepMole',
            'DiaseePauwel',
            'Digital Waifu Gallery',
            'Donbe',
            'Dsd Adw',
            'Ecchi Eden',
            'Emi Doodlez',
            'EroMomo [\\s\\S]+ \\(Patreon\\)',
            'EroSketch',
            'Freadeeb_TnT',
            'Good Morning-sama',
            'Gragas743|gragas743',
            'GreekoAI',
            'H Jam',
            'Hajily',
            'Hammiai',
            'harajiro_butakimchi',
            'Hentai Hideout',
            'HikaruAI',
            'HONGCHA',
            'Howsir',
            'hstorytaimu',
            'Hurry-Workshop/Anivoice',
            'JessieAI',
            'JJNKAI',
            'JoeinPixels',
            'Jonn Cinabonn Jovi',
            'Jukujo Kami no Kuroana|熟女神の黒穴',
            'Kaiysx',
            'KALA AI NSFW',
            'KalistaFunz',
            'Kangaroo [\\s\\S]+ \\(Patreon\\)|カンガルー/ Kangaroo',
            'KatKirara',
            'KawaGawa|117534671',
            'KisenAI',
            'KM KingMaster|KM \\| KingMaster',
            'LimbusCompany',
            'Liname',
            'Lovehuwu|LoveHUwU',
            'LovelyZen',
            'Lovenight',
            'LustBild',
            'LustyNymphi',
            'MacArooN',
            'Magiskuwa',
            'markinson|106442227',
            'MaxMusclerlc',
            'MessingwithAI',
            'Mikayori',
            'Milf_kun',
            'mnemosynekoto|Mnemosynekoto',
            'MOKIIIMOKIII',
            'Momoyashiki Akari',
            'Moon Petal',
            'mpena24',
            'MrTeardrop',
            'Murata_san_FANBOX',
            'Myanu',
            'Nakanaka nana',
            'Nankoai',
            'Necromancer893',
            'Neroshiboshi',
            'Netorare-san',
            'niauno|16691530',
            'Nixny',
            'NosferartIA',
            'NSFWreigan',
            'NSN Studio',
            'NTRCookie',
            'Oniha-',
            'Pirate Wind Cat',
            'PixelNinjaArt',
            'Poggerrogger',
            'PriestOfArt',
            'Primo Sensei',
            'ProGenArts',
            'PsyopsAI',
            'Purpleh31',
            'QAQ2\\.0|102102635',
            'Realistic AI works',
            'ReiNa',
            'ReverendGreatLove',
            'Rino-mii_Noa',
            'Rqxy|6156788',
            'Ryan4s\\(93340616\\)',
            '^SANARIA [\\s\\S]+ \\(Patreon\\)',
            '^Sayaka [\\s\\S]+ \\(Patreon\\)|\\[Sayaka\\]',
            'Sbookner',
            'Scriptorium',
            'SharinelAI',
            'Sheldon NTR',
            'Shione\'s works',
            'SkyPassion',
            'Sodalord',
            'solomon10',
            'Spairk1313',
            'Starsay',
            'StasisBBC',
            'Stefan',
            '^Stormy',
            's\\.h\\.t|11751692',
            'tabakowayame',
            'Tamagochiiii',
            'Taroberry',
            'Taugust',
            'terusa [\\s\\S]+ \\(Patreon\\)',
            'TheMaker___',
            'TipperGoreWasRight',
            'Tkz\\(116616648\\)',
            'tonkotsu_soup|Tonkotsu Soup',
            'TorogaoUni',
            'TSM2330',
            'Tsubaki [\\s\\S]+ \\(Patreon\\)',
            'Tsukinoo',
            'ufiaw',
            'unifans',
            'UnityNay',
            'Velurieve',
            'Wagamama\\!\\!\\!',
            'Waifu Perfection AI',
            'WaifuArchitect',
            'WaifuInvoker',
            'WaifuLover',
            'Wardens',
            'WienerGens',
            'wwwww2',
            'xyxonrh',
            'YakeArt',
            'YashugAI',
            '(?:^| )yoshi ',
            'Yukina [\\s\\S]+ \\(Patreon\\)',
            'Yukino AI❤️',
            'zipzip|Zipzip',
            '\\[11_22\\]',
            '\\[AIbro\\]',
            '\\[AIlya\\]',
            '\\[Akihime\\]',
            '\\[[bB]onno\\]',
            '\\[coqiaku\\]',
            '\\[Feather\\]',
            '\\[Fraia\\]',
            '\\[Girlstar\\]',
            '\\[HYC\\]',
            '\\[Komachan\\]',
            '\\[(?:Komagome|こまごめピペット)\\]',
            '\\[(?:Milk Paradise|みるくパラダイス)\\]',
            '\\[minakaze\\]',
            '\\[noroj\\]',
            '\\[Miyu\\]',
            '\\[NT00 Fans\' Fan-Created Works\\]',
            '\\[Nyc3e\\]',
            '\\[Okreet\\]',
            '\\[OTA\\]',
            '\\[Potions\\]',
            '\\[PS-AI\\]',
            '\\[Ryx\\]',
            '\\[Setsuna\\]',
            '\\[Zuki\\]',
            '\\[ぱにぱに\\]',
            '\\([Aa]lbatross\\)',
            '\\(Nanami\\)',
            '\\(Patreon\\) Chizuru - ',
            '\\(week2343\\)',
            '\\(紫月\\)',
            '^【AI自制】',
            '【黄色固体胶（zzzzz\\）】',
            'えむすたでぃお',
            'エロエロ研究会',
            'お姉さん 【(?:GOLD|SILVER)】',
            'かたい棒 Hard Stick',
            '^かーむ ',
            'シコリの森',
            'ぬきのすけ',
            'めろんアイスちゃん寝る',
            'ラブリークラフト',
            '阿古りむ|AKoRimu Art',
            '梅洞てんぷりゃー',
            '絵師たか',
            '鬼见愁',
            '狗飯D|65800736',
            '小涩猫猫Nekolock \\(108435514\\)',
            '墨迹',
            '咕哒guda',
            '羞恥工房',
            '私立 ななつ星中',
            '天空之上|51354050',
            '名無しのあに◯ん民',
            '右向カレイ|86707199',
            '油炸小肥龙',
            '丶黑谷雨泽',
            'futanari',
            'collection'
        ]
        regtitle = RegExp(arrtitle.join('|'));

        elements = document.querySelectorAll('table.itg.glte > tbody > tr');
        for (element of elements){
            if (regtitle.test(element.querySelector('div.glink').innerText)){
                element.style.display = 'none';
            }
        }
    }
    popUp = function (URL, w, h){
        var arrMatch, element;
        arrMatch = URL.match(/gid=(\d+)&t=/);
        if (arrMatch){
            element = document.getElementById('posted_' + arrMatch[1]);
            if (element){
                navigator.clipboard.writeText(element.innerHTML);
            }
        }
        return(false);
    }
} else if ((/^https?:\/\/e-hentai\.org\/g\/\d+\/[0-9a-f]+\/(?:\?p=\d+)?$/).test(document.URL)){
    (function() {
        var element, strH;
        element = document.querySelector('div.gm');
        strH = '20px';
        function ClickElement(){
            if (element.style.overflow == 'hidden'){
                element.style.height = 'auto';
                element.style.overflow = 'visible';
            } else {
                element.style.height = strH;
                element.style.overflow = 'hidden';
            }
        }
        element.style.height = strH;
        element.style.overflow = 'hidden';
        element.addEventListener('click', ClickElement, false);
    })();
} else if ((/^https?:\/\/e-hentai\.org\/s\/[0-9a-f]+\/\d+-\d+(?:\?nl=\d+-\d+)?$/).test(document.URL)){
    (function() {
        var strURL, arrMatch, strFileName;
        function PasteFileName(){
            navigator.clipboard.writeText(strFileName);
        }
        strURL = document.URL;
        arrMatch = strURL.replace(/\?[\s\S]+$/, '').match(/(\d+)-(\d+)$/);
        if (arrMatch){
            strFileName = arrMatch[1] + '-' + ('0000' + arrMatch[2]).slice(document.querySelector('#i2 > div.sn > div > span:nth-child(2)').innerHTML.length * -1);
            document.querySelector("#img").addEventListener('contextmenu', PasteFileName, false);
            document.querySelector("#i6").addEventListener('contextmenu', PasteFileName, false);
        }
    })();
}
