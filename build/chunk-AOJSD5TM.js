import {
  FileDialogArgs,
  FilePath,
  PlatformAPI,
  __commonJS,
  __export,
  __name,
  __require,
  __toESM,
  html5_fileapi_exports,
  isMimeText,
  mimeMap
} from "./chunk-6V7YOTV2.js";

// scripts/path.ux/scripts/path-controller/util/mobile-detect.cjs
var require_mobile_detect = __commonJS({
  "scripts/path.ux/scripts/path-controller/util/mobile-detect.cjs"(exports2, module) {
    (function(define2, undefined2) {
      define2(function() {
        "use strict";
        var impl = {};
        impl.mobileDetectRules = {
          "phones": {
            "iPhone": "\\biPhone\\b|\\biPod\\b",
            "BlackBerry": "BlackBerry|\\bBB10\\b|rim[0-9]+|\\b(BBA100|BBB100|BBD100|BBE100|BBF100|STH100)\\b-[0-9]+",
            "HTC": "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m|Android [0-9.]+; Pixel",
            "Nexus": "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",
            "Dell": "Dell[;]? (Streak|Aero|Venue|Venue Pro|Flash|Smoke|Mini 3iX)|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
            "Motorola": "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b|XT1068|XT1092|XT1052",
            "Samsung": "\\bSamsung\\b|SM-G950F|SM-G955F|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C|SM-A310F|GT-I9190|SM-J500FN|SM-G903F|SM-J330F",
            "LG": "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323|M257)|LM-G710",
            "Sony": "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",
            "Asus": "Asus.*Galaxy|PadFone.*Mobile",
            "NokiaLumia": "Lumia [0-9]{3,4}",
            "Micromax": "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
            "Palm": "PalmSource|Palm",
            "Vertu": "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
            "Pantech": "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
            "Fly": "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
            "Wiko": "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
            "iMobile": "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
            "SimValley": "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
            "Wolfgang": "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
            "Alcatel": "Alcatel",
            "Nintendo": "Nintendo (3DS|Switch)",
            "Amoi": "Amoi",
            "INQ": "INQ",
            "OnePlus": "ONEPLUS",
            "GenericPhone": "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"
          },
          "tablets": {
            "iPad": "iPad|iPad.*Mobile",
            "NexusTablet": "Android.*Nexus[\\s]+(7|9|10)",
            "GoogleTablet": "Android.*Pixel C",
            "SamsungTablet": "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y?|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|SM-P555M|SM-P355M|SM-T113NU|SM-T815Y|SM-T585|SM-T285|SM-T825|SM-W708|SM-T835|SM-T830|SM-T837V|SM-T720|SM-T510|SM-T387V",
            "Kindle": "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk/[0-9.]+ like Chrome/[0-9.]+ (?!Mobile)",
            "SurfaceTablet": "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
            "HPTablet": "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
            "AsusTablet": "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b|\\bP024\\b|\\bP00C\\b",
            "BlackBerryTablet": "PlayBook|RIM Tablet",
            "HTCtablet": "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
            "MotorolaTablet": "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
            "NookTablet": "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
            "AcerTablet": "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30",
            "ToshibaTablet": "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
            "LGTablet": "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
            "FujitsuTablet": "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
            "PrestigioTablet": "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",
            "LenovoTablet": "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)|TB-X103F|TB-X304X|TB-X304F|TB-X304L|TB-X505F|TB-X505L|TB-X505X|TB-X605F|TB-X605L|TB-8703F|TB-8703X|TB-8703N|TB-8704N|TB-8704F|TB-8704X|TB-8704V|TB-7304F|TB-7304I|TB-7304X|Tab2A7-10F|Tab2A7-20F|TB2-X30L|YT3-X50L|YT3-X50F|YT3-X50M|YT-X705F|YT-X703F|YT-X703L|YT-X705L|YT-X705X|TB2-X30F|TB2-X30L|TB2-X30M|A2107A-F|A2107A-H|TB3-730F|TB3-730M|TB3-730X|TB-7504F|TB-7504X",
            "DellTablet": "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
            "YarvikTablet": "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
            "MedionTablet": "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
            "ArnovaTablet": "97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
            "IntensoTablet": "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
            "IRUTablet": "M702pro",
            "MegafonTablet": "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
            "EbodaTablet": "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
            "AllViewTablet": "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
            "ArchosTablet": "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
            "AinolTablet": "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
            "NokiaLumiaTablet": "Lumia 2520",
            "SonyTablet": "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP641|SGP612|SOT31|SGP771|SGP611|SGP612|SGP712",
            "PhilipsTablet": "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
            "CubeTablet": "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
            "CobyTablet": "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
            "MIDTablet": "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",
            "MSITablet": "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
            "SMiTTablet": "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
            "RockChipTablet": "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
            "FlyTablet": "IQ310|Fly Vision",
            "bqTablet": "Android.*(bq)?.*\\b(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris ([E|M]10|M8))\\b|Maxwell.*Lite|Maxwell.*Plus",
            "HuaweiTablet": "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim|M2-A01L|BAH-L09|BAH-W09|AGS-L09|CMR-AL19",
            "NecTablet": "\\bN-06D|\\bN-08D",
            "PantechTablet": "Pantech.*P4100",
            "BronchoTablet": "Broncho.*(N701|N708|N802|a710)",
            "VersusTablet": "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
            "ZyncTablet": "z1000|Z99 2G|z930|z990|z909|Z919|z900",
            "PositivoTablet": "TB07STA|TB10STA|TB07FTA|TB10FTA",
            "NabiTablet": "Android.*\\bNabi",
            "KoboTablet": "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
            "DanewTablet": "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
            "TexetTablet": "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
            "PlaystationTablet": "Playstation.*(Portable|Vita)",
            "TrekstorTablet": "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
            "PyleAudioTablet": "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
            "AdvanTablet": "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
            "DanyTechTablet": "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
            "GalapadTablet": "Android.*\\bG1\\b(?!\\))",
            "MicromaxTablet": "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
            "KarbonnTablet": "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
            "AllFineTablet": "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
            "PROSCANTablet": "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
            "YONESTablet": "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
            "ChangJiaTablet": "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
            "GUTablet": "TX-A1301|TX-M9002|Q702|kf026",
            "PointOfViewTablet": "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
            "OvermaxTablet": "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)|Qualcore 1027",
            "HCLTablet": "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
            "DPSTablet": "DPS Dream 9|DPS Dual 7",
            "VistureTablet": "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
            "CrestaTablet": "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
            "MediatekTablet": "\\bMT8125|MT8389|MT8135|MT8377\\b",
            "ConcordeTablet": "Concorde([ ]+)?Tab|ConCorde ReadMan",
            "GoCleverTablet": "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
            "ModecomTablet": "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
            "VoninoTablet": "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
            "ECSTablet": "V07OT2|TM105A|S10OT1|TR10CS1",
            "StorexTablet": "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
            "VodafoneTablet": "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497|VFD 1400",
            "EssentielBTablet": "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
            "RossMoorTablet": "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
            "iMobileTablet": "i-mobile i-note",
            "TolinoTablet": "tolino tab [0-9.]+|tolino shine",
            "AudioSonicTablet": "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
            "AMPETablet": "Android.* A78 ",
            "SkkTablet": "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
            "TecnoTablet": "TECNO P9|TECNO DP8D",
            "JXDTablet": "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
            "iJoyTablet": "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
            "FX2Tablet": "FX2 PAD7|FX2 PAD10",
            "XoroTablet": "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
            "ViewsonicTablet": "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
            "VerizonTablet": "QTAQZ3|QTAIR7|QTAQTZ3|QTASUN1|QTASUN2|QTAXIA1",
            "OdysTablet": "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
            "CaptivaTablet": "CAPTIVA PAD",
            "IconbitTablet": "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
            "TeclastTablet": "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
            "OndaTablet": "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+|V10 \\b4G\\b",
            "JaytechTablet": "TPC-PA762",
            "BlaupunktTablet": "Endeavour 800NG|Endeavour 1010",
            "DigmaTablet": "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
            "EvolioTablet": "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
            "LavaTablet": "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
            "AocTablet": "MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",
            "MpmanTablet": "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",
            "CelkonTablet": "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
            "WolderTablet": "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
            "MediacomTablet": "M-MPI10C3G|M-SP10EG|M-SP10EGP|M-SP10HXAH|M-SP7HXAH|M-SP10HXBH|M-SP8HXAH|M-SP8MXA",
            "MiTablet": "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
            "NibiruTablet": "Nibiru M1|Nibiru Jupiter One",
            "NexoTablet": "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
            "LeaderTablet": "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",
            "UbislateTablet": "UbiSlate[\\s]?7C",
            "PocketBookTablet": "Pocketbook",
            "KocasoTablet": "\\b(TB-1207)\\b",
            "HisenseTablet": "\\b(F5281|E2371)\\b",
            "Hudl": "Hudl HT7S3|Hudl 2",
            "TelstraTablet": "T-Hub2",
            "GenericTablet": "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b|WVT101|TM1088|KT107"
          },
          "oss": {
            "AndroidOS": "Android",
            "BlackBerryOS": "blackberry|\\bBB10\\b|rim tablet os",
            "PalmOS": "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
            "SymbianOS": "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
            "WindowsMobileOS": "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Windows Mobile|Windows Phone [0-9.]+|WCE;",
            "WindowsPhoneOS": "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
            "iOS": "\\biPhone.*Mobile|\\biPod|\\biPad|AppleCoreMedia",
            "iPadOS": "CPU OS 13",
            "MeeGoOS": "MeeGo",
            "MaemoOS": "Maemo",
            "JavaOS": "J2ME/|\\bMIDP\\b|\\bCLDC\\b",
            "webOS": "webOS|hpwOS",
            "badaOS": "\\bBada\\b",
            "BREWOS": "BREW"
          },
          "uas": {
            "Chrome": "\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?",
            "Dolfin": "\\bDolfin\\b",
            "Opera": "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+$|Coast/[0-9.]+",
            "Skyfire": "Skyfire",
            "Edge": "Mobile Safari/[.0-9]* Edge",
            "IE": "IEMobile|MSIEMobile",
            "Firefox": "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS",
            "Bolt": "bolt",
            "TeaShark": "teashark",
            "Blazer": "Blazer",
            "Safari": "Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",
            "WeChat": "\\bMicroMessenger\\b",
            "UCBrowser": "UC.*Browser|UCWEB",
            "baiduboxapp": "baiduboxapp",
            "baidubrowser": "baidubrowser",
            "DiigoBrowser": "DiigoBrowser",
            "Mercury": "\\bMercury\\b",
            "ObigoBrowser": "Obigo",
            "NetFront": "NF-Browser",
            "GenericBrowser": "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",
            "PaleMoon": "Android.*PaleMoon|Mobile.*PaleMoon"
          },
          "props": {
            "Mobile": "Mobile/[VER]",
            "Build": "Build/[VER]",
            "Version": "Version/[VER]",
            "VendorID": "VendorID/[VER]",
            "iPad": "iPad.*CPU[a-z ]+[VER]",
            "iPhone": "iPhone.*CPU[a-z ]+[VER]",
            "iPod": "iPod.*CPU[a-z ]+[VER]",
            "Kindle": "Kindle/[VER]",
            "Chrome": [
              "Chrome/[VER]",
              "CriOS/[VER]",
              "CrMo/[VER]"
            ],
            "Coast": [
              "Coast/[VER]"
            ],
            "Dolfin": "Dolfin/[VER]",
            "Firefox": [
              "Firefox/[VER]",
              "FxiOS/[VER]"
            ],
            "Fennec": "Fennec/[VER]",
            "Edge": "Edge/[VER]",
            "IE": [
              "IEMobile/[VER];",
              "IEMobile [VER]",
              "MSIE [VER];",
              "Trident/[0-9.]+;.*rv:[VER]"
            ],
            "NetFront": "NetFront/[VER]",
            "NokiaBrowser": "NokiaBrowser/[VER]",
            "Opera": [
              " OPR/[VER]",
              "Opera Mini/[VER]",
              "Version/[VER]"
            ],
            "Opera Mini": "Opera Mini/[VER]",
            "Opera Mobi": "Version/[VER]",
            "UCBrowser": [
              "UCWEB[VER]",
              "UC.*Browser/[VER]"
            ],
            "MQQBrowser": "MQQBrowser/[VER]",
            "MicroMessenger": "MicroMessenger/[VER]",
            "baiduboxapp": "baiduboxapp/[VER]",
            "baidubrowser": "baidubrowser/[VER]",
            "SamsungBrowser": "SamsungBrowser/[VER]",
            "Iron": "Iron/[VER]",
            "Safari": [
              "Version/[VER]",
              "Safari/[VER]"
            ],
            "Skyfire": "Skyfire/[VER]",
            "Tizen": "Tizen/[VER]",
            "Webkit": "webkit[ /][VER]",
            "PaleMoon": "PaleMoon/[VER]",
            "Gecko": "Gecko/[VER]",
            "Trident": "Trident/[VER]",
            "Presto": "Presto/[VER]",
            "Goanna": "Goanna/[VER]",
            "iOS": " \\bi?OS\\b [VER][ ;]{1}",
            "Android": "Android [VER]",
            "BlackBerry": [
              "BlackBerry[\\w]+/[VER]",
              "BlackBerry.*Version/[VER]",
              "Version/[VER]"
            ],
            "BREW": "BREW [VER]",
            "Java": "Java/[VER]",
            "Windows Phone OS": [
              "Windows Phone OS [VER]",
              "Windows Phone [VER]"
            ],
            "Windows Phone": "Windows Phone [VER]",
            "Windows CE": "Windows CE/[VER]",
            "Windows NT": "Windows NT [VER]",
            "Symbian": [
              "SymbianOS/[VER]",
              "Symbian/[VER]"
            ],
            "webOS": [
              "webOS/[VER]",
              "hpwOS/[VER];"
            ]
          },
          "utils": {
            "Bot": "Googlebot|facebookexternalhit|Google-AMPHTML|s~amp-validator|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom|contentkingapp",
            "MobileBot": "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2",
            "DesktopMode": "WPDesktop",
            "TV": "SonyDTV|HbbTV",
            "WebKit": "(webkit)[ /]([\\w.]+)",
            "Console": "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|Nintendo Switch|PLAYSTATION|Xbox)\\b",
            "Watch": "SM-V700"
          }
        };
        impl.detectMobileBrowsers = {
          fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
          shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
          tabletPattern: /android|ipad|playbook|silk/i
        };
        var hasOwnProp = Object.prototype.hasOwnProperty, isArray;
        impl.FALLBACK_PHONE = "UnknownPhone";
        impl.FALLBACK_TABLET = "UnknownTablet";
        impl.FALLBACK_MOBILE = "UnknownMobile";
        isArray = "isArray" in Array ? Array.isArray : function(value2) {
          return Object.prototype.toString.call(value2) === "[object Array]";
        };
        function equalIC(a3, b) {
          return a3 != null && b != null && a3.toLowerCase() === b.toLowerCase();
        }
        __name(equalIC, "equalIC");
        function containsIC(array, value2) {
          var valueLC, i2, len = array.length;
          if (!len || !value2) {
            return false;
          }
          valueLC = value2.toLowerCase();
          for (i2 = 0; i2 < len; ++i2) {
            if (valueLC === array[i2].toLowerCase()) {
              return true;
            }
          }
          return false;
        }
        __name(containsIC, "containsIC");
        function convertPropsToRegExp(object) {
          for (var key2 in object) {
            if (hasOwnProp.call(object, key2)) {
              object[key2] = new RegExp(object[key2], "i");
            }
          }
        }
        __name(convertPropsToRegExp, "convertPropsToRegExp");
        function prepareUserAgent(userAgent) {
          return (userAgent || "").substr(0, 500);
        }
        __name(prepareUserAgent, "prepareUserAgent");
        (/* @__PURE__ */ __name(function init() {
          var key2, values, value2, i2, len, verPos, mobileDetectRules = impl.mobileDetectRules;
          for (key2 in mobileDetectRules.props) {
            if (hasOwnProp.call(mobileDetectRules.props, key2)) {
              values = mobileDetectRules.props[key2];
              if (!isArray(values)) {
                values = [values];
              }
              len = values.length;
              for (i2 = 0; i2 < len; ++i2) {
                value2 = values[i2];
                verPos = value2.indexOf("[VER]");
                if (verPos >= 0) {
                  value2 = value2.substring(0, verPos) + "([\\w._\\+]+)" + value2.substring(verPos + 5);
                }
                values[i2] = new RegExp(value2, "i");
              }
              mobileDetectRules.props[key2] = values;
            }
          }
          convertPropsToRegExp(mobileDetectRules.oss);
          convertPropsToRegExp(mobileDetectRules.phones);
          convertPropsToRegExp(mobileDetectRules.tablets);
          convertPropsToRegExp(mobileDetectRules.uas);
          convertPropsToRegExp(mobileDetectRules.utils);
          mobileDetectRules.oss0 = {
            WindowsPhoneOS: mobileDetectRules.oss.WindowsPhoneOS,
            WindowsMobileOS: mobileDetectRules.oss.WindowsMobileOS
          };
        }, "init"))();
        impl.findMatch = function(rules, userAgent) {
          for (var key2 in rules) {
            if (hasOwnProp.call(rules, key2)) {
              if (rules[key2].test(userAgent)) {
                return key2;
              }
            }
          }
          return null;
        };
        impl.findMatches = function(rules, userAgent) {
          var result = [];
          for (var key2 in rules) {
            if (hasOwnProp.call(rules, key2)) {
              if (rules[key2].test(userAgent)) {
                result.push(key2);
              }
            }
          }
          return result;
        };
        impl.getVersionStr = function(propertyName, userAgent) {
          var props = impl.mobileDetectRules.props, patterns, i2, len, match;
          if (hasOwnProp.call(props, propertyName)) {
            patterns = props[propertyName];
            len = patterns.length;
            for (i2 = 0; i2 < len; ++i2) {
              match = patterns[i2].exec(userAgent);
              if (match !== null) {
                return match[1];
              }
            }
          }
          return null;
        };
        impl.getVersion = function(propertyName, userAgent) {
          var version = impl.getVersionStr(propertyName, userAgent);
          return version ? impl.prepareVersionNo(version) : NaN;
        };
        impl.prepareVersionNo = function(version) {
          var numbers;
          numbers = version.split(/[a-z._ \/\-]/i);
          if (numbers.length === 1) {
            version = numbers[0];
          }
          if (numbers.length > 1) {
            version = numbers[0] + ".";
            numbers.shift();
            version += numbers.join("");
          }
          return Number(version);
        };
        impl.isMobileFallback = function(userAgent) {
          return impl.detectMobileBrowsers.fullPattern.test(userAgent) || impl.detectMobileBrowsers.shortPattern.test(userAgent.substr(0, 4));
        };
        impl.isTabletFallback = function(userAgent) {
          return impl.detectMobileBrowsers.tabletPattern.test(userAgent);
        };
        impl.prepareDetectionCache = function(cache, userAgent, maxPhoneWidth) {
          if (cache.mobile !== undefined2) {
            return;
          }
          var phone, tablet, phoneSized;
          tablet = impl.findMatch(impl.mobileDetectRules.tablets, userAgent);
          if (tablet) {
            cache.mobile = cache.tablet = tablet;
            cache.phone = null;
            return;
          }
          phone = impl.findMatch(impl.mobileDetectRules.phones, userAgent);
          if (phone) {
            cache.mobile = cache.phone = phone;
            cache.tablet = null;
            return;
          }
          if (impl.isMobileFallback(userAgent)) {
            phoneSized = MobileDetect2.isPhoneSized(maxPhoneWidth);
            if (phoneSized === undefined2) {
              cache.mobile = impl.FALLBACK_MOBILE;
              cache.tablet = cache.phone = null;
            } else if (phoneSized) {
              cache.mobile = cache.phone = impl.FALLBACK_PHONE;
              cache.tablet = null;
            } else {
              cache.mobile = cache.tablet = impl.FALLBACK_TABLET;
              cache.phone = null;
            }
          } else if (impl.isTabletFallback(userAgent)) {
            cache.mobile = cache.tablet = impl.FALLBACK_TABLET;
            cache.phone = null;
          } else {
            cache.mobile = cache.tablet = cache.phone = null;
          }
        };
        impl.mobileGrade = function(t) {
          var $isMobile = t.mobile() !== null;
          if (
            // Apple iOS 3.2-5.1 - Tested on the original iPad (4.3 / 5.0), iPad 2 (4.3), iPad 3 (5.1), original iPhone (3.1), iPhone 3 (3.2), 3GS (4.3), 4 (4.3 / 5.0), and 4S (5.1)
            t.os("iOS") && t.version("iPad") >= 4.3 || t.os("iOS") && t.version("iPhone") >= 3.1 || t.os("iOS") && t.version("iPod") >= 3.1 || // Android 2.1-2.3 - Tested on the HTC Incredible (2.2), original Droid (2.2), HTC Aria (2.1), Google Nexus S (2.3). Functional on 1.5 & 1.6 but performance may be sluggish, tested on Google G1 (1.5)
            // Android 3.1 (Honeycomb)  - Tested on the Samsung Galaxy Tab 10.1 and Motorola XOOM
            // Android 4.0 (ICS)  - Tested on a Galaxy Nexus. Note: transition performance can be poor on upgraded devices
            // Android 4.1 (Jelly Bean)  - Tested on a Galaxy Nexus and Galaxy 7
            t.version("Android") > 2.1 && t.is("Webkit") || // Windows Phone 7-7.5 - Tested on the HTC Surround (7.0) HTC Trophy (7.5), LG-E900 (7.5), Nokia Lumia 800
            t.version("Windows Phone OS") >= 7 || // Blackberry 7 - Tested on BlackBerry Torch 9810
            // Blackberry 6.0 - Tested on the Torch 9800 and Style 9670
            t.is("BlackBerry") && t.version("BlackBerry") >= 6 || // Blackberry Playbook (1.0-2.0) - Tested on PlayBook
            t.match("Playbook.*Tablet") || // Palm WebOS (1.4-2.0) - Tested on the Palm Pixi (1.4), Pre (1.4), Pre 2 (2.0)
            t.version("webOS") >= 1.4 && t.match("Palm|Pre|Pixi") || // Palm WebOS 3.0  - Tested on HP TouchPad
            t.match("hp.*TouchPad") || // Firefox Mobile (12 Beta) - Tested on Android 2.3 device
            t.is("Firefox") && t.version("Firefox") >= 12 || // Chrome for Android - Tested on Android 4.0, 4.1 device
            t.is("Chrome") && t.is("AndroidOS") && t.version("Android") >= 4 || // Skyfire 4.1 - Tested on Android 2.3 device
            t.is("Skyfire") && t.version("Skyfire") >= 4.1 && t.is("AndroidOS") && t.version("Android") >= 2.3 || // Opera Mobile 11.5-12: Tested on Android 2.3
            t.is("Opera") && t.version("Opera Mobi") > 11 && t.is("AndroidOS") || // Meego 1.2 - Tested on Nokia 950 and N9
            t.is("MeeGoOS") || // Tizen (pre-release) - Tested on early hardware
            t.is("Tizen") || // Samsung Bada 2.0 - Tested on a Samsung Wave 3, Dolphin browser
            // @todo: more tests here!
            t.is("Dolfin") && t.version("Bada") >= 2 || // UC Browser - Tested on Android 2.3 device
            (t.is("UC Browser") || t.is("Dolfin")) && t.version("Android") >= 2.3 || // Kindle 3 and Fire  - Tested on the built-in WebKit browser for each
            (t.match("Kindle Fire") || t.is("Kindle") && t.version("Kindle") >= 3) || // Nook Color 1.4.1 - Tested on original Nook Color, not Nook Tablet
            t.is("AndroidOS") && t.is("NookTablet") || // Chrome Desktop 11-21 - Tested on OS X 10.7 and Windows 7
            t.version("Chrome") >= 11 && !$isMobile || // Safari Desktop 4-5 - Tested on OS X 10.7 and Windows 7
            t.version("Safari") >= 5 && !$isMobile || // Firefox Desktop 4-13 - Tested on OS X 10.7 and Windows 7
            t.version("Firefox") >= 4 && !$isMobile || // Internet Explorer 7-9 - Tested on Windows XP, Vista and 7
            t.version("MSIE") >= 7 && !$isMobile || // Opera Desktop 10-12 - Tested on OS X 10.7 and Windows 7
            // @reference: http://my.opera.com/community/openweb/idopera/
            t.version("Opera") >= 10 && !$isMobile
          ) {
            return "A";
          }
          if (t.os("iOS") && t.version("iPad") < 4.3 || t.os("iOS") && t.version("iPhone") < 3.1 || t.os("iOS") && t.version("iPod") < 3.1 || // Blackberry 5.0: Tested on the Storm 2 9550, Bold 9770
          t.is("Blackberry") && t.version("BlackBerry") >= 5 && t.version("BlackBerry") < 6 || //Opera Mini (5.0-6.5) - Tested on iOS 3.2/4.3 and Android 2.3
          t.version("Opera Mini") >= 5 && t.version("Opera Mini") <= 6.5 && (t.version("Android") >= 2.3 || t.is("iOS")) || // Nokia Symbian^3 - Tested on Nokia N8 (Symbian^3), C7 (Symbian^3), also works on N97 (Symbian^1)
          t.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3") || // @todo: report this (tested on Nokia N71)
          t.version("Opera Mobi") >= 11 && t.is("SymbianOS")) {
            return "B";
          }
          if (
            // Blackberry 4.x - Tested on the Curve 8330
            t.version("BlackBerry") < 5 || // Windows Mobile - Tested on the HTC Leo (WinMo 5.2)
            t.match("MSIEMobile|Windows CE.*Mobile") || t.version("Windows Mobile") <= 5.2
          ) {
            return "C";
          }
          return "C";
        };
        impl.detectOS = function(ua) {
          return impl.findMatch(impl.mobileDetectRules.oss0, ua) || impl.findMatch(impl.mobileDetectRules.oss, ua);
        };
        impl.getDeviceSmallerSide = function() {
          return window.screen.width < window.screen.height ? window.screen.width : window.screen.height;
        };
        function MobileDetect2(userAgent, maxPhoneWidth) {
          this.ua = prepareUserAgent(userAgent);
          this._cache = {};
          this.maxPhoneWidth = maxPhoneWidth || 600;
        }
        __name(MobileDetect2, "MobileDetect");
        MobileDetect2.prototype = {
          constructor: MobileDetect2,
          /**
           * Returns the detected phone or tablet type or <tt>null</tt> if it is not a mobile device.
           * <br>
           * For a list of possible return values see {@link MobileDetect#phone} and {@link MobileDetect#tablet}.<br>
           * <br>
           * If the device is not detected by the regular expressions from Mobile-Detect, a test is made against
           * the patterns of <a href="http://detectmobilebrowsers.com/">detectmobilebrowsers.com</a>. If this test
           * is positive, a value of <code>UnknownPhone</code>, <code>UnknownTablet</code> or
           * <code>UnknownMobile</code> is returned.<br>
           * When used in browser, the decision whether phone or tablet is made based on <code>screen.width/height</code>.<br>
           * <br>
           * When used server-side (node.js), there is no way to tell the difference between <code>UnknownTablet</code>
           * and <code>UnknownMobile</code>, so you will get <code>UnknownMobile</code> here.<br>
           * Be aware that since v1.0.0 in this special case you will get <code>UnknownMobile</code> only for:
           * {@link MobileDetect#mobile}, not for {@link MobileDetect#phone} and {@link MobileDetect#tablet}.
           * In versions before v1.0.0 all 3 methods returned <code>UnknownMobile</code> which was tedious to use.
           * <br>
           * In most cases you will use the return value just as a boolean.
           *
           * @returns {String} the key for the phone family or tablet family, e.g. "Nexus".
           * @function MobileDetect#mobile
           */
          mobile: /* @__PURE__ */ __name(function() {
            impl.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
            return this._cache.mobile;
          }, "mobile"),
          /**
           * Returns the detected phone type/family string or <tt>null</tt>.
           * <br>
           * The returned tablet (family or producer) is one of following keys:<br>
           * <br><tt>iPhone, BlackBerry, HTC, Nexus, Dell, Motorola, Samsung, LG, Sony, Asus,
           * NokiaLumia, Micromax, Palm, Vertu, Pantech, Fly, Wiko, iMobile, SimValley,
           * Wolfgang, Alcatel, Nintendo, Amoi, INQ, OnePlus, GenericPhone</tt><br>
           * <br>
           * If the device is not detected by the regular expressions from Mobile-Detect, a test is made against
           * the patterns of <a href="http://detectmobilebrowsers.com/">detectmobilebrowsers.com</a>. If this test
           * is positive, a value of <code>UnknownPhone</code> or <code>UnknownMobile</code> is returned.<br>
           * When used in browser, the decision whether phone or tablet is made based on <code>screen.width/height</code>.<br>
           * <br>
           * When used server-side (node.js), there is no way to tell the difference between <code>UnknownTablet</code>
           * and <code>UnknownMobile</code>, so you will get <code>null</code> here, while {@link MobileDetect#mobile}
           * will return <code>UnknownMobile</code>.<br>
           * Be aware that since v1.0.0 in this special case you will get <code>UnknownMobile</code> only for:
           * {@link MobileDetect#mobile}, not for {@link MobileDetect#phone} and {@link MobileDetect#tablet}.
           * In versions before v1.0.0 all 3 methods returned <code>UnknownMobile</code> which was tedious to use.
           * <br>
           * In most cases you will use the return value just as a boolean.
           *
           * @returns {String} the key of the phone family or producer, e.g. "iPhone"
           * @function MobileDetect#phone
           */
          phone: /* @__PURE__ */ __name(function() {
            impl.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
            return this._cache.phone;
          }, "phone"),
          /**
           * Returns the detected tablet type/family string or <tt>null</tt>.
           * <br>
           * The returned tablet (family or producer) is one of following keys:<br>
           * <br><tt>iPad, NexusTablet, GoogleTablet, SamsungTablet, Kindle, SurfaceTablet,
           * HPTablet, AsusTablet, BlackBerryTablet, HTCtablet, MotorolaTablet, NookTablet,
           * AcerTablet, ToshibaTablet, LGTablet, FujitsuTablet, PrestigioTablet,
           * LenovoTablet, DellTablet, YarvikTablet, MedionTablet, ArnovaTablet,
           * IntensoTablet, IRUTablet, MegafonTablet, EbodaTablet, AllViewTablet,
           * ArchosTablet, AinolTablet, NokiaLumiaTablet, SonyTablet, PhilipsTablet,
           * CubeTablet, CobyTablet, MIDTablet, MSITablet, SMiTTablet, RockChipTablet,
           * FlyTablet, bqTablet, HuaweiTablet, NecTablet, PantechTablet, BronchoTablet,
           * VersusTablet, ZyncTablet, PositivoTablet, NabiTablet, KoboTablet, DanewTablet,
           * TexetTablet, PlaystationTablet, TrekstorTablet, PyleAudioTablet, AdvanTablet,
           * DanyTechTablet, GalapadTablet, MicromaxTablet, KarbonnTablet, AllFineTablet,
           * PROSCANTablet, YONESTablet, ChangJiaTablet, GUTablet, PointOfViewTablet,
           * OvermaxTablet, HCLTablet, DPSTablet, VistureTablet, CrestaTablet,
           * MediatekTablet, ConcordeTablet, GoCleverTablet, ModecomTablet, VoninoTablet,
           * ECSTablet, StorexTablet, VodafoneTablet, EssentielBTablet, RossMoorTablet,
           * iMobileTablet, TolinoTablet, AudioSonicTablet, AMPETablet, SkkTablet,
           * TecnoTablet, JXDTablet, iJoyTablet, FX2Tablet, XoroTablet, ViewsonicTablet,
           * VerizonTablet, OdysTablet, CaptivaTablet, IconbitTablet, TeclastTablet,
           * OndaTablet, JaytechTablet, BlaupunktTablet, DigmaTablet, EvolioTablet,
           * LavaTablet, AocTablet, MpmanTablet, CelkonTablet, WolderTablet, MediacomTablet,
           * MiTablet, NibiruTablet, NexoTablet, LeaderTablet, UbislateTablet,
           * PocketBookTablet, KocasoTablet, HisenseTablet, Hudl, TelstraTablet,
           * GenericTablet</tt><br>
           * <br>
           * If the device is not detected by the regular expressions from Mobile-Detect, a test is made against
           * the patterns of <a href="http://detectmobilebrowsers.com/">detectmobilebrowsers.com</a>. If this test
           * is positive, a value of <code>UnknownTablet</code> or <code>UnknownMobile</code> is returned.<br>
           * When used in browser, the decision whether phone or tablet is made based on <code>screen.width/height</code>.<br>
           * <br>
           * When used server-side (node.js), there is no way to tell the difference between <code>UnknownTablet</code>
           * and <code>UnknownMobile</code>, so you will get <code>null</code> here, while {@link MobileDetect#mobile}
           * will return <code>UnknownMobile</code>.<br>
           * Be aware that since v1.0.0 in this special case you will get <code>UnknownMobile</code> only for:
           * {@link MobileDetect#mobile}, not for {@link MobileDetect#phone} and {@link MobileDetect#tablet}.
           * In versions before v1.0.0 all 3 methods returned <code>UnknownMobile</code> which was tedious to use.
           * <br>
           * In most cases you will use the return value just as a boolean.
           *
           * @returns {String} the key of the tablet family or producer, e.g. "SamsungTablet"
           * @function MobileDetect#tablet
           */
          tablet: /* @__PURE__ */ __name(function() {
            impl.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
            return this._cache.tablet;
          }, "tablet"),
          /**
           * Returns the (first) detected user-agent string or <tt>null</tt>.
           * <br>
           * The returned user-agent is one of following keys:<br>
           * <br><tt>Chrome, Dolfin, Opera, Skyfire, Edge, IE, Firefox, Bolt, TeaShark, Blazer,
           * Safari, WeChat, UCBrowser, baiduboxapp, baidubrowser, DiigoBrowser, Mercury,
           * ObigoBrowser, NetFront, GenericBrowser, PaleMoon</tt><br>
           * <br>
           * In most cases calling {@link MobileDetect#userAgent} will be sufficient. But there are rare
           * cases where a mobile device pretends to be more than one particular browser. You can get the
           * list of all matches with {@link MobileDetect#userAgents} or check for a particular value by
           * providing one of the defined keys as first argument to {@link MobileDetect#is}.
           *
           * @returns {String} the key for the detected user-agent or <tt>null</tt>
           * @function MobileDetect#userAgent
           */
          userAgent: /* @__PURE__ */ __name(function() {
            if (this._cache.userAgent === undefined2) {
              this._cache.userAgent = impl.findMatch(impl.mobileDetectRules.uas, this.ua);
            }
            return this._cache.userAgent;
          }, "userAgent"),
          /**
           * Returns all detected user-agent strings.
           * <br>
           * The array is empty or contains one or more of following keys:<br>
           * <br><tt>Chrome, Dolfin, Opera, Skyfire, Edge, IE, Firefox, Bolt, TeaShark, Blazer,
           * Safari, WeChat, UCBrowser, baiduboxapp, baidubrowser, DiigoBrowser, Mercury,
           * ObigoBrowser, NetFront, GenericBrowser, PaleMoon</tt><br>
           * <br>
           * In most cases calling {@link MobileDetect#userAgent} will be sufficient. But there are rare
           * cases where a mobile device pretends to be more than one particular browser. You can get the
           * list of all matches with {@link MobileDetect#userAgents} or check for a particular value by
           * providing one of the defined keys as first argument to {@link MobileDetect#is}.
           *
           * @returns {Array} the array of detected user-agent keys or <tt>[]</tt>
           * @function MobileDetect#userAgents
           */
          userAgents: /* @__PURE__ */ __name(function() {
            if (this._cache.userAgents === undefined2) {
              this._cache.userAgents = impl.findMatches(impl.mobileDetectRules.uas, this.ua);
            }
            return this._cache.userAgents;
          }, "userAgents"),
          /**
           * Returns the detected operating system string or <tt>null</tt>.
           * <br>
           * The operating system is one of following keys:<br>
           * <br><tt>AndroidOS, BlackBerryOS, PalmOS, SymbianOS, WindowsMobileOS, WindowsPhoneOS,
           * iOS, iPadOS, MeeGoOS, MaemoOS, JavaOS, webOS, badaOS, BREWOS</tt><br>
           *
           * @returns {String} the key for the detected operating system.
           * @function MobileDetect#os
           */
          os: /* @__PURE__ */ __name(function() {
            if (this._cache.os === undefined2) {
              this._cache.os = impl.detectOS(this.ua);
            }
            return this._cache.os;
          }, "os"),
          /**
           * Get the version (as Number) of the given property in the User-Agent.
           * <br>
           * Will return a float number. (eg. 2_0 will return 2.0, 4.3.1 will return 4.31)
           *
           * @param {String} key a key defining a thing which has a version.<br>
           *        You can use one of following keys:<br>
           * <br><tt>Mobile, Build, Version, VendorID, iPad, iPhone, iPod, Kindle, Chrome, Coast,
           * Dolfin, Firefox, Fennec, Edge, IE, NetFront, NokiaBrowser, Opera, Opera Mini,
           * Opera Mobi, UCBrowser, MQQBrowser, MicroMessenger, baiduboxapp, baidubrowser,
           * SamsungBrowser, Iron, Safari, Skyfire, Tizen, Webkit, PaleMoon, Gecko, Trident,
           * Presto, Goanna, iOS, Android, BlackBerry, BREW, Java, Windows Phone OS, Windows
           * Phone, Windows CE, Windows NT, Symbian, webOS</tt><br>
           *
           * @returns {Number} the version as float or <tt>NaN</tt> if User-Agent doesn't contain this version.
           *          Be careful when comparing this value with '==' operator!
           * @function MobileDetect#version
           */
          version: /* @__PURE__ */ __name(function(key2) {
            return impl.getVersion(key2, this.ua);
          }, "version"),
          /**
           * Get the version (as String) of the given property in the User-Agent.
           * <br>
           *
           * @param {String} key a key defining a thing which has a version.<br>
           *        You can use one of following keys:<br>
           * <br><tt>Mobile, Build, Version, VendorID, iPad, iPhone, iPod, Kindle, Chrome, Coast,
           * Dolfin, Firefox, Fennec, Edge, IE, NetFront, NokiaBrowser, Opera, Opera Mini,
           * Opera Mobi, UCBrowser, MQQBrowser, MicroMessenger, baiduboxapp, baidubrowser,
           * SamsungBrowser, Iron, Safari, Skyfire, Tizen, Webkit, PaleMoon, Gecko, Trident,
           * Presto, Goanna, iOS, Android, BlackBerry, BREW, Java, Windows Phone OS, Windows
           * Phone, Windows CE, Windows NT, Symbian, webOS</tt><br>
           *
           * @returns {String} the "raw" version as String or <tt>null</tt> if User-Agent doesn't contain this version.
           *
           * @function MobileDetect#versionStr
           */
          versionStr: /* @__PURE__ */ __name(function(key2) {
            return impl.getVersionStr(key2, this.ua);
          }, "versionStr"),
          /**
           * Global test key against userAgent, os, phone, tablet and some other properties of userAgent string.
           *
           * @param {String} key the key (case-insensitive) of a userAgent, an operating system, phone or
           *        tablet family.<br>
           *        For a complete list of possible values, see {@link MobileDetect#userAgent},
           *        {@link MobileDetect#os}, {@link MobileDetect#phone}, {@link MobileDetect#tablet}.<br>
           *        Additionally you have following keys:<br>
           * <br><tt>Bot, MobileBot, DesktopMode, TV, WebKit, Console, Watch</tt><br>
           *
           * @returns {boolean} <tt>true</tt> when the given key is one of the defined keys of userAgent, os, phone,
           *                    tablet or one of the listed additional keys, otherwise <tt>false</tt>
           * @function MobileDetect#is
           */
          is: /* @__PURE__ */ __name(function(key2) {
            return containsIC(this.userAgents(), key2) || equalIC(key2, this.os()) || equalIC(key2, this.phone()) || equalIC(key2, this.tablet()) || containsIC(impl.findMatches(impl.mobileDetectRules.utils, this.ua), key2);
          }, "is"),
          /**
           * Do a quick test against navigator::userAgent.
           *
           * @param {String|RegExp} pattern the pattern, either as String or RegExp
           *                        (a string will be converted to a case-insensitive RegExp).
           * @returns {boolean} <tt>true</tt> when the pattern matches, otherwise <tt>false</tt>
           * @function MobileDetect#match
           */
          match: /* @__PURE__ */ __name(function(pattern) {
            if (!(pattern instanceof RegExp)) {
              pattern = new RegExp(pattern, "i");
            }
            return pattern.test(this.ua);
          }, "match"),
          /**
           * Checks whether the mobile device can be considered as phone regarding <code>screen.width</code>.
           * <br>
           * Obviously this method makes sense in browser environments only (not for Node.js)!
           * @param {number} [maxPhoneWidth] the maximum logical pixels (aka. CSS-pixels) to be considered as phone.<br>
           *        The argument is optional and if not present or falsy, the value of the constructor is taken.
           * @returns {boolean|undefined} <code>undefined</code> if screen size wasn't detectable, else <code>true</code>
           *          when screen.width is less or equal to maxPhoneWidth, otherwise <code>false</code>.<br>
           *          Will always return <code>undefined</code> server-side.
           */
          isPhoneSized: /* @__PURE__ */ __name(function(maxPhoneWidth) {
            return MobileDetect2.isPhoneSized(maxPhoneWidth || this.maxPhoneWidth);
          }, "isPhoneSized"),
          /**
           * Returns the mobile grade ('A', 'B', 'C').
           *
           * @returns {String} one of the mobile grades ('A', 'B', 'C').
           * @function MobileDetect#mobileGrade
           */
          mobileGrade: /* @__PURE__ */ __name(function() {
            if (this._cache.grade === undefined2) {
              this._cache.grade = impl.mobileGrade(this);
            }
            return this._cache.grade;
          }, "mobileGrade")
        };
        if (typeof window !== "undefined" && window.screen) {
          MobileDetect2.isPhoneSized = function(maxPhoneWidth) {
            return maxPhoneWidth < 0 ? undefined2 : impl.getDeviceSmallerSide() <= maxPhoneWidth;
          };
        } else {
          MobileDetect2.isPhoneSized = function() {
          };
        }
        MobileDetect2._impl = impl;
        MobileDetect2.version = "1.4.4 2019-09-21";
        return MobileDetect2;
      });
    })(function(undefined2) {
      if (typeof module !== "undefined" && module.exports) {
        return function(factory) {
          module.exports = factory();
        };
      } else if (typeof define === "function" && define.amd) {
        return define;
      } else if (typeof window !== "undefined") {
        return function(factory) {
          window.MobileDetect = factory();
        };
      } else {
        throw new Error("unknown environment");
      }
    }());
  }
});

// scripts/path.ux/scripts/platforms/electron/electron_api.js
var electron_api_exports = {};
__export(electron_api_exports, {
  ElectronMenu: () => ElectronMenu,
  ElectronMenuItem: () => ElectronMenuItem,
  buildElectronHotkey: () => buildElectronHotkey,
  buildElectronMenu: () => buildElectronMenu,
  checkInit: () => checkInit,
  getNativeIcon: () => getNativeIcon,
  iconcache: () => iconcache,
  initMenuBar: () => initMenuBar,
  platform: () => platform,
  wrapRemoteCallback: () => wrapRemoteCallback
});

// scripts/path.ux/scripts/path-controller/util/util.js
var util_exports = {};
__export(util_exports, {
  ArrayPool: () => ArrayPool,
  DivLogger: () => DivLogger,
  FastHash: () => FastHash,
  HashDigest: () => HashDigest,
  HashIter: () => HashIter,
  IDGen: () => IDGen,
  IDMap: () => IDMap,
  ImageReader: () => ImageReader,
  MapIter: () => MapIter,
  MersenneRandom: () => MersenneRandom,
  MinHeapQueue: () => MinHeapQueue,
  MovingAvg: () => MovingAvg,
  PendingTimeoutPromises: () => PendingTimeoutPromises,
  Queue: () => Queue,
  SetIter: () => SetIter,
  SmartConsole: () => SmartConsole,
  SmartConsoleContext: () => SmartConsoleContext,
  TimeoutPromise: () => TimeoutPromise,
  atob: () => atob2,
  btoa: () => btoa2,
  cachering: () => cachering2,
  color2css: () => color2css2,
  compress: () => compress,
  console: () => console2,
  count: () => count,
  decompress: () => decompress,
  fetch_file: () => fetch_file,
  formatNumberUI: () => formatNumberUI,
  getAllKeys: () => getAllKeys,
  getClassParent: () => getClassParent,
  hashjoin: () => hashjoin,
  hashtable: () => hashtable,
  isDenormal: () => isDenormal,
  isMobile: () => isMobile,
  list: () => list3,
  map: () => map,
  merge: () => merge,
  pollTimer: () => pollTimer,
  print_stack: () => print_stack,
  random: () => random,
  seed: () => seed,
  set: () => set2,
  strhash: () => strhash,
  termColor: () => termColor2,
  termColorMap: () => termColorMap2,
  termPrint: () => termPrint2,
  test_fasthash: () => test_fasthash,
  time_ms: () => time_ms,
  timers: () => timers,
  undefinedForGC: () => undefinedForGC
});

// scripts/path.ux/scripts/path-controller/util/polyfill.js
if (typeof window === "undefined" && typeof global !== "undefined") {
  global.window = global;
}
(function() {
  let visitgen = 0;
  window.destroyAllCSS = function() {
    visitgen++;
    let visit = /* @__PURE__ */ __name((n) => {
      if (n.__visit === visitgen) {
        return;
      }
      n.__visit = visitgen;
      if (n.tagName === "STYLE") {
        n.textContents = "";
      }
      if (n.style) {
        for (let k2 in n.style) {
          try {
            n.style[k2] = "";
          } catch (error) {
          }
        }
      }
      if (!n.childNodes) {
        return;
      }
      for (let c of n.childNodes) {
        visit(c);
      }
    }, "visit");
    visit(document.head);
    visit(document.body);
    for (let sheet of document.styleSheets) {
      for (let i2 = 0; i2 < sheet.rules.length; i2++) {
        sheet.removeRule(sheet.rules[0]);
      }
    }
  };
})();
window.eventDebugModule = function() {
  "use strict";
  return {
    start() {
      window.debugEventLists = {};
      window.debugEventList = [];
      this._addEventListener = EventTarget.prototype.addEventListener;
      this._removeEventListener = EventTarget.prototype.removeEventListener;
      this._dispatchEvent = EventTarget.prototype.dispatchEvent;
      EventTarget.prototype.addEventListener = this.onadd;
      EventTarget.prototype.removeEventListener = this.onrem;
      EventTarget.prototype.dispatchEvent = this.ondispatch;
    },
    add(type, data) {
      if (!(type in debugEventLists)) {
        debugEventLists[type] = [];
      }
      debugEventLists[type].push(data);
    },
    ondispatch() {
      let a3 = arguments;
      eventDebugModule.add("Dispatch", {
        event: a3[0],
        thisvar: a3[4],
        line: a3[5],
        filename: a3[6].replace(/\\/g, "/"),
        filepath: location.origin + a3[6].replace(/\\/g, "/") + ":" + a3[5],
        ownerpath: a3[7]
      });
      return eventDebugModule._dispatchEvent.apply(this, arguments);
    },
    onadd() {
      let a3 = arguments;
      eventDebugModule.add("Add", {
        type: a3[0],
        cb: a3[1],
        args: a3[2],
        thisvar: a3[4],
        line: a3[5],
        filename: a3[6].replace(/\\/g, "/"),
        filepath: location.origin + a3[6].replace(/\\/g, "/") + ":" + a3[5],
        ownerpath: a3[7]
      });
      return eventDebugModule._addEventListener.apply(this, arguments);
    },
    pruneConnected() {
      for (let k2 in debugEventLists) {
        let list4 = debugEventLists[k2];
        for (let i2 = 0; i2 < list4.length; i2++) {
          let e2 = list4[i2];
          if (!e2.thisvar || !(e2.thisvar instanceof Node)) {
            continue;
          }
          if (!e2.thisvar.isConnected) {
            list4[i2] = list4[list4.length - 1];
            list4[list4.length - 1] = void 0;
            list4.length--;
            i2--;
          }
        }
      }
    },
    onrem() {
      let a3 = arguments;
      eventDebugModule.add("Rem", {
        type: a3[0],
        cb: a3[1],
        args: a3[2],
        thisvar: a3[4],
        line: a3[5],
        filename: a3[6].replace(/\\/g, "/"),
        filepath: location.origin + a3[6].replace(/\\/g, "/") + ":" + a3[5],
        ownerpath: a3[7]
      });
      return eventDebugModule._removeEventListener.apply(this, arguments);
    }
  };
}();
if (typeof _debug_event_listeners !== "undefined" && _debug_event_listeners) {
  eventDebugModule.start();
}
if (window._disable_all_listeners) {
  console.warn("Disabling all event listeners");
  EventTarget.prototype.addEventListener = () => {
  };
  EventSource.prototype.addEventListener = () => {
  };
}
if (typeof visualViewport === "undefined") {
  (function() {
    class MyVisualViewport {
      static {
        __name(this, "MyVisualViewport");
      }
      get width() {
        return window.innerWidth;
      }
      get height() {
        return window.innerHeight;
      }
      get offsetLeft() {
        return 0;
      }
      get offsetTop() {
        return 0;
      }
      get pageLeft() {
        return 0;
      }
      get pageTop() {
        return 0;
      }
      get scale() {
        return 1;
      }
    }
    window.visualViewport = new MyVisualViewport();
  })();
}
if (Array.prototype.set === void 0) {
  Array.prototype.set = /* @__PURE__ */ __name(function set4(array) {
    if (arguments.length === 0) {
      return;
    }
    let src, dst, count2;
    if (arguments.length === 0) {
      src = 0;
      dst = 0;
      count2 = array.length;
    } else if (arguments.length === 1) {
      count2 = array.length;
      src = arguments[1];
      dst = 0;
    } else if (arguments.length === 2) {
      src = arguments[1];
      count2 = arguments[2];
    } else if (arguments.length === 3) {
      src = arguments[1];
      dst = arguments[2];
      count2 = arguments[3];
    }
    src = src === void 0 ? 0 : src;
    dst = dst === void 0 ? 0 : dst;
    count2 = count2 === void 0 ? array.length : count2;
    if (count2 < 0) {
      throw new RangeError("Count must be >= zero");
    }
    let len = Math.min(src + count2, array.length) - src;
    if (dst + len > this.length) {
      this.length = dst + len;
    }
    for (let i2 = 0; i2 < len; i2++) {
      this[dst + i2] = array[src + i2];
    }
    return this;
  }, "set");
  Object.defineProperty(Array.prototype, "set", {
    enumerable: false,
    configurable: true
  });
  if (Float64Array.prototype.set === void 0) {
    Float64Array.prototype.set = Array.prototype.set;
    Float32Array.prototype.set = Array.prototype.set;
    Uint8Array.prototype.set = Array.prototype.set;
    Uint8ClampedArray.prototype.set = Array.prototype.set;
    Int32Array.prototype.set = Array.prototype.set;
    Int16Array.prototype.set = Array.prototype.set;
    Int8Array.prototype.set = Array.prototype.set;
  }
}
if (Array.prototype.reject === void 0) {
  Array.prototype.reject = /* @__PURE__ */ __name(function reject(func2) {
    return this.filter((item) => !func2(item));
  }, "reject");
  Object.defineProperty(Array.prototype, "reject", {
    enumerable: false,
    configurable: true
  });
}
if (window.Symbol == void 0) {
  window.Symbol = {
    iterator: "$__iterator__$",
    keystr: "$__keystr__$"
  };
} else if (Symbol.keystr === void 0) {
  Symbol.keystr = Symbol("keystr");
}
if (Math.fract === void 0) {
  Math.fract = /* @__PURE__ */ __name(function fract2(f3) {
    return f3 - Math.floor(f3);
  }, "fract");
}
if (Math.tent === void 0) {
  Math.tent = /* @__PURE__ */ __name(function tent2(f3) {
    return 1 - Math.abs(Math.fract(f3) - 0.5) * 2;
  }, "tent");
}
if (Math.sign === void 0) {
  Math.sign = /* @__PURE__ */ __name(function sign2(f3) {
    return (f3 > 0) * 2 - 1;
  }, "sign");
}
if (Array.prototype.pop_i === void 0) {
  Array.prototype.pop_i = function(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Index out of range");
    }
    while (idx < this.length) {
      this[idx] = this[idx + 1];
      idx++;
    }
    this.length -= 1;
  };
  Object.defineProperty(Array.prototype, "pop_i", {
    enumerable: false,
    configurable: true
  });
}
if (Array.prototype.remove === void 0) {
  Array.prototype.remove = function(item, suppress_error) {
    var i2 = this.indexOf(item);
    if (i2 < 0) {
      if (suppress_error)
        console.trace("Warning: item not in array", item);
      else
        throw new Error("Error: item not in array " + item);
      return;
    }
    this.pop_i(i2);
  };
  Object.defineProperty(Array.prototype, "remove", {
    enumerable: false,
    configurable: true
  });
}
if (String.prototype.contains === void 0) {
  String.prototype.contains = function(substr) {
    return String.search(substr) >= 0;
  };
}
String.prototype[Symbol.keystr] = function() {
  return this;
};
Number.prototype[Symbol.keystr] = Boolean.prototype[Symbol.keystr] = function() {
  return "" + this;
};
Array.prototype[Symbol.keystr] = function() {
  let key2 = "";
  for (let item of this) {
    key2 += item[Symbol.keystr]() + ":";
  }
  return key2;
};

// scripts/path.ux/scripts/path-controller/util/nstructjs_es6.js
var nstructjs_es6_exports = {};
__export(nstructjs_es6_exports, {
  JSONError: () => JSONError,
  STRUCT: () => STRUCT,
  _truncateDollarSign: () => _truncateDollarSign,
  binpack: () => struct_binpack,
  consoleLogger: () => consoleLogger,
  deriveStructManager: () => deriveStructManager,
  filehelper: () => struct_filehelper,
  formatJSON: () => formatJSON,
  getEndian: () => getEndian,
  inherit: () => inherit,
  inlineRegister: () => inlineRegister,
  isRegistered: () => isRegistered,
  manager: () => manager,
  parser: () => struct_parser,
  parseutil: () => struct_parseutil,
  readJSON: () => readJSON,
  readObject: () => readObject,
  register: () => register,
  setAllowOverriding: () => setAllowOverriding,
  setDebugMode: () => setDebugMode,
  setEndian: () => setEndian,
  setTruncateDollarSign: () => setTruncateDollarSign,
  setWarningMode: () => setWarningMode,
  truncateDollarSign: () => truncateDollarSign,
  typesystem: () => struct_typesystem,
  unpack_context: () => unpack_context,
  unregister: () => unregister,
  validateJSON: () => validateJSON,
  validateStructs: () => validateStructs,
  writeJSON: () => writeJSON,
  writeObject: () => writeObject,
  write_scripts: () => write_scripts
});
var colormap = {
  "black": 30,
  "red": 31,
  "green": 32,
  "yellow": 33,
  "blue": 34,
  "magenta": 35,
  "cyan": 36,
  "white": 37,
  "reset": 0,
  "grey": 2,
  "orange": 202,
  "pink": 198,
  "brown": 314,
  "lightred": 91,
  "peach": 210
};
function tab(n, chr = " ") {
  let t = "";
  for (let i2 = 0; i2 < n; i2++) {
    t += chr;
  }
  return t;
}
__name(tab, "tab");
var termColorMap = {};
for (let k2 in colormap) {
  termColorMap[k2] = colormap[k2];
  termColorMap[colormap[k2]] = k2;
}
function termColor(s, c) {
  if (typeof s === "symbol") {
    s = s.toString();
  } else {
    s = "" + s;
  }
  if (c in colormap)
    c = colormap[c];
  if (c > 107) {
    let s2 = "\x1B[38;5;" + c + "m";
    return s2 + s + "\x1B[0m";
  }
  return "\x1B[" + c + "m" + s + "\x1B[0m";
}
__name(termColor, "termColor");
;
function termPrint() {
  let s = "";
  for (let i3 = 0; i3 < arguments.length; i3++) {
    if (i3 > 0) {
      s += " ";
    }
    s += arguments[i3];
  }
  let re1a = /\u001b\[[1-9][0-9]?m/;
  let re1b = /\u001b\[[1-9][0-9];[0-9][0-9]?;[0-9]+m/;
  let re2 = /\u001b\[0m/;
  let endtag = "\x1B[0m";
  function tok(s3, type) {
    return {
      type,
      value: s3
    };
  }
  __name(tok, "tok");
  let tokdef3 = [
    [re1a, "start"],
    [re1b, "start"],
    [re2, "end"]
  ];
  let s2 = s;
  let i2 = 0;
  let tokens2 = [];
  while (s2.length > 0) {
    let ok = false;
    let mintk = void 0, mini = void 0;
    let minslice = void 0, mintype = void 0;
    for (let tk2 of tokdef3) {
      let i3 = s2.search(tk2[0]);
      if (i3 >= 0 && (mini === void 0 || i3 < mini)) {
        minslice = s2.slice(i3, s2.length).match(tk2[0])[0];
        mini = i3;
        mintype = tk2[1];
        mintk = tk2;
        ok = true;
      }
    }
    if (!ok) {
      break;
    }
    if (mini > 0) {
      let chunk = s2.slice(0, mini);
      tokens2.push(tok(chunk, "chunk"));
    }
    s2 = s2.slice(mini + minslice.length, s2.length);
    let t = tok(minslice, mintype);
    tokens2.push(t);
  }
  if (s2.length > 0) {
    tokens2.push(tok(s2, "chunk"));
  }
  let stack = [];
  let cur;
  let out = "";
  for (let t of tokens2) {
    if (t.type === "chunk") {
      out += t.value;
    } else if (t.type === "start") {
      stack.push(cur);
      cur = t.value;
      out += t.value;
    } else if (t.type === "end") {
      cur = stack.pop();
      if (cur) {
        out += cur;
      } else {
        out += endtag;
      }
    }
  }
  return out;
}
__name(termPrint, "termPrint");
function list2(iter) {
  let ret2 = [];
  for (let item of iter) {
    ret2.push(item);
  }
  return ret2;
}
__name(list2, "list");
var util = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  tab,
  termColorMap,
  termColor,
  termPrint,
  list: list2
});
"use strict";
function print_lines(ld, lineno, col, printColors, token3) {
  let buf = "";
  let lines = ld.split("\n");
  let istart = Math.max(lineno - 5, 0);
  let iend = Math.min(lineno + 3, lines.length);
  let color = printColors ? (c) => c : termColor;
  for (let i2 = istart; i2 < iend; i2++) {
    let l = "" + (i2 + 1);
    while (l.length < 3) {
      l = " " + l;
    }
    l += `: ${lines[i2]}
`;
    if (i2 === lineno && token3 && token3.value.length === 1) {
      l = l.slice(0, col + 5) + color(l[col + 5], "yellow") + l.slice(col + 6, l.length);
    }
    buf += l;
    if (i2 === lineno) {
      let colstr = "     ";
      for (let i3 = 0; i3 < col; i3++) {
        colstr += " ";
      }
      colstr += color("^", "red");
      buf += colstr + "\n";
    }
  }
  buf = "------------------\n" + buf + "\n==================\n";
  return buf;
}
__name(print_lines, "print_lines");
var token = class {
  static {
    __name(this, "token");
  }
  constructor(type, val2, lexpos, lineno, lexer4, parser3, col) {
    this.type = type;
    this.value = val2;
    this.lexpos = lexpos;
    this.lineno = lineno;
    this.col = col;
    this.lexer = lexer4;
    this.parser = parser3;
  }
  toString() {
    if (this.value !== void 0)
      return "token(type=" + this.type + ", value='" + this.value + "')";
    else
      return "token(type=" + this.type + ")";
  }
};
var tokdef = class {
  static {
    __name(this, "tokdef");
  }
  constructor(name, regexpr, func2, example) {
    this.name = name;
    this.re = regexpr;
    this.func = func2;
    this.example = example;
    if (example === void 0 && regexpr) {
      let s = "" + regexpr;
      if (s.startsWith("/") && s.endsWith("/")) {
        s = s.slice(1, s.length - 1);
      }
      if (s.startsWith("\\")) {
        s = s.slice(1, s.length);
      }
      s = s.trim();
      if (s.length === 1) {
        this.example = s;
      }
    }
  }
};
var PUTIL_ParseError = class extends Error {
  static {
    __name(this, "PUTIL_ParseError");
  }
  constructor(msg) {
    super();
  }
};
var lexer = class {
  static {
    __name(this, "lexer");
  }
  constructor(tokdef3, errfunc) {
    this.tokdef = tokdef3;
    this.tokens = new Array();
    this.lexpos = 0;
    this.lexdata = "";
    this.colmap = void 0;
    this.lineno = 0;
    this.printTokens = false;
    this.linestart = 0;
    this.errfunc = errfunc;
    this.linemap = void 0;
    this.tokints = {};
    for (let i2 = 0; i2 < tokdef3.length; i2++) {
      this.tokints[tokdef3[i2].name] = i2;
    }
    this.statestack = [["__main__", 0]];
    this.states = { "__main__": [tokdef3, errfunc] };
    this.statedata = 0;
    this.logger = function() {
      console.log(...arguments);
    };
  }
  add_state(name, tokdef3, errfunc) {
    if (errfunc === void 0) {
      errfunc = /* @__PURE__ */ __name(function(lexer4) {
        return true;
      }, "errfunc");
    }
    this.states[name] = [tokdef3, errfunc];
  }
  tok_int(name) {
  }
  push_state(state, statedata) {
    this.statestack.push([state, statedata]);
    state = this.states[state];
    this.statedata = statedata;
    this.tokdef = state[0];
    this.errfunc = state[1];
  }
  pop_state() {
    let item = this.statestack[this.statestack.length - 1];
    let state = this.states[item[0]];
    this.tokdef = state[0];
    this.errfunc = state[1];
    this.statedata = item[1];
  }
  input(str) {
    let linemap = this.linemap = new Array(str.length);
    let lineno = 0;
    let col = 0;
    let colmap = this.colmap = new Array(str.length);
    for (let i2 = 0; i2 < str.length; i2++, col++) {
      let c = str[i2];
      linemap[i2] = lineno;
      colmap[i2] = col;
      if (c === "\n") {
        lineno++;
        col = 0;
      }
    }
    while (this.statestack.length > 1) {
      this.pop_state();
    }
    this.lexdata = str;
    this.lexpos = 0;
    this.lineno = 0;
    this.tokens = new Array();
    this.peeked_tokens = [];
  }
  error() {
    if (this.errfunc !== void 0 && !this.errfunc(this))
      return;
    let safepos = Math.min(this.lexpos, this.lexdata.length - 1);
    let line2 = this.linemap[safepos];
    let col = this.colmap[safepos];
    let s = print_lines(this.lexdata, line2, col, true);
    this.logger("  " + s);
    this.logger("Syntax error near line " + (this.lineno + 1));
    let next = Math.min(this.lexpos + 8, this.lexdata.length);
    throw new PUTIL_ParseError("Parse error");
  }
  peek() {
    let tok = this.next(true);
    if (tok === void 0)
      return void 0;
    this.peeked_tokens.push(tok);
    return tok;
  }
  peeknext() {
    if (this.peeked_tokens.length > 0) {
      return this.peeked_tokens[0];
    }
    return this.peek();
  }
  at_end() {
    return this.lexpos >= this.lexdata.length && this.peeked_tokens.length === 0;
  }
  //ignore_peek is optional, false
  next(ignore_peek) {
    if (!ignore_peek && this.peeked_tokens.length > 0) {
      let tok2 = this.peeked_tokens[0];
      this.peeked_tokens.shift();
      if (!ignore_peek && this.printTokens) {
        this.logger("" + tok2);
      }
      return tok2;
    }
    if (this.lexpos >= this.lexdata.length)
      return void 0;
    let ts = this.tokdef;
    let tlen = ts.length;
    let lexdata = this.lexdata.slice(this.lexpos, this.lexdata.length);
    let results = [];
    for (var i2 = 0; i2 < tlen; i2++) {
      let t = ts[i2];
      if (t.re === void 0)
        continue;
      let res = t.re.exec(lexdata);
      if (res !== null && res !== void 0 && res.index === 0) {
        results.push([t, res]);
      }
    }
    let max_res = 0;
    let theres = void 0;
    for (var i2 = 0; i2 < results.length; i2++) {
      let res = results[i2];
      if (res[1][0].length > max_res) {
        theres = res;
        max_res = res[1][0].length;
      }
    }
    if (theres === void 0) {
      this.error();
      return;
    }
    let def = theres[0];
    let col = this.colmap[Math.min(this.lexpos, this.lexdata.length - 1)];
    if (this.lexpos < this.lexdata.length) {
      this.lineno = this.linemap[this.lexpos];
    }
    let tok = new token(def.name, theres[1][0], this.lexpos, this.lineno, this, void 0, col);
    this.lexpos += tok.value.length;
    if (def.func) {
      tok = def.func(tok);
      if (tok === void 0) {
        return this.next();
      }
    }
    if (!ignore_peek && this.printTokens) {
      this.logger("" + tok);
    }
    return tok;
  }
};
var parser = class {
  static {
    __name(this, "parser");
  }
  constructor(lexer4, errfunc) {
    this.lexer = lexer4;
    this.errfunc = errfunc;
    this.start = void 0;
    this.logger = function() {
      console.log(...arguments);
    };
  }
  parse(data, err_on_unconsumed) {
    if (err_on_unconsumed === void 0)
      err_on_unconsumed = true;
    if (data !== void 0)
      this.lexer.input(data);
    let ret2 = this.start(this);
    if (err_on_unconsumed && !this.lexer.at_end() && this.lexer.next() !== void 0) {
      this.error(void 0, "parser did not consume entire input");
    }
    return ret2;
  }
  input(data) {
    this.lexer.input(data);
  }
  error(token3, msg) {
    let estr;
    if (msg === void 0)
      msg = "";
    if (token3 === void 0)
      estr = "Parse error at end of input: " + msg;
    else
      estr = `Parse error at line ${token3.lineno + 1}:${token3.col + 1}: ${msg}`;
    let buf = "";
    let ld = this.lexer.lexdata;
    let lineno = token3 ? token3.lineno : this.lexer.linemap[this.lexer.linemap.length - 1];
    let col = token3 ? token3.col : 0;
    ld = ld.replace(/\r/g, "");
    this.logger(print_lines(ld, lineno, col, true, token3));
    this.logger(estr);
    if (this.errfunc && !this.errfunc(token3)) {
      return;
    }
    throw new PUTIL_ParseError(estr);
  }
  peek() {
    let tok = this.lexer.peek();
    if (tok !== void 0)
      tok.parser = this;
    return tok;
  }
  peeknext() {
    let tok = this.lexer.peeknext();
    if (tok !== void 0)
      tok.parser = this;
    return tok;
  }
  next() {
    let tok = this.lexer.next();
    if (tok !== void 0)
      tok.parser = this;
    return tok;
  }
  optional(type) {
    let tok = this.peeknext();
    if (tok === void 0)
      return false;
    if (tok.type === type) {
      this.next();
      return true;
    }
    return false;
  }
  at_end() {
    return this.lexer.at_end();
  }
  expect(type, msg) {
    let tok = this.next();
    if (msg === void 0) {
      msg = type;
      for (let tk2 of this.lexer.tokdef) {
        if (tk2.name === type && tk2.example) {
          msg = tk2.example;
        }
      }
    }
    if (tok === void 0 || tok.type !== type) {
      this.error(tok, "Expected " + msg);
    }
    return tok.value;
  }
};
function test_parser() {
  let basic_types = /* @__PURE__ */ new Set(["int", "float", "double", "vec2", "vec3", "vec4", "mat4", "string"]);
  let reserved_tokens = /* @__PURE__ */ new Set([
    "int",
    "float",
    "double",
    "vec2",
    "vec3",
    "vec4",
    "mat4",
    "string",
    "static_string",
    "array"
  ]);
  function tk2(name, re, func2) {
    return new tokdef(name, re, func2);
  }
  __name(tk2, "tk");
  let tokens2 = [
    tk2("ID", /[a-zA-Z]+[a-zA-Z0-9_]*/, function(t) {
      if (reserved_tokens.has(t.value)) {
        t.type = t.value.toUpperCase();
      }
      return t;
    }),
    tk2("OPEN", /\{/),
    tk2("CLOSE", /}/),
    tk2("COLON", /:/),
    tk2("JSCRIPT", /\|/, function(t) {
      let js = "";
      let lexer4 = t.lexer;
      while (lexer4.lexpos < lexer4.lexdata.length) {
        let c = lexer4.lexdata[lexer4.lexpos];
        if (c === "\n")
          break;
        js += c;
        lexer4.lexpos++;
      }
      if (js.endsWith(";")) {
        js = js.slice(0, js.length - 1);
        lexer4.lexpos--;
      }
      t.value = js;
      return t;
    }),
    tk2("LPARAM", /\(/),
    tk2("RPARAM", /\)/),
    tk2("COMMA", /,/),
    tk2("NUM", /[0-9]/),
    tk2("SEMI", /;/),
    tk2("NEWLINE", /\n/, function(t) {
      t.lexer.lineno += 1;
    }),
    tk2("SPACE", / |\t/, function(t) {
    })
  ];
  for (let rt of reserved_tokens) {
    tokens2.push(tk2(rt.toUpperCase()));
  }
  let a3 = `
  Loop {
    eid : int;
    flag : int;
    index : int;
    type : int;

    co : vec3;
    no : vec3;
    loop : int | eid(loop);
    edges : array(e, int) | e.eid;

    loops :, array(Loop);
  }
  `;
  function errfunc(lexer4) {
    return true;
  }
  __name(errfunc, "errfunc");
  let lex = new lexer(tokens2, errfunc);
  console.log("Testing lexical scanner...");
  lex.input(a3);
  let token3;
  while (token3 = lex.next()) {
    console.log(token3.toString());
  }
  let parse = new parser(lex);
  parse.input(a3);
  function p_Array(p) {
    p.expect("ARRAY");
    p.expect("LPARAM");
    let arraytype = p_Type(p);
    let itername = "";
    if (p.optional("COMMA")) {
      itername = arraytype;
      arraytype = p_Type(p);
    }
    p.expect("RPARAM");
    return { type: "array", data: { type: arraytype, iname: itername } };
  }
  __name(p_Array, "p_Array");
  function p_Type(p) {
    let tok = p.peek();
    if (tok.type === "ID") {
      p.next();
      return { type: "struct", data: '"' + tok.value + '"' };
    } else if (basic_types.has(tok.type.toLowerCase())) {
      p.next();
      return { type: tok.type.toLowerCase() };
    } else if (tok.type === "ARRAY") {
      return p_Array(p);
    } else {
      p.error(tok, "invalid type " + tok.type);
    }
  }
  __name(p_Type, "p_Type");
  function p_Field(p) {
    let field = {};
    console.log("-----", p.peek().type);
    field.name = p.expect("ID", "struct field name");
    p.expect("COLON");
    field.type = p_Type(p);
    field.set = void 0;
    field.get = void 0;
    let tok = p.peek();
    if (tok.type === "JSCRIPT") {
      field.get = tok.value;
      p.next();
    }
    tok = p.peek();
    if (tok.type === "JSCRIPT") {
      field.set = tok.value;
      p.next();
    }
    p.expect("SEMI");
    return field;
  }
  __name(p_Field, "p_Field");
  function p_Struct(p) {
    let st = {};
    st.name = p.expect("ID", "struct name");
    st.fields = [];
    p.expect("OPEN");
    while (1) {
      if (p.at_end()) {
        p.error(void 0);
      } else if (p.optional("CLOSE")) {
        break;
      } else {
        st.fields.push(p_Field(p));
      }
    }
    return st;
  }
  __name(p_Struct, "p_Struct");
  let ret2 = p_Struct(parse);
  console.log(JSON.stringify(ret2));
}
__name(test_parser, "test_parser");
var struct_parseutil = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  token,
  tokdef,
  PUTIL_ParseError,
  lexer,
  parser
});
"use strict";
var NStruct = class {
  static {
    __name(this, "NStruct");
  }
  constructor(name) {
    this.fields = [];
    this.id = -1;
    this.name = name;
  }
};
var StructEnum = {
  INT: 0,
  FLOAT: 1,
  DOUBLE: 2,
  STRING: 7,
  STATIC_STRING: 8,
  //fixed-length string
  STRUCT: 9,
  TSTRUCT: 10,
  ARRAY: 11,
  ITER: 12,
  SHORT: 13,
  BYTE: 14,
  BOOL: 15,
  ITERKEYS: 16,
  UINT: 17,
  USHORT: 18,
  STATIC_ARRAY: 19,
  SIGNED_BYTE: 20
};
var ArrayTypes = /* @__PURE__ */ new Set([
  StructEnum.STATIC_ARRAY,
  StructEnum.ARRAY,
  StructEnum.ITERKEYS,
  StructEnum.ITER
]);
var ValueTypes = /* @__PURE__ */ new Set([
  StructEnum.INT,
  StructEnum.FLOAT,
  StructEnum.DOUBLE,
  StructEnum.STRING,
  StructEnum.STATIC_STRING,
  StructEnum.SHORT,
  StructEnum.BYTE,
  StructEnum.BOOL,
  StructEnum.UINT,
  StructEnum.USHORT,
  StructEnum.SIGNED_BYTE
]);
var StructTypes = {
  "int": StructEnum.INT,
  "uint": StructEnum.UINT,
  "ushort": StructEnum.USHORT,
  "float": StructEnum.FLOAT,
  "double": StructEnum.DOUBLE,
  "string": StructEnum.STRING,
  "static_string": StructEnum.STATIC_STRING,
  "struct": StructEnum.STRUCT,
  "abstract": StructEnum.TSTRUCT,
  "array": StructEnum.ARRAY,
  "iter": StructEnum.ITER,
  "short": StructEnum.SHORT,
  "byte": StructEnum.BYTE,
  "bool": StructEnum.BOOL,
  "iterkeys": StructEnum.ITERKEYS,
  "sbyte": StructEnum.SIGNED_BYTE
};
var StructTypeMap = {};
for (let k2 in StructTypes) {
  StructTypeMap[StructTypes[k2]] = k2;
}
function gen_tabstr$2(t) {
  let s = "";
  for (let i2 = 0; i2 < t; i2++) {
    s += "  ";
  }
  return s;
}
__name(gen_tabstr$2, "gen_tabstr$2");
function stripComments(buf) {
  let s = "";
  const MAIN = 0, COMMENT = 1, STR = 2;
  let p, n;
  let strs = /* @__PURE__ */ new Set(["'", '"', "`"]);
  let mode = MAIN;
  let strlit;
  let escape = false;
  for (let i2 = 0; i2 < buf.length; i2++) {
    let p2 = i2 > 0 ? buf[i2 - 1] : void 0;
    let c = buf[i2];
    let n2 = i2 < buf.length - 1 ? buf[i2 + 1] : void 0;
    switch (mode) {
      case MAIN:
        if (c === "/" && n2 === "/") {
          mode = COMMENT;
          continue;
        }
        if (strs.has(c)) {
          strlit = c;
          mode = STR;
        }
        s += c;
        break;
      case COMMENT:
        if (n2 === "\n") {
          mode = MAIN;
        }
        break;
      case STR:
        if (c === strlit && !escape) {
          mode = MAIN;
        }
        s += c;
        break;
    }
    if (c === "\\") {
      escape ^= true;
    } else {
      escape = false;
    }
  }
  return s;
}
__name(stripComments, "stripComments");
function StructParser() {
  let basic_types = /* @__PURE__ */ new Set([
    "int",
    "float",
    "double",
    "string",
    "short",
    "byte",
    "sbyte",
    "bool",
    "uint",
    "ushort"
  ]);
  let reserved_tokens = /* @__PURE__ */ new Set([
    "int",
    "float",
    "double",
    "string",
    "static_string",
    "array",
    "iter",
    "abstract",
    "short",
    "byte",
    "sbyte",
    "bool",
    "iterkeys",
    "uint",
    "ushort",
    "static_array"
  ]);
  function tk2(name, re, func2) {
    return new tokdef(name, re, func2);
  }
  __name(tk2, "tk");
  let tokens2 = [
    tk2("ID", /[a-zA-Z_$]+[a-zA-Z0-9_\.$]*/, function(t) {
      if (reserved_tokens.has(t.value)) {
        t.type = t.value.toUpperCase();
      }
      return t;
    }, "identifier"),
    tk2("OPEN", /\{/),
    tk2("EQUALS", /=/),
    tk2("CLOSE", /}/),
    tk2("STRLIT", /\"[^"]*\"/, (t) => {
      t.value = t.value.slice(1, t.value.length - 1);
      return t;
    }),
    tk2("STRLIT", /\'[^']*\'/, (t) => {
      t.value = t.value.slice(1, t.value.length - 1);
      return t;
    }),
    tk2("COLON", /:/),
    tk2("SOPEN", /\[/),
    tk2("SCLOSE", /\]/),
    tk2("JSCRIPT", /\|/, function(t) {
      let js = "";
      let lexer4 = t.lexer;
      let p;
      while (lexer4.lexpos < lexer4.lexdata.length) {
        let c = lexer4.lexdata[lexer4.lexpos];
        if (c === "\n")
          break;
        if (c === "/" && p === "/") {
          js = js.slice(0, js.length - 1);
          lexer4.lexpos--;
          break;
        }
        js += c;
        lexer4.lexpos++;
        p = c;
      }
      while (js.trim().endsWith(";")) {
        js = js.slice(0, js.length - 1);
        lexer4.lexpos--;
      }
      t.value = js.trim();
      return t;
    }),
    tk2("COMMENT", /\/\/.*[\n\r]/),
    tk2("LPARAM", /\(/),
    tk2("RPARAM", /\)/),
    tk2("COMMA", /,/),
    tk2("NUM", /[0-9]+/, void 0, "number"),
    tk2("SEMI", /;/),
    tk2("NEWLINE", /\n/, function(t) {
      t.lexer.lineno += 1;
    }, "newline"),
    tk2("SPACE", / |\t/, function(t) {
    }, "whitespace")
  ];
  reserved_tokens.forEach(function(rt) {
    tokens2.push(tk2(rt.toUpperCase()));
  });
  function errfunc(lexer4) {
    return true;
  }
  __name(errfunc, "errfunc");
  class Lexer extends lexer {
    static {
      __name(this, "Lexer");
    }
    input(str) {
      return super.input(str);
    }
  }
  let lex = new Lexer(tokens2, errfunc);
  let parser$1 = new parser(lex);
  function p_Static_String(p) {
    p.expect("STATIC_STRING");
    p.expect("SOPEN");
    let num2 = p.expect("NUM");
    p.expect("SCLOSE");
    return { type: StructEnum.STATIC_STRING, data: { maxlength: num2 } };
  }
  __name(p_Static_String, "p_Static_String");
  function p_DataRef(p) {
    p.expect("DATAREF");
    p.expect("LPARAM");
    let tname = p.expect("ID");
    p.expect("RPARAM");
    return { type: StructEnum.DATAREF, data: tname };
  }
  __name(p_DataRef, "p_DataRef");
  function p_Array(p) {
    p.expect("ARRAY");
    p.expect("LPARAM");
    let arraytype = p_Type(p);
    let itername = "";
    if (p.optional("COMMA")) {
      itername = arraytype.data.replace(/"/g, "");
      arraytype = p_Type(p);
    }
    p.expect("RPARAM");
    return { type: StructEnum.ARRAY, data: { type: arraytype, iname: itername } };
  }
  __name(p_Array, "p_Array");
  function p_Iter(p) {
    p.expect("ITER");
    p.expect("LPARAM");
    let arraytype = p_Type(p);
    let itername = "";
    if (p.optional("COMMA")) {
      itername = arraytype.data.replace(/"/g, "");
      arraytype = p_Type(p);
    }
    p.expect("RPARAM");
    return { type: StructEnum.ITER, data: { type: arraytype, iname: itername } };
  }
  __name(p_Iter, "p_Iter");
  function p_StaticArray(p) {
    p.expect("STATIC_ARRAY");
    p.expect("SOPEN");
    let arraytype = p_Type(p);
    let itername = "";
    p.expect("COMMA");
    let size = p.expect("NUM");
    if (size < 0 || Math.abs(size - Math.floor(size)) > 1e-6) {
      console.log(Math.abs(size - Math.floor(size)));
      p.error("Expected an integer");
    }
    size = Math.floor(size);
    if (p.optional("COMMA")) {
      itername = p_Type(p).data;
    }
    p.expect("SCLOSE");
    return { type: StructEnum.STATIC_ARRAY, data: { type: arraytype, size, iname: itername } };
  }
  __name(p_StaticArray, "p_StaticArray");
  function p_IterKeys(p) {
    p.expect("ITERKEYS");
    p.expect("LPARAM");
    let arraytype = p_Type(p);
    let itername = "";
    if (p.optional("COMMA")) {
      itername = arraytype.data.replace(/"/g, "");
      arraytype = p_Type(p);
    }
    p.expect("RPARAM");
    return { type: StructEnum.ITERKEYS, data: { type: arraytype, iname: itername } };
  }
  __name(p_IterKeys, "p_IterKeys");
  function p_Abstract(p) {
    p.expect("ABSTRACT");
    p.expect("LPARAM");
    let type = p.expect("ID");
    let jsonKeyword = "_structName";
    if (p.optional("COMMA")) {
      jsonKeyword = p.expect("STRLIT");
    }
    p.expect("RPARAM");
    return {
      type: StructEnum.TSTRUCT,
      data: type,
      jsonKeyword
    };
  }
  __name(p_Abstract, "p_Abstract");
  function p_Type(p) {
    let tok = p.peeknext();
    if (tok.type === "ID") {
      p.next();
      return { type: StructEnum.STRUCT, data: tok.value };
    } else if (basic_types.has(tok.type.toLowerCase())) {
      p.next();
      return { type: StructTypes[tok.type.toLowerCase()] };
    } else if (tok.type === "ARRAY") {
      return p_Array(p);
    } else if (tok.type === "ITER") {
      return p_Iter(p);
    } else if (tok.type === "ITERKEYS") {
      return p_IterKeys(p);
    } else if (tok.type === "STATIC_ARRAY") {
      return p_StaticArray(p);
    } else if (tok.type === "STATIC_STRING") {
      return p_Static_String(p);
    } else if (tok.type === "ABSTRACT") {
      return p_Abstract(p);
    } else if (tok.type === "DATAREF") {
      return p_DataRef(p);
    } else {
      p.error(tok, "invalid type " + tok.type);
    }
  }
  __name(p_Type, "p_Type");
  function p_ID_or_num(p) {
    let t = p.peeknext();
    if (t.type === "NUM") {
      p.next();
      return t.value;
    } else {
      return p.expect("ID", "struct field name");
    }
  }
  __name(p_ID_or_num, "p_ID_or_num");
  function p_Field(p) {
    let field = {};
    field.name = p_ID_or_num(p);
    p.expect("COLON");
    field.type = p_Type(p);
    field.set = void 0;
    field.get = void 0;
    let check = 0;
    let tok = p.peeknext();
    if (tok && tok.type === "JSCRIPT") {
      field.get = tok.value;
      check = 1;
      p.next();
      tok = p.peeknext();
    }
    if (tok && tok.type === "JSCRIPT") {
      check = 1;
      field.set = tok.value;
      p.next();
    }
    p.expect("SEMI");
    tok = p.peeknext();
    if (tok && tok.type === "COMMENT") {
      field.comment = tok.value;
      p.next();
    } else {
      field.comment = "";
    }
    return field;
  }
  __name(p_Field, "p_Field");
  function p_Struct(p) {
    let name = p.expect("ID", "struct name");
    let st = new NStruct(name);
    let tok = p.peeknext();
    let id = -1;
    if (tok.type === "ID" && tok.value === "id") {
      p.next();
      p.expect("EQUALS");
      st.id = p.expect("NUM");
    }
    p.expect("OPEN");
    while (1) {
      if (p.at_end()) {
        p.error(void 0);
      } else if (p.optional("CLOSE")) {
        break;
      } else {
        st.fields.push(p_Field(p));
      }
    }
    return st;
  }
  __name(p_Struct, "p_Struct");
  parser$1.start = p_Struct;
  return parser$1;
}
__name(StructParser, "StructParser");
var struct_parse = StructParser();
var struct_parser = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  NStruct,
  StructEnum,
  ArrayTypes,
  ValueTypes,
  StructTypes,
  StructTypeMap,
  stripComments,
  struct_parse
});
var struct_typesystem = /* @__PURE__ */ Object.freeze({
  __proto__: null
});
"use strict";
var STRUCT_ENDIAN = true;
function setBinaryEndian(mode) {
  STRUCT_ENDIAN = !!mode;
}
__name(setBinaryEndian, "setBinaryEndian");
var temp_dataview = new DataView(new ArrayBuffer(16));
var uint8_view = new Uint8Array(temp_dataview.buffer);
var unpack_context = class {
  static {
    __name(this, "unpack_context");
  }
  constructor() {
    this.i = 0;
  }
};
function pack_byte(array, val2) {
  array.push(val2);
}
__name(pack_byte, "pack_byte");
function pack_sbyte(array, val2) {
  if (val2 < 0) {
    val2 = 256 + val2;
  }
  array.push(val2);
}
__name(pack_sbyte, "pack_sbyte");
function pack_bytes(array, bytes) {
  for (let i2 = 0; i2 < bytes.length; i2++) {
    array.push(bytes[i2]);
  }
}
__name(pack_bytes, "pack_bytes");
function pack_int(array, val2) {
  temp_dataview.setInt32(0, val2, STRUCT_ENDIAN);
  array.push(uint8_view[0]);
  array.push(uint8_view[1]);
  array.push(uint8_view[2]);
  array.push(uint8_view[3]);
}
__name(pack_int, "pack_int");
function pack_uint(array, val2) {
  temp_dataview.setUint32(0, val2, STRUCT_ENDIAN);
  array.push(uint8_view[0]);
  array.push(uint8_view[1]);
  array.push(uint8_view[2]);
  array.push(uint8_view[3]);
}
__name(pack_uint, "pack_uint");
function pack_ushort(array, val2) {
  temp_dataview.setUint16(0, val2, STRUCT_ENDIAN);
  array.push(uint8_view[0]);
  array.push(uint8_view[1]);
}
__name(pack_ushort, "pack_ushort");
function pack_float(array, val2) {
  temp_dataview.setFloat32(0, val2, STRUCT_ENDIAN);
  array.push(uint8_view[0]);
  array.push(uint8_view[1]);
  array.push(uint8_view[2]);
  array.push(uint8_view[3]);
}
__name(pack_float, "pack_float");
function pack_double(array, val2) {
  temp_dataview.setFloat64(0, val2, STRUCT_ENDIAN);
  array.push(uint8_view[0]);
  array.push(uint8_view[1]);
  array.push(uint8_view[2]);
  array.push(uint8_view[3]);
  array.push(uint8_view[4]);
  array.push(uint8_view[5]);
  array.push(uint8_view[6]);
  array.push(uint8_view[7]);
}
__name(pack_double, "pack_double");
function pack_short(array, val2) {
  temp_dataview.setInt16(0, val2, STRUCT_ENDIAN);
  array.push(uint8_view[0]);
  array.push(uint8_view[1]);
}
__name(pack_short, "pack_short");
function encode_utf8(arr, str) {
  for (let i2 = 0; i2 < str.length; i2++) {
    let c = str.charCodeAt(i2);
    while (c !== 0) {
      let uc = c & 127;
      c = c >> 7;
      if (c !== 0)
        uc |= 128;
      arr.push(uc);
    }
  }
}
__name(encode_utf8, "encode_utf8");
function decode_utf8(arr) {
  let str = "";
  let i2 = 0;
  while (i2 < arr.length) {
    let c = arr[i2];
    let sum = c & 127;
    let j2 = 0;
    let lasti = i2;
    while (i2 < arr.length && c & 128) {
      j2 += 7;
      i2++;
      c = arr[i2];
      c = (c & 127) << j2;
      sum |= c;
    }
    if (sum === 0) break;
    str += String.fromCharCode(sum);
    i2++;
  }
  return str;
}
__name(decode_utf8, "decode_utf8");
function test_utf8() {
  let s = "a" + String.fromCharCode(8800) + "b";
  let arr = [];
  encode_utf8(arr, s);
  let s2 = decode_utf8(arr);
  if (s !== s2) {
    throw new Error("UTF-8 encoding/decoding test failed");
  }
  return true;
}
__name(test_utf8, "test_utf8");
function truncate_utf8(arr, maxlen) {
  let len = Math.min(arr.length, maxlen);
  let last_codepoint = 0;
  let last2 = 0;
  let incode = false;
  let i2 = 0;
  let code3 = 0;
  while (i2 < len) {
    incode = arr[i2] & 128;
    if (!incode) {
      last2 = last_codepoint + 1;
      last_codepoint = i2 + 1;
    }
    i2++;
  }
  if (last_codepoint < maxlen)
    arr.length = last_codepoint;
  else
    arr.length = last2;
  return arr;
}
__name(truncate_utf8, "truncate_utf8");
var _static_sbuf_ss = new Array(2048);
function pack_static_string(data, str, length) {
  if (length === void 0)
    throw new Error("'length' paremter is not optional for pack_static_string()");
  let arr = length < 2048 ? _static_sbuf_ss : new Array();
  arr.length = 0;
  encode_utf8(arr, str);
  truncate_utf8(arr, length);
  for (let i2 = 0; i2 < length; i2++) {
    if (i2 >= arr.length) {
      data.push(0);
    } else {
      data.push(arr[i2]);
    }
  }
}
__name(pack_static_string, "pack_static_string");
var _static_sbuf = new Array(32);
function pack_string(data, str) {
  _static_sbuf.length = 0;
  encode_utf8(_static_sbuf, str);
  pack_int(data, _static_sbuf.length);
  for (let i2 = 0; i2 < _static_sbuf.length; i2++) {
    data.push(_static_sbuf[i2]);
  }
}
__name(pack_string, "pack_string");
function unpack_bytes(dview, uctx, len) {
  let ret2 = new DataView(dview.buffer.slice(uctx.i, uctx.i + len));
  uctx.i += len;
  return ret2;
}
__name(unpack_bytes, "unpack_bytes");
function unpack_byte(dview, uctx) {
  return dview.getUint8(uctx.i++);
}
__name(unpack_byte, "unpack_byte");
function unpack_sbyte(dview, uctx) {
  return dview.getInt8(uctx.i++);
}
__name(unpack_sbyte, "unpack_sbyte");
function unpack_int(dview, uctx) {
  uctx.i += 4;
  return dview.getInt32(uctx.i - 4, STRUCT_ENDIAN);
}
__name(unpack_int, "unpack_int");
function unpack_uint(dview, uctx) {
  uctx.i += 4;
  return dview.getUint32(uctx.i - 4, STRUCT_ENDIAN);
}
__name(unpack_uint, "unpack_uint");
function unpack_ushort(dview, uctx) {
  uctx.i += 2;
  return dview.getUint16(uctx.i - 2, STRUCT_ENDIAN);
}
__name(unpack_ushort, "unpack_ushort");
function unpack_float(dview, uctx) {
  uctx.i += 4;
  return dview.getFloat32(uctx.i - 4, STRUCT_ENDIAN);
}
__name(unpack_float, "unpack_float");
function unpack_double(dview, uctx) {
  uctx.i += 8;
  return dview.getFloat64(uctx.i - 8, STRUCT_ENDIAN);
}
__name(unpack_double, "unpack_double");
function unpack_short(dview, uctx) {
  uctx.i += 2;
  return dview.getInt16(uctx.i - 2, STRUCT_ENDIAN);
}
__name(unpack_short, "unpack_short");
var _static_arr_us = new Array(32);
function unpack_string(data, uctx) {
  let slen = unpack_int(data, uctx);
  if (!slen) {
    return "";
  }
  let str = "";
  let arr = slen < 2048 ? _static_arr_us : new Array(slen);
  arr.length = slen;
  for (let i2 = 0; i2 < slen; i2++) {
    arr[i2] = unpack_byte(data, uctx);
  }
  return decode_utf8(arr);
}
__name(unpack_string, "unpack_string");
var _static_arr_uss = new Array(2048);
function unpack_static_string(data, uctx, length) {
  let str = "";
  if (length === void 0)
    throw new Error("'length' cannot be undefined in unpack_static_string()");
  let arr = length < 2048 ? _static_arr_uss : new Array(length);
  arr.length = 0;
  let done = false;
  for (let i2 = 0; i2 < length; i2++) {
    let c = unpack_byte(data, uctx);
    if (c === 0) {
      done = true;
    }
    if (!done && c !== 0) {
      arr.push(c);
    }
  }
  truncate_utf8(arr, length);
  return decode_utf8(arr);
}
__name(unpack_static_string, "unpack_static_string");
var struct_binpack = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  get STRUCT_ENDIAN() {
    return STRUCT_ENDIAN;
  },
  setBinaryEndian,
  temp_dataview,
  uint8_view,
  unpack_context,
  pack_byte,
  pack_sbyte,
  pack_bytes,
  pack_int,
  pack_uint,
  pack_ushort,
  pack_float,
  pack_double,
  pack_short,
  encode_utf8,
  decode_utf8,
  test_utf8,
  pack_static_string,
  pack_string,
  unpack_bytes,
  unpack_byte,
  unpack_sbyte,
  unpack_int,
  unpack_uint,
  unpack_ushort,
  unpack_float,
  unpack_double,
  unpack_short,
  unpack_string,
  unpack_static_string
});
var warninglvl$1 = 2;
var debug = 0;
var _static_envcode_null$1 = "";
var packer_debug$1, packer_debug_start$1, packer_debug_end$1;
var packdebug_tablevel = 0;
function _get_pack_debug() {
  return {
    packer_debug: packer_debug$1,
    packer_debug_start: packer_debug_start$1,
    packer_debug_end: packer_debug_end$1,
    debug,
    warninglvl: warninglvl$1
  };
}
__name(_get_pack_debug, "_get_pack_debug");
var cachering = class _cachering extends Array {
  static {
    __name(this, "cachering");
  }
  constructor(cb, tot) {
    super();
    this.length = tot;
    this.cur = 0;
    for (let i2 = 0; i2 < tot; i2++) {
      this[i2] = cb();
    }
  }
  static fromConstructor(cls2, tot) {
    return new _cachering(() => new cls2(), tot);
  }
  next() {
    let ret2 = this[this.cur];
    this.cur = (this.cur + 1) % this.length;
    return ret2;
  }
};
function gen_tabstr$1(tot) {
  let ret2 = "";
  for (let i2 = 0; i2 < tot; i2++) {
    ret2 += " ";
  }
  return ret2;
}
__name(gen_tabstr$1, "gen_tabstr$1");
function setWarningMode2(t) {
  if (typeof t !== "number" || isNaN(t)) {
    throw new Error("Expected a single number (>= 0) argument to setWarningMode");
  }
  warninglvl$1 = t;
}
__name(setWarningMode2, "setWarningMode2");
function setDebugMode2(t) {
  debug = t;
  if (debug) {
    packer_debug$1 = /* @__PURE__ */ __name(function() {
      let tab2 = gen_tabstr$1(packdebug_tablevel);
      if (arguments.length > 0) {
        console.warn(tab2, ...arguments);
      } else {
        console.warn("Warning: undefined msg");
      }
    }, "packer_debug$1");
    packer_debug_start$1 = /* @__PURE__ */ __name(function(funcname) {
      packer_debug$1("Start " + funcname);
      packdebug_tablevel++;
    }, "packer_debug_start$1");
    packer_debug_end$1 = /* @__PURE__ */ __name(function(funcname) {
      packdebug_tablevel--;
      if (funcname) {
        packer_debug$1("Leave " + funcname);
      }
    }, "packer_debug_end$1");
  } else {
    packer_debug$1 = /* @__PURE__ */ __name(function() {
    }, "packer_debug$1");
    packer_debug_start$1 = /* @__PURE__ */ __name(function() {
    }, "packer_debug_start$1");
    packer_debug_end$1 = /* @__PURE__ */ __name(function() {
    }, "packer_debug_end$1");
  }
}
__name(setDebugMode2, "setDebugMode2");
setDebugMode2(debug);
var StructFieldTypes = [];
var StructFieldTypeMap = {};
function packNull(manager3, data, field, type) {
  StructFieldTypeMap[type.type].packNull(manager3, data, field, type);
}
__name(packNull, "packNull");
function toJSON(manager3, val2, obj2, field, type) {
  return StructFieldTypeMap[type.type].toJSON(manager3, val2, obj2, field, type);
}
__name(toJSON, "toJSON");
function fromJSON(manager3, val2, obj2, field, type, instance) {
  return StructFieldTypeMap[type.type].fromJSON(manager3, val2, obj2, field, type, instance);
}
__name(fromJSON, "fromJSON");
function formatJSON$1(manager3, val2, obj2, field, type, instance, tlvl = 0) {
  return StructFieldTypeMap[type.type].formatJSON(manager3, val2, obj2, field, type, instance, tlvl);
}
__name(formatJSON$1, "formatJSON$1");
function validateJSON$1(manager3, val2, obj2, field, type, instance, _abstractKey) {
  return StructFieldTypeMap[type.type].validateJSON(manager3, val2, obj2, field, type, instance, _abstractKey);
}
__name(validateJSON$1, "validateJSON$1");
function unpack_field(manager3, data, type, uctx) {
  let name;
  if (debug) {
    name = StructFieldTypeMap[type.type].define().name;
    packer_debug_start$1("R " + name);
  }
  let ret2 = StructFieldTypeMap[type.type].unpack(manager3, data, type, uctx);
  if (debug) {
    packer_debug_end$1();
  }
  return ret2;
}
__name(unpack_field, "unpack_field");
var fakeFields = new cachering(() => {
  return { type: void 0, get: void 0, set: void 0 };
}, 256);
function fmt_type(type) {
  return StructFieldTypeMap[type.type].format(type);
}
__name(fmt_type, "fmt_type");
function do_pack(manager3, data, val2, obj2, field, type) {
  let name;
  if (debug) {
    name = StructFieldTypeMap[type.type].define().name;
    packer_debug_start$1("W " + name);
  }
  let typeid = type;
  if (typeof typeid !== "number") {
    typeid = typeid.type;
  }
  let ret2 = StructFieldTypeMap[typeid].pack(manager3, data, val2, obj2, field, type);
  if (debug) {
    packer_debug_end$1();
  }
  return ret2;
}
__name(do_pack, "do_pack");
var _ws_env$1 = [[void 0, void 0]];
var StructFieldType = class _StructFieldType {
  static {
    __name(this, "StructFieldType");
  }
  static pack(manager3, data, val2, obj2, field, type) {
  }
  static unpack(manager3, data, type, uctx) {
  }
  static packNull(manager3, data, field, type) {
    this.pack(manager3, data, 0, 0, field, type);
  }
  static format(type) {
    return this.define().name;
  }
  static toJSON(manager3, val2, obj2, field, type) {
    return val2;
  }
  static fromJSON(manager3, val2, obj2, field, type, instance) {
    return val2;
  }
  static formatJSON(manager3, val2, obj2, field, type, instance, tlvl) {
    return JSON.stringify(val2);
  }
  static validateJSON(manager3, val2, obj2, field, type, instance, _abstractKey) {
    return true;
  }
  /**
   return false to override default
   helper js for packing
   */
  static useHelperJS(field) {
    return true;
  }
  /**
     Define field class info.
  
     Example:
     <pre>
     static define() {return {
      type : StructEnum.INT,
      name : "int"
    }}
     </pre>
     */
  static define() {
    return {
      type: -1,
      name: "(error)"
    };
  }
  /**
   Register field packer/unpacker class.  Will throw an error if define() method is bad.
   */
  static register(cls2) {
    if (StructFieldTypes.indexOf(cls2) >= 0) {
      throw new Error("class already registered");
    }
    if (cls2.define === _StructFieldType.define) {
      throw new Error("you forgot to make a define() static method");
    }
    if (cls2.define().type === void 0) {
      throw new Error("cls.define().type was undefined!");
    }
    if (cls2.define().type in StructFieldTypeMap) {
      throw new Error("type " + cls2.define().type + " is used by another StructFieldType subclass");
    }
    StructFieldTypes.push(cls2);
    StructFieldTypeMap[cls2.define().type] = cls2;
  }
};
var StructIntField = class extends StructFieldType {
  static {
    __name(this, "StructIntField");
  }
  static pack(manager3, data, val2, obj2, field, type) {
    pack_int(data, val2);
  }
  static unpack(manager3, data, type, uctx) {
    return unpack_int(data, uctx);
  }
  static validateJSON(manager3, val2, obj2, field, type, instance) {
    if (typeof val2 !== "number" || val2 !== Math.floor(val2)) {
      return "" + val2 + " is not an integer";
    }
    return true;
  }
  static define() {
    return {
      type: StructEnum.INT,
      name: "int"
    };
  }
};
StructFieldType.register(StructIntField);
var StructFloatField = class extends StructFieldType {
  static {
    __name(this, "StructFloatField");
  }
  static pack(manager3, data, val2, obj2, field, type) {
    pack_float(data, val2);
  }
  static unpack(manager3, data, type, uctx) {
    return unpack_float(data, uctx);
  }
  static validateJSON(manager3, val2, obj2, field, type, instance, _abstractKey) {
    if (typeof val2 !== "number") {
      return "Not a float: " + val2;
    }
    return true;
  }
  static define() {
    return {
      type: StructEnum.FLOAT,
      name: "float"
    };
  }
};
StructFieldType.register(StructFloatField);
var StructDoubleField = class extends StructFieldType {
  static {
    __name(this, "StructDoubleField");
  }
  static pack(manager3, data, val2, obj2, field, type) {
    pack_double(data, val2);
  }
  static unpack(manager3, data, type, uctx) {
    return unpack_double(data, uctx);
  }
  static validateJSON(manager3, val2, obj2, field, type, instance) {
    if (typeof val2 !== "number") {
      return "Not a double: " + val2;
    }
    return true;
  }
  static define() {
    return {
      type: StructEnum.DOUBLE,
      name: "double"
    };
  }
};
StructFieldType.register(StructDoubleField);
var StructStringField = class extends StructFieldType {
  static {
    __name(this, "StructStringField");
  }
  static pack(manager3, data, val2, obj2, field, type) {
    val2 = !val2 ? "" : val2;
    pack_string(data, val2);
  }
  static validateJSON(manager3, val2, obj2, field, type, instance) {
    if (typeof val2 !== "string") {
      return "Not a string: " + val2;
    }
    return true;
  }
  static packNull(manager3, data, field, type) {
    this.pack(manager3, data, "", 0, field, type);
  }
  static unpack(manager3, data, type, uctx) {
    return unpack_string(data, uctx);
  }
  static define() {
    return {
      type: StructEnum.STRING,
      name: "string"
    };
  }
};
StructFieldType.register(StructStringField);
var StructStaticStringField = class extends StructFieldType {
  static {
    __name(this, "StructStaticStringField");
  }
  static pack(manager3, data, val2, obj2, field, type) {
    val2 = !val2 ? "" : val2;
    pack_static_string(data, val2, type.data.maxlength);
  }
  static validateJSON(manager3, val2, obj2, field, type, instance) {
    if (typeof val2 !== "string") {
      return "Not a string: " + val2;
    }
    if (val2.length > type.data.maxlength) {
      return "String is too big; limit is " + type.data.maxlength + "; string:" + val2;
    }
    return true;
  }
  static format(type) {
    return `static_string[${type.data.maxlength}]`;
  }
  static packNull(manager3, data, field, type) {
    this.pack(manager3, data, "", 0, field, type);
  }
  static unpack(manager3, data, type, uctx) {
    return unpack_static_string(data, uctx, type.data.maxlength);
  }
  static define() {
    return {
      type: StructEnum.STATIC_STRING,
      name: "static_string"
    };
  }
};
StructFieldType.register(StructStaticStringField);
var StructStructField = class extends StructFieldType {
  static {
    __name(this, "StructStructField");
  }
  static pack(manager3, data, val2, obj2, field, type) {
    let stt = manager3.get_struct(type.data);
    packer_debug$1("struct", stt.name);
    manager3.write_struct(data, val2, stt);
  }
  static validateJSON(manager3, val2, obj2, field, type, instance, _abstractKey) {
    let stt = manager3.get_struct(type.data);
    if (!val2) {
      return "Expected " + stt.name + " object";
    }
    return manager3.validateJSONIntern(val2, stt, _abstractKey);
  }
  static format(type) {
    return type.data;
  }
  static fromJSON(manager3, val2, obj2, field, type, instance) {
    let stt = manager3.get_struct(type.data);
    return manager3.readJSON(val2, stt, instance);
  }
  static formatJSON(manager3, val2, obj2, field, type, instance, tlvl) {
    let stt = manager3.get_struct(type.data);
    return manager3.formatJSON_intern(val2, stt, field, tlvl);
  }
  static toJSON(manager3, val2, obj2, field, type) {
    let stt = manager3.get_struct(type.data);
    return manager3.writeJSON(val2, stt);
  }
  static unpackInto(manager3, data, type, uctx, dest) {
    let cls2 = manager3.get_struct_cls(type.data);
    packer_debug$1("struct", cls2 ? cls2.name : "(error)");
    return manager3.read_object(data, cls2, uctx, dest);
  }
  static packNull(manager3, data, field, type) {
    let stt = manager3.get_struct(type.data);
    packer_debug$1("struct", type);
    for (let field2 of stt.fields) {
      let type2 = field2.type;
      packNull(manager3, data, field2, type2);
    }
  }
  static unpack(manager3, data, type, uctx) {
    let cls2 = manager3.get_struct_cls(type.data);
    packer_debug$1("struct", cls2 ? cls2.name : "(error)");
    return manager3.read_object(data, cls2, uctx);
  }
  static define() {
    return {
      type: StructEnum.STRUCT,
      name: "struct"
    };
  }
};
StructFieldType.register(StructStructField);
var StructTStructField = class extends StructFieldType {
  static {
    __name(this, "StructTStructField");
  }
  static pack(manager3, data, val2, obj2, field, type) {
    let cls2 = manager3.get_struct_cls(type.data);
    let stt = manager3.get_struct(type.data);
    const keywords2 = manager3.constructor.keywords;
    if (val2.constructor.structName !== type.data && val2 instanceof cls2) {
      stt = manager3.get_struct(val2.constructor.structName);
    } else if (val2.constructor.structName === type.data) {
      stt = manager3.get_struct(type.data);
    } else {
      console.trace();
      throw new Error("Bad struct " + val2.constructor.structName + " passed to write_struct");
    }
    packer_debug$1("int " + stt.id);
    pack_int(data, stt.id);
    manager3.write_struct(data, val2, stt);
  }
  static validateJSON(manager3, val2, obj2, field, type, instance, _abstractKey) {
    let key2 = type.jsonKeyword;
    if (typeof val2 !== "object") {
      return typeof val2 + " is not an object";
    }
    let stt = manager3.get_struct(val2[key2]);
    let cls2 = manager3.get_struct_cls(stt.name);
    let parentcls = manager3.get_struct_cls(type.data);
    let ok = false;
    do {
      if (cls2 === parentcls) {
        ok = true;
        break;
      }
      cls2 = cls2.prototype.__proto__.constructor;
    } while (cls2 && cls2 !== Object);
    if (!ok) {
      return stt.name + " is not a child class off " + type.data;
    }
    return manager3.validateJSONIntern(val2, stt, type.jsonKeyword);
  }
  static fromJSON(manager3, val2, obj2, field, type, instance) {
    let key2 = type.jsonKeyword;
    let stt = manager3.get_struct(val2[key2]);
    return manager3.readJSON(val2, stt, instance);
  }
  static formatJSON(manager3, val2, obj2, field, type, instance, tlvl) {
    let key2 = type.jsonKeyword;
    let stt = manager3.get_struct(val2[key2]);
    return manager3.formatJSON_intern(val2, stt, field, tlvl);
  }
  static toJSON(manager3, val2, obj2, field, type) {
    const keywords2 = manager3.constructor.keywords;
    let stt = manager3.get_struct(val2.constructor.structName);
    let ret2 = manager3.writeJSON(val2, stt);
    ret2[type.jsonKeyword] = "" + stt.name;
    return ret2;
  }
  static packNull(manager3, data, field, type) {
    let stt = manager3.get_struct(type.data);
    pack_int(data, stt.id);
    packNull(manager3, data, field, { type: StructEnum.STRUCT, data: type.data });
  }
  static format(type) {
    return "abstract(" + type.data + ")";
  }
  static unpackInto(manager3, data, type, uctx, dest) {
    let id = unpack_int(data, uctx);
    packer_debug$1("-int " + id);
    if (!(id in manager3.struct_ids)) {
      packer_debug$1("tstruct id: " + id);
      console.trace();
      console.log(id);
      console.log(manager3.struct_ids);
      throw new Error("Unknown struct type " + id + ".");
    }
    let cls2 = manager3.get_struct_id(id);
    packer_debug$1("struct name: " + cls2.name);
    cls2 = manager3.struct_cls[cls2.name];
    return manager3.read_object(data, cls2, uctx, dest);
  }
  static unpack(manager3, data, type, uctx) {
    let id = unpack_int(data, uctx);
    packer_debug$1("-int " + id);
    if (!(id in manager3.struct_ids)) {
      packer_debug$1("tstruct id: " + id);
      console.trace();
      console.log(id);
      console.log(manager3.struct_ids);
      throw new Error("Unknown struct type " + id + ".");
    }
    let cls2 = manager3.get_struct_id(id);
    packer_debug$1("struct name: " + cls2.name);
    cls2 = manager3.struct_cls[cls2.name];
    return manager3.read_object(data, cls2, uctx);
  }
  static define() {
    return {
      type: StructEnum.TSTRUCT,
      name: "tstruct"
    };
  }
};
StructFieldType.register(StructTStructField);
function formatArrayJson(manager3, val2, obj2, field, type, type2, instance, tlvl, array = val2) {
  if (array === void 0 || array === null || typeof array !== "object" || !array[Symbol.iterator]) {
    console.log(obj2);
    console.log(array);
    throw new Error(`Expected an array for ${field.name}`);
  }
  if (ValueTypes.has(type2.type)) {
    return JSON.stringify(array);
  }
  let s = "[";
  if (manager3.formatCtx.addComments && field.comment.trim()) {
    s += " " + field.comment.trim();
  }
  s += "\n";
  for (let i2 = 0; i2 < array.length; i2++) {
    let item = array[i2];
    s += tab(tlvl + 1) + formatJSON$1(manager3, item, val2, field, type2, instance, tlvl + 1) + ",\n";
  }
  s += tab(tlvl) + "]";
  return s;
}
__name(formatArrayJson, "formatArrayJson");
var StructArrayField = class extends StructFieldType {
  static {
    __name(this, "StructArrayField");
  }
  static pack(manager3, data, val2, obj2, field, type) {
    if (val2 === void 0) {
      console.trace();
      console.log("Undefined array fed to struct struct packer!");
      console.log("Field: ", field);
      console.log("Type: ", type);
      console.log("");
      packer_debug$1("int 0");
      pack_int(data, 0);
      return;
    }
    packer_debug$1("int " + val2.length);
    pack_int(data, val2.length);
    let d = type.data;
    let itername = d.iname;
    let type2 = d.type;
    let env = _ws_env$1;
    for (let i2 = 0; i2 < val2.length; i2++) {
      let val22 = val2[i2];
      if (itername !== "" && itername !== void 0 && field.get) {
        env[0][0] = itername;
        env[0][1] = val22;
        val22 = manager3._env_call(field.get, obj2, env);
      }
      let fakeField = fakeFields.next();
      fakeField.type = type2;
      do_pack(manager3, data, val22, obj2, fakeField, type2);
    }
  }
  static packNull(manager3, data, field, type) {
    pack_int(data, 0);
  }
  static format(type) {
    if (type.data.iname !== "" && type.data.iname !== void 0) {
      return "array(" + type.data.iname + ", " + fmt_type(type.data.type) + ")";
    } else {
      return "array(" + fmt_type(type.data.type) + ")";
    }
  }
  static useHelperJS(field) {
    return !field.type.data.iname;
  }
  static validateJSON(manager3, val2, obj2, field, type, instance, _abstractKey) {
    if (!val2) {
      return "not an array: " + val2;
    }
    for (let i2 = 0; i2 < val2.length; i2++) {
      let ret2 = validateJSON$1(manager3, val2[i2], val2, field, type.data.type, void 0, _abstractKey);
      if (typeof ret2 === "string" || !ret2) {
        return ret2;
      }
    }
    return true;
  }
  static fromJSON(manager3, val2, obj2, field, type, instance) {
    let ret2 = instance || [];
    ret2.length = 0;
    for (let i2 = 0; i2 < val2.length; i2++) {
      let val22 = fromJSON(manager3, val2[i2], val2, field, type.data.type, void 0);
      if (val22 === void 0) {
        console.log(val22);
        console.error("eeek");
        process.exit();
      }
      ret2.push(val22);
    }
    return ret2;
  }
  static formatJSON(manager3, val2, obj2, field, type, instance, tlvl) {
    return formatArrayJson(manager3, val2, obj2, field, type, type.data.type, instance, tlvl);
  }
  static toJSON(manager3, val2, obj2, field, type) {
    val2 = val2 || [];
    let json2 = [];
    let itername = type.data.iname;
    for (let i2 = 0; i2 < val2.length; i2++) {
      let val22 = val2[i2];
      let env = _ws_env$1;
      if (itername !== "" && itername !== void 0 && field.get) {
        env[0][0] = itername;
        env[0][1] = val22;
        val22 = manager3._env_call(field.get, obj2, env);
      }
      json2.push(toJSON(manager3, val22, val2, field, type.data.type));
    }
    return json2;
  }
  static unpackInto(manager3, data, type, uctx, dest) {
    let len = unpack_int(data, uctx);
    dest.length = 0;
    for (let i2 = 0; i2 < len; i2++) {
      dest.push(unpack_field(manager3, data, type.data.type, uctx));
    }
  }
  static unpack(manager3, data, type, uctx) {
    let len = unpack_int(data, uctx);
    packer_debug$1("-int " + len);
    let arr = new Array(len);
    for (let i2 = 0; i2 < len; i2++) {
      arr[i2] = unpack_field(manager3, data, type.data.type, uctx);
    }
    return arr;
  }
  static define() {
    return {
      type: StructEnum.ARRAY,
      name: "array"
    };
  }
};
StructFieldType.register(StructArrayField);
var StructIterField = class extends StructFieldType {
  static {
    __name(this, "StructIterField");
  }
  static pack(manager3, data, val2, obj2, field, type) {
    function forEach(cb, thisvar) {
      if (val2 && val2[Symbol.iterator]) {
        for (let item of val2) {
          cb.call(thisvar, item);
        }
      } else if (val2 && val2.forEach) {
        val2.forEach(function(item) {
          cb.call(thisvar, item);
        });
      } else {
        console.trace();
        console.log("Undefined iterable list fed to struct struct packer!", val2);
        console.log("Field: ", field);
        console.log("Type: ", type);
        console.log("");
      }
    }
    __name(forEach, "forEach");
    let starti = data.length;
    data.length += 4;
    let d = type.data, itername = d.iname, type2 = d.type;
    let env = _ws_env$1;
    let i2 = 0;
    forEach(function(val22) {
      if (itername !== "" && itername !== void 0 && field.get) {
        env[0][0] = itername;
        env[0][1] = val22;
        val22 = manager3._env_call(field.get, obj2, env);
      }
      let fakeField = fakeFields.next();
      fakeField.type = type2;
      do_pack(manager3, data, val22, obj2, fakeField, type2);
      i2++;
    }, this);
    temp_dataview.setInt32(0, i2, STRUCT_ENDIAN);
    data[starti++] = uint8_view[0];
    data[starti++] = uint8_view[1];
    data[starti++] = uint8_view[2];
    data[starti++] = uint8_view[3];
  }
  static formatJSON(manager3, val2, obj2, field, type, instance, tlvl) {
    return formatArrayJson(manager3, val2, obj2, field, type, type.data.type, instance, tlvl, list2(val2));
  }
  static validateJSON(manager3, val2, obj2, field, type, instance) {
    return StructArrayField.validateJSON(...arguments);
  }
  static fromJSON() {
    return StructArrayField.fromJSON(...arguments);
  }
  static toJSON(manager3, val2, obj2, field, type) {
    val2 = val2 || [];
    let json2 = [];
    let itername = type.data.iname;
    for (let val22 of val2) {
      let env = _ws_env$1;
      if (itername !== "" && itername !== void 0 && field.get) {
        env[0][0] = itername;
        env[0][1] = val22;
        val22 = manager3._env_call(field.get, obj2, env);
      }
      json2.push(toJSON(manager3, val22, val2, field, type.data.type));
    }
    return json2;
  }
  static packNull(manager3, data, field, type) {
    pack_int(data, 0);
  }
  static useHelperJS(field) {
    return !field.type.data.iname;
  }
  static format(type) {
    if (type.data.iname !== "" && type.data.iname !== void 0) {
      return "iter(" + type.data.iname + ", " + fmt_type(type.data.type) + ")";
    } else {
      return "iter(" + fmt_type(type.data.type) + ")";
    }
  }
  static unpackInto(manager3, data, type, uctx, arr) {
    let len = unpack_int(data, uctx);
    packer_debug$1("-int " + len);
    arr.length = 0;
    for (let i2 = 0; i2 < len; i2++) {
      arr.push(unpack_field(manager3, data, type.data.type, uctx));
    }
    return arr;
  }
  static unpack(manager3, data, type, uctx) {
    let len = unpack_int(data, uctx);
    packer_debug$1("-int " + len);
    let arr = new Array(len);
    for (let i2 = 0; i2 < len; i2++) {
      arr[i2] = unpack_field(manager3, data, type.data.type, uctx);
    }
    return arr;
  }
  static define() {
    return {
      type: StructEnum.ITER,
      name: "iter"
    };
  }
};
StructFieldType.register(StructIterField);
var StructShortField = class extends StructFieldType {
  static {
    __name(this, "StructShortField");
  }
  static pack(manager3, data, val2, obj2, field, type) {
    pack_short(data, val2);
  }
  static unpack(manager3, data, type, uctx) {
    return unpack_short(data, uctx);
  }
  static define() {
    return {
      type: StructEnum.SHORT,
      name: "short"
    };
  }
};
StructFieldType.register(StructShortField);
var StructByteField = class extends StructFieldType {
  static {
    __name(this, "StructByteField");
  }
  static pack(manager3, data, val2, obj2, field, type) {
    pack_byte(data, val2);
  }
  static unpack(manager3, data, type, uctx) {
    return unpack_byte(data, uctx);
  }
  static define() {
    return {
      type: StructEnum.BYTE,
      name: "byte"
    };
  }
};
StructFieldType.register(StructByteField);
var StructSignedByteField = class extends StructFieldType {
  static {
    __name(this, "StructSignedByteField");
  }
  static pack(manager3, data, val2, obj2, field, type) {
    pack_sbyte(data, val2);
  }
  static unpack(manager3, data, type, uctx) {
    return unpack_sbyte(data, uctx);
  }
  static define() {
    return {
      type: StructEnum.SIGNED_BYTE,
      name: "sbyte"
    };
  }
};
StructFieldType.register(StructSignedByteField);
var StructBoolField = class extends StructFieldType {
  static {
    __name(this, "StructBoolField");
  }
  static pack(manager3, data, val2, obj2, field, type) {
    pack_byte(data, !!val2);
  }
  static unpack(manager3, data, type, uctx) {
    return !!unpack_byte(data, uctx);
  }
  static validateJSON(manager3, val2, obj2, field, type, instance) {
    if (val2 === 0 || val2 === 1 || val2 === true || val2 === false || val2 === "true" || val2 === "false") {
      return true;
    }
    return "" + val2 + " is not a bool";
  }
  static fromJSON(manager3, val2, obj2, field, type, instance) {
    if (val2 === "false") {
      val2 = false;
    }
    return !!val2;
  }
  static toJSON(manager3, val2, obj2, field, type) {
    return !!val2;
  }
  static define() {
    return {
      type: StructEnum.BOOL,
      name: "bool"
    };
  }
};
StructFieldType.register(StructBoolField);
var StructIterKeysField = class extends StructFieldType {
  static {
    __name(this, "StructIterKeysField");
  }
  static pack(manager3, data, val2, obj2, field, type) {
    if (typeof val2 !== "object" && typeof val2 !== "function" || val2 === null) {
      console.warn("Bad object fed to iterkeys in struct packer!", val2);
      console.log("Field: ", field);
      console.log("Type: ", type);
      console.log("");
      pack_int(data, 0);
      return;
    }
    let len = 0;
    for (let k2 in val2) {
      len++;
    }
    packer_debug$1("int " + len);
    pack_int(data, len);
    let d = type.data, itername = d.iname, type2 = d.type;
    let env = _ws_env$1;
    let i2 = 0;
    for (let val22 in val2) {
      if (i2 >= len) {
        if (warninglvl$1 > 0) {
          console.warn("Warning: object keys magically replaced during iteration", val2, i2);
        }
        return;
      }
      if (itername && itername.trim().length > 0 && field.get) {
        env[0][0] = itername;
        env[0][1] = val22;
        val22 = manager3._env_call(field.get, obj2, env);
      } else {
        val22 = val2[val22];
      }
      let f22 = { type: type2, get: void 0, set: void 0 };
      do_pack(manager3, data, val22, obj2, f22, type2);
      i2++;
    }
  }
  static validateJSON(manager3, val2, obj2, field, type, instance) {
    return StructArrayField.validateJSON(...arguments);
  }
  static fromJSON() {
    return StructArrayField.fromJSON(...arguments);
  }
  static formatJSON(manager3, val2, obj2, field, type, instance, tlvl) {
    return formatArrayJson(manager3, val2, obj2, field, type, type.data.type, instance, tlvl, list2(val2));
  }
  static toJSON(manager3, val2, obj2, field, type) {
    val2 = val2 || [];
    let json2 = [];
    let itername = type.data.iname;
    for (let k2 in val2) {
      let val22 = val2[k2];
      let env = _ws_env$1;
      if (itername !== "" && itername !== void 0 && field.get) {
        env[0][0] = itername;
        env[0][1] = val22;
        val22 = manager3._env_call(field.get, obj2, env);
      }
      json2.push(toJSON(manager3, val22, val2, field, type.data.type));
    }
    return json2;
  }
  static packNull(manager3, data, field, type) {
    pack_int(data, 0);
  }
  static useHelperJS(field) {
    return !field.type.data.iname;
  }
  static format(type) {
    if (type.data.iname !== "" && type.data.iname !== void 0) {
      return "iterkeys(" + type.data.iname + ", " + fmt_type(type.data.type) + ")";
    } else {
      return "iterkeys(" + fmt_type(type.data.type) + ")";
    }
  }
  static unpackInto(manager3, data, type, uctx, arr) {
    let len = unpack_int(data, uctx);
    packer_debug$1("-int " + len);
    arr.length = 0;
    for (let i2 = 0; i2 < len; i2++) {
      arr.push(unpack_field(manager3, data, type.data.type, uctx));
    }
    return arr;
  }
  static unpack(manager3, data, type, uctx) {
    let len = unpack_int(data, uctx);
    packer_debug$1("-int " + len);
    let arr = new Array(len);
    for (let i2 = 0; i2 < len; i2++) {
      arr[i2] = unpack_field(manager3, data, type.data.type, uctx);
    }
    return arr;
  }
  static define() {
    return {
      type: StructEnum.ITERKEYS,
      name: "iterkeys"
    };
  }
};
StructFieldType.register(StructIterKeysField);
var StructUintField = class extends StructFieldType {
  static {
    __name(this, "StructUintField");
  }
  static pack(manager3, data, val2, obj2, field, type) {
    pack_uint(data, val2);
  }
  static unpack(manager3, data, type, uctx) {
    return unpack_uint(data, uctx);
  }
  static validateJSON(manager3, val2, obj2, field, type, instance) {
    if (typeof val2 !== "number" || val2 !== Math.floor(val2)) {
      return "" + val2 + " is not an integer";
    }
    return true;
  }
  static define() {
    return {
      type: StructEnum.UINT,
      name: "uint"
    };
  }
};
StructFieldType.register(StructUintField);
var StructUshortField = class extends StructFieldType {
  static {
    __name(this, "StructUshortField");
  }
  static pack(manager3, data, val2, obj2, field, type) {
    pack_ushort(data, val2);
  }
  static unpack(manager3, data, type, uctx) {
    return unpack_ushort(data, uctx);
  }
  static validateJSON(manager3, val2, obj2, field, type, instance) {
    if (typeof val2 !== "number" || val2 !== Math.floor(val2)) {
      return "" + val2 + " is not an integer";
    }
    return true;
  }
  static define() {
    return {
      type: StructEnum.USHORT,
      name: "ushort"
    };
  }
};
StructFieldType.register(StructUshortField);
var StructStaticArrayField = class extends StructFieldType {
  static {
    __name(this, "StructStaticArrayField");
  }
  static pack(manager3, data, val2, obj2, field, type) {
    if (type.data.size === void 0) {
      throw new Error("type.data.size was undefined");
    }
    let itername = type.data.iname;
    if (val2 === void 0 || !val2.length) {
      this.packNull(manager3, data, field, type);
      return;
    }
    for (let i2 = 0; i2 < type.data.size; i2++) {
      let i22 = Math.min(i2, Math.min(val2.length - 1, type.data.size));
      let val22 = val2[i22];
      if (itername !== "" && itername !== void 0 && field.get) {
        let env = _ws_env$1;
        env[0][0] = itername;
        env[0][1] = val22;
        val22 = manager3._env_call(field.get, obj2, env);
      }
      do_pack(manager3, data, val22, val2, field, type.data.type);
    }
  }
  static useHelperJS(field) {
    return !field.type.data.iname;
  }
  static validateJSON() {
    return StructArrayField.validateJSON(...arguments);
  }
  static fromJSON() {
    return StructArrayField.fromJSON(...arguments);
  }
  static formatJSON(manager3, val2, obj2, field, type, instance, tlvl) {
    return formatArrayJson(manager3, val2, obj2, field, type, type.data.type, instance, tlvl, list2(val2));
  }
  static packNull(manager3, data, field, type) {
    let size = type.data.size;
    for (let i2 = 0; i2 < size; i2++) {
      packNull(manager3, data, field, type.data.type);
    }
  }
  static toJSON(manager3, val2, obj2, field, type) {
    return StructArrayField.toJSON(...arguments);
  }
  static format(type) {
    let type2 = StructFieldTypeMap[type.data.type.type].format(type.data.type);
    let ret2 = `static_array[${type2}, ${type.data.size}`;
    if (type.data.iname) {
      ret2 += `, ${type.data.iname}`;
    }
    ret2 += `]`;
    return ret2;
  }
  static unpackInto(manager3, data, type, uctx, ret2) {
    packer_debug$1("-size: " + type.data.size);
    ret2.length = 0;
    for (let i2 = 0; i2 < type.data.size; i2++) {
      ret2.push(unpack_field(manager3, data, type.data.type, uctx));
    }
    return ret2;
  }
  static unpack(manager3, data, type, uctx) {
    packer_debug$1("-size: " + type.data.size);
    let ret2 = [];
    for (let i2 = 0; i2 < type.data.size; i2++) {
      ret2.push(unpack_field(manager3, data, type.data.type, uctx));
    }
    return ret2;
  }
  static define() {
    return {
      type: StructEnum.STATIC_ARRAY,
      name: "static_array"
    };
  }
};
StructFieldType.register(StructStaticArrayField);
var _sintern2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  _get_pack_debug,
  setWarningMode2,
  setDebugMode2,
  StructFieldTypes,
  StructFieldTypeMap,
  packNull,
  toJSON,
  fromJSON,
  formatJSON: formatJSON$1,
  validateJSON: validateJSON$1,
  do_pack,
  StructFieldType,
  formatArrayJson
});
var structEval = eval;
function setStructEval(val2) {
  structEval = val2;
}
__name(setStructEval, "setStructEval");
var _struct_eval = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  get structEval() {
    return structEval;
  },
  setStructEval
});
var TokSymbol = Symbol("token-info");
function buildJSONParser() {
  let tk2 = /* @__PURE__ */ __name((name, re, func2, example) => new tokdef(name, re, func2, example), "tk");
  let parse;
  let nint = "[+-]?[0-9]+";
  let nhex = "[+-]?0x[0-9a-fA-F]+";
  let nfloat1 = "[+-]?[0-9]+\\.[0-9]*";
  let nfloat2 = "[+-]?[0-9]*\\.[0-9]+";
  let nfloat3 = "[+-]?[0-9]+\\.[0-9]+";
  let nfloatexp = "[+-]?[0-9]+\\.[0-9]+[eE][+-]?[0-9]+";
  let nfloat = `(${nfloat1})|(${nfloat2})|(${nfloatexp})`;
  let num2 = `(${nint})|(${nfloat})|(${nhex})`;
  let numre = new RegExp(num2);
  let numreTest = new RegExp(`(${num2})$`);
  nfloat3 = new RegExp(nfloat3);
  nfloatexp = new RegExp(nfloatexp);
  let tests = ["1.234234", ".23432", "-234.", "1e-17", "-0x23423ff", "+23423", "-4.263256414560601e-14"];
  for (let test2 of tests) {
    if (!numreTest.test(test2)) {
      console.error("Error! Number regexp failed:", test2);
    }
  }
  let tokens2 = [
    tk2("BOOL", /true|false/),
    tk2("WS", /[ \r\t\n]/, (t) => void 0),
    //drop token
    tk2("STRLIT", /["']/, (t) => {
      let lex2 = t.lexer;
      let char = t.value;
      let i2 = lex2.lexpos;
      let lexdata = lex2.lexdata;
      let escape = 0;
      t.value = "";
      let prev;
      while (i2 < lexdata.length) {
        let c = lexdata[i2];
        t.value += c;
        if (c === "\\") {
          escape ^= true;
        } else if (!escape && c === char) {
          break;
        } else {
          escape = false;
        }
        i2++;
      }
      lex2.lexpos = i2 + 1;
      if (t.value.length > 0) {
        t.value = t.value.slice(0, t.value.length - 1);
      }
      return t;
    }),
    tk2("LSBRACKET", /\[/),
    tk2("RSBRACKET", /]/),
    tk2("LBRACE", /{/),
    tk2("RBRACE", /}/),
    tk2("NULL", /null/),
    tk2("COMMA", /,/),
    tk2("COLON", /:/),
    tk2("NUM", numre, (t) => (t.value = parseFloat(t.value), t)),
    tk2("NUM", nfloat3, (t) => (t.value = parseFloat(t.value), t)),
    tk2("NUM", nfloatexp, (t) => (t.value = parseFloat(t.value), t))
  ];
  function tokinfo(t) {
    return {
      lexpos: t.lexpos,
      lineno: t.lineno,
      col: t.col,
      fields: {}
    };
  }
  __name(tokinfo, "tokinfo");
  function p_Array(p) {
    p.expect("LSBRACKET");
    let t = p.peeknext();
    let first3 = true;
    let ret2 = [];
    ret2[TokSymbol] = tokinfo(t);
    while (t && t.type !== "RSBRACKET") {
      if (!first3) {
        p.expect("COMMA");
      }
      ret2[TokSymbol].fields[ret2.length] = tokinfo(t);
      ret2.push(p_Start(p));
      first3 = false;
      t = p.peeknext();
    }
    p.expect("RSBRACKET");
    return ret2;
  }
  __name(p_Array, "p_Array");
  function p_Object(p) {
    p.expect("LBRACE");
    let obj2 = {};
    let first3 = true;
    let t = p.peeknext();
    obj2[TokSymbol] = tokinfo(t);
    while (t && t.type !== "RBRACE") {
      if (!first3) {
        p.expect("COMMA");
      }
      let key2 = p.expect("STRLIT");
      p.expect("COLON");
      let val2 = p_Start(p, true);
      obj2[key2] = val2;
      first3 = false;
      t = p.peeknext();
      obj2[TokSymbol].fields[key2] = tokinfo(t);
    }
    p.expect("RBRACE");
    return obj2;
  }
  __name(p_Object, "p_Object");
  function p_Start(p, throwError = true) {
    let t = p.peeknext();
    if (t.type === "LSBRACKET") {
      return p_Array(p);
    } else if (t.type === "LBRACE") {
      return p_Object(p);
    } else if (t.type === "STRLIT" || t.type === "NUM" || t.type === "NULL" || t.type === "BOOL") {
      return p.next().value;
    } else {
      p.error(t, "Unknown token");
    }
  }
  __name(p_Start, "p_Start");
  function p_Error(token3, msg) {
    throw new PUTIL_ParseError("Parse Error");
  }
  __name(p_Error, "p_Error");
  let lex = new lexer(tokens2);
  lex.linestart = 0;
  parse = new parser(lex, p_Error);
  parse.start = p_Start;
  return parse;
}
__name(buildJSONParser, "buildJSONParser");
var jsonParser = buildJSONParser();
function printContext(buf, tokinfo, printColors = true) {
  let lines = buf.split("\n");
  if (!tokinfo) {
    return "";
  }
  let lineno = tokinfo.lineno;
  let col = tokinfo.col;
  let istart = Math.max(lineno - 50, 0);
  let iend = Math.min(lineno + 2, lines.length - 1);
  let s = "";
  if (printColors) {
    s += termColor("  /* pretty-printed json */\n", "blue");
  } else {
    s += "/* pretty-printed json */\n";
  }
  for (let i2 = istart; i2 < iend; i2++) {
    let l = lines[i2];
    let idx = "" + i2;
    while (idx.length < 3) {
      idx = " " + idx;
    }
    if (i2 === lineno && printColors) {
      s += termColor(`${idx}: ${l}
`, "yellow");
    } else {
      s += `${idx}: ${l}
`;
    }
    if (i2 === lineno) {
      let l2 = "";
      for (let j2 = 0; j2 < col + 5; j2++) {
        l2 += " ";
      }
      s += l2 + "^\n";
    }
  }
  return s;
}
__name(printContext, "printContext");
var nGlobal;
if (typeof globalThis !== "undefined") {
  nGlobal = globalThis;
} else if (typeof window !== "undefined") {
  nGlobal = window;
} else if (typeof global !== "undefined") {
  nGlobal = global;
} else if (typeof globals !== "undefined") {
  nGlobal = globals;
} else if (typeof self !== "undefined") {
  nGlobal = self;
}
var DEBUG = {};
function updateDEBUG() {
  for (let k2 in Object.keys(DEBUG)) {
    delete DEBUG[k2];
  }
  if (typeof nGlobal.DEBUG === "object") {
    for (let k2 in nGlobal.DEBUG) {
      DEBUG[k2] = nGlobal.DEBUG[k2];
    }
  }
}
__name(updateDEBUG, "updateDEBUG");
"use strict";
var sintern2 = _sintern2;
var struct_eval = _struct_eval;
var warninglvl = 2;
var truncateDollarSign$1 = true;
var manager;
var JSONError = class extends Error {
  static {
    __name(this, "JSONError");
  }
};
;
function printCodeLines(code3) {
  let lines = code3.split(String.fromCharCode(10));
  let buf = "";
  for (let i2 = 0; i2 < lines.length; i2++) {
    let line2 = "" + (i2 + 1) + ":";
    while (line2.length < 3) {
      line2 += " ";
    }
    line2 += " " + lines[i2];
    buf += line2 + String.fromCharCode(10);
  }
  return buf;
}
__name(printCodeLines, "printCodeLines");
function printEvalError(code) {
  console.log("== CODE ==");
  console.log(printCodeLines(code));
  eval(code);
}
__name(printEvalError, "printEvalError");
function setTruncateDollarSign(v) {
  truncateDollarSign$1 = !!v;
}
__name(setTruncateDollarSign, "setTruncateDollarSign");
function _truncateDollarSign(s) {
  let i2 = s.search("$");
  if (i2 > 0) {
    return s.slice(0, i2).trim();
  }
  return s;
}
__name(_truncateDollarSign, "_truncateDollarSign");
function unmangle(name) {
  if (truncateDollarSign$1) {
    return _truncateDollarSign(name);
  } else {
    return name;
  }
}
__name(unmangle, "unmangle");
var _static_envcode_null = "";
function gen_tabstr(tot) {
  let ret2 = "";
  for (let i2 = 0; i2 < tot; i2++) {
    ret2 += " ";
  }
  return ret2;
}
__name(gen_tabstr, "gen_tabstr");
var packer_debug, packer_debug_start, packer_debug_end;
function update_debug_data() {
  let ret2 = _get_pack_debug();
  packer_debug = ret2.packer_debug;
  packer_debug_start = ret2.packer_debug_start;
  packer_debug_end = ret2.packer_debug_end;
  warninglvl = ret2.warninglvl;
}
__name(update_debug_data, "update_debug_data");
update_debug_data();
function setWarningMode(t) {
  sintern2.setWarningMode2(t);
  if (typeof t !== "number" || isNaN(t)) {
    throw new Error("Expected a single number (>= 0) argument to setWarningMode");
  }
  warninglvl = t;
}
__name(setWarningMode, "setWarningMode");
function setDebugMode(t) {
  sintern2.setDebugMode2(t);
  update_debug_data();
}
__name(setDebugMode, "setDebugMode");
var _ws_env = [[void 0, void 0]];
function define_empty_class(scls, name) {
  let cls2 = /* @__PURE__ */ __name(function() {
  }, "cls");
  cls2.prototype = Object.create(Object.prototype);
  cls2.constructor = cls2.prototype.constructor = cls2;
  let keywords2 = scls.keywords;
  cls2.STRUCT = name + " {\n  }\n";
  cls2.structName = name;
  cls2.prototype.loadSTRUCT = function(reader) {
    reader(this);
  };
  cls2.newSTRUCT = function() {
    return new this();
  };
  return cls2;
}
__name(define_empty_class, "define_empty_class");
var haveCodeGen;
var STRUCT = class _STRUCT {
  static {
    __name(this, "STRUCT");
  }
  constructor() {
    this.idgen = 0;
    this.allowOverriding = true;
    this.structs = {};
    this.struct_cls = {};
    this.struct_ids = {};
    this.compiled_code = {};
    this.null_natives = {};
    this.define_null_native("Object", Object);
    this.jsonUseColors = true;
    this.jsonBuf = "";
    this.formatCtx = {};
  }
  static inherit(child, parent2, structName2 = child.name) {
    const keywords2 = this.keywords;
    if (!parent2.STRUCT) {
      return structName2 + "{\n";
    }
    let stt = struct_parse.parse(parent2.STRUCT);
    let code3 = structName2 + "{\n";
    code3 += _STRUCT.fmt_struct(stt, true, false, true);
    return code3;
  }
  /** invoke loadSTRUCT methods on parent objects.  note that
   reader() is only called once.  it is called however.*/
  static Super(obj2, reader) {
    if (warninglvl > 0) {
      console.warn("deprecated");
    }
    reader(obj2);
    function reader2(obj3) {
    }
    __name(reader2, "reader2");
    let cls2 = obj2.constructor;
    let bad = cls2 === void 0 || cls2.prototype === void 0 || cls2.prototype.__proto__ === void 0;
    if (bad) {
      return;
    }
    let parent2 = cls2.prototype.__proto__.constructor;
    bad = bad || parent2 === void 0;
    if (!bad && parent2.prototype.loadSTRUCT && parent2.prototype.loadSTRUCT !== obj2.loadSTRUCT) {
      parent2.prototype.loadSTRUCT.call(obj2, reader2);
    }
  }
  /** deprecated.  used with old fromSTRUCT interface. */
  static chain_fromSTRUCT(cls2, reader) {
    if (warninglvl > 0) {
      console.warn("Using deprecated (and evil) chain_fromSTRUCT method, eek!");
    }
    let proto = cls2.prototype;
    let parent2 = cls2.prototype.prototype.constructor;
    let obj2 = parent2.fromSTRUCT(reader);
    let obj22 = new cls2();
    let keys2 = Object.keys(obj2).concat(Object.getOwnPropertySymbols(obj2));
    for (let i2 = 0; i2 < keys2.length; i2++) {
      let k2 = keys2[i2];
      try {
        obj22[k2] = obj2[k2];
      } catch (error) {
        if (warninglvl > 0) {
          console.warn("  failed to set property", k2);
        }
      }
    }
    return obj22;
  }
  //defined_classes is an array of class constructors
  //with STRUCT scripts, *OR* another STRUCT instance
  //
  static formatStruct(stt, internal_only, no_helper_js) {
    return this.fmt_struct(stt, internal_only, no_helper_js);
  }
  static fmt_struct(stt, internal_only, no_helper_js, addComments) {
    if (internal_only === void 0)
      internal_only = false;
    if (no_helper_js === void 0)
      no_helper_js = false;
    let s = "";
    if (!internal_only) {
      s += stt.name;
      if (stt.id !== -1)
        s += " id=" + stt.id;
      s += " {\n";
    }
    let tab2 = "  ";
    function fmt_type2(type) {
      return StructFieldTypeMap[type.type].format(type);
      if (type.type === StructEnum.ARRAY || type.type === StructEnum.ITER || type.type === StructEnum.ITERKEYS) {
        if (type.data.iname !== "" && type.data.iname !== void 0) {
          return "array(" + type.data.iname + ", " + fmt_type2(type.data.type) + ")";
        } else {
          return "array(" + fmt_type2(type.data.type) + ")";
        }
      } else if (type.type === StructEnum.STATIC_STRING) {
        return "static_string[" + type.data.maxlength + "]";
      } else if (type.type === StructEnum.STRUCT) {
        return type.data;
      } else if (type.type === StructEnum.TSTRUCT) {
        return "abstract(" + type.data + ")";
      } else {
        return StructTypeMap[type.type];
      }
    }
    __name(fmt_type2, "fmt_type");
    let fields = stt.fields;
    for (let i2 = 0; i2 < fields.length; i2++) {
      let f3 = fields[i2];
      s += tab2 + f3.name + " : " + fmt_type2(f3.type);
      if (!no_helper_js && f3.get !== void 0) {
        s += " | " + f3.get.trim();
      }
      s += ";";
      if (addComments && f3.comment.trim()) {
        s += f3.comment.trim();
      }
      s += "\n";
    }
    if (!internal_only)
      s += "}";
    return s;
  }
  static setClassKeyword(keyword, nameKeyword = void 0) {
    if (!nameKeyword) {
      nameKeyword = keyword.toLowerCase() + "Name";
    }
    this.keywords = {
      script: keyword,
      name: nameKeyword,
      load: "load" + keyword,
      new: "new" + keyword,
      after: "after" + keyword,
      from: "from" + keyword
    };
  }
  define_null_native(name, cls2) {
    const keywords2 = this.constructor.keywords;
    let obj2 = define_empty_class(this.constructor, name);
    let stt = struct_parse.parse(obj2.STRUCT);
    stt.id = this.idgen++;
    this.structs[name] = stt;
    this.struct_cls[name] = cls2;
    this.struct_ids[stt.id] = stt;
    this.null_natives[name] = 1;
  }
  validateStructs(onerror) {
    function getType(type) {
      switch (type.type) {
        case StructEnum.ITERKEYS:
        case StructEnum.ITER:
        case StructEnum.STATIC_ARRAY:
        case StructEnum.ARRAY:
          return getType(type.data.type);
        case StructEnum.TSTRUCT:
          return type;
        case StructEnum.STRUCT:
        default:
          return type;
      }
    }
    __name(getType, "getType");
    function formatType(type) {
      let ret2 = {};
      ret2.type = type.type;
      if (typeof ret2.type === "number") {
        for (let k2 in StructEnum) {
          if (StructEnum[k2] === ret2.type) {
            ret2.type = k2;
            break;
          }
        }
      } else if (typeof ret2.type === "object") {
        ret2.type = formatType(ret2.type);
      }
      if (typeof type.data === "object") {
        ret2.data = formatType(type.data);
      } else {
        ret2.data = type.data;
      }
      return ret2;
    }
    __name(formatType, "formatType");
    function throwError(stt, field, msg) {
      let buf = _STRUCT.formatStruct(stt);
      console.error(buf + "\n\n" + msg);
      if (onerror) {
        onerror(msg, stt, field);
      } else {
        throw new Error(msg);
      }
    }
    __name(throwError, "throwError");
    for (let k2 in this.structs) {
      let stt = this.structs[k2];
      for (let field of stt.fields) {
        if (field.name === "this") {
          let type2 = field.type.type;
          if (ValueTypes.has(type2)) {
            throwError(stt, field, "'this' cannot be used with value types");
          }
        }
        let type = getType(field.type);
        if (type.type !== StructEnum.STRUCT && type.type !== StructEnum.TSTRUCT) {
          continue;
        }
        if (!(type.data in this.structs)) {
          let msg = stt.name + ":" + field.name + ": Unknown struct " + type.data + ".";
          throwError(stt, field, msg);
        }
      }
    }
  }
  forEach(func2, thisvar) {
    for (let k2 in this.structs) {
      let stt = this.structs[k2];
      if (thisvar !== void 0)
        func2.call(thisvar, stt);
      else
        func2(stt);
    }
  }
  //defaults to structjs.manager
  parse_structs(buf, defined_classes) {
    const keywords2 = this.constructor.keywords;
    if (defined_classes === void 0) {
      defined_classes = manager;
    }
    if (defined_classes instanceof _STRUCT) {
      let struct2 = defined_classes;
      defined_classes = [];
      for (let k2 in struct2.struct_cls) {
        defined_classes.push(struct2.struct_cls[k2]);
      }
    }
    if (defined_classes === void 0) {
      defined_classes = [];
      for (let k2 in manager.struct_cls) {
        defined_classes.push(manager.struct_cls[k2]);
      }
    }
    let clsmap = {};
    for (let i2 = 0; i2 < defined_classes.length; i2++) {
      let cls2 = defined_classes[i2];
      if (!cls2.structName && cls2.STRUCT) {
        let stt = struct_parse.parse(cls2.STRUCT.trim());
        cls2.structName = stt.name;
      } else if (!cls2.structName && cls2.name !== "Object") {
        if (warninglvl > 0)
          console.log("Warning, bad class in registered class list", unmangle(cls2.name), cls2);
        continue;
      }
      clsmap[cls2.structName] = defined_classes[i2];
    }
    struct_parse.input(buf);
    while (!struct_parse.at_end()) {
      let stt = struct_parse.parse(void 0, false);
      if (!(stt.name in clsmap)) {
        if (!(stt.name in this.null_natives)) {
          if (warninglvl > 0)
            console.log("WARNING: struct " + stt.name + " is missing from class list.");
        }
        let dummy = define_empty_class(this.constructor, stt.name);
        dummy.STRUCT = _STRUCT.fmt_struct(stt);
        dummy.structName = stt.name;
        dummy.prototype.structName = dummy.name;
        this.struct_cls[dummy.structName] = dummy;
        this.structs[dummy.structName] = stt;
        if (stt.id !== -1)
          this.struct_ids[stt.id] = stt;
      } else {
        this.struct_cls[stt.name] = clsmap[stt.name];
        this.structs[stt.name] = stt;
        if (stt.id !== -1)
          this.struct_ids[stt.id] = stt;
      }
      let tok = struct_parse.peek();
      while (tok && (tok.value === "\n" || tok.value === "\r" || tok.value === "	" || tok.value === " ")) {
        tok = struct_parse.peek();
      }
    }
  }
  /** adds all structs referenced by cls inside of srcSTRUCT
   *  to this */
  registerGraph(srcSTRUCT, cls2) {
    if (!cls2.structName) {
      console.warn("class was not in srcSTRUCT");
      return this.register(cls2);
    }
    let recStruct;
    let recArray = /* @__PURE__ */ __name((t) => {
      switch (t.type) {
        case StructEnum.ARRAY:
          return recArray(t.data.type);
        case StructEnum.ITERKEYS:
          return recArray(t.data.type);
        case StructEnum.STATIC_ARRAY:
          return recArray(t.data.type);
        case StructEnum.ITER:
          return recArray(t.data.type);
        case StructEnum.STRUCT:
        case StructEnum.TSTRUCT: {
          let st2 = srcSTRUCT.structs[t.data];
          let cls3 = srcSTRUCT.struct_cls[st2.name];
          return recStruct(st2, cls3);
        }
      }
    }, "recArray");
    recStruct = /* @__PURE__ */ __name((st2, cls3) => {
      if (!(cls3.structName in this.structs)) {
        this.add_class(cls3, cls3.structName);
      }
      for (let f3 of st2.fields) {
        if (f3.type.type === StructEnum.STRUCT || f3.type.type === StructEnum.TSTRUCT) {
          let st22 = srcSTRUCT.structs[f3.type.data];
          let cls22 = srcSTRUCT.struct_cls[st22.name];
          recStruct(st22, cls22);
        } else if (f3.type.type === StructEnum.ARRAY) {
          recArray(f3.type);
        } else if (f3.type.type === StructEnum.ITER) {
          recArray(f3.type);
        } else if (f3.type.type === StructEnum.ITERKEYS) {
          recArray(f3.type);
        } else if (f3.type.type === StructEnum.STATIC_ARRAY) {
          recArray(f3.type);
        }
      }
    }, "recStruct");
    let st = srcSTRUCT.structs[cls2.structName];
    recStruct(st, cls2);
  }
  mergeScripts(child, parent2) {
    let stc = struct_parse.parse(child.trim());
    let stp = struct_parse.parse(parent2.trim());
    let fieldset = /* @__PURE__ */ new Set();
    for (let f3 of stc.fields) {
      fieldset.add(f3.name);
    }
    let fields = [];
    for (let f3 of stp.fields) {
      if (!fieldset.has(f3.name)) {
        fields.push(f3);
      }
    }
    stc.fields = fields.concat(stc.fields);
    return _STRUCT.fmt_struct(stc, false, false);
  }
  inlineRegister(cls2, structScript) {
    const keywords2 = this.constructor.keywords;
    let p = cls2.__proto__;
    while (p && p !== Object) {
      if (p.hasOwnProperty(keywords2.script)) {
        structScript = this.mergeScripts(structScript, p.STRUCT);
        break;
      }
      p = p.__proto__;
    }
    cls2.STRUCT = structScript;
    this.register(cls2);
    return structScript;
  }
  register(cls2, structName2) {
    return this.add_class(cls2, structName2);
  }
  unregister(cls2) {
    const keywords2 = this.constructor.keywords;
    if (!cls2 || !cls2.structName || !(cls2.structName in this.struct_cls)) {
      console.warn("Class not registered with nstructjs", cls2);
      return;
    }
    let st = this.structs[cls2.structName];
    delete this.structs[cls2.structName];
    delete this.struct_cls[cls2.structName];
    delete this.struct_ids[st.id];
  }
  add_class(cls2, structName2) {
    if (cls2 === Object) {
      return;
    }
    const keywords2 = this.constructor.keywords;
    if (cls2.STRUCT) {
      let bad = false;
      let p = cls2;
      while (p) {
        p = p.__proto__;
        if (p && p.STRUCT && p.STRUCT === cls2.STRUCT) {
          bad = true;
          break;
        }
      }
      if (bad) {
        if (warninglvl > 0) {
          console.warn("Generating " + keywords2.script + " script for derived class " + unmangle(cls2.name));
        }
        if (!structName2) {
          structName2 = unmangle(cls2.name);
        }
        cls2.STRUCT = _STRUCT.inherit(cls2, p) + "\n}";
      }
    }
    if (!cls2.STRUCT) {
      throw new Error("class " + unmangle(cls2.name) + " has no " + keywords2.script + " script");
    }
    let stt = struct_parse.parse(cls2.STRUCT);
    stt.name = unmangle(stt.name);
    cls2.structName = stt.name;
    if (cls2.newSTRUCT === void 0) {
      cls2.newSTRUCT = function() {
        return new this();
      };
    }
    if (structName2 !== void 0) {
      stt.name = cls2.structName = structName2;
    } else if (cls2.structName === void 0) {
      cls2.structName = stt.name;
    } else {
      stt.name = cls2.structName;
    }
    if (cls2.structName in this.structs) {
      if (warninglvl > 0) {
        console.warn("Struct " + unmangle(cls2.structName) + " is already registered", cls2);
      }
      if (!this.allowOverriding) {
        throw new Error("Struct " + unmangle(cls2.structName) + " is already registered");
      }
      return;
    }
    if (stt.id === -1)
      stt.id = this.idgen++;
    this.structs[cls2.structName] = stt;
    this.struct_cls[cls2.structName] = cls2;
    this.struct_ids[stt.id] = stt;
  }
  isRegistered(cls2) {
    const keywords2 = this.constructor.keywords;
    if (!cls2.hasOwnProperty("structName")) {
      return false;
    }
    return cls2 === this.struct_cls[cls2.structName];
  }
  get_struct_id(id) {
    return this.struct_ids[id];
  }
  get_struct(name) {
    if (!(name in this.structs)) {
      console.warn("Unknown struct", name);
      throw new Error("Unknown struct " + name);
    }
    return this.structs[name];
  }
  get_struct_cls(name) {
    if (!(name in this.struct_cls)) {
      console.trace();
      throw new Error("Unknown struct " + name);
    }
    return this.struct_cls[name];
  }
  _env_call(code3, obj2, env) {
    let envcode = _static_envcode_null;
    if (env !== void 0) {
      envcode = "";
      for (let i2 = 0; i2 < env.length; i2++) {
        envcode = "let " + env[i2][0] + " = env[" + i2.toString() + "][1];\n" + envcode;
      }
    }
    let fullcode = "";
    if (envcode !== _static_envcode_null)
      fullcode = envcode + code3;
    else
      fullcode = code3;
    let func2;
    if (!(fullcode in this.compiled_code)) {
      let code22 = "func = function(obj, env) { " + envcode + "return " + code3 + "}";
      try {
        func2 = struct_eval.structEval(code22);
      } catch (err) {
        console.warn(err.stack);
        console.warn(code22);
        console.warn(" ");
        throw err;
      }
      this.compiled_code[fullcode] = func2;
    } else {
      func2 = this.compiled_code[fullcode];
    }
    try {
      return func2.call(obj2, obj2, env);
    } catch (err) {
      console.warn(err.stack);
      let code22 = "func = function(obj, env) { " + envcode + "return " + code3 + "}";
      console.warn(code22);
      console.warn(" ");
      throw err;
    }
  }
  write_struct(data, obj2, stt) {
    function use_helper_js(field) {
      let type = field.type.type;
      let cls2 = StructFieldTypeMap[type];
      return cls2.useHelperJS(field);
    }
    __name(use_helper_js, "use_helper_js");
    let fields = stt.fields;
    let thestruct = this;
    for (let i2 = 0; i2 < fields.length; i2++) {
      let f3 = fields[i2];
      let t1 = f3.type;
      let t2 = t1.type;
      if (use_helper_js(f3)) {
        let val2;
        let type = t2;
        if (f3.get !== void 0) {
          val2 = thestruct._env_call(f3.get, obj2);
        } else {
          val2 = f3.name === "this" ? obj2 : obj2[f3.name];
        }
        if (DEBUG.tinyeval) {
          console.log("\n\n\n", f3.get, "Helper JS Ret", val2, "\n\n\n");
        }
        sintern2.do_pack(this, data, val2, obj2, f3, t1);
      } else {
        let val2 = f3.name === "this" ? obj2 : obj2[f3.name];
        sintern2.do_pack(this, data, val2, obj2, f3, t1);
      }
    }
  }
  /**
   @param data : array to write data into,
   @param obj  : structable object
   */
  write_object(data, obj2) {
    const keywords2 = this.constructor.keywords;
    let cls2 = obj2.constructor.structName;
    let stt = this.get_struct(cls2);
    if (data === void 0) {
      data = [];
    }
    this.write_struct(data, obj2, stt);
    return data;
  }
  /**
     Read an object from binary data
  
     @param data : DataView or Uint8Array instance
     @param cls_or_struct_id : Structable class
     @param uctx : internal parameter
     @return {cls_or_struct_id} Instance of cls_or_struct_id
     */
  readObject(data, cls_or_struct_id, uctx) {
    if (data instanceof Uint8Array || data instanceof Uint8ClampedArray) {
      data = new DataView(data.buffer);
    } else if (data instanceof Array) {
      data = new DataView(new Uint8Array(data).buffer);
    }
    return this.read_object(data, cls_or_struct_id, uctx);
  }
  /**
   @param data array to write data into,
   @param obj structable object
   */
  writeObject(data, obj2) {
    return this.write_object(data, obj2);
  }
  writeJSON(obj2, stt = void 0) {
    const keywords2 = this.constructor.keywords;
    let cls2 = obj2.constructor;
    stt = stt || this.get_struct(cls2.structName);
    function use_helper_js(field) {
      let type = field.type.type;
      let cls3 = StructFieldTypeMap[type];
      return cls3.useHelperJS(field);
    }
    __name(use_helper_js, "use_helper_js");
    let toJSON2 = sintern2.toJSON;
    let fields = stt.fields;
    let thestruct = this;
    let json2 = {};
    for (let i2 = 0; i2 < fields.length; i2++) {
      let f3 = fields[i2];
      let val2;
      let t1 = f3.type;
      let json22;
      if (use_helper_js(f3)) {
        if (f3.get !== void 0) {
          val2 = thestruct._env_call(f3.get, obj2);
        } else {
          val2 = f3.name === "this" ? obj2 : obj2[f3.name];
        }
        if (DEBUG.tinyeval) {
          console.log("\n\n\n", f3.get, "Helper JS Ret", val2, "\n\n\n");
        }
        json22 = toJSON2(this, val2, obj2, f3, t1);
      } else {
        val2 = f3.name === "this" ? obj2 : obj2[f3.name];
        json22 = toJSON2(this, val2, obj2, f3, t1);
      }
      if (f3.name !== "this") {
        json2[f3.name] = json22;
      } else {
        let isArray = Array.isArray(json22);
        isArray = isArray || f3.type.type === StructTypes.ARRAY;
        isArray = isArray || f3.type.type === StructTypes.STATIC_ARRAY;
        if (isArray) {
          json2.length = json22.length;
          for (let i3 = 0; i3 < json22.length; i3++) {
            json2[i3] = json22[i3];
          }
        } else {
          Object.assign(json2, json22);
        }
      }
    }
    return json2;
  }
  /**
   @param data : DataView or Uint8Array instance
   @param cls_or_struct_id : Structable class
   @param uctx : internal parameter
   */
  read_object(data, cls_or_struct_id, uctx, objInstance) {
    const keywords2 = this.constructor.keywords;
    let cls2, stt;
    if (data instanceof Array) {
      data = new DataView(new Uint8Array(data).buffer);
    }
    if (typeof cls_or_struct_id === "number") {
      cls2 = this.struct_cls[this.struct_ids[cls_or_struct_id].name];
    } else {
      cls2 = cls_or_struct_id;
    }
    if (cls2 === void 0) {
      throw new Error("bad cls_or_struct_id " + cls_or_struct_id);
    }
    stt = this.structs[cls2.structName];
    if (uctx === void 0) {
      uctx = new unpack_context();
      packer_debug("\n\n=Begin reading " + cls2.structName + "=");
    }
    let thestruct = this;
    let this2 = this;
    function unpack_field2(type) {
      return StructFieldTypeMap[type.type].unpack(this2, data, type, uctx);
    }
    __name(unpack_field2, "unpack_field");
    function unpack_into(type, dest) {
      return StructFieldTypeMap[type.type].unpackInto(this2, data, type, uctx, dest);
    }
    __name(unpack_into, "unpack_into");
    let was_run = false;
    function makeLoader(stt2) {
      return /* @__PURE__ */ __name(function load2(obj2) {
        if (was_run) {
          return;
        }
        was_run = true;
        let fields = stt2.fields;
        let flen = fields.length;
        for (let i2 = 0; i2 < flen; i2++) {
          let f3 = fields[i2];
          if (f3.name === "this") {
            unpack_into(f3.type, obj2);
          } else {
            obj2[f3.name] = unpack_field2(f3.type);
          }
        }
      }, "load");
    }
    __name(makeLoader, "makeLoader");
    let load = makeLoader(stt);
    if (cls2.prototype.loadSTRUCT !== void 0) {
      let obj2 = objInstance;
      if (!obj2 && cls2.newSTRUCT !== void 0) {
        obj2 = cls2.newSTRUCT(load);
      } else if (!obj2) {
        obj2 = new cls2();
      }
      obj2.loadSTRUCT(load);
      if (!was_run) {
        console.warn("" + cls2.structName + ".prototype.loadSTRUCT() did not execute its loader callback!");
        load(obj2);
      }
      return obj2;
    } else if (cls2.fromSTRUCT !== void 0) {
      if (warninglvl > 1) {
        console.warn("Warning: class " + unmangle(cls2.name) + " is using deprecated fromSTRUCT interface; use newSTRUCT/loadSTRUCT instead");
      }
      return cls2.fromSTRUCT(load);
    } else {
      let obj2 = objInstance;
      if (!obj2 && cls2.newSTRUCT !== void 0) {
        obj2 = cls2.newSTRUCT(load);
      } else if (!obj2) {
        obj2 = new cls2();
      }
      load(obj2);
      return obj2;
    }
  }
  validateJSON(json2, cls_or_struct_id, useInternalParser = true, useColors = true, consoleLogger2 = function() {
    console.log(...arguments);
  }, _abstractKey = "_structName") {
    if (cls_or_struct_id === void 0) {
      throw new Error(this.constructor.name + ".prototype.validateJSON: Expected at least two arguments");
    }
    try {
      json2 = JSON.stringify(json2, void 0, 2);
      this.jsonBuf = json2;
      this.jsonUseColors = useColors;
      this.jsonLogger = consoleLogger2;
      jsonParser.logger = this.jsonLogger;
      if (useInternalParser) {
        json2 = jsonParser.parse(json2);
      } else {
        json2 = JSON.parse(json2);
      }
      this.validateJSONIntern(json2, cls_or_struct_id, _abstractKey);
    } catch (error) {
      if (!(error instanceof JSONError)) {
        console.error(error.stack);
      }
      this.jsonLogger(error.message);
      return false;
    }
    return true;
  }
  validateJSONIntern(json2, cls_or_struct_id, _abstractKey = "_structName") {
    const keywords2 = this.constructor.keywords;
    let cls2, stt;
    if (typeof cls_or_struct_id === "number") {
      cls2 = this.struct_cls[this.struct_ids[cls_or_struct_id].name];
    } else if (cls_or_struct_id instanceof NStruct) {
      cls2 = this.get_struct_cls(cls_or_struct_id.name);
    } else {
      cls2 = cls_or_struct_id;
    }
    if (cls2 === void 0) {
      throw new Error("bad cls_or_struct_id " + cls_or_struct_id);
    }
    stt = this.structs[cls2.structName];
    if (stt === void 0) {
      throw new Error("unknown class " + cls2);
    }
    let fields = stt.fields;
    let flen = fields.length;
    let keys2 = /* @__PURE__ */ new Set();
    keys2.add(_abstractKey);
    let keyTestJson = json2;
    for (let i2 = 0; i2 < flen; i2++) {
      let f3 = fields[i2];
      let val2;
      let tokinfo;
      if (f3.name === "this") {
        val2 = json2;
        keyTestJson = {
          "this": json2
        };
        keys2.add("this");
        tokinfo = json2[TokSymbol];
      } else {
        val2 = json2[f3.name];
        keys2.add(f3.name);
        tokinfo = json2[TokSymbol] ? json2[TokSymbol].fields[f3.name] : void 0;
        if (!tokinfo) {
          let f22 = fields[Math.max(i2 - 1, 0)];
          tokinfo = TokSymbol[TokSymbol] ? json2[TokSymbol].fields[f22.name] : void 0;
        }
        if (!tokinfo) {
          tokinfo = json2[TokSymbol];
        }
      }
      if (val2 === void 0) {
      }
      let instance = f3.name === "this" ? val2 : json2;
      let ret2 = sintern2.validateJSON(this, val2, json2, f3, f3.type, instance, _abstractKey);
      if (!ret2 || typeof ret2 === "string") {
        let msg = typeof ret2 === "string" ? ": " + ret2 : "";
        if (tokinfo) {
          this.jsonLogger(printContext(this.jsonBuf, tokinfo, this.jsonUseColors));
        }
        if (val2 === void 0) {
          throw new JSONError(stt.name + ": Missing json field " + f3.name + msg);
        } else {
          throw new JSONError(stt.name + ": Invalid json field " + f3.name + msg);
        }
        return false;
      }
    }
    for (let k2 in keyTestJson) {
      if (typeof json2[k2] === "symbol") {
        continue;
      }
      if (!keys2.has(k2)) {
        this.jsonLogger(cls2.STRUCT);
        throw new JSONError(stt.name + ": Unknown json field " + k2);
        return false;
      }
    }
    return true;
  }
  readJSON(json2, cls_or_struct_id, objInstance = void 0) {
    const keywords2 = this.constructor.keywords;
    let cls2, stt;
    if (typeof cls_or_struct_id === "number") {
      cls2 = this.struct_cls[this.struct_ids[cls_or_struct_id].name];
    } else if (cls_or_struct_id instanceof NStruct) {
      cls2 = this.get_struct_cls(cls_or_struct_id.name);
    } else {
      cls2 = cls_or_struct_id;
    }
    if (cls2 === void 0) {
      throw new Error("bad cls_or_struct_id " + cls_or_struct_id);
    }
    stt = this.structs[cls2.structName];
    packer_debug("\n\n=Begin reading " + cls2.structName + "=");
    let thestruct = this;
    let this2 = this;
    let was_run = false;
    let fromJSON2 = sintern2.fromJSON;
    function makeLoader(stt2) {
      return /* @__PURE__ */ __name(function load2(obj2) {
        if (was_run) {
          return;
        }
        was_run = true;
        let fields = stt2.fields;
        let flen = fields.length;
        for (let i2 = 0; i2 < flen; i2++) {
          let f3 = fields[i2];
          let val2;
          if (f3.name === "this") {
            val2 = json2;
          } else {
            val2 = json2[f3.name];
          }
          if (val2 === void 0) {
            if (warninglvl > 1) {
              console.warn("nstructjs.readJSON: Missing field " + f3.name + " in struct " + stt2.name);
            }
            continue;
          }
          let instance = f3.name === "this" ? obj2 : objInstance;
          let ret2 = fromJSON2(this2, val2, obj2, f3, f3.type, instance);
          if (f3.name !== "this") {
            obj2[f3.name] = ret2;
          }
        }
      }, "load");
    }
    __name(makeLoader, "makeLoader");
    let load = makeLoader(stt);
    if (cls2.prototype.loadSTRUCT !== void 0) {
      let obj2 = objInstance;
      if (!obj2 && cls2.newSTRUCT !== void 0) {
        obj2 = cls2.newSTRUCT(load);
      } else if (!obj2) {
        obj2 = new cls2();
      }
      obj2.loadSTRUCT(load);
      return obj2;
    } else if (cls2.fromSTRUCT !== void 0) {
      if (warninglvl > 1) {
        console.warn("Warning: class " + unmangle(cls2.name) + " is using deprecated fromSTRUCT interface; use newSTRUCT/loadSTRUCT instead");
      }
      return cls2.fromSTRUCT(load);
    } else {
      let obj2 = objInstance;
      if (!obj2 && cls2.newSTRUCT !== void 0) {
        obj2 = cls2.newSTRUCT(load);
      } else if (!obj2) {
        obj2 = new cls2();
      }
      load(obj2);
      return obj2;
    }
  }
  formatJSON_intern(json2, stt, field, tlvl = 0) {
    const keywords2 = this.constructor.keywords;
    const addComments = this.formatCtx.addComments;
    let s = "{";
    if (addComments && field && field.comment.trim()) {
      s += " " + field.comment.trim();
    }
    s += "\n";
    for (let f3 of stt.fields) {
      let value2 = json2[f3.name];
      s += tab(tlvl + 1) + f3.name + ": ";
      s += sintern2.formatJSON(this, value2, json2, f3, f3.type, void 0, tlvl + 1);
      s += ",";
      let basetype = f3.type.type;
      if (ArrayTypes.has(basetype)) {
        basetype = f3.type.data.type.type;
      }
      const addComment = ValueTypes.has(basetype) && addComments && f3.comment.trim();
      if (addComment) {
        s += " " + f3.comment.trim();
      }
      s += "\n";
    }
    s += tab(tlvl) + "}";
    return s;
  }
  formatJSON(json2, cls2, addComments = true, validate = true) {
    const keywords2 = this.constructor.keywords;
    let s = "";
    if (validate) {
      this.validateJSON(json2, cls2);
    }
    let stt = this.structs[cls2.structName];
    this.formatCtx = {
      addComments,
      validate
    };
    return this.formatJSON_intern(json2, stt);
  }
};
;
if (haveCodeGen) {
  try {
    eval(code);
  } catch (error) {
    printEvalError(code);
  }
  StructClass.keywords = {
    name: "structName",
    script: "STRUCT",
    load: "loadSTRUCT",
    from: "fromSTRUCT",
    new: "newSTRUCT"
  };
  STRUCT = StructClass;
}
STRUCT.setClassKeyword("STRUCT");
function deriveStructManager(keywords = {
  script: "STRUCT",
  name: void 0,
  //script.toLowerCase + "Name"
  load: void 0,
  //"load" + script
  new: void 0,
  //"new" + script
  from: void 0
  //"from" + script
}) {
  if (!keywords.name) {
    keywords.name = keywords.script.toLowerCase() + "Name";
  }
  if (!keywords.load) {
    keywords.load = "load" + keywords.script;
  }
  if (!keywords.new) {
    keywords.new = "new" + keywords.script;
  }
  if (!keywords.from) {
    keywords.from = "from" + keywords.script;
  }
  if (!haveCodeGen) {
    class NewSTRUCT extends STRUCT {
      static {
        __name(this, "NewSTRUCT");
      }
    }
    NewSTRUCT.keywords = keywords;
    return NewSTRUCT;
  } else {
    var StructClass;
    var _json_parser = jsonParser;
    var _util = util;
    let code2 = code;
    code2 = code2.replace(/\[keywords.script\]/g, "." + keywords.script);
    code2 = code2.replace(/\[keywords.name\]/g, "." + keywords.name);
    code2 = code2.replace(/\bjsonParser\b/g, "_json_parser");
    code2 = code2.replace(/\butil\b/g, "_util");
    try {
      eval(code2);
    } catch (error) {
      printEvalError(code2);
    }
    StructClass.keywords = keywords;
    return StructClass;
  }
}
__name(deriveStructManager, "deriveStructManager");
manager = new STRUCT();
function write_scripts(nManager = manager, include_code = false) {
  let buf = "";
  let nl = String.fromCharCode(10);
  let tab2 = String.fromCharCode(9);
  nManager.forEach(function(stt) {
    buf += STRUCT.fmt_struct(stt, false, !include_code) + nl;
  });
  let buf2 = buf;
  buf = "";
  for (let i2 = 0; i2 < buf2.length; i2++) {
    let c = buf2[i2];
    if (c === nl) {
      buf += nl;
      let i22 = i2;
      while (i2 < buf2.length && (buf2[i2] === " " || buf2[i2] === tab2 || buf2[i2] === nl)) {
        i2++;
      }
      if (i2 !== i22)
        i2--;
    } else {
      buf += c;
    }
  }
  return buf;
}
__name(write_scripts, "write_scripts");
"use strict";
var nbtoa, natob;
if (typeof btoa === "undefined") {
  nbtoa = /* @__PURE__ */ __name(function btoa3(str) {
    let buffer = new Buffer("" + str, "binary");
    return buffer.toString("base64");
  }, "btoa");
  natob = /* @__PURE__ */ __name(function atob3(str) {
    return new Buffer(str, "base64").toString("binary");
  }, "atob");
} else {
  natob = atob;
  nbtoa = btoa;
}
function versionToInt(v) {
  v = versionCoerce(v);
  let mul = 64;
  return ~~(v.major * mul * mul * mul + v.minor * mul * mul + v.micro * mul);
}
__name(versionToInt, "versionToInt");
var ver_pat = /[0-9]+\.[0-9]+\.[0-9]+$/;
function versionCoerce(v) {
  if (!v) {
    throw new Error("empty version: " + v);
  }
  if (typeof v === "string") {
    if (!ver_pat.exec(v)) {
      throw new Error("invalid version string " + v);
    }
    let ver = v.split(".");
    return {
      major: parseInt(ver[0]),
      minor: parseInt(ver[1]),
      micro: parseInt(ver[2])
    };
  } else if (Array.isArray(v)) {
    return {
      major: v[0],
      minor: v[1],
      micro: v[2]
    };
  } else if (typeof v === "object") {
    let test2 = /* @__PURE__ */ __name((k2) => k2 in v && typeof v[k2] === "number", "test");
    if (!test2("major") || !test2("minor") || !test2("micro")) {
      throw new Error("invalid version object: " + v);
    }
    return v;
  } else {
    throw new Error("invalid version " + v);
  }
}
__name(versionCoerce, "versionCoerce");
function versionLessThan(a3, b) {
  return versionToInt(a3) < versionToInt(b);
}
__name(versionLessThan, "versionLessThan");
var FileParams = class {
  static {
    __name(this, "FileParams");
  }
  constructor() {
    this.magic = "STRT";
    this.ext = ".bin";
    this.blocktypes = ["DATA"];
    this.version = {
      major: 0,
      minor: 0,
      micro: 1
    };
  }
};
var Block = class {
  static {
    __name(this, "Block");
  }
  constructor(type_magic, data) {
    this.type = type_magic;
    this.data = data;
  }
};
var FileeError = class extends Error {
  static {
    __name(this, "FileeError");
  }
};
var FileHelper = class {
  static {
    __name(this, "FileHelper");
  }
  //params can be FileParams instance, or object literal
  //(it will convert to FileParams)
  constructor(params) {
    if (params === void 0) {
      params = new FileParams();
    } else {
      let fp = new FileParams();
      for (let k2 in params) {
        fp[k2] = params[k2];
      }
      params = fp;
    }
    this.version = params.version;
    this.blocktypes = params.blocktypes;
    this.magic = params.magic;
    this.ext = params.ext;
    this.struct = void 0;
    this.unpack_ctx = void 0;
  }
  read(dataview) {
    this.unpack_ctx = new unpack_context();
    let magic = unpack_static_string(dataview, this.unpack_ctx, 4);
    if (magic !== this.magic) {
      throw new FileError("corrupted file");
    }
    this.version = {};
    this.version.major = unpack_short(dataview, this.unpack_ctx);
    this.version.minor = unpack_byte(dataview, this.unpack_ctx);
    this.version.micro = unpack_byte(dataview, this.unpack_ctx);
    let struct = this.struct = new STRUCT();
    let scripts = unpack_string(dataview, this.unpack_ctx);
    this.struct.parse_structs(scripts, manager);
    let blocks = [];
    let dviewlen = dataview.buffer.byteLength;
    while (this.unpack_ctx.i < dviewlen) {
      let type = unpack_static_string(dataview, this.unpack_ctx, 4);
      let datalen = unpack_int(dataview, this.unpack_ctx);
      let bstruct = unpack_int(dataview, this.unpack_ctx);
      let bdata;
      if (bstruct === -2) {
        bdata = unpack_static_string(dataview, this.unpack_ctx, datalen);
      } else {
        bdata = unpack_bytes(dataview, this.unpack_ctx, datalen);
        bdata = struct.read_object(bdata, bstruct, new unpack_context());
      }
      let block = new Block();
      block.type = type;
      block.data = bdata;
      blocks.push(block);
    }
    this.blocks = blocks;
    return blocks;
  }
  doVersions(old) {
    let blocks = this.blocks;
    if (versionLessThan(old, "0.0.1")) {
    }
  }
  write(blocks) {
    this.struct = manager;
    this.blocks = blocks;
    let data = [];
    pack_static_string(data, this.magic, 4);
    pack_short(data, this.version.major);
    pack_byte(data, this.version.minor & 255);
    pack_byte(data, this.version.micro & 255);
    let scripts = write_scripts();
    pack_string(data, scripts);
    let struct = this.struct;
    for (let block of blocks) {
      if (typeof block.data === "string") {
        pack_static_string(data, block.type, 4);
        pack_int(data, block.data.length);
        pack_int(data, -2);
        pack_static_string(data, block.data, block.data.length);
        continue;
      }
      let structName2 = block.data.constructor.structName;
      if (structName2 === void 0 || !(structName2 in struct.structs)) {
        throw new Error("Non-STRUCTable object " + block.data);
      }
      let data2 = [];
      let stt = struct.structs[structName2];
      struct.write_object(data2, block.data);
      pack_static_string(data, block.type, 4);
      pack_int(data, data2.length);
      pack_int(data, stt.id);
      pack_bytes(data, data2);
    }
    return new DataView(new Uint8Array(data).buffer);
  }
  writeBase64(blocks) {
    let dataview = this.write(blocks);
    let str = "";
    let bytes = new Uint8Array(dataview.buffer);
    for (let i2 = 0; i2 < bytes.length; i2++) {
      str += String.fromCharCode(bytes[i2]);
    }
    return nbtoa(str);
  }
  makeBlock(type, data) {
    return new Block(type, data);
  }
  readBase64(base64) {
    let data = natob(base64);
    let data2 = new Uint8Array(data.length);
    for (let i2 = 0; i2 < data.length; i2++) {
      data2[i2] = data.charCodeAt(i2);
    }
    return this.read(new DataView(data2.buffer));
  }
};
var struct_filehelper = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  versionToInt,
  versionCoerce,
  versionLessThan,
  FileParams,
  Block,
  FileeError,
  FileHelper
});
function truncateDollarSign(value2 = true) {
  setTruncateDollarSign(value2);
}
__name(truncateDollarSign, "truncateDollarSign");
function validateStructs(onerror) {
  return manager.validateStructs(onerror);
}
__name(validateStructs, "validateStructs");
function setEndian(mode) {
  let ret2 = STRUCT_ENDIAN;
  setBinaryEndian(mode);
  return ret2;
}
__name(setEndian, "setEndian");
function consoleLogger() {
  console.log(...arguments);
}
__name(consoleLogger, "consoleLogger");
function validateJSON(json2, cls2, useInternalParser, printColors = true, logger = consoleLogger) {
  return manager.validateJSON(json2, cls2, useInternalParser, printColors, logger);
}
__name(validateJSON, "validateJSON");
function getEndian() {
  return STRUCT_ENDIAN;
}
__name(getEndian, "getEndian");
function setAllowOverriding(t) {
  return manager.allowOverriding = !!t;
}
__name(setAllowOverriding, "setAllowOverriding");
function isRegistered(cls2) {
  return manager.isRegistered(cls2);
}
__name(isRegistered, "isRegistered");
function inlineRegister(cls2, structScript) {
  return manager.inlineRegister(cls2, structScript);
}
__name(inlineRegister, "inlineRegister");
function register(cls2, structName2) {
  return manager.register(cls2, structName2);
}
__name(register, "register");
function unregister(cls2) {
  manager.unregister(cls2);
}
__name(unregister, "unregister");
function inherit(child, parent2, structName2 = child.name) {
  return STRUCT.inherit(...arguments);
}
__name(inherit, "inherit");
function readObject(data, cls2, __uctx = void 0) {
  return manager.readObject(data, cls2, __uctx);
}
__name(readObject, "readObject");
function writeObject(data, obj2) {
  return manager.writeObject(data, obj2);
}
__name(writeObject, "writeObject");
function writeJSON(obj2) {
  return manager.writeJSON(obj2);
}
__name(writeJSON, "writeJSON");
function formatJSON(json2, cls2, addComments = true, validate = true) {
  return manager.formatJSON(json2, cls2, addComments, validate);
}
__name(formatJSON, "formatJSON");
function readJSON(json2, class_or_struct_id) {
  return manager.readJSON(json2, class_or_struct_id);
}
__name(readJSON, "readJSON");
var StructClass;

// scripts/path.ux/scripts/path-controller/util/struct.js
var struct_default = nstructjs_es6_exports;

// scripts/path.ux/scripts/path-controller/extern/lz-string/lz-string.js
var f2 = String.fromCharCode;
var keyStrBase64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
var keyStrUriSafe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$";
var baseReverseDic = {};
function getBaseValue(alphabet, character) {
  if (!baseReverseDic[alphabet]) {
    baseReverseDic[alphabet] = {};
    for (let i2 = 0; i2 < alphabet.length; i2++) {
      baseReverseDic[alphabet][alphabet.charAt(i2)] = i2;
    }
  }
  return baseReverseDic[alphabet][character];
}
__name(getBaseValue, "getBaseValue");
function getInput(input) {
  if (input === null) {
    return "";
  } else if (input === "") {
    return null;
  }
  if (typeof input === "string") {
    return input;
  }
  if (input instanceof ArrayBuffer) {
    input = new Uint8Array(input);
  }
  let s = "";
  for (let i2 = 0; i2 < input.length; i2++) {
    s += String.fromCharCode(input[i2]);
  }
  return s;
}
__name(getInput, "getInput");
var lz_string_default = {
  compressToBase64: /* @__PURE__ */ __name(function(input) {
    input = getInput(input);
    if (!input) return "";
    let res = this._compress(input, 6, function(a3) {
      return keyStrBase64.charAt(a3);
    });
    switch (res.length % 4) {
      // To produce valid Base64
      default:
      // When could this happen ?
      case 0:
        return res;
      case 1:
        return res + "===";
      case 2:
        return res + "==";
      case 3:
        return res + "=";
    }
  }, "compressToBase64"),
  decompressFromBase64: /* @__PURE__ */ __name(function(input) {
    if (input === null) return "";
    if (input === "") return null;
    input = getInput(input);
    return this._decompress(input.length, 32, function(index) {
      return getBaseValue(keyStrBase64, input.charAt(index));
    });
  }, "decompressFromBase64"),
  compressToUTF16: /* @__PURE__ */ __name(function(input) {
    if (input === null) return "";
    input = getInput(input);
    return this._compress(input, 15, function(a3) {
      return f2(a3 + 32);
    }) + " ";
  }, "compressToUTF16"),
  decompressFromUTF16: /* @__PURE__ */ __name(function(compressed) {
    if (compressed === null) return "";
    if (compressed === "") return null;
    compressed = getInput(compressed);
    return this._decompress(compressed.length, 16384, function(index) {
      return compressed.charCodeAt(index) - 32;
    });
  }, "decompressFromUTF16"),
  //compress into uint8array (UCS-2 big endian format)
  compressToUint8Array: /* @__PURE__ */ __name(function(uncompressed) {
    uncompressed = getInput(uncompressed);
    let compressed = this.compress(uncompressed);
    let buf = new Uint8Array(compressed.length * 2);
    for (let i2 = 0, TotalLen = compressed.length; i2 < TotalLen; i2++) {
      let current_value = compressed.charCodeAt(i2);
      buf[i2 * 2] = current_value >>> 8;
      buf[i2 * 2 + 1] = current_value % 256;
    }
    return buf;
  }, "compressToUint8Array"),
  //decompress from uint8array (UCS-2 big endian format)
  decompressFromUint8Array: /* @__PURE__ */ __name(function(compressed) {
    if (compressed === null || compressed === void 0) {
      return this.decompress(compressed);
    } else {
      compressed = getInput(compressed);
      let buf = new Array(compressed.length / 2);
      for (let i2 = 0, TotalLen = buf.length; i2 < TotalLen; i2++) {
        buf[i2] = compressed[i2 * 2] * 256 + compressed[i2 * 2 + 1];
      }
      let result = [];
      buf.forEach(function(c) {
        result.push(f2(c));
      });
      return this.decompress(result.join(""));
    }
  }, "decompressFromUint8Array"),
  //compress into a string that is already URI encoded
  compressToEncodedURIComponent: /* @__PURE__ */ __name(function(input) {
    if (input === null) return "";
    return this._compress(input, 6, function(a3) {
      return keyStrUriSafe.charAt(a3);
    });
  }, "compressToEncodedURIComponent"),
  //decompress from an output of compressToEncodedURIComponent
  decompressFromEncodedURIComponent: /* @__PURE__ */ __name(function(input) {
    if (input === null) return "";
    if (input === "") return null;
    input = input.replace(/ /g, "+");
    return this._decompress(input.length, 32, function(index) {
      return getBaseValue(keyStrUriSafe, input.charAt(index));
    });
  }, "decompressFromEncodedURIComponent"),
  compress: /* @__PURE__ */ __name(function(uncompressed) {
    return this._compress(uncompressed, 16, function(a3) {
      return f2(a3);
    });
  }, "compress"),
  _compress: /* @__PURE__ */ __name(function(uncompressed, bitsPerChar, getCharFromInt) {
    uncompressed = getInput(uncompressed);
    if (uncompressed === null) return "";
    let i2, value2, context_dictionary = {}, context_dictionaryToCreate = {}, context_c = "", context_wc = "", context_w = "", context_enlargeIn = 2, context_dictSize = 3, context_numBits = 2, context_data = [], context_data_val = 0, context_data_position = 0, ii;
    for (ii = 0; ii < uncompressed.length; ii += 1) {
      context_c = uncompressed.charAt(ii);
      if (!Object.prototype.hasOwnProperty.call(context_dictionary, context_c)) {
        context_dictionary[context_c] = context_dictSize++;
        context_dictionaryToCreate[context_c] = true;
      }
      context_wc = context_w + context_c;
      if (Object.prototype.hasOwnProperty.call(context_dictionary, context_wc)) {
        context_w = context_wc;
      } else {
        if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate, context_w)) {
          if (context_w.charCodeAt(0) < 256) {
            for (i2 = 0; i2 < context_numBits; i2++) {
              context_data_val = context_data_val << 1;
              if (context_data_position === bitsPerChar - 1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
            }
            value2 = context_w.charCodeAt(0);
            for (i2 = 0; i2 < 8; i2++) {
              context_data_val = context_data_val << 1 | value2 & 1;
              if (context_data_position === bitsPerChar - 1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value2 = value2 >> 1;
            }
          } else {
            value2 = 1;
            for (i2 = 0; i2 < context_numBits; i2++) {
              context_data_val = context_data_val << 1 | value2;
              if (context_data_position == bitsPerChar - 1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value2 = 0;
            }
            value2 = context_w.charCodeAt(0);
            for (i2 = 0; i2 < 16; i2++) {
              context_data_val = context_data_val << 1 | value2 & 1;
              if (context_data_position === bitsPerChar - 1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value2 = value2 >> 1;
            }
          }
          context_enlargeIn--;
          if (context_enlargeIn === 0) {
            context_enlargeIn = Math.pow(2, context_numBits);
            context_numBits++;
          }
          delete context_dictionaryToCreate[context_w];
        } else {
          value2 = context_dictionary[context_w];
          for (i2 = 0; i2 < context_numBits; i2++) {
            context_data_val = context_data_val << 1 | value2 & 1;
            if (context_data_position === bitsPerChar - 1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value2 = value2 >> 1;
          }
        }
        context_enlargeIn--;
        if (context_enlargeIn === 0) {
          context_enlargeIn = Math.pow(2, context_numBits);
          context_numBits++;
        }
        context_dictionary[context_wc] = context_dictSize++;
        context_w = String(context_c);
      }
    }
    if (context_w !== "") {
      if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate, context_w)) {
        if (context_w.charCodeAt(0) < 256) {
          for (i2 = 0; i2 < context_numBits; i2++) {
            context_data_val = context_data_val << 1;
            if (context_data_position === bitsPerChar - 1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
          }
          value2 = context_w.charCodeAt(0);
          for (i2 = 0; i2 < 8; i2++) {
            context_data_val = context_data_val << 1 | value2 & 1;
            if (context_data_position === bitsPerChar - 1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value2 = value2 >> 1;
          }
        } else {
          value2 = 1;
          for (i2 = 0; i2 < context_numBits; i2++) {
            context_data_val = context_data_val << 1 | value2;
            if (context_data_position === bitsPerChar - 1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value2 = 0;
          }
          value2 = context_w.charCodeAt(0);
          for (i2 = 0; i2 < 16; i2++) {
            context_data_val = context_data_val << 1 | value2 & 1;
            if (context_data_position === bitsPerChar - 1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value2 = value2 >> 1;
          }
        }
        context_enlargeIn--;
        if (context_enlargeIn === 0) {
          context_enlargeIn = Math.pow(2, context_numBits);
          context_numBits++;
        }
        delete context_dictionaryToCreate[context_w];
      } else {
        value2 = context_dictionary[context_w];
        for (i2 = 0; i2 < context_numBits; i2++) {
          context_data_val = context_data_val << 1 | value2 & 1;
          if (context_data_position === bitsPerChar - 1) {
            context_data_position = 0;
            context_data.push(getCharFromInt(context_data_val));
            context_data_val = 0;
          } else {
            context_data_position++;
          }
          value2 = value2 >> 1;
        }
      }
      context_enlargeIn--;
      if (context_enlargeIn === 0) {
        context_enlargeIn = Math.pow(2, context_numBits);
        context_numBits++;
      }
    }
    value2 = 2;
    for (i2 = 0; i2 < context_numBits; i2++) {
      context_data_val = context_data_val << 1 | value2 & 1;
      if (context_data_position === bitsPerChar - 1) {
        context_data_position = 0;
        context_data.push(getCharFromInt(context_data_val));
        context_data_val = 0;
      } else {
        context_data_position++;
      }
      value2 = value2 >> 1;
    }
    while (true) {
      context_data_val = context_data_val << 1;
      if (context_data_position === bitsPerChar - 1) {
        context_data.push(getCharFromInt(context_data_val));
        break;
      } else context_data_position++;
    }
    return context_data.join("");
  }, "_compress"),
  decompress: /* @__PURE__ */ __name(function(compressed) {
    if (compressed === null) return "";
    if (compressed === "") return null;
    compressed = getInput(compressed);
    return this._decompress(compressed.length, 32768, function(index) {
      return compressed.charCodeAt(index);
    });
  }, "decompress"),
  _decompress: /* @__PURE__ */ __name(function(length, resetValue, getNextValue) {
    let dictionary = [], next, enlargeIn = 4, dictSize = 4, numBits = 3, entry = "", result = [], i2, w, bits, resb, maxpower, power, c, data = { val: getNextValue(0), position: resetValue, index: 1 };
    for (i2 = 0; i2 < 3; i2 += 1) {
      dictionary[i2] = i2;
    }
    bits = 0;
    maxpower = Math.pow(2, 2);
    power = 1;
    while (power !== maxpower) {
      resb = data.val & data.position;
      data.position >>= 1;
      if (data.position === 0) {
        data.position = resetValue;
        data.val = getNextValue(data.index++);
      }
      bits |= (resb > 0 ? 1 : 0) * power;
      power <<= 1;
    }
    switch (next = bits) {
      case 0:
        bits = 0;
        maxpower = Math.pow(2, 8);
        power = 1;
        while (power !== maxpower) {
          resb = data.val & data.position;
          data.position >>= 1;
          if (data.position === 0) {
            data.position = resetValue;
            data.val = getNextValue(data.index++);
          }
          bits |= (resb > 0 ? 1 : 0) * power;
          power <<= 1;
        }
        c = f2(bits);
        break;
      case 1:
        bits = 0;
        maxpower = Math.pow(2, 16);
        power = 1;
        while (power !== maxpower) {
          resb = data.val & data.position;
          data.position >>= 1;
          if (data.position === 0) {
            data.position = resetValue;
            data.val = getNextValue(data.index++);
          }
          bits |= (resb > 0 ? 1 : 0) * power;
          power <<= 1;
        }
        c = f2(bits);
        break;
      case 2:
        return "";
    }
    dictionary[3] = c;
    w = c;
    result.push(c);
    while (true) {
      if (data.index > length) {
        return "";
      }
      bits = 0;
      maxpower = Math.pow(2, numBits);
      power = 1;
      while (power !== maxpower) {
        resb = data.val & data.position;
        data.position >>= 1;
        if (data.position === 0) {
          data.position = resetValue;
          data.val = getNextValue(data.index++);
        }
        bits |= (resb > 0 ? 1 : 0) * power;
        power <<= 1;
      }
      switch (c = bits) {
        case 0:
          bits = 0;
          maxpower = Math.pow(2, 8);
          power = 1;
          while (power !== maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position === 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb > 0 ? 1 : 0) * power;
            power <<= 1;
          }
          dictionary[dictSize++] = f2(bits);
          c = dictSize - 1;
          enlargeIn--;
          break;
        case 1:
          bits = 0;
          maxpower = Math.pow(2, 16);
          power = 1;
          while (power !== maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position === 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb > 0 ? 1 : 0) * power;
            power <<= 1;
          }
          dictionary[dictSize++] = f2(bits);
          c = dictSize - 1;
          enlargeIn--;
          break;
        case 2:
          return result.join("");
      }
      if (enlargeIn === 0) {
        enlargeIn = Math.pow(2, numBits);
        numBits++;
      }
      if (dictionary[c]) {
        entry = dictionary[c];
      } else {
        if (c === dictSize) {
          entry = w + w.charAt(0);
        } else {
          return null;
        }
      }
      result.push(entry);
      dictionary[dictSize++] = w + entry.charAt(0);
      enlargeIn--;
      w = entry;
      if (enlargeIn === 0) {
        enlargeIn = Math.pow(2, numBits);
        numBits++;
      }
    }
  }, "_decompress")
};

// scripts/path.ux/scripts/path-controller/util/util.js
var import_mobile_detect = __toESM(require_mobile_detect(), 1);
var f64tmp = new Float64Array(1);
var u16tmp = new Uint16Array(f64tmp.buffer);
function isDenormal(f3) {
  f64tmp[0] = f3;
  let a3 = u16tmp[0], b = u16tmp[1], c = u16tmp[2], d = u16tmp[3];
  if (a3 === 0 && b === 0 && c === 0 && (d === 0 || d === 32768)) {
    return false;
  }
  let test2 = d & ~(1 << 15);
  test2 = test2 >> 4;
  return test2 === 0;
}
__name(isDenormal, "isDenormal");
globalThis._isDenormal = isDenormal;
var colormap2 = {
  "black": 30,
  "red": 31,
  "green": 32,
  "yellow": 33,
  "blue": 34,
  "magenta": 35,
  "cyan": 36,
  "teal": 36,
  "white": 37,
  "reset": 0,
  "grey": 2,
  "gray": 2,
  "orange": 202,
  "pink": 198,
  "brown": 314,
  "lightred": 91,
  "peach": 210
};
var termColorMap2 = {};
for (let k2 in colormap2) {
  termColorMap2[k2] = colormap2[k2];
  termColorMap2[colormap2[k2]] = k2;
}
function termColor2(s, c, d = 0) {
  if (typeof s === "symbol") {
    s = s.toString();
  } else {
    s = "" + s;
  }
  if (c in colormap2)
    c = colormap2[c];
  if (c > 107) {
    let s2 = "\x1B[38;5;" + c + "m";
    return s2 + s + "\x1B[39m";
  }
  return "\x1B[" + c + "m" + s + "\x1B[39m";
}
__name(termColor2, "termColor");
;
function termPrint2() {
  let s = "";
  for (let i3 = 0; i3 < arguments.length; i3++) {
    if (i3 > 0) {
      s += " ";
    }
    s += arguments[i3];
  }
  let re1a = /\u001b\[[1-9][0-9]?m/;
  let re1b = /\u001b\[[1-9][0-9];[0-9][0-9]?;[0-9]+m/;
  let re2 = /\u001b\[39m/;
  let endtag = "\x1B[39m";
  function tok(s3, type) {
    return {
      type,
      value: s3
    };
  }
  __name(tok, "tok");
  let tokdef3 = [
    [re1a, "start"],
    [re1b, "start"],
    [re2, "end"]
  ];
  let s2 = s;
  let i2 = 0;
  let tokens2 = [];
  while (s2.length > 0) {
    let ok = false;
    let mintk = void 0, mini = void 0;
    let minslice = void 0, mintype = void 0;
    for (let tk2 of tokdef3) {
      let i3 = s2.search(tk2[0]);
      if (i3 >= 0 && (mini === void 0 || i3 < mini)) {
        minslice = s2.slice(i3, s2.length).match(tk2[0])[0];
        mini = i3;
        mintype = tk2[1];
        mintk = tk2;
        ok = true;
      }
    }
    if (!ok) {
      break;
    }
    if (mini > 0) {
      let chunk = s2.slice(0, mini);
      tokens2.push(tok(chunk, "chunk"));
    }
    s2 = s2.slice(mini + minslice.length, s2.length);
    let t = tok(minslice, mintype);
    tokens2.push(t);
  }
  if (s2.length > 0) {
    tokens2.push(tok(s2, "chunk"));
  }
  let stack = [];
  let cur;
  let out = "";
  for (let t of tokens2) {
    if (t.type === "chunk") {
      out += t.value;
    } else if (t.type === "start") {
      stack.push(cur);
      cur = t.value;
      out += t.value;
    } else if (t.type === "end") {
      cur = stack.pop();
      if (cur) {
        out += cur;
      } else {
        out += endtag;
      }
    }
  }
  return out;
}
__name(termPrint2, "termPrint");
globalThis.termColor = termColor2;
var MovingAvg = class extends Array {
  static {
    __name(this, "MovingAvg");
  }
  constructor(size = 64) {
    super();
    this.length = size;
    this.cur = 0;
    this.used = 0;
    this.sum = 0;
  }
  reset() {
    this.cur = this.used = this.sum = 0;
    return this;
  }
  add(val2) {
    if (this.used < this.length) {
      this[this.cur] = val2;
      this.used++;
    } else {
      this.sum -= this[this.cur];
      this[this.cur] = val2;
    }
    this.sum += val2;
    this.cur = (this.cur + 1) % this.length;
    return this.sample();
  }
  sample() {
    return this.used ? this.sum / this.used : 0;
  }
};
var timers = {};
function pollTimer(id, interval) {
  if (!(id in timers)) {
    timers[id] = time_ms();
  }
  if (time_ms() - timers[id] >= interval) {
    timers[id] = time_ms();
    return true;
  }
  return false;
}
__name(pollTimer, "pollTimer");
var mdetect = void 0;
var mret = void 0;
function isMobile() {
  if (!window.MobileDetect) {
    return;
  }
  if (mret === void 0) {
    mdetect = new MobileDetect(navigator.userAgent);
    let ret2 = mdetect.mobile();
    if (typeof ret2 === "string") {
      ret2 = ret2.toLowerCase();
    }
    mret = ret2;
  }
  return mret;
}
__name(isMobile, "isMobile");
var SmartConsoleContext = class {
  static {
    __name(this, "SmartConsoleContext");
  }
  constructor(name, console3) {
    this.name = name;
    let c = [random(), random(), random()];
    let sum = Math.sqrt(c[0] * c[0] + c[1] * c[1] + c[2] * c[2]);
    sum = 255 / sum;
    let r = ~~(c[0] * sum);
    let g = ~~(c[1] * sum);
    let b = ~~(c[2] * sum);
    this.color = `rgb(${r},${g},${b})`;
    this.__console = console3;
    this.timeInterval = 375;
    this.timeIntervalAll = 245;
    this._last = 0;
    this.last = 0;
    this.last2 = 0;
    this._data = {};
    this._data_length = 0;
    this.maxCache = 256;
  }
  hash(args2) {
    let sum = 0;
    let mul = (1 << 19) - 1, off = (1 << 27) - 1;
    let i2 = 0;
    function dohash(h2) {
      h2 = h2 * mul + off + i2 * mul * 0.25 & mul;
      i2++;
      sum = sum ^ h2;
    }
    __name(dohash, "dohash");
    let visit = /* @__PURE__ */ new WeakSet();
    let recurse = /* @__PURE__ */ __name((n) => {
      if (typeof n === "string") {
        dohash(strhash(n));
      } else if (typeof n === "undefined" || n === null) {
        dohash(0);
      } else if (typeof n === "object") {
        if (visit.has(n)) {
          return;
        }
        visit.add(n);
        let keys2 = getAllKeys(n);
        for (let k2 of keys2) {
          let v;
          if (typeof k2 !== "string") {
            continue;
          }
          try {
            v = n[k2];
          } catch (error) {
            continue;
          }
          recurse(v);
        }
      } else if (typeof n === "function") {
        dohash(strhash("" + n.name));
      }
    }, "recurse");
    for (let i3 = 0; i3 < args2.length; i3++) {
      recurse(args2[i3]);
    }
    return sum;
  }
  clearCache() {
    this._data_length = 0;
    this._data = {};
    return this;
  }
  _getData(args2) {
    let key2 = this.hash(args2);
    if (!(key2 in this._data)) {
      if (this._data_length > this.maxCache) {
        this.clearCache();
      }
      this._data[key2] = {
        time: 0,
        count: 0
      };
      this._data_length++;
    }
    return this._data[key2];
  }
  _check(args2) {
    if (this.timeIntervalAll > 0 && time_ms() - this.last2 < this.timeIntervalAll) {
      return false;
    }
    this.last2 = time_ms();
    return true;
  }
  log() {
    if (this._check(arguments)) {
      window.console.log("%c", "color:" + this.color, ...arguments);
    }
  }
  warn() {
    if (this._check(arguments)) {
      window.console.log("%c" + this.name, "color : " + this.color, ...arguments);
    }
  }
  trace() {
    if (this._check(arguments)) {
      window.console.trace(...arguments);
    }
  }
  error() {
    if (this._check(arguments)) {
      window.console.error(...arguments);
    }
  }
};
var SmartConsole = class {
  static {
    __name(this, "SmartConsole");
  }
  constructor() {
    this.contexts = {};
  }
  context(name) {
    if (!(name in this.contexts)) {
      this.contexts[name] = new SmartConsoleContext(name, this);
    }
    return this.contexts[name];
  }
  log() {
    let c = this.context("default");
    return c.log(...arguments);
  }
  warn() {
    let c = this.context("default");
    return c.warn(...arguments);
  }
  trace() {
    let c = this.context("default");
    return c.trace(...arguments);
  }
  error() {
    let c = this.context("default");
    return c.error(...arguments);
  }
};
var console2 = new SmartConsole();
globalThis.tm = 0;
var EmptySlot = {};
function getClassParent(cls2) {
  let p = cls2.prototype;
  if (p) p = p.__proto__;
  if (p) p = p.constructor;
  return p;
}
__name(getClassParent, "getClassParent");
function list3(iterable) {
  let ret2 = [];
  for (let item of iterable) {
    ret2.push(item);
  }
  return ret2;
}
__name(list3, "list");
function count(iterable, searchItem = void 0) {
  let count2 = 0;
  if (searchItem !== void 0) {
    for (let item of iterable) {
      if (item === searchItem) {
        count2++;
      }
    }
  } else {
    for (let item of iterable) {
      count2++;
    }
  }
  return count2;
}
__name(count, "count");
function getAllKeys(obj2) {
  let keys2 = /* @__PURE__ */ new Set();
  if (typeof obj2 !== "object" && typeof obj2 !== "function") {
    throw new Error("must pass an object ot getAllKeys; object was: " + obj2);
  }
  let p;
  while (p && p !== Object) {
    for (let k2 in Object.getOwnPropertyDescriptors(obj2)) {
      if (k2 === "__proto__")
        continue;
      keys2.add(k2);
    }
    for (let k2 of Object.getOwnPropertySymbols(obj2)) {
      keys2.add(k2);
    }
    p = p.__proto__;
  }
  let cls2 = obj2.constructor;
  if (!cls2)
    return keys2;
  while (cls2) {
    let proto = cls2.prototype;
    if (!proto) {
      cls2 = getClassParent(cls2);
      continue;
    }
    for (let k2 in proto) {
      keys2.add(k2);
    }
    for (let k2 in Object.getOwnPropertyDescriptors(proto)) {
      keys2.add(k2);
    }
    cls2 = getClassParent(cls2);
  }
  return keys2;
}
__name(getAllKeys, "getAllKeys");
function btoa2(buf) {
  if (buf instanceof ArrayBuffer) {
    buf = new Uint8Array(buf);
  }
  if (typeof buf === "string" || buf instanceof String) {
    return window.btoa(buf);
  }
  let ret2 = "";
  for (let i2 = 0; i2 < buf.length; i2++) {
    ret2 += String.fromCharCode(buf[i2]);
  }
  return btoa2(ret2);
}
__name(btoa2, "btoa");
;
function formatNumberUI(val2, isInt = false, decimals = 5) {
  if (val2 === void 0 || val2 === null) {
    val2 = "0";
  } else if (isNaN(val2)) {
    val2 = "NaN";
  } else if (val2 === -Infinity) {
    val2 = "-" + String.fromCharCode(8734);
  } else if (val2 === Infinity) {
    val2 = "+" + String.fromCharCode(8734);
  } else if (!isInt) {
    val2 = val2.toFixed(decimals);
  } else {
    val2 = "" + Math.floor(val2);
  }
  return val2;
}
__name(formatNumberUI, "formatNumberUI");
function atob2(buf) {
  let data = window.atob(buf);
  let ret2 = [];
  for (let i2 = 0; i2 < data.length; i2++) {
    ret2.push(data.charCodeAt(i2));
  }
  return new Uint8Array(ret2);
}
__name(atob2, "atob");
function time_ms() {
  if (window.performance)
    return window.performance.now();
  else
    return (/* @__PURE__ */ new Date()).getMilliseconds();
}
__name(time_ms, "time_ms");
function color2css2(c) {
  let ret2 = c.length === 3 ? "rgb(" : "rgba(";
  for (let i2 = 0; i2 < 3; i2++) {
    if (i2 > 0)
      ret2 += ",";
    ret2 += ~~(c[i2] * 255);
  }
  if (c.length === 4)
    ret2 += "," + c[3];
  ret2 += ")";
  return ret2;
}
__name(color2css2, "color2css");
function merge(obja, objb) {
  return Object.assign({}, obja, objb);
}
__name(merge, "merge");
;
var debug_cacherings = false;
if (debug_cacherings) {
  window._cacherings = [];
  window._clear_all_cacherings = function(kill_all = false) {
    function copy(obj2) {
      if (typeof obj2.copy === "function") {
        return obj2.copy();
      } else if (obj2.constructor === Object) {
        let ret2 = {};
        for (let k2 of Reflect.ownKeys(obj2)) {
          let v;
          try {
            v = obj2[k2];
          } catch (error) {
            continue;
          }
          if (typeof v !== "object") {
            ret2[k2] = v;
          } else {
            ret2[k2] = copy(v);
          }
        }
        return ret2;
      } else {
        return new obj2.constructor();
      }
    }
    __name(copy, "copy");
    for (let ch of window._cacherings) {
      let obj2 = ch[0];
      let len = ch.length;
      ch.length = 0;
      ch.cur = 0;
      if (kill_all) {
        continue;
      }
      for (let i2 = 0; i2 < len; i2++) {
        ch.push(copy(obj2));
      }
    }
  };
  window._nonvector_cacherings = function() {
    for (let ch of window._cacherings) {
      if (ch.length === 0) {
        continue;
      }
      let name = ch[0].constructor.name;
      let ok = !name.startsWith("Vector") && !name.startsWith("Quat");
      ok = ok && !name.startsWith("TriEditor");
      ok = ok && !name.startsWith("QuadEditor");
      ok = ok && !name.startsWith("PointEditor");
      ok = ok && !name.startsWith("LineEditor");
      if (ok) {
        console2.log(name, ch);
      }
    }
  };
  window._stale_cacherings = function() {
    let ret2 = _cacherings.concat([]);
    ret2.sort((a3, b) => a3.gen - b.gen);
    return ret2;
  };
}
var cachering2 = class _cachering extends Array {
  static {
    __name(this, "cachering");
  }
  constructor(func2, size, isprivate = false) {
    super();
    this.private = isprivate;
    this.cur = 0;
    if (!isprivate && debug_cacherings) {
      this.gen = 0;
      window._cacherings.push(this);
    }
    for (let i2 = 0; i2 < size; i2++) {
      this.push(func2());
    }
  }
  static fromConstructor(cls2, size, isprivate = false) {
    let func2 = /* @__PURE__ */ __name(function() {
      return new cls2();
    }, "func");
    return new _cachering(func2, size, isprivate);
  }
  next() {
    if (debug_cacherings) {
      this.gen++;
    }
    let ret2 = this[this.cur];
    this.cur = (this.cur + 1) % this.length;
    return ret2;
  }
};
var SetIter = class {
  static {
    __name(this, "SetIter");
  }
  constructor(set4) {
    this.set = set4;
    this.i = 0;
    this.ret = { done: false, value: void 0 };
  }
  [Symbol.iterator]() {
    return this;
  }
  next() {
    let ret2 = this.ret;
    while (this.i < this.set.items.length && this.set.items[this.i] === EmptySlot) {
      this.i++;
    }
    if (this.i >= this.set.items.length) {
      ret2.done = true;
      ret2.value = void 0;
      return ret2;
    }
    ret2.value = this.set.items[this.i++];
    return ret2;
  }
};
var set2 = class _set {
  static {
    __name(this, "set");
  }
  constructor(input) {
    this.items = [];
    this.keys = {};
    this.freelist = [];
    this.length = 0;
    if (typeof input === "string") {
      input = new String(input);
    }
    if (input !== void 0) {
      if (Symbol.iterator in input) {
        for (let item of input) {
          this.add(item);
        }
      } else if ("forEach" in input) {
        input.forEach(function(item) {
          this.add(item);
        }, this);
      } else if (input instanceof Array) {
        for (let i2 = 0; i2 < input.length; i2++) {
          this.add(input[i2]);
        }
      }
    }
  }
  get size() {
    return this.length;
  }
  [Symbol.iterator]() {
    return new SetIter(this);
  }
  equals(setb) {
    for (let item of this) {
      if (!setb.has(item)) {
        return false;
      }
    }
    for (let item of setb) {
      if (!this.has(item)) {
        return false;
      }
    }
    return true;
  }
  clear() {
    this.items.length = 0;
    this.keys = {};
    this.freelist.length = 0;
    this.length = 0;
    return this;
  }
  filter(f3, thisvar) {
    let i2 = 0;
    let ret2 = new _set();
    for (let item of this) {
      if (f3.call(thisvar, item, i2++, this)) {
        ret2.add(item);
      }
    }
    return ret2;
  }
  map(f3, thisvar) {
    let ret2 = new _set();
    let i2 = 0;
    for (let item of this) {
      ret2.add(f3.call(thisvar, item, i2++, this));
    }
    return ret2;
  }
  reduce(f3, initial) {
    if (initial === void 0) {
      for (let item of this) {
        initial = item;
        break;
      }
    }
    let i2 = 0;
    for (let item of this) {
      initial = f3(initial, item, i2++, this);
    }
    return initial;
  }
  copy() {
    let ret2 = new _set();
    for (let item of this) {
      ret2.add(item);
    }
    return ret2;
  }
  add(item) {
    let key2 = item[Symbol.keystr]();
    if (key2 in this.keys) return;
    if (this.freelist.length > 0) {
      let i2 = this.freelist.pop();
      this.keys[key2] = i2;
      this.items[i2] = item;
    } else {
      let i2 = this.items.length;
      this.keys[key2] = i2;
      this.items.push(item);
    }
    this.length++;
  }
  delete(item, ignore_existence = true) {
    this.remove(item, ignore_existence);
  }
  remove(item, ignore_existence) {
    let key2 = item[Symbol.keystr]();
    if (!(key2 in this.keys)) {
      if (!ignore_existence) {
        console2.warn("Warning, item", item, "is not in set");
      }
      return;
    }
    let i2 = this.keys[key2];
    this.freelist.push(i2);
    this.items[i2] = EmptySlot;
    delete this.keys[key2];
    this.length--;
  }
  has(item) {
    return item[Symbol.keystr]() in this.keys;
  }
  forEach(func2, thisvar) {
    for (let i2 = 0; i2 < this.items.length; i2++) {
      let item = this.items[i2];
      if (item === EmptySlot)
        continue;
      thisvar !== void 0 ? func2.call(thisvar, item) : func2(item);
    }
  }
};
var HashIter = class {
  static {
    __name(this, "HashIter");
  }
  constructor(hash) {
    this.hash = hash;
    this.i = 0;
    this.ret = { done: false, value: void 0 };
  }
  next() {
    let items = this.hash._items;
    if (this.i >= items.length) {
      this.ret.done = true;
      this.ret.value = void 0;
      return this.ret;
    }
    do {
      this.i += 2;
    } while (this.i < items.length && items[i] === _hash_null);
    return this.ret;
  }
};
var _hash_null = {};
var hashtable = class {
  static {
    __name(this, "hashtable");
  }
  constructor() {
    this._items = [];
    this._keys = {};
    this.length = 0;
  }
  [Symbol.iterator]() {
    return new HashIter(this);
  }
  set(key2, val2) {
    let key22 = key2[Symbol.keystr]();
    let i2;
    if (!(key22 in this._keys)) {
      i2 = this._items.length;
      try {
        this._items.push(0);
        this._items.push(0);
      } catch (error) {
        console2.log(":::", this._items.length, key2, key22, val2);
        throw error;
      }
      this._keys[key22] = i2;
      this.length++;
    } else {
      i2 = this._keys[key22];
    }
    this._items[i2] = key2;
    this._items[i2 + 1] = val2;
  }
  remove(key2) {
    let key22 = key2[Symbol.keystr]();
    if (!(key22 in this._keys)) {
      console2.warn("Warning, key not in hashtable:", key2, key22);
      return;
    }
    let i2 = this._keys[key22];
    this._items[i2] = _hash_null;
    this._items[i2 + 1] = _hash_null;
    delete this._keys[key22];
    this.length--;
  }
  has(key2) {
    let key22 = key2[Symbol.keystr]();
    return key22 in this._keys;
  }
  get(key2) {
    let key22 = key2[Symbol.keystr]();
    if (!(key22 in this._keys)) {
      console2.warn("Warning, item not in hash", key2, key22);
      return void 0;
    }
    return this._items[this._keys[key22] + 1];
  }
  add(key2, val2) {
    return this.set(key2, val2);
  }
  keys() {
    let ret2 = [];
    for (let i2 = 0; i2 < this._items.length; i2 += 2) {
      let key2 = this._items[i2];
      if (key2 !== _hash_null) {
        ret2.push(key2);
      }
    }
    return ret2;
  }
  values() {
    let ret2 = [];
    for (let i2 = 0; i2 < this._items.length; i2 += 2) {
      let item = this._items[i2 + 1];
      if (item !== _hash_null) {
        ret2.push(item);
      }
    }
    return ret2;
  }
  forEach(cb, thisvar) {
    if (thisvar === void 0)
      thisvar = self;
    for (let k2 in this._keys) {
      let i2 = this._keys[k2];
      cb.call(thisvar, k2, this._items[i2]);
    }
  }
};
var IDGenInternalIDGen = 0;
var IDGen = class _IDGen {
  static {
    __name(this, "IDGen");
  }
  constructor() {
    this.__cur = 1;
    this._debug = false;
    this._internalID = IDGenInternalIDGen++;
  }
  /*
    get _cur() {
      return this.__cur;
    }
  
    set _cur(v) {
      if (this._debug && pollTimer("_idgen_debug", 450)) {
        window.console.warn("_cur access", v);
      }
  
      this.__cur = v;
    }
  
    // */
  get cur() {
    return this.__cur;
  }
  set cur(v) {
    if (isNaN(v) || !isFinite(v)) {
      throw new Error("NaN error in util.IDGen");
    }
    this.__cur = v;
  }
  get _cur() {
    return this.cur;
  }
  set _cur(v) {
    window.console.warn("Deprecated use of IDGen._cur");
    this.cur = v;
  }
  static fromJSON(obj2) {
    let ret2 = new _IDGen();
    ret2.cur = obj2.cur === void 0 ? obj2._cur : obj2.cur;
    return ret2;
  }
  next() {
    return this.cur++;
  }
  copy() {
    let ret2 = new _IDGen();
    ret2.cur = this.cur;
    return ret2;
  }
  max_cur(id) {
    this.cur = Math.max(this.cur, id + 1);
  }
  toJSON() {
    return {
      cur: this.cur
    };
  }
  loadSTRUCT(reader) {
    reader(this);
  }
};
IDGen.STRUCT = `
IDGen {
  cur : int;
}
`;
struct_default.register(IDGen);
function get_callstack(err) {
  return ("" + err.stack).split("\n");
}
__name(get_callstack, "get_callstack");
function print_stack(err) {
  if (!err) {
    window.console.trace();
  } else {
    window.console.log(err.stack);
  }
}
__name(print_stack, "print_stack");
globalThis.get_callstack = get_callstack;
globalThis.print_stack = print_stack;
function fetch_file(path) {
  let url = location.origin + "/" + path;
  let req = new XMLHttpRequest();
  return new Promise(function(accept, reject) {
    req.open("GET", url);
    req.onreadystatechange = function(e2) {
      if (req.status === 200 && req.readyState === 4) {
        accept(req.response);
      } else if (req.status >= 400) {
        reject(req.status, req.statusText);
      }
    };
    req.send();
  });
}
__name(fetch_file, "fetch_file");
function _int32(x) {
  return ~~((1 << 30) - 1 & ~~x);
}
__name(_int32, "_int32");
var MersenneRandom = class {
  static {
    __name(this, "MersenneRandom");
  }
  constructor(seed2) {
    this.index = 624;
    this.mt = new Uint32Array(624);
    this.seed(seed2);
  }
  random() {
    return this.extract_number() / (1 << 30);
  }
  /** normal-ish distribution */
  nrandom(n = 3) {
    let ret2 = 0;
    for (let i2 = 0; i2 < n; i2++) {
      ret2 += this.random();
    }
    return ret2 / n;
  }
  seed(seed2) {
    seed2 = ~~(seed2 * 8192);
    this.index = 624;
    this.mt.fill(0, 0, this.mt.length);
    this.mt[0] = seed2;
    for (let i2 = 1; i2 < 624; i2++) {
      this.mt[i2] = _int32(
        1812433253 * (this.mt[i2 - 1] ^ this.mt[i2 - 1] >> 30) + i2
      );
    }
  }
  extract_number() {
    if (this.index >= 624)
      this.twist();
    let y = this.mt[this.index];
    y = y ^ y >> 11;
    y = y ^ y << 7 & 2636928640;
    y = y ^ y << 15 & 4022730752;
    y = y ^ y >> 18;
    this.index = this.index + 1;
    return _int32(y);
  }
  twist() {
    for (let i2 = 0; i2 < 624; i2++) {
      let y = _int32((this.mt[i2] & 2147483648) + (this.mt[(i2 + 1) % 624] & 2147483647));
      this.mt[i2] = this.mt[(i2 + 397) % 624] ^ y >> 1;
      if (y % 2 !== 0)
        this.mt[i2] = this.mt[i2] ^ 2567483615;
    }
    this.index = 0;
  }
};
var _mt = new MersenneRandom(0);
function random() {
  return _mt.extract_number() / (1 << 30);
}
__name(random, "random");
function seed(n) {
  _mt.seed(n);
}
__name(seed, "seed");
var smallstr_hashes = {};
var MAXINT = Math.pow(2, 31) - 1;
function strhash(str) {
  if (str.length <= 64) {
    let hash2 = smallstr_hashes[str];
    if (hash2 !== void 0) {
      return hash2;
    }
  }
  let hash = 0;
  for (let i2 = 0; i2 < str.length; i2++) {
    let ch = str.charCodeAt(i2);
    hash = hash < 0 ? -hash : hash;
    hash ^= ch * 1103515245 + 12345 & MAXINT;
  }
  if (str.length <= 64) {
    smallstr_hashes[str] = hash;
  }
  return hash;
}
__name(strhash, "strhash");
var hashsizes = [
  /*2, 5, 11, 19, 37, 67, 127, */
  223,
  383,
  653,
  1117,
  1901,
  3251,
  5527,
  9397,
  15991,
  27191,
  46229,
  78593,
  133631,
  227177,
  38619,
  656587,
  1116209,
  1897561,
  3225883,
  5484019,
  9322861,
  15848867,
  26943089,
  45803279,
  77865577,
  132371489,
  225031553
];
var FTAKEN = 0, FKEY = 1, FVAL = 2, FTOT = 3;
var FastHash = class extends Array {
  static {
    __name(this, "FastHash");
  }
  constructor() {
    super();
    this.cursize = 0;
    this.size = hashsizes[this.cursize];
    this.used = 0;
    this.length = this.size * FTOT;
    this.fill(0, 0, this.length);
  }
  resize(size) {
    let table = this.slice(0, this.length);
    this.length = size * FTOT;
    this.size = size;
    this.fill(0, 0, this.length);
    for (let i2 = 0; i2 < table.length; i2 += FTOT) {
      if (!table[i2 + FTAKEN]) continue;
      let key2 = table[i2 + FKEY], val2 = table[i2 + FVAL];
      this.set(key2, val2);
    }
    return this;
  }
  get(key2) {
    let hash = typeof key2 === "string" ? strhash(key2) : key2;
    hash = typeof hash === "object" ? hash.valueOf() : hash;
    let probe = 0;
    let h2 = (hash + probe) % this.size;
    let _i = 0;
    while (_i++ < 5e4 && this[h2 * FTOT + FTAKEN]) {
      if (this[h2 * FTOT + FKEY] === key2) {
        return this[h2 * FTOT + FVAL];
      }
      probe = (probe + 1) * 2;
      h2 = (hash + probe) % this.size;
    }
    return void 0;
  }
  has(key2) {
    let hash = typeof key2 === "string" ? strhash(key2) : key2;
    hash = typeof hash === "object" ? hash.valueOf() : hash;
    let probe = 0;
    let h2 = (hash + probe) % this.size;
    let _i = 0;
    while (_i++ < 5e4 && this[h2 * FTOT + FTAKEN]) {
      if (this[h2 * FTOT + FKEY] === key2) {
        return true;
      }
      probe = (probe + 1) * 2;
      h2 = (hash + probe) % this.size;
    }
    return false;
  }
  set(key2, val2) {
    let hash = typeof key2 === "string" ? strhash(key2) : key2;
    hash = typeof hash === "object" ? hash.valueOf() : hash;
    if (this.used > this.size / 3) {
      this.resize(hashsizes[this.cursize++]);
    }
    let probe = 0;
    let h2 = (hash + probe) % this.size;
    let _i = 0;
    while (_i++ < 5e4 && this[h2 * FTOT + FTAKEN]) {
      if (this[h2 * FTOT + FKEY] === key2) {
        this[h2 * FTOT + FVAL] = val2;
        return;
      }
      probe = (probe + 1) * 2;
      h2 = (hash + probe) % this.size;
    }
    this[h2 * FTOT + FTAKEN] = 1;
    this[h2 * FTOT + FKEY] = key2;
    this[h2 * FTOT + FVAL] = val2;
    this.used++;
  }
};
function test_fasthash() {
  let h2 = new FastHash();
  console2.log("bleh hash:", strhash("bleh"));
  h2.set("bleh", 1);
  h2.set("bleh", 2);
  h2.set("bleh", 3);
  console2.log(h2);
  return h2;
}
__name(test_fasthash, "test_fasthash");
;
var ImageReader = class {
  static {
    __name(this, "ImageReader");
  }
  load_image() {
    let input = document.createElement("input");
    input.type = "file";
    let doaccept;
    let promise = new Promise((accept, reject) => {
      doaccept = accept;
    });
    input.addEventListener("change", function(e2) {
      let files = this.files;
      console2.log("got file", e2, files);
      if (files.length === 0) return;
      let reader = new FileReader();
      let this2 = this;
      reader.onload = (e3) => {
        let data = e3.target.result;
        let image = new Image();
        image.src = data;
        image.onload = (e4) => {
          console2.log("got image", image.width, image.height);
          let canvas = document.createElement("canvas");
          let g = canvas.getContext("2d");
          canvas.width = image.width;
          canvas.height = image.height;
          g.drawImage(image, 0, 0);
          let idata = g.getImageData(0, 0, image.width, image.height);
          doaccept(idata);
        };
      };
      reader.readAsDataURL(files[0]);
    });
    input.click();
    return promise;
  }
  example() {
    this.load_image().then((idata) => {
      console2.log(idata);
    });
  }
};
;
var digestcache;
var HashDigest = class {
  static {
    __name(this, "HashDigest");
  }
  constructor() {
    this.i = 0;
    this.hash = 0;
  }
  static cachedDigest() {
    return digestcache.next().reset();
  }
  reset() {
    this.i = 0;
    this.hash = 0;
    return this;
  }
  get() {
    return this.hash;
  }
  add(v) {
    if (typeof v === "string") {
      v = strhash(v);
    }
    if (typeof v === "object" && Array.isArray(v)) {
      for (let i2 = 0; i2 < v.length; i2++) {
        this.add(v[i2]);
      }
      return this;
    }
    if (v >= -5 && v <= 5) {
      v *= 32;
    }
    let f3 = Math.fract(v) * (1024 * 512);
    f3 = ~~f3 / (1024 * 512);
    v = Math.floor(v) + f3;
    this.i = (this.i + ~~v) * 1103515245 + 12345 & (1 << 29) - 1;
    let v2 = v * 1024 * 1024 & (1 << 29) - 1;
    v = v | v2;
    v = ~~v;
    this.hash ^= v ^ this.i;
    return this;
  }
};
window._test_hash2 = () => {
  let h2 = new HashDigest();
  let tests = [
    [0, 0, 0, 0],
    [0, 0, 0],
    [0, 0],
    [0],
    [1],
    [2],
    [3],
    [strhash("yay")],
    [strhash("yay"), strhash("yay")],
    [strhash("yay"), strhash("yay"), strhash("yay")]
  ];
  for (let test2 of tests) {
    let h3 = new HashDigest();
    for (let f3 of test2) {
      h3.add(f3);
    }
    window.console.log(h3.get());
  }
  for (let i2 = 0; i2 < 50; i2++) {
    h2.add(0);
  }
};
digestcache = cachering2.fromConstructor(HashDigest, 512);
function hashjoin(hash, val2) {
  let sum = 0;
  let mul = (1 << 19) - 1, off = (1 << 27) - 1;
  let i2 = 0;
  h = h * mul + off + i2 * mul * 0.25 & mul;
}
__name(hashjoin, "hashjoin");
var NullItem = {};
var MapIter = class {
  static {
    __name(this, "MapIter");
  }
  constructor(ownermap) {
    this.ret = { done: true, value: void 0 };
    this.value = new Array(2);
    this.i = 0;
    this.map = ownermap;
    this.done = true;
  }
  finish() {
    if (!this.done) {
      this.done = true;
      this.map.itercur--;
    }
  }
  next() {
    let ret2 = this.ret;
    let i2 = this.i;
    let map3 = this.map, list4 = map3._list;
    while (i2 < list4.length && list4[i2] === NullItem) {
      i2 += 2;
    }
    if (i2 >= list4.length) {
      ret2.done = true;
      ret2.value = void 0;
      this.finish();
      return ret2;
    }
    this.i = i2 + 2;
    ret2.value = this.value;
    ret2.value[0] = list4[i2];
    ret2.value[1] = list4[i2 + 1];
    ret2.done = false;
    return ret2;
  }
  return() {
    this.finish();
    return this.ret;
  }
  reset() {
    this.i = 0;
    this.value[0] = void 0;
    this.value[1] = void 0;
    this.done = false;
    return this;
  }
};
var map = class {
  static {
    __name(this, "map");
  }
  constructor() {
    this._items = {};
    this._list = [];
    this.size = 0;
    this.iterstack = new Array(8);
    this.itercur = 0;
    for (let i2 = 0; i2 < this.iterstack.length; i2++) {
      this.iterstack[i2] = new MapIter(this);
    }
    this.freelist = [];
  }
  has(key2) {
    return key2[Symbol.keystr]() in this._items;
  }
  set(key2, v) {
    let k2 = key2[Symbol.keystr]();
    let i2 = this._items[k2];
    if (i2 === void 0) {
      if (this.freelist.length > 0) {
        i2 = this.freelist.pop();
      } else {
        i2 = this._list.length;
        this._list.length += 2;
      }
      this.size++;
    }
    this._list[i2] = key2;
    this._list[i2 + 1] = v;
    this._items[k2] = i2;
  }
  keys() {
    let this2 = this;
    return function* () {
      for (let [key2, val2] of this2) {
        yield key2;
      }
    }();
  }
  values() {
    let this2 = this;
    return function* () {
      for (let [key2, val2] of this2) {
        yield val2;
      }
    }();
  }
  get(k2) {
    k2 = k2[Symbol.keystr]();
    let i2 = this._items[k2];
    if (i2 !== void 0) {
      return this._list[i2 + 1];
    }
  }
  delete(k2) {
    k2 = k2[Symbol.keystr]();
    if (!(k2 in this._items)) {
      return false;
    }
    let i2 = this._items[k2];
    this.freelist.push(i2);
    this._list[i2] = NullItem;
    this._list[i2 + 1] = NullItem;
    delete this._items[k2];
    this.size--;
    return true;
  }
  [Symbol.iterator]() {
    let ret2 = this.iterstack[this.itercur].reset();
    this.itercur++;
    if (this.itercur === this.iterstack.length) {
      this.iterstack.push(new MapIter(this));
    }
    return ret2;
  }
};
globalThis._test_map = function() {
  let m = new map();
  m.set("1", 2);
  m.set(11, 3);
  m.set("5", 4);
  m.set("3", 5);
  m.set("3", 6);
  m.delete("3");
  for (let [key2, item] of m) {
    for (let [key22, item2] of m) {
      window.console.log(key2, item, key22, item2);
    }
    break;
  }
  console2.log("itercur", m.itercur);
  return m;
};
function validateId(id) {
  let bad = typeof id !== "number";
  bad = bad || id !== ~~id;
  bad = bad || isNaN(id);
  if (bad) {
    throw new Error("bad number " + id);
  }
  return bad;
}
__name(validateId, "validateId");
var UndefinedTag = {};
var IDMap = class extends Array {
  static {
    __name(this, "IDMap");
  }
  constructor() {
    super();
    this._keys = /* @__PURE__ */ new Set();
    this.size = 0;
  }
  has(id) {
    validateId(id);
    if (id < 0 || id >= this.length) {
      return false;
    }
    return this[id] !== void 0;
  }
  set(id, val2) {
    validateId(id);
    if (id < 0) {
      console2.warn("got -1 id in IDMap");
      return;
    }
    if (id >= this.length) {
      this.length = id + 1;
    }
    if (val2 === void 0) {
      val2 = UndefinedTag;
    }
    let ret2 = false;
    if (this[id] === void 0) {
      this.size++;
      this._keys.add(id);
      ret2 = true;
    }
    this[id] = val2;
    return ret2;
  }
  /* we allow -1, which always returns undefined*/
  get(id) {
    validateId(id);
    if (id === -1) {
      return void 0;
    } else if (id < 0) {
      console2.warn("id was negative");
      return void 0;
    }
    let ret2 = id < this.length ? this[id] : void 0;
    ret2 = ret2 === UndefinedTag ? void 0 : ret2;
    return ret2;
  }
  delete(id) {
    if (!this.has(id)) {
      return false;
    }
    this._keys.remove(id);
    this[id] = void 0;
    this.size--;
    return true;
  }
  keys() {
    let this2 = this;
    return function* () {
      for (let id of this2._keys) {
        yield id;
      }
    }();
  }
  values() {
    let this2 = this;
    return function* () {
      for (let id of this2._keys) {
        yield this2[id];
      }
    }();
  }
  [Symbol.iterator]() {
    let this2 = this;
    let iteritem = [0, 0];
    return function* () {
      for (let id of this2._keys) {
        iteritem[0] = id;
        iteritem[1] = this2[id];
        if (iteritem[1] === UndefinedTag) {
          iteritem[1] = void 0;
        }
        yield iteritem;
      }
    }();
  }
};
globalThis._test_idmap = function() {
  let map3 = new IDMap();
  for (let i2 = 0; i2 < 5; i2++) {
    let id = ~~(Math.random() * 55);
    map3.set(id, "yay" + i2);
  }
  for (let [key2, val2] of map3) {
    window.console.log(key2, val2, map3.has(key2), map3.get(key2));
  }
  return map3;
};
var HW = 0, HELEM = 1, HTOT = 2;
function heaplog() {
}
__name(heaplog, "heaplog");
var MinHeapQueue = class {
  static {
    __name(this, "MinHeapQueue");
  }
  constructor(iter, iterw = iter) {
    this.heap = [];
    this.freelist = [];
    this.length = 0;
    this.end = 0;
    if (iter) {
      let witer = iterw[Symbol.iterator]();
      for (let item of iter) {
        let w = witer.next().value;
        this.push(item, w);
      }
    }
  }
  push(e2, w) {
    if (typeof w !== "number") {
      throw new Error("w must be a number");
    }
    if (isNaN(w)) {
      throw new Error("NaN");
    }
    this.length++;
    let depth = Math.ceil(Math.log(this.length) / Math.log(2));
    let tot = Math.pow(2, depth) + 1;
    heaplog(depth, tot);
    if (this.heap.length < tot * HTOT) {
      let start2 = this.heap.length / HTOT;
      for (let i2 = start2; i2 < tot; i2++) {
        this.freelist.push(i2 * HTOT);
      }
    }
    let heap = this.heap;
    heap.length = tot * HTOT;
    let n = this.freelist.pop();
    heaplog("freelist", this.freelist);
    this.end = Math.max(this.end, n);
    heap[n] = w;
    heap[n + 1] = e2;
    while (n > 0) {
      n /= HTOT;
      let p = n - 1 >> 1;
      n *= HTOT;
      p *= HTOT;
      if (heap[p] === void 0 || heap[p] > w) {
        if (n === this.end) {
          this.end = p;
        }
        heap[n] = heap[p];
        heap[n + 1] = heap[p + 1];
        heap[p] = w;
        heap[p + 1] = e2;
        n = p;
      } else {
        break;
      }
    }
  }
  pop() {
    if (this.length === 0) {
      return void 0;
    }
    let heap = this.heap;
    if (this.end === 0) {
      let ret3 = heap[1];
      this.freelist.push(0);
      heap[0] = void 0;
      this.length = 0;
      return ret3;
    }
    let ret2 = heap[1];
    let end3 = this.end;
    function swap(n1, n2) {
      let t = heap[n1];
      heap[n1] = heap[n2];
      heap[n2] = t;
      t = heap[n1 + 1];
      heap[n1 + 1] = heap[n2 + 1];
      heap[n2 + 1] = t;
    }
    __name(swap, "swap");
    heaplog("end", end3);
    heaplog(heap.concat([]));
    heap[0] = heap[end3];
    heap[1] = heap[end3 + 1];
    heap[end3] = void 0;
    heap[end3 + 1] = void 0;
    let n = 0;
    while (n < heap.length) {
      n /= HTOT;
      let n1 = n * 2 + 1;
      let n2 = n * 2 + 2;
      n1 = ~~(n1 * HTOT);
      n2 = ~~(n2 * HTOT);
      n = ~~(n * HTOT);
      heaplog("  ", heap[n], heap[n1], heap[n2]);
      if (heap[n1] !== void 0 && heap[n2] !== void 0) {
        if (heap[n1] > heap[n2]) {
          let t = n1;
          n1 = n2;
          n2 = t;
        }
        if (heap[n] > heap[n1]) {
          swap(n, n1);
          n = n1;
        } else if (heap[n] > heap[n2]) {
          swap(n, n2);
          n = n2;
        } else {
          break;
        }
      } else if (heap[n1] !== void 0) {
        if (heap[n] > heap[n1]) {
          swap(n, n1);
          n = n1;
        } else {
          break;
        }
      } else if (heap[n2] !== void 0) {
        if (heap[n] > heap[n2]) {
          swap(n, n2);
          n = n2;
        } else {
          break;
        }
      } else {
        break;
      }
    }
    this.freelist.push(this.end);
    heap[this.end] = void 0;
    heap[this.end + 1] = void 0;
    while (this.end > 0 && heap[this.end] === void 0) {
      this.end -= HTOT;
    }
    this.length--;
    return ret2;
  }
};
globalThis.testHeapQueue = function(list1 = [1, 8, -3, 11, 33]) {
  let h2 = new MinHeapQueue(list1);
  window.console.log(h2.heap.concat([]));
  let list4 = [];
  let len = h2.length;
  for (let i2 = 0; i2 < len; i2++) {
    list4.push(h2.pop());
  }
  window.console.log(h2.heap.concat([]));
  return list4;
};
var Queue = class {
  static {
    __name(this, "Queue");
  }
  constructor(n = 32) {
    n = Math.max(n, 8);
    this.initialSize = n;
    this.queue = new Array(n);
    this.a = 0;
    this.b = 0;
    this.length = 0;
  }
  enqueue(item) {
    let qlen = this.queue.length;
    let b = this.b;
    this.queue[b] = item;
    this.b = (this.b + 1) % qlen;
    if (this.length >= qlen || this.a === this.b) {
      let newsize = qlen << 1;
      let queue = new Array(newsize);
      for (let i2 = 0; i2 < qlen; i2++) {
        let i22 = (i2 + this.a) % qlen;
        queue[i2] = this.queue[i22];
      }
      this.a = 0;
      this.b = qlen;
      this.queue = queue;
    }
    this.length++;
  }
  clear(clearData = true) {
    this.queue.length = this.initialSize;
    if (clearData) {
      for (let i2 = 0; i2 < this.queue.length; i2++) {
        this.queue[i2] = void 0;
      }
    }
    this.a = this.b = 0;
    this.length = 0;
    return this;
  }
  dequeue() {
    if (this.length === 0) {
      return void 0;
    }
    this.length--;
    let ret2 = this.queue[this.a];
    this.queue[this.a] = void 0;
    this.a = (this.a + 1) % this.queue.length;
    return ret2;
  }
};
globalThis._testQueue = function(steps = 15, samples = 15) {
  let queue = new Queue(3);
  for (let i2 = 0; i2 < steps; i2++) {
    let list4 = [];
    for (let j3 = 0; j3 < samples; j3++) {
      let item = { f: Math.random() };
      list4.push(item);
      queue.enqueue(item);
    }
    let j2 = 0;
    while (queue.length > 0) {
      let item = queue.dequeue();
      if (item !== list4[j2]) {
        console2.log(item, list4);
        throw new Error("got wrong item", item);
      }
      j2++;
      if (j2 > 1e4) {
        console2.error("Infinite loop error");
        break;
      }
    }
  }
};
var ArrayPool = class {
  static {
    __name(this, "ArrayPool");
  }
  constructor() {
    this.pools = /* @__PURE__ */ new Map();
    this.map = new Array(1024);
  }
  get(n, clear = false) {
    let pool;
    if (n < 1024) {
      pool = this.map[n];
    } else {
      pool = this.pools.get(n);
    }
    if (!pool) {
      let tot;
      if (n > 512) {
        tot = 32;
      } else if (n > 256) {
        tot = 64;
      } else if (n > 128) {
        tot = 256;
      } else if (n > 64) {
        tot = 512;
      } else {
        tot = 1024;
      }
      pool = new cachering2(() => new Array(n), tot);
      if (n < 1024) {
        this.map[n] = pool;
      }
      this.pools.set(n, pool);
      return this.get(n, clear);
    }
    let ret2 = pool.next();
    if (ret2.length !== n) {
      console2.warn("Array length was set", n, ret2);
      ret2.length = n;
    }
    if (clear) {
      for (let i2 = 0; i2 < n; i2++) {
        ret2[i2] = void 0;
      }
    }
    return ret2;
  }
};
var DivLogger = class {
  static {
    __name(this, "DivLogger");
  }
  constructor(elemId, maxLines = 16) {
    this.elemId = elemId;
    this.elem = void 0;
    this.lines = new Array();
    this.maxLines = maxLines;
  }
  push(line2) {
    if (this.lines.length > this.maxLines) {
      this.lines.shift();
      this.lines.push(line2);
    } else {
      this.lines.push(line2);
    }
    this.update();
  }
  update() {
    let buf = this.lines.join(`<br>`);
    buf = buf.replace(/[ \t]/g, "&nbsp;");
    if (!this.elem) {
      this.elem = document.getElementById(this.elemId);
    }
    this.elem.innerHTML = buf;
  }
  toString(obj2, depth = 0) {
    let s = "";
    let tab2 = "";
    for (let i2 = 0; i2 < depth; i2++) {
      tab2 += "$TAB";
    }
    if (typeof obj2 === "symbol") {
      return `[${obj2.description}]`;
    }
    const DEPTH_LIMIT = 1;
    const CHAR_LIMIT = 100;
    if (typeof obj2 === "object" && Array.isArray(obj2)) {
      s = "[$NL";
      for (let i2 = 0; i2 < obj2.length; i2++) {
        let v = obj2[i2];
        if (depth >= DEPTH_LIMIT) {
          v = typeof v;
        } else {
          v = this.toString(v, depth + 1);
        }
        s += tab2 + "$TAB";
        s += v + (i2 !== obj2.length - 1 ? "," : "") + "$NL";
      }
      let keys2 = Reflect.ownKeys(obj2);
      for (let i2 = 0; i2 < keys2.length; i2++) {
        let k2 = keys2[i2];
        let n;
        let k22 = this.toString(k2);
        if (typeof k2 !== "symbol" && !isNaN(n = parseInt(k2))) {
          if (n >= 0 && n < obj2.length) {
            continue;
          }
        }
        let v;
        try {
          v = obj2[k2];
        } catch (error) {
          v = "(error)";
        }
        s += tab2 + `$TAB${k22} : ${v}`;
        if (i2 < keys2.length - 1) {
          s += ",";
        }
        if (!s.endsWith("$NL") && !s.endsWith("\n")) {
          s += "$NL";
        }
      }
      s += "$TAB]$NL";
      if (s.length < CHAR_LIMIT) {
        s = s.replace(/\$NL/g, "");
        s = s.replace(/(\$TAB)+/g, " ");
      } else {
        s = s.replace(/\$NL/g, "\n");
        s = s.replace(/\$TAB/g, "  ");
      }
    } else if (typeof obj2 === "object") {
      s = "{$NL";
      let keys2 = Reflect.ownKeys(obj2);
      for (let i2 = 0; i2 < keys2.length; i2++) {
        let k2 = keys2[i2];
        let k22 = this.toString(k2);
        let v;
        try {
          v = obj2[k2];
        } catch (error) {
          v = "(error)";
        }
        if (depth >= DEPTH_LIMIT) {
          v = typeof v;
        } else {
          v = this.toString(v, depth + 1);
        }
        s += tab2 + `$TAB${k22} : ${v}`;
        if (i2 < keys2.length - 1) {
          s += ",";
        }
        if (!s.endsWith("$NL") && !s.endsWith("\n")) {
          s += "$NL";
        }
      }
      s += tab2 + "}$NL";
      if (s.length < CHAR_LIMIT) {
        s = s.replace(/\$NL/g, "");
        s = s.replace(/(\$TAB)+/g, " ");
      } else {
        s = s.replace(/\$NL/g, "\n");
        s = s.replace(/\$TAB/g, "  ");
      }
    } else if (typeof obj2 === "undefined") {
      s = "undefined";
    } else if (typeof obj2 === "function") {
      s = "function " + obj2.name;
    } else {
      s = "" + obj2;
    }
    return s;
  }
};
var PendingTimeoutPromises = /* @__PURE__ */ new Set();
var TimeoutPromise = class _TimeoutPromise {
  static {
    __name(this, "TimeoutPromise");
  }
  constructor(callback, timeout = 3e3, silent = false) {
    if (!callback) {
      return;
    }
    this.silent = silent;
    this.timeout = timeout;
    let accept2 = this._accept2.bind(this);
    let reject2 = this._reject2.bind(this);
    this.time = time_ms();
    this.rejected = false;
    this._promise = new Promise((accept, reject) => {
      this._accept = accept;
      this._reject = reject;
      callback(accept2, reject2);
    });
    PendingTimeoutPromises.add(this);
  }
  _accept2(val2) {
    if (this.bad) {
      if (!this.silent) {
        this._reject(new Error("Timeout"));
      }
    } else {
      return this._accept(val2);
    }
  }
  static wrapPromise(promise, timeout = 3e3, callback) {
    let p = new _TimeoutPromise();
    p._promise = promise;
    p._accept = callback;
    p._reject = function(error) {
      throw error;
    };
    p.then((val2) => {
      p._accept2(val2);
    }).catch((error) => {
      p._reject2(error);
    });
    return p;
  }
  _reject2(error) {
    this._reject(error);
  }
  then(callback) {
    let cb = /* @__PURE__ */ __name((val2) => {
      let ret2 = callback(val2);
      if (ret2 instanceof Promise) {
        ret2 = _TimeoutPromise.wrapPromise(ret2, this.timeout, callback);
      }
      return ret2;
    }, "cb");
    this._promise.then(cb);
    return this;
  }
  catch(callback) {
    this._promise.catch(callback);
    return this;
  }
  finally(callback) {
    this._promise.catch(callback);
    return this;
  }
  get bad() {
    return time_ms() - this.time > this.timeout;
  }
};
window.setInterval(() => {
  let bad = [];
  for (let promise of PendingTimeoutPromises) {
    if (promise.bad) {
      bad.push(promise);
    }
  }
  for (let promise of bad) {
    PendingTimeoutPromises.delete(promise);
  }
  for (let promise of bad) {
    try {
      promise._reject(new Error("Timeout"));
    } catch (error) {
      print_stack(error);
    }
  }
}, 250);
function compress(data) {
  return lz_string_default.compressToUint8Array(data);
}
__name(compress, "compress");
function decompress(data) {
  if (data instanceof DataView) {
    data = data.buffer;
  }
  if (data instanceof ArrayBuffer) {
    data = new Uint8Array(data);
  }
  return lz_string_default.decompressFromUint8Array(data);
}
__name(decompress, "decompress");
function undefinedForGC() {
  return void 0;
}
__name(undefinedForGC, "undefinedForGC");

// scripts/path.ux/scripts/path-controller/config/config.js
var config_exports = {};
__export(config_exports, {
  config: () => config,
  default: () => config_default,
  setConfig: () => setConfig
});
var config = {
  doubleClickTime: 500,
  //auto load 1d bspline templates, can hurt startup time
  autoLoadSplineTemplates: true,
  //timeout for press-and-hold (touch) version of double clicking
  doubleClickHoldTime: 750,
  DEBUG: {}
};
function setConfig(obj2) {
  for (let k2 in obj2) {
    config[k2] = obj2[k2];
  }
}
__name(setConfig, "setConfig");
var config_default = config;

// scripts/path.ux/scripts/config/const.js
var _clipdata = {
  name: "nothing",
  mime: "nothing",
  data: void 0
};
var _clipboards = {};
window.setInterval(() => {
  if (!document.hasFocus()) {
    return;
  }
  let cb = navigator.clipboard;
  if (!cb || !cb.read) {
    return;
  }
  cb.read().then((data) => {
    for (let item of data) {
      for (let i2 = 0; i2 < item.types.length; i2++) {
        let type = item.types[i2];
        if (!(type in _clipboards)) {
          _clipboards[type] = {
            name: type,
            mime: type,
            data: void 0
          };
        }
        ;
        item.getType(type).then((blob) => new Response(blob).text()).then((text) => {
          _clipboards[type].data = text;
        });
      }
    }
  }).catch(function() {
  });
}, 200);
var exports = {
  /** Client code can override this using `.loadConstants`, this is
   *  a simple implementation that just handles color data.
   *
   * `desiredMimes` is either a string, or an array of strings
   */
  getClipboardData(desiredMimes = "text/plain") {
    if (typeof desiredMimes === "string") {
      desiredMimes = [desiredMimes];
    }
    for (let m of desiredMimes) {
      let cb = _clipboards[m];
      if (cb && cb.data) {
        return cb;
      }
    }
  },
  /** Client code can override this. This is a simple implementation
   *  that just handles color data
   */
  setClipboardData(name, mime, data) {
    _clipboards[mime] = {
      name,
      mime,
      data
    };
    let clipboard = navigator.clipboard;
    if (!clipboard) {
      return;
    }
    try {
      clipboard.write([new ClipboardItem({
        [mime]: new Blob([data], { type: mime })
      })]).catch((error) => {
        if (mime.startsWith("text") && mime !== "text/plain") {
          this.setClipboardData(name, "text/plain", data);
        } else {
          console.error(error);
        }
      });
    } catch (error) {
      console.log(error.stack);
      console.log("failed to write to system clipboard");
    }
  },
  colorSchemeType: "light",
  docManualPath: "../simple_docsys/doc_build/",
  docEditorPath: "../simple_docsys.js",
  /* Add textboxes to rollar sliders,
     note that  users can also double click them to
     enter text as well
   */
  useNumSliderTextboxes: true,
  numSliderArrowLimit: 15,
  /* Threshold to check if numslider arrow was clicked. */
  simpleNumSliders: false,
  menusCanPopupAbove: false,
  menu_close_time: 500,
  doubleClickTime: 500,
  /* Timeout for press-and-hold (touch) version of double clicking. */
  doubleClickHoldTime: 750,
  DEBUG: {
    paranoidEvents: false,
    screenborders: false,
    areaContextPushes: false,
    allBordersMovable: false,
    doOnce: false,
    modalEvents: false,
    areaConstraintSolver: false,
    datapaths: false,
    lastToolPanel: false,
    domEvents: false,
    domEventAddRemove: false,
    debugUIUpdatePerf: false,
    /* Turns async FrameManager.update_intern loop into sync. */
    screenAreaPosSizeAccesses: false,
    buttonEvents: false
    /*
    customWindowSize: {
      width: 2048, height: 2048
    },
    //*/
  },
  /* Auto load 1d bspline templates, can hurt startup time. */
  autoLoadSplineTemplates: true,
  addHelpPickers: true,
  useAreaTabSwitcher: false,
  autoSizeUpdate: true,
  showPathsInToolTips: true,
  enableThemeAutoUpdate: true,
  useNativeToolTips: true,
  noElectronMenus: false,
  loadConstants: /* @__PURE__ */ __name(function(args2) {
    for (let k2 in args2) {
      if (k2 === "loadConstants")
        continue;
      this[k2] = args2[k2];
    }
    setConfig(this);
  }, "loadConstants")
};
var const_default = exports;
window.DEBUG = exports.DEBUG;
var cfg = document.getElementById("pathux-config");
if (cfg) {
  exports.loadConstants(JSON.parse(cfg.innerText));
}

// scripts/path.ux/scripts/path-controller/util/vectormath.js
var vectormath_exports = {};
__export(vectormath_exports, {
  BaseVector: () => BaseVector2,
  EulerOrders: () => EulerOrders,
  F32BaseVector: () => F32BaseVector,
  F64BaseVector: () => F64BaseVector,
  I16BaseVector: () => I16BaseVector,
  I32BaseVector: () => I32BaseVector,
  I8BaseVector: () => I8BaseVector,
  Matrix4: () => Matrix4,
  Quat: () => Quat,
  UI16BaseVector: () => UI16BaseVector,
  UI32BaseVector: () => UI32BaseVector,
  UI8BaseVector: () => UI8BaseVector,
  Vector2: () => Vector2,
  Vector3: () => Vector32,
  Vector4: () => Vector4,
  makeVector2: () => makeVector2,
  makeVector3: () => makeVector3,
  makeVector4: () => makeVector4
});
var EulerOrders = {
  XYZ: 0,
  XZY: 1,
  YXZ: 2,
  YZX: 3,
  ZXY: 4,
  ZYX: 5
};
window.makeCompiledVectormathCode = function(mode = "es") {
  let s = "";
  let es6exports = mode === "es";
  function doExports(name) {
    if (es6exports) {
      return "export";
    } else {
      return `let ${name} = exports.${name} =`;
    }
  }
  __name(doExports, "doExports");
  let classes = [Vector2, Vector32, Vector4, a];
  let lens = {
    Vector2: 2,
    Vector3: 3,
    Vector4: 4,
    Quat: 4
  };
  let modecode = "";
  let nstructjscode = `
  let g = typeof window !== "undefined" ? window : "undefined";
  
  g = g || (typeof global !== "undefined" ? global : "undefined");
  g = g || (typeof self !== "undefined" ? self : "undefined");
  g = g || (typeof globals !== "undefined" ? globals : "undefined");

  if (typeof nstructjs === "undefined") {
    //add nstructjs stub
    g.nstructjs = {
      register : function() {}
    }
  }
  `;
  if (mode !== "rjs") {
    if (mode === "commonjs") {
      modecode = `if (typeof module !== "undefined" && typeof exports === "undefined") {
      if (module.exports === undefined) {
        module.exports = {};
      }
      
      g.exports = module.exports;
    } else if (typeof module === "undefined") {
      g.exports = g.vectormath = {};
    }
`;
    }
    s += `{
      ${nstructjscode}
    ${modecode}
  }`;
  }
  s += `
class cachering extends Array {
  constructor(func, size) {
    super()

    this.cur = 0;

    for (let i=0; i<size; i++) {
      this.push(func());
    }
  }

  static fromConstructor(cls, size) {
    let func = function() {
      return new cls();
    }

    return new cachering(func, size);
  }

  next() {
    let ret = this[this.cur];
    this.cur = (this.cur+1)%this.length;

    return ret;
  }
}
`;
  s += `

let M_SQRT2 = Math.sqrt(2.0);
let FLT_EPSILON = 2.22e-16;  
let sin=Math.sin, cos=Math.cos, abs=Math.abs, log=Math.log,
    asin=Math.asin, exp=Math.exp, acos=Math.acos, fract=Math.fract,
    sign=Math.sign, tent=Math.tent, atan2=Math.atan2, atan=Math.atan,
    pow=Math.pow, sqrt=Math.sqrt, floor=Math.floor, ceil=Math.ceil,
    min=Math.min, max=Math.max, PI=Math.PI, E=2.718281828459045;

let DOT_NORM_SNAP_LIMIT = 0.00000000001;

${doExports("BaseVector")} class BaseVector extends Array {
  constructor() {
    super();
    
    this.vec = undefined; //for compatibility with old files
  }

  copy() {
    return new this.constructor(this);
  }

  load(data) {
    throw new Error("Implement me!");
  }
  
  vectorLength() {
    return sqrt(this.dot(this));
  }
  
  normalize() {
    let l = this.vectorLength();
    if (l > 0.00000001) {
      this.mulScalar(1.0/l);
    }
    
    return this;
  }
}
  
`;
  function indent(s2, pad = "  ") {
    let l = s2.split("\n");
    let s22 = "";
    for (let l2 of l) {
      s22 += pad + l2 + "\n";
    }
    return s22;
  }
  __name(indent, "indent");
  let i2 = 0;
  for (let cls2 of classes) {
    s += doExports(cls2.name) + " class " + cls2.name + " extends BaseVector {\n";
    let keys2 = Reflect.ownKeys(cls2.prototype);
    for (let k2 of keys2) {
      let v = cls2.prototype[k2];
      if (typeof v !== "function") {
        continue;
      }
      if (typeof k2 === "symbol") {
        k2 = "  [" + k2.toString() + "]";
      }
      v = ("" + v).trim();
      if (v.startsWith("function(") || v.startsWith("function (")) {
        v = k2 + v.slice(8, v.length).trim();
      } else if (v.startsWith("function")) {
        v = v.slice(8, v.length).trim();
      }
      if (v.endsWith(";}")) {
        v = v.slice(0, v.length - 1) + "\n  }\n";
      }
      let zero = "";
      let l = lens[cls2.name];
      for (let j2 = 0; j2 < l; j2++) {
        if (j2 > 0) {
          zero += " = ";
        }
        zero += `this[${j2}]`;
      }
      zero += " = 0.0";
      if (k2 === "constructor") {
        s += `  constructor(data) {
    super(${l});
        
    this.vec = undefined; //for compatibility with old files
    
    if (arguments.length > 1) {
      throw new Error("unexpected argument");
    }

    //this.length = ${l};
    ${zero};

    if (data !== undefined) {
      this.load(data);
    }
  }
`;
      } else {
        s += indent(v);
      }
      s += "\n";
      i2++;
    }
    s += "}\n\n";
    s += `${cls2.name}.STRUCT = \`${cls2.STRUCT}\`;
`;
    s += `nstructjs.register(${cls2.name});

`;
  }
  s += "\n\n" + ("" + internal_matrix).trim() + "\n";
  s += "\n" + doExports("Matrix4") + Matrix4;
  s += `
  Matrix4.STRUCT = \`${Matrix4.STRUCT}\`;
`;
  s += "nstructjs.register(Matrix4)\n";
  s += `
  let _quat_vs3_temps = cachering.fromConstructor(Vector3, 64);
  let _v3nd4_n1_normalizedDot4 = new Vector3();
  let _v3nd4_n2_normalizedDot4 = new Vector3();
  let _v3nd_n1_normalizedDot = new Vector3();
  let _v3nd_n2_normalizedDot = new Vector3();

  let $_v3nd4_n1_normalizedDot4 = new Vector3();
  let $_v3nd4_n2_normalizedDot4 = new Vector3();
  let $_v3nd_n1_normalizedDot = new Vector3();
  let $_v3nd_n2_normalizedDot = new Vector3();

  let lookat_cache_vs3 = cachering.fromConstructor(Vector3, 64);
  let lookat_cache_vs4 = cachering.fromConstructor(Vector4, 64);

  let makenormalcache = cachering.fromConstructor(Vector3, 64);
`;
  if (mode === "rjs") {
    s = `define([], function() {
  "use strict";

  let exports = {};

  {
    ${nstructjscode}
  }
  ${indent(s)}

  return exports;
});
`;
  }
  return s;
};
var sin2 = Math.sin, cos2 = Math.cos, abs2 = Math.abs, log2 = Math.log, asin2 = Math.asin, exp2 = Math.exp, acos2 = Math.acos, fract = Math.fract, sign = Math.sign, tent = Math.tent, atan2 = Math.atan2, atan3 = Math.atan, pow2 = Math.pow, sqrt2 = Math.sqrt, floor2 = Math.floor, ceil2 = Math.ceil, min2 = Math.min, max2 = Math.max, PI2 = Math.PI, E2 = 2.718281828459045;
var DOT_NORM_SNAP_LIMIT = 1e-11;
var M_SQRT2 = Math.sqrt(2);
var FLT_EPSILON = 222e-18;
var basic_funcs = {
  equals: [["b"], "this[X] === b[X]", "&&"],
  /*dot is made manually so it's safe for acos
  dot     : [["b"], "this[X]*b[X]", "+"],
   */
  zero: [[], "0.0;"],
  negate: [[], "-this[X];"],
  combine: [["b", "u", "v"], "this[X]*u + this[X]*v;"],
  interp: [["b", "t"], "this[X] + (b[X] - this[X])*t;"],
  add: [["b"], "this[X] + b[X];"],
  addFac: [["b", "F"], "this[X] + b[X]*F;"],
  fract: [[], "Math.fract(this[X]);"],
  sub: [["b"], "this[X] - b[X];"],
  mul: [["b"], "this[X] * b[X];"],
  div: [["b"], "this[X] / b[X];"],
  mulScalar: [["b"], "this[X] * b;"],
  divScalar: [["b"], "this[X] / b;"],
  addScalar: [["b"], "this[X] + b;"],
  subScalar: [["b"], "this[X] - b;"],
  minScalar: [["b"], "Math.min(this[X], b);"],
  maxScalar: [["b"], "Math.max(this[X], b);"],
  ceil: [[], "Math.ceil(this[X])"],
  floor: [[], "Math.floor(this[X])"],
  abs: [[], "Math.abs(this[X])"],
  min: [["b"], "Math.min(this[X], b[X])"],
  max: [["b"], "Math.max(this[X], b[X])"],
  clamp: [["MIN", "MAX"], "min(max(this[X], MAX), MIN)"]
};
function bounded_acos(fac) {
  if (fac <= -1)
    return Math.pi;
  else if (fac >= 1)
    return 0;
  else
    return Math.acos(fac);
}
__name(bounded_acos, "bounded_acos");
function make_norm_safe_dot(cls2) {
  let _dot = cls2.prototype.dot;
  cls2.prototype._dot = _dot;
  cls2.prototype.dot = function(b) {
    let ret2 = _dot.call(this, b);
    if (ret2 >= 1 - DOT_NORM_SNAP_LIMIT && ret2 <= 1 + DOT_NORM_SNAP_LIMIT)
      return 1;
    if (ret2 >= -1 - DOT_NORM_SNAP_LIMIT && ret2 <= -1 + DOT_NORM_SNAP_LIMIT)
      return -1;
    return ret2;
  };
}
__name(make_norm_safe_dot, "make_norm_safe_dot");
function getBaseVector(parent) {
  return class BaseVector extends parent {
    static {
      __name(this, "BaseVector");
    }
    constructor() {
      super(...arguments);
      this.vec = void 0;
    }
    static inherit(cls, vectorsize) {
      make_norm_safe_dot(cls);
      var f;
      let vectorDotDistance = "f = function vectorDotDistance(b) {\n";
      for (let i2 = 0; i2 < vectorsize; i2++) {
        vectorDotDistance += "  let d" + i2 + " = this[" + i2 + "]-b[" + i2 + "];\n\n  ";
      }
      vectorDotDistance += "  return ";
      for (let i2 = 0; i2 < vectorsize; i2++) {
        if (i2 > 0)
          vectorDotDistance += " + ";
        vectorDotDistance += "d" + i2 + "*d" + i2;
      }
      vectorDotDistance += ";\n";
      vectorDotDistance += "};";
      cls.prototype.vectorDotDistance = eval(vectorDotDistance);
      f = void 0;
      let vectorDistance = "f = function vectorDistance(b) {\n";
      for (let i2 = 0; i2 < vectorsize; i2++) {
        vectorDistance += `  let d${i2} = this[${i2}] - (b[${i2}]||0);

  `;
      }
      vectorDistance += "  return Math.sqrt(";
      for (let i2 = 0; i2 < vectorsize; i2++) {
        if (i2 > 0)
          vectorDistance += " + ";
        vectorDistance += "d" + i2 + "*d" + i2;
      }
      vectorDistance += ");\n";
      vectorDistance += "};";
      cls.prototype.vectorDistance = eval(vectorDistance);
      let vectorDistanceSqr = "f = function vectorDistanceSqr(b) {\n";
      for (let i2 = 0; i2 < vectorsize; i2++) {
        vectorDistanceSqr += `  let d${i2} = this[${i2}] - (b[${i2}]||0);

  `;
      }
      vectorDistanceSqr += "  return (";
      for (let i2 = 0; i2 < vectorsize; i2++) {
        if (i2 > 0)
          vectorDistanceSqr += " + ";
        vectorDistanceSqr += "d" + i2 + "*d" + i2;
      }
      vectorDistanceSqr += ");\n";
      vectorDistanceSqr += "};";
      cls.prototype.vectorDistanceSqr = eval(vectorDistanceSqr);
      for (let k in basic_funcs) {
        let func = basic_funcs[k];
        let args = func[0];
        let line = func[1];
        var f;
        let code = "f = function " + k + "(";
        for (let i2 = 0; i2 < args.length; i2++) {
          if (i2 > 0)
            code += ", ";
          line = line.replace(args[i2], args[i2].toLowerCase());
          code += args[i2].toLowerCase();
        }
        code += ") {\n";
        if (func.length > 2) {
          code += "  return ";
          for (let i2 = 0; i2 < vectorsize; i2++) {
            if (i2 > 0)
              code += func[2];
            code += "(" + line.replace(/X/g, "" + i2) + ")";
          }
          code += ";\n";
        } else {
          for (let i2 = 0; i2 < vectorsize; i2++) {
            let line2 = line.replace(/X/g, "" + i2);
            code += "  this[" + i2 + "] = " + line2 + ";\n";
          }
          code += "  return this;\n";
        }
        code += "}\n";
        f = eval(code);
        cls.prototype[k] = f;
      }
    }
    copy() {
      return new this.constructor(this);
    }
    load(data) {
      throw new Error("Implement me!");
    }
    init_swizzle(size) {
      let ret2 = {};
      let cls2 = size === 4 ? Vector4 : size === 3 ? Vector32 : Vector2;
      for (let k2 in cls2.prototype) {
        let v = cls2.prototype[k2];
        if (typeof v !== "function" && !(v instanceof Function))
          continue;
        ret2[k2] = v.bind(this);
      }
      return ret2;
    }
    vectorLength() {
      return sqrt2(this.dot(this));
    }
    swapAxes(axis1, axis2) {
      let t = this[axis1];
      this[axis1] = this[axis2];
      this[axis2] = t;
      return this;
    }
    sinterp(v2, t) {
      let l1 = this.vectorLength();
      let l2 = v2.vectorLength();
      return this.interp(v2, t).normalize().mulScalar(l1 + (l2 - l1) * t);
    }
    perpSwap(axis1 = 0, axis2 = 1, sign2 = 1) {
      let tmp = this[axis1];
      this[axis1] = this[axis2] * sign2;
      this[axis2] = -tmp * sign2;
      return this;
    }
    normalize() {
      let l = this.vectorLength();
      if (l > 1e-8) {
        this.mulScalar(1 / l);
      }
      return this;
    }
  };
}
__name(getBaseVector, "getBaseVector");
var BaseVector2 = getBaseVector(Array);
var F64BaseVector = getBaseVector(Float64Array);
var F32BaseVector = getBaseVector(Float32Array);
var I32BaseVector = getBaseVector(Int32Array);
var I16BaseVector = getBaseVector(Int16Array);
var I8BaseVector = getBaseVector(Int8Array);
var UI32BaseVector = getBaseVector(Uint32Array);
var UI16BaseVector = getBaseVector(Uint16Array);
var UI8BaseVector = getBaseVector(Uint8Array);
function myclamp(f3, a3, b) {
  return Math.min(Math.max(f3, a3), b);
}
__name(myclamp, "myclamp");
function makeVector4(BaseVector3, structName2 = "vec4", structType2 = "float") {
  let temp1, temp2, temp3, temp4;
  const Vector43 = class Vector4 extends BaseVector3 {
    static {
      __name(this, "Vector4");
    }
    static STRUCT = struct_default.inlineRegister(this, `
    ${structName2} {
      0 : ${structType2};
      1 : ${structType2};
      2 : ${structType2};
      3 : ${structType2};
    }`);
    constructor(data) {
      super(4);
      if (arguments.length > 1) {
        throw new Error("unexpected argument");
      }
      this[0] = this[1] = this[2] = this[3] = 0;
      if (data !== void 0) {
        this.load(data);
      }
    }
    toCSS() {
      let r = ~~(this[0] * 255);
      let g = ~~(this[1] * 255);
      let b = ~~(this[2] * 255);
      let a3 = this[3];
      return `rgba(${r},${g},${b},${a3})`;
    }
    loadXYZW(x, y, z, w) {
      this[0] = x;
      this[1] = y;
      this[2] = z;
      this[3] = w;
      return this;
    }
    loadXYZ(x, y, z) {
      this[0] = x;
      this[1] = y;
      this[2] = z;
      return this;
    }
    static normalizedDot4(v1, v2, v3, v4) {
      temp1.load(v2).sub(v1).normalize();
      temp2.load(v4).sub(v3).normalize();
      return temp1.dot(temp2);
    }
    static normalizedDot3(v1, center, v2) {
      temp1.load(v1).sub(center).normalize();
      temp2.load(v2).sub(center).normalize();
      return temp1.dot(temp2);
    }
    load(data) {
      if (data === void 0)
        return this;
      this[0] = data[0];
      this[1] = data[1];
      this[2] = data[2];
      this[3] = data[3];
      return this;
    }
    dot(b) {
      return this[0] * b[0] + this[1] * b[1] + this[2] * b[2] + this[3] * b[3];
    }
    mulVecQuat(q2) {
      let t0 = -q2[1] * this[0] - q2[2] * this[1] - q2[3] * this[2];
      let t1 = q2[0] * this[0] + q2[2] * this[2] - q2[3] * this[1];
      let t2 = q2[0] * this[1] + q2[3] * this[0] - q2[1] * this[2];
      this[2] = q2[0] * this[2] + q2[1] * this[1] - q2[2] * this[0];
      this[0] = t1;
      this[1] = t2;
      t1 = t0 * -q2[1] + this[0] * q2[0] - this[1] * q2[3] + this[2] * q2[2];
      t2 = t0 * -q2[2] + this[1] * q2[0] - this[2] * q2[1] + this[0] * q2[3];
      this[2] = t0 * -q2[3] + this[2] * q2[0] - this[0] * q2[2] + this[1] * q2[1];
      this[0] = t1;
      this[1] = t2;
      return this;
    }
    multVecMatrix(matrix) {
      let x = this[0];
      let y = this[1];
      let z = this[2];
      let w = this[3];
      this[0] = w * matrix.$matrix.m41 + x * matrix.$matrix.m11 + y * matrix.$matrix.m21 + z * matrix.$matrix.m31;
      this[1] = w * matrix.$matrix.m42 + x * matrix.$matrix.m12 + y * matrix.$matrix.m22 + z * matrix.$matrix.m32;
      this[2] = w * matrix.$matrix.m43 + x * matrix.$matrix.m13 + y * matrix.$matrix.m23 + z * matrix.$matrix.m33;
      this[3] = w * matrix.$matrix.m44 + x * matrix.$matrix.m14 + y * matrix.$matrix.m24 + z * matrix.$matrix.m34;
      return this[3];
    }
    cross(v) {
      let x = this[1] * v[2] - this[2] * v[1];
      let y = this[2] * v[0] - this[0] * v[2];
      let z = this[0] * v[1] - this[1] * v[0];
      this[0] = x;
      this[1] = y;
      this[2] = z;
      return this;
    }
    preNormalizedAngle(v2) {
      let th = this.dot(v2) * 0.99999;
      return Math.acos(th);
    }
    loadSTRUCT(reader) {
      reader(this);
      if (typeof this.vec !== "undefined") {
        this.load(this.vec);
        this.vec = void 0;
      }
    }
  };
  temp1 = new Vector43();
  temp2 = new Vector43();
  temp3 = new Vector43();
  temp4 = new Vector43();
  return Vector43;
}
__name(makeVector4, "makeVector4");
var Vector4 = makeVector4(BaseVector2);
var _v3nd_n1_normalizedDot, _v3nd_n2_normalizedDot;
var _v3nd4_n1_normalizedDot4, _v3nd4_n2_normalizedDot4;
function makeVector3(BaseVector, structName = "vec3", structType = "float", customConstructorCode = void 0) {
  var Vector3;
  var bundlehelper = [struct_default];
  const constructorCode = customConstructorCode ?? `
    constructor(data) {
      super(3);

      if (arguments.length > 1) {
        throw new Error("unexpected argument");
      }

      this[0] = this[1] = this[2] = 0.0;

      if (data !== undefined) {
        this.load(data);
      }

      if (this.constructor === Vector3) {
        Object.preventExtensions(this);
      }
    }
  `;
  const code = `
  let temp1, temp2, temp3, temp4;
  Vector3 = class Vector3 extends BaseVector {
    static STRUCT = bundlehelper[0].inlineRegister(this, \`
    ${structName} {
      0 : ${structType};
      1 : ${structType};
      2 : ${structType};
    }\`);

    ${constructorCode}

    static normalizedDot4(v1, v2, v3, v4) {
      temp1.load(v2).sub(v1).normalize()
      temp2.load(v4).sub(v3).normalize();

      return temp1.dot(temp2);

    }

    static normalizedDot3(v1, center, v2) {
      temp1.load(v1).sub(center).normalize();
      temp2.load(v2).sub(center).normalize();

      return temp1.dot(temp2);
    }

    toCSS() {
      let r = ~~(this[0]*255);
      let g = ~~(this[1]*255);
      let b = ~~(this[2]*255);
      return \`rgb(\${r},\${g},\${b})\`
    }

    loadXYZ(x, y, z) {
      this[0] = x;
      this[1] = y;
      this[2] = z;

      return this;
    }

    loadXY(x, y) {
      this[0] = x;
      this[1] = y;

      return this;
    }

    toJSON() {
      return [this[0], this[1], this[2]];
    }

    loadJSON(obj) {
      return this.load(obj);
    }

    initVector3() {
      this.length = 3;
      this[0] = this[1] = this[2] = 0;
      return this;
    }

    load(data) {
      if (data === undefined)
        return this;

      //if (isNaN(data[0]) || isNaN(data[1]) || isNaN(data[2])) {
      //  throw new Error("NaN");
      //}

      this[0] = data[0];
      this[1] = data[1];
      this[2] = data[2];

      return this;
    }

    dot(b) {
      return this[0]*b[0] + this[1]*b[1] + this[2]*b[2];
    }

    normalizedDot(v) {
      $_v3nd_n1_normalizedDot.load(this);
      $_v3nd_n2_normalizedDot.load(v);
      $_v3nd_n1_normalizedDot.normalize();
      $_v3nd_n2_normalizedDot.normalize();
      return $_v3nd_n1_normalizedDot.dot($_v3nd_n2_normalizedDot);
    }

    mulVecQuat(q) {
      let t0 = -q[1]*this[0] - q[2]*this[1] - q[3]*this[2];
      let t1 = q[0]*this[0] + q[2]*this[2] - q[3]*this[1];
      let t2 = q[0]*this[1] + q[3]*this[0] - q[1]*this[2];

      this[2] = q[0]*this[2] + q[1]*this[1] - q[2]*this[0];
      this[0] = t1;
      this[1] = t2;

      t1 = t0* -q[1] + this[0]*q[0] - this[1]*q[3] + this[2]*q[2];
      t2 = t0* -q[2] + this[1]*q[0] - this[2]*q[1] + this[0]*q[3];

      this[2] = t0* -q[3] + this[2]*q[0] - this[0]*q[2] + this[1]*q[1];
      this[0] = t1;
      this[1] = t2;

      return this;
    }

    multVecMatrix(matrix, ignore_w) {
      if (ignore_w === undefined) {
        ignore_w = false;
      }
      let x = this[0];
      let y = this[1];
      let z = this[2];
      this[0] = matrix.$matrix.m41 + x*matrix.$matrix.m11 + y*matrix.$matrix.m21 + z*matrix.$matrix.m31;
      this[1] = matrix.$matrix.m42 + x*matrix.$matrix.m12 + y*matrix.$matrix.m22 + z*matrix.$matrix.m32;
      this[2] = matrix.$matrix.m43 + x*matrix.$matrix.m13 + y*matrix.$matrix.m23 + z*matrix.$matrix.m33;
      let w = matrix.$matrix.m44 + x*matrix.$matrix.m14 + y*matrix.$matrix.m24 + z*matrix.$matrix.m34;

      if (!ignore_w && w !== 1 && w !== 0 && matrix.isPersp) {
        this[0] /= w;
        this[1] /= w;
        this[2] /= w;
      }
      return w;
    }

    cross(v) {
      let x = this[1]*v[2] - this[2]*v[1];
      let y = this[2]*v[0] - this[0]*v[2];
      let z = this[0]*v[1] - this[1]*v[0];

      this[0] = x;
      this[1] = y;
      this[2] = z;

      return this;
    }

    //axis is optional, 0
    rot2d(A, axis = 0) {
      let x = this[0];
      let y = this[1];

      if (axis === 1) {
        this[0] = x*cos(A) + y*sin(A);
        this[1] = y*cos(A) - x*sin(A);
      } else {
        this[0] = x*cos(A) - y*sin(A);
        this[1] = y*cos(A) + x*sin(A);
      }

      return this;
    }

    preNormalizedAngle(v2) {
      let th = this.dot(v2)*0.99999;
      return Math.acos(th);
    }

    loadSTRUCT(reader) {
      reader(this);

      if (typeof this.vec !== "undefined") {
        this.load(this.vec);
        this.vec = undefined;
      }
    }
  }

  temp1 = new Vector3();
  temp2 = new Vector3();
  temp3 = new Vector3();
  temp4 = new Vector3();
  `;
  eval(code);
  return Vector3;
}
__name(makeVector3, "makeVector3");
var Vector32 = makeVector3(F64BaseVector);
function makeVector2(BaseVector3, structName2 = "vec2", structType2 = "float") {
  let temp1, temp2, temp3, temp4;
  const Vector24 = class Vector2 extends BaseVector3 {
    static {
      __name(this, "Vector2");
    }
    static STRUCT = struct_default.inlineRegister(this, `
    ${structName2} {
      0 : ${structType2};
      1 : ${structType2};
    }`);
    constructor(data) {
      super(2);
      if (arguments.length > 1) {
        throw new Error("unexpected argument");
      }
      this[0] = this[1] = 0;
      if (data !== void 0) {
        this.load(data);
      }
    }
    initVector2(co) {
      this.length = 2;
      if (co !== void 0) {
        this[0] = co[0];
        this[1] = co[1];
      } else {
        this[0] = this[1] = 0;
      }
      return this;
    }
    static normalizedDot4(v1, v2, v3, v4) {
      temp1.load(v2).sub(v1).normalize();
      temp2.load(v4).sub(v3).normalize();
      return temp1.dot(temp2);
    }
    static normalizedDot3(v1, center, v2) {
      temp1.load(v1).sub(center).normalize();
      temp2.load(v2).sub(center).normalize();
      return temp1.dot(temp2);
    }
    toJSON() {
      return [this[0], this[1]];
    }
    loadJSON(obj2) {
      return this.load(obj2);
    }
    loadXY(x, y) {
      this[0] = x;
      this[1] = y;
      return this;
    }
    load(data) {
      if (data === void 0)
        return this;
      this[0] = data[0];
      this[1] = data[1];
      return this;
    }
    //axis is optional, 0
    rot2d(A, axis) {
      let x = this[0];
      let y = this[1];
      if (axis === 1) {
        this[0] = x * cos2(A) + y * sin2(A);
        this[1] = y * cos2(A) - x * sin2(A);
      } else {
        this[0] = x * cos2(A) - y * sin2(A);
        this[1] = y * cos2(A) + x * sin2(A);
      }
      return this;
    }
    dot(b) {
      return this[0] * b[0] + this[1] * b[1];
    }
    multVecMatrix(matrix) {
      let x = this[0];
      let y = this[1];
      let w = 1;
      this[0] = w * matrix.$matrix.m41 + x * matrix.$matrix.m11 + y * matrix.$matrix.m21;
      this[1] = w * matrix.$matrix.m42 + x * matrix.$matrix.m12 + y * matrix.$matrix.m22;
      if (matrix.isPersp) {
        let w2 = w * matrix.$matrix.m44 + x * matrix.$matrix.m14 + y * matrix.$matrix.m24;
        if (w2 !== 0) {
          this[0] /= w2;
          this[1] /= w2;
        }
      }
      return this;
    }
    mulVecQuat(q2) {
      let t0 = -q2[1] * this[0] - q2[2] * this[1];
      let t1 = q2[0] * this[0] - q2[3] * this[1];
      let t2 = q2[0] * this[1] + q2[3] * this[0];
      let z = q2[1] * this[1] - q2[2] * this[0];
      this[0] = t1;
      this[1] = t2;
      t1 = t0 * -q2[1] + this[0] * q2[0] - this[1] * q2[3] + z * q2[2];
      t2 = t0 * -q2[2] + this[1] * q2[0] - z * q2[1] + this[0] * q2[3];
      this[0] = t1;
      this[1] = t2;
      return this;
    }
    vectorLengthSqr() {
      return this.dot(this);
    }
    loadSTRUCT(reader) {
      reader(this);
      if (typeof this.vec !== void 0) {
        this.load(this.vec);
        this.vec = void 0;
      }
    }
  };
  temp1 = new Vector24();
  temp2 = new Vector24();
  temp3 = new Vector24();
  temp4 = new Vector24();
  return Vector24;
}
__name(makeVector2, "makeVector2");
var Vector2 = makeVector2(BaseVector2);
var _quat_vs3_temps = cachering2.fromConstructor(Vector32, 64);
var Quat = class _Quat extends Vector4 {
  static {
    __name(this, "Quat");
  }
  makeUnitQuat() {
    this[0] = 1;
    this[1] = this[2] = this[3] = 0;
  }
  isZero() {
    return this[0] === 0 && this[1] === 0 && this[2] === 0 && this[3] === 0;
  }
  mulQuat(qt) {
    let a3 = this[0] * qt[0] - this[1] * qt[1] - this[2] * qt[2] - this[3] * qt[3];
    let b = this[0] * qt[1] + this[1] * qt[0] + this[2] * qt[3] - this[3] * qt[2];
    let c = this[0] * qt[2] + this[2] * qt[0] + this[3] * qt[1] - this[1] * qt[3];
    this[3] = this[0] * qt[3] + this[3] * qt[0] + this[1] * qt[2] - this[2] * qt[1];
    this[0] = a3;
    this[1] = b;
    this[2] = c;
  }
  conjugate() {
    this[1] = -this[1];
    this[2] = -this[2];
    this[3] = -this[3];
  }
  dotWithQuat(q2) {
    return this[0] * q2[0] + this[1] * q2[1] + this[2] * q2[2] + this[3] * q2[3];
  }
  invert() {
    let f3 = this.dot(this);
    if (f3 === 0)
      return;
    conjugate_qt(q);
    this.mulscalar(1 / f3);
  }
  sub(q2) {
    let nq2 = new _Quat();
    nq2[0] = -q2[0];
    nq2[1] = q2[1];
    nq2[2] = q2[2];
    nq2[3] = q2[3];
    this.mul(nq2);
  }
  mulScalarWithFactor(fac) {
    let angle = fac * bounded_acos(this[0]);
    let co = Math.cos(angle);
    let si = Math.sin(angle);
    this[0] = co;
    let last3 = Vector32([this[1], this[2], this[3]]);
    last3.normalize();
    last3.mulScalar(si);
    this[1] = last3[0];
    this[2] = last3[1];
    this[3] = last3[2];
    return this;
  }
  toMatrix(m) {
    if (m === void 0) {
      m = new Matrix4();
    }
    let q0 = M_SQRT2 * this[0];
    let q1 = M_SQRT2 * this[1];
    let q2 = M_SQRT2 * this[2];
    let q3 = M_SQRT2 * this[3];
    let qda = q0 * q1;
    let qdb = q0 * q2;
    let qdc = q0 * q3;
    let qaa = q1 * q1;
    let qab = q1 * q2;
    let qac = q1 * q3;
    let qbb = q2 * q2;
    let qbc = q2 * q3;
    let qcc = q3 * q3;
    m.$matrix.m11 = 1 - qbb - qcc;
    m.$matrix.m12 = qdc + qab;
    m.$matrix.m13 = -qdb + qac;
    m.$matrix.m14 = 0;
    m.$matrix.m21 = -qdc + qab;
    m.$matrix.m22 = 1 - qaa - qcc;
    m.$matrix.m23 = qda + qbc;
    m.$matrix.m24 = 0;
    m.$matrix.m31 = qdb + qac;
    m.$matrix.m32 = -qda + qbc;
    m.$matrix.m33 = 1 - qaa - qbb;
    m.$matrix.m34 = 0;
    m.$matrix.m41 = m.$matrix.m42 = m.$matrix.m43 = 0;
    m.$matrix.m44 = 1;
    return m;
  }
  matrixToQuat(wmat) {
    let mat = temp_mats.next();
    mat.load(wmat);
    mat.$matrix.m41 = mat.$matrix.m42 = mat.$matrix.m43 = 0;
    mat.$matrix.m44 = 1;
    let r1 = new Vector32([mat.$matrix.m11, mat.$matrix.m12, mat.$matrix.m13]);
    let r2 = new Vector32([mat.$matrix.m21, mat.$matrix.m22, mat.$matrix.m23]);
    let r3 = new Vector32([mat.$matrix.m31, mat.$matrix.m32, mat.$matrix.m33]);
    r1.normalize();
    r2.normalize();
    r3.normalize();
    mat.$matrix.m11 = r1[0];
    mat.$matrix.m12 = r1[1];
    mat.$matrix.m13 = r1[2];
    mat.$matrix.m21 = r2[0];
    mat.$matrix.m22 = r2[1];
    mat.$matrix.m23 = r2[2];
    mat.$matrix.m31 = r3[0];
    mat.$matrix.m32 = r3[1];
    mat.$matrix.m33 = r3[2];
    let tr = 0.25 * (1 + mat.$matrix.m11 + mat.$matrix.m22 + mat.$matrix.m33);
    let s = 0;
    if (tr > FLT_EPSILON) {
      s = Math.sqrt(tr);
      this[0] = s;
      s = 1 / (4 * s);
      this[1] = (mat.$matrix.m23 - mat.$matrix.m32) * s;
      this[2] = (mat.$matrix.m31 - mat.$matrix.m13) * s;
      this[3] = (mat.$matrix.m12 - mat.$matrix.m21) * s;
    } else {
      if (mat.$matrix.m11 > mat.$matrix.m22 && mat.$matrix.m11 > mat.$matrix.m33) {
        s = 2 * Math.sqrt(1 + mat.$matrix.m11 - mat.$matrix.m22 - mat.$matrix.m33);
        this[1] = 0.25 * s;
        s = 1 / s;
        this[0] = (mat.$matrix.m32 - mat.$matrix.m23) * s;
        this[2] = (mat.$matrix.m21 + mat.$matrix.m12) * s;
        this[3] = (mat.$matrix.m31 + mat.$matrix.m13) * s;
      } else if (mat.$matrix.m22 > mat.$matrix.m33) {
        s = 2 * Math.sqrt(1 + mat.$matrix.m22 - mat.$matrix.m11 - mat.$matrix.m33);
        this[2] = 0.25 * s;
        s = 1 / s;
        this[0] = (mat.$matrix.m31 - mat.$matrix.m13) * s;
        this[1] = (mat.$matrix.m21 + mat.$matrix.m12) * s;
        this[3] = (mat.$matrix.m32 + mat.$matrix.m23) * s;
      } else {
        s = 2 * Math.sqrt(1 + mat.$matrix.m33 - mat.$matrix.m11 - mat.$matrix.m22);
        this[3] = 0.25 * s;
        s = 1 / s;
        this[0] = (mat.$matrix.m21 - mat.$matrix.m12) * s;
        this[1] = (mat.$matrix.m31 + mat.$matrix.m13) * s;
        this[2] = (mat.$matrix.m32 + mat.$matrix.m23) * s;
      }
    }
    this.normalize();
  }
  normalize() {
    let len = Math.sqrt(this.dot(this));
    if (len !== 0) {
      this.mulScalar(1 / len);
    } else {
      this[1] = 1;
      this[0] = this[2] = this[3] = 0;
    }
    return this;
  }
  axisAngleToQuat(axis, angle) {
    let nor = _quat_vs3_temps.next().load(axis);
    nor.normalize();
    if (nor.dot(nor) !== 0) {
      let phi = angle / 2;
      let si = Math.sin(phi);
      this[0] = Math.cos(phi);
      this[1] = nor[0] * si;
      this[2] = nor[1] * si;
      this[3] = nor[2] * si;
    } else {
      this.makeUnitQuat();
    }
    return this;
  }
  rotationBetweenVecs(v1, v2, fac = 1) {
    v1 = new Vector32(v1);
    v2 = new Vector32(v2);
    v1.normalize();
    v2.normalize();
    if (Math.abs(v1.dot(v2)) > 0.9999) {
      this.makeUnitQuat();
      return this;
    }
    let axis = new Vector32(v1);
    axis.cross(v2);
    let angle = v1.preNormalizedAngle(v2) * fac;
    this.axisAngleToQuat(axis, angle);
    return this;
  }
  quatInterp(quat2, t) {
    let quat = new _Quat();
    let cosom = this[0] * quat2[0] + this[1] * quat2[1] + this[2] * quat2[2] + this[3] * quat2[3];
    if (cosom < 0) {
      cosom = -cosom;
      quat[0] = -this[0];
      quat[1] = -this[1];
      quat[2] = -this[2];
      quat[3] = -this[3];
    } else {
      quat[0] = this[0];
      quat[1] = this[1];
      quat[2] = this[2];
      quat[3] = this[3];
    }
    let omega, sinom, sc1, sc2;
    if (1 - cosom > 1e-4) {
      omega = Math.acos(cosom);
      sinom = Math.sin(omega);
      sc1 = Math.sin((1 - t) * omega) / sinom;
      sc2 = Math.sin(t * omega) / sinom;
    } else {
      sc1 = 1 - t;
      sc2 = t;
    }
    this[0] = sc1 * quat[0] + sc2 * quat2[0];
    this[1] = sc1 * quat[1] + sc2 * quat2[1];
    this[2] = sc1 * quat[2] + sc2 * quat2[2];
    this[3] = sc1 * quat[3] + sc2 * quat2[3];
    return this;
  }
};
;
Quat.STRUCT = struct_default.inherit(Quat, Vector4, "quat") + `
}
`;
struct_default.register(Quat);
_v3nd4_n1_normalizedDot4 = new Vector32();
_v3nd4_n2_normalizedDot4 = new Vector32();
_v3nd_n1_normalizedDot = new Vector32();
_v3nd_n2_normalizedDot = new Vector32();
BaseVector2.inherit(Vector4, 4);
F64BaseVector.inherit(Vector32, 3);
BaseVector2.inherit(Vector2, 2);
var lookat_cache_vs3;
var lookat_cache_vs4;
var lookat_cache_ms;
var euler_rotate_mats;
var makenormalcache;
var temp_mats;
var preMultTemp;
lookat_cache_vs3 = cachering2.fromConstructor(Vector32, 64);
lookat_cache_vs4 = cachering2.fromConstructor(Vector4, 64);
makenormalcache = cachering2.fromConstructor(Vector32, 64);
var $_v3nd_n1_normalizedDot = new Vector32();
var $_v3nd_n2_normalizedDot = new Vector32();
var $_v3nd4_n1_normalizedDot4 = new Vector32();
var $_v3nd4_n2_normalizedDot4 = new Vector32();
var $_v3nd4_n1_normalizedDot3 = new Vector32();
var $_v3nd4_n2_normalizedDot3 = new Vector32();
var internal_matrix = class {
  static {
    __name(this, "internal_matrix");
  }
  constructor() {
    this.m11 = 1;
    this.m12 = 0;
    this.m13 = 0;
    this.m14 = 0;
    this.m21 = 0;
    this.m22 = 1;
    this.m23 = 0;
    this.m24 = 0;
    this.m31 = 0;
    this.m32 = 0;
    this.m33 = 1;
    this.m34 = 0;
    this.m41 = 0;
    this.m42 = 0;
    this.m43 = 0;
    this.m44 = 1;
  }
};
var Matrix4 = class _Matrix4 {
  static {
    __name(this, "Matrix4");
  }
  constructor(m) {
    this.$matrix = new internal_matrix();
    this.isPersp = false;
    if (typeof m === "object") {
      if ("length" in m && m.length >= 16) {
        this.load(m);
      } else if (m instanceof _Matrix4) {
        this.load(m);
      }
    }
  }
  static fromJSON() {
    let mat = new _Matrix4();
    mat.load(json.items);
    mat.isPersp = json.isPersp;
    return mat;
  }
  copy() {
    return this.clone();
  }
  clone() {
    return new _Matrix4(this);
  }
  addToHashDigest(hash) {
    let m = this.$matrix;
    hash.add(m.m11);
    hash.add(m.m12);
    hash.add(m.m13);
    hash.add(m.m14);
    hash.add(m.m21);
    hash.add(m.m22);
    hash.add(m.m23);
    hash.add(m.m24);
    hash.add(m.m31);
    hash.add(m.m32);
    hash.add(m.m33);
    hash.add(m.m34);
    hash.add(m.m41);
    hash.add(m.m42);
    hash.add(m.m43);
    hash.add(m.m44);
    return this;
  }
  equals(m) {
    let m1 = this.$matrix;
    let m2 = m.$matrix;
    let ok = 1;
    ok = ok && m1.m11 === m2.m11;
    ok = ok && m1.m12 === m2.m12;
    ok = ok && m1.m13 === m2.m13;
    ok = ok && m1.m14 === m2.m14;
    ok = ok && m1.m21 === m2.m21;
    ok = ok && m1.m22 === m2.m22;
    ok = ok && m1.m23 === m2.m23;
    ok = ok && m1.m24 === m2.m24;
    ok = ok && m1.m31 === m2.m31;
    ok = ok && m1.m32 === m2.m32;
    ok = ok && m1.m33 === m2.m33;
    ok = ok && m1.m34 === m2.m34;
    ok = ok && m1.m41 === m2.m41;
    ok = ok && m1.m42 === m2.m42;
    ok = ok && m1.m43 === m2.m43;
    ok = ok && m1.m44 === m2.m44;
    return ok;
  }
  loadColumn(i2, vec) {
    let m = this.$matrix;
    let have4 = vec.length > 3;
    switch (i2) {
      case 0:
        m.m11 = vec[0];
        m.m21 = vec[1];
        m.m31 = vec[2];
        if (have4) {
          m.m41 = vec[3];
        }
        break;
      case 1:
        m.m12 = vec[0];
        m.m22 = vec[1];
        m.m32 = vec[2];
        if (have4) {
          m.m42 = vec[3];
        }
        break;
      case 2:
        m.m13 = vec[0];
        m.m23 = vec[1];
        m.m33 = vec[2];
        if (have4) {
          m.m43 = vec[3];
        }
        break;
      case 3:
        m.m14 = vec[0];
        m.m24 = vec[1];
        m.m34 = vec[2];
        if (have4) {
          m.m44 = vec[3];
        }
        break;
    }
    return this;
  }
  copyColumnTo(i2, vec) {
    let m = this.$matrix;
    let have4 = vec.length > 3;
    switch (i2) {
      case 0:
        vec[0] = m.m11;
        vec[1] = m.m21;
        vec[2] = m.m31;
        if (have4) {
          vec[3] = m.m41;
        }
        break;
      case 1:
        vec[0] = m.m12;
        vec[1] = m.m22;
        vec[2] = m.m32;
        if (have4) {
          vec[3] = m.m42;
        }
        break;
      case 2:
        vec[0] = m.m13;
        vec[1] = m.m23;
        vec[2] = m.m33;
        if (have4) {
          vec[3] = m.m43;
        }
        break;
      case 3:
        vec[0] = m.m14;
        vec[1] = m.m24;
        vec[2] = m.m34;
        if (have4) {
          vec[3] = m.m44;
        }
        break;
    }
    return vec;
  }
  copyColumn(i2) {
    return this.copyColumnTo(i2, new Vector32());
  }
  load() {
    if (arguments.length === 1 && typeof arguments[0] === "object") {
      let matrix;
      if (arguments[0] instanceof _Matrix4) {
        matrix = arguments[0].$matrix;
        this.isPersp = arguments[0].isPersp;
        this.$matrix.m11 = matrix.m11;
        this.$matrix.m12 = matrix.m12;
        this.$matrix.m13 = matrix.m13;
        this.$matrix.m14 = matrix.m14;
        this.$matrix.m21 = matrix.m21;
        this.$matrix.m22 = matrix.m22;
        this.$matrix.m23 = matrix.m23;
        this.$matrix.m24 = matrix.m24;
        this.$matrix.m31 = matrix.m31;
        this.$matrix.m32 = matrix.m32;
        this.$matrix.m33 = matrix.m33;
        this.$matrix.m34 = matrix.m34;
        this.$matrix.m41 = matrix.m41;
        this.$matrix.m42 = matrix.m42;
        this.$matrix.m43 = matrix.m43;
        this.$matrix.m44 = matrix.m44;
        return this;
      } else
        matrix = arguments[0];
      if ("length" in matrix && matrix.length >= 16) {
        this.$matrix.m11 = matrix[0];
        this.$matrix.m12 = matrix[1];
        this.$matrix.m13 = matrix[2];
        this.$matrix.m14 = matrix[3];
        this.$matrix.m21 = matrix[4];
        this.$matrix.m22 = matrix[5];
        this.$matrix.m23 = matrix[6];
        this.$matrix.m24 = matrix[7];
        this.$matrix.m31 = matrix[8];
        this.$matrix.m32 = matrix[9];
        this.$matrix.m33 = matrix[10];
        this.$matrix.m34 = matrix[11];
        this.$matrix.m41 = matrix[12];
        this.$matrix.m42 = matrix[13];
        this.$matrix.m43 = matrix[14];
        this.$matrix.m44 = matrix[15];
        return this;
      }
    }
    this.makeIdentity();
    return this;
  }
  toJSON() {
    return { isPersp: this.isPersp, items: this.getAsArray() };
  }
  getAsArray() {
    return [
      this.$matrix.m11,
      this.$matrix.m12,
      this.$matrix.m13,
      this.$matrix.m14,
      this.$matrix.m21,
      this.$matrix.m22,
      this.$matrix.m23,
      this.$matrix.m24,
      this.$matrix.m31,
      this.$matrix.m32,
      this.$matrix.m33,
      this.$matrix.m34,
      this.$matrix.m41,
      this.$matrix.m42,
      this.$matrix.m43,
      this.$matrix.m44
    ];
  }
  getAsFloat32Array() {
    return new Float32Array(this.getAsArray());
  }
  setUniform(ctx2, loc, transpose) {
    if (_Matrix4.setUniformArray === void 0) {
      _Matrix4.setUniformWebGLArray = new Float32Array(16);
      _Matrix4.setUniformArray = new Array(16);
    }
    _Matrix4.setUniformArray[0] = this.$matrix.m11;
    _Matrix4.setUniformArray[1] = this.$matrix.m12;
    _Matrix4.setUniformArray[2] = this.$matrix.m13;
    _Matrix4.setUniformArray[3] = this.$matrix.m14;
    _Matrix4.setUniformArray[4] = this.$matrix.m21;
    _Matrix4.setUniformArray[5] = this.$matrix.m22;
    _Matrix4.setUniformArray[6] = this.$matrix.m23;
    _Matrix4.setUniformArray[7] = this.$matrix.m24;
    _Matrix4.setUniformArray[8] = this.$matrix.m31;
    _Matrix4.setUniformArray[9] = this.$matrix.m32;
    _Matrix4.setUniformArray[10] = this.$matrix.m33;
    _Matrix4.setUniformArray[11] = this.$matrix.m34;
    _Matrix4.setUniformArray[12] = this.$matrix.m41;
    _Matrix4.setUniformArray[13] = this.$matrix.m42;
    _Matrix4.setUniformArray[14] = this.$matrix.m43;
    _Matrix4.setUniformArray[15] = this.$matrix.m44;
    _Matrix4.setUniformWebGLArray.set(_Matrix4.setUniformArray);
    ctx2.uniformMatrix4fv(loc, transpose, _Matrix4.setUniformWebGLArray);
    return this;
  }
  makeIdentity() {
    this.$matrix.m11 = 1;
    this.$matrix.m12 = 0;
    this.$matrix.m13 = 0;
    this.$matrix.m14 = 0;
    this.$matrix.m21 = 0;
    this.$matrix.m22 = 1;
    this.$matrix.m23 = 0;
    this.$matrix.m24 = 0;
    this.$matrix.m31 = 0;
    this.$matrix.m32 = 0;
    this.$matrix.m33 = 1;
    this.$matrix.m34 = 0;
    this.$matrix.m41 = 0;
    this.$matrix.m42 = 0;
    this.$matrix.m43 = 0;
    this.$matrix.m44 = 1;
    this.isPersp = false;
    return this;
  }
  transpose() {
    let tmp = this.$matrix.m12;
    this.$matrix.m12 = this.$matrix.m21;
    this.$matrix.m21 = tmp;
    tmp = this.$matrix.m13;
    this.$matrix.m13 = this.$matrix.m31;
    this.$matrix.m31 = tmp;
    tmp = this.$matrix.m14;
    this.$matrix.m14 = this.$matrix.m41;
    this.$matrix.m41 = tmp;
    tmp = this.$matrix.m23;
    this.$matrix.m23 = this.$matrix.m32;
    this.$matrix.m32 = tmp;
    tmp = this.$matrix.m24;
    this.$matrix.m24 = this.$matrix.m42;
    this.$matrix.m42 = tmp;
    tmp = this.$matrix.m34;
    this.$matrix.m34 = this.$matrix.m43;
    this.$matrix.m43 = tmp;
    return this;
  }
  determinant() {
    return this._determinant4x4();
  }
  invert() {
    let det = this._determinant4x4();
    if (Math.abs(det) < 1e-8)
      return null;
    this._makeAdjoint();
    this.$matrix.m11 /= det;
    this.$matrix.m12 /= det;
    this.$matrix.m13 /= det;
    this.$matrix.m14 /= det;
    this.$matrix.m21 /= det;
    this.$matrix.m22 /= det;
    this.$matrix.m23 /= det;
    this.$matrix.m24 /= det;
    this.$matrix.m31 /= det;
    this.$matrix.m32 /= det;
    this.$matrix.m33 /= det;
    this.$matrix.m34 /= det;
    this.$matrix.m41 /= det;
    this.$matrix.m42 /= det;
    this.$matrix.m43 /= det;
    this.$matrix.m44 /= det;
    return this;
  }
  translate(x, y, z) {
    if (typeof x === "object" && "length" in x) {
      let t = x;
      x = t[0];
      y = t[1];
      z = t[2];
    }
    x = x === void 0 ? 0 : x;
    y = y === void 0 ? 0 : y;
    z = z === void 0 ? 0 : z;
    let matrix = temp_mats.next().makeIdentity();
    matrix.$matrix.m41 = x;
    matrix.$matrix.m42 = y;
    matrix.$matrix.m43 = z;
    this.multiply(matrix);
    return this;
  }
  preTranslate(x, y, z) {
    if (typeof x === "object" && "length" in x) {
      let t = x;
      x = t[0];
      y = t[1];
      z = t[2];
    }
    x = x === void 0 ? 0 : x;
    y = y === void 0 ? 0 : y;
    z = z === void 0 ? 0 : z;
    let matrix = temp_mats.next().makeIdentity();
    matrix.$matrix.m41 = x;
    matrix.$matrix.m42 = y;
    matrix.$matrix.m43 = z;
    this.preMultiply(matrix);
    return this;
  }
  scale(x, y, z, w = 1) {
    if (typeof x === "object" && "length" in x) {
      let t = x;
      x = t[0];
      y = t[1];
      z = t[2];
    } else {
      if (x === void 0)
        x = 1;
      if (z === void 0) {
        if (y === void 0) {
          y = x;
          z = x;
        } else {
          z = x;
        }
      } else if (y === void 0) {
        y = x;
      }
    }
    let matrix = temp_mats.next().makeIdentity();
    matrix.$matrix.m11 = x;
    matrix.$matrix.m22 = y;
    matrix.$matrix.m33 = z;
    matrix.$matrix.m44 = w;
    this.multiply(matrix);
    return this;
  }
  preScale(x, y, z, w = 1) {
    let mat = temp_mats.next().makeIdentity();
    mat.scale(x, y, z, w);
    this.preMultiply(mat);
    return this;
  }
  /*
    on factor;
    off period;
  
    c1 := cx; comment: cos(thx);
    s1 := sx; comment: sin(thx);
  
    c2 := cy; comment: cos(thy);
    s2 := sy; comment: sin(thy);
  
    c3 := cz; comment: cos(thz);
    s3 := sz; comment: sin(thz);
  
    cx := cos(thx);
    sx := sin(thx);
    cy := cos(thy);
    sy := sin(thy);
    cz := cos(thz);
    sz := sin(thz);
  
    imat := mat((1, 0, 0, 0),
                (0, 1, 0, 0),
                (0, 0, 1, 0),
                (0, 0, 0, 1));
  
    xmat :=mat((1,  0,  0,  0),
               (0, c1, -s1, 0),
               (0, s1,  c1, 0),
               (0,  0,  0,  0));
  
    ymat :=mat((c2, 0, s2, 0),
               (0,  1,  0,  0),
               (-s2, 0,  c2, 0),
               (0,  0,  0,  0));
  
    zmat :=mat(( c3, -s3, 0, 0),
               (s3, c3, 0, 0),
               ( 0,  0,  1, 0),
               ( 0,  0,  0, 0));
  
    mmat := mat((m11, m21, m31, 0),
                (m12, m22, m32, 0),
                (m13, m23, m33, 0),
                (0,   0,   0,   0));
  
    fmat := zmat * ymat * xmat;
  
    f1 := m11**2 + m12**2 + m13**2 - 1.0;
    f2 := m21**2 + m22**2 + m23**2 - 1.0;
    f3 := m31**2 + m32**2 + m33**2 - 1.0;
  
    tmat := fmat * mmat;
    f1 := tmat(1, 1) - 1.0;
    f2 := tmat(2, 2) - 1.0;
    f3 := tmat(3, 3) - 1.0;
  
    operator myasin;
  
    fthy := asin(mmat(3, 1));
    f1 := mmat(3,1)**2 + mmat(2,1)**2 + mmat(1,1)**2 = 1.0;
  
    fmat2 := sub(thy=fthy, fmat);
  
    fmat3 := fmat2 * (tp mmat);
    ffz := solve(fmat2(1, 1) - m11, thz);
    ffx := solve(fmat2(3, 3) - m33, thx);
  
    fthz := part(ffz, 1, 2);
    fthx := part(ffx, 1, 2);
  
    sub(thx=fthx, thy=fthy, thz=fthz, fmat);
  
  (cos(thy)*cos(thz),         cos(thx)*sin(thz)-cos(thz)*sin(thx)*sin(thy),  -(cos(thx)*cos(thz)*sin(thy)+sin(thx)*sin(thz)), 0),
  
  (-cos(thy)*sin(thz),        cos(thx)*cos(thz) + sin(thx)*sin(thy)*sin(thz),  cos(thx)*sin(thy)*sin(thz)-cos(thz)*sin(thx), 0),
  
  (sin(thy),                  cos(thy)*sin(thx),                               cos(thx)*cos(thy),  0),
  
      (0,0,0,1))
  
    */
  euler_rotate_order(x, y, z, order = EulerOrders.XYZ) {
    if (y === void 0) {
      y = 0;
    }
    if (z === void 0) {
      z = 0;
    }
    x = -x;
    y = -y;
    z = -z;
    let xmat = euler_rotate_mats.next().makeIdentity();
    let m = xmat.$matrix;
    let c = Math.cos(x), s = Math.sin(x);
    m.m22 = c;
    m.m23 = s;
    m.m32 = -s;
    m.m33 = c;
    let ymat = euler_rotate_mats.next().makeIdentity();
    c = Math.cos(y);
    s = Math.sin(y);
    m = ymat.$matrix;
    m.m11 = c;
    m.m13 = -s;
    m.m31 = s;
    m.m33 = c;
    let zmat = euler_rotate_mats.next().makeIdentity();
    c = Math.cos(z);
    s = Math.sin(z);
    m = zmat.$matrix;
    m.m11 = c;
    m.m12 = s;
    m.m21 = -s;
    m.m22 = c;
    let a3, b;
    switch (order) {
      case EulerOrders.XYZ:
        a3 = xmat;
        b = ymat;
        c = zmat;
        break;
      case EulerOrders.XZY:
        a3 = xmat;
        b = zmat;
        c = ymat;
        break;
      case EulerOrders.YXZ:
        a3 = ymat;
        b = xmat;
        c = zmat;
        break;
      case EulerOrders.YZX:
        a3 = ymat;
        b = zmat;
        c = xmat;
        break;
      case EulerOrders.ZXY:
        a3 = zmat;
        b = xmat;
        c = ymat;
        break;
      case EulerOrders.ZYX:
        a3 = zmat;
        b = ymat;
        c = xmat;
        break;
    }
    b.preMultiply(c);
    b.multiply(a3);
    this.preMultiply(b);
    return this;
  }
  euler_rotate(x, y, z) {
    if (y === void 0) {
      y = 0;
    }
    if (z === void 0) {
      z = 0;
    }
    window.Matrix4 = _Matrix4;
    let xmat = euler_rotate_mats.next().makeIdentity();
    let m = xmat.$matrix;
    let c = Math.cos(x), s = Math.sin(x);
    m.m22 = c;
    m.m23 = s;
    m.m32 = -s;
    m.m33 = c;
    let ymat = euler_rotate_mats.next().makeIdentity();
    c = Math.cos(y);
    s = Math.sin(y);
    m = ymat.$matrix;
    m.m11 = c;
    m.m13 = -s;
    m.m31 = s;
    m.m33 = c;
    ymat.multiply(xmat);
    let zmat = euler_rotate_mats.next().makeIdentity();
    c = Math.cos(z);
    s = Math.sin(z);
    m = zmat.$matrix;
    m.m11 = c;
    m.m12 = s;
    m.m21 = -s;
    m.m22 = c;
    zmat.multiply(ymat);
    this.preMultiply(zmat);
    return this;
  }
  toString() {
    let s = "";
    let m = this.$matrix;
    function dec(d) {
      let ret2 = d.toFixed(3);
      if (ret2[0] !== "-")
        ret2 = " " + ret2;
      return ret2;
    }
    __name(dec, "dec");
    s = dec(m.m11) + ", " + dec(m.m12) + ", " + dec(m.m13) + ", " + dec(m.m14) + "\n";
    s += dec(m.m21) + ", " + dec(m.m22) + ", " + dec(m.m23) + ", " + dec(m.m24) + "\n";
    s += dec(m.m31) + ", " + dec(m.m32) + ", " + dec(m.m33) + ", " + dec(m.m34) + "\n";
    s += dec(m.m41) + ", " + dec(m.m42) + ", " + dec(m.m43) + ", " + dec(m.m44) + "\n";
    return s;
  }
  rotate(angle, x, y, z) {
    if (typeof x === "object" && "length" in x) {
      let t = x;
      x = t[0];
      y = t[1];
      z = t[2];
    } else {
      if (arguments.length === 1) {
        x = y = 0;
        z = 1;
      } else if (arguments.length === 3) {
        this.rotate(angle, 1, 0, 0);
        this.rotate(x, 0, 1, 0);
        this.rotate(y, 0, 0, 1);
        return;
      }
    }
    angle /= 2;
    let sinA = Math.sin(angle);
    let cosA = Math.cos(angle);
    let sinA2 = sinA * sinA;
    let len = Math.sqrt(x * x + y * y + z * z);
    if (len === 0) {
      x = 0;
      y = 0;
      z = 1;
    } else if (len !== 1) {
      x /= len;
      y /= len;
      z /= len;
    }
    let mat = temp_mats.next().makeIdentity();
    if (x === 1 && y === 0 && z === 0) {
      mat.$matrix.m11 = 1;
      mat.$matrix.m12 = 0;
      mat.$matrix.m13 = 0;
      mat.$matrix.m21 = 0;
      mat.$matrix.m22 = 1 - 2 * sinA2;
      mat.$matrix.m23 = 2 * sinA * cosA;
      mat.$matrix.m31 = 0;
      mat.$matrix.m32 = -2 * sinA * cosA;
      mat.$matrix.m33 = 1 - 2 * sinA2;
      mat.$matrix.m14 = mat.$matrix.m24 = mat.$matrix.m34 = 0;
      mat.$matrix.m41 = mat.$matrix.m42 = mat.$matrix.m43 = 0;
      mat.$matrix.m44 = 1;
    } else if (x === 0 && y === 1 && z === 0) {
      mat.$matrix.m11 = 1 - 2 * sinA2;
      mat.$matrix.m12 = 0;
      mat.$matrix.m13 = -2 * sinA * cosA;
      mat.$matrix.m21 = 0;
      mat.$matrix.m22 = 1;
      mat.$matrix.m23 = 0;
      mat.$matrix.m31 = 2 * sinA * cosA;
      mat.$matrix.m32 = 0;
      mat.$matrix.m33 = 1 - 2 * sinA2;
      mat.$matrix.m14 = mat.$matrix.m24 = mat.$matrix.m34 = 0;
      mat.$matrix.m41 = mat.$matrix.m42 = mat.$matrix.m43 = 0;
      mat.$matrix.m44 = 1;
    } else if (x === 0 && y === 0 && z === 1) {
      mat.$matrix.m11 = 1 - 2 * sinA2;
      mat.$matrix.m12 = 2 * sinA * cosA;
      mat.$matrix.m13 = 0;
      mat.$matrix.m21 = -2 * sinA * cosA;
      mat.$matrix.m22 = 1 - 2 * sinA2;
      mat.$matrix.m23 = 0;
      mat.$matrix.m31 = 0;
      mat.$matrix.m32 = 0;
      mat.$matrix.m33 = 1;
      mat.$matrix.m14 = mat.$matrix.m24 = mat.$matrix.m34 = 0;
      mat.$matrix.m41 = mat.$matrix.m42 = mat.$matrix.m43 = 0;
      mat.$matrix.m44 = 1;
    } else {
      let x2 = x * x;
      let y2 = y * y;
      let z2 = z * z;
      mat.$matrix.m11 = 1 - 2 * (y2 + z2) * sinA2;
      mat.$matrix.m12 = 2 * (x * y * sinA2 + z * sinA * cosA);
      mat.$matrix.m13 = 2 * (x * z * sinA2 - y * sinA * cosA);
      mat.$matrix.m21 = 2 * (y * x * sinA2 - z * sinA * cosA);
      mat.$matrix.m22 = 1 - 2 * (z2 + x2) * sinA2;
      mat.$matrix.m23 = 2 * (y * z * sinA2 + x * sinA * cosA);
      mat.$matrix.m31 = 2 * (z * x * sinA2 + y * sinA * cosA);
      mat.$matrix.m32 = 2 * (z * y * sinA2 - x * sinA * cosA);
      mat.$matrix.m33 = 1 - 2 * (x2 + y2) * sinA2;
      mat.$matrix.m14 = mat.$matrix.m24 = mat.$matrix.m34 = 0;
      mat.$matrix.m41 = mat.$matrix.m42 = mat.$matrix.m43 = 0;
      mat.$matrix.m44 = 1;
    }
    this.multiply(mat);
    return this;
  }
  normalize() {
    let m = this.$matrix;
    let v1 = new Vector4([m.m11, m.m12, m.m13, m.m14]);
    let v2 = new Vector4([m.m21, m.m22, m.m23, m.m24]);
    let v3 = new Vector4([m.m31, m.m32, m.m33, m.m34]);
    let v4 = new Vector4([m.m41, m.m42, m.m43, m.m44]);
    v1.normalize();
    v2.normalize();
    v3.normalize();
    let flat = new Array().concat(v1).concat(v2).concat(v3).concat(v4);
    this.load(flat);
    return this;
  }
  clearTranslation(set_w_to_one = false) {
    let m = this.$matrix;
    m.m41 = m.m42 = m.m43 = 0;
    if (set_w_to_one) {
      m.m44 = 1;
    }
    return this;
  }
  setTranslation(x, y, z, resetW = true) {
    if (typeof x === "object") {
      y = x[1];
      z = x[2];
      x = x[0];
    }
    let m = this.$matrix;
    m.m41 = x;
    m.m42 = y;
    m.m43 = z;
    if (resetW) {
      m.m44 = 1;
    }
    return this;
  }
  //this is really like the lookAt method, isn't it.
  makeNormalMatrix(normal, up = void 0) {
    if (normal === void 0) {
      throw new Error("normal cannot be undefined");
    }
    let n = makenormalcache.next().load(normal).normalize();
    if (up === void 0) {
      up = makenormalcache.next().zero();
      if (Math.abs(n[2]) > 0.95) {
        up[1] = 1;
      } else {
        up[2] = 1;
      }
    }
    up = makenormalcache.next().load(up);
    up.normalize();
    if (up.dot(normal) > 0.99) {
      this.makeIdentity();
      return this;
    } else if (up.dot(normal) < -0.99) {
      this.makeIdentity();
      this.scale(1, 1, -1);
      return this;
    }
    let x = makenormalcache.next();
    let y = makenormalcache.next();
    x.load(n).cross(up).normalize();
    y.load(x).cross(n).normalize();
    this.makeIdentity();
    let m = this.$matrix;
    m.m11 = x[0];
    m.m12 = x[1];
    m.m13 = x[2];
    m.m21 = y[0];
    m.m22 = y[1];
    m.m23 = y[2];
    m.m31 = n[0];
    m.m32 = n[1];
    m.m33 = n[2];
    m.m44 = 1;
    return this;
  }
  preMultiply(mat) {
    preMultTemp.load(mat);
    preMultTemp.multiply(this);
    this.load(preMultTemp);
    return this;
  }
  multiply(mat) {
    let mm = this.$matrix;
    let mm2 = mat.$matrix;
    let m11 = mm2.m11 * mm.m11 + mm2.m12 * mm.m21 + mm2.m13 * mm.m31 + mm2.m14 * mm.m41;
    let m12 = mm2.m11 * mm.m12 + mm2.m12 * mm.m22 + mm2.m13 * mm.m32 + mm2.m14 * mm.m42;
    let m13 = mm2.m11 * mm.m13 + mm2.m12 * mm.m23 + mm2.m13 * mm.m33 + mm2.m14 * mm.m43;
    let m14 = mm2.m11 * mm.m14 + mm2.m12 * mm.m24 + mm2.m13 * mm.m34 + mm2.m14 * mm.m44;
    let m21 = mm2.m21 * mm.m11 + mm2.m22 * mm.m21 + mm2.m23 * mm.m31 + mm2.m24 * mm.m41;
    let m22 = mm2.m21 * mm.m12 + mm2.m22 * mm.m22 + mm2.m23 * mm.m32 + mm2.m24 * mm.m42;
    let m23 = mm2.m21 * mm.m13 + mm2.m22 * mm.m23 + mm2.m23 * mm.m33 + mm2.m24 * mm.m43;
    let m24 = mm2.m21 * mm.m14 + mm2.m22 * mm.m24 + mm2.m23 * mm.m34 + mm2.m24 * mm.m44;
    let m31 = mm2.m31 * mm.m11 + mm2.m32 * mm.m21 + mm2.m33 * mm.m31 + mm2.m34 * mm.m41;
    let m32 = mm2.m31 * mm.m12 + mm2.m32 * mm.m22 + mm2.m33 * mm.m32 + mm2.m34 * mm.m42;
    let m33 = mm2.m31 * mm.m13 + mm2.m32 * mm.m23 + mm2.m33 * mm.m33 + mm2.m34 * mm.m43;
    let m34 = mm2.m31 * mm.m14 + mm2.m32 * mm.m24 + mm2.m33 * mm.m34 + mm2.m34 * mm.m44;
    let m41 = mm2.m41 * mm.m11 + mm2.m42 * mm.m21 + mm2.m43 * mm.m31 + mm2.m44 * mm.m41;
    let m42 = mm2.m41 * mm.m12 + mm2.m42 * mm.m22 + mm2.m43 * mm.m32 + mm2.m44 * mm.m42;
    let m43 = mm2.m41 * mm.m13 + mm2.m42 * mm.m23 + mm2.m43 * mm.m33 + mm2.m44 * mm.m43;
    let m44 = mm2.m41 * mm.m14 + mm2.m42 * mm.m24 + mm2.m43 * mm.m34 + mm2.m44 * mm.m44;
    mm.m11 = m11;
    mm.m12 = m12;
    mm.m13 = m13;
    mm.m14 = m14;
    mm.m21 = m21;
    mm.m22 = m22;
    mm.m23 = m23;
    mm.m24 = m24;
    mm.m31 = m31;
    mm.m32 = m32;
    mm.m33 = m33;
    mm.m34 = m34;
    mm.m41 = m41;
    mm.m42 = m42;
    mm.m43 = m43;
    mm.m44 = m44;
    return this;
  }
  divide(divisor) {
    this.$matrix.m11 /= divisor;
    this.$matrix.m12 /= divisor;
    this.$matrix.m13 /= divisor;
    this.$matrix.m14 /= divisor;
    this.$matrix.m21 /= divisor;
    this.$matrix.m22 /= divisor;
    this.$matrix.m23 /= divisor;
    this.$matrix.m24 /= divisor;
    this.$matrix.m31 /= divisor;
    this.$matrix.m32 /= divisor;
    this.$matrix.m33 /= divisor;
    this.$matrix.m34 /= divisor;
    this.$matrix.m41 /= divisor;
    this.$matrix.m42 /= divisor;
    this.$matrix.m43 /= divisor;
    this.$matrix.m44 /= divisor;
    return this;
  }
  ortho(left, right, bottom, top, near, far) {
    console.warn("Matrix4.ortho() is deprecated, use .orthographic() instead");
    let tx = (left + right) / (left - right);
    let ty = (top + bottom) / (top - bottom);
    let tz = (far + near) / (far - near);
    let matrix = temp_mats.next().makeIdentity();
    matrix.$matrix.m11 = 2 / (left - right);
    matrix.$matrix.m12 = 0;
    matrix.$matrix.m13 = 0;
    matrix.$matrix.m14 = 0;
    matrix.$matrix.m21 = 0;
    matrix.$matrix.m22 = 2 / (top - bottom);
    matrix.$matrix.m23 = 0;
    matrix.$matrix.m24 = 0;
    matrix.$matrix.m31 = 0;
    matrix.$matrix.m32 = 0;
    matrix.$matrix.m33 = -2 / (far - near);
    matrix.$matrix.m34 = 0;
    matrix.$matrix.m41 = tx;
    matrix.$matrix.m42 = ty;
    matrix.$matrix.m43 = tz;
    matrix.$matrix.m44 = 1;
    this.multiply(matrix);
    return this;
  }
  frustum(left, right, bottom, top, near, far) {
    let matrix = temp_mats.next().makeIdentity();
    let A = (right + left) / (right - left);
    let B = (top + bottom) / (top - bottom);
    let C = -(far + near) / (far - near);
    let D = -(2 * far * near) / (far - near);
    matrix.$matrix.m11 = 2 * near / (right - left);
    matrix.$matrix.m12 = 0;
    matrix.$matrix.m13 = 0;
    matrix.$matrix.m14 = 0;
    matrix.$matrix.m21 = 0;
    matrix.$matrix.m22 = 2 * near / (top - bottom);
    matrix.$matrix.m23 = 0;
    matrix.$matrix.m24 = 0;
    matrix.$matrix.m31 = A;
    matrix.$matrix.m32 = B;
    matrix.$matrix.m33 = C;
    matrix.$matrix.m34 = -1;
    matrix.$matrix.m41 = 0;
    matrix.$matrix.m42 = 0;
    matrix.$matrix.m43 = D;
    matrix.$matrix.m44 = 0;
    this.isPersp = true;
    this.multiply(matrix);
    return this;
  }
  orthographic(scale, aspect, near, far) {
    let mat = temp_mats.next().makeIdentity();
    let zscale = far - near;
    mat.scale(2 / aspect, 2, -1 / scale / zscale, 1 / scale);
    mat.translate(0, 0, 0.5 * zscale - near);
    this.isPersp = true;
    this.multiply(mat);
    return mat;
  }
  perspective(fovy, aspect, zNear, zFar) {
    let top = Math.tan(fovy * Math.PI / 360) * zNear;
    let bottom = -top;
    let left = aspect * bottom;
    let right = aspect * top;
    this.frustum(left, right, bottom, top, zNear, zFar);
    return this;
  }
  lookat(pos, target, up) {
    let matrix = lookat_cache_ms.next();
    matrix.makeIdentity();
    let vec = lookat_cache_vs3.next().load(pos).sub(target);
    let len = vec.vectorLength();
    vec.normalize();
    let zvec = vec;
    let yvec = lookat_cache_vs3.next().load(up).normalize();
    let xvec = lookat_cache_vs3.next().load(yvec).cross(zvec).normalize();
    let mm = matrix.$matrix;
    mm.m11 = xvec[0];
    mm.m12 = yvec[0];
    mm.m13 = zvec[0];
    mm.m14 = 0;
    mm.m21 = xvec[1];
    mm.m22 = yvec[1];
    mm.m23 = zvec[1];
    mm.m24 = 0;
    mm.m31 = xvec[2];
    mm.m32 = yvec[2];
    mm.m33 = zvec[2];
    mm.m11 = xvec[0];
    mm.m12 = xvec[1];
    mm.m13 = xvec[2];
    mm.m14 = 0;
    mm.m21 = yvec[0];
    mm.m22 = yvec[1];
    mm.m23 = yvec[2];
    mm.m24 = 0;
    mm.m31 = zvec[0];
    mm.m32 = zvec[1];
    mm.m33 = zvec[2];
    mm.m34 = 0;
    mm.m41 = pos[0];
    mm.m42 = pos[1];
    mm.m43 = pos[2];
    mm.m44 = 1;
    this.multiply(matrix);
    return this;
  }
  makeRotationOnly() {
    let m = this.$matrix;
    m.m41 = m.m42 = m.m43 = 0;
    m.m44 = 1;
    let l1 = Math.sqrt(m.m11 * m.m11 + m.m12 * m.m12 + m.m13 * m.m13);
    let l2 = Math.sqrt(m.m21 * m.m21 + m.m22 * m.m22 + m.m23 * m.m23);
    let l3 = Math.sqrt(m.m31 * m.m31 + m.m32 * m.m32 + m.m33 * m.m33);
    if (l1) {
      m.m11 /= l1;
      m.m12 /= l1;
      m.m13 /= l1;
    }
    if (l2) {
      m.m21 /= l2;
      m.m22 /= l2;
      m.m23 /= l2;
    }
    if (l3) {
      m.m31 /= l3;
      m.m32 /= l3;
      m.m33 /= l3;
    }
    return this;
  }
  alignAxis(axis, vec) {
    vec = new Vector32(vec);
    vec.normalize();
    let mat = this.inputs.transformMatrix.getValue();
    let m = mat.$matrix;
    let mat2 = new _Matrix4(mat);
    let loc = new Vector32(), scale = new Vector32(), rot = new Vector32();
    mat2.decompose(loc, rot, scale);
    mat2.makeRotationOnly();
    let axes = mat2.getAsVecs();
    let axis2 = (axis + 1) % 3;
    let axis3 = (axis + 2) % 3;
    axes[axis].load(vec);
    axes[axis2].cross(axes[axis]).cross(axes[axis]);
    axes[axis3].load(axes[axis]).cross(axes[axis2]);
    axes[0][3] = 1;
    axes[1][3] = 1;
    axes[2][3] = 1;
    axes[0].normalize();
    axes[1].normalize();
    axes[2].normalize();
    this.loadFromVecs(axes);
    this.scale(scale[0], scale[1], scale[2]);
    m.m41 = loc[0];
    m.m42 = loc[1];
    m.m43 = loc[2];
    return this;
  }
  decompose(_translate, _rotate, _scale, _skew, _perspective, order = EulerOrders.XYZ) {
    if (this.$matrix.m44 === 0)
      return false;
    let mat = temp_mats.next().load(this);
    let m = mat.$matrix;
    let t = _translate, r = _rotate, s = _scale;
    if (t) {
      t[0] = m.m41;
      t[1] = m.m42;
      t[2] = m.m43;
    }
    let l1 = Math.sqrt(m.m11 * m.m11 + m.m12 * m.m12 + m.m13 * m.m13);
    let l2 = Math.sqrt(m.m21 * m.m21 + m.m22 * m.m22 + m.m23 * m.m23);
    let l3 = Math.sqrt(m.m31 * m.m31 + m.m32 * m.m32 + m.m33 * m.m33);
    if (l1) {
      m.m11 /= l1;
      m.m12 /= l1;
      m.m13 /= l1;
    }
    if (l2) {
      m.m21 /= l2;
      m.m22 /= l2;
      m.m23 /= l2;
    }
    if (l3) {
      m.m31 /= l3;
      m.m32 /= l3;
      m.m33 /= l3;
    }
    if (s) {
      s[0] = l1;
      s[1] = l2;
      s[2] = l3;
    }
    if (r) {
      let clamp = myclamp;
      let rmat = temp_mats.next().load(this);
      rmat.normalize();
      m = rmat.$matrix;
      let m11 = m.m11, m12 = m.m12, m13 = m.m13, m14 = m.m14;
      let m21 = m.m21, m22 = m.m22, m23 = m.m23, m24 = m.m24;
      let m31 = m.m31, m32 = m.m32, m33 = m.m33, m34 = m.m34;
      if (order === EulerOrders.XYZ) {
        r[1] = Math.asin(clamp(m13, -1, 1));
        if (Math.abs(m13) < 0.9999999) {
          r[0] = Math.atan2(-m23, m33);
          r[2] = Math.atan2(-m12, m11);
        } else {
          r[0] = Math.atan2(m32, m22);
          r[2] = 0;
        }
      } else if (order === EulerOrders.YXZ) {
        r[0] = Math.asin(-clamp(m23, -1, 1));
        if (Math.abs(m23) < 0.9999999) {
          r[1] = Math.atan2(m13, m33);
          r[2] = Math.atan2(m21, m22);
        } else {
          r[1] = Math.atan2(-m31, m11);
          r[2] = 0;
        }
      } else if (order === EulerOrders.ZXY) {
        r[0] = Math.asin(clamp(m32, -1, 1));
        if (Math.abs(m32) < 0.9999999) {
          r[1] = Math.atan2(-m31, m33);
          r[2] = Math.atan2(-m12, m22);
        } else {
          r[1] = 0;
          r[2] = Math.atan2(m21, m11);
        }
      } else if (order === EulerOrders.ZYX) {
        r[1] = Math.asin(-clamp(m31, -1, 1));
        if (Math.abs(m31) < 0.9999999) {
          r[0] = Math.atan2(m32, m33);
          r[2] = Math.atan2(m21, m11);
        } else {
          r[0] = 0;
          r[2] = Math.atan2(-m12, m22);
        }
      } else if (order === EulerOrders.YZX) {
        r[2] = Math.asin(clamp(m21, -1, 1));
        if (Math.abs(m21) < 0.9999999) {
          r[0] = Math.atan2(-m23, m22);
          r[1] = Math.atan2(-m31, m11);
        } else {
          r[0] = 0;
          r[1] = Math.atan2(m13, m33);
        }
      } else if (order === EulerOrders.XZY) {
        r[2] = Math.asin(-clamp(m12, -1, 1));
        if (Math.abs(m12) < 0.9999999) {
          r[0] = Math.atan2(m32, m22);
          r[1] = Math.atan2(m13, m11);
        } else {
          r[0] = Math.atan2(-m23, m33);
          r[1] = 0;
        }
      } else {
        console.warn("unsupported euler order:", order);
      }
    }
  }
  _determinant2x2(a3, b, c, d) {
    return a3 * d - b * c;
  }
  _determinant3x3(a1, a22, a3, b1, b2, b3, c1, c2, c3) {
    return a1 * this._determinant2x2(b2, b3, c2, c3) - b1 * this._determinant2x2(a22, a3, c2, c3) + c1 * this._determinant2x2(a22, a3, b2, b3);
  }
  _determinant4x4() {
    let a1 = this.$matrix.m11;
    let b1 = this.$matrix.m12;
    let c1 = this.$matrix.m13;
    let d1 = this.$matrix.m14;
    let a22 = this.$matrix.m21;
    let b2 = this.$matrix.m22;
    let c2 = this.$matrix.m23;
    let d2 = this.$matrix.m24;
    let a3 = this.$matrix.m31;
    let b3 = this.$matrix.m32;
    let c3 = this.$matrix.m33;
    let d3 = this.$matrix.m34;
    let a4 = this.$matrix.m41;
    let b4 = this.$matrix.m42;
    let c4 = this.$matrix.m43;
    let d4 = this.$matrix.m44;
    return a1 * this._determinant3x3(b2, b3, b4, c2, c3, c4, d2, d3, d4) - b1 * this._determinant3x3(a22, a3, a4, c2, c3, c4, d2, d3, d4) + c1 * this._determinant3x3(a22, a3, a4, b2, b3, b4, d2, d3, d4) - d1 * this._determinant3x3(a22, a3, a4, b2, b3, b4, c2, c3, c4);
  }
  _makeAdjoint() {
    let a1 = this.$matrix.m11;
    let b1 = this.$matrix.m12;
    let c1 = this.$matrix.m13;
    let d1 = this.$matrix.m14;
    let a22 = this.$matrix.m21;
    let b2 = this.$matrix.m22;
    let c2 = this.$matrix.m23;
    let d2 = this.$matrix.m24;
    let a3 = this.$matrix.m31;
    let b3 = this.$matrix.m32;
    let c3 = this.$matrix.m33;
    let d3 = this.$matrix.m34;
    let a4 = this.$matrix.m41;
    let b4 = this.$matrix.m42;
    let c4 = this.$matrix.m43;
    let d4 = this.$matrix.m44;
    this.$matrix.m11 = this._determinant3x3(b2, b3, b4, c2, c3, c4, d2, d3, d4);
    this.$matrix.m21 = -this._determinant3x3(a22, a3, a4, c2, c3, c4, d2, d3, d4);
    this.$matrix.m31 = this._determinant3x3(a22, a3, a4, b2, b3, b4, d2, d3, d4);
    this.$matrix.m41 = -this._determinant3x3(a22, a3, a4, b2, b3, b4, c2, c3, c4);
    this.$matrix.m12 = -this._determinant3x3(b1, b3, b4, c1, c3, c4, d1, d3, d4);
    this.$matrix.m22 = this._determinant3x3(a1, a3, a4, c1, c3, c4, d1, d3, d4);
    this.$matrix.m32 = -this._determinant3x3(a1, a3, a4, b1, b3, b4, d1, d3, d4);
    this.$matrix.m42 = this._determinant3x3(a1, a3, a4, b1, b3, b4, c1, c3, c4);
    this.$matrix.m13 = this._determinant3x3(b1, b2, b4, c1, c2, c4, d1, d2, d4);
    this.$matrix.m23 = -this._determinant3x3(a1, a22, a4, c1, c2, c4, d1, d2, d4);
    this.$matrix.m33 = this._determinant3x3(a1, a22, a4, b1, b2, b4, d1, d2, d4);
    this.$matrix.m43 = -this._determinant3x3(a1, a22, a4, b1, b2, b4, c1, c2, c4);
    this.$matrix.m14 = -this._determinant3x3(b1, b2, b3, c1, c2, c3, d1, d2, d3);
    this.$matrix.m24 = this._determinant3x3(a1, a22, a3, c1, c2, c3, d1, d2, d3);
    this.$matrix.m34 = -this._determinant3x3(a1, a22, a3, b1, b2, b3, d1, d2, d3);
    this.$matrix.m44 = this._determinant3x3(a1, a22, a3, b1, b2, b3, c1, c2, c3);
  }
  loadSTRUCT(reader) {
    reader(this);
    this.load(this.mat);
    this.__mat = this.mat;
  }
};
Matrix4.STRUCT = `
mat4 {
  mat      : array(float) | this.getAsArray();
  isPersp  : int          | this.isPersp;
}
`;
struct_default.register(Matrix4);
preMultTemp = new Matrix4();
window.testmat = (x = 0, y = 0, z = Math.PI * 0.5) => {
  let m1 = new Matrix4();
  m1.euler_rotate(x, y, z);
  let t = [0, 0, 0], r = [0, 0, 0], s = [0, 0, 0];
  m1.decompose(t, r, s);
  window.console.log("\n");
  window.console.log(t);
  window.console.log(r);
  window.console.log(s);
  let mat = m1.clone();
  mat.transpose();
  mat.multiply(m1);
  console.log(mat.toString());
  return r;
};
lookat_cache_ms = cachering2.fromConstructor(Matrix4, 64);
euler_rotate_mats = cachering2.fromConstructor(Matrix4, 64);
temp_mats = cachering2.fromConstructor(Matrix4, 64);

// scripts/path.ux/scripts/path-controller/util/simple_events.js
var modalstack = [];
var singleMouseCBs = {};
function debugDomEvents() {
  let cbsymbol = Symbol("event-callback");
  let thsymbol = Symbol("debug-info");
  let idgen3 = 0;
  function init(et) {
    if (!et[thsymbol]) {
      et[thsymbol] = idgen3++;
    }
  }
  __name(init, "init");
  function getkey(et, type, options) {
    init(et);
    return "" + et[thsymbol] + ":" + type + ":" + JSON.stringify(options);
  }
  __name(getkey, "getkey");
  let addEventListener = EventTarget.prototype.addEventListener;
  let removeEventListener = EventTarget.prototype.removeEventListener;
  EventTarget.prototype.addEventListener = function(type, cb, options) {
    init(this);
    if (!cb[cbsymbol]) {
      cb[cbsymbol] = /* @__PURE__ */ new Set();
    }
    let key2 = getkey(this, type, options);
    cb[cbsymbol].add(key2);
    return addEventListener.call(this, type, cb, options);
  };
  EventTarget.prototype.removeEventListener = function(type, cb, options) {
    init(this);
    if (!cb[cbsymbol]) {
      console.error("Invalid callback in removeEventListener for", type, this, cb);
      return;
    }
    let key2 = getkey(this, type, options);
    if (!cb[cbsymbol].has(key2)) {
      console.error("Callback not in removeEventListener;", type, this, cb);
      return;
    }
    cb[cbsymbol].delete(key2);
    return removeEventListener.call(this, type, cb, options);
  };
}
__name(debugDomEvents, "debugDomEvents");
function singletonMouseEvents() {
  let keys2 = ["mousedown", "mouseup", "mousemove"];
  for (let k2 of keys2) {
    singleMouseCBs[k2] = /* @__PURE__ */ new Set();
  }
  let ddd = -1;
  window.testSingleMouseUpEvent = (type = "mousedown") => {
    let id = ddd++;
    singleMouseEvent(() => {
      console.log("mouse event", id);
    }, type);
  };
  let _mpos = new Vector2();
  function doSingleCbs(e2, type) {
    let list4 = singleMouseCBs[type];
    singleMouseCBs[type] = /* @__PURE__ */ new Set();
    if (e2.type !== "touchend" && e2.type !== "touchcancel") {
      _mpos[0] = e2.touches && e2.touches.length > 0 ? e2.touches[0].pageX : e2.x;
      _mpos[1] = e2.touches && e2.touches.length > 0 ? e2.touches[0].pageY : e2.y;
    }
    if (e2.touches) {
      e2 = copyEvent(e2);
      e2.type = type;
      if (e2.touches.length > 0) {
        e2.x = e2.pageX = e2.touches[0].pageX;
        e2.y = e2.pageY = e2.touches[0].pageY;
      } else {
        e2.x = _mpos[0];
        e2.y = _mpos[1];
      }
    }
    for (let cb of list4) {
      try {
        cb(e2);
      } catch (error) {
        print_stack(error);
        console.warn("Error in event callback");
      }
    }
  }
  __name(doSingleCbs, "doSingleCbs");
  window.addEventListener("mouseup", (e2) => {
    doSingleCbs(e2, "mouseup");
  }, { capture: true });
  window.addEventListener("touchcancel", (e2) => {
    doSingleCbs(e2, "mouseup");
  }, { capture: true });
  document.addEventListener("touchend", (e2) => {
    doSingleCbs(e2, "mouseup");
  }, { capture: true });
  document.addEventListener("mousedown", (e2) => {
    doSingleCbs(e2, "mousedown");
  }, { capture: true });
  document.addEventListener("touchstart", (e2) => {
    doSingleCbs(e2, "mousedown");
  }, { capture: true });
  document.addEventListener("mousemove", (e2) => {
    doSingleCbs(e2, "mousemove");
  }, { capture: true });
  document.addEventListener("touchmove", (e2) => {
    doSingleCbs(e2, "mousemove");
  }, { capture: true });
  return {
    singleMouseEvent(cb, type) {
      if (!(type in singleMouseCBs)) {
        throw new Error("not a mouse event");
      }
      singleMouseCBs[type].add(cb);
    }
  };
}
__name(singletonMouseEvents, "singletonMouseEvents");
singletonMouseEvents = singletonMouseEvents();
function singleMouseEvent(cb, type) {
  return singletonMouseEvents.singleMouseEvent(cb, type);
}
__name(singleMouseEvent, "singleMouseEvent");
function isLeftClick(e2) {
  if (e2.touches !== void 0) {
    return e2.touches.length === 1;
  }
  return e2.button === 0;
}
__name(isLeftClick, "isLeftClick");
var DoubleClickHandler = class {
  static {
    __name(this, "DoubleClickHandler");
  }
  constructor() {
    this.down = 0;
    this.last = 0;
    this.dblEvent = void 0;
    this.start_mpos = new Vector2();
    this._on_mouseup = this._on_mouseup.bind(this);
    this._on_mousemove = this._on_mousemove.bind(this);
  }
  _on_mouseup(e2) {
    this.mdown = false;
  }
  _on_mousemove(e2) {
    let mpos = new Vector2();
    mpos[0] = e2.x;
    mpos[1] = e2.y;
    let dist = mpos.vectorDistance(this.start_mpos) * devicePixelRatio;
    if (dist > 11) {
      this.mdown = false;
    }
    if (this.mdown) {
      singleMouseEvent(this._on_mousemove, "mousemove");
    }
    this.update();
  }
  mousedown(e2) {
    if (!this.last) {
      this.last = 0;
    }
    if (!this.down) {
      this.down = 0;
    }
    if (!this.up) {
      this.up = 0;
    }
    if (isMouseDown(e2)) {
      this.mdown = true;
      let cpy = Object.assign({}, e2);
      this.start_mpos[0] = e2.x;
      this.start_mpos[1] = e2.y;
      singleMouseEvent(this._on_mousemove, "mousemove");
      if (e2.type.search("touch") >= 0 && e2.touches.length > 0) {
        cpy.x = cpy.pageX = e2.touches[0].pageX;
        cpy.y = cpy.pageY = e2.touches[1].pageY;
      } else {
        cpy.x = cpy.pageX = e2.x;
        cpy.y = cpy.pageY = e2.y;
      }
      this.dblEvent = copyEvent(e2);
      this.dblEvent.type = "dblclick";
      this.last = this.down;
      this.down = time_ms();
      if (this.down - this.last < config_default.doubleClickTime) {
        this.mdown = false;
        this.ondblclick(this.dblEvent);
        this.down = this.last = 0;
      } else {
        singleMouseEvent(this._on_mouseup, "mouseup");
      }
    } else {
      this.mdown = false;
    }
  }
  //you may override this
  ondblclick(e2) {
  }
  update() {
    if (modalstack.length > 0) {
      this.mdown = false;
    }
    if (this.mdown && time_ms() - this.down > config_default.doubleClickHoldTime) {
      this.mdown = false;
      this.ondblclick(this.dblEvent);
    }
  }
  abort() {
    this.last = this.down = 0;
  }
};
function isMouseDown(e2) {
  let mdown = 0;
  if (e2.touches !== void 0) {
    mdown = e2.touches.length > 0;
  } else {
    mdown = e2.buttons;
  }
  mdown = mdown & 1;
  return mdown;
}
__name(isMouseDown, "isMouseDown");
function pathDebugEvent(e2, extra) {
  e2.__prevdef = e2.preventDefault;
  e2.__stopprop = e2.stopPropagation;
  e2.preventDefault = function() {
    console.warn("preventDefault", extra);
    return this.__prevdef();
  };
  e2.stopPropagation = function() {
    console.warn("stopPropagation", extra);
    return this.__stopprop();
  };
}
__name(pathDebugEvent, "pathDebugEvent");
function eventWasTouch(e2) {
  let ret2 = e2.sourceCapabilities && e2.sourceCapabilities.firesTouchEvents;
  ret2 = ret2 || e2.was_touch;
  ret2 = ret2 || e2 instanceof TouchEvent;
  ret2 = ret2 || e2.touches !== void 0;
  if (e2 instanceof PointerEvent) {
    ret2 = ret2 || (e2.pointerType === "pen" || e2.pointerType === "touch");
  }
  return ret2;
}
__name(eventWasTouch, "eventWasTouch");
function copyEvent(e2) {
  let ret2 = {};
  let keys2 = [];
  for (let k2 in e2) {
    keys2.push(k2);
  }
  keys2 = keys2.concat(Object.getOwnPropertySymbols(e2));
  keys2 = keys2.concat(Object.getOwnPropertyNames(e2));
  for (let k2 of keys2) {
    let v;
    try {
      v = e2[k2];
    } catch (error) {
      console.warn("read error for event key", k2);
      continue;
    }
    if (typeof v == "function") {
      ret2[k2] = v.bind(e2);
    } else {
      ret2[k2] = v;
    }
  }
  ret2.original = e2;
  return ret2;
}
__name(copyEvent, "copyEvent");
var Screen;
function _setScreenClass(cls2) {
  Screen = cls2;
}
__name(_setScreenClass, "_setScreenClass");
function findScreen() {
  let rec = /* @__PURE__ */ __name((n) => {
    for (let n2 of n.childNodes) {
      if (n2 && typeof n2 === "object" && n2 instanceof Screen) {
        return n2;
      }
    }
    for (let n2 of n.childNodes) {
      let ret2 = rec(n2);
      if (ret2) {
        return ret2;
      }
    }
  }, "rec");
  return rec(document.body);
}
__name(findScreen, "findScreen");
window._findScreen = findScreen;
var ContextAreaClass;
function _setModalAreaClass(cls2) {
  ContextAreaClass = cls2;
}
__name(_setModalAreaClass, "_setModalAreaClass");
function pushPointerModal(obj2, elem, pointerId, autoStopPropagation = true) {
  return pushModalLight(obj2, autoStopPropagation, elem, pointerId);
}
__name(pushPointerModal, "pushPointerModal");
function pushModalLight(obj2, autoStopPropagation = true, elem, pointerId) {
  let keys2;
  if (pointerId === void 0) {
    keys2 = /* @__PURE__ */ new Set([
      "keydown",
      "keyup",
      "mousedown",
      "mouseup",
      "touchstart",
      "touchend",
      "touchcancel",
      "mousewheel",
      "mousemove",
      "mouseover",
      "mouseout",
      "mouseenter",
      "mouseleave",
      "dragstart",
      "drag",
      "dragend",
      "dragexit",
      "dragleave",
      "dragover",
      "dragenter",
      "drop",
      "pointerdown",
      "pointermove",
      "pointerup",
      "pointercancel",
      "pointerstart",
      "pointerend",
      "pointerleave",
      "pointerexit",
      "pointerenter",
      "pointerover"
    ]);
  } else {
    keys2 = /* @__PURE__ */ new Set([
      "keydown",
      "keyup",
      "keypress",
      "mousewheel"
    ]);
  }
  let ret2 = {
    keys: keys2,
    handlers: {},
    last_mpos: [0, 0]
  };
  let touchmap = {
    "touchstart": "mousedown",
    "touchmove": "mousemove",
    "touchend": "mouseup",
    "touchcancel": "mouseup"
  };
  let mpos = [0, 0];
  let screen = findScreen();
  if (screen) {
    mpos[0] = screen.mpos[0];
    mpos[1] = screen.mpos[1];
    screen = void 0;
  }
  function handleAreaContext() {
    let screen2 = findScreen();
    if (screen2) {
      let sarea = screen2.findScreenArea(mpos[0], mpos[1]);
      if (sarea && sarea.area) {
        sarea.area.push_ctx_active();
        sarea.area.pop_ctx_active();
      }
    }
  }
  __name(handleAreaContext, "handleAreaContext");
  function make_default_touchhandler(type, state) {
    return function(e2) {
      if (config_default.DEBUG.domEvents) {
        pathDebugEvent(e2);
      }
      if (touchmap[type] in ret2.handlers) {
        let type2 = touchmap[type];
        let e22 = copyEvent(e2);
        e22.was_touch = true;
        e22.type = type2;
        e22.button = type == "touchcancel" ? 1 : 0;
        e22.touches = e2.touches;
        if (e2.touches.length > 0) {
          let t = e2.touches[0];
          mpos[0] = t.pageX;
          mpos[1] = t.pageY;
          e22.pageX = e22.x = t.pageX;
          e22.pageY = e22.y = t.pageY;
          e22.clientX = t.clientX;
          e22.clientY = t.clientY;
          e22.x = t.clientX;
          e22.y = t.clientY;
          ret2.last_mpos[0] = e22.x;
          ret2.last_mpos[1] = e22.y;
        } else {
          e22.x = e22.clientX = e22.pageX = e22.screenX = ret2.last_mpos[0];
          e22.y = e22.clientY = e22.pageY = e22.screenY = ret2.last_mpos[1];
        }
        e22.was_touch = true;
        handleAreaContext();
        ret2.handlers[type2](e22);
      }
      if (autoStopPropagation) {
        e2.preventDefault();
        e2.stopPropagation();
      }
    };
  }
  __name(make_default_touchhandler, "make_default_touchhandler");
  function make_handler(type, key2) {
    return function(e2) {
      if (config_default.DEBUG.domEvents) {
        pathDebugEvent(e2);
      }
      if (typeof key2 !== "string") {
        return;
      }
      if (key2.startsWith("mouse")) {
        mpos[0] = e2.pageX;
        mpos[1] = e2.pageY;
      } else if (key2.startsWith("pointer")) {
        mpos[0] = e2.x;
        mpos[1] = e2.y;
      }
      handleAreaContext();
      if (key2 !== void 0)
        obj2[key2](e2);
      if (autoStopPropagation) {
        e2.preventDefault();
        e2.stopPropagation();
      }
    };
  }
  __name(make_handler, "make_handler");
  let found = {};
  for (let k2 of keys2) {
    let key2;
    if (obj2[k2])
      key2 = k2;
    else if (obj2["on" + k2])
      key2 = "on" + k2;
    else if (obj2["on_" + k2])
      key2 = "on_" + k2;
    else if (k2 in touchmap)
      continue;
    else
      key2 = void 0;
    if (key2 === void 0 && k2.search("pointer") === 0) {
      continue;
    }
    if (key2 !== void 0) {
      found[k2] = 1;
    }
    let handler = make_handler(k2, key2);
    ret2.handlers[k2] = handler;
    let settings = handler.settings = { passive: false, capture: true };
    window.addEventListener(k2, handler, settings);
  }
  for (let k2 in touchmap) {
    if (!(k2 in found)) {
      ret2.handlers[k2] = make_default_touchhandler(k2, ret2);
      let settings = ret2.handlers[k2].settings = { passive: false, capture: true };
      window.addEventListener(k2, ret2.handlers[k2], settings);
    }
  }
  if (pointerId !== void 0) {
    let make_pointer = function(k2) {
      let k22 = "on_" + k2;
      ret2.pointer[k2] = function(e2) {
        if (obj2[k22] !== void 0) {
          obj2[k22](e2);
        }
        if (autoStopPropagation) {
          e2.stopPropagation();
          e2.preventDefault();
        }
      };
    };
    __name(make_pointer, "make_pointer");
    ret2.pointer = {
      elem,
      pointerId
    };
    make_pointer("pointerdown");
    make_pointer("pointermove");
    make_pointer("pointerup");
    make_pointer("pointerstart");
    make_pointer("pointerend");
    make_pointer("pointerleave");
    make_pointer("pointerenter");
    make_pointer("pointerout");
    make_pointer("pointerover");
    make_pointer("pointerexit");
    make_pointer("pointercancel");
    for (let k2 in ret2.pointer) {
      if (k2 !== "elem" && k2 !== "pointerId") {
        elem.addEventListener(k2, ret2.pointer[k2]);
      }
    }
    try {
      elem.setPointerCapture(pointerId);
    } catch (error) {
      print_stack(error);
      console.log("attempting fallback");
      for (let k2 in ret2.pointer) {
        if (k2 !== "elem" && k2 !== "pointerId") {
          elem.removeEventListener(k2, ret2.pointer[k2]);
        }
      }
      delete ret2.pointer;
      modalstack.push(ret2);
      popModalLight(ret2);
      for (let k2 in obj2) {
        if (k2 === "pointercancel" || k2 === "pointerend" || k2 === "pointerstart") {
          continue;
        }
        if (k2.startsWith("pointer")) {
          let k22 = k2.replace(/pointer/, "mouse");
          if (k22 in obj2) {
            console.warn("warning, existing mouse handler", k22);
            continue;
          }
          let v = obj2[k2];
          obj2[k2] = void 0;
          obj2[k22] = v;
        }
      }
      console.log(obj2);
      return pushModalLight(obj2, autoStopPropagation);
    }
  }
  modalstack.push(ret2);
  ContextAreaClass.lock();
  if (config_default.DEBUG.modalEvents) {
    console.warn("pushModalLight", ret2.pointer ? "(pointer events)" : "");
  }
  return ret2;
}
__name(pushModalLight, "pushModalLight");
if (0) {
  let evtprint = function() {
    if (window.window._print_evt_debug) {
      console.warn(...arguments);
    }
  };
  __name(evtprint, "evtprint");
  window._print_evt_debug = false;
  let addevent = EventTarget.prototype.addEventListener;
  let remevent = EventTarget.prototype.removeEventListener;
  const funckey = Symbol("eventfunc");
  EventTarget.prototype.addEventListener = function(name, func2, args2) {
    evtprint("listener added", name, func2.name, args2);
    let func22 = /* @__PURE__ */ __name(function(e2) {
      let proxy = new Proxy(e2, {
        get(target, p, receiver) {
          if (p === "preventDefault") {
            return function() {
              evtprint("preventDefault", name, arguments);
              return e2.preventDefault(...arguments);
            };
          } else if (p === "stopPropagation") {
            return function() {
              evtprint("stopPropagation", name, arguments);
              return e2.preventDefault(...arguments);
            };
          }
          return e2[p];
        }
      });
      return func2.call(this, proxy);
    }, "func2");
    func2[funckey] = func22;
    return addevent.call(this, name, func22, args2);
  };
  EventTarget.prototype.removeEventListener = function(name, func2, args2) {
    evtprint("listener removed", name, func2.name, args2);
    func2 = func2[funckey];
    return remevent.call(this, name, func2, args2);
  };
}
function popModalLight(state) {
  if (state === void 0) {
    console.warn("Bad call to popModalLight: state was undefined");
    return;
  }
  if (state !== modalstack[modalstack.length - 1]) {
    if (modalstack.indexOf(state) < 0) {
      console.warn("Error in popModalLight; modal handler not found");
      return;
    } else {
      console.warn("Error in popModalLight; called in wrong order");
    }
  }
  for (let k2 in state.handlers) {
    window.removeEventListener(k2, state.handlers[k2], state.handlers[k2].settings);
  }
  state.handlers = {};
  modalstack.remove(state);
  ContextAreaClass.unlock();
  if (config_default.DEBUG.modalEvents) {
    console.warn("popModalLight", modalstack, state.pointer ? "(pointer events)" : "");
  }
  if (state.pointer) {
    let elem = state.pointer.elem;
    try {
      elem.releasePointerCapture(state.pointer.pointerId);
    } catch (error) {
      print_stack(error);
    }
    for (let k2 in state.pointer) {
      if (k2 !== "elem" && k2 !== "pointerId") {
        elem.removeEventListener(k2, state.pointer[k2]);
      }
    }
  }
}
__name(popModalLight, "popModalLight");
function haveModal() {
  return modalstack.length > 0;
}
__name(haveModal, "haveModal");
window._haveModal = haveModal;
var keymap_latin_1 = {
  "Space": 32,
  "Escape": 27,
  "Enter": 13,
  "Return": 13,
  "Up": 38,
  "Down": 40,
  "Left": 37,
  "Right": 39,
  "Num0": 96,
  "Num1": 97,
  "Num2": 98,
  "Num3": 99,
  "Num4": 100,
  "Num5": 101,
  "Num6": 102,
  "Num7": 103,
  "Num8": 104,
  "Num9": 105,
  "Home": 36,
  "End": 35,
  "Delete": 46,
  "Backspace": 8,
  "Insert": 45,
  "PageUp": 33,
  "PageDown": 34,
  "Tab": 9,
  "-": 189,
  "=": 187,
  ".": 190,
  "/": 191,
  ",": 188,
  ";": 186,
  "'": 222,
  "[": 219,
  "]": 221,
  "NumPlus": 107,
  "NumMinus": 109,
  "Shift": 16,
  "Ctrl": 17,
  "Control": 17,
  "Alt": 18
};
for (i2 = 0; i2 < 26; i2++) {
  keymap_latin_1[String.fromCharCode(i2 + 65)] = i2 + 65;
}
for (i2 = 0; i2 < 10; i2++) {
  keymap_latin_1[String.fromCharCode(i2 + 48)] = i2 + 48;
}
for (k2 in keymap_latin_1) {
  if (!(k2 in keymap_latin_1)) {
    keymap_latin_1[keymap_latin_1[k2]] = k2;
  }
}
var keymap_latin_1_rev = {};
for (k2 in keymap_latin_1) {
  keymap_latin_1_rev[keymap_latin_1[k2]] = k2;
}
var keymap = keymap_latin_1;
var reverse_keymap = keymap_latin_1_rev;
var HotKey = class {
  static {
    __name(this, "HotKey");
  }
  /**action can be a callback or a toolpath string*/
  constructor(key2, modifiers, action, uiname) {
    this.action = action;
    this.mods = modifiers;
    this.key = keymap[key2];
    this.uiname = uiname;
  }
  exec(ctx2) {
    if (typeof this.action == "string") {
      ctx2.api.execTool(ctx2, this.action);
    } else {
      this.action(ctx2);
    }
  }
  buildString() {
    let s = "";
    for (let i2 = 0; i2 < this.mods.length; i2++) {
      if (i2 > 0) {
        s += " + ";
      }
      let k2 = this.mods[i2].toLowerCase();
      k2 = k2[0].toUpperCase() + k2.slice(1, k2.length).toLowerCase();
      s += k2;
    }
    if (this.mods.length > 0) {
      s += "+";
    }
    s += reverse_keymap[this.key];
    return s.trim();
  }
};
var KeyMap = class extends Array {
  static {
    __name(this, "KeyMap");
  }
  /**
   *
   * @param pathid{string} Id of keymap, used when patching hotkeys, when
   *                       that is implemented
   * */
  constructor(hotkeys = [], pathid = "undefined") {
    super();
    this.pathid = pathid;
    for (let hk of hotkeys) {
      this.add(hk);
    }
  }
  handle(ctx2, e2) {
    let mods = new set2();
    if (e2.shiftKey)
      mods.add("shift");
    if (e2.altKey)
      mods.add("alt");
    if (e2.ctrlKey) {
      mods.add("ctrl");
    }
    if (e2.commandKey) {
      mods.add("command");
    }
    for (let hk of this) {
      let ok = e2.keyCode === hk.key;
      if (!ok) continue;
      let count2 = 0;
      for (let m of hk.mods) {
        m = m.toLowerCase().trim();
        if (!mods.has(m)) {
          ok = false;
          break;
        }
        count2++;
      }
      if (count2 !== mods.length) {
        ok = false;
      }
      if (ok) {
        try {
          hk.exec(ctx2);
        } catch (error) {
          print_stack(error);
          console.log("failed to execute a hotkey", keymap[e2.keyCode]);
        }
        return true;
      }
    }
    return false;
  }
  add(hk) {
    this.push(hk);
  }
  push(hk) {
    super.push(hk);
  }
};
var i2;
var k2;

// scripts/path.ux/scripts/core/ui_consts.js
var ClassIdSymbol = Symbol("pathux-class-id");

// scripts/path.ux/scripts/screen/area_wrangler.js
var ScreenClass = void 0;
function setScreenClass(cls2) {
  ScreenClass = cls2;
}
__name(setScreenClass, "setScreenClass");
function getAreaIntName(name) {
  let hash = 0;
  for (let i2 = 0; i2 < name.length; i2++) {
    let c = name.charCodeAt(i2);
    if (i2 % 2 === 0) {
      hash += c << 8;
      hash *= 13;
      hash = hash & (1 << 15) - 1;
    } else {
      hash += c;
    }
  }
  return hash;
}
__name(getAreaIntName, "getAreaIntName");
window.getAreaIntName = getAreaIntName;
var AreaTypes = {
  TEST_CANVAS_EDITOR: 0
};
function setAreaTypes(def) {
  for (let k2 in AreaTypes) {
    delete AreaTypes[k2];
  }
  for (let k2 in def) {
    AreaTypes[k2] = def[k2];
  }
}
__name(setAreaTypes, "setAreaTypes");
var areaclasses = {};
var theWrangler = void 0;
var AreaWrangler = class _AreaWrangler {
  static {
    __name(this, "AreaWrangler");
  }
  constructor() {
    this.stacks = /* @__PURE__ */ new Map();
    this.lasts = /* @__PURE__ */ new Map();
    this.lastArea = void 0;
    this.stack = [];
    this.idgen = 0;
    this.locked = 0;
    this._last_screen_id = void 0;
    theWrangler = this;
  }
  /*Yeek this is particularly evil, it creates a context
  * that can be used by popups with the original context
  * area stack intact of the elements that spawned them.*/
  makeSafeContext(ctx2) {
    let wrangler = this.copy();
    let this2 = this;
    return new Proxy(ctx2, {
      get(target, key2, rec) {
        wrangler.copyTo(contextWrangler);
        return target[key2];
      }
    });
  }
  copyTo(ret2) {
    for (let [key2, stack1] of this.stacks) {
      ret2.stack.set(key2, list3(stack1));
    }
    for (let [key2, val2] of this.lasts) {
      ret2.lasts.set(key2, val2);
    }
    ret2.stack = list3(this.stack);
    ret2.lastArea = this.lastArea;
  }
  copy(b) {
    let ret2 = new _AreaWrangler();
    this.copyTo(ret2);
    return ret2;
  }
  _checkWrangler(ctx2) {
    if (ctx2 === void 0) {
      return true;
    }
    if (this._last_screen_id === void 0) {
      this._last_screen_id = ctx2.screen._id;
      return true;
    }
    if (ctx2.screen._id !== this._last_screen_id) {
      this.reset();
      this._last_screen_id = ctx2.screen._id;
      console.warn("contextWrangler detected a new screen; new file?");
      return false;
    }
    return true;
  }
  reset() {
    theWrangler = this;
    this.stacks = /* @__PURE__ */ new Map();
    this.lasts = /* @__PURE__ */ new Map();
    this.lastArea = void 0;
    this.stack = [];
    this.locked = 0;
    this._last_screen_id = void 0;
    return this;
  }
  static findInstance() {
    return theWrangler;
  }
  static lock() {
    return this.findInstance().lock();
  }
  static unlock() {
    return this.findInstance().unlock();
  }
  lock() {
    this.locked++;
    return this;
  }
  unlock() {
    this.locked = Math.max(this.locked - 1, 0);
    return this;
  }
  push(type, area, pushLastRef = true) {
    theWrangler = this;
    if (haveModal() || this.locked) {
      pushLastRef = false;
    }
    if (pushLastRef || !this.lasts.has(type[ClassIdSymbol])) {
      this.lasts.set(type[ClassIdSymbol], area);
      this.lastArea = area;
    }
    let stack = this.stacks.get(type[ClassIdSymbol]);
    if (stack === void 0) {
      stack = [];
      this.stacks.set(type[ClassIdSymbol], stack);
    }
    let last = this.lasts.get(type[ClassIdSymbol]);
    stack.push(last);
    stack.push(area);
    this.stack.push(area);
  }
  updateLastRef(type, area) {
    theWrangler = this;
    if ((this.locked || haveModal()) && this.lasts.has(type[ClassIdSymbol])) {
      return;
    }
    this.lasts.set(type[ClassIdSymbol], area);
    this.lastArea = area;
  }
  pop(type, area) {
    let stack = this.stacks.get(type[ClassIdSymbol]);
    if (stack === void 0) {
      console.warn("pop_ctx_area called in error");
      return;
    }
    if (stack.length > 0) {
      stack.pop();
      let last = stack.pop();
      if (!this.locked && last && last.isConnected) {
        this.lasts.set(type[ClassIdSymbol], last);
      }
    } else {
      console.error("pop_ctx_area called in error");
    }
    if (this.stack.length > 0) {
      this.stack.pop();
    }
  }
  getLastArea(type) {
    if (type === void 0) {
      if (this.stack.length > 0) {
        return this.stack[this.stack.length - 1];
      } else {
        return this.lastArea;
      }
    } else {
      if (this.stacks.has(type[ClassIdSymbol])) {
        let stack = this.stacks.get(type[ClassIdSymbol]);
        if (stack.length > 0) {
          return stack[stack.length - 1];
        }
      }
      return this.lasts.get(type[ClassIdSymbol]);
    }
  }
};
_setModalAreaClass(AreaWrangler);
var contextWrangler = new AreaWrangler();

// scripts/path.ux/scripts/path-controller/util/math.js
var math_exports = {};
__export(math_exports, {
  AbstractCurve: () => AbstractCurve,
  COLINEAR: () => COLINEAR,
  COLINEAR_ISECT: () => COLINEAR_ISECT,
  ClosestCurveRets: () => ClosestCurveRets,
  ClosestModes: () => ClosestModes,
  FEPS: () => FEPS,
  FEPS_DATA: () => FEPS_DATA,
  FLOAT_MAX: () => FLOAT_MAX,
  FLOAT_MIN: () => FLOAT_MIN,
  LINECROSS: () => LINECROSS,
  Mat4Stack: () => Mat4Stack,
  Matrix4UI: () => Matrix4UI,
  MinMax: () => MinMax,
  PlaneOps: () => PlaneOps,
  SQRT2: () => SQRT2,
  _old_isect_ray_plane: () => _old_isect_ray_plane,
  aabb_intersect_2d: () => aabb_intersect_2d,
  aabb_intersect_3d: () => aabb_intersect_3d,
  aabb_isect_2d: () => aabb_isect_2d,
  aabb_isect_3d: () => aabb_isect_3d,
  aabb_isect_cylinder_3d: () => aabb_isect_cylinder_3d,
  aabb_isect_line_2d: () => aabb_isect_line_2d,
  aabb_isect_line_3d: () => aabb_isect_line_3d,
  aabb_overlap_area: () => aabb_overlap_area,
  aabb_sphere_dist: () => aabb_sphere_dist,
  aabb_sphere_isect: () => aabb_sphere_isect,
  aabb_sphere_isect_2d: () => aabb_sphere_isect_2d,
  aabb_union: () => aabb_union,
  aabb_union_2d: () => aabb_union_2d,
  angle_between_vecs: () => angle_between_vecs,
  barycentric_v2: () => barycentric_v2,
  calc_projection_axes: () => calc_projection_axes,
  circ_from_line_tan: () => circ_from_line_tan,
  circ_from_line_tan_2d: () => circ_from_line_tan_2d,
  clip_line_w: () => clip_line_w,
  closestPoint: () => closestPoint,
  closest_point_on_line: () => closest_point_on_line,
  closest_point_on_quad: () => closest_point_on_quad,
  closest_point_on_tri: () => closest_point_on_tri,
  colinear: () => colinear,
  colinear2d: () => colinear2d,
  convex_quad: () => convex_quad,
  corner_normal: () => corner_normal,
  dihedral_v3_sqr: () => dihedral_v3_sqr,
  dist_to_line: () => dist_to_line,
  dist_to_line_2d: () => dist_to_line_2d,
  dist_to_line_sqr: () => dist_to_line_sqr,
  dist_to_tri_v3: () => dist_to_tri_v3,
  dist_to_tri_v3_old: () => dist_to_tri_v3_old,
  dist_to_tri_v3_sqr: () => dist_to_tri_v3_sqr,
  expand_line: () => expand_line,
  expand_rect2d: () => expand_rect2d,
  feps: () => feps,
  gen_circle: () => gen_circle,
  get_boundary_winding: () => get_boundary_winding,
  get_rect_lines: () => get_rect_lines,
  get_rect_points: () => get_rect_points,
  get_tri_circ: () => get_tri_circ,
  inrect_2d: () => inrect_2d,
  isNum: () => isNum,
  isect_ray_plane: () => isect_ray_plane,
  line_isect: () => line_isect,
  line_line_cross: () => line_line_cross,
  line_line_isect: () => line_line_isect,
  makeCircleMesh: () => makeCircleMesh,
  minmax_verts: () => minmax_verts,
  normal_poly: () => normal_poly,
  normal_quad: () => normal_quad,
  normal_quad_old: () => normal_quad_old,
  normal_tri: () => normal_tri,
  point_in_aabb: () => point_in_aabb,
  point_in_aabb_2d: () => point_in_aabb_2d,
  point_in_hex: () => point_in_hex,
  point_in_tri: () => point_in_tri,
  project: () => project,
  quad_bilinear: () => quad_bilinear,
  rot2d: () => rot2d,
  simple_tri_aabb_isect: () => simple_tri_aabb_isect,
  tet_volume: () => tet_volume,
  tri_angles: () => tri_angles,
  tri_area: () => tri_area,
  trilinear_co: () => trilinear_co,
  trilinear_co2: () => trilinear_co2,
  trilinear_v3: () => trilinear_v3,
  unproject: () => unproject,
  winding: () => winding,
  winding_axis: () => winding_axis
});
var dtvtmps = cachering2.fromConstructor(Vector32, 32);
var quad_co_rets2 = cachering2.fromConstructor(Vector2, 512);
function quad_bilinear(v1, v2, v3, v4, u, v) {
  return -((v1 - v2) * u - v1 - (u * v1 - u * v2 + u * v3 - u * v4 - v1 + v4) * v);
}
__name(quad_bilinear, "quad_bilinear");
function quad_uv_2d(p, v1, v2, v3, v4) {
  let u, v;
  let v2x = v2[0] - v1[0];
  let v2y = v2[1] - v1[1];
  let v3x = v3[0] - v1[0];
  let v3y = v3[1] - v1[1];
  let v4x = v4[0] - v1[0];
  let v4y = v4[1] - v1[1];
  let x = p[0] - v1[0];
  let y = p[1] - v1[1];
  let sqrt3 = Math.sqrt;
  let A = 2 * (((v4y + y) * x - 2 * v4x * y) * v3y + (v4x * y - v4y * x) * (v4y + y) - ((v4x - x) * v2y - v3x * y) * (v4y - y)) * v2x - 2 * ((v4x * y - v4y * x) * (v4x + x) - (v4x - x) * v3y * x + ((2 * v4y - y) * x - v4x * y) * v3x) * v2y + (v4x * y - v4y * x + v3y * x - v3x * y) ** 2 + (v4x - x) ** 2 * v2y ** 2 + (v4y - y) ** 2 * v2x ** 2;
  let B = v4x * y - v4y * x + v3y * x - v3x * y;
  let C1 = 2 * (v3x - v4x) * v2y - 2 * (v3y - v4y) * v2x;
  let C2 = 2 * (v3x * v4y - v3y * v4x + v2y * v4x) - 2 * v2x * v4y;
  let u1, u2;
  if (A < 0) {
    console.log("A was < 0", A);
    A = -A;
    C1 = C2 = 0;
  }
  if (Math.abs(C1) < 1e-5) {
    let dx = v2x;
    let dy = v2y;
    console.log("C1 bad");
    let l = Math.sqrt(dx * dx + dy * dy);
    if (l > 1e-6) {
      dx /= l * l;
      dy /= l * l;
    }
    u1 = u2 = dx * x + dy * y;
  } else {
    u1 = (-(B + sqrt3(A) - (v4y - y) * v2x) - (v4x - x) * v2y) / C1;
    u2 = (-(B - sqrt3(A) - (v4y - y) * v2x) - (v4x - x) * v2y) / C1;
  }
  if (Math.abs(C2) < 1e-5) {
    let dx, dy;
    dx = v3x - v2x;
    dy = v3y - v2y;
    console.log("C2 bad");
    let l = Math.sqrt(dx ** 2 + dy ** 2);
    if (l > 1e-5) {
      dx /= l * l;
      dy /= l * l;
    }
    v1 = v2 = x * dx + y * dy;
  } else {
    v1 = (-(B - sqrt3(A) + (v4y + y) * v2x) + (v4x + x) * v2y) / C2;
    v2 = (-(B + sqrt3(A) + (v4y + y) * v2x) + (v4x + x) * v2y) / C2;
  }
  let ret2 = quad_co_rets2.next();
  let d1 = (u1 - 0.5) ** 2 + (v1 - 0.5) ** 2;
  let d2 = (u2 - 0.5) ** 2 + (v2 - 0.5) ** 2;
  if (d1 < d2) {
    ret2[0] = u1;
    ret2[1] = v1;
  } else {
    ret2[0] = u2;
    ret2[1] = v2;
  }
  return ret2;
}
__name(quad_uv_2d, "quad_uv_2d");
var ClosestModes = {
  CLOSEST: 0,
  START: 1,
  END: 2,
  ENDPOINTS: 3,
  ALL: 4
};
var advs = cachering2.fromConstructor(Vector4, 128);
var AbstractCurve = class {
  static {
    __name(this, "AbstractCurve");
  }
  evaluate(t) {
    throw new Error("implement me");
  }
  derivative(t) {
  }
  curvature(t) {
  }
  normal(t) {
  }
  width(t) {
  }
};
var ClosestCurveRets = class {
  static {
    __name(this, "ClosestCurveRets");
  }
  constructor() {
    this.p = new Vector32();
    this.t = 0;
  }
};
var cvrets = cachering2.fromConstructor(ClosestCurveRets, 2048);
var cvarrays = new ArrayPool();
var cvtmp = new Array(1024);
function closestPoint(p, curve, mode) {
  let steps = 5;
  let s = 0, ds = 1 / steps;
  let ri = 0;
  for (let i2 = 0; i2 < steps; i2++, s += ds) {
    let c1 = curve.evaluate(s);
    let c2 = curve.evaluate(s + ds);
  }
}
__name(closestPoint, "closestPoint");
var poly_normal_tmps = cachering2.fromConstructor(Vector32, 64);
var pncent = new Vector32();
function normal_poly(vs) {
  if (vs.length === 3) {
    return poly_normal_tmps.next().load(normal_tri(vs[0], vs[1], vs[2]));
  } else if (vs.length === 4) {
    return poly_normal_tmps.next().load(normal_quad(vs[0], vs[1], vs[2], vs[3]));
  }
  if (vs.length === 0) {
    return poly_normal_tmps.next().zero();
  }
  let cent = pncent.zero();
  let tot = 0;
  for (let v of vs) {
    cent.add(v);
    tot++;
  }
  cent.mulScalar(1 / tot);
  let n = poly_normal_tmps.next().zero();
  for (let i2 = 0; i2 < vs.length; i2++) {
    let a3 = vs[i2];
    let b = vs[(i2 + 1) % vs.length];
    let c = cent;
    let n2 = normal_tri(a3, b, c);
    n.add(n2);
  }
  n.normalize();
  return n;
}
__name(normal_poly, "normal_poly");
var barycentric_v2_rets = cachering2.fromConstructor(Vector2, 2048);
var calc_proj_refs = new cachering2(() => [0, 0], 64);
function dihedral_v3_sqr(v1, v2, v3, v4) {
  let bx = v2[0] - v1[0];
  let by = v2[1] - v1[1];
  let bz = v2[2] - v1[2];
  let cx = v3[0] - v1[0];
  let cy = v3[1] - v1[1];
  let cz = v3[2] - v1[2];
  let dx = v4[0] - v1[0];
  let dy = v4[1] - v1[1];
  let dz = v4[2] - v1[2];
  return ((bx * cz - bz * cx) * (cx * dz - cz * dx) + (by * cz - bz * cy) * (cy * dz - cz * dy) + (bx * cy - by * cx) * (cx * dy - cy * dx)) ** 2 / (((bx * cz - bz * cx) ** 2 + (by * cz - bz * cy) ** 2 + (bx * cy - by * cx) ** 2) * ((cx * dz - cz * dx) ** 2 + (cy * dz - cz * dy) ** 2 + (cx * dy - cy * dx) ** 2));
}
__name(dihedral_v3_sqr, "dihedral_v3_sqr");
var tet_area_tmps = cachering2.fromConstructor(Vector32, 64);
function tet_volume(a3, b, c, d) {
  a3 = tet_area_tmps.next().load(a3);
  b = tet_area_tmps.next().load(b);
  c = tet_area_tmps.next().load(c);
  d = tet_area_tmps.next().load(d);
  a3.sub(d);
  b.sub(d);
  c.sub(d);
  b.cross(c);
  return a3.dot(b) / 6;
}
__name(tet_volume, "tet_volume");
function calc_projection_axes(no) {
  let ax = Math.abs(no[0]), ay = Math.abs(no[1]), az = Math.abs(no[2]);
  let ret2 = calc_proj_refs.next();
  if (ax > ay && ax > az) {
    ret2[0] = 1;
    ret2[1] = 2;
  } else if (ay > az && ay > ax) {
    ret2[0] = 0;
    ret2[1] = 2;
  } else {
    ret2[0] = 0;
    ret2[1] = 1;
  }
  return ret2;
}
__name(calc_projection_axes, "calc_projection_axes");
var _avtmps = cachering2.fromConstructor(Vector32, 128);
function inrect_3d(p, min3, max3) {
  let ok = p[0] >= min3[0] && p[0] <= max3[0];
  ok = ok && p[1] >= min3[1] && p[1] <= max3[1];
  ok = ok && p[2] >= min3[2] && p[2] <= max3[2];
  return ok;
}
__name(inrect_3d, "inrect_3d");
function aabb_isect_line_3d(v1, v2, min3, max3) {
  let inside = inrect_3d(v1, min3, max3);
  inside = inside || inrect_3d(v2, min3, max3);
  if (inside) {
    return true;
  }
  let cent = _avtmps.next().load(min3).interp(max3, 0.5);
  let p = closest_point_on_line(cent, v1, v2, true);
  if (!p) {
    return false;
  }
  p = p[0];
  return inrect_3d(p, min3, max3);
}
__name(aabb_isect_line_3d, "aabb_isect_line_3d");
function aabb_isect_cylinder_3d(v1, v2, radius, min3, max3) {
  let inside = inrect_3d(v1, min3, max3);
  inside = inside || inrect_3d(v2, min3, max3);
  if (inside) {
    return true;
  }
  let cent = _avtmps.next().load(min3).interp(max3, 0.5);
  let p = closest_point_on_line(cent, v1, v2, true);
  if (!p) {
    return false;
  }
  p = p[0];
  let size = _avtmps.next().load(max3).sub(min3);
  size.mulScalar(0.5);
  size.addScalar(radius);
  p.sub(cent).abs();
  return p[0] <= size[0] && p[1] <= size[1] && p[2] <= size[2];
}
__name(aabb_isect_cylinder_3d, "aabb_isect_cylinder_3d");
function barycentric_v2(p, v1, v2, v3, axis1 = 0, axis2 = 1, out = void 0) {
  let div = v2[axis1] * v3[axis2] - v2[axis2] * v3[axis1] + (v2[axis2] - v3[axis2]) * v1[axis1] - (v2[axis1] - v3[axis1]) * v1[axis2];
  if (Math.abs(div) < 1e-6) {
    div = 1e-5;
  }
  let u = (v2[axis1] * v3[axis2] - v2[axis2] * v3[axis1] + (v2[axis2] - v3[axis2]) * p[axis1] - (v2[axis1] - v3[axis1]) * p[axis2]) / div;
  let v = (-(v1[axis1] * v3[axis2] - v1[axis2] * v3[axis1] + (v1[axis2] - v3[axis2]) * p[axis1]) + (v1[axis1] - v3[axis1]) * p[axis2]) / div;
  if (!out) {
    out = barycentric_v2_rets.next();
  }
  out[0] = u;
  out[1] = v;
  return out;
}
__name(barycentric_v2, "barycentric_v2");
function _linedis2(co, v1, v2) {
  let v1x = v1[0] - co[0];
  let v1y = v1[1] - co[1];
  let v1z = v1[2] - co[2];
  let v2x = v2[0] - co[0];
  let v2y = v2[1] - co[1];
  let v2z = v2[2] - co[2];
  let dis = (((v1y - v2y) * v1y + (v1z - v2z) * v1z + (v1x - v2x) * v1x) * (v1y - v2y) - v1y) ** 2 + (((v1y - v2y) * v1y + (v1z - v2z) * v1z + (v1x - v2x) * v1x) * (v1z - v2z) - v1z) ** 2 + (((v1y - v2y) * v1y + (v1z - v2z) * v1z + (v1x - v2x) * v1x) * (v1x - v2x) - v1x) ** 2;
  return dis;
}
__name(_linedis2, "_linedis2");
var closest_p_tri_rets = new cachering2(() => {
  return {
    co: new Vector32(),
    uv: new Vector2(),
    dist: 0
  };
}, 512);
var cpt_v1 = new Vector32();
var cpt_v2 = new Vector32();
var cpt_v3 = new Vector32();
var cpt_v4 = new Vector32();
var cpt_v5 = new Vector32();
var cpt_v6 = new Vector32();
var cpt_p = new Vector32();
var cpt_n = new Vector32();
var cpt_mat = new Matrix4();
var cpt_mat2 = new Matrix4();
var cpt_b = new Vector32();
function closest_point_on_quad(p, v1, v2, v3, v4, n, uvw) {
  let a3 = closest_point_on_tri(p, v1, v2, v3, n, uvw);
  let b = closest_point_on_tri(p, v1, v3, v4, n, uvw);
  return a3.dist <= b.dist ? a3 : b;
}
__name(closest_point_on_quad, "closest_point_on_quad");
function closest_point_on_tri(p, v1, v2, v3, n, uvw) {
  let op = p;
  if (uvw) {
    uvw[0] = uvw[1] = 0;
    if (uvw.length > 2) {
      uvw[2] = 0;
    }
  }
  v1 = cpt_v1.load(v1);
  v2 = cpt_v2.load(v2);
  v3 = cpt_v3.load(v3);
  p = cpt_p.load(p);
  if (n === void 0) {
    n = cpt_n.load(normal_tri(v1, v2, v3));
  }
  v1.sub(p);
  v2.sub(p);
  v3.sub(p);
  p.zero();
  let ax1, ax2;
  let ax = Math.abs(n[0]), ay = Math.abs(n[1]), az = Math.abs(n[2]);
  if (ax === 0 && ay === 0 && az === 0) {
    console.log("eek1", n, v1, v2, v3);
    let ret3 = closest_p_tri_rets.next();
    ret3.dist = 1e17;
    ret3.co.zero();
    ret3.uv.zero();
    return ret3;
  }
  let ax3;
  if (ax >= ay && ax >= az) {
    ax1 = 1;
    ax2 = 2;
    ax3 = 0;
  } else if (ay >= ax && ay >= az) {
    ax1 = 0;
    ax2 = 2;
    ax3 = 1;
  } else {
    ax1 = 0;
    ax2 = 1;
    ax3 = 2;
  }
  let mat = cpt_mat;
  let mat2 = cpt_mat2;
  mat.makeIdentity();
  let m = mat.$matrix;
  m.m11 = v1[ax1];
  m.m12 = v2[ax1];
  m.m13 = v3[ax1];
  m.m14 = 0;
  m.m21 = v1[ax2];
  m.m22 = v2[ax2];
  m.m23 = v3[ax2];
  m.m24 = 0;
  m.m31 = 1;
  m.m32 = 1;
  m.m33 = 1;
  m.m34 = 0;
  mat.transpose();
  let b = cpt_b.zero();
  b[0] = p[ax1];
  b[1] = p[ax2];
  b[2] = 1;
  b[3] = 0;
  mat2.load(mat).transpose();
  mat.preMultiply(mat2);
  if (mat.invert() === null) {
    console.log("eek2", mat.determinant(), ax1, ax2, n);
    let ret3 = closest_p_tri_rets.next();
    ret3.dist = 1e17;
    ret3.co.zero();
    ret3.uv.zero();
    return ret3;
  }
  mat.multiply(mat2);
  b.multVecMatrix(mat);
  let u = b[0];
  let v = b[1];
  let w = b[2];
  for (let i2 = 0; i2 < 1; i2++) {
    u = Math.min(Math.max(u, 0), 1);
    v = Math.min(Math.max(v, 0), 1);
    w = Math.min(Math.max(w, 0), 1);
    let tot = u + v + w;
    if (tot !== 0) {
      tot = 1 / tot;
      u *= tot;
      v *= tot;
      w *= tot;
    }
  }
  if (uvw) {
    uvw[0] = u;
    uvw[1] = v;
    if (uvw.length > 2) {
      uvw[2] = w;
    }
  }
  let x = v1[0] * u + v2[0] * v + v3[0] * w;
  let y = v1[1] * u + v2[1] * v + v3[1] * w;
  let z = v1[2] * u + v2[2] * v + v3[2] * w;
  let ret2 = closest_p_tri_rets.next();
  ret2.co.loadXYZ(x, y, z);
  ret2.uv[0] = u;
  ret2.uv[1] = v;
  ret2.dist = ret2.co.vectorLength();
  ret2.co.add(op);
  return ret2;
}
__name(closest_point_on_tri, "closest_point_on_tri");
function dist_to_tri_v3_old(co, v1, v2, v3, no = void 0) {
  if (!no) {
    no = dtvtmps.next().load(normal_tri(v1, v2, v3));
  }
  let p = dtvtmps.next().load(co);
  p.sub(v1);
  let planedis = -p.dot(no);
  let [axis, axis2] = calc_projection_axes(no);
  let p1 = dtvtmps.next();
  let p2 = dtvtmps.next();
  let p3 = dtvtmps.next();
  p1[0] = v1[axis];
  p1[1] = v1[axis2];
  p1[2] = 0;
  p2[0] = v2[axis];
  p2[1] = v2[axis2];
  p2[2] = 0;
  p3[0] = v3[axis];
  p3[1] = v3[axis2];
  p3[2] = 0;
  let pp = dtvtmps.next();
  pp[0] = co[axis];
  pp[1] = co[axis2];
  pp[2] = 0;
  let dis = 1e17;
  function linedis2d(a3, b, c) {
    let dx1 = a3[0] - b[0];
    let dy1 = a3[1] - b[1];
    let dx2 = c[0] - b[0];
    let dy2 = c[1] - b[1];
    let len = dx2 * dx2 + dy2 * dy2;
    len = len > 1e-6 ? 1 / len : 0;
    dx2 *= len;
    dy2 *= len;
    return Math.abs(dx1 * dy2 - dx2 * dy1);
  }
  __name(linedis2d, "linedis2d");
  let tmp = dtvtmps.next();
  let tmp2 = dtvtmps.next();
  function linedis3d(a3, b, c) {
    tmp.load(a3).sub(b);
    tmp2.load(c).sub(b).normalize();
    let t = tmp.dot(tmp2);
    t = Math.min(Math.max(t, 0), b.vectorDistance(c));
    tmp2.mulScalar(t).add(b);
    return tmp2.vectorDistance(a3);
  }
  __name(linedis3d, "linedis3d");
  if (point_in_tri(pp, p1, p2, p3)) {
    return Math.abs(planedis);
  }
  dis = Math.min(dis, linedis3d(co, v1, v2));
  dis = Math.min(dis, linedis3d(co, v2, v3));
  dis = Math.min(dis, linedis3d(co, v3, v1));
  if (0) {
    let uv = barycentric_v2(pp, p1, p2, p3);
    let w = 1 - uv[0] - uv[1];
    uv[0] = Math.min(Math.max(uv[0], 0), 1);
    uv[1] = Math.min(Math.max(uv[1], 0), 1);
    w = Math.min(Math.max(w, 0), 1);
    let sum = uv[0] + uv[1] + w;
    sum = sum !== 0 ? 1 / sum : 0;
    w *= sum;
    uv[0] *= sum;
    uv[1] *= sum;
    pp.zero();
    pp.addFac(v1, uv[0]);
    pp.addFac(v2, uv[1]);
    pp.addFac(v3, 1 - uv[0] - uv[1]);
    dis = Math.min(dis, pp.vectorDistance(co));
  }
  return dis;
}
__name(dist_to_tri_v3_old, "dist_to_tri_v3_old");
function dist_to_tri_v3(p, v1, v2, v3, n) {
  return dist_to_tri_v3_old(p, v1, v2, v3, n);
}
__name(dist_to_tri_v3, "dist_to_tri_v3");
var _dt3s_n = new Vector32();
function dist_to_tri_v3_sqr(p, v1, v2, v3, n) {
  if (n === void 0) {
    n = _dt3s_n;
    n.load(normal_tri(v1, v2, v3));
  }
  let axis1, axis2, axis3;
  let nx = n[0] < 0 ? -n[0] : n[0];
  let ny = n[1] < 0 ? -n[1] : n[1];
  let nz = n[2] < 0 ? -n[2] : n[2];
  const feps2 = 1e-7;
  if (nx > ny && nx > nz) {
    axis1 = 1;
    axis2 = 2;
    axis3 = 0;
  } else if (ny > nx && ny > nz) {
    axis1 = 0;
    axis2 = 2;
    axis3 = 1;
  } else {
    axis1 = 0;
    axis2 = 1;
    axis3 = 2;
  }
  let planedis = (p[0] - v1[0]) * n[0] + (p[1] - v1[1]) * n[1] + (p[2] - v1[2]) * n[2];
  planedis = planedis < 0 ? -planedis : planedis;
  let ax = v1[axis1], ay = v1[axis2], az = v1[axis3];
  let bx = v2[axis1] - ax, by = v2[axis2] - ay, bz = v2[axis3] - az;
  let cx = v3[axis1] - ax, cy = v3[axis2] - ay, cz = v3[axis3] - az;
  let bx2 = bx * bx, by2 = by * by, bz2 = bz * bz, cx2 = cx * cx, cy2 = cy * cy, cz2 = cz * cz;
  let x1 = p[axis1] - ax;
  let y1 = p[axis2] - ay;
  let z1 = p[axis3] - az;
  const testf = 0;
  let l1 = Math.sqrt(bx ** 2 + by ** 2);
  let l2 = Math.sqrt((cx - bx) ** 2 + (cy - by) ** 2);
  let l3 = Math.sqrt(cx ** 2 + cy ** 2);
  let s1 = x1 * by - y1 * bx < testf;
  let s2 = (x1 - bx) * (cy - by) - (y1 - by) * (cx - bx) < testf;
  let s3 = x1 * -cy + y1 * cx < testf;
  if (n[axis3] < 0) {
    s1 = !s1;
    s2 = !s2;
    s3 = !s3;
  }
  let mask = s1 & 1 | s2 << 1 | s3 << 2;
  if (mask === 0 || mask === 7) {
    return planedis * planedis;
  }
  let d1, d2, d3, div;
  let dis = 0;
  let lx, ly, lz;
  lx = bx;
  ly = by;
  lz = bz;
  nx = n[axis1];
  ny = n[axis2];
  nz = n[axis3];
  switch (mask) {
    case 1:
      div = bx2 + by2;
      if (div > feps2) {
        d1 = bx * y1 - by * x1;
        d1 = d1 * d1 / div;
        lx = -by;
        ly = bx;
        lz = bz;
      } else {
        d1 = x1 * x1 + y1 * y1;
        lx = x1;
        ly = y1;
        lz = z1;
      }
      dis = d1;
      break;
    case 3:
      lx = x1 - bx;
      ly = y1 - by;
      lz = z1 - bz;
      dis = lx * lx + ly * ly;
      return lx * lx + ly * ly + lz * lz;
    case 2:
      div = (bx - cx) ** 2 + (by - cy) ** 2;
      if (div > feps2) {
        d2 = (bx - cx) * y1 - (by - cy) * x1;
        d2 = d2 / div;
        lx = by - cy;
        ly = cx - bx;
        lz = cz - bz;
      } else {
        d2 = (x1 - bx) * (x1 - bx) + (y1 - by) * (y1 - by);
        lx = x1 - bx;
        ly = y1 - by;
        lz = z1 - bz;
      }
      dis = d2;
      break;
    case 6:
      lx = x1 - cx;
      ly = y1 - cy;
      lz = z1 - cz;
      return lx * lx + ly * ly + lz * lz;
    case 4:
      div = cx2 + cy2;
      if (div > feps2) {
        d3 = cx * y1 - cy * x1;
        d3 = d3 * d3 / div;
        lx = cy;
        ly = -cx;
        lz = cz;
      } else {
        d3 = (x1 - cx) * (x1 - cx) + (y1 - cy) * (y1 - cy);
        lx = x1 - cx;
        ly = y1 - cy;
        lz = z1 - cz;
      }
      dis = d3;
      break;
    case 5:
      lx = x1;
      ly = y1;
      lz = z1;
      return lx * lx + ly * ly + lz * lz;
  }
  {
    let d = lx * nx + ly * ny + lz * nz;
    d = -d;
    lx += nx * d;
    ly += ny * d;
    lz += nz * d;
    if (0) {
      console.log("d", d.toFixed(6));
      console.log(lx * nx + ly * ny + lz * nz);
    }
  }
  let mul = ((lx ** 2 + ly ** 2) * nz ** 2 + (lx * nx + ly * ny) ** 2) / ((lx ** 2 + ly ** 2) * nz ** 2);
  if (Math.random() > 0.999) {
    console.log(mul.toFixed(4));
  }
  if (0) {
    let odis = dis;
    dis = x1 ** 2 + y1 ** 2 + z1 ** 2;
    if (Math.random() > 0.999) {
      console.log((dis / odis).toFixed(4), mul.toFixed(4));
    }
    mul = 1;
  }
  return dis * mul + planedis * planedis;
}
__name(dist_to_tri_v3_sqr, "dist_to_tri_v3_sqr");
var tri_area_temps = cachering2.fromConstructor(Vector32, 64);
function tri_area(v1, v2, v3) {
  let l1 = v1.vectorDistance(v2);
  let l2 = v2.vectorDistance(v3);
  let l3 = v3.vectorDistance(v1);
  let s = (l1 + l2 + l3) / 2;
  s = s * (s - l1) * (s - l2) * (s - l3);
  s = Math.max(s, 0);
  return Math.sqrt(s);
}
__name(tri_area, "tri_area");
function aabb_overlap_area(pos1, size1, pos2, size2) {
  let r1 = 0, r2 = 0;
  for (let i2 = 0; i2 < 2; i2++) {
    let a1 = pos1[i2], a22 = pos2[i2];
    let b1 = pos1[i2] + size1[i2];
    let b2 = pos2[i2] + size2[i2];
    if (b1 >= a22 && b2 >= a1) {
      let r = Math.abs(a22 - b1);
      r = Math.min(r, Math.abs(a1 - b2));
      if (i2) {
        r2 = r;
      } else {
        r1 = r;
      }
    }
  }
  return r1 * r2;
}
__name(aabb_overlap_area, "aabb_overlap_area");
function aabb_isect_2d(pos1, size1, pos2, size2) {
  let ret2 = 0;
  for (let i2 = 0; i2 < 2; i2++) {
    let a3 = pos1[i2];
    let b = pos1[i2] + size1[i2];
    let c = pos2[i2];
    let d = pos2[i2] + size2[i2];
    if (b >= c && a3 <= d)
      ret2 += 1;
  }
  return ret2 === 2;
}
__name(aabb_isect_2d, "aabb_isect_2d");
;
function aabb_isect_3d(pos1, size1, pos2, size2) {
  let ret2 = 0;
  for (let i2 = 0; i2 < 3; i2++) {
    let a3 = pos1[i2];
    let b = pos1[i2] + size1[i2];
    let c = pos2[i2];
    let d = pos2[i2] + size2[i2];
    if (b >= c && a3 <= d)
      ret2 += 1;
  }
  return ret2 === 3;
}
__name(aabb_isect_3d, "aabb_isect_3d");
var aabb_intersect_vs = cachering2.fromConstructor(Vector2, 32);
var aabb_intersect_rets = new cachering2(() => {
  return {
    pos: new Vector2(),
    size: new Vector2()
  };
}, 512);
function aabb_intersect_2d(pos1, size1, pos2, size2) {
  let v1 = aabb_intersect_vs.next().load(pos1);
  let v2 = aabb_intersect_vs.next().load(pos1).add(size1);
  let v3 = aabb_intersect_vs.next().load(pos2);
  let v4 = aabb_intersect_vs.next().load(pos2).add(size2);
  let min3 = aabb_intersect_vs.next().zero();
  let max3 = aabb_intersect_vs.next().zero();
  let tot = 0;
  for (let i2 = 0; i2 < 2; i2++) {
    if (v2[i2] >= v3[i2] && v1[i2] <= v4[i2]) {
      tot++;
      min3[i2] = Math.max(v3[i2], v1[i2]);
      max3[i2] = Math.min(v2[i2], v4[i2]);
    }
  }
  if (tot !== 2) {
    return void 0;
  }
  let ret2 = aabb_intersect_rets.next();
  ret2.pos.load(min3);
  ret2.size.load(max3).sub(min3);
  return ret2;
}
__name(aabb_intersect_2d, "aabb_intersect_2d");
window.test_aabb_intersect_2d = function() {
  let canvas = document.getElementById("test_canvas");
  if (!canvas) {
    canvas = document.createElement("canvas");
    canvas.setAttribute("id", "test_canvas");
    canvas.g = canvas.getContext("2d");
    document.body.appendChild(canvas);
  }
  canvas.width = ~~(window.innerWidth * devicePixelRatio);
  canvas.height = ~~(window.innerHeight * devicePixelRatio);
  canvas.style.width = canvas.width / devicePixelRatio + "px";
  canvas.style.height = canvas.height / devicePixelRatio + "px";
  canvas.style.position = "absolute";
  canvas.style["z-index"] = "1000";
  let g = canvas.g;
  g.clearRect(0, 0, canvas.width, canvas.height);
  let sz = 800;
  let a1 = new Vector2([Math.random() * sz, Math.random() * sz]).floor();
  let a22 = new Vector2([Math.random() * sz, Math.random() * sz]).floor();
  let b1 = new Vector2([Math.random() * sz, Math.random() * sz]).floor();
  let b2 = new Vector2([Math.random() * sz, Math.random() * sz]).floor();
  let p1 = new Vector2();
  let s1 = new Vector2();
  let p2 = new Vector2();
  let s2 = new Vector2();
  p1.load(a1).min(a22);
  s1.load(a1).max(a22);
  p2.load(b1).min(b2);
  s2.load(b1).max(b2);
  s1.sub(p1);
  s2.sub(p1);
  console.log(p1, s1);
  console.log(p2, s2);
  g.beginPath();
  g.rect(0, 0, canvas.width, canvas.height);
  g.fillStyle = "white";
  g.fill();
  g.beginPath();
  g.rect(p1[0], p1[1], s1[0], s1[1]);
  g.fillStyle = "rgba(255, 100, 75, 1.0)";
  g.fill();
  g.beginPath();
  g.rect(p2[0], p2[1], s2[0], s2[1]);
  g.fillStyle = "rgba(75, 100, 255, 1.0)";
  g.fill();
  let ret2 = aabb_intersect_2d(p1, s1, p2, s2);
  if (ret2) {
    g.beginPath();
    g.rect(ret2.pos[0], ret2.pos[1], ret2.size[0], ret2.size[1]);
    g.fillStyle = "rgba(0, 0, 0, 1.0)";
    g.fill();
  }
  return {
    end: test_aabb_intersect_2d.end,
    timer: test_aabb_intersect_2d.timer
  };
};
test_aabb_intersect_2d.stop = /* @__PURE__ */ __name(function stop() {
  if (test_aabb_intersect_2d._timer) {
    console.log("stopping timer");
    window.clearInterval(test_aabb_intersect_2d._timer);
    test_aabb_intersect_2d._timer = void 0;
  }
}, "stop");
test_aabb_intersect_2d.end = /* @__PURE__ */ __name(function end2() {
  test_aabb_intersect_2d.stop();
  let canvas = document.getElementById("test_canvas");
  if (canvas) {
    canvas.remove();
  }
}, "end");
test_aabb_intersect_2d.timer = /* @__PURE__ */ __name(function timer(rate = 500) {
  if (test_aabb_intersect_2d._timer) {
    window.clearInterval(test_aabb_intersect_2d._timer);
    test_aabb_intersect_2d._timer = void 0;
    console.log("stopping timer");
    return;
  }
  console.log("starting timer");
  test_aabb_intersect_2d._timer = window.setInterval(() => {
    test_aabb_intersect_2d();
  }, rate);
}, "timer");
var aabb_intersect_vs3 = cachering2.fromConstructor(Vector32, 64);
function aabb_intersect_3d(min1, max1, min22, max22) {
  let tot = 0;
  for (let i2 = 0; i2 < 2; i2++) {
    if (max1[i2] >= min22[i2] && min1[i2] <= max22[i2]) {
      tot++;
    }
  }
  if (tot !== 3) {
    return false;
  }
  return true;
}
__name(aabb_intersect_3d, "aabb_intersect_3d");
function aabb_union(a3, b) {
  for (let i2 = 0; i2 < 2; i2++) {
    for (let j2 = 0; j2 < a3[i2].length; j2++) {
      a3[i2][j2] = i2 ? Math.max(a3[i2][j2], b[i2][j2]) : Math.min(a3[i2][j2], b[i2][j2]);
    }
  }
  return a3;
}
__name(aabb_union, "aabb_union");
function aabb_union_2d(pos1, size1, pos2, size2) {
  let v1 = aabb_intersect_vs.next();
  let v2 = aabb_intersect_vs.next();
  let min3 = aabb_intersect_vs.next();
  let max3 = aabb_intersect_vs.next();
  v1.load(pos1).add(size1);
  v2.load(pos2).add(size2);
  min3.load(v1).min(v2);
  max3.load(v1).max(v2);
  max3.sub(min3);
  let ret2 = aabb_intersect_rets.next();
  ret2.pos.load(min3);
  ret2.pos.load(max3);
  return ret2;
}
__name(aabb_union_2d, "aabb_union_2d");
function init_prototype(cls2, proto) {
  for (let k2 in proto) {
    cls2.prototype[k2] = proto[k2];
  }
  return cls2.prototype;
}
__name(init_prototype, "init_prototype");
function inherit2(cls2, parent2, proto) {
  cls2.prototype = Object.create(parent2.prototype);
  for (let k2 in proto) {
    cls2.prototype[k2] = proto[k2];
  }
  return cls2.prototype;
}
__name(inherit2, "inherit");
var set3 = set2;
var $_mh, $_swapt;
var feps = 222e-18;
var COLINEAR = 1;
var LINECROSS = 2;
var COLINEAR_ISECT = 3;
var _cross_vec1 = new Vector32();
var _cross_vec2 = new Vector32();
var SQRT2 = Math.sqrt(2);
var FEPS_DATA = {
  F16: 111e-18,
  F32: 596e-10,
  F64: 488e-6
};
var FEPS = FEPS_DATA.F32;
var FLOAT_MIN = -1e21;
var FLOAT_MAX = 1e22;
var Matrix4UI = Matrix4;
var _static_grp_points4 = new Array(4);
var _static_grp_points8 = new Array(8);
function get_rect_points(p, size) {
  let cs;
  if (p.length === 2) {
    cs = _static_grp_points4;
    cs[0] = p;
    cs[1] = [p[0] + size[0], p[1]];
    cs[2] = [p[0] + size[0], p[1] + size[1]];
    cs[3] = [p[0], p[1] + size[1]];
  } else if (p.length === 3) {
    cs = _static_grp_points8;
    cs[0] = p;
    cs[1] = [p[0] + size[0], p[1], p[2]];
    cs[2] = [p[0] + size[0], p[1] + size[1], p[2]];
    cs[3] = [p[0], p[1] + size[0], p[2]];
    cs[4] = [p[0], p[1], p[2] + size[2]];
    cs[5] = [p[0] + size[0], p[1], p[2] + size[2]];
    cs[6] = [p[0] + size[0], p[1] + size[1], p[2] + size[2]];
    cs[7] = [p[0], p[1] + size[0], p[2] + size[2]];
  } else {
    throw "get_rect_points has no implementation for " + p.length + "-dimensional data";
  }
  return cs;
}
__name(get_rect_points, "get_rect_points");
;
function get_rect_lines(p, size) {
  let ps = get_rect_points(p, size);
  if (p.length === 2) {
    return [[ps[0], ps[1]], [ps[1], ps[2]], [ps[2], ps[3]], [ps[3], ps[0]]];
  } else if (p.length === 3) {
    let l1 = [[ps[0], ps[1]], [ps[1], ps[2]], [ps[2], ps[3]], [ps[3], ps[0]]];
    let l2 = [[ps[4], ps[5]], [ps[5], ps[6]], [ps[6], ps[7]], [ps[7], ps[4]]];
    l1.concat(l2);
    l1.push([ps[0], ps[4]]);
    l1.push([ps[1], ps[5]]);
    l1.push([ps[2], ps[6]]);
    l1.push([ps[3], ps[7]]);
    return l1;
  } else {
    throw "get_rect_points has no implementation for " + p.length + "-dimensional data";
  }
}
__name(get_rect_lines, "get_rect_lines");
;
var $vs_simple_tri_aabb_isect = [0, 0, 0];
function simple_tri_aabb_isect(v1, v2, v3, min3, max3) {
  $vs_simple_tri_aabb_isect[0] = v1;
  $vs_simple_tri_aabb_isect[1] = v2;
  $vs_simple_tri_aabb_isect[2] = v3;
  for (let i2 = 0; i2 < 3; i2++) {
    let isect = true;
    for (let j2 = 0; j2 < 3; j2++) {
      if ($vs_simple_tri_aabb_isect[j2][i2] < min3[i2] || $vs_simple_tri_aabb_isect[j2][i2] >= max3[i2])
        isect = false;
    }
    if (isect)
      return true;
  }
  return false;
}
__name(simple_tri_aabb_isect, "simple_tri_aabb_isect");
;
var MinMax = class _MinMax {
  static {
    __name(this, "MinMax");
  }
  constructor(totaxis) {
    if (totaxis === void 0) {
      totaxis = 1;
    }
    this.totaxis = totaxis;
    if (totaxis !== 1) {
      let cls2;
      switch (totaxis) {
        case 2:
          cls2 = Vector2;
          break;
        case 3:
          cls2 = Vector32;
          break;
        case 4:
          cls2 = Vector4;
          break;
        default:
          cls2 = Array;
          break;
      }
      this._min = new cls2(totaxis);
      this._max = new cls2(totaxis);
      this.min = new cls2(totaxis);
      this.max = new cls2(totaxis);
    } else {
      this.min = this.max = 0;
      this._min = FLOAT_MAX;
      this._max = FLOAT_MIN;
    }
    this.reset();
    this._static_mr_co = new Array(this.totaxis);
    this._static_mr_cs = new Array(this.totaxis * this.totaxis);
  }
  static fromSTRUCT(reader) {
    let ret2 = new _MinMax();
    reader(ret2);
    return ret2;
  }
  load(mm) {
    if (this.totaxis === 1) {
      this.min = mm.min;
      this.max = mm.max;
      this._min = mm.min;
      this._max = mm.max;
    } else {
      this.min = new Vector32(mm.min);
      this.max = new Vector32(mm.max);
      this._min = new Vector32(mm._min);
      this._max = new Vector32(mm._max);
    }
  }
  reset() {
    let totaxis = this.totaxis;
    if (totaxis === 1) {
      this.min = this.max = 0;
      this._min = FLOAT_MAX;
      this._max = FLOAT_MIN;
    } else {
      for (let i2 = 0; i2 < totaxis; i2++) {
        this._min[i2] = FLOAT_MAX;
        this._max[i2] = FLOAT_MIN;
        this.min[i2] = 0;
        this.max[i2] = 0;
      }
    }
  }
  minmax_rect(p, size) {
    let totaxis = this.totaxis;
    let cs = this._static_mr_cs;
    if (totaxis === 2) {
      cs[0] = p;
      cs[1] = [p[0] + size[0], p[1]];
      cs[2] = [p[0] + size[0], p[1] + size[1]];
      cs[3] = [p[0], p[1] + size[1]];
    } else if (totaxis = 3) {
      cs[0] = p;
      cs[1] = [p[0] + size[0], p[1], p[2]];
      cs[2] = [p[0] + size[0], p[1] + size[1], p[2]];
      cs[3] = [p[0], p[1] + size[0], p[2]];
      cs[4] = [p[0], p[1], p[2] + size[2]];
      cs[5] = [p[0] + size[0], p[1], p[2] + size[2]];
      cs[6] = [p[0] + size[0], p[1] + size[1], p[2] + size[2]];
      cs[7] = [p[0], p[1] + size[0], p[2] + size[2]];
    } else {
      throw "Minmax.minmax_rect has no implementation for " + totaxis + "-dimensional data";
    }
    for (let i2 = 0; i2 < cs.length; i2++) {
      this.minmax(cs[i2]);
    }
  }
  minmax(p) {
    let totaxis = this.totaxis;
    if (totaxis === 1) {
      this._min = this.min = Math.min(this._min, p);
      this._max = this.max = Math.max(this._max, p);
    } else if (totaxis === 2) {
      this._min[0] = this.min[0] = Math.min(this._min[0], p[0]);
      this._min[1] = this.min[1] = Math.min(this._min[1], p[1]);
      this._max[0] = this.max[0] = Math.max(this._max[0], p[0]);
      this._max[1] = this.max[1] = Math.max(this._max[1], p[1]);
    } else if (totaxis === 3) {
      this._min[0] = this.min[0] = Math.min(this._min[0], p[0]);
      this._min[1] = this.min[1] = Math.min(this._min[1], p[1]);
      this._min[2] = this.min[2] = Math.min(this._min[2], p[2]);
      this._max[0] = this.max[0] = Math.max(this._max[0], p[0]);
      this._max[1] = this.max[1] = Math.max(this._max[1], p[1]);
      this._max[2] = this.max[2] = Math.max(this._max[2], p[2]);
    } else {
      for (let i2 = 0; i2 < totaxis; i2++) {
        this._min[i2] = this.min[i2] = Math.min(this._min[i2], p[i2]);
        this._max[i2] = this.max[i2] = Math.max(this._max[i2], p[i2]);
      }
    }
  }
};
;
MinMax.STRUCT = "\n  math.MinMax {\n    min     : vec3;\n    max     : vec3;\n    _min    : vec3;\n    _max    : vec3;\n    totaxis : int;\n  }\n";
function winding_axis(a3, b, c, up_axis) {
  let xaxis = (up_axis + 1) % 3;
  let yaxis = (up_axis + 2) % 3;
  let x1 = a3[xaxis], y1 = a3[yaxis];
  let x2 = b[xaxis], y2 = b[yaxis];
  let x3 = c[xaxis], y3 = c[yaxis];
  let dx1 = x1 - x2, dy1 = y1 - y2;
  let dx2 = x3 - x2, dy2 = y3 - y2;
  let f3 = dx1 * dy2 - dy1 * dx2;
  return f3 >= 0;
}
__name(winding_axis, "winding_axis");
function winding(a3, b, c, zero_z = false, tol = 0) {
  let dx1 = b[0] - a3[0];
  let dy1 = b[1] - a3[1];
  let dx2 = c[0] - a3[0];
  let dy2 = c[1] - a3[1];
  return dx1 * dy2 - dy1 * dx2 > tol;
}
__name(winding, "winding");
function inrect_2d(p, pos, size) {
  if (p === void 0 || pos === void 0 || size === void 0) {
    console.trace();
    console.log("Bad paramters to inrect_2d()");
    console.log("p: ", p, ", pos: ", pos, ", size: ", size);
    return false;
  }
  return p[0] >= pos[0] && p[0] <= pos[0] + size[0] && p[1] >= pos[1] && p[1] <= pos[1] + size[1];
}
__name(inrect_2d, "inrect_2d");
var $ps_aabb_isect_line_2d = [new Vector2(), new Vector2(), new Vector2(), new Vector2()];
function aabb_isect_line_2d(v1, v2, min3, max3) {
  if (point_in_aabb_2d(v1, min3, max3) || point_in_aabb(v2, min3, max3)) {
    return true;
  }
  let lines = $ps_aabb_isect_line_2d;
  lines[0][0] = min3[0];
  lines[0][1] = min3[1];
  lines[1][0] = min3[0];
  lines[1][1] = max3[1];
  lines[2][0] = max3[0];
  lines[2][1] = max3[1];
  lines[3][0] = max3[0];
  lines[3][1] = min3[1];
  for (let i2 = 0; i2 < 4; i2++) {
    if (line_line_cross(v1, v2, lines[i2], lines[(i2 + 1) % 4])) {
      return true;
    }
  }
  return false;
}
__name(aabb_isect_line_2d, "aabb_isect_line_2d");
function expand_rect2d(pos, size, margin) {
  pos[0] -= Math.floor(margin[0]);
  pos[1] -= Math.floor(margin[1]);
  size[0] += Math.floor(margin[0] * 2);
  size[1] += Math.floor(margin[1] * 2);
}
__name(expand_rect2d, "expand_rect2d");
;
function expand_line(l, margin) {
  let c = new Vector32();
  c.add(l[0]);
  c.add(l[1]);
  c.mulScalar(0.5);
  l[0].sub(c);
  l[1].sub(c);
  let l1 = l[0].vectorLength();
  let l2 = l[1].vectorLength();
  l[0].normalize();
  l[1].normalize();
  l[0].mulScalar(margin + l1);
  l[1].mulScalar(margin + l2);
  l[0].add(c);
  l[1].add(c);
  return l;
}
__name(expand_line, "expand_line");
function colinear(a3, b, c, limit = 22e-17, distLimit = 1e-5 ** 2) {
  let t1 = _cross_vec1;
  let t2 = _cross_vec2;
  let axes = a3.length;
  for (let i2 = 0; i2 < axes; i2++) {
    t1[i2] = b[i2] - a3[i2];
    t2[i2] = c[i2] - a3[i2];
  }
  for (let i2 = axes; i2 < 3; i2++) {
    t1[i2] = t2[i2] = 0;
  }
  if (t1.dot(t1) <= distLimit || t2.dot(t2) <= distLimit) {
    return true;
  }
  t1.normalize();
  t2.normalize();
  t1.cross(t2);
  return t1.dot(t1) <= limit;
}
__name(colinear, "colinear");
function colinear2d(a3, b, c, limit = 1e-5, precise = false) {
  let dx1 = a3[0] - b[0];
  let dy1 = a3[1] - b[1];
  let dx2 = c[0] - b[0];
  let dy2 = c[1] - b[1];
  let det = Math.abs(dx1 * dy2 - dy1 * dx2);
  if (precise) {
    let len = (dx1 ** 2 + dy1 ** 2) ** 0.5 + (dx2 ** 2 + dy2 ** 2) ** 0.5;
    if (len <= 1e-5) {
      return true;
    }
    det /= len;
  }
  return det <= limit;
}
__name(colinear2d, "colinear2d");
var _llc_l1 = [new Vector32(), new Vector32()];
var _llc_l2 = [new Vector32(), new Vector32()];
var _llc_l3 = [new Vector32(), new Vector32()];
var _llc_l4 = [new Vector32(), new Vector32()];
var lli_v1 = new Vector32(), lli_v2 = new Vector32(), lli_v3 = new Vector32(), lli_v4 = new Vector32();
var _zero_cn = new Vector32();
var _tmps_cn = cachering2.fromConstructor(Vector32, 64);
var _rets_cn = cachering2.fromConstructor(Vector32, 64);
function corner_normal(vec1, vec2, width) {
  let ret2 = _rets_cn.next().zero();
  let vec = _tmps_cn.next().zero();
  vec.load(vec1).add(vec2).normalize();
  if (Math.abs(vec1.normalizedDot(vec2)) > 0.9999) {
    if (vec1.dot(vec2) > 1e-4) {
      ret2.load(vec1).add(vec2).normalize();
    } else {
      ret2.load(vec1).normalize();
    }
    ret2.mulScalar(width);
    return ret2;
  } else {
  }
  vec1 = _tmps_cn.next().load(vec1).mulScalar(width);
  vec2 = _tmps_cn.next().load(vec2).mulScalar(width);
  let p1 = _tmps_cn.next().load(vec1);
  let p2 = _tmps_cn.next().load(vec2);
  vec1.addFac(vec1, 0.01);
  vec2.addFac(vec2, 0.01);
  let sc = 1;
  p1[0] += vec1[1] * sc;
  p1[1] += -vec1[0] * sc;
  p2[0] += -vec2[1] * sc;
  p2[1] += vec2[0] * sc;
  let p = line_line_isect(vec1, p1, vec2, p2, false);
  if (p === void 0 || p === COLINEAR_ISECT || p.dot(p) < 1e-6) {
    ret2.load(vec1).add(vec2).normalize().mulScalar(width);
  } else {
    ret2.load(p);
    if (vec.dot(vec) > 0 && vec.dot(ret2) < 0) {
      ret2.load(vec).mulScalar(width);
    }
  }
  return ret2;
}
__name(corner_normal, "corner_normal");
function line_line_isect(v1, v2, v3, v4, test_segment = true) {
  if (test_segment && !line_line_cross(v1, v2, v3, v4)) {
    return void 0;
  }
  let xa1 = v1[0], xa2 = v2[0], ya1 = v1[1], ya2 = v2[1];
  let xb1 = v3[0], xb2 = v4[0], yb1 = v3[1], yb2 = v4[1];
  let div = (xa1 - xa2) * (yb1 - yb2) - (xb1 - xb2) * (ya1 - ya2);
  if (Math.abs(div) < 1e-8) {
    return COLINEAR_ISECT;
  } else {
    let t1 = -((ya1 - yb2) * xb1 - (yb1 - yb2) * xa1 - (ya1 - yb1) * xb2) / div;
    return lli_v1.load(v1).interp(v2, t1);
  }
}
__name(line_line_isect, "line_line_isect");
function line_line_cross(a3, b, c, d) {
  let w1 = winding(a3, b, c);
  let w2 = winding(c, a3, d);
  let w3 = winding(a3, b, d);
  let w4 = winding(c, b, d);
  return w1 === w2 && w3 === w4 && w1 !== w3;
}
__name(line_line_cross, "line_line_cross");
;
var _asi_v1 = new Vector32();
var _asi_v2 = new Vector32();
var _asi_v3 = new Vector32();
var _asi_v4 = new Vector32();
var _asi_v5 = new Vector32();
var _asi_v6 = new Vector32();
function point_in_aabb_2d(p, min3, max3) {
  return p[0] >= min3[0] && p[0] <= max3[0] && p[1] >= min3[1] && p[1] <= max3[1];
}
__name(point_in_aabb_2d, "point_in_aabb_2d");
var _asi2d_v1 = new Vector2();
var _asi2d_v2 = new Vector2();
var _asi2d_v3 = new Vector2();
var _asi2d_v4 = new Vector2();
var _asi2d_v5 = new Vector2();
var _asi2d_v6 = new Vector2();
function aabb_sphere_isect_2d(p, r, min3, max3) {
  let v1 = _asi2d_v1, v2 = _asi2d_v2, v3 = _asi2d_v3, mvec = _asi2d_v4;
  let v4 = _asi2d_v5;
  p = _asi2d_v6.load(p);
  v1.load(p);
  v2.load(p);
  min3 = _asi_v5.load(min3);
  max3 = _asi_v6.load(max3);
  mvec.load(max3).sub(min3).normalize().mulScalar(r + 1e-4);
  v1.sub(mvec);
  v2.add(mvec);
  v3.load(p);
  let ret2 = point_in_aabb_2d(v1, min3, max3) || point_in_aabb_2d(v2, min3, max3) || point_in_aabb_2d(v3, min3, max3);
  if (ret2)
    return ret2;
  v1.load(min3);
  v2[0] = min3[0];
  v2[1] = max3[1];
  ret2 = ret2 || dist_to_line_2d(p, v1, v2) < r;
  v1.load(max3);
  v2[0] = max3[0];
  v2[1] = max3[1];
  ret2 = ret2 || dist_to_line_2d(p, v1, v2) < r;
  v1.load(max3);
  v2[0] = max3[0];
  v2[1] = min3[1];
  ret2 = ret2 || dist_to_line_2d(p, v1, v2) < r;
  v1.load(max3);
  v2[0] = min3[0];
  v2[1] = min3[1];
  ret2 = ret2 || dist_to_line_2d(p, v1, v2) < r;
  return ret2;
}
__name(aabb_sphere_isect_2d, "aabb_sphere_isect_2d");
;
function point_in_aabb(p, min3, max3) {
  return p[0] >= min3[0] && p[0] <= max3[0] && p[1] >= min3[1] && p[1] <= max3[1] && p[2] >= min3[2] && p[2] <= max3[2];
}
__name(point_in_aabb, "point_in_aabb");
var asi_rect = new Array(8);
for (let i2 = 0; i2 < 8; i2++) {
  asi_rect[i2] = new Vector32();
}
var aabb_sphere_isect_vs = cachering2.fromConstructor(Vector32, 64);
function aabb_sphere_isect(p, r, min3, max3) {
  {
    let p1 = aabb_sphere_isect_vs.next().load(p);
    let min1 = aabb_sphere_isect_vs.next().load(min3);
    let max1 = aabb_sphere_isect_vs.next().load(max3);
    if (p.length === 2) {
      p1[2] = 0;
    }
    if (min1.length === 2) {
      min1[2] = 0;
    }
    if (max3.length === 2) {
      max1[2] = 0;
    }
    p = p1;
    min3 = min1;
    max3 = max1;
  }
  let cent = aabb_sphere_isect_vs.next().load(min3).interp(max3, 0.5);
  p.sub(cent);
  min3.sub(cent);
  max3.sub(cent);
  r *= r;
  let isect = point_in_aabb(p, min3, max3);
  if (isect) {
    return true;
  }
  let rect = asi_rect;
  rect[0].loadXYZ(min3[0], min3[1], min3[2]);
  rect[1].loadXYZ(min3[0], max3[1], min3[2]);
  rect[2].loadXYZ(max3[0], max3[1], min3[2]);
  rect[3].loadXYZ(max3[0], min3[1], min3[2]);
  rect[4].loadXYZ(min3[0], min3[1], max3[2]);
  rect[5].loadXYZ(min3[0], max3[1], max3[2]);
  rect[6].loadXYZ(max3[0], max3[1], max3[2]);
  rect[7].loadXYZ(max3[0], min3[1], max3[2]);
  for (let i2 = 0; i2 < 8; i2++) {
    if (p.vectorDistanceSqr(rect[i2]) < r) {
      return true;
    }
  }
  let p2 = aabb_sphere_isect_vs.next().load(p);
  for (let i2 = 0; i2 < 3; i2++) {
    p2.load(p);
    let i22 = (i2 + 1) % 3;
    let i3 = (i2 + 2) % 3;
    p2[i2] = p2[i2] < 0 ? min3[i2] : max3[i2];
    p2[i22] = Math.min(Math.max(p2[i22], min3[i22]), max3[i22]);
    p2[i3] = Math.min(Math.max(p2[i3], min3[i3]), max3[i3]);
    let isect2 = p2.vectorDistanceSqr(p) <= r;
    if (isect2) {
      return true;
    }
  }
  return false;
}
__name(aabb_sphere_isect, "aabb_sphere_isect");
;
function aabb_sphere_dist(p, min3, max3) {
  {
    let p1 = aabb_sphere_isect_vs.next().load(p);
    let min1 = aabb_sphere_isect_vs.next().load(min3);
    let max1 = aabb_sphere_isect_vs.next().load(max3);
    if (p.length === 2) {
      p1[2] = 0;
    }
    if (min1.length === 2) {
      min1[2] = 0;
    }
    if (max3.length === 2) {
      max1[2] = 0;
    }
    p = p1;
    min3 = min1;
    max3 = max1;
  }
  let cent = aabb_sphere_isect_vs.next().load(min3).interp(max3, 0.5);
  p.sub(cent);
  min3.sub(cent);
  max3.sub(cent);
  let isect = point_in_aabb(p, min3, max3);
  if (isect) {
    return 0;
  }
  let rect = asi_rect;
  rect[0].loadXYZ(min3[0], min3[1], min3[2]);
  rect[1].loadXYZ(min3[0], max3[1], min3[2]);
  rect[2].loadXYZ(max3[0], max3[1], min3[2]);
  rect[3].loadXYZ(max3[0], min3[1], min3[2]);
  rect[4].loadXYZ(min3[0], min3[1], max3[2]);
  rect[5].loadXYZ(min3[0], max3[1], max3[2]);
  rect[6].loadXYZ(max3[0], max3[1], max3[2]);
  rect[7].loadXYZ(max3[0], min3[1], max3[2]);
  let mindis;
  for (let i2 = 0; i2 < 8; i2++) {
    let dis = p.vectorDistanceSqr(rect[i2]);
    if (mindis === void 0 || dis < mindis) {
      mindis = dis;
    }
  }
  let p2 = aabb_sphere_isect_vs.next().load(p);
  for (let i2 = 0; i2 < 3; i2++) {
    p2.load(p);
    let i22 = (i2 + 1) % 3;
    let i3 = (i2 + 2) % 3;
    p2[i2] = p2[i2] < 0 ? min3[i2] : max3[i2];
    p2[i22] = Math.min(Math.max(p2[i22], min3[i22]), max3[i22]);
    p2[i3] = Math.min(Math.max(p2[i3], min3[i3]), max3[i3]);
    let dis = p2.vectorDistanceSqr(p);
    if (mindis === void 0 || dis < mindis) {
      mindis = dis;
    }
  }
  return mindis === void 0 ? 1e17 : mindis;
}
__name(aabb_sphere_dist, "aabb_sphere_dist");
;
function point_in_tri(p, v1, v2, v3) {
  let w1 = winding(p, v1, v2);
  let w2 = winding(p, v2, v3);
  let w3 = winding(p, v3, v1);
  return w1 === w2 && w2 === w3;
}
__name(point_in_tri, "point_in_tri");
;
function convex_quad(v1, v2, v3, v4) {
  return line_line_cross([v1, v3], [v2, v4]);
}
__name(convex_quad, "convex_quad");
;
var $e1_normal_tri = new Vector32();
var $e3_normal_tri = new Vector32();
var $e2_normal_tri = new Vector32();
function isNum(f3) {
  let ok = typeof f3 === "number";
  ok = ok && !isNaN(f3) && isFinite(f3);
  return ok;
}
__name(isNum, "isNum");
var _normal_tri_rets = cachering2.fromConstructor(Vector32, 64);
function normal_tri(v1, v2, v3) {
  let x1 = v2[0] - v1[0];
  let y1 = v2[1] - v1[1];
  let z1 = v2[2] - v1[2];
  let x2 = v3[0] - v1[0];
  let y2 = v3[1] - v1[1];
  let z2 = v3[2] - v1[2];
  if (!isNum(x1 + y1 + z1 + z2 + y2 + z2)) {
    throw new Error("NaN in normal_tri");
  }
  let x3, y3, z3;
  x1 = v2[0] - v1[0];
  y1 = v2[1] - v1[1];
  z1 = v2[2] - v1[2];
  x2 = v3[0] - v1[0];
  y2 = v3[1] - v1[1];
  z2 = v3[2] - v1[2];
  x3 = y1 * z2 - z1 * y2;
  y3 = z1 * x2 - x1 * z2;
  z3 = x1 * y2 - y1 * x2;
  let len = Math.sqrt(x3 * x3 + y3 * y3 + z3 * z3);
  if (len > 1e-5)
    len = 1 / len;
  x3 *= len;
  y3 *= len;
  z3 *= len;
  let n = _normal_tri_rets.next();
  if (!isNum(x3 + y3 + z3)) {
    throw new Error("NaN!");
  }
  n[0] = x3;
  n[1] = y3;
  n[2] = z3;
  return n;
}
__name(normal_tri, "normal_tri");
;
var $n2_normal_quad = new Vector32();
var _q1 = new Vector32(), _q2 = new Vector32(), _q3 = new Vector32();
function normal_quad(v1, v2, v3, v4) {
  _q1.load(normal_tri(v1, v2, v3));
  _q2.load(normal_tri(v2, v3, v4));
  _q1.add(_q2).normalize();
  return _q1;
}
__name(normal_quad, "normal_quad");
function normal_quad_old(v1, v2, v3, v4) {
  let n = normal_tri(v1, v2, v3);
  $n2_normal_quad[0] = n[0];
  $n2_normal_quad[1] = n[1];
  $n2_normal_quad[2] = n[2];
  n = normal_tri(v1, v3, v4);
  $n2_normal_quad[0] = $n2_normal_quad[0] + n[0];
  $n2_normal_quad[1] = $n2_normal_quad[1] + n[1];
  $n2_normal_quad[2] = $n2_normal_quad[2] + n[2];
  let _len = Math.sqrt($n2_normal_quad[0] * $n2_normal_quad[0] + $n2_normal_quad[1] * $n2_normal_quad[1] + $n2_normal_quad[2] * $n2_normal_quad[2]);
  if (_len > 1e-5)
    _len = 1 / _len;
  $n2_normal_quad[0] *= _len;
  $n2_normal_quad[1] *= _len;
  $n2_normal_quad[2] *= _len;
  return $n2_normal_quad;
}
__name(normal_quad_old, "normal_quad_old");
;
var _li_vi = new Vector32();
function line_isect(v1, v2, v3, v4, calc_t) {
  if (calc_t === void 0) {
    calc_t = false;
  }
  let div = (v2[0] - v1[0]) * (v4[1] - v3[1]) - (v2[1] - v1[1]) * (v4[0] - v3[0]);
  if (div === 0)
    return [new Vector32(), COLINEAR, 0];
  let vi = _li_vi;
  vi[0] = 0;
  vi[1] = 0;
  vi[2] = 0;
  vi[0] = ((v3[0] - v4[0]) * (v1[0] * v2[1] - v1[1] * v2[0]) - (v1[0] - v2[0]) * (v3[0] * v4[1] - v3[1] * v4[0])) / div;
  vi[1] = ((v3[1] - v4[1]) * (v1[0] * v2[1] - v1[1] * v2[0]) - (v1[1] - v2[1]) * (v3[0] * v4[1] - v3[1] * v4[0])) / div;
  if (calc_t || v1.length === 3) {
    let n1 = new Vector2(v2).sub(v1);
    let n2 = new Vector2(vi).sub(v1);
    let t = n2.vectorLength() / n1.vectorLength();
    n1.normalize();
    n2.normalize();
    if (n1.dot(n2) < 0) {
      t = -t;
    }
    if (v1.length === 3) {
      vi[2] = v1[2] + (v2[2] - v1[2]) * t;
    }
    return [vi, LINECROSS, t];
  }
  return [vi, LINECROSS];
}
__name(line_isect, "line_isect");
;
var dt2l_v1 = new Vector2();
var dt2l_v2 = new Vector2();
var dt2l_v3 = new Vector2();
var dt2l_v4 = new Vector2();
var dt2l_v5 = new Vector2();
function dist_to_line_2d(p, v1, v2, clip2 = true, closest_co_out = void 0, t_out = void 0) {
  v1 = dt2l_v4.load(v1);
  v2 = dt2l_v5.load(v2);
  let n = dt2l_v1;
  let vec = dt2l_v3;
  n.load(v2).sub(v1).normalize();
  vec.load(p).sub(v1);
  let t = vec.dot(n);
  if (clip2) {
    t = Math.min(Math.max(t, 0), v1.vectorDistance(v2));
  }
  n.mulScalar(t).add(v1);
  if (closest_co_out) {
    closest_co_out[0] = n[0];
    closest_co_out[1] = n[1];
  }
  if (t_out !== void 0) {
    t_out = t;
  }
  return n.vectorDistance(p);
}
__name(dist_to_line_2d, "dist_to_line_2d");
var dt3l_v1 = new Vector32();
var dt3l_v2 = new Vector32();
var dt3l_v3 = new Vector32();
var dt3l_v4 = new Vector32();
var dt3l_v5 = new Vector32();
function dist_to_line_sqr(p, v1, v2, clip2 = true) {
  let px = p[0] - v1[0];
  let py = p[1] - v1[1];
  let pz = p.length < 3 ? 0 : p[2] - v1[2];
  pz = pz === void 0 ? 0 : pz;
  let v2x = v2[0] - v1[0];
  let v2y = v2[1] - v1[1];
  let v2z = v2.length < 3 ? 0 : v2[2] - v1[2];
  let len = v2x * v2x + v2y * v2y + v2z * v2z;
  if (len === 0) {
    return Math.sqrt(px * px + py * py + pz * pz);
  }
  let len2 = 1 / len;
  v2x *= len2;
  v2y *= len2;
  v2z *= len2;
  let t = px * v2x + py * v2y + pz * v2z;
  if (clip2) {
    t = Math.min(Math.max(t, 0), len);
  }
  v2x *= t;
  v2y *= t;
  v2z *= t;
  return (v2x - px) * (v2x - px) + (v2y - py) * (v2y - py) + (v2z - pz) * (v2z - pz);
}
__name(dist_to_line_sqr, "dist_to_line_sqr");
function dist_to_line(p, v1, v2, clip2 = true) {
  return Math.sqrt(dist_to_line_sqr(p, v1, v2, clip2));
}
__name(dist_to_line, "dist_to_line");
var _cplw_vs4 = cachering2.fromConstructor(Vector4, 64);
var _cplw_vs3 = cachering2.fromConstructor(Vector32, 64);
var _cplw_vs2 = cachering2.fromConstructor(Vector2, 64);
function wclip(x1, x2, w1, w2, near) {
  let r1 = near * w1 - x1;
  let r2 = (w1 - w2) * near - (x1 - x2);
  if (r2 === 0) return 0;
  return r1 / r2;
}
__name(wclip, "wclip");
function clip(a3, b, znear) {
  if (a3 - b === 0) return 0;
  return (a3 - znear) / (a3 - b);
}
__name(clip, "clip");
function clip_line_w(_v1, _v2, znear, zfar) {
  let v1 = _cplw_vs4.next().load(_v1);
  let v2 = _cplw_vs4.next().load(_v2);
  if (v1[2] < 1 && v2[2] < 1)
    return false;
  function doclip1(v12, v22, axis) {
    if (v12[axis] / v12[3] < -1) {
      let t = wclip(v12[axis], v22[axis], v12[3], v22[3], -1);
      v12.interp(v22, t);
    } else if (v12[axis] / v12[3] > 1) {
      let t = wclip(v12[axis], v22[axis], v12[3], v22[3], 1);
      v12.interp(v22, t);
    }
  }
  __name(doclip1, "doclip1");
  function doclip(v12, v22, axis) {
    doclip1(v12, v22, axis);
    doclip1(v22, v12, axis);
  }
  __name(doclip, "doclip");
  function dozclip(v12, v22) {
    if (v12[2] < 1) {
      let t = clip(v12[2], v22[2], 1);
      v12.interp(v22, t);
    } else if (v22[2] < 1) {
      let t = clip(v22[2], v12[2], 1);
      v22.interp(v12, t);
    }
  }
  __name(dozclip, "dozclip");
  dozclip(v1, v2, 1);
  doclip(v1, v2, 0);
  doclip(v1, v2, 1);
  for (let i2 = 0; i2 < 4; i2++) {
    _v1[i2] = v1[i2];
    _v2[i2] = v2[i2];
  }
  return !(v1[0] / v1[3] === v2[0] / v2[3] || v1[1] / v2[3] === v2[1] / v2[3]);
}
__name(clip_line_w, "clip_line_w");
;
var _closest_point_on_line_cache = cachering2.fromConstructor(Vector32, 64);
var _closest_point_rets = new cachering2(function() {
  return [0, 0];
}, 64);
var _closest_tmps = [new Vector32(), new Vector32(), new Vector32()];
function closest_point_on_line(p, v1, v2, clip2 = true) {
  let l1 = _closest_tmps[0], l2 = _closest_tmps[1];
  let len;
  l1.load(v2).sub(v1);
  if (clip2) {
    len = l1.vectorLength();
  }
  l1.normalize();
  l2.load(p).sub(v1);
  let t = l2.dot(l1);
  if (clip2) {
    t = t < 0 ? 0 : t;
    t = t > len ? len : t;
  }
  let co = _closest_point_on_line_cache.next();
  co.load(l1).mulScalar(t).add(v1);
  let ret2 = _closest_point_rets.next();
  ret2[0] = co;
  ret2[1] = t;
  return ret2;
}
__name(closest_point_on_line, "closest_point_on_line");
var _circ_from_line_tan_vs = cachering2.fromConstructor(Vector32, 32);
var _circ_from_line_tan_ret = new cachering2(function() {
  return [new Vector32(), 0];
}, 64);
function circ_from_line_tan(a3, b, t) {
  let p1 = _circ_from_line_tan_vs.next();
  let t2 = _circ_from_line_tan_vs.next();
  let n1 = _circ_from_line_tan_vs.next();
  p1.load(a3).sub(b);
  t2.load(t).normalize();
  n1.load(p1).normalize().cross(t2).cross(t2).normalize();
  let ax = p1[0], ay = p1[1], az = p1[2], nx = n1[0], ny = n1[1], nz = n1[2];
  let r = -(ax * ax + ay * ay + az * az);
  let div = 2 * (ax * nx + ay * ny + az * nz);
  if (Math.abs(div) > 1e-6) {
    r /= div;
  } else {
    r = 1e6;
  }
  let ret2 = _circ_from_line_tan_ret.next();
  ret2[0].load(n1).mulScalar(r).add(a3);
  ret2[1] = r;
  return ret2;
}
__name(circ_from_line_tan, "circ_from_line_tan");
var _circ_from_line_tan2d_vs = cachering2.fromConstructor(Vector32, 32);
var _circ_from_line_tan2d_ret = new cachering2(function() {
  return [new Vector2(), 0];
}, 64);
function circ_from_line_tan_2d(a3, b, t) {
  a3 = _circ_from_line_tan2d_vs.next().load(a3);
  b = _circ_from_line_tan2d_vs.next().load(b);
  t = _circ_from_line_tan2d_vs.next().load(t);
  a3[2] = b[2] = t[2] = 0;
  let p1 = _circ_from_line_tan2d_vs.next();
  let t2 = _circ_from_line_tan2d_vs.next();
  let n1 = _circ_from_line_tan2d_vs.next();
  p1.load(a3).sub(b);
  t2.load(t).normalize();
  n1.load(p1).normalize().cross(t2).cross(t2).normalize();
  if (1) {
    let cx, cy, r;
    let x1 = a3[0], y1 = a3[1];
    let x2 = b[0], y2 = b[1];
    let tanx1 = t[0], tany1 = t[1];
    let div = 4 * ((x1 - x2) * tany1 - (y1 - y2) * tanx1) ** 2;
    let div2 = 2 * (x1 - x2) * tany1 - 2 * (y1 - y2) * tanx1;
    if (Math.abs(div) < 1e-4 || Math.abs(div2) < 1e-4) {
      let ret3 = _circ_from_line_tan2d_ret.next();
      ret3[0].load(a3).interp(b, 0.5);
      let dx = a3[1] - b[1];
      let dy = b[0] - a3[0];
      r = 1e6;
      ret3[0][0] += dx * r;
      ret3[0][1] += dy * r;
      ret3[1] = r;
      return ret3;
    }
    cx = (((x1 + x2) * (x1 - x2) - (y1 - y2) ** 2) * tany1 - 2 * (y1 - y2) * tanx1 * x1) / div2;
    cy = (-((y1 + y2) * (y1 - y2) - x2 ** 2 - (x1 - 2 * x2) * x1) * tanx1 + 2 * (x1 - x2) * tany1 * y1) / div2;
    r = ((y1 - y2) ** 2 + x2 ** 2 + (x1 - 2 * x2) * x1) ** 2 * (tanx1 ** 2 + tany1 ** 2) / div;
    let midx = a3[0] * 0.5 + b[0] * 0.5;
    let midy = a3[1] * 0.5 + b[1] * 0.5;
    cx = 2 * midx - cx;
    cy = 2 * midy - cy;
    let ret2 = _circ_from_line_tan2d_ret.next();
    ret2[0].loadXY(cx, cy);
    ret2[1] = Math.sqrt(r);
    return ret2;
  } else {
    let ax = p1[0], ay = p1[1], az = p1[2], nx = n1[0], ny = n1[1], nz = n1[2];
    let r = -(ax * ax + ay * ay + az * az);
    let div = 2 * (ax * nx + ay * ny + az * nz);
    if (Math.abs(div) > 1e-6) {
      r /= div;
    } else {
      r = 1e6;
    }
    let ret2 = _circ_from_line_tan2d_ret.next();
    ret2[0].load(n1).mulScalar(r).add(a3);
    ret2[1] = r;
    return ret2;
  }
  return ret;
}
__name(circ_from_line_tan_2d, "circ_from_line_tan_2d");
var _gtc_e1 = new Vector32();
var _gtc_e2 = new Vector32();
var _gtc_e3 = new Vector32();
var _gtc_p1 = new Vector32();
var _gtc_p2 = new Vector32();
var _gtc_v1 = new Vector32();
var _gtc_v2 = new Vector32();
var _gtc_p12 = new Vector32();
var _gtc_p22 = new Vector32();
var _get_tri_circ_ret = new cachering2(function() {
  return [0, 0];
});
function get_tri_circ(a3, b, c) {
  let v1 = _gtc_v1;
  let v2 = _gtc_v2;
  let e1 = _gtc_e1;
  let e2 = _gtc_e2;
  let e3 = _gtc_e3;
  let p1 = _gtc_p1;
  let p2 = _gtc_p2;
  for (let i2 = 0; i2 < 3; i2++) {
    e1[i2] = b[i2] - a3[i2];
    e2[i2] = c[i2] - b[i2];
    e3[i2] = a3[i2] - c[i2];
  }
  for (let i2 = 0; i2 < 3; i2++) {
    p1[i2] = (a3[i2] + b[i2]) * 0.5;
    p2[i2] = (c[i2] + b[i2]) * 0.5;
  }
  e1.normalize();
  v1[0] = -e1[1];
  v1[1] = e1[0];
  v1[2] = e1[2];
  v2[0] = -e2[1];
  v2[1] = e2[0];
  v2[2] = e2[2];
  v1.normalize();
  v2.normalize();
  let cent;
  let type;
  for (let i2 = 0; i2 < 3; i2++) {
    _gtc_p12[i2] = p1[i2] + v1[i2];
    _gtc_p22[i2] = p2[i2] + v2[i2];
  }
  let isect = line_isect(p1, _gtc_p12, p2, _gtc_p22);
  cent = isect[0];
  type = isect[1];
  e1.load(a3);
  e2.load(b);
  e3.load(c);
  let r = e1.sub(cent).vectorLength();
  if (r < feps)
    r = e2.sub(cent).vectorLength();
  if (r < feps)
    r = e3.sub(cent).vectorLength();
  let ret2 = _get_tri_circ_ret.next();
  ret2[0] = cent;
  ret2[1] = r;
  return ret2;
}
__name(get_tri_circ, "get_tri_circ");
;
function gen_circle(m, origin, r, stfeps) {
  let pi2 = Math.PI;
  let f3 = -pi2 / 2;
  let df = pi2 * 2 / stfeps;
  let verts = new Array();
  for (let i2 = 0; i2 < stfeps; i2++) {
    let x = origin[0] + r * Math.sin(f3);
    let y = origin[1] + r * Math.cos(f3);
    let v = m.make_vert(new Vector32([x, y, origin[2]]));
    verts.push(v);
    f3 += df;
  }
  for (let i2 = 0; i2 < verts.length; i2++) {
    let v1 = verts[i2];
    let v2 = verts[(i2 + 1) % verts.length];
    m.make_edge(v1, v2);
  }
  return verts;
}
__name(gen_circle, "gen_circle");
;
var cos3 = Math.cos;
var sin3 = Math.sin;
function rot2d(v1, A, axis) {
  let x = v1[0];
  let y = v1[1];
  if (axis === 1) {
    v1[0] = x * cos3(A) + y * sin3(A);
    v1[2] = y * cos3(A) - x * sin3(A);
  } else {
    v1[0] = x * cos3(A) - y * sin3(A);
    v1[1] = y * cos3(A) + x * sin3(A);
  }
}
__name(rot2d, "rot2d");
function makeCircleMesh(gl, radius, stfeps) {
  let mesh = new Mesh();
  let verts1 = gen_circle(mesh, new Vector32(), radius, stfeps);
  let verts2 = gen_circle(mesh, new Vector32(), radius / 1.75, stfeps);
  mesh.make_face_complex([verts1, verts2]);
  return mesh;
}
__name(makeCircleMesh, "makeCircleMesh");
;
function minmax_verts(verts) {
  let min3 = new Vector32([1e12, 1e12, 1e12]);
  let max3 = new Vector32([-1e12, -1e12, -1e12]);
  let __iter_v = __get_iter(verts);
  let v;
  while (1) {
    let __ival_v = __iter_v.next();
    if (__ival_v.done) {
      break;
    }
    v = __ival_v.value;
    for (let i2 = 0; i2 < 3; i2++) {
      min3[i2] = Math.min(min3[i2], v.co[i2]);
      max3[i2] = Math.max(max3[i2], v.co[i2]);
    }
  }
  return [min3, max3];
}
__name(minmax_verts, "minmax_verts");
;
function unproject(vec, ipers, iview) {
  let newvec = new Vector32(vec);
  newvec.multVecMatrix(ipers);
  newvec.multVecMatrix(iview);
  return newvec;
}
__name(unproject, "unproject");
;
function project(vec, pers, view) {
  let newvec = new Vector32(vec);
  newvec.multVecMatrix(pers);
  newvec.multVecMatrix(view);
  return newvec;
}
__name(project, "project");
;
var _sh_minv = new Vector32();
var _sh_maxv = new Vector32();
var _sh_start = [];
var _sh_end = [];
var static_cent_gbw = new Vector32();
function get_boundary_winding(points) {
  let cent = static_cent_gbw.zero();
  if (points.length === 0)
    return false;
  for (let i2 = 0; i2 < points.length; i2++) {
    cent.add(points[i2]);
  }
  cent.divideScalar(points.length);
  let w = 0, totw = 0;
  for (let i2 = 0; i2 < points.length; i2++) {
    let v1 = points[i2];
    let v2 = points[(i2 + 1) % points.length];
    if (!colinear(v1, v2, cent)) {
      w += winding(v1, v2, cent);
      totw += 1;
    }
  }
  if (totw > 0)
    w /= totw;
  return Math.round(w) === 1;
}
__name(get_boundary_winding, "get_boundary_winding");
;
var PlaneOps = class {
  static {
    __name(this, "PlaneOps");
  }
  constructor(normal) {
    let no = normal;
    this.axis = [0, 0, 0];
    this.reset_axis(normal);
  }
  reset_axis(no) {
    let ax, ay, az;
    let nx = Math.abs(no[0]), ny = Math.abs(no[1]), nz = Math.abs(no[2]);
    if (nz > nx && nz > ny) {
      ax = 0;
      ay = 1;
      az = 2;
    } else if (nx > ny && nx > nz) {
      ax = 2;
      ay = 1;
      az = 0;
    } else {
      ax = 0;
      ay = 2;
      az = 1;
    }
    this.axis = [ax, ay, az];
  }
  convex_quad(v1, v2, v3, v4) {
    let ax = this.axis;
    v1 = new Vector32([v1[ax[0]], v1[ax[1]], v1[ax[2]]]);
    v2 = new Vector32([v2[ax[0]], v2[ax[1]], v2[ax[2]]]);
    v3 = new Vector32([v3[ax[0]], v3[ax[1]], v3[ax[2]]]);
    v4 = new Vector32([v4[ax[0]], v4[ax[1]], v4[ax[2]]]);
    return convex_quad(v1, v2, v3, v4);
  }
  line_isect(v1, v2, v3, v4) {
    let ax = this.axis;
    let orig1 = v1, orig2 = v2;
    v1 = new Vector32([v1[ax[0]], v1[ax[1]], v1[ax[2]]]);
    v2 = new Vector32([v2[ax[0]], v2[ax[1]], v2[ax[2]]]);
    v3 = new Vector32([v3[ax[0]], v3[ax[1]], v3[ax[2]]]);
    v4 = new Vector32([v4[ax[0]], v4[ax[1]], v4[ax[2]]]);
    let ret2 = line_isect(v1, v2, v3, v4, true);
    let vi = ret2[0];
    if (ret2[1] === LINECROSS) {
      ret2[0].load(orig2).sub(orig1).mulScalar(ret2[2]).add(orig1);
    }
    return ret2;
  }
  line_line_cross(l1, l2) {
    let ax = this.axis;
    let v1 = l1[0], v2 = l1[1], v3 = l2[0], v4 = l2[1];
    v1 = new Vector32([v1[ax[0]], v1[ax[1]], 0]);
    v2 = new Vector32([v2[ax[0]], v2[ax[1]], 0]);
    v3 = new Vector32([v3[ax[0]], v3[ax[1]], 0]);
    v4 = new Vector32([v4[ax[0]], v4[ax[1]], 0]);
    return line_line_cross([v1, v2], [v3, v4]);
  }
  winding(v1, v2, v3) {
    let ax = this.axis;
    if (v1 === void 0)
      console.trace();
    v1 = new Vector32([v1[ax[0]], v1[ax[1]], 0]);
    v2 = new Vector32([v2[ax[0]], v2[ax[1]], 0]);
    v3 = new Vector32([v3[ax[0]], v3[ax[1]], 0]);
    return winding(v1, v2, v3);
  }
  colinear(v1, v2, v3) {
    let ax = this.axis;
    v1 = new Vector32([v1[ax[0]], v1[ax[1]], 0]);
    v2 = new Vector32([v2[ax[0]], v2[ax[1]], 0]);
    v3 = new Vector32([v3[ax[0]], v3[ax[1]], 0]);
    return colinear(v1, v2, v3);
  }
  get_boundary_winding(points) {
    let ax = this.axis;
    let cent = new Vector32();
    if (points.length === 0)
      return false;
    for (let i2 = 0; i2 < points.length; i2++) {
      cent.add(points[i2]);
    }
    cent.divideScalar(points.length);
    let w = 0, totw = 0;
    for (let i2 = 0; i2 < points.length; i2++) {
      let v1 = points[i2];
      let v2 = points[(i2 + 1) % points.length];
      if (!this.colinear(v1, v2, cent)) {
        w += this.winding(v1, v2, cent);
        totw += 1;
      }
    }
    if (totw > 0)
      w /= totw;
    return Math.round(w) === 1;
  }
};
var _isrp_ret = new Vector32();
var isect_ray_plane_rets = cachering2.fromConstructor(Vector32, 256);
function isect_ray_plane(planeorigin, planenormal, rayorigin, raynormal) {
  let po = planeorigin, pn = planenormal, ro = rayorigin, rn = raynormal;
  let div = pn[1] * rn[1] + pn[2] * rn[2] + pn[0] * rn[0];
  if (Math.abs(div) < 1e-6) {
    return void 0;
  }
  let t = ((po[1] - ro[1]) * pn[1] + (po[2] - ro[2]) * pn[2] + (po[0] - ro[0]) * pn[0]) / div;
  _isrp_ret.load(ro).addFac(rn, t);
  return isect_ray_plane_rets.next().load(_isrp_ret);
}
__name(isect_ray_plane, "isect_ray_plane");
function _old_isect_ray_plane(planeorigin, planenormal, rayorigin, raynormal) {
  let p = planeorigin, n = planenormal;
  let r = rayorigin, v = raynormal;
  let d = p.vectorLength();
  let t = -(r.dot(n) - p.dot(n)) / v.dot(n);
  _isrp_ret.load(v);
  _isrp_ret.mulScalar(t);
  _isrp_ret.add(r);
  return _isrp_ret;
}
__name(_old_isect_ray_plane, "_old_isect_ray_plane");
;
var Mat4Stack = class {
  static {
    __name(this, "Mat4Stack");
  }
  constructor() {
    this.stack = [];
    this.matrix = new Matrix4();
    this.matrix.makeIdentity();
    this.update_func = void 0;
  }
  set_internal_matrix(mat, update_func) {
    this.update_func = update_func;
    this.matrix = mat;
  }
  reset(mat) {
    this.matrix.load(mat);
    this.stack = [];
    if (this.update_func !== void 0)
      this.update_func();
  }
  load(mat) {
    this.matrix.load(mat);
    if (this.update_func !== void 0)
      this.update_func();
  }
  multiply(mat) {
    this.matrix.multiply(mat);
    if (this.update_func !== void 0)
      this.update_func();
  }
  identity() {
    this.matrix.loadIdentity();
    if (this.update_func !== void 0)
      this.update_func();
  }
  push(mat2) {
    this.stack.push(new Matrix4(this.matrix));
    if (mat2 !== void 0) {
      this.matrix.load(mat2);
      if (this.update_func !== void 0)
        this.update_func();
    }
  }
  pop() {
    let mat = this.stack.pop(this.stack.length - 1);
    this.matrix.load(mat);
    if (this.update_func !== void 0)
      this.update_func();
    return mat;
  }
};
var tril_rets = cachering2.fromConstructor(Vector32, 128);
function lreport() {
}
__name(lreport, "lreport");
function trilinear_v3(uvw, boxverts) {
  let [u, v, w] = uvw;
  const a1x = boxverts[0][0], a1y = boxverts[0][1], a1z = boxverts[0][2];
  const b1x = boxverts[1][0] - a1x, b1y = boxverts[1][1] - a1y, b1z = boxverts[1][2] - a1z;
  const c1x = boxverts[2][0] - a1x, c1y = boxverts[2][1] - a1y, c1z = boxverts[2][2] - a1z;
  const d1x = boxverts[3][0] - a1x, d1y = boxverts[3][1] - a1y, d1z = boxverts[3][2] - a1z;
  const a2x = boxverts[4][0] - a1x, a2y = boxverts[4][1] - a1y, a2z = boxverts[4][2] - a1z;
  const b2x = boxverts[5][0] - a1x, b2y = boxverts[5][1] - a1y, b2z = boxverts[5][2] - a1z;
  const c2x = boxverts[6][0] - a1x, c2y = boxverts[6][1] - a1y, c2z = boxverts[6][2] - a1z;
  const d2x = boxverts[7][0] - a1x, d2y = boxverts[7][1] - a1y, d2z = boxverts[7][2] - a1z;
  const x = (((a2x - b2x) * v - a2x + (c2x - d2x) * v + d2x) * u - ((a2x - b2x) * v - a2x) - (((c1x - d1x) * v + d1x - b1x * v) * u + b1x * v)) * w + ((c1x - d1x) * v + d1x - b1x * v) * u + b1x * v;
  const y = (((a2y - b2y) * v - a2y + (c2y - d2y) * v + d2y) * u - ((a2y - b2y) * v - a2y) - (((c1y - d1y) * v + d1y - b1y * v) * u + b1y * v)) * w + ((c1y - d1y) * v + d1y - b1y * v) * u + b1y * v;
  const z = (((a2z - b2z) * v - a2z + (c2z - d2z) * v + d2z) * u - ((a2z - b2z) * v - a2z) - (((c1z - d1z) * v + d1z - b1z * v) * u + b1z * v)) * w + ((c1z - d1z) * v + d1z - b1z * v) * u + b1z * v;
  let p = tril_rets.next();
  p[0] = x + a1x;
  p[1] = y + a1y;
  p[2] = z + a1z;
  return p;
}
__name(trilinear_v3, "trilinear_v3");
var tril_co_rets = cachering2.fromConstructor(Vector32, 128);
var tril_co_tmps = cachering2.fromConstructor(Vector32, 16);
var tril_mat_1 = new Matrix4();
var tril_mat_2 = new Matrix4();
var wtable = [
  [
    [0.5, 0.5, 0],
    //u triplet
    [0.5, 0.5, 0],
    //v triplet
    [0.5, 0.5, 0]
    //w triplet
  ],
  [
    [0.5, 0.5, 0],
    [0, 0.5, 0.5],
    [0.5, 0.5, 0]
  ],
  [
    [0, 0.5, 0.5],
    [0, 0.5, 0.5],
    [0.5, 0.5, 0]
  ],
  [
    [0, 0.5, 0.5],
    [0.5, 0.5, 0],
    [0.5, 0.5, 0]
  ]
];
for (let i2 = 0; i2 < 4; i2++) {
  let w = wtable[i2];
  w = [w[0], w[1], [0, 0.5, 0.5]];
  wtable.push(w);
}
var pih_tmps = cachering2.fromConstructor(Vector32, 16);
var boxfaces_table = [
  [0, 1, 2, 3],
  [7, 6, 5, 4],
  [0, 4, 5, 1],
  [1, 5, 6, 2],
  [2, 6, 7, 3],
  [3, 7, 4, 0]
];
var boxfaces_tmp = new Array(6);
for (let i2 = 0; i2 < 6; i2++) {
  boxfaces_tmp[i2] = new Vector32();
}
var boxfacenormals_tmp = new Array(6);
for (let i2 = 0; i2 < 6; i2++) {
  boxfacenormals_tmp[i2] = new Vector32();
}
function point_in_hex(p, boxverts, boxfacecents = void 0, boxfacenormals = void 0) {
  if (!boxfacecents) {
    boxfacecents = boxfaces_tmp;
    for (let i2 = 0; i2 < 6; i2++) {
      let [v1, v2, v3, v4] = boxfaces_table[i2];
      v1 = boxverts[v1];
      v2 = boxverts[v2];
      v3 = boxverts[v3];
      v4 = boxverts[v4];
      boxfacecents[i2].load(v1).add(v2).add(v3).add(v4).mulScalar(0.25);
    }
  }
  if (!boxfacenormals) {
    boxfacenormals = boxfacenormals_tmp;
    for (let i2 = 0; i2 < 6; i2++) {
      let [v1, v2, v3, v4] = boxfaces_table[i2];
      v1 = boxverts[v1];
      v2 = boxverts[v2];
      v3 = boxverts[v3];
      v4 = boxverts[v4];
      let n = normal_quad(v1, v2, v3, v4);
      boxfacenormals[i2].load(n).negate();
    }
  }
  let t1 = pih_tmps.next();
  let t2 = pih_tmps.next();
  let cent = pih_tmps.next().zero();
  for (let i2 = 0; i2 < 6; i2++) {
    cent.add(boxfacecents[i2]);
  }
  cent.mulScalar(1 / 6);
  let ret2 = true;
  for (let i2 = 0; i2 < 6; i2++) {
    t1.load(p).sub(boxfacecents[i2]);
    t2.load(cent).sub(boxfacecents[i2]);
    let n = boxfacenormals[i2];
    if (1) {
      t1.normalize();
      t2.normalize();
    }
    if (t1.dot(t2) < 0) {
      ret2 = false;
      return false;
    }
  }
  return ret2;
}
__name(point_in_hex, "point_in_hex");
var boxverts_tmp = new Array(8);
for (let i2 = 0; i2 < 8; i2++) {
  boxverts_tmp[i2] = new Vector32();
}
function trilinear_co(p, boxverts) {
  let uvw = tril_co_rets.next();
  uvw.zero();
  let u = tril_co_tmps.next();
  let v = tril_co_tmps.next();
  let w = tril_co_tmps.next();
  u.loadXYZ(0, 0.5, 1);
  v.loadXYZ(0, 0.5, 1);
  w.loadXYZ(0, 0.5, 1);
  let uvw2 = tril_co_tmps.next();
  for (let step = 0; step < 4; step++) {
    uvw.loadXYZ(u[1], v[1], w[1]);
    let mini = void 0;
    let mindis = trilinear_v3(uvw, boxverts).vectorDistanceSqr(p);
    for (let i2 = 0; i2 < 8; i2++) {
      let [t12, t22, t32] = wtable[i2];
      let u22 = t12[0] * u[0] + t12[1] * u[1] + t12[2] * u[2];
      let v22 = t22[0] * v[0] + t22[1] * v[1] + t22[2] * v[2];
      let w22 = t32[0] * w[0] + t32[1] * w[1] + t32[2] * w[2];
      let du2 = Math.abs(u22 - u[1]);
      let dv2 = Math.abs(v22 - v[1]);
      let dw2 = Math.abs(w22 - w[1]);
      uvw.loadXYZ(u22, v22, w22);
      let dis = trilinear_v3(uvw, boxverts).vectorDistanceSqr(p);
      if (mindis === void 0 || dis < mindis) {
      }
      if (1) {
        let bv = boxverts_tmp;
        bv[0].loadXYZ(u22 - du2, v22 - dv2, w22 - dw2);
        bv[1].loadXYZ(u22 - du2, v22 + dv2, w22 - dw2);
        bv[2].loadXYZ(u22 + du2, v22 + dv2, w22 - dw2);
        bv[3].loadXYZ(u22 + du2, v22 - dv2, w22 - dw2);
        bv[4].loadXYZ(u22 - du2, v22 - dv2, w22 + dw2);
        bv[5].loadXYZ(u22 - du2, v22 + dv2, w22 + dw2);
        bv[6].loadXYZ(u22 + du2, v22 + dv2, w22 + dw2);
        bv[7].loadXYZ(u22 + du2, v22 - dv2, w22 + dw2);
        for (let j2 = 0; j2 < 8; j2++) {
          bv[j2].load(trilinear_v3(bv[j2], boxverts));
        }
        if (point_in_hex(p, bv)) {
          mini = i2;
          mindis = dis;
          break;
        }
      }
    }
    if (mini === void 0) {
      lreport("mindis:", (mindis ** 0.5).toFixed(3));
      break;
    }
    let [t1, t2, t3] = wtable[mini];
    let u2 = t1[0] * u[0] + t1[1] * u[1] + t1[2] * u[2];
    let v2 = t2[0] * v[0] + t2[1] * v[1] + t2[2] * v[2];
    let w2 = t3[0] * w[0] + t3[1] * w[1] + t3[2] * w[2];
    let du = Math.abs(u2 - u[1]);
    let dv = Math.abs(v2 - v[1]);
    let dw = Math.abs(w2 - w[1]);
    u[0] = u2 - du;
    v[0] = v2 - dv;
    w[0] = w2 - dw;
    u[1] = u2;
    v[1] = v2;
    w[1] = w2;
    u[2] = u2 + du;
    v[2] = v2 + dv;
    w[2] = w2 + dw;
    lreport("mindis:", (mindis ** 0.5).toFixed(3), u2, v2, w2);
  }
  uvw.loadXYZ(u[1], v[1], w[1]);
  return trilinear_co2(p, boxverts, uvw);
}
__name(trilinear_co, "trilinear_co");
function trilinear_co2(p, boxverts, uvw) {
  let grad = tril_co_tmps.next();
  let df = 1e-5;
  let mat = tril_mat_1;
  let m = mat.$matrix;
  let mat2 = tril_mat_2;
  let r1 = tril_co_tmps.next();
  for (let step = 0; step < 55; step++) {
    let totg = 0;
    for (let i2 = 0; i2 < 3; i2++) {
      let axis_error = 0;
      if (uvw[i2] < 0) {
        axis_error = -uvw[i2];
      } else if (uvw[i2] > 1) {
        axis_error = uvw[i2] - 1;
      }
      r1[i2] = trilinear_v3(uvw, boxverts).vectorDistance(p) + 10 * axis_error;
      let orig = uvw[i2];
      uvw[i2] += df;
      if (uvw[i2] < 0) {
        axis_error = -uvw[i2];
      } else if (uvw[i2] > 1) {
        axis_error = uvw[i2] - 1;
      } else {
        axis_error = 0;
      }
      let r2 = trilinear_v3(uvw, boxverts).vectorDistance(p) + 10 * axis_error;
      uvw[i2] = orig;
      grad[i2] = (r2 - r1[i2]) / df;
      totg += grad[i2] ** 2;
    }
    if (totg === 0) {
      break;
    }
    let err = trilinear_v3(uvw, boxverts).vectorDistance(p);
    if (1) {
      uvw.addFac(grad, -err / totg * 0.85);
    } else {
      mat.makeIdentity();
      m.m11 = grad[0];
      m.m12 = grad[1];
      m.m13 = grad[2];
      m.m22 = m.m33 = m.m44 = 0;
      mat.transpose();
      mat2.load(mat).transpose();
      mat.preMultiply(mat2).invert();
      mat.multiply(mat2);
      grad.load(r1);
      grad.multVecMatrix(mat);
      uvw.addFac(grad, -1);
    }
    lreport("error:", err.toFixed(3), uvw);
    if (r1.dot(r1) ** 0.5 < 1e-4) {
      break;
    }
  }
  lreport("\n");
  return uvw;
}
__name(trilinear_co2, "trilinear_co2");
var angle_tri_v3_rets = cachering2.fromConstructor(Vector32, 32);
var angle_tri_v3_vs = cachering2.fromConstructor(Vector32, 32);
function tri_angles(v1, v2, v3) {
  let t1 = angle_tri_v3_vs.next().load(v1).sub(v2);
  let t2 = angle_tri_v3_vs.next().load(v3).sub(v2);
  let t3 = angle_tri_v3_vs.next().load(v2).sub(v3);
  t1.normalize();
  t2.normalize();
  t3.normalize();
  let th1 = Math.acos(t1.dot(t2) * 0.99999);
  t2.negate();
  let th2 = Math.acos(t2.dot(t3) * 0.99999);
  let th3 = Math.PI - (th1 + th2);
  let ret2 = angle_tri_v3_rets.next();
  ret2[0] = th1;
  ret2[1] = th2;
  ret2[2] = th3;
  return ret2;
}
__name(tri_angles, "tri_angles");
var angle_v2_temps = cachering2.fromConstructor(Vector2, 32);
var angle_v3_temps = cachering2.fromConstructor(Vector32, 32);
function angle_between_vecs(v1, vcent, v2) {
  let t1, t2;
  if (v1.length === 2) {
    t1 = angle_v2_temps.next();
    t2 = angle_v2_temps.next();
  } else {
    t1 = angle_v3_temps.next();
    t2 = angle_v3_temps.next();
  }
  t1.load(v1).sub(vcent).normalize();
  t2.load(v2).sub(vcent).normalize();
  let d = t1.dot(t2);
  if (d < -1) {
    return Math.PI;
  } else if (d > 1) {
    return 0;
  } else {
    return Math.acos(d);
  }
}
__name(angle_between_vecs, "angle_between_vecs");

// scripts/path.ux/scripts/core/ui_theme.js
var compatMap = {
  BoxMargin: "padding",
  BoxBG: "background",
  BoxRadius: "border-radius",
  background: "background-color",
  defaultWidth: "width",
  defaultHeight: "height",
  DefaultWidth: "width",
  DefaultHeight: "height",
  BoxBorder: "border-color",
  BoxLineWidth: "border-width",
  BoxSubBG: "background-color",
  BoxSub2BG: "background-color",
  DefaultPanelBG: "background-color",
  InnerPanelBG: "background-color",
  Background: "background-color",
  numslider_width: "width",
  numslider_height: "height"
};
var ColorSchemeTypes = {
  LIGHT: "light",
  DARK: "dark"
};
function parsepx(css) {
  return parseFloat(css.trim().replace("px", ""));
}
__name(parsepx, "parsepx");
function color2css3(c, alpha_override) {
  let r = ~~(c[0] * 255);
  let g = ~~(c[1] * 255);
  let b = ~~(c[2] * 255);
  let a3 = c.length < 4 ? 1 : c[3];
  a3 = alpha_override !== void 0 ? alpha_override : a3;
  if (c.length === 3 && alpha_override === void 0) {
    return `rgb(${r},${g},${b})`;
  } else {
    return `rgba(${r},${g},${b}, ${a3})`;
  }
}
__name(color2css3, "color2css");
window.color2css = color2css3;
var css2color_rets = cachering2.fromConstructor(Vector4, 64);
var basic_colors = {
  "white": [1, 1, 1],
  "grey": [0.5, 0.5, 0.5],
  "gray": [0.5, 0.5, 0.5],
  "black": [0, 0, 0],
  "red": [1, 0, 0],
  "yellow": [1, 1, 0],
  "green": [0, 1, 0],
  "teal": [0, 1, 1],
  "cyan": [0, 1, 1],
  "blue": [0, 0, 1],
  "orange": [1, 0.5, 0.25],
  "brown": [0.5, 0.4, 0.3],
  "purple": [1, 0, 1],
  "pink": [1, 0.5, 0.5]
};
function color2web(color) {
  function tostr(n) {
    n = ~~(n * 255);
    let s = n.toString(16);
    if (s.length > 2) {
      s = s.slice(0, 2);
    }
    while (s.length < 2) {
      s = "0" + s;
    }
    return s;
  }
  __name(tostr, "tostr");
  if (color.length === 3 || color[3] === 1) {
    let r = tostr(color[0]);
    let g = tostr(color[1]);
    let b = tostr(color[2]);
    return "#" + r + g + b;
  } else {
    let r = tostr(color[0]);
    let g = tostr(color[1]);
    let b = tostr(color[2]);
    let a3 = tostr(color[3]);
    return "#" + r + g + b + a3;
  }
}
__name(color2web, "color2web");
window.color2web = color2web;
function css2color2(color) {
  if (!color) {
    return new Vector4([0, 0, 0, 1]);
  }
  color = ("" + color).trim();
  let ret2 = css2color_rets.next();
  if (color[0] === "#") {
    color = color.slice(1, color.length);
    let parts = [];
    for (let i3 = 0; i3 < color.length >> 1; i3++) {
      let part = "0x" + color.slice(i3 * 2, i3 * 2 + 2);
      parts.push(parseInt(part));
    }
    ret2.zero();
    let i2;
    for (i2 = 0; i2 < Math.min(parts.length, ret2.length); i2++) {
      ret2[i2] = parts[i2] / 255;
    }
    if (i2 < 4) {
      ret2[3] = 1;
    }
    return ret2;
  }
  if (color in basic_colors) {
    ret2.load(basic_colors[color]);
    ret2[3] = 1;
    return ret2;
  }
  const hasAlpha = color.startsWith("rgba(");
  color = color.replace("rgba", "").replace("rgb", "").replace(/[\(\)]/g, "").trim().split(",");
  for (let i2 = 0; i2 < color.length; i2++) {
    ret2[i2] = parseFloat(color[i2]);
    if (i2 < 3) {
      ret2[i2] /= 255;
    }
  }
  if (ret2.length === 3) {
    ret2.push(1);
  }
  if (!hasAlpha) {
    ret2[3] = 1;
  }
  return ret2;
}
__name(css2color2, "css2color");
window.css2color = css2color2;
function web2color(str) {
  if (typeof str === "string" && str.trim()[0] !== "#") {
    str = "#" + str.trim();
  }
  return css2color2(str);
}
__name(web2color, "web2color");
window.web2color = web2color;
var validate_pat = /\#?[0-9a-fA-F]{6}([0-9a-fA-F]{2})?$/;
function validateWebColor(str) {
  if (typeof str !== "string" && !(str instanceof String))
    return false;
  return str.trim().search(validate_pat) === 0;
}
__name(validateWebColor, "validateWebColor");
var num = "(([0-9]+.[0-9]+)|[0-9a-f]+)";
var validate_rgba = new RegExp(`rgba\\(${num},${num},${num},${num}\\)$`);
var validate_rgb = new RegExp(`rgb\\(${num},${num},${num}\\)$`);
function validateCSSColor(color) {
  if (color.toLowerCase() in basic_colors) {
    return true;
  }
  let rgba = color.toLowerCase().replace(/[ \t]/g, "");
  rgba = rgba.trim();
  if (validate_rgba.test(rgba) || validate_rgb.exec(rgba)) {
    return true;
  }
  return validateWebColor(color);
}
__name(validateCSSColor, "validateCSSColor");
window.validateCSSColor = validateCSSColor;
var theme = {};
function invertTheme() {
  const_default.colorSchemeType = const_default.colorSchemeType === ColorSchemeTypes.LIGHT ? ColorSchemeTypes.DARK : ColorSchemeTypes.LIGHT;
  function inverted(color) {
    if (Array.isArray(color)) {
      for (let i2 = 0; i2 < 3; i2++) {
        color[i2] = 1 - color[i2];
      }
      return color;
    }
    color = css2color2(color);
    return color2css3(inverted(color));
  }
  __name(inverted, "inverted");
  let bg = document.body.style["background-color"];
  bg = const_default.colorSchemeType === ColorSchemeTypes.LIGHT ? "rgb(200,200,200)" : "rgb(55, 55, 55)";
  document.body.style["background-color"] = bg;
  for (let style in theme) {
    style = theme[style];
    for (let k2 in style) {
      let v = style[k2];
      if (v instanceof CSSFont) {
        v.color = inverted(v.color);
      } else if (typeof v === "string") {
        v = v.trim().toLowerCase();
        let iscolor = v.search("rgb") >= 0;
        iscolor = iscolor || v in basic_colors;
        iscolor = iscolor || validateWebColor(v);
        if (iscolor) {
          style[k2] = inverted(v);
        }
      }
    }
  }
}
__name(invertTheme, "invertTheme");
window.invertTheme = invertTheme;
function setColorSchemeType(mode) {
  if (!!mode !== const_default.colorSchemeType) {
    invertTheme();
    const_default.colorSchemeType = mode;
  }
}
__name(setColorSchemeType, "setColorSchemeType");
window.validateWebColor = validateWebColor;
var _digest = new HashDigest();
var CSSFont = class _CSSFont {
  static {
    __name(this, "CSSFont");
  }
  constructor(args2 = {}) {
    this._size = args2.size ? args2.size : 12;
    this.font = args2.font;
    this.style = args2.style !== void 0 ? args2.style : "normal";
    this.weight = args2.weight !== void 0 ? args2.weight : "normal";
    this.variant = args2.variant !== void 0 ? args2.variant : "normal";
    this.color = args2.color;
  }
  calcHashUpdate(digest = _digest.reset()) {
    digest.add(this._size || 0);
    digest.add(this.font);
    digest.add(this.style);
    digest.add(this.weight);
    digest.add(this.variant);
    digest.add(this.color);
    return digest.get();
  }
  set size(val2) {
    this._size = val2;
  }
  get size() {
    if (isMobile()) {
      let mul = theme.base.mobileTextSizeMultiplier / visualViewport.scale;
      if (mul) {
        return this._size * mul;
        ;
      }
    }
    return this._size;
  }
  copyTo(b) {
    b._size = this._size;
    b.font = this.font;
    b.style = this.style;
    b.color = this.color;
    b.variant = this.variant;
    b.weight = this.weight;
  }
  copy() {
    let ret2 = new _CSSFont();
    this.copyTo(ret2);
    return ret2;
  }
  genCSS(size = this.size) {
    return `${this.style} ${this.variant} ${this.weight} ${size}px ${this.font}`;
  }
  //deprecated, use genKey()
  hash() {
    return this.genKey();
  }
  genKey() {
    let color = this.color;
    if (typeof this.color === "object" || typeof this.color === "function") {
      color = JSON.stringify(color);
    }
    return this.genCSS() + ":" + this.size + ":" + color;
  }
};
CSSFont.STRUCT = `
CSSFont {
  size     : float | obj._size;
  font     : string | obj.font || "";
  style    : string | obj.font || "";
  color    : string | ""+obj.color;
  variant  : string | obj.variant || "";
  weight   : string | ""+obj.weight;
}
`;
struct_default.register(CSSFont);
function exportTheme(theme1 = theme, addVarDecl = true) {
  let sortkeys = /* @__PURE__ */ __name((obj2) => {
    let keys2 = [];
    for (let k2 in obj2) {
      keys2.push(k2);
    }
    keys2.sort();
    return keys2;
  }, "sortkeys");
  let s = addVarDecl ? "var theme = {\n" : "{\n";
  function writekey(v, indent = "") {
    if (typeof v === "string") {
      if (v.search("\n") >= 0) {
        v = "`" + v + "`";
      } else {
        v = "'" + v + "'";
      }
      return v;
    } else if (typeof v === "object") {
      if (v instanceof CSSFont) {
        return `new CSSFont({
${indent}  font    : ${writekey(v.font)},
${indent}  weight  : ${writekey(v.weight)},
${indent}  variant : ${writekey(v.variant)},
${indent}  style   : ${writekey(v.style)},
${indent}  size    : ${writekey(v._size)},
${indent}  color   : ${writekey(v.color)}
${indent}})`;
      } else {
        let s2 = "{\n";
        for (let k2 of sortkeys(v)) {
          let v2 = v[k2];
          if (k2.search(" ") >= 0 || k2.search("-") >= 0) {
            k2 = "'" + k2 + "'";
          }
          s2 += indent + "  " + k2 + " : " + writekey(v2, indent + "  ") + ",\n";
        }
        s2 += indent + "}";
        return s2;
      }
    } else {
      return "" + v;
    }
    return "error";
  }
  __name(writekey, "writekey");
  for (let k2 of sortkeys(theme1)) {
    let k22 = k2;
    if (k2.search(/[- \t.]/) >= 0) {
      k22 = "'" + k2 + "'";
    }
    s += "  " + k22 + ": ";
    let v = theme1[k2];
    if (typeof v !== "object" || v instanceof CSSFont) {
      s += writekey(v, "  ") + ",\n";
    } else {
      s += " {\n";
      let s2 = "";
      let maxwid = 0;
      for (let k23 of sortkeys(v)) {
        if (k23.search("-") >= 0 || k23.search(" ") >= 0) {
          k23 = "'" + k23 + "'";
        }
        maxwid = Math.max(maxwid, k23.length);
      }
      for (let k23 of sortkeys(v)) {
        let v2 = v[k23];
        if (k23.search("-") >= 0 || k23.search(" ") >= 0) {
          k23 = "'" + k23 + "'";
        }
        let pad = "";
        for (let i2 = 0; i2 < maxwid - k23.length; i2++) {
          pad += " ";
        }
        s2 += "    " + k23 + pad + ": " + writekey(v2, "    ") + ",\n";
      }
      s += s2;
      s += "  },\n\n";
    }
  }
  s += "};\n";
  return s;
}
__name(exportTheme, "exportTheme");
window._exportTheme = exportTheme;
function copyTheme(theme2) {
  if (theme2 instanceof CSSFont) {
    return theme2.copy();
  }
  let ret2 = {};
  for (let k2 in theme2) {
    let v = theme2[k2];
    if (typeof v === "function") {
      continue;
    }
    if (typeof v === "object") {
      ret2[k2] = copyTheme(v);
    } else {
      ret2[k2] = v;
    }
  }
  return ret2;
}
__name(copyTheme, "copyTheme");

// scripts/path.ux/scripts/path-controller/util/events.js
var EventDispatcher = class {
  static {
    __name(this, "EventDispatcher");
  }
  constructor() {
    this._cbs = {};
  }
  _fireEvent(type, data) {
    let stop2 = false;
    data = {
      stopPropagation() {
        stop2 = true;
      },
      data
    };
    if (type in this._cbs) {
      for (let cb of this._cbs[type]) {
        cb(data);
        if (stop2) {
          break;
        }
      }
    }
  }
  on(type, cb) {
    if (!(type in this._cbs)) {
      this._cbs[type] = [];
    }
    this._cbs[type].push(cb);
    return this;
  }
  off(type, cb) {
    if (!(type in this._cbs)) {
      console.warn("event handler not in list", type, cb);
      return this;
    }
    let stack = this._cbs[type];
    if (stack.indexOf(cb) < 0) {
      console.warn("event handler not in list", type, cb);
      return this;
    }
    stack.remove(cb);
    return this;
  }
};
function copyMouseEvent(e2) {
  let ret2 = {};
  function bind(func2, obj2) {
    return function() {
      return this._orig.apply(func2, arguments);
    };
  }
  __name(bind, "bind");
  let exclude2 = /* @__PURE__ */ new Set([
    //"prototype",
    //"constructor",
    "__proto__"
  ]);
  ret2._orig = e2;
  for (let k2 in e2) {
    let v = e2[k2];
    if (exclude2.has(k2)) {
      continue;
    }
    if (typeof v == "function") {
      v = bind(v);
    }
    ret2[k2] = v;
  }
  ret2.ctrlKey = e2.ctrlKey;
  ret2.shiftKey = e2.shiftKey;
  ret2.altKey = e2.altKey;
  for (let i2 = 0; i2 < 2; i2++) {
    let key2 = i2 ? "targetTouches" : "touches";
    if (e2[key2]) {
      ret2[key2] = [];
      for (let t of e2[key2]) {
        let t2 = {};
        ret2[key2].push(t2);
        for (let k2 in t) {
          t2[k2] = t[k2];
        }
      }
    }
  }
  return ret2;
}
__name(copyMouseEvent, "copyMouseEvent");
var DomEventTypes = {
  on_mousemove: "mousemove",
  on_mousedown: "mousedown",
  on_mouseup: "mouseup",
  on_touchstart: "touchstart",
  on_touchcancel: "touchcanel",
  on_touchmove: "touchmove",
  on_touchend: "touchend",
  on_mousewheel: "mousewheel",
  on_keydown: "keydown",
  on_keyup: "keyup",
  on_pointerdown: "pointerdown",
  on_pointermove: "pointermove",
  on_pointercancel: "pointercancel",
  on_pointerup: "pointerup"
  //on_keypress    : 'keypress'
};
function getDom(dom, eventtype) {
  if (eventtype.startsWith("key"))
    return window;
  return dom;
}
__name(getDom, "getDom");
var modalStack = [];
function isModalHead(owner) {
  return modalStack.length === 0 || modalStack[modalStack.length - 1] === owner;
}
__name(isModalHead, "isModalHead");
var EventHandler = class {
  static {
    __name(this, "EventHandler");
  }
  constructor() {
    this._modalstate = void 0;
  }
  pushPointerModal(dom, pointerId) {
    if (this._modalstate) {
      console.warn("pushPointerModal called twiced!");
      return;
    }
    this._modalstate = pushPointerModal(this, dom, pointerId);
  }
  pushModal(dom, _is_root) {
    if (this._modalstate) {
      console.warn("pushModal called twiced!");
      return;
    }
    this._modalstate = pushModalLight(this);
  }
  popModal() {
    if (this._modalstate !== void 0) {
      let modalstate = this._modalstate;
      popModalLight(modalstate);
      this._modalstate = void 0;
    }
  }
};
function pushModal(dom, handlers) {
  console.warn("Deprecated call to pathux.events.pushModal; use api in simple_events.js instead");
  let h2 = new EventHandler();
  for (let k2 in handlers) {
    h2[k2] = handlers[k2];
  }
  handlers.popModal = () => {
    return h2.popModal(dom);
  };
  h2.pushModal(dom, false);
  return h2;
}
__name(pushModal, "pushModal");

// scripts/path.ux/scripts/path-controller/curve/curve1d_base.js
var CurveConstructors = [];
var CURVE_VERSION = 1.1;
var CurveFlags = {
  SELECT: 1,
  TRANSFORM: 2
};
var TangentModes = {
  SMOOTH: 1,
  BREAK: 2
};
function getCurve(type, throw_on_error = true) {
  for (let cls2 of CurveConstructors) {
    if (cls2.name === type)
      return cls2;
    if (cls2.define().name === type)
      return cls2;
  }
  if (throw_on_error) {
    throw new Error("Unknown curve type " + type);
  } else {
    console.warn("Unknown curve type", type);
    return getCurve("ease");
  }
}
__name(getCurve, "getCurve");
var _udigest = new HashDigest();
var CurveTypeData = class _CurveTypeData {
  static {
    __name(this, "CurveTypeData");
  }
  constructor() {
    this.type = this.constructor.define().typeName;
    this.parent = void 0;
  }
  get hasGUI() {
    throw new Error("get hasGUI(): implement me!");
  }
  static register(cls2) {
    if (cls2.define === _CurveTypeData.define) {
      throw new Error("missing define() static method");
    }
    let def = cls2.define();
    if (!def.name) {
      throw new Error(cls2.name + ".define() result is missing 'name' field");
    }
    if (!def.typeName) {
      throw new Error(cls2.name + ".define() is missing .typeName, which should equal class name; needed for minificaiton");
    }
    CurveConstructors.push(cls2);
  }
  static define() {
    return {
      uiname: "Some Curve",
      name: "somecurve",
      typeName: "CurveTypeData"
    };
  }
  calcHashKey(digest = _udigest.reset()) {
    let d = digest;
    d.add(this.type);
    return d.get();
  }
  toJSON() {
    return {
      type: this.type
    };
  }
  equals(b) {
    return this.type === b.type;
  }
  loadJSON(obj2) {
    this.type = obj2.type;
    return this;
  }
  redraw() {
    if (this.parent)
      this.parent.redraw();
  }
  makeGUI(container) {
  }
  killGUI(container) {
    container.clear();
  }
  evaluate(s) {
    throw new Error("implement me!");
  }
  integrate(s1, quadSteps = 64) {
    let ret2 = 0, ds = s1 / quadSteps;
    for (let i2 = 0, s = 0; i2 < quadSteps; i2++, s += ds) {
      ret2 += this.evaluate(s) * ds;
    }
    return ret2;
  }
  derivative(s) {
    let df = 1e-4;
    if (s > 1 - df * 3) {
      return (this.evaluate(s) - this.evaluate(s - df)) / df;
    } else if (s < df * 3) {
      return (this.evaluate(s + df) - this.evaluate(s)) / df;
    } else {
      return (this.evaluate(s + df) - this.evaluate(s - df)) / (2 * df);
    }
  }
  derivative2(s) {
    let df = 1e-4;
    if (s > 1 - df * 3) {
      return (this.derivative(s) - this.derivative(s - df)) / df;
    } else if (s < df * 3) {
      return (this.derivative(s + df) - this.derivative(s)) / df;
    } else {
      return (this.derivative(s + df) - this.derivative(s - df)) / (2 * df);
    }
  }
  inverse(y) {
    let steps = 9;
    let ds = 1 / steps, s = 0;
    let best = void 0;
    let ret2 = void 0;
    for (let i2 = 0; i2 < steps; i2++, s += ds) {
      let s1 = s, s2 = s + ds;
      let mid;
      for (let j2 = 0; j2 < 11; j2++) {
        let y1 = this.evaluate(s1);
        let y2 = this.evaluate(s2);
        mid = (s1 + s2) * 0.5;
        if (Math.abs(y1 - y) < Math.abs(y2 - y)) {
          s2 = mid;
        } else {
          s1 = mid;
        }
      }
      let ymid = this.evaluate(mid);
      if (best === void 0 || Math.abs(y - ymid) < best) {
        best = Math.abs(y - ymid);
        ret2 = mid;
      }
    }
    return ret2 === void 0 ? 0 : ret2;
  }
  onActive(parent2, draw_transform) {
  }
  onInactive(parent2, draw_transform) {
  }
  reset() {
  }
  destroy() {
  }
  update() {
    if (this.parent)
      this.parent._on_change();
  }
  draw(canvas, g, draw_transform) {
  }
  loadSTRUCT(reader) {
    reader(this);
  }
};
CurveTypeData.STRUCT = `
CurveTypeData {
  type : string;
}
`;
struct_default.register(CurveTypeData);
var unitRange = [0, 1];
function evalHermiteTable(table, t, range = unitRange) {
  t = (t - range[0]) / (range[1] - range[0]);
  let s = t * (table.length / 4);
  let i2 = Math.floor(s);
  s -= i2;
  i2 *= 4;
  let a3 = table[i2] + (table[i2 + 1] - table[i2]) * s;
  let b = table[i2 + 2] + (table[i2 + 3] - table[i2 + 2]) * s;
  return a3 + (b - a3) * s;
}
__name(evalHermiteTable, "evalHermiteTable");
function genHermiteTable(evaluate, steps, range = [0, 1]) {
  let table = new Array(steps);
  let [min3, max3] = range;
  let eps = 1e-4;
  let dt = (max3 - min3 - eps * 4.001) / (steps - 1);
  let t = min3 + eps * 4;
  let lastdv1, lastf3;
  for (let j2 = 0; j2 < steps; j2++, t += dt) {
    let f22 = evaluate(t - eps);
    let f3 = evaluate(t);
    let f4 = evaluate(t + eps);
    let dv1 = (f4 - f22) / (eps * 2);
    dv1 /= steps;
    if (j2 > 0) {
      let j22 = j2 - 1;
      table[j22 * 4] = lastf3;
      table[j22 * 4 + 1] = lastf3 + lastdv1 / 3;
      table[j22 * 4 + 2] = f3 - dv1 / 3;
      table[j22 * 4 + 3] = f3;
    }
    lastdv1 = dv1;
    lastf3 = f3;
  }
  return table;
}
__name(genHermiteTable, "genHermiteTable");

// scripts/path.ux/scripts/path-controller/toolsys/toolprop_abstract.js
var toolprop_abstract_exports = {};
__export(toolprop_abstract_exports, {
  Curve1DPropertyIF: () => Curve1DPropertyIF,
  EnumPropertyIF: () => EnumPropertyIF,
  FlagPropertyIF: () => FlagPropertyIF,
  FloatPropertyIF: () => FloatPropertyIF,
  IntPropertyIF: () => IntPropertyIF,
  ListPropertyIF: () => ListPropertyIF,
  NumPropertyIF: () => NumPropertyIF,
  PropFlags: () => PropFlags,
  PropSubTypes: () => PropSubTypes,
  PropTypes: () => PropTypes,
  StringPropertyIF: () => StringPropertyIF,
  StringSetPropertyIF: () => StringSetPropertyIF,
  ToolPropertyIF: () => ToolPropertyIF,
  Vec2PropertyIF: () => Vec2PropertyIF,
  Vec3PropertyIF: () => Vec3PropertyIF,
  Vec4PropertyIF: () => Vec4PropertyIF
});
var PropTypes = {
  INT: 1,
  STRING: 2,
  BOOL: 4,
  ENUM: 8,
  FLAG: 16,
  FLOAT: 32,
  VEC2: 64,
  VEC3: 128,
  VEC4: 256,
  MATRIX4: 512,
  QUAT: 1024,
  PROPLIST: 4096,
  STRSET: 8192,
  CURVE: 8192 << 1,
  FLOAT_ARRAY: 8192 << 2,
  REPORT: 8192 << 3
  //ITER : 8192<<1
};
var PropSubTypes = {
  COLOR: 1
};
var PropFlags = {
  SELECT: 1,
  PRIVATE: 2,
  LABEL: 4,
  USE_ICONS: 64,
  /* Implies FORCE_ENUM_CHECKBOXES (for enum/flag properties). */
  USE_CUSTOM_GETSET: 128,
  //used by controller.js interface
  SAVE_LAST_VALUE: 256,
  READ_ONLY: 512,
  SIMPLE_SLIDER: 1 << 10,
  FORCE_ROLLER_SLIDER: 1 << 11,
  USE_BASE_UNDO: 1 << 12,
  //internal to simple_controller.js
  EDIT_AS_BASE_UNIT: 1 << 13,
  //user textbox input should be interpreted in display unit
  NO_UNDO: 1 << 14,
  USE_CUSTOM_PROP_GETTER: 1 << 15,
  //hrm, not sure I need this
  FORCE_ENUM_CHECKBOXES: 1 << 16,
  /* Use a strip of checkboxes, also applies to flag properties. */
  NO_DEFAULT: 1 << 17
};
var ToolPropertyIF = class {
  static {
    __name(this, "ToolPropertyIF");
  }
  constructor(type, subtype, apiname, uiname, description, flag, icon) {
    this.data = void 0;
    this.type = type;
    this.subtype = subtype;
    this.apiname = apiname;
    this.uiname = uiname;
    this.description = description;
    this.flag = flag;
    this.icon = icon;
  }
  equals(b) {
    throw new Error("implement me");
  }
  copyTo(b) {
  }
  copy() {
  }
  _fire(type, arg1, arg2) {
  }
  on(type, cb) {
  }
  off(type, cb) {
  }
  getValue() {
  }
  setValue(val2) {
  }
  setStep(step) {
  }
  setRange(min3, max3) {
  }
  setUnit(unit) {
  }
  //some clients have seperate ui range
  setUIRange(min3, max3) {
  }
  setIcon(icon) {
  }
};
var StringPropertyIF = class extends ToolPropertyIF {
  static {
    __name(this, "StringPropertyIF");
  }
  constructor() {
    super(PropTypes.STRING);
  }
};
var NumPropertyIF = class extends ToolPropertyIF {
  static {
    __name(this, "NumPropertyIF");
  }
};
;
var IntPropertyIF = class extends ToolPropertyIF {
  static {
    __name(this, "IntPropertyIF");
  }
  constructor() {
    super(PropTypes.INT);
  }
  setRadix(radix) {
    throw new Error("implement me");
  }
};
var FloatPropertyIF = class extends ToolPropertyIF {
  static {
    __name(this, "FloatPropertyIF");
  }
  constructor() {
    super(PropTypes.FLOAT);
  }
  setDecimalPlaces(n) {
  }
};
var EnumPropertyIF = class extends ToolPropertyIF {
  static {
    __name(this, "EnumPropertyIF");
  }
  constructor(value2, valid_values) {
    super(PropTypes.ENUM);
    this.values = {};
    this.keys = {};
    this.ui_value_names = {};
    this.iconmap = {};
    if (valid_values === void 0) return this;
    if (valid_values instanceof Array || valid_values instanceof String) {
      for (var i2 = 0; i2 < valid_values.length; i2++) {
        this.values[valid_values[i2]] = valid_values[i2];
        this.keys[valid_values[i2]] = valid_values[i2];
      }
    } else {
      for (var k2 in valid_values) {
        this.values[k2] = valid_values[k2];
        this.keys[valid_values[k2]] = k2;
      }
    }
    for (var k2 in this.values) {
      var uin = k2[0].toUpperCase() + k2.slice(1, k2.length);
      uin = uin.replace(/\_/g, " ");
      this.ui_value_names[k2] = uin;
    }
  }
  addIcons(iconmap) {
    if (this.iconmap === void 0) {
      this.iconmap = {};
    }
    for (var k2 in iconmap) {
      this.iconmap[k2] = iconmap[k2];
    }
  }
};
var FlagPropertyIF = class extends EnumPropertyIF {
  static {
    __name(this, "FlagPropertyIF");
  }
  constructor(valid_values) {
    super(PropTypes.FLAG);
  }
};
var Vec2PropertyIF = class extends ToolPropertyIF {
  static {
    __name(this, "Vec2PropertyIF");
  }
  constructor(valid_values) {
    super(PropTypes.VEC2);
  }
};
var Vec3PropertyIF = class extends ToolPropertyIF {
  static {
    __name(this, "Vec3PropertyIF");
  }
  constructor(valid_values) {
    super(PropTypes.VEC3);
  }
};
var Vec4PropertyIF = class extends ToolPropertyIF {
  static {
    __name(this, "Vec4PropertyIF");
  }
  constructor(valid_values) {
    super(PropTypes.VEC4);
  }
};
var ListPropertyIF = class extends ToolPropertyIF {
  static {
    __name(this, "ListPropertyIF");
  }
  /*
  * Prop must be a ToolProperty subclass instance
  * */
  constructor(prop) {
    super(PropTypes.PROPLIST);
    this.prop = prop;
  }
  get length() {
  }
  set length(val2) {
  }
  copyTo(b) {
  }
  copy() {
  }
  /**
   * clear list
   * */
  clear() {
  }
  push(item = this.prop.copy()) {
  }
  [Symbol.iterator]() {
  }
};
var StringSetPropertyIF = class extends ToolPropertyIF {
  static {
    __name(this, "StringSetPropertyIF");
  }
  constructor(value2 = void 0, definition = []) {
    super(PropTypes.STRSET);
  }
  /*
  * Values can be a string, undefined/null, or a list/set/object-literal of strings.
  * If destructive is true, then existing set will be cleared.
  * */
  setValue(values, destructive = true, soft_fail = true) {
  }
  getValue() {
  }
  addIcons(iconmap) {
  }
  addUINames(map3) {
  }
  addDescriptions(map3) {
  }
  copyTo(b) {
  }
  copy() {
  }
};
var Curve1DPropertyIF = class extends ToolPropertyIF {
  static {
    __name(this, "Curve1DPropertyIF");
  }
  constructor(curve, uiname) {
    super(PropTypes.CURVE);
    this.data = curve;
  }
  getValue() {
    return this.curve;
  }
  setValue(curve) {
    if (curve === void 0) {
      return;
    }
    let json2 = JSON.parse(JSON.stringify(curve));
    this.data.load(json2);
  }
  copyTo(b) {
    b.setValue(this.data);
  }
};

// scripts/path.ux/scripts/path-controller/units/units.js
var FLT_EPSILONE = 1192092895507812e-22;
function myfloor(f3) {
  return Math.floor(f3 + FLT_EPSILONE * 2);
}
__name(myfloor, "myfloor");
function normString(s) {
  s = s.replace(/ /g, "").replace(/\t/g, "");
  return s.toLowerCase();
}
__name(normString, "normString");
function myToFixed(f3, decimals) {
  if (typeof f3 !== "number") {
    return "(error)";
  }
  f3 = f3.toFixed(decimals);
  while (f3.endsWith("0") && f3.search(/\./) >= 0) {
    f3 = f3.slice(0, f3.length - 1);
  }
  if (f3.endsWith(".")) {
    f3 = f3.slice(0, f3.length - 1);
  }
  if (f3.length === 0)
    f3 = "0";
  return f3.trim();
}
__name(myToFixed, "myToFixed");
var Units = [];
var Unit = class {
  static {
    __name(this, "Unit");
  }
  static getUnit(name) {
    if (name === "none" || name === void 0) {
      return void 0;
    }
    for (let cls2 of Units) {
      if (cls2.unitDefine().name === name) {
        return cls2;
      }
    }
    throw new Error("Unknown unit " + name);
  }
  static register(cls2) {
    Units.push(cls2);
  }
  //subclassed static methods start here
  static unitDefine() {
    return {
      name: "",
      uiname: "",
      type: "",
      //e.g. distance
      icon: -1,
      pattern: void 0
      //a re literal to validate strings
    };
  }
  static parse(string) {
  }
  static validate(string) {
    string = normString(string);
    let def = this.unitDefine();
    let m = string.match(def.pattern);
    if (!m)
      return false;
    return m[0] === string;
  }
  //convert to internal units,
  //e.g. meters for distance
  static toInternal(value2) {
  }
  static fromInternal(value2) {
  }
  static buildString(value2, decimals = 2) {
  }
};
var MeterUnit = class extends Unit {
  static {
    __name(this, "MeterUnit");
  }
  static unitDefine() {
    return {
      name: "meter",
      uiname: "Meter",
      type: "distance",
      icon: -1,
      pattern: /-?\d+(\.\d*)?m$/
    };
  }
  static parse(string) {
    string = normString(string);
    if (string.endsWith("m")) {
      string = string.slice(0, string.length - 1);
    }
    return parseFloat(string);
  }
  //convert to internal units,
  //e.g. meters for distance
  static toInternal(value2) {
    return value2;
  }
  static fromInternal(value2) {
    return value2;
  }
  static buildString(value2, decimals = 2) {
    return "" + myToFixed(value2, decimals) + " m";
  }
};
Unit.register(MeterUnit);
var InchUnit = class extends Unit {
  static {
    __name(this, "InchUnit");
  }
  static unitDefine() {
    return {
      name: "inch",
      uiname: "Inch",
      type: "distance",
      icon: -1,
      pattern: /-?\d+(\.\d*)?(in|inch)$/
    };
  }
  static parse(string) {
    string = string.toLowerCase();
    let i2 = string.indexOf("i");
    if (i2 >= 0) {
      string = string.slice(0, i2);
    }
    return parseInt(string);
  }
  //convert to internal units,
  //e.g. meters for distance
  static toInternal(value2) {
    return value2 * 0.0254;
  }
  static fromInternal(value2) {
    return value2 / 0.0254;
  }
  static buildString(value2, decimals = 2) {
    return "" + myToFixed(value2, decimals) + "in";
  }
};
Unit.register(InchUnit);
var foot_re = /((-?\d+(\.\d*)?ft)(-?\d+(\.\d*)?(in|inch))?)|(-?\d+(\.\d*)?(in|inch))$/;
var FootUnit = class extends Unit {
  static {
    __name(this, "FootUnit");
  }
  static unitDefine() {
    return {
      name: "foot",
      uiname: "Foot",
      type: "distance",
      icon: -1,
      pattern: foot_re
    };
  }
  static parse(string) {
    string = normString(string);
    let i2 = string.search("ft");
    let parts = [];
    let vft = 0, vin = 0;
    if (i2 >= 0) {
      parts = string.split("ft");
      let j2 = parts[1].search("in");
      if (j2 >= 0) {
        parts = [parts[0]].concat(parts[1].split("in"));
        vin = parseFloat(parts[1]);
      }
      vft = parseFloat(parts[0]);
    } else {
      string = string.replace(/in/g, "");
      vin = parseFloat(string);
    }
    return vin / 12 + vft;
  }
  //convert to internal units,
  //e.g. meters for distance
  static toInternal(value2) {
    return value2 * 0.3048;
  }
  static fromInternal(value2) {
    return value2 / 0.3048;
  }
  static buildString(value2, decimals = 2) {
    let vft = myfloor(value2);
    let vin = (value2 + FLT_EPSILONE * 2) * 12 % 12;
    if (vft === 0) {
      return myToFixed(vin, decimals) + " in";
    }
    let s = "" + vft + " ft";
    if (vin !== 0) {
      s += " " + myToFixed(vin, decimals) + " in";
    }
    return s;
  }
};
Unit.register(FootUnit);
var square_foot_re = /((-?\d+(\.\d*)?ft(\u00b2)?)(-?\d+(\.\d*)?(in|inch)(\u00b2)?)?)|(-?\d+(\.\d*)?(in|inch)(\u00b2)?)$/;
var SquareFootUnit = class extends FootUnit {
  static {
    __name(this, "SquareFootUnit");
  }
  static unitDefine() {
    return {
      name: "square_foot",
      uiname: "Square Feet",
      type: "area",
      icon: -1,
      pattern: square_foot_re
    };
  }
  static parse(string) {
    string = string.replace(/\u00b2/g, "");
    return super.parse(string);
  }
  static buildString(value2, decimals = 2) {
    let vft = myfloor(value2);
    let vin = (value2 + FLT_EPSILONE * 2) * 12 % 12;
    if (vft === 0) {
      return myToFixed(vin, decimals) + " in\xB2";
    }
    let s = "" + vft + " ft\xB2";
    if (vin !== 0) {
      s += " " + myToFixed(vin, decimals) + " in\xB2";
    }
    return s;
  }
};
Unit.register(SquareFootUnit);
var MileUnit = class extends Unit {
  static {
    __name(this, "MileUnit");
  }
  static unitDefine() {
    return {
      name: "mile",
      uiname: "Mile",
      type: "distance",
      icon: -1,
      pattern: /-?\d+(\.\d+)?miles$/
    };
  }
  static parse(string) {
    string = normString(string);
    string = string.replace(/miles/, "");
    return parseFloat(string);
  }
  //convert to internal units,
  //e.g. meters for distance
  static toInternal(value2) {
    return value2 * 1609.34;
  }
  static fromInternal(value2) {
    return value2 / 1609.34;
  }
  static buildString(value2, decimals = 3) {
    return "" + myToFixed(value2, decimals) + " miles";
  }
};
Unit.register(MileUnit);
var DegreeUnit = class extends Unit {
  static {
    __name(this, "DegreeUnit");
  }
  static unitDefine() {
    return {
      name: "degree",
      uiname: "Degrees",
      type: "angle",
      icon: -1,
      pattern: /-?\d+(\.\d+)?(\u00B0|degree|deg|d|degree|degrees)$/
    };
  }
  static parse(string) {
    string = normString(string);
    if (string.search("d") >= 0) {
      string = string.slice(0, string.search("d")).trim();
    } else if (string.search("\xB0") >= 0) {
      string = string.slice(0, string.search("\xB0")).trim();
    }
    return parseFloat(string);
  }
  //convert to internal units,
  //e.g. meters for distance
  static toInternal(value2) {
    return value2 / 180 * Math.PI;
  }
  static fromInternal(value2) {
    return value2 * 180 / Math.PI;
  }
  static buildString(value2, decimals = 3) {
    return "" + myToFixed(value2, decimals) + " \xB0";
  }
};
;
Unit.register(DegreeUnit);
var RadianUnit = class extends Unit {
  static {
    __name(this, "RadianUnit");
  }
  static unitDefine() {
    return {
      name: "radian",
      uiname: "Radians",
      type: "angle",
      icon: -1,
      pattern: /-?\d+(\.\d+)?(r|rad|radian|radians)$/
    };
  }
  static parse(string) {
    string = normString(string);
    if (string.search("r") >= 0) {
      string = string.slice(0, string.search("r")).trim();
    }
    return parseFloat(string);
  }
  //convert to internal units,
  //e.g. meters for distance
  static toInternal(value2) {
    return value2;
  }
  static fromInternal(value2) {
    return value2;
  }
  static buildString(value2, decimals = 3) {
    return "" + myToFixed(value2, decimals) + " r";
  }
};
;
Unit.register(RadianUnit);
function setBaseUnit(unit) {
  Unit.baseUnit = unit;
}
__name(setBaseUnit, "setBaseUnit");
window._getBaseUnit = () => Unit.baseUnit;
function setMetric(val2) {
  Unit.isMetric = val2;
}
__name(setMetric, "setMetric");
Unit.isMetric = true;
Unit.baseUnit = "meter";
var numre1 = /[+\-]?[0-9]+(\.[0-9]*)?$/;
var numre2 = /[+\-]?[0-9]?(\.[0-9]*)+$/;
var hexre1 = /[+\-]?[0-9a-fA-F]+h$/;
var hexre2 = /[+\-]?0x[0-9a-fA-F]+$/;
var binre = /[+\-]?0b[01]+$/;
var expre = /[+\-]?[0-9]+(\.[0-9]*)?[eE]\-?[0-9]+$/;
var intre = /[+\-]?[0-9]+$/;
function isnumber(s) {
  s = ("" + s).trim();
  function test2(re) {
    return s.search(re) === 0;
  }
  __name(test2, "test");
  return test2(intre) || test2(numre1) || test2(numre2) || test2(hexre1) || test2(hexre2) || test2(binre) || test2(expre);
}
__name(isnumber, "isnumber");
function parseValueIntern(string, baseUnit = void 0) {
  string = string.trim();
  if (string[0] === ".") {
    string = "0" + string;
  }
  if (typeof baseUnit === "string") {
    let base = Unit.getUnit(baseUnit);
    if (base === void 0 && baseUnit !== "none") {
      console.warn("Unknown unit " + baseUnit);
      return NaN;
    }
    baseUnit = base;
  }
  if (isnumber(string)) {
    let f3 = parseFloat(string);
    return f3;
  }
  if (baseUnit === void 0) {
    console.warn("No base unit in units.js:parseValueIntern");
  }
  for (let unit of Units) {
    let def = unit.unitDefine();
    if (unit.validate(string)) {
      console.log(unit);
      let value2 = unit.parse(string);
      if (baseUnit) {
        value2 = unit.toInternal(value2);
        return baseUnit.fromInternal(value2);
      } else {
        return value2;
      }
    }
  }
  return NaN;
}
__name(parseValueIntern, "parseValueIntern");
function parseValue(string, baseUnit = void 0, displayUnit = void 0) {
  displayUnit = Unit.getUnit(displayUnit);
  baseUnit = Unit.getUnit(baseUnit);
  let f3 = parseValueIntern(string, displayUnit || baseUnit);
  if (displayUnit) {
    f3 = displayUnit.toInternal(f3);
  }
  if (baseUnit) {
    f3 = baseUnit.fromInternal(f3);
  }
  return f3;
}
__name(parseValue, "parseValue");
function isNumber(string) {
  if (isnumber(string)) {
    return true;
  }
  for (let unit of Units) {
    let def = unit.unitDefine();
    if (unit.validate(string)) {
      return true;
    }
  }
  return false;
}
__name(isNumber, "isNumber");
var PixelUnit = class extends Unit {
  static {
    __name(this, "PixelUnit");
  }
  static unitDefine() {
    return {
      name: "pixel",
      uiname: "Pixel",
      type: "distance",
      icon: -1,
      pattern: /-?\d+(\.\d*)?px$/
    };
  }
  static parse(string) {
    string = normString(string);
    if (string.endsWith("px")) {
      string = string.slice(0, string.length - 2).trim();
    }
    return parseFloat(string);
  }
  //convert to internal units,
  //e.g. meters for distance
  static toInternal(value2) {
    return value2;
  }
  static fromInternal(value2) {
    return value2;
  }
  static buildString(value2, decimals = 2) {
    return "" + myToFixed(value2, decimals) + "px";
  }
};
Unit.register(PixelUnit);
var PercentUnit = class extends Unit {
  static {
    __name(this, "PercentUnit");
  }
  static unitDefine() {
    return {
      name: "percent",
      uiname: "Percent",
      type: "distance",
      icon: -1,
      pattern: /[0-9]+(\.[0-9]+)?[ \t]*%/
    };
  }
  static toInternal(value2) {
    return value2 / 100;
  }
  static fromInternal(value2) {
    return value2 * 100;
  }
  static parse(string) {
    return parseFloat(string.replace(/%/g, ""));
  }
  static buildString(value2, decimals = 2) {
    return value2.toFixed(decimals) + "%";
  }
};
Unit.register(PercentUnit);
function convert(value2, unita, unitb) {
  if (typeof unita === "string") {
    unita = Unit.getUnit(unita);
  }
  if (typeof unitb === "string") {
    unitb = Unit.getUnit(unitb);
  }
  if (unita && unitb) {
    return unitb.fromInternal(unita.toInternal(value2));
  } else if (unitb) {
    return unitb.fromInternal(value2);
  } else if (unita) {
    return unita.toInternal(value2);
  } else {
    return value2;
  }
}
__name(convert, "convert");
window.unitConvert = convert;
function buildString(value2, baseUnit = Unit.baseUnit, decimalPlaces = 3, displayUnit = Unit.baseUnit) {
  if (typeof baseUnit === "string" && baseUnit !== "none") {
    baseUnit = Unit.getUnit(baseUnit);
  }
  if (typeof displayUnit === "string" && displayUnit !== "none") {
    displayUnit = Unit.getUnit(displayUnit);
  }
  if (displayUnit !== baseUnit) {
    value2 = convert(value2, baseUnit, displayUnit);
  }
  if (displayUnit !== "none") {
    return displayUnit.buildString(value2, decimalPlaces);
  } else {
    return myToFixed(value2, decimalPlaces);
  }
}
__name(buildString, "buildString");
window._parseValueTest = parseValue;
window._buildStringTest = buildString;

// scripts/path.ux/scripts/path-controller/toolsys/toolprop.js
var NumberConstraintsBase = /* @__PURE__ */ new Set([
  "range",
  "expRate",
  "step",
  "uiRange",
  "baseUnit",
  "displayUnit",
  "stepIsRelative",
  "slideSpeed",
  "sliderDisplayExp"
]);
var IntegerConstraints = new Set([
  "radix"
].concat(list3(NumberConstraintsBase)));
var FloatConstrinats = new Set([
  "decimalPlaces"
].concat(list3(NumberConstraintsBase)));
var NumberConstraints = new Set(list3(IntegerConstraints).concat(list3(FloatConstrinats)));
var PropSubTypes2 = {
  COLOR: 1
};
var first = /* @__PURE__ */ __name((iter) => {
  if (iter === void 0) {
    return void 0;
  }
  if (!(Symbol.iterator in iter)) {
    for (let item in iter) {
      return item;
    }
    return void 0;
  }
  for (let item of iter) {
    return item;
  }
}, "first");
function setPropTypes(types) {
  for (let k2 in types) {
    PropTypes[k2] = types[k2];
  }
}
__name(setPropTypes, "setPropTypes");
var customPropertyTypes = [];
var PropClasses = {};
var customPropTypeBase = 17;
var wordmap = {
  sel: "select",
  unsel: "deselect",
  eid: "id",
  props: "properties",
  res: "resource"
};
var defaultRadix = 10;
var defaultDecimalPlaces = 4;
var OnceTag = class {
  static {
    __name(this, "OnceTag");
  }
  constructor(cb) {
    this.cb = cb;
  }
};
var ToolProperty2 = class _ToolProperty extends ToolPropertyIF {
  static {
    __name(this, "ToolProperty");
  }
  constructor(type, subtype, apiname, uiname = "", description = "", flag = 0, icon = -1) {
    super();
    this.data = void 0;
    if (type === void 0) {
      type = this.constructor.PROP_TYPE_ID;
    }
    this.type = type;
    this.subtype = subtype;
    this.wasSet = false;
    this.apiname = apiname;
    this.uiname = uiname !== void 0 ? uiname : apiname;
    this.description = description;
    this.flag = flag | PropFlags.SAVE_LAST_VALUE;
    this.icon = icon;
    this.icon2 = icon;
    this.decimalPlaces = defaultDecimalPlaces;
    this.radix = defaultRadix;
    this.step = 0.05;
    this.callbacks = {};
  }
  static internalRegister(cls2) {
    PropClasses[new cls2().type] = cls2;
  }
  static getClass(type) {
    return PropClasses[type];
  }
  static setDefaultRadix(n) {
    defaultRadix = n;
  }
  static setDefaultDecimalPlaces(n) {
    defaultDecimalPlaces = n;
  }
  static makeUIName(name) {
    let parts = [""];
    let lastc = void 0;
    let ischar = /* @__PURE__ */ __name((c) => {
      c = c.charCodeAt(0);
      let upper = c >= "A".charCodeAt(0);
      upper = upper && c <= "Z".charCodeAt(0);
      let lower = c >= "a".charCodeAt(0);
      lower = lower && c <= "z".charCodeAt(0);
      return upper || lower;
    }, "ischar");
    for (let i2 = 0; i2 < name.length; i2++) {
      let c = name[i2];
      if (c === "_" || c === "-" || c === "$") {
        lastc = c;
        c = " ";
        parts.push("");
        continue;
      }
      if (i2 > 0 && c === c.toUpperCase() && lastc !== lastc.toUpperCase()) {
        if (ischar(c) && ischar(lastc)) {
          parts.push("");
        }
      }
      parts[parts.length - 1] += c;
      lastc = c;
    }
    let subst = /* @__PURE__ */ __name((word) => {
      if (word in wordmap) {
        return wordmap[word];
      } else {
        return word;
      }
    }, "subst");
    parts = parts.filter((f3) => f3.trim().length > 0).map((f3) => subst(f3)).map((f3) => f3[0].toUpperCase() + f3.slice(1, f3.length).toLowerCase()).join(" ").trim();
    return parts;
  }
  static register(cls2) {
    cls2.PROP_TYPE_ID = 1 << customPropTypeBase;
    PropTypes[cls2.name] = cls2.PROP_TYPE_ID;
    customPropTypeBase++;
    customPropertyTypes.push(cls2);
    PropClasses[new cls2().type] = cls2;
    return cls2.PROP_TYPE_ID;
  }
  static calcRelativeStep(step, value2, logBase = 1.5) {
    value2 = Math.log(Math.abs(value2) + 1) / Math.log(logBase);
    value2 = Math.max(value2, step);
    this.report(termColor2("STEP", "red"), value2);
    return value2;
  }
  setDescription(s) {
    this.description = s;
    return this;
  }
  setUIName(s) {
    this.uiname = s;
    return this;
  }
  calcMemSize() {
    function strlen(s) {
      return s !== void 0 ? s.length + 8 : 8;
    }
    __name(strlen, "strlen");
    let tot = 0;
    tot += strlen(this.apiname) + strlen(this.uiname);
    tot += strlen(this.description);
    tot += 11 * 8;
    for (let k2 in this.callbacks) {
      tot += 24;
    }
    return tot;
  }
  equals(b) {
    throw new Error("implement me");
  }
  private() {
    this.flag |= PropFlags.PRIVATE;
    this.flag &= ~PropFlags.SAVE_LAST_VALUE;
    return this;
  }
  /** Save property in last value cache.  Now set by default,
   *  to disable use .ignoreLastValue().
   */
  saveLastValue() {
    this.flag |= PropFlags.SAVE_LAST_VALUE;
    return this;
  }
  ignoreLastValue() {
    this.flag &= ~PropFlags.SAVE_LAST_VALUE;
    return this;
  }
  report() {
    console.warn(...arguments);
  }
  _fire(type, arg1, arg2) {
    if (this.callbacks[type] === void 0) {
      return;
    }
    let stack = this.callbacks[type];
    stack = stack.concat([]);
    for (let i2 = 0; i2 < stack.length; i2++) {
      let cb = stack[i2];
      if (cb instanceof OnceTag) {
        let j2 = i2;
        while (j2 < stack.length - 1) {
          stack[j2] = stack[j2 + 1];
          j2++;
        }
        stack[j2] = void 0;
        stack.length--;
        i2--;
        cb.cb.call(this, arg1, arg2);
      } else {
        cb.call(this, arg1, arg2);
      }
    }
    return this;
  }
  clearEventCallbacks() {
    this.callbacks = {};
    return this;
  }
  once(type, cb) {
    if (this.callbacks[type] === void 0) {
      this.callbacks[type] = [];
    }
    for (let cb2 of this.callbacks[type]) {
      if (cb2 instanceof OnceTag && cb2.cb === cb) {
        return;
      }
    }
    cb = new OnceTag(cb);
    this.callbacks[type].push(cb);
    return this;
  }
  on(type, cb) {
    if (this.callbacks[type] === void 0) {
      this.callbacks[type] = [];
    }
    this.callbacks[type].push(cb);
    return this;
  }
  off(type, cb) {
    this.callbacks[type].remove(cb);
    return this;
  }
  toJSON() {
    return {
      type: this.type,
      subtype: this.subtype,
      apiname: this.apiname,
      uiname: this.uiname,
      description: this.description,
      flag: this.flag,
      icon: this.icon,
      data: this.data,
      range: this.range,
      uiRange: this.uiRange,
      step: this.step
    };
  }
  loadJSON(obj2) {
    this.type = obj2.type;
    this.subtype = obj2.subtype;
    this.apiname = obj2.apiname;
    this.uiname = obj2.uiname;
    this.description = obj2.description;
    this.flag = obj2.flag;
    this.icon = obj2.icon;
    this.data = obj2.data;
    return this;
  }
  getValue() {
    return this.data;
  }
  setValue(val2) {
    if (this.constructor === _ToolProperty) {
      throw new Error("implement me!");
    }
    this.wasSet = true;
    this._fire("change", val2);
  }
  copyTo(b) {
    b.apiname = this.apiname;
    b.uiname = this.uiname;
    b.description = this.description;
    b.icon = this.icon;
    b.icon2 = this.icon2;
    b.baseUnit = this.baseUnit;
    b.subtype = this.subtype;
    b.displayUnit = this.displayUnit;
    b.flag = this.flag;
    for (let k2 in this.callbacks) {
      b.callbacks[k2] = this.callbacks[k2];
    }
  }
  copy() {
    let ret2 = new this.constructor();
    this.copyTo(ret2);
    return ret2;
  }
  setStep(step) {
    this.step = step;
    return this;
  }
  getStep(value2 = 1) {
    if (this.stepIsRelative) {
      return _ToolProperty.calcRelativeStep(this.step, value2);
    } else {
      return this.step;
    }
  }
  setRelativeStep(step) {
    this.step = step;
    this.stepIsRelative = true;
  }
  setRange(min3, max3) {
    if (min3 === void 0 || max3 === void 0) {
      throw new Error("min and/or max cannot be undefined");
    }
    this.range = [min3, max3];
    return this;
  }
  noUnits() {
    this.baseUnit = this.displayUnit = "none";
    return this;
  }
  setBaseUnit(unit) {
    this.baseUnit = unit;
    return this;
  }
  setDisplayUnit(unit) {
    this.displayUnit = unit;
    return this;
  }
  setUnit(unit) {
    this.baseUnit = this.displayUnit = unit;
    return this;
  }
  setFlag(f3, combine = false) {
    this.flag = combine ? this.flag | f3 : f3;
    return this;
  }
  setUIRange(min3, max3) {
    if (min3 === void 0 || max3 === void 0) {
      throw new Error("min and/or max cannot be undefined");
    }
    this.uiRange = [min3, max3];
    return this;
  }
  setIcon(icon) {
    this.icon = icon;
    return this;
  }
  setIcon2(icon) {
    this.icon2 = icon;
    return this;
  }
  loadSTRUCT(reader) {
    reader(this);
    if (this.uiRange[0] === -1e17 && this.uiRange[1] === 1e17) {
      this.uiRange = void 0;
    }
    if (this.baseUnit === "undefined") {
      this.baseUnit = void 0;
    }
    if (this.displayUnit === "undefined") {
      this.displayUnit = void 0;
    }
  }
};
ToolProperty2.STRUCT = `
ToolProperty { 
  apiname        : string | ""+this.apiname;
  type           : int;
  flag           : int;
  subtype        : int;
  icon           : int;
  icon2          : int;
  baseUnit       : string | ""+this.baseUnit;
  displayUnit    : string | ""+this.displayUnit;
  range          : array(float) | this.range ? this.range : [-1e17, 1e17];
  uiRange        : array(float) | this.uiRange ? this.uiRange : [-1e17, 1e17];
  description    : string;
  stepIsRelative : bool;
  step           : float;
  expRate        : float;
  radix          : float;
  decimalPlaces  : int;
  uiname         : string | this.uiname || this.apiname || "";
  wasSet         : bool;
}
`;
struct_default.register(ToolProperty2);
window.ToolProperty = ToolProperty2;
var FloatArrayProperty = class extends ToolProperty2 {
  static {
    __name(this, "FloatArrayProperty");
  }
  constructor(value2, apiname, uiname, description, flag, icon) {
    super(PropTypes.FLOAT_ARRAY, void 0, apiname, uiname, description, flag, icon);
    this.value = [];
    if (value2 !== void 0) {
      this.setValue(value2);
    }
  }
  [Symbol.iterator]() {
    return this.value[Symbol.iterator]();
  }
  setValue(value2) {
    super.setValue();
    if (value2 === void 0) {
      throw new Error("value was undefined in FloatArrayProperty's setValue method");
    }
    this.value.length = 0;
    for (let item of value2) {
      if (typeof item !== "number" && typeof item !== "boolean") {
        console.log(value2);
        throw new Error("bad item for FloatArrayProperty " + item);
      }
      this.value.push(item);
    }
  }
  push(item) {
    if (typeof item !== "number" && typeof item !== "boolean") {
      console.log(value);
      throw new Error("bad item for FloatArrayProperty " + item);
    }
    this.value.push(item);
  }
  getValue() {
    return this.value;
  }
  clear() {
    this.value.length = 0;
    return this;
  }
};
FloatArrayProperty.STRUCT = struct_default.inherit(FloatArrayProperty, ToolProperty2) + `
  value : array(float);
}`;
struct_default.register(FloatArrayProperty);
var StringProperty = class extends ToolProperty2 {
  static {
    __name(this, "StringProperty");
  }
  constructor(value2, apiname, uiname, description, flag, icon) {
    super(PropTypes.STRING, void 0, apiname, uiname, description, flag, icon);
    this.multiLine = false;
    if (value2) {
      this.setValue(value2);
    } else {
      this.setValue("");
    }
    this.wasSet = false;
  }
  calcMemSize() {
    return super.calcMemSize() + (this.data !== void 0 ? this.data.length * 4 : 0) + 8;
  }
  equals(b) {
    return this.data === b.data;
  }
  copyTo(b) {
    super.copyTo(b);
    b.data = this.data;
    b.multiLine = this.multiLine;
    return this;
  }
  getValue() {
    return this.data;
  }
  setValue(val2) {
    super.setValue(val2);
    this.data = val2;
  }
};
StringProperty.STRUCT = struct_default.inherit(StringProperty, ToolProperty2) + `
  data : string;
}
`;
struct_default.register(StringProperty);
ToolProperty2.internalRegister(StringProperty);
var NumProperty = class extends ToolProperty2 {
  static {
    __name(this, "NumProperty");
  }
  constructor(type, value2, apiname, uiname, description, flag, icon) {
    super(type, void 0, apiname, uiname, description, flag, icon);
    this.data = 0;
    this.range = [0, 0];
  }
  equals(b) {
    return this.data == b.data;
  }
  loadSTRUCT(reader) {
    reader(this);
    super.loadSTRUCT(reader);
  }
};
;
NumProperty.STRUCT = struct_default.inherit(NumProperty, ToolProperty2) + `
  range : array(float);
  data  : float;
}
`;
var _NumberPropertyBase = class extends ToolProperty2 {
  static {
    __name(this, "_NumberPropertyBase");
  }
  constructor(type, value2, apiname, uiname, description, flag, icon) {
    super(type, null, apiname, uiname, description, flag, icon);
    this.data = 0;
    this.sliderDisplayExp = 1;
    this.slideSpeed = 1;
    this.expRate = 1.33;
    this.step = 0.1;
    this.stepIsRelative = false;
    this.range = [-1e17, 1e17];
    this.uiRange = void 0;
    if (value2 !== void 0 && value2 !== null) {
      this.setValue(value2);
      this.wasSet = false;
    }
  }
  get ui_range() {
    this.report("NumberProperty.ui_range is deprecated");
    return this.uiRange;
  }
  set ui_range(val2) {
    this.report("NumberProperty.ui_range is deprecated");
    this.uiRange = val2;
  }
  calcMemSize() {
    return super.calcMemSize() + 8 * 8;
  }
  equals(b) {
    return this.data === b.data;
  }
  toJSON() {
    let json2 = super.toJSON();
    json2.data = this.data;
    json2.expRate = this.expRate;
    return json2;
  }
  copyTo(b) {
    super.copyTo(b);
    b.displayUnit = this.displayUnit;
    b.baseUnit = this.baseUnit;
    b.expRate = this.expRate;
    b.step = this.step;
    b.range = this.range ? [this.range[0], this.range[1]] : void 0;
    b.uiRange = this.uiRange ? [this.uiRange[0], this.uiRange[1]] : void 0;
    b.slideSpeed = this.slideSpeed;
    b.sliderDisplayExp = this.sliderDisplayExp;
    b.data = this.data;
  }
  setSliderDisplayExp(f3) {
    this.sliderDisplayExp = f3;
    return this;
  }
  setSlideSpeed(f3) {
    this.slideSpeed = f3;
    return this;
  }
  /*
  * non-linear exponent for number sliders
  * in roll mode
  * */
  setExpRate(exp3) {
    this.expRate = exp3;
  }
  setValue(val2) {
    if (val2 === void 0 || val2 === null) {
      return;
    }
    if (typeof val2 !== "number") {
      throw new Error("Invalid number " + val2);
    }
    this.data = val2;
    super.setValue(val2);
    return this;
  }
  loadJSON(obj2) {
    super.loadJSON(obj2);
    let get = /* @__PURE__ */ __name((key2) => {
      if (key2 in obj2) {
        this[key2] = obj2[key2];
      }
    }, "get");
    get("range");
    get("step");
    get("expRate");
    get("ui_range");
    return this;
  }
};
;
_NumberPropertyBase.STRUCT = struct_default.inherit(_NumberPropertyBase, ToolProperty2) + `
  range            : array(float);
  expRate          : float;
  data             : float;
  step             : float;
  slideSpeed       : float;
  sliderDisplayExp : float;
}
`;
struct_default.register(_NumberPropertyBase);
var IntProperty = class extends _NumberPropertyBase {
  static {
    __name(this, "IntProperty");
  }
  constructor(value2, apiname, uiname, description, flag, icon) {
    super(PropTypes.INT, value2, apiname, uiname, description, flag, icon);
    this.baseUnit = this.displayUnit = "none";
    this.radix = 10;
  }
  setValue(val2) {
    super.setValue(Math.floor(val2));
    return this;
  }
  setRadix(radix) {
    this.radix = radix;
  }
  toJSON() {
    let json2 = super.toJSON();
    json2.data = this.data;
    json2.radix = this.radix;
    return json2;
  }
  loadJSON(obj2) {
    super.loadJSON(obj2);
    this.data = obj2.data || this.data;
    this.radix = obj2.radix || this.radix;
    return this;
  }
  loadSTRUCT(reader) {
    reader(this);
    super.loadSTRUCT(reader);
  }
};
IntProperty.STRUCT = struct_default.inherit(IntProperty, _NumberPropertyBase) + `
  data : int;
}`;
struct_default.register(IntProperty);
ToolProperty2.internalRegister(IntProperty);
var ReportProperty = class extends StringProperty {
  static {
    __name(this, "ReportProperty");
  }
  constructor(value2, apiname, uiname, description, flag, icon) {
    super(value2, apiname, uiname, description, flag, icon);
    this.type = PropTypes.REPORT;
  }
};
ReportProperty.STRUCT = struct_default.inherit(ReportProperty, StringProperty) + `
}
`;
struct_default.register(ReportProperty);
ToolProperty2.internalRegister(ReportProperty);
var BoolProperty = class extends ToolProperty2 {
  static {
    __name(this, "BoolProperty");
  }
  constructor(value2, apiname, uiname, description, flag, icon) {
    super(PropTypes.BOOL, void 0, apiname, uiname, description, flag, icon);
    this.data = !!value2;
  }
  equals(b) {
    return this.data == b.data;
  }
  copyTo(b) {
    super.copyTo(b);
    b.data = this.data;
    return this;
  }
  setValue(val2) {
    this.data = !!val2;
    super.setValue(val2);
    return this;
  }
  getValue() {
    return this.data;
  }
  toJSON() {
    let ret2 = super.toJSON();
    return ret2;
  }
  loadJSON(obj2) {
    super.loadJSON(obj2);
    return this;
  }
};
ToolProperty2.internalRegister(BoolProperty);
BoolProperty.STRUCT = struct_default.inherit(BoolProperty, ToolProperty2) + `
  data : bool;
}
`;
struct_default.register(BoolProperty);
var FloatProperty = class extends _NumberPropertyBase {
  static {
    __name(this, "FloatProperty");
  }
  constructor(value2, apiname, uiname, description, flag, icon) {
    super(PropTypes.FLOAT, value2, apiname, uiname, description, flag, icon);
    this.decimalPlaces = 4;
  }
  setDecimalPlaces(n) {
    this.decimalPlaces = n;
    return this;
  }
  copyTo(b) {
    super.copyTo(b);
    b.data = this.data;
    return this;
  }
  setValue(val2) {
    this.data = val2;
    super.setValue(val2);
    return this;
  }
  toJSON() {
    let json2 = super.toJSON();
    json2.data = this.data;
    json2.decimalPlaces = this.decimalPlaces;
    return json2;
  }
  loadJSON(obj2) {
    super.loadJSON(obj2);
    this.data = obj2.data || this.data;
    this.decimalPlaces = obj2.decimalPlaces || this.decimalPlaces;
    return this;
  }
  loadSTRUCT(reader) {
    reader(this);
    super.loadSTRUCT(reader);
  }
};
ToolProperty2.internalRegister(FloatProperty);
FloatProperty.STRUCT = struct_default.inherit(FloatProperty, _NumberPropertyBase) + `
  decimalPlaces : int;
  data          : float;
}
`;
struct_default.register(FloatProperty);
var EnumKeyPair = class {
  static {
    __name(this, "EnumKeyPair");
  }
  constructor(key2, val2) {
    this.key = "" + key2;
    this.val = "" + val2;
    this.key_is_int = typeof key2 === "number" || typeof key2 === "boolean";
    this.val_is_int = typeof val2 === "number" || typeof val2 === "boolean";
  }
  loadSTRUCT(reader) {
    reader(this);
    if (this.val_is_int) {
      this.val = parseInt(this.val);
    }
    if (this.key_is_int) {
      this.key = parseInt(this.key);
    }
  }
};
EnumKeyPair.STRUCT = `
EnumKeyPair {
  key        : string;
  val        : string;
  key_is_int : bool;
  val_is_int : bool; 
}
`;
struct_default.register(EnumKeyPair);
var EnumProperty = class _EnumProperty extends ToolProperty2 {
  static {
    __name(this, "EnumProperty");
  }
  constructor(string_or_int, valid_values, apiname, uiname, description, flag, icon) {
    super(PropTypes.ENUM, void 0, apiname, uiname, description, flag, icon);
    this.values = {};
    this.keys = {};
    this.ui_value_names = {};
    this.descriptions = {};
    if (valid_values === void 0) return this;
    if (valid_values instanceof Array || valid_values instanceof String) {
      for (var i2 = 0; i2 < valid_values.length; i2++) {
        this.values[valid_values[i2]] = valid_values[i2];
        this.keys[valid_values[i2]] = valid_values[i2];
      }
    } else {
      for (var k2 in valid_values) {
        this.values[k2] = valid_values[k2];
        this.keys[valid_values[k2]] = k2;
      }
    }
    if (string_or_int === void 0) {
      this.data = first(valid_values);
    } else {
      this.setValue(string_or_int);
    }
    for (var k2 in this.values) {
      let uin = k2.replace(/[_-]/g, " ").trim();
      uin = uin.split(" ");
      let uiname2 = ToolProperty2.makeUIName(k2);
      this.ui_value_names[k2] = uiname2;
      this.descriptions[k2] = uiname2;
    }
    this.iconmap = {};
    this.iconmap2 = {};
    this.wasSet = false;
  }
  calcHash(digest = new HashDigest()) {
    for (let key2 in this.keys) {
      digest.add(key2);
      digest.add(this.keys[key2]);
    }
    return digest.get();
  }
  updateDefinition(enumdef_or_prop) {
    let descriptions = this.descriptions;
    let ui_value_names = this.ui_value_names;
    this.values = {};
    this.keys = {};
    this.ui_value_names = {};
    this.descriptions = {};
    let enumdef;
    if (enumdef_or_prop instanceof _EnumProperty) {
      enumdef = enumdef_or_prop.values;
    } else {
      enumdef = enumdef_or_prop;
    }
    for (let k2 in enumdef) {
      let v = enumdef[k2];
      this.values[k2] = v;
      this.keys[v] = k2;
    }
    if (enumdef_or_prop instanceof _EnumProperty) {
      let prop = enumdef_or_prop;
      this.iconmap = Object.assign({}, prop.iconmap);
      this.iconmap2 = Object.assign({}, prop.iconmap2);
      this.ui_value_names = Object.assign({}, prop.ui_value_names);
      this.descriptions = Object.assign({}, prop.descriptions);
    } else {
      for (let k2 in this.values) {
        if (k2 in ui_value_names) {
          this.ui_value_names[k2] = ui_value_names[k2];
        } else {
          this.ui_value_names[k2] = ToolProperty2.makeUIName(k2);
        }
        if (k2 in descriptions) {
          this.descriptions[k2] = descriptions[k2];
        } else {
          this.descriptions[k2] = ToolProperty2.makeUIName(k2);
        }
      }
    }
    this._fire("metaChange", this);
    return this;
  }
  calcMemSize() {
    let tot = super.calcMemSize();
    for (let k2 in this.values) {
      tot += (k2.length * 4 + 16) * 4;
    }
    if (this.descriptions) {
      for (let k2 in this.descriptions) {
        tot += (k2.length + this.descriptions[k2].length) * 4;
      }
    }
    return tot + 64;
  }
  equals(b) {
    return this.getValue() === b.getValue();
  }
  addUINames(map3) {
    for (let k2 in map3) {
      this.ui_value_names[k2] = map3[k2];
    }
    return this;
  }
  addDescriptions(map3) {
    for (let k2 in map3) {
      this.descriptions[k2] = map3[k2];
    }
    return this;
  }
  addIcons2(iconmap2) {
    if (this.iconmap2 === void 0) {
      this.iconmap2 = {};
    }
    for (let k2 in iconmap2) {
      this.iconmap2[k2] = iconmap2[k2];
    }
    return this;
  }
  addIcons(iconmap) {
    if (this.iconmap === void 0) {
      this.iconmap = {};
    }
    for (let k2 in iconmap) {
      this.iconmap[k2] = iconmap[k2];
    }
    return this;
  }
  copyTo(p) {
    super.copyTo(p);
    p.data = this.data;
    p.keys = Object.assign({}, this.keys);
    p.values = Object.assign({}, this.values);
    p.ui_value_names = this.ui_value_names;
    p.update = this.update;
    p.api_update = this.api_update;
    p.iconmap = this.iconmap;
    p.iconmap2 = this.iconmap2;
    p.descriptions = this.descriptions;
    return p;
  }
  copy() {
    var p = new this.constructor("dummy", { "dummy": 0 }, this.apiname, this.uiname, this.description, this.flag);
    this.copyTo(p);
    return p;
  }
  getValue() {
    if (this.data in this.values)
      return this.values[this.data];
    else
      return this.data;
  }
  setValue(val2) {
    if (!(val2 in this.values) && val2 in this.keys)
      val2 = this.keys[val2];
    if (!(val2 in this.values)) {
      this.report("Invalid value for enum!", val2, this.values);
      return;
    }
    this.data = val2;
    super.setValue(val2);
    return this;
  }
  _loadMap(obj2) {
    if (!obj2) {
      return {};
    }
    let ret2 = {};
    for (let k2 of obj2) {
      ret2[k2.key] = k2.val;
    }
    return ret2;
  }
  _saveMap(obj2) {
    obj2 = obj2 === void 0 ? {} : obj2;
    let ret2 = [];
    for (let k2 in obj2) {
      ret2.push(new EnumKeyPair(k2, obj2[k2]));
    }
    return ret2;
  }
  loadSTRUCT(reader) {
    reader(this);
    super.loadSTRUCT(reader);
    this.keys = this._loadMap(this._keys);
    this.values = this._loadMap(this._values);
    this.ui_value_names = this._loadMap(this._ui_value_names);
    this.iconmap = this._loadMap(this._iconmap);
    this.iconmap2 = this._loadMap(this._iconmap2);
    this.descriptions = this._loadMap(this._descriptions);
    if (this.data_is_int) {
      this.data = parseInt(this.data);
      delete this.data_is_int;
    } else if (this.data in this.keys) {
      this.data = this.keys[this.data];
    }
  }
  _is_data_int() {
    return typeof this.data === "number";
  }
};
ToolProperty2.internalRegister(EnumProperty);
EnumProperty.STRUCT = struct_default.inherit(EnumProperty, ToolProperty2) + `
  data            : string             | ""+this.data;
  data_is_int     : bool               | this._is_data_int();
  _keys           : array(EnumKeyPair) | this._saveMap(this.keys) ;
  _values         : array(EnumKeyPair) | this._saveMap(this.values) ;
  _ui_value_names : array(EnumKeyPair) | this._saveMap(this.ui_value_names) ;
  _iconmap        : array(EnumKeyPair) | this._saveMap(this.iconmap) ;
  _iconmap2       : array(EnumKeyPair) | this._saveMap(this.iconmap2) ;
  _descriptions   : array(EnumKeyPair) | this._saveMap(this.descriptions) ;  
}
`;
struct_default.register(EnumProperty);
var FlagProperty = class extends EnumProperty {
  static {
    __name(this, "FlagProperty");
  }
  constructor(string_or_int, valid_values, apiname, uiname, description, flag, icon) {
    super(
      string_or_int,
      valid_values,
      apiname,
      uiname,
      description,
      flag,
      icon
    );
    this.type = PropTypes.FLAG;
    this.wasSet = false;
  }
  setValue(bitmask) {
    this.data = bitmask;
    ToolProperty2.prototype.setValue.call(this, bitmask);
    return this;
  }
};
ToolProperty2.internalRegister(FlagProperty);
FlagProperty.STRUCT = struct_default.inherit(FlagProperty, EnumProperty) + `
}
`;
struct_default.register(FlagProperty);
var VecPropertyBase = class extends FloatProperty {
  static {
    __name(this, "VecPropertyBase");
  }
  constructor(data, apiname, uiname, description) {
    super(void 0, apiname, uiname, description);
    this.hasUniformSlider = false;
  }
  calcMemSize() {
    return super.calcMemSize() + this.data.length * 8;
  }
  equals(b) {
    return this.data.vectorDistance(b.data) < 1e-5;
  }
  uniformSlider(state = true) {
    this.hasUniformSlider = state;
    return this;
  }
  copyTo(b) {
    super.copyTo(b);
    b.hasUniformSlider = this.hasUniformSlider;
  }
};
VecPropertyBase.STRUCT = struct_default.inherit(VecPropertyBase, FloatProperty) + `
  hasUniformSlider : bool | this.hasUniformSlider || false;
}
`;
var Vec2Property = class extends FloatProperty {
  static {
    __name(this, "Vec2Property");
  }
  constructor(data, apiname, uiname, description) {
    super(void 0, apiname, uiname, description);
    this.type = PropTypes.VEC2;
    this.data = new Vector2(data);
  }
  setValue(v) {
    this.data.load(v);
    ToolProperty2.prototype.setValue.call(this, v);
    return this;
  }
  getValue() {
    return this.data;
  }
  copyTo(b) {
    let data = b.data;
    super.copyTo(b);
    b.data = data;
    b.data.load(this.data);
  }
};
Vec2Property.STRUCT = struct_default.inherit(Vec2Property, VecPropertyBase) + `
  data : vec2;
}
`;
struct_default.register(Vec2Property);
ToolProperty2.internalRegister(Vec2Property);
var Vec3Property = class extends VecPropertyBase {
  static {
    __name(this, "Vec3Property");
  }
  constructor(data, apiname, uiname, description) {
    super(void 0, apiname, uiname, description);
    this.type = PropTypes.VEC3;
    this.data = new Vector32(data);
  }
  isColor() {
    this.subtype = PropSubTypes2.COLOR;
    return this;
  }
  setValue(v) {
    this.data.load(v);
    ToolProperty2.prototype.setValue.call(this, v);
    return this;
  }
  getValue() {
    return this.data;
  }
  copyTo(b) {
    let data = b.data;
    super.copyTo(b);
    b.data = data;
    b.data.load(this.data);
  }
};
Vec3Property.STRUCT = struct_default.inherit(Vec3Property, VecPropertyBase) + `
  data : vec3;
}
`;
struct_default.register(Vec3Property);
ToolProperty2.internalRegister(Vec3Property);
var Vec4Property = class extends FloatProperty {
  static {
    __name(this, "Vec4Property");
  }
  constructor(data, apiname, uiname, description) {
    super(void 0, apiname, uiname, description);
    this.type = PropTypes.VEC4;
    this.data = new Vector4(data);
  }
  setValue(v, w = 1) {
    this.data.load(v);
    ToolProperty2.prototype.setValue.call(this, v);
    if (v.length < 3) {
      this.data[2] = 0;
    }
    if (v.length < 4) {
      this.data[3] = w;
    }
    return this;
  }
  isColor() {
    this.subtype = PropSubTypes2.COLOR;
    return this;
  }
  getValue() {
    return this.data;
  }
  copyTo(b) {
    let data = b.data;
    super.copyTo(b);
    b.data = data;
    b.data.load(this.data);
  }
};
Vec4Property.STRUCT = struct_default.inherit(Vec4Property, VecPropertyBase) + `
  data : vec4;
}
`;
struct_default.register(Vec4Property);
ToolProperty2.internalRegister(Vec4Property);
var QuatProperty = class extends ToolProperty2 {
  static {
    __name(this, "QuatProperty");
  }
  constructor(data, apiname, uiname, description) {
    super(PropTypes.QUAT, void 0, apiname, uiname, description);
    this.data = new Quat(data);
  }
  equals(b) {
    return this.data.vectorDistance(b.data) < 1e-5;
  }
  setValue(v) {
    this.data.load(v);
    super.setValue(v);
    return this;
  }
  getValue() {
    return this.data;
  }
  copyTo(b) {
    let data = b.data;
    super.copyTo(b);
    b.data = data;
    b.data.load(this.data);
  }
};
QuatProperty.STRUCT = struct_default.inherit(QuatProperty, VecPropertyBase) + `
  data : vec4;
}
`;
struct_default.register(QuatProperty);
ToolProperty2.internalRegister(QuatProperty);
var Mat4Property = class extends ToolProperty2 {
  static {
    __name(this, "Mat4Property");
  }
  constructor(data, apiname, uiname, description) {
    super(PropTypes.MATRIX4, void 0, apiname, uiname, description);
    this.data = new Matrix4(data);
  }
  calcMemSize() {
    return super.calcMemSize() + 16 * 8 + 32;
  }
  equals(b) {
    let m1 = this.data.$matrix;
    let m2 = b.data.$matrix;
    for (let i2 = 1; i2 <= 4; i2++) {
      for (let j2 = 1; j2 <= 4; j2++) {
        let key2 = `m${i2}${j2}`;
        if (Math.abs(m1[key2] - m2[key2]) > 1e-5) {
          return false;
        }
      }
    }
    return true;
  }
  setValue(v) {
    this.data.load(v);
    super.setValue(v);
    return this;
  }
  getValue() {
    return this.data;
  }
  copyTo(b) {
    let data = b.data;
    super.copyTo(b);
    b.data = data;
    b.data.load(this.data);
  }
  loadSTRUCT(reader) {
    reader(this);
    super.loadSTRUCT(reader);
  }
};
Mat4Property.STRUCT = struct_default.inherit(Mat4Property, FloatProperty) + `
  data           : mat4;
}
`;
struct_default.register(Mat4Property);
ToolProperty2.internalRegister(Mat4Property);
var ListProperty = class _ListProperty extends ToolProperty2 {
  static {
    __name(this, "ListProperty");
  }
  /*
  * Prop must be a ToolProperty subclass instance
  * */
  constructor(prop, list4 = [], uiname = "") {
    super(PropTypes.PROPLIST);
    this.uiname = uiname;
    this.flag &= ~PropFlags.SAVE_LAST_VALUE;
    if (typeof prop == "number") {
      prop = PropClasses[prop];
      if (prop !== void 0) {
        prop = new prop();
      }
    } else if (prop !== void 0) {
      if (prop instanceof ToolProperty2) {
        prop = prop.copy();
      } else {
        prop = new prop();
      }
    }
    this.prop = prop;
    this.value = [];
    if (list4) {
      for (let val2 of list4) {
        this.push(val2);
      }
    }
    this.wasSet = false;
  }
  get length() {
    return this.value.length;
  }
  set length(val2) {
    this.value.length = val2;
  }
  splice(i2, deleteCount, ...newItems) {
    const deletedItems = this.value.splice(i2, deleteCount, ...newItems);
    this.length = this.value.length;
    return deletedItems;
  }
  calcMemSize() {
    let tot = super.calcMemSize();
    let psize = this.prop ? this.prop.calcMemSize() + 8 : 8;
    if (!this.prop && this.value.length > 0) {
      psize = this.value[0].calcMemSize();
    }
    tot += psize * this.value.length + 8;
    tot += 16;
    return tot;
  }
  equals(b) {
    let l1 = this.value ? this.value.length : 0;
    let l2 = b.value ? b.value.length : 0;
    if (l1 !== l2) {
      return false;
    }
    for (let i2 = 0; i2 < l1; i2++) {
      let prop1 = this.value[i2];
      let prop2 = b.value[i2];
      let bad = prop1.constructor !== prop2.constructor;
      bad = bad || !prop1.equals(prop2);
      if (bad) {
        return false;
      }
    }
    return true;
  }
  copyTo(b) {
    super.copyTo(b);
    b.prop = this.prop.copy();
    b.value.length = [];
    for (let prop of this.value) {
      b.value.push(prop.copy());
    }
    return b;
  }
  copy() {
    return this.copyTo(new _ListProperty(this.prop.copy()));
  }
  push(item = void 0) {
    if (item === void 0) {
      item = this.prop.copy();
    }
    if (!(item instanceof ToolProperty2)) {
      let prop = this.prop.copy();
      prop.setValue(item);
      item = prop;
    }
    this.value.push(item);
    return item;
  }
  clear() {
    this.value.length = 0;
    return this;
  }
  getListItem(i2) {
    if (i2 < 0) {
      i2 += this.length;
    }
    return this.value[i2].getValue();
  }
  setListItem(i2, val2) {
    if (i2 < 0) {
      i2 += this.length;
    }
    this.value[i2].setValue(val2);
  }
  setValue(value2) {
    this.clear();
    for (let item of value2) {
      let prop = this.push();
      if (typeof item !== "object") {
        prop.setValue(item);
      } else if (item instanceof prop.constructor) {
        item.copyTo(prop);
      } else {
        this.report(item);
        throw new Error("invalid value " + item);
      }
    }
    super.setValue(value2);
    return this;
  }
  getValue() {
    return this.value;
  }
  [Symbol.iterator]() {
    let list4 = this.value;
    return function* () {
      for (let item of list4) {
        yield item.getValue();
      }
    }();
  }
};
ListProperty.STRUCT = struct_default.inherit(ListProperty, ToolProperty2) + `
  prop  : abstract(ToolProperty);
  value : array(abstract(ToolProperty));
}`;
struct_default.register(ListProperty);
ToolProperty2.internalRegister(ListProperty);
var StringSetProperty = class extends ToolProperty2 {
  static {
    __name(this, "StringSetProperty");
  }
  constructor(value2 = void 0, definition = []) {
    super(PropTypes.STRSET);
    let values = [];
    this.value = new set2();
    let def = definition;
    if (Array.isArray(def) || def instanceof set2 || def instanceof Set) {
      for (let item of def) {
        values.push(item);
      }
    } else if (typeof def === "object") {
      for (let k2 in def) {
        values.push(k2);
      }
    } else if (typeof def === "string") {
      values.push(def);
    }
    this.values = {};
    this.ui_value_names = {};
    this.descriptions = {};
    this.iconmap = {};
    this.iconmap2 = {};
    for (let v of values) {
      this.values[v] = v;
      let uiname = ToolProperty2.makeUIName(v);
      this.ui_value_names[v] = uiname;
    }
    if (value2 !== void 0) {
      this.setValue(value2);
    }
    this.wasSet = false;
  }
  calcMemSize() {
    let tot = super.calcMemSize();
    for (let k2 in this.values) {
      tot += (k2.length + 16) * 5;
    }
    if (this.descriptions) {
      for (let k2 in this.descriptions) {
        tot += (k2.length + this.descriptions[k2].length + 8) * 4;
      }
    }
    return tot + 64;
  }
  equals(b) {
    return this.value.equals(b.value);
  }
  /*
  * Values can be a string, undefined/null, or a list/set/object-literal of strings.
  * If destructive is true, then existing set will be cleared.
  * */
  setValue(values, destructive = true, soft_fail = true) {
    let bad = typeof values !== "string";
    bad = bad && typeof values !== "object";
    bad = bad && values !== void 0 && values !== null;
    if (bad) {
      if (soft_fail) {
        this.report("Invalid argument to StringSetProperty.prototype.setValue() " + values);
        return;
      } else {
        throw new Error("Invalid argument to StringSetProperty.prototype.setValue() " + values);
      }
    }
    if (!values) {
      this.value.clear();
    } else if (typeof values === "string") {
      if (destructive)
        this.value.clear();
      if (!(values in this.values)) {
        if (soft_fail) {
          this.report(`"${values}" is not in this StringSetProperty`);
          return;
        } else {
          throw new Error(`"${values}" is not in this StringSetProperty`);
        }
      }
      this.value.add(values);
    } else {
      let data = [];
      if (Array.isArray(values) || values instanceof set2 || values instanceof Set) {
        for (let item of values) {
          data.push(item);
        }
      } else {
        for (let k2 in values) {
          data.push(k2);
        }
      }
      for (let item of data) {
        if (!(item in this.values)) {
          if (soft_fail) {
            this.report(`"${item}" is not in this StringSetProperty`);
            continue;
          } else {
            throw new Error(`"${item}" is not in this StringSetProperty`);
          }
        }
        this.value.add(item);
      }
    }
    super.setValue();
    return this;
  }
  getValue() {
    return this.value;
  }
  addIcons2(iconmap2) {
    if (iconmap2 === void 0)
      return;
    for (let k2 in iconmap2) {
      this.iconmap2[k2] = iconmap2[k2];
    }
    return this;
  }
  addIcons(iconmap) {
    if (iconmap === void 0)
      return;
    for (let k2 in iconmap) {
      this.iconmap[k2] = iconmap[k2];
    }
    return this;
  }
  addUINames(map3) {
    for (let k2 in map3) {
      this.ui_value_names[k2] = map3[k2];
    }
    return this;
  }
  addDescriptions(map3) {
    for (let k2 in map3) {
      this.descriptions[k2] = map3[k2];
    }
    return this;
  }
  copyTo(b) {
    super.copyTo(b);
    for (let val2 of this.value) {
      b.value.add(val2);
    }
    b.values = {};
    for (let k2 in this.values) {
      b.values[k2] = this.values[k2];
    }
    b.ui_value_names = {};
    for (let k2 in this.ui_value_names) {
      b.ui_value_names[k2] = this.ui_value_names[k2];
    }
    b.iconmap = {};
    b.iconmap2 = {};
    for (let k2 in this.iconmap) {
      b.iconmap[k2] = this.iconmap[k2];
    }
    for (let k2 in this.iconmap2) {
      b.iconmap2[k2] = this.iconmap2[k2];
    }
    b.descriptions = {};
    for (let k2 in this.descriptions) {
      b.descriptions[k2] = this.descriptions[k2];
    }
  }
  loadSTRUCT(reader) {
    reader(this);
    let values = this.values;
    this.values = {};
    for (let s of values) {
      this.values[s] = s;
    }
    this.value = new set2(this.value);
  }
};
StringSetProperty.STRUCT = struct_default.inherit(StringSetProperty, ToolProperty2) + `
  value  : iter(string);
  values : iterkeys(string);  
}`;
struct_default.register(StringSetProperty);
ToolProperty2.internalRegister(StringSetProperty);

// scripts/path.ux/scripts/path-controller/controller/controller_base.js
var DataFlags = {
  READ_ONLY: 1,
  USE_CUSTOM_GETSET: 2,
  USE_FULL_UNDO: 4,
  //DataPathSetOp in controller_ops.js saves/loads entire file for undo/redo
  USE_CUSTOM_PROP_GETTER: 8,
  USE_EVAL_MASS_SET_PATHS: 16
};
var DataTypes = {
  STRUCT: 0,
  DYNAMIC_STRUCT: 1,
  PROP: 2,
  ARRAY: 3
};
var propCacheRings = {};
function getTempProp(type) {
  if (!(type in propCacheRings)) {
    propCacheRings[type] = cachering2.fromConstructor(ToolProperty2.getClass(type), 32);
  }
  return propCacheRings[type].next();
}
__name(getTempProp, "getTempProp");
var DataPathError = class extends Error {
  static {
    __name(this, "DataPathError");
  }
};
;
function getVecClass(proptype) {
  switch (proptype) {
    case PropTypes.VEC2:
      return Vector2;
    case PropTypes.VEC3:
      return Vector32;
    case PropTypes.VEC4:
      return Vector4;
    case PropTypes.QUAT:
      return Quat;
    default:
      throw new Error("bad prop type " + proptype);
  }
}
__name(getVecClass, "getVecClass");
function isVecProperty(prop) {
  if (!prop || typeof prop !== "object" || prop === null)
    return false;
  let ok = false;
  ok = ok || prop instanceof Vec2PropertyIF;
  ok = ok || prop instanceof Vec3PropertyIF;
  ok = ok || prop instanceof Vec4PropertyIF;
  ok = ok || prop instanceof Vec2Property;
  ok = ok || prop instanceof Vec3Property;
  ok = ok || prop instanceof Vec4Property;
  ok = ok || prop.type === PropTypes.VEC2;
  ok = ok || prop.type === PropTypes.VEC3;
  ok = ok || prop.type === PropTypes.VEC4;
  ok = ok || prop.type === PropTypes.QUAT;
  return ok;
}
__name(isVecProperty, "isVecProperty");
var DataPath = class _DataPath {
  static {
    __name(this, "DataPath");
  }
  constructor(path, apiname, prop, type = DataTypes.PROP) {
    this.type = type;
    this.data = prop;
    this.apiname = apiname;
    this.path = path;
    this.flag = 0;
    this.struct = void 0;
    if (type === DataTypes.PROP && this.data && ("" + this.data.uiname).trim().length === 0) {
      this.data.uiname = ToolProperty2.makeUIName(apiname);
    }
  }
  evalMassSetFilter() {
    this.flag |= DataFlags.USE_EVAL_MASS_SET_PATHS;
    return this;
  }
  copy() {
    let ret2 = new _DataPath();
    ret2.flag = this.flag;
    ret2.type = this.type;
    ret2.data = this.data;
    ret2.apiname = this.apiname;
    ret2.path = this.path;
    ret2.struct = this.struct;
    return ret2;
  }
  /** this property should not be treated as something
   *  that should be kept track off in the undo stack*/
  noUndo() {
    this.data.flag |= PropFlags.NO_UNDO;
    return this;
  }
  setProp(prop) {
    this.data = prop;
  }
  readOnly() {
    this.flag |= DataFlags.READ_ONLY;
    if (this.type === DataTypes.PROP) {
      this.data.flag |= PropFlags.READ_ONLY;
    }
    return this;
  }
  read_only() {
    console.warn("DataPath.read_only is deprecated; use readOnly");
    return this.readOnly();
  }
  /** used to override tool property settings,
   *  e.g. ranges, units, etc; returns a
   *  base class instance of ToolProperty.
   *
   *  The this context points to the original ToolProperty and contains
   *  a few useful references:
   *
   *  this.dataref - an object instance of this struct type
   *  this.ctx - a context
   *
   *  callback takes one argument, a new (freshly copied of original)
   *  tool property to modify
   *
   * */
  customPropCallback(callback) {
    this.flag |= DataFlags.USE_CUSTOM_PROP_GETTER;
    this.data.flag |= PropFlags.USE_CUSTOM_PROP_GETTER;
    this.propGetter = callback;
    return this;
  }
  /**
   *
   * For the callbacks 'this' points to an internal ToolProperty;
   * Referencing object lives in 'this.dataref'; calling context in 'this.ctx';
   * and the datapath is 'this.datapath'
   **/
  customGetSet(get, set4) {
    this.flag |= DataFlags.USE_CUSTOM_GETSET;
    if (this.type !== DataTypes.DYNAMIC_STRUCT && this.type !== DataTypes.STRUCT) {
      this.data.flag |= PropFlags.USE_CUSTOM_GETSET;
      this.data._getValue = this.data.getValue;
      this.data._setValue = this.data.setValue;
      if (get)
        this.data.getValue = get;
      if (set4)
        this.data.setValue = set4;
    } else {
      this.getSet = {
        get,
        set: set4
      };
      this.getSet.dataref = void 0;
      this.getSet.datapath = void 0;
      this.getSet.ctx = void 0;
    }
    return this;
  }
  customSet(set4) {
    this.customGetSet(void 0, set4);
    return this;
  }
  customGet(get) {
    this.customGetSet(get, void 0);
    return this;
  }
  /**db will be executed with underlying data object
     that contains this path in 'this.dataref'
  
     main event is 'change'
     */
  on(type, cb) {
    if (this.type == DataTypes.PROP) {
      this.data.on(type, cb);
    } else {
      throw new Error("invalid call to DataPath.on");
    }
    return this;
  }
  off(type, cb) {
    if (this.type === DataTypes.PROP) {
      this.data.off(type, cb);
    }
  }
  simpleSlider() {
    this.data.flag |= PropFlags.SIMPLE_SLIDER;
    this.data.flag &= ~PropFlags.FORCE_ROLLER_SLIDER;
    return this;
  }
  rollerSlider() {
    this.data.flag &= ~PropFlags.SIMPLE_SLIDER;
    this.data.flag |= PropFlags.FORCE_ROLLER_SLIDER;
    return this;
  }
  checkStrip(state = true) {
    if (state) {
      this.data.flag |= PropFlags.FORCE_ENUM_CHECKBOXES;
    } else {
      this.data.flag &= ~PropFlags.FORCE_ENUM_CHECKBOXES;
    }
    return this;
  }
  noUnits() {
    this.baseUnit("none");
    this.displayUnit("none");
    return this;
  }
  baseUnit(unit) {
    this.data.setBaseUnit(unit);
    return this;
  }
  displayUnit(unit) {
    this.data.setDisplayUnit(unit);
    return this;
  }
  unit(unit) {
    return this.baseUnit(unit).displayUnit(unit);
  }
  editAsBaseUnit() {
    this.data.flag |= PropFlags.EDIT_AS_BASE_UNIT;
    return this;
  }
  range(min3, max3) {
    this.data.setRange(min3, max3);
    return this;
  }
  uiRange(min3, max3) {
    this.data.setUIRange(min3, max3);
    return this;
  }
  decimalPlaces(n) {
    this.data.setDecimalPlaces(n);
    return this;
  }
  sliderDisplayExp(f3) {
    this.data.setSliderDisplayExp(f3);
    return this;
  }
  /**
   * like other callbacks (until I refactor it),
   * func will be called with a mysterious object that stores
   * the following properties:
   *
   * this.dataref  : owning object reference
   * this.datactx  : ctx
   * this.datapath : datapath
   * */
  uiNameGetter(func2) {
    this.ui_name_get = func2;
    return this;
  }
  expRate(exp3) {
    this.data.setExpRate(exp3);
    return this;
  }
  slideSpeed(speed) {
    this.data.setSlideSpeed(speed);
    return this;
  }
  /**adds a slider for moving vector component sliders simultaneously*/
  uniformSlider(state = true) {
    this.data.uniformSlider(state);
    return this;
  }
  radix(r) {
    this.data.setRadix(r);
    return this;
  }
  relativeStep(s) {
    this.data.setRelativeStep(s);
    return this;
  }
  step(s) {
    this.data.setStep(s);
    return this;
  }
  /**
   *
   * Tell DataPathSetOp to save/load entire app state for undo/redo
   *
   * */
  fullSaveUndo() {
    this.flag |= DataFlags.USE_FULL_UNDO;
    this.data.flag |= PropFlags.USE_BASE_UNDO;
    return this;
  }
  icon(i2) {
    this.data.setIcon(i2);
    return this;
  }
  icon2(i2) {
    this.data.setIcon2(i2);
    return this;
  }
  icons(icons) {
    this.data.addIcons(icons);
    return this;
  }
  /** secondary icons (e.g. disabled states) */
  icons2(icons) {
    this.data.addIcons2(icons);
    return this;
  }
  descriptions(description_map) {
    this.data.addDescriptions(description_map);
    return this;
  }
  uiNames(uinames) {
    this.data.addUINames(uinames);
    return this;
  }
  description(d) {
    this.data.description = d;
    return this;
  }
};
var StructFlags = {
  NO_UNDO: 1
  //struct and its child structs can't participate in undo
  //via the DataPathToolOp
};
var ListIface = class {
  static {
    __name(this, "ListIface");
  }
  getStruct(api2, list4, key2) {
  }
  get(api2, list4, key2) {
  }
  getKey(api2, list4, obj2) {
  }
  getActive(api2, list4) {
  }
  setActive(api2, list4, val2) {
  }
  set(api2, list4, key2, val2) {
    list4[key2] = val2;
  }
  getIter() {
  }
  filter(api2, list4, filter2) {
  }
};
var ToolOpIface = class {
  static {
    __name(this, "ToolOpIface");
  }
  constructor() {
  }
  static tooldef() {
    return {
      uiname: "!untitled tool",
      icon: -1,
      toolpath: "logical_module.tool",
      //logical_module need not match up to real module name
      description: void 0,
      is_modal: false,
      inputs: {},
      //tool properties
      outputs: {}
      //tool properties
    };
  }
};
;
var DataAPIClass = void 0;
function setImplementationClass(cls2) {
  DataAPIClass = cls2;
}
__name(setImplementationClass, "setImplementationClass");
function registerTool(cls2) {
  if (DataAPIClass === void 0) {
    throw new Error("data api not initialized properly; call setImplementationClass");
  }
  return DataAPIClass.registerTool(cls2);
}
__name(registerTool, "registerTool");

// scripts/path.ux/scripts/path-controller/controller/context.js
var notifier = void 0;
function setNotifier(cls2) {
  notifier = cls2;
}
__name(setNotifier, "setNotifier");
var ContextFlags = {
  IS_VIEW: 1
};
var InheritFlag = class {
  static {
    __name(this, "InheritFlag");
  }
  constructor(data) {
    this.data = data;
  }
};
var __idgen = 1;
if (Symbol.ContextID === void 0) {
  Symbol.ContextID = Symbol("ContextID");
}
if (Symbol.CachedDef === void 0) {
  Symbol.CachedDef = Symbol("CachedDef");
}
var _ret_tmp = [void 0];
var OverlayClasses = [];
function makeDerivedOverlay(parent2) {
  return class ContextOverlay2 extends parent2 {
    static {
      __name(this, "ContextOverlay");
    }
    constructor(appstate) {
      super(appstate);
      this.ctx = void 0;
      this._state = appstate;
    }
    get state() {
      return this._state;
    }
    set state(state) {
      this._state = state;
    }
    onRemove(have_new_file = false) {
    }
    copy() {
      return new this.constructor(this._state);
    }
    validate() {
      throw new Error("Implement me!");
    }
    //base classes override this
    static contextDefine() {
      throw new Error("implement me!");
      return {
        name: "",
        flag: 0
      };
    }
    //don't override this
    static resolveDef() {
      if (this.hasOwnProperty(Symbol.CachedDef)) {
        return this[Symbol.CachedDef];
      }
      let def2 = Symbol.CachedDef = {};
      let def = this.contextDefine();
      if (def === void 0) {
        def = {};
      }
      for (let k2 in def) {
        def2[k2] = def[k2];
      }
      if (!("flag" in def)) {
        def2.flag = Context.inherit(0);
      }
      let parents = [];
      let p = getClassParent(this);
      while (p && p !== ContextOverlay2) {
        parents.push(p);
        p = getClassParent(p);
      }
      if (def2.flag instanceof InheritFlag) {
        let flag = def2.flag.data;
        for (let p2 of parents) {
          let def3 = p2.contextDefine();
          if (!def3.flag) {
            continue;
          } else if (def3.flag instanceof InheritFlag) {
            flag |= def3.flag.data;
          } else {
            flag |= def3.flag;
            break;
          }
        }
        def2.flag = flag;
      }
      return def2;
    }
  };
}
__name(makeDerivedOverlay, "makeDerivedOverlay");
var ContextOverlay = makeDerivedOverlay(Object);
var excludedKeys = /* @__PURE__ */ new Set([
  "onRemove",
  "reset",
  "toString",
  "_fix",
  "valueOf",
  "copy",
  "next",
  "save",
  "load",
  "clear",
  "hasOwnProperty",
  "toLocaleString",
  "constructor",
  "propertyIsEnumerable",
  "isPrototypeOf",
  "state",
  "saveProperty",
  "loadProperty",
  "getOwningOverlay",
  "_props"
]);
var LockedContext = class {
  static {
    __name(this, "LockedContext");
  }
  constructor(ctx2, noWarnings) {
    this.props = {};
    this.state = ctx2.state;
    this.api = ctx2.api;
    this.toolstack = ctx2.toolstack;
    this.noWarnings = noWarnings;
    this.load(ctx2);
  }
  toLocked() {
    return this;
  }
  error() {
    return this.ctx.error(...arguments);
  }
  warning() {
    return this.ctx.warning(...arguments);
  }
  message() {
    return this.ctx.message(...arguments);
  }
  progbar() {
    return this.ctx.progbar(...arguments);
  }
  load(ctx2) {
    let keys2 = ctx2._props;
    function wrapget(name) {
      return function(ctx22, data) {
        return ctx2.loadProperty(ctx22, name, data);
      };
    }
    __name(wrapget, "wrapget");
    for (let k2 of keys2) {
      let v;
      if (k2 === "state" || k2 === "toolstack" || k2 === "api") {
        continue;
      }
      if (typeof k2 === "string" && (k2.endsWith("_save") || k2.endsWith("_load"))) {
        continue;
      }
      try {
        v = ctx2[k2];
      } catch (error) {
        if (config_default.DEBUG.contextSystem) {
          console.warn("failed to look up property in context: ", k2);
        }
        continue;
      }
      let data, getter;
      let overlay = ctx2.getOwningOverlay(k2);
      if (overlay === void 0) {
        continue;
      }
      try {
        if (typeof k2 === "string" && (overlay[k2 + "_save"] && overlay[k2 + "_load"])) {
          data = overlay[k2 + "_save"]();
          getter = overlay[k2 + "_load"];
        } else {
          data = ctx2.saveProperty(k2);
          getter = wrapget(k2);
        }
      } catch (error) {
        console.warn("Failed to save context property", k2);
        continue;
      }
      this.props[k2] = {
        data,
        get: getter
      };
    }
    let defineProp = /* @__PURE__ */ __name((name) => {
      Object.defineProperty(this, name, {
        get: /* @__PURE__ */ __name(function() {
          let def = this.props[name];
          return def.get(this.ctx, def.data);
        }, "get")
      });
    }, "defineProp");
    for (let k2 in this.props) {
      defineProp(k2);
    }
    this.ctx = ctx2;
  }
  setContext(ctx2) {
    this.ctx = ctx2;
    this.state = ctx2.state;
    this.api = ctx2.api;
    this.toolstack = ctx2.toolstack;
  }
};
var next_key = {};
var idgen = 1;
var Context = class _Context {
  static {
    __name(this, "Context");
  }
  constructor(appstate) {
    this.state = appstate;
    this._props = /* @__PURE__ */ new Set();
    this._stack = [];
    this._inside_map = {};
  }
  static isContextSubclass(cls2) {
    while (cls2) {
      if (cls2 === _Context) {
        return true;
      }
      cls2 = cls2.__proto__;
    }
    return false;
  }
  /** chrome's debug console corrupts this._inside_map,
   this method fixes it*/
  _fix() {
    this._inside_map = {};
  }
  fix() {
    this._fix();
  }
  error(message, timeout = 1500) {
    let state = this.state;
    console.warn(message);
    if (state && state.screen) {
      return notifier.error(state.screen, message, timeout);
    }
  }
  warning(message, timeout = 1500) {
    let state = this.state;
    console.warn(message);
    if (state && state.screen) {
      return notifier.warning(state.screen, message, timeout);
    }
  }
  message(msg, timeout = 1500) {
    let state = this.state;
    console.warn(msg);
    if (state && state.screen) {
      return notifier.message(state.screen, msg, timeout);
    }
  }
  progbar(msg, perc = 0, timeout = 1500, id = msg) {
    let state = this.state;
    if (state && state.screen) {
      return notifier.progbarNote(state.screen, msg, perc, "green", timeout, id);
    }
  }
  validateOverlays() {
    let stack = this._stack;
    let stack2 = [];
    for (let i2 = 0; i2 < stack.length; i2++) {
      if (stack[i2].validate()) {
        stack2.push(stack[i2]);
      }
    }
    this._stack = stack2;
  }
  hasOverlay(cls2) {
    return this.getOverlay(cls2) !== void 0;
  }
  getOverlay(cls2) {
    for (let overlay of this._stack) {
      if (overlay.constructor === cls2) {
        return overlay;
      }
    }
  }
  clear(have_new_file = false) {
    for (let overlay of this._stack) {
      overlay.onRemove(have_new_file);
    }
    this._stack = [];
  }
  //this is implemented by child classes
  //it should load the same default overlays as in constructor
  reset(have_new_file = false) {
    this.clear(have_new_file);
  }
  //returns a new context with overriden properties
  //unlike pushOverlay, overrides can be a simple object
  override(overrides) {
    if (overrides.copy === void 0) {
      overrides.copy = function() {
        return Object.assign({}, this);
      };
    }
    let ctx2 = this.copy();
    ctx2.pushOverlay(overrides);
    return ctx2;
  }
  copy() {
    let ret2 = new this.constructor(this.state);
    for (let item of this._stack) {
      ret2.pushOverlay(item.copy());
    }
    return ret2;
  }
  /**
     Used by overlay property getters.  If returned,
     the next overlay in the struct will have its getter used.
  
     Example:
  
     class overlay {
        get scene() {
          if (some_reason) {
            return Context.super();
          }
  
          return something_else;
        }
      }
     */
  static super() {
    return next_key;
  }
  /**
   *
   * saves a property into some kind of non-object-reference form
   *
   * */
  saveProperty(key2) {
    return this[key2];
  }
  /**
   *
   * lookup property based on saved data
   *
   * */
  loadProperty(ctx2, key2, data) {
    return data;
  }
  getOwningOverlay(name, _val_out) {
    let inside_map = this._inside_map;
    let stack = this._stack;
    if (config_default.DEBUG.contextSystem) {
      console.log(name, inside_map);
    }
    for (let i2 = stack.length - 1; i2 >= 0; i2--) {
      let overlay = stack[i2];
      let ret2 = next_key;
      if (overlay[Symbol.ContextID] === void 0) {
        throw new Error("context corruption");
      }
      let ikey = overlay[Symbol.ContextID];
      if (config_default.DEBUG.contextSystem) {
        console.log(ikey, overlay);
      }
      if (inside_map[ikey]) {
        continue;
      }
      if (overlay.__allKeys.has(name)) {
        if (config_default.DEBUG.contextSystem) {
          console.log("getting value");
        }
        inside_map[ikey] = 1;
        try {
          ret2 = overlay[name];
        } catch (error) {
          inside_map[ikey] = 0;
          throw error;
        }
        inside_map[ikey] = 0;
      }
      if (ret2 !== next_key) {
        if (_val_out !== void 0) {
          _val_out[0] = ret2;
        }
        return overlay;
      }
    }
    if (_val_out !== void 0) {
      _val_out[0] = void 0;
    }
    return void 0;
  }
  ensureProperty(name) {
    if (this.hasOwnProperty(name)) {
      return;
    }
    this._props.add(name);
    Object.defineProperty(this, name, {
      get: /* @__PURE__ */ __name(function() {
        let ret2 = _ret_tmp;
        _ret_tmp[0] = void 0;
        this.getOwningOverlay(name, ret2);
        return ret2[0];
      }, "get"),
      set: /* @__PURE__ */ __name(function() {
        throw new Error("Cannot set ctx properties");
      }, "set")
    });
  }
  /**
   * Returns a new context that doesn't
   * contain any direct object references
   * except for .state .datalib and .api, but
   * instead uses those three to look up references
   * on property access.
   * */
  toLocked() {
    return new LockedContext(this);
  }
  pushOverlay(overlay) {
    if (!overlay.hasOwnProperty(Symbol.ContextID)) {
      overlay[Symbol.ContextID] = idgen++;
    }
    let keys2 = /* @__PURE__ */ new Set();
    for (let key2 of getAllKeys(overlay)) {
      if (!excludedKeys.has(key2) && !(typeof key2 === "string" && key2[0] === "_")) {
        keys2.add(key2);
      }
    }
    overlay.ctx = this;
    if (overlay.__allKeys === void 0) {
      overlay.__allKeys = keys2;
    }
    for (let k2 of keys2) {
      let bad = typeof k2 === "symbol" || excludedKeys.has(k2);
      bad = bad || typeof k2 === "string" && k2[0] === "_";
      bad = bad || typeof k2 === "string" && k2.endsWith("_save");
      bad = bad || typeof k2 === "string" && k2.endsWith("_load");
      if (bad) {
        continue;
      }
      this.ensureProperty(k2);
    }
    if (this._stack.indexOf(overlay) >= 0) {
      console.warn("Overlay already added once");
      if (this._stack[this._stack.length - 1] === overlay) {
        console.warn("  Definitely an error, overlay is already at top of stack");
        return;
      }
    }
    this._stack.push(overlay);
  }
  popOverlay(overlay) {
    if (overlay !== this._stack[this._stack.length - 1]) {
      console.warn("Context.popOverlay called in error", overlay);
      return;
    }
    overlay.onRemove();
    this._stack.pop();
  }
  removeOverlay(overlay) {
    if (this._stack.indexOf(overlay) < 0) {
      console.warn("Context.removeOverlay called in error", overlay);
      return;
    }
    overlay.onRemove();
    this._stack.remove(overlay);
  }
  static inherit(data) {
    return new InheritFlag(data);
  }
  static register(cls2) {
    if (cls2[Symbol.ContextID]) {
      console.warn("Tried to register same class twice:", cls2);
      return;
    }
    cls2[Symbol.ContextID] = __idgen++;
    OverlayClasses.push(cls2);
  }
};
function test() {
  function testInheritance() {
    class Test0 extends ContextOverlay {
      static {
        __name(this, "Test0");
      }
      static contextDefine() {
        return {
          flag: 1
        };
      }
    }
    class Test1 extends Test0 {
      static {
        __name(this, "Test1");
      }
      static contextDefine() {
        return {
          flag: 2
        };
      }
    }
    class Test2 extends Test1 {
      static {
        __name(this, "Test2");
      }
      static contextDefine() {
        return {
          flag: Context.inherit(4)
        };
      }
    }
    class Test3 extends Test2 {
      static {
        __name(this, "Test3");
      }
      static contextDefine() {
        return {
          flag: Context.inherit(8)
        };
      }
    }
    class Test4 extends Test3 {
      static {
        __name(this, "Test4");
      }
      static contextDefine() {
        return {
          flag: Context.inherit(16)
        };
      }
    }
    return Test4.resolveDef().flag === 30;
  }
  __name(testInheritance, "testInheritance");
  return testInheritance();
}
__name(test, "test");
if (!test()) {
  throw new Error("Context test failed");
}

// scripts/path.ux/scripts/path-controller/toolsys/toolsys.js
var ToolClasses = [];
window._ToolClasses = ToolClasses;
function setContextClass(cls2) {
  console.warn("setContextClass is deprecated");
}
__name(setContextClass, "setContextClass");
var ToolFlags = {
  PRIVATE: 1
};
var UndoFlags = {
  NO_UNDO: 2,
  IS_UNDO_ROOT: 4,
  UNDO_BARRIER: 8,
  HAS_UNDO_DATA: 16
};
var InheritFlag2 = class {
  static {
    __name(this, "InheritFlag");
  }
  constructor(slots = {}) {
    this.slots = slots;
  }
};
var modalstack2 = [];
var defaultUndoHandlers = {
  undoPre(ctx2) {
    throw new Error("implement me");
  },
  undo(ctx2) {
    throw new Error("implement me");
  }
};
function setDefaultUndoHandlers(undoPre, undo) {
  if (!undoPre || !undo) {
    throw new Error("invalid parameters to setDefaultUndoHandlers");
  }
  defaultUndoHandlers.undoPre = undoPre;
  defaultUndoHandlers.undo = undo;
}
__name(setDefaultUndoHandlers, "setDefaultUndoHandlers");
var ToolPropertyCache = class {
  static {
    __name(this, "ToolPropertyCache");
  }
  constructor() {
    this.map = /* @__PURE__ */ new Map();
    this.pathmap = /* @__PURE__ */ new Map();
    this.accessors = {};
    this.userSetMap = /* @__PURE__ */ new Set();
    this.api = void 0;
    this.dstruct = void 0;
  }
  static getPropKey(cls2, key2, prop) {
    return prop.apiname && prop.apiname.length > 0 ? prop.apiname : key2;
  }
  _buildAccessors(cls2, key2, prop, dstruct, api2) {
    let tdef2 = cls2._getFinalToolDef();
    this.api = api2;
    this.dstruct = dstruct;
    if (!tdef2.toolpath) {
      console.warn("Bad tool property", cls2, "it's tooldef was missing a toolpath field");
      return;
    }
    let path = tdef2.toolpath.trim().split(".").filter((f3) => f3.trim().length > 0);
    let obj2 = this.accessors;
    let st = dstruct;
    let partial = "";
    for (let i2 = 0; i2 < path.length; i2++) {
      let k2 = path[i2];
      let pathk = k2;
      if (i2 === 0) {
        pathk = "accessors." + k2;
      }
      if (i2 > 0) {
        partial += ".";
      }
      partial += k2;
      if (!(k2 in obj2)) {
        obj2[k2] = {};
      }
      let st2 = api2.mapStruct(obj2[k2], true, k2);
      if (!(k2 in st.pathmap)) {
        st.struct(pathk, k2, k2, st2);
      }
      st = st2;
      this.pathmap.set(partial, obj2[k2]);
      obj2 = obj2[k2];
    }
    let name = prop.apiname !== void 0 && prop.apiname.length > 0 ? prop.apiname : key2;
    let prop2 = prop.copy();
    let dpath = new DataPath(name, name, prop2);
    let uiname = prop.uiname;
    if (!uiname || uiname.trim().length === 0) {
      uiname = prop.apiname;
    }
    if (!uiname || uiname.trim().length === 0) {
      uiname = key2;
    }
    uiname = ToolProperty.makeUIName(uiname);
    prop2.uiname = uiname;
    prop2.description = prop2.description || prop2.uiname;
    st.add(dpath);
    obj2[name] = prop2.getValue();
  }
  _getAccessor(cls2) {
    let toolpath = cls2.tooldef().toolpath.trim();
    return this.pathmap.get(toolpath);
  }
  useDefault(cls2, key2, prop) {
    key2 = this.userSetMap.has(cls2.tooldef().trim() + "." + this.constructor.getPropKey(key2));
    key2 = key2.trim();
    return key2;
  }
  has(cls2, key2, prop) {
    if (prop.flag & PropFlags.NO_DEFAULT) {
      return false;
    }
    let obj2 = this._getAccessor(cls2);
    key2 = this.constructor.getPropKey(cls2, key2, prop);
    return obj2 && key2 in obj2;
  }
  get(cls2, key2, prop) {
    if (cls2 === ToolMacro) {
      return;
    }
    let obj2 = this._getAccessor(cls2);
    key2 = this.constructor.getPropKey(cls2, key2, prop);
    if (obj2) {
      return obj2[key2];
    }
    return void 0;
  }
  set(cls2, key2, prop) {
    if (cls2 === ToolMacro) {
      return;
    }
    let toolpath = cls2.tooldef().toolpath.trim();
    let obj2 = this._getAccessor(cls2);
    if (!obj2) {
      console.warn("Warning, toolop " + cls2.name + " was not in the default map; unregistered?");
      this._buildAccessors(cls2, key2, prop, this.dstruct, this.api);
      obj2 = this.pathmap.get(toolpath);
    }
    if (!obj2) {
      console.error("Malformed toolpath in toolop definition: " + toolpath);
      return;
    }
    key2 = this.constructor.getPropKey(cls2, key2, prop);
    obj2[key2] = prop.copy().getValue();
    let path = toolpath + "." + key2;
    this.userSetMap.add(path);
    return this;
  }
};
var SavedToolDefaults = new ToolPropertyCache();
var ToolOp = class _ToolOp extends EventHandler {
  static {
    __name(this, "ToolOp");
  }
  /**
     Main ToolOp constructor.  It reads the inputs/outputs properteis from
     this.constructor.tooldef() and copies them to build this.inputs and this.outputs.
     If inputs or outputs are wrapped in ToolOp.inherit(), it will walk up the class
     chain to fetch parent class properties.
  
  
     Default input values are loaded from SavedToolDefaults.  If initialized (buildToolSysAPI
     has been called) SavedToolDefaults will have a copy of all the default
     property values of all registered ToolOps.
     **/
  constructor() {
    super();
    this._pointerId = void 0;
    this._overdraw = void 0;
    this.__memsize = void 0;
    var def = this.constructor.tooldef();
    if (def.undoflag !== void 0) {
      this.undoflag = def.undoflag;
    }
    if (def.flag !== void 0) {
      this.flag = def.flag;
    }
    this._accept = this._reject = void 0;
    this._promise = void 0;
    for (var k2 in def) {
      this[k2] = def[k2];
    }
    let getSlots = /* @__PURE__ */ __name((slots, key2) => {
      if (slots === void 0)
        return {};
      if (!(slots instanceof InheritFlag2)) {
        return slots;
      }
      slots = {};
      let p = this.constructor;
      let lastp = void 0;
      while (p !== void 0 && p !== Object && p !== _ToolOp && p !== lastp) {
        if (p.tooldef) {
          let def2 = p.tooldef();
          if (def2[key2] !== void 0) {
            let slots2 = def2[key2];
            let stop2 = !(slots2 instanceof InheritFlag2);
            if (slots2 instanceof InheritFlag2) {
              slots2 = slots2.slots;
            }
            for (let k3 in slots2) {
              if (!(k3 in slots)) {
                slots[k3] = slots2[k3];
              }
            }
            if (stop2) {
              break;
            }
          }
        }
        lastp = p;
        p = p.prototype.__proto__.constructor;
      }
      return slots;
    }, "getSlots");
    let dinputs = getSlots(def.inputs, "inputs");
    let doutputs = getSlots(def.outputs, "outputs");
    this.inputs = {};
    this.outputs = {};
    if (dinputs) {
      for (let k3 in dinputs) {
        let prop = dinputs[k3].copy();
        prop.apiname = prop.apiname && prop.apiname.length > 0 ? prop.apiname : k3;
        if (!this.hasDefault(prop, k3)) {
          this.inputs[k3] = prop;
          continue;
        }
        try {
          prop.setValue(this.getDefault(prop, k3));
        } catch (error) {
          console.log(error.stack);
          console.log(error.message);
        }
        prop.wasSet = false;
        this.inputs[k3] = prop;
      }
    }
    if (doutputs) {
      for (let k3 in doutputs) {
        let prop = doutputs[k3].copy();
        prop.apiname = prop.apiname && prop.apiname.length > 0 ? prop.apiname : k3;
        this.outputs[k3] = prop;
      }
    }
    this.drawlines = [];
  }
  /**
     ToolOp definition.
  
     An example:
     <pre>
     static tooldef() {
      return {
        uiname   : "Tool Name",
        toolpath : "logical_module.tool", //logical_module need not match up to a real module
        icon     : -1, //tool's icon, or -1 if there is none
        description : "tooltip",
        is_modal : false, //tool is interactive and takes control of events
        hotkey   : undefined,
        undoflag : 0, //see UndoFlags
        flag     : 0,
        inputs   : ToolOp.inherit({
          f32val : new Float32Property(1.0),
          path   : new StringProperty("./path");
        }),
        outputs  : {}
        }
      }
     </pre>
     */
  static tooldef() {
    if (this === _ToolOp) {
      throw new Error("Tools must implemented static tooldef() methods!");
    }
    return {};
  }
  /** Returns a map of input property values,
   *  e.g. `let {prop1, prop2} = this.getValues()` */
  getInputs() {
    let ret2 = {};
    for (let k2 in this.inputs) {
      ret2[k2] = this.inputs[k2].getValue();
    }
    return ret2;
  }
  static Equals(a3, b) {
    if (!a3 || !b) return false;
    if (a3.constructor !== b.constructor) return false;
    let bad = false;
    for (let k2 in a3.inputs) {
      bad = bad || !(k2 in b.inputs);
      bad = bad || a3.inputs[k2].constructor !== b.inputs[k2];
      bad = bad || !a3.inputs[k2].equals(b.inputs[k2]);
      if (bad) {
        break;
      }
    }
    return !bad;
  }
  static inherit(slots = {}) {
    return new InheritFlag2(slots);
  }
  /**
  
     Creates a new instance of this toolop from args and a context.
     This is often use to fill properties with default arguments
     stored somewhere in the context.
  
     */
  static invoke(ctx2, args2) {
    let tool = new this();
    for (let k2 in args2) {
      if (!(k2 in tool.inputs)) {
        console.warn("Unknown tool argument " + k2);
        continue;
      }
      let prop = tool.inputs[k2];
      let val2 = args2[k2];
      if (typeof val2 === "string" && prop.type & (PropTypes.ENUM | PropTypes.FLAG)) {
        if (val2 in prop.values) {
          val2 = prop.values[val2];
        } else {
          console.warn("Possible invalid enum/flag:", val2);
          continue;
        }
      }
      tool.inputs[k2].setValue(val2);
    }
    return tool;
  }
  static register(cls2) {
    if (ToolClasses.indexOf(cls2) >= 0) {
      console.warn("Tried to register same ToolOp class twice:", cls2.name, cls2);
      return;
    }
    ToolClasses.push(cls2);
  }
  static _regWithNstructjs(cls2, structName2 = cls2.name) {
    if (struct_default.isRegistered(cls2)) {
      return;
    }
    let parent2 = cls2.prototype.__proto__.constructor;
    if (!cls2.hasOwnProperty("STRUCT")) {
      if (parent2 !== _ToolOp && parent2 !== ToolMacro && parent2 !== Object) {
        this._regWithNstructjs(parent2);
      }
      cls2.STRUCT = struct_default.inherit(cls2, parent2) + "}\n";
    }
    struct_default.register(cls2);
  }
  static isRegistered(cls2) {
    return ToolClasses.indexOf(cls2) >= 0;
  }
  static unregister(cls2) {
    if (ToolClasses.indexOf(cls2) >= 0) {
      ToolClasses.remove(cls2);
    }
  }
  static _getFinalToolDef() {
    let def = this.tooldef();
    let getSlots = /* @__PURE__ */ __name((slots, key2) => {
      if (slots === void 0)
        return {};
      if (!(slots instanceof InheritFlag2)) {
        return slots;
      }
      slots = {};
      let p = this;
      while (p !== void 0 && p !== Object && p !== _ToolOp) {
        if (p.tooldef) {
          let def2 = p.tooldef();
          if (def2[key2] !== void 0) {
            let slots2 = def2[key2];
            let stop2 = !(slots2 instanceof InheritFlag2);
            if (slots2 instanceof InheritFlag2) {
              slots2 = slots2.slots;
            }
            for (let k2 in slots2) {
              if (!(k2 in slots)) {
                slots[k2] = slots2[k2];
              }
            }
            if (stop2) {
              break;
            }
          }
        }
        p = p.prototype.__proto__.constructor;
      }
      return slots;
    }, "getSlots");
    let dinputs = getSlots(def.inputs, "inputs");
    let doutputs = getSlots(def.outputs, "outputs");
    def.inputs = dinputs;
    def.outputs = doutputs;
    return def;
  }
  static onTick() {
    for (let toolop of modalstack2) {
      toolop.on_tick();
    }
  }
  static searchBoxOk(ctx2) {
    let flag = this.tooldef().flag;
    let ret2 = !(flag && flag & ToolFlags.PRIVATE);
    ret2 = ret2 && this.canRun(ctx2);
    return ret2;
  }
  //toolop is an optional instance of this class, may be undefined
  static canRun(ctx2, toolop = void 0) {
    return true;
  }
  /** Called when the undo system needs to destroy
   *  this toolop to save memory*/
  onUndoDestroy() {
  }
  /** Used by undo system to limit memory */
  calcMemSize(ctx2) {
    if (this.__memsize !== void 0) {
      return this.__memsize;
    }
    let tot = 0;
    for (let step = 0; step < 2; step++) {
      let props = step ? this.outputs : this.inputs;
      for (let k2 in props) {
        let prop = props[k2];
        let size2 = prop.calcMemSize();
        if (isNaN(size2) || !isFinite(size2)) {
          console.warn("Got NaN when calculating mem size for property", prop);
          continue;
        }
        tot += size2;
      }
    }
    let size = this.calcUndoMem(ctx2);
    if (isNaN(size) || !isFinite(size)) {
      console.warn("Got NaN in calcMemSize", this);
    } else {
      tot += size;
    }
    this.__memsize = tot;
    return tot;
  }
  loadDefaults(force = true) {
    for (let k2 in this.inputs) {
      let prop = this.inputs[k2];
      if (!force && prop.wasSet) {
        continue;
      }
      if (this.hasDefault(prop, k2)) {
        prop.setValue(this.getDefault(prop, k2));
        prop.wasSet = false;
      }
    }
    return this;
  }
  hasDefault(toolprop, key2 = toolprop.apiname) {
    return SavedToolDefaults.has(this.constructor, key2, toolprop);
  }
  getDefault(toolprop, key2 = toolprop.apiname) {
    let cls2 = this.constructor;
    if (SavedToolDefaults.has(cls2, key2, toolprop)) {
      return SavedToolDefaults.get(cls2, key2, toolprop);
    } else {
      return toolprop.getValue();
    }
  }
  saveDefaultInputs() {
    for (let k2 in this.inputs) {
      let prop = this.inputs[k2];
      if (prop.flag & PropFlags.SAVE_LAST_VALUE) {
        SavedToolDefaults.set(this.constructor, k2, prop);
      }
    }
    return this;
  }
  genToolString() {
    let def = this.constructor.tooldef();
    let path = def.toolpath + "(";
    for (let k2 in this.inputs) {
      let prop = this.inputs[k2];
      path += k2 + "=";
      if (prop.type === PropTypes.STRING)
        path += "'";
      if (prop.type === PropTypes.FLOAT) {
        path += prop.getValue().toFixed(3);
      } else {
        path += prop.getValue();
      }
      if (prop.type === PropTypes.STRING)
        path += "'";
      path += " ";
    }
    path += ")";
    return path;
  }
  on_tick() {
  }
  /**default on_keydown implementation for modal tools,
   no need to call super() to execute this if you don't want to*/
  on_keydown(e2) {
    switch (e2.keyCode) {
      case keymap["Enter"]:
      case keymap["Space"]:
        this.modalEnd(false);
        break;
      case keymap["Escape"]:
        this.modalEnd(true);
        break;
    }
  }
  //called after undoPre
  calcUndoMem(ctx2) {
    console.warn("ToolOp.prototype.calcUndoMem: implement me!");
    return 0;
  }
  undoPre(ctx2) {
    throw new Error("implement me!");
  }
  undo(ctx2) {
    throw new Error("implement me!");
  }
  redo(ctx2) {
    this._was_redo = true;
    this.undoPre(ctx2);
    this.execPre(ctx2);
    this.exec(ctx2);
    this.execPost(ctx2);
  }
  //for compatibility with fairmotion
  exec_pre(ctx2) {
    this.execPre(ctx2);
  }
  execPre(ctx2) {
  }
  exec(ctx2) {
  }
  execPost(ctx2) {
  }
  /**for use in modal mode only*/
  resetTempGeom() {
    var ctx2 = this.modal_ctx;
    for (var dl of this.drawlines) {
      dl.remove();
    }
    this.drawlines.length = 0;
  }
  error(msg) {
    console.warn(msg);
  }
  getOverdraw() {
    if (this._overdraw === void 0) {
      this._overdraw = document.createElement("overdraw-x");
      this._overdraw.start(this.modal_ctx.screen);
    }
    return this._overdraw;
  }
  /**for use in modal mode only*/
  makeTempLine(v1, v2, style) {
    let line2 = this.getOverdraw().line(v1, v2, style);
    this.drawlines.push(line2);
    return line2;
  }
  pushModal(node) {
    throw new Error("cannot call this; use modalStart");
  }
  popModal() {
    throw new Error("cannot call this; use modalEnd");
  }
  /**returns promise to be executed on modalEnd*/
  modalStart(ctx2) {
    if (this.modalRunning) {
      console.warn("Warning, tool is already in modal mode consuming events");
      return this._promise;
    }
    this.modal_ctx = ctx2;
    this.modalRunning = true;
    this._promise = new Promise((accept, reject) => {
      this._accept = accept;
      this._reject = reject;
      modalstack2.push(this);
      if (this._pointerId !== void 0) {
        super.pushPointerModal(ctx2.screen, this._pointerId);
      } else {
        super.pushModal(ctx2.screen);
      }
    });
    return this._promise;
  }
  /*eek, I've not been using this.
      guess it's a non-enforced contract, I've been naming
      cancel methods 'cancel' all this time.
  
      XXX fix
    */
  toolCancel() {
  }
  modalEnd(was_cancelled) {
    if (this._modalstate) {
      modalstack2.pop();
    }
    if (this._overdraw !== void 0) {
      this._overdraw.end();
      this._overdraw = void 0;
    }
    if (was_cancelled && this._on_cancel !== void 0) {
      if (this._accept) {
        this._accept(this.modal_ctx, true);
      }
      this._on_cancel(this);
      this._on_cancel = void 0;
    }
    this.resetTempGeom();
    var ctx2 = this.modal_ctx;
    this.modal_ctx = void 0;
    this.modalRunning = false;
    this.is_modal = false;
    super.popModal();
    this._promise = void 0;
    if (this._accept) {
      this._accept(ctx2, false);
      this._accept = this._reject = void 0;
    }
    this.saveDefaultInputs();
  }
  loadSTRUCT(reader) {
    reader(this);
    let outs = this.outputs;
    let ins = this.inputs;
    this.inputs = {};
    this.outputs = {};
    for (let pair of ins) {
      this.inputs[pair.key] = pair.val;
    }
    for (let pair of outs) {
      this.outputs[pair.key] = pair.val;
    }
  }
  _save_inputs() {
    let ret2 = [];
    for (let k2 in this.inputs) {
      ret2.push(new PropKey(k2, this.inputs[k2]));
    }
    return ret2;
  }
  _save_outputs() {
    let ret2 = [];
    for (let k2 in this.outputs) {
      ret2.push(new PropKey(k2, this.outputs[k2]));
    }
    return ret2;
  }
};
ToolOp.STRUCT = `
toolsys.ToolOp {
  inputs  : array(toolsys.PropKey) | this._save_inputs();
  outputs : array(toolsys.PropKey) | this._save_outputs();
}
`;
struct_default.register(ToolOp);
var PropKey = class {
  static {
    __name(this, "PropKey");
  }
  constructor(key2, val2) {
    this.key = key2;
    this.val = val2;
  }
};
PropKey.STRUCT = `
toolsys.PropKey {
  key : string;
  val : abstract(ToolProperty);
}
`;
struct_default.register(PropKey);
var MacroLink = class {
  static {
    __name(this, "MacroLink");
  }
  constructor(sourcetool_idx, srckey, srcprops = "outputs", desttool_idx, dstkey, dstprops = "inputs") {
    this.source = sourcetool_idx;
    this.dest = desttool_idx;
    this.sourceProps = srcprops;
    this.destProps = dstprops;
    this.sourcePropKey = srckey;
    this.destPropKey = dstkey;
  }
};
MacroLink.STRUCT = `
toolsys.MacroLink {
  source         : int;
  dest           : int;
  sourcePropKey  : string;
  destPropKey    : string;
  sourceProps    : string;
  destProps      : string; 
}
`;
struct_default.register(MacroLink);
var MacroClasses = {};
window._MacroClasses = MacroClasses;
var macroidgen = 0;
var ToolMacro = class _ToolMacro extends ToolOp {
  static {
    __name(this, "ToolMacro");
  }
  constructor() {
    super();
    this.tools = [];
    this.curtool = 0;
    this.has_modal = false;
    this.connects = [];
    this.connectLinks = [];
    this._macro_class = void 0;
  }
  static tooldef() {
    return {
      uiname: "Tool Macro"
    };
  }
  //toolop is an optional instance of this class, may be undefined
  static canRun(ctx2, toolop = void 0) {
    return true;
  }
  _getTypeClass() {
    if (this._macro_class && this._macro_class.ready) {
      return this._macro_class;
    }
    if (!this._macro_class) {
      this._macro_class = class MacroTypeClass extends ToolOp {
        static {
          __name(this, "MacroTypeClass");
        }
        static tooldef() {
          return this.__tooldef;
        }
      };
      this._macro_class.__tooldef = {
        toolpath: this.constructor.tooldef().toolpath || ""
      };
      this._macro_class.ready = false;
    }
    if (!this.tools || this.tools.length === 0) {
      return this._macro_class;
    }
    let key2 = "";
    for (let tool of this.tools) {
      key2 = tool.constructor.name + ":";
    }
    if (this.constructor !== _ToolMacro) {
      key2 += ":" + this.constructor.tooldef().toolpath;
    }
    for (let k2 in this.inputs) {
      key2 += k2 + ":";
    }
    if (key2 in MacroClasses) {
      this._macro_class = MacroClasses[key2];
      return this._macro_class;
    }
    let name = "Macro(";
    let i2 = 0;
    let is_modal;
    for (let tool of this.tools) {
      let def = tool.constructor.tooldef();
      if (i2 > 0) {
        name += ", ";
      } else {
        is_modal = def.is_modal;
      }
      if (def.uiname) {
        name += def.uiname;
      } else if (def.toolpath) {
        name += def.toolpath;
      } else {
        name += tool.constructor.name;
      }
      i2++;
    }
    let inputs = {};
    for (let k2 in this.inputs) {
      inputs[k2] = this.inputs[k2].copy().clearEventCallbacks();
      inputs[k2].wasSet = false;
    }
    let tdef2 = {
      uiname: name,
      toolpath: key2,
      inputs,
      outputs: {},
      is_modal
    };
    let cls2 = this._macro_class;
    cls2.__tooldef = tdef2;
    cls2._macroTypeId = macroidgen++;
    cls2.ready = true;
    MacroClasses[key2] = cls2;
    return cls2;
  }
  saveDefaultInputs() {
    for (let k2 in this.inputs) {
      let prop = this.inputs[k2];
      if (prop.flag & PropFlags.SAVE_LAST_VALUE) {
        SavedToolDefaults.set(this._getTypeClass(), k2, prop);
      }
    }
    return this;
  }
  hasDefault(toolprop, key2 = toolprop.apiname) {
    return SavedToolDefaults.has(this._getTypeClass(), key2, toolprop);
  }
  getDefault(toolprop, key2 = toolprop.apiname) {
    let cls2 = this._getTypeClass();
    if (SavedToolDefaults.has(cls2, key2, toolprop)) {
      return SavedToolDefaults.get(cls2, key2, toolprop);
    } else {
      return toolprop.getValue();
    }
  }
  connect(srctool, srcoutput, dsttool, dstinput, srcprops = "outputs", dstprops = "inputs") {
    if (typeof dsttool === "function") {
      return this.connectCB(...arguments);
    }
    let i1 = this.tools.indexOf(srctool);
    let i2 = this.tools.indexOf(dsttool);
    if (i1 < 0 || i2 < 0) {
      throw new Error("tool not in macro");
    }
    if (srcprops === "inputs") {
      let tool = this.tools[i1];
      let prop = tool.inputs[srcoutput];
      if (prop === this.inputs[srcoutput]) {
        delete this.inputs[srcoutput];
      }
    }
    if (dstprops === "inputs") {
      let tool = this.tools[i2];
      let prop = tool.inputs[dstinput];
      if (this.inputs[dstinput] === prop) {
        delete this.inputs[dstinput];
      }
    }
    this.connectLinks.push(new MacroLink(i1, srcoutput, srcprops, i2, dstinput, dstprops));
    return this;
  }
  connectCB(srctool, dsttool, callback, thisvar) {
    this.connects.push({
      srctool,
      dsttool,
      callback,
      thisvar
    });
    return this;
  }
  add(tool) {
    if (tool.is_modal) {
      this.is_modal = true;
    }
    for (let k2 in tool.inputs) {
      let prop = tool.inputs[k2];
      if (!(prop.flag & PropFlags.PRIVATE)) {
        this.inputs[k2] = prop;
      }
    }
    this.tools.push(tool);
    return this;
  }
  _do_connections(tool) {
    let i2 = this.tools.indexOf(tool);
    for (let c2 of this.connectLinks) {
      if (c2.source === i2) {
        let tool2 = this.tools[c2.dest];
        tool2[c2.destProps][c2.destPropKey].setValue(tool[c2.sourceProps][c2.sourcePropKey].getValue());
      }
    }
    for (var c of this.connects) {
      if (c.srctool === tool) {
        c.callback.call(c.thisvar, c.srctool, c.dsttool);
      }
    }
  }
  /*
    canRun(ctx) {
      if (this.tools.length == 0)
        return false;
  
      //poll first tool only in list
      return this.tools[0].constructor.canRun(ctx);
    }//*/
  modalStart(ctx2) {
    this.loadDefaults(false);
    this._promise = new Promise(function(accept, reject) {
      this._accept = accept;
      this._reject = reject;
    }.bind(this));
    this.curtool = 0;
    let i2;
    for (i2 = 0; i2 < this.tools.length; i2++) {
      if (this.tools[i2].is_modal)
        break;
      this.tools[i2].undoPre(ctx2);
      this.tools[i2].execPre(ctx2);
      this.tools[i2].exec(ctx2);
      this.tools[i2].execPost(ctx2);
      this._do_connections(this.tools[i2]);
    }
    var on_modal_end = (/* @__PURE__ */ __name(function on_modal_end2() {
      this._do_connections(this.tools[this.curtool]);
      this.curtool++;
      while (this.curtool < this.tools.length && !this.tools[this.curtool].is_modal) {
        this.tools[this.curtool].undoPre(ctx2);
        this.tools[this.curtool].execPre(ctx2);
        this.tools[this.curtool].exec(ctx2);
        this.tools[this.curtool].execPost(ctx2);
        this._do_connections(this.tools[this.curtool]);
        this.curtool++;
      }
      if (this.curtool < this.tools.length) {
        this.tools[this.curtool].undoPre(ctx2);
        this.tools[this.curtool].modalStart(ctx2).then(on_modal_end2);
      } else {
        this._accept(this, false);
      }
    }, "on_modal_end")).bind(this);
    if (i2 < this.tools.length) {
      this.curtool = i2;
      this.tools[this.curtool].undoPre(ctx2);
      this.tools[this.curtool].modalStart(ctx2).then(on_modal_end);
    }
    return this._promise;
  }
  loadDefaults(force = true) {
    return super.loadDefaults(force);
  }
  exec(ctx2) {
    this.loadDefaults(false);
    for (var i2 = 0; i2 < this.tools.length; i2++) {
      this.tools[i2].undoPre(ctx2);
      this.tools[i2].execPre(ctx2);
      this.tools[i2].exec(ctx2);
      this.tools[i2].execPost(ctx2);
      this._do_connections(this.tools[i2]);
    }
  }
  calcUndoMem(ctx2) {
    let tot = 0;
    for (let tool of this.tools) {
      tot += tool.calcUndoMem(ctx2);
    }
    return tot;
  }
  calcMemSize(ctx2) {
    let tot = 0;
    for (let tool of this.tools) {
      tot += tool.calcMemSize(ctx2);
    }
    return tot;
  }
  undoPre() {
    return;
  }
  undo(ctx2) {
    for (var i2 = this.tools.length - 1; i2 >= 0; i2--) {
      this.tools[i2].undo(ctx2);
    }
  }
};
ToolMacro.STRUCT = struct_default.inherit(ToolMacro, ToolOp, "toolsys.ToolMacro") + `
  tools        : array(abstract(toolsys.ToolOp));
  connectLinks : array(toolsys.MacroLink);
}
`;
struct_default.register(ToolMacro);
var ToolStack = class extends Array {
  static {
    __name(this, "ToolStack");
  }
  constructor(ctx2) {
    super();
    this.memLimit = 512 * 1024 * 1024;
    this.enforceMemLimit = false;
    this.cur = -1;
    this.ctx = ctx2;
    this.modalRunning = 0;
    this._undo_branch = void 0;
  }
  get head() {
    return this[this.cur];
  }
  limitMemory(maxmem = this.memLimit, ctx2 = this.ctx) {
    if (maxmem === void 0) {
      throw new Error("maxmem cannot be undefined");
    }
    let size = this.calcMemSize();
    let start2 = 0;
    while (start2 < this.cur - 2 && size > maxmem) {
      size -= this[start2].calcMemSize(ctx2);
      start2++;
    }
    if (start2 === 0) {
      return size;
    }
    for (let i2 = 0; i2 < start2; i2++) {
      this[i2].onUndoDestroy();
    }
    this.cur -= start2;
    for (let i2 = 0; i2 < this.length - start2; i2++) {
      this[i2] = this[i2 + start2];
    }
    this.length -= start2;
    return this.calcMemSize(ctx2);
  }
  calcMemSize(ctx2 = this.ctx) {
    let tot = 0;
    for (let tool of this) {
      try {
        tot += tool.calcMemSize();
      } catch (error) {
        print_stack(error);
        console.error("Failed to execute a calcMemSize method");
      }
    }
    return tot;
  }
  setRestrictedToolContext(ctx2) {
    this.toolctx = ctx2;
  }
  reset(ctx2) {
    if (ctx2 !== void 0) {
      this.ctx = ctx2;
    }
    this.modalRunning = 0;
    this.cur = -1;
    this.length = 0;
  }
  /**
   * runs .undo,.redo if toolstack head is same as tool
   *
   * otherwise, .execTool(ctx, tool) is called.
   *
   * @param compareInputs : check if toolstack head has identical input values, defaults to false
   * */
  execOrRedo(ctx2, tool, compareInputs = false) {
    let head = this.head;
    let ok = compareInputs ? ToolOp.Equals(head, tool) : head && head.constructor === tool.constructor;
    tool.__memsize = void 0;
    if (ok) {
      this.undo();
      if (!compareInputs) {
        this.execTool(ctx2, tool);
      } else {
        this.rerun();
      }
      return false;
    } else {
      this.execTool(ctx2, tool);
      return true;
    }
  }
  execTool(ctx2, toolop) {
    if (this.enforceMemLimit) {
      this.limitMemory(this.memLimit, ctx2);
    }
    if (!toolop.constructor.canRun(ctx2, toolop)) {
      console.log("toolop.constructor.canRun returned false");
      return;
    }
    let tctx = ctx2.toLocked();
    let undoflag = toolop.constructor.tooldef().undoflag;
    if (toolop.undoflag !== void 0) {
      undoflag = toolop.undoflag;
    }
    undoflag = undoflag === void 0 ? 0 : undoflag;
    toolop.execCtx = tctx;
    if (!(undoflag & UndoFlags.NO_UNDO)) {
      this.cur++;
      this._undo_branch = this.slice(this.cur + 1, this.length);
      this.length = this.cur + 1;
      this[this.cur] = toolop;
      toolop.undoPre(tctx);
    }
    if (toolop.is_modal) {
      ctx2 = toolop.modal_ctx = ctx2;
      this.modal_running = true;
      toolop._on_cancel = function(toolop2) {
        if (!(toolop2.undoflag & UndoFlags.NO_UNDO)) {
          this[this.cur].undo(ctx2);
          this.pop_i(this.cur);
          this.cur--;
        }
      }.bind(this);
      toolop.modalStart(ctx2);
    } else {
      toolop.execPre(tctx);
      toolop.exec(tctx);
      toolop.execPost(tctx);
      toolop.saveDefaultInputs();
    }
  }
  toolCancel(ctx2, tool) {
    if (tool._was_redo) {
      return;
    }
    if (tool !== this[this.cur]) {
      console.warn("toolCancel called in error", this, tool);
      return;
    }
    this.undo();
    this.length = this.cur + 1;
    if (this._undo_branch !== void 0) {
      for (let item of this._undo_branch) {
        this.push(item);
      }
    }
  }
  undo() {
    if (this.enforceMemLimit) {
      this.limitMemory(this.memLimit);
    }
    if (this.cur >= 0 && !(this[this.cur].undoflag & UndoFlags.IS_UNDO_ROOT)) {
      let tool = this[this.cur];
      tool.undo(tool.execCtx);
      this.cur--;
    }
  }
  //reruns a tool if it's at the head of the stack
  rerun(tool) {
    if (this.enforceMemLimit) {
      this.limitMemory(this.memLimit);
    }
    if (tool === this[this.cur]) {
      tool._was_redo = false;
      if (!tool.execCtx) {
        tool.execCtx = this.ctx;
      }
      tool.undo(tool.execCtx);
      tool._was_redo = true;
      tool.undoPre(tool.execCtx);
      tool.execPre(tool.execCtx);
      tool.exec(tool.execCtx);
      tool.execPost(tool.execCtx);
    } else {
      console.warn("Tool wasn't at head of stack", tool);
    }
  }
  redo() {
    if (this.enforceMemLimit) {
      this.limitMemory(this.memLimit);
    }
    if (this.cur >= -1 && this.cur + 1 < this.length) {
      this.cur++;
      let tool = this[this.cur];
      if (!tool.execCtx) {
        tool.execCtx = this.ctx;
      }
      tool._was_redo = true;
      tool.redo(tool.execCtx);
      tool.saveDefaultInputs();
    }
  }
  save() {
    let data = [];
    struct_default.writeObject(data, this);
    return data;
  }
  rewind() {
    while (this.cur >= 0) {
      let last = this.cur;
      this.undo();
      if (last === this.cur) {
        break;
      }
    }
    return this;
  }
  /**cb is a function(ctx), if it returns the value false then playback stops
     promise will still be fulfilled.
  
     onstep is a callback, if it returns a promise that promise will be
     waited on, otherwise execution is queue with window.setTimeout().
     */
  replay(cb, onStep) {
    let cur = this.cur;
    this.rewind();
    let last = this.cur;
    let start2 = time_ms();
    return new Promise((accept, reject) => {
      let next = /* @__PURE__ */ __name(() => {
        last = this.cur;
        if (cb && cb(ctx) === false) {
          accept();
          return;
        }
        if (this.cur < this.length) {
          this.cur++;
          this.rerun();
        }
        if (last === this.cur) {
          console.warn("time:", (time_ms() - start2) / 1e3);
          accept(this);
        } else {
          if (onStep) {
            let ret2 = onStep();
            if (ret2 && ret2 instanceof Promise) {
              ret2.then(() => {
                next();
              });
            } else {
              window.setTimeout(() => {
                next();
              });
            }
          }
        }
      }, "next");
      next();
    });
  }
  loadSTRUCT(reader) {
    reader(this);
    for (let item of this._stack) {
      this.push(item);
    }
    delete this._stack;
  }
  //note that this makes sure tool classes are registered with nstructjs
  //during save
  _save() {
    for (let tool of this) {
      let cls2 = tool.constructor;
      if (!struct_default.isRegistered(cls2)) {
        cls2._regWithNstructjs(cls2);
      }
    }
    return this;
  }
};
ToolStack.STRUCT = `
toolsys.ToolStack {
  cur    : int;
  _stack : array(abstract(toolsys.ToolOp)) | this._save();
}
`;
struct_default.register(ToolStack);
window._testToolStackIO = function() {
  let data = [];
  let cls2 = _appstate.toolstack.constructor;
  struct_default.writeObject(data, _appstate.toolstack);
  data = new DataView(new Uint8Array(data).buffer);
  let toolstack = struct_default.readObject(data, cls2);
  _appstate.toolstack.rewind();
  toolstack.cur = -1;
  toolstack.ctx = _appstate.toolstack.ctx;
  _appstate.toolstack = toolstack;
  return toolstack;
};
function buildToolOpAPI(api2, cls2) {
  let st = api2.mapStruct(cls2, true);
  let def = cls2._getFinalToolDef();
  if (window.DEBUG && window.DEBUG.datapaths) {
    console.log("Building api for ", def.toolpath);
  }
  function makeProp(k2) {
    let prop = def.inputs[k2];
    if (prop.flag & (PropFlags.PRIVATE | PropFlags.READ_ONLY)) {
      return;
    }
    prop.uiname = prop.uiname || ToolProperty.makeUIName(k2);
    let dpath = new DataPath(k2, k2, prop);
    st.add(dpath);
    dpath.customGetSet(function() {
      return this.dataref.inputs[k2].getValue();
    }, function(val2) {
      this.dataref.inputs[k2].setValue(val2);
    });
  }
  __name(makeProp, "makeProp");
  for (let k2 in def.inputs) {
    makeProp(k2);
  }
  return st;
}
__name(buildToolOpAPI, "buildToolOpAPI");
function buildToolSysAPI(api2, registerWithNStructjs = true, rootCtxStruct = void 0, rootCtxClass = void 0, insertToolDefaultsIntoContext = true) {
  let datastruct = api2.mapStruct(ToolPropertyCache, true);
  for (let cls2 of ToolClasses) {
    let def = cls2._getFinalToolDef();
    buildToolOpAPI(api2, cls2);
    for (let k2 in def.inputs) {
      let prop = def.inputs[k2];
      if (!(prop.flag & (PropFlags.PRIVATE | PropFlags.READ_ONLY))) {
        SavedToolDefaults._buildAccessors(cls2, k2, prop, datastruct, api2);
      }
    }
  }
  if (rootCtxStruct) {
    rootCtxStruct.struct("toolDefaults", "toolDefaults", "Tool Defaults", api2.mapStruct(ToolPropertyCache));
    rootCtxStruct.dynamicStruct("last_tool", "last_tool", "Last Tool");
  }
  if (rootCtxClass && insertToolDefaultsIntoContext) {
    let haveprop = function(k2) {
      return Reflect.ownKeys(inst).indexOf(k2) >= 0 || Reflect.ownKeys(rootCtxClass.prototype).indexOf(k2) >= 0;
    };
    __name(haveprop, "haveprop");
    let inst = new rootCtxClass({});
    if (!haveprop("last_tool")) {
      Object.defineProperty(rootCtxClass.prototype, "last_tool", {
        get() {
          return this.toolstack.head;
        }
      });
      if (Context.isContextSubclass(rootCtxClass)) {
        rootCtxClass.prototype.last_tool_save = () => ({});
        rootCtxClass.prototype.last_tool_load = () => void 0;
      }
    }
    if (!haveprop("toolDefaults")) {
      Object.defineProperty(rootCtxClass.prototype, "toolDefaults", {
        get() {
          return SavedToolDefaults;
        }
      });
      if (Context.isContextSubclass(rootCtxClass)) {
        rootCtxClass.prototype.toolDefaults_save = () => ({});
        rootCtxClass.prototype.toolDefaults_load = () => void 0;
      }
    }
  }
  if (!registerWithNStructjs) {
    return;
  }
  for (let cls2 of ToolClasses) {
    try {
      if (!struct_default.isRegistered(cls2)) {
        ToolOp._regWithNstructjs(cls2);
      }
    } catch (error) {
      console.log(error.stack);
      console.error("Failed to register a tool with nstructjs");
    }
  }
}
__name(buildToolSysAPI, "buildToolSysAPI");

// scripts/path.ux/scripts/path-controller/curve/curve1d_bspline.js
var Vector22 = Vector2;
var SplineTemplates = {
  CONSTANT: 0,
  LINEAR: 1,
  SHARP: 2,
  SQRT: 3,
  SMOOTH: 4,
  SMOOTHER: 5,
  SHARPER: 6,
  SPHERE: 7,
  REVERSE_LINEAR: 8,
  GUASSIAN: 9
};
var templates = {
  [SplineTemplates.CONSTANT]: [
    [1, 1],
    [1, 1]
  ],
  [SplineTemplates.LINEAR]: [
    [0, 0],
    [1, 1]
  ],
  [SplineTemplates.SHARP]: [
    [0, 0],
    [0.9999, 1e-4],
    [1, 1]
  ],
  [SplineTemplates.SQRT]: [
    [0, 0],
    [0.05, 0.25],
    [0.15, 0.45],
    [0.33, 0.65],
    [1, 1]
  ],
  [SplineTemplates.SMOOTH]: [
    "DEG",
    3,
    [0, 0],
    [1 / 3, 0],
    [2 / 3, 1],
    [1, 1]
  ],
  [SplineTemplates.SMOOTHER]: [
    "DEG",
    6,
    [0, 0],
    [1 / 2.25, 0],
    [2 / 3, 1],
    [1, 1]
  ],
  [SplineTemplates.SHARPER]: [
    [0, 0],
    [0.3, 0.03],
    [0.7, 0.065],
    [0.9, 0.16],
    [1, 1]
  ],
  [SplineTemplates.SPHERE]: [
    [0, 0],
    [0.01953, 0.23438],
    [0.08203, 0.43359],
    [0.18359, 0.625],
    [0.35938, 0.81641],
    [0.625, 0.97656],
    [1, 1]
  ],
  [SplineTemplates.REVERSE_LINEAR]: [
    [0, 1],
    [1, 0]
  ],
  [SplineTemplates.GUASSIAN]: [
    "DEG",
    5,
    [0, 0],
    [0.17969, 7e-3],
    [0.48958, 0.01172],
    [0.77995, 0.99609],
    [1, 1]
  ]
};
var SplineTemplateIcons = {};
var RecalcFlags = {
  BASIS: 1,
  FULL: 2,
  ALL: 3,
  //private flag
  FULL_BASIS: 4
};
function mySafeJSONStringify(obj2) {
  return JSON.stringify(obj2.toJSON(), function(key2) {
    let v = this[key2];
    if (typeof v === "number") {
      if (v !== Math.floor(v)) {
        v = parseFloat(v.toFixed(5));
      } else {
        v = v;
      }
    }
    return v;
  });
}
__name(mySafeJSONStringify, "mySafeJSONStringify");
function mySafeJSONParse(buf) {
  return JSON.parse(buf, (key2, val2) => {
  });
}
__name(mySafeJSONParse, "mySafeJSONParse");
;
window.mySafeJSONStringify = mySafeJSONStringify;
var bin_cache = {};
window._bin_cache = bin_cache;
var eval2_rets = cachering2.fromConstructor(Vector22, 32);
function bez3(a3, b, c, t) {
  let r1 = a3 + (b - a3) * t;
  let r2 = b + (c - b) * t;
  return r1 + (r2 - r1) * t;
}
__name(bez3, "bez3");
function bez4(a3, b, c, d, t) {
  let r1 = bez3(a3, b, c, t);
  let r2 = bez3(b, c, d, t);
  return r1 + (r2 - r1) * t;
}
__name(bez4, "bez4");
function binomial(n, i2) {
  if (i2 > n) {
    throw new Error("Bad call to binomial(n, i), i was > than n");
  }
  if (i2 === 0 || i2 === n) {
    return 1;
  }
  let key2 = "" + n + "," + i2;
  if (key2 in bin_cache)
    return bin_cache[key2];
  let ret2 = binomial(n - 1, i2 - 1) + bin(n - 1, i2);
  bin_cache[key2] = ret2;
  return ret2;
}
__name(binomial, "binomial");
window.bin = binomial;
var Curve1dBSplineOpBase = class extends ToolOp {
  static {
    __name(this, "Curve1dBSplineOpBase");
  }
  static tooldef() {
    return {
      inputs: {
        dataPath: new StringProperty()
      },
      outputs: {}
    };
  }
  _undo = void 0;
  undoPre(ctx2) {
    let curve1d = this.getCurve1d(ctx2);
    if (curve1d) {
      this._undo = curve1d.copy();
    } else {
      this._undo = void 0;
    }
  }
  undo(ctx2) {
    let curve1d = this.getCurve1d(ctx2);
    if (curve1d) {
      curve1d.load(this._undo);
      curve1d._fireEvent("update", curve1d);
    }
  }
  getCurve1d(ctx2) {
    let { dataPath } = this.getInputs();
    let curve1d;
    try {
      curve1d = ctx2.api.getValue(ctx2, dataPath);
    } catch (error) {
      console.error(error.stack);
      console.error(error.message);
      console.error("Failed to lookup curve1d property at path ", dataPath);
      return;
    }
    return curve1d;
  }
  execPost(ctx2) {
    let curve1d = this.getCurve1d(ctx2);
    if (curve1d) {
      curve1d._fireEvent("update", curve1d);
    }
  }
};
var Curve1dBSplineResetOp = class extends Curve1dBSplineOpBase {
  static {
    __name(this, "Curve1dBSplineResetOp");
  }
  static tooldef() {
    return {
      toolpath: "curve1d.reset_bspline",
      inputs: ToolOp.inherit({}),
      outputs: {}
    };
  }
  exec(ctx2) {
    let curve1d = this.getCurve1d(ctx2);
    if (curve1d) {
      curve1d.generators.active.reset();
    }
  }
};
ToolOp.register(Curve1dBSplineResetOp);
var Curve1dBSplineLoadTemplOp = class extends Curve1dBSplineOpBase {
  static {
    __name(this, "Curve1dBSplineLoadTemplOp");
  }
  static tooldef() {
    return {
      toolpath: "curve1d.bspline_load_template",
      inputs: ToolOp.inherit({
        template: new EnumProperty(SplineTemplates.SMOOTH, SplineTemplates)
      }),
      outputs: {}
    };
  }
  exec(ctx2) {
    let curve1d = this.getCurve1d(ctx2);
    let { template } = this.getInputs();
    if (curve1d) {
      curve1d.generators.active.loadTemplate(template);
    }
  }
};
ToolOp.register(Curve1dBSplineLoadTemplOp);
var Curve1dBSplineDeleteOp = class extends Curve1dBSplineOpBase {
  static {
    __name(this, "Curve1dBSplineDeleteOp");
  }
  static tooldef() {
    return {
      toolpath: "curve1d.bspline_delete_point",
      inputs: ToolOp.inherit({}),
      outputs: {}
    };
  }
  exec(ctx2) {
    let curve1d = this.getCurve1d(ctx2);
    if (curve1d) {
      curve1d.generators.active.deletePoint();
    }
  }
};
ToolOp.register(Curve1dBSplineDeleteOp);
var Curve1dBSplineSelectOp = class extends Curve1dBSplineOpBase {
  static {
    __name(this, "Curve1dBSplineSelectOp");
  }
  static tooldef() {
    return {
      toolpath: "curve1d.bspline_select_point",
      inputs: ToolOp.inherit({
        point: new IntProperty(-1),
        state: new BoolProperty(true),
        unique: new BoolProperty(true)
      }),
      outputs: {}
    };
  }
  exec(ctx2) {
    let curve1d = this.getCurve1d(ctx2);
    if (curve1d) {
      let bspline = curve1d.generators.active;
      let { point, state, unique } = this.getInputs();
      for (let p of bspline.points) {
        if (p.eid === point) {
          if (state) {
            p.flag |= CurveFlags.SELECT;
          } else {
            p.flag &= ~CurveFlags.SELECT;
          }
        } else if (unique) {
          p.flag &= ~CurveFlags.SELECT;
        }
      }
      curve1d._fireEvent("select", bspline);
    }
  }
};
ToolOp.register(Curve1dBSplineSelectOp);
var Curve1dBSplineAddOp = class extends Curve1dBSplineOpBase {
  static {
    __name(this, "Curve1dBSplineAddOp");
  }
  static tooldef() {
    return {
      toolpath: "curve1d.bspline_add_point",
      inputs: ToolOp.inherit({
        x: new FloatProperty(),
        y: new FloatProperty()
      }),
      outputs: {}
    };
  }
  exec(ctx2) {
    let curve1d = this.getCurve1d(ctx2);
    if (curve1d) {
      let { x, y } = this.getInputs();
      curve1d.generators.active.addFromMouse(x, y);
    }
  }
};
ToolOp.register(Curve1dBSplineAddOp);
var BSplineTransformOp = class extends ToolOp {
  static {
    __name(this, "BSplineTransformOp");
  }
  constructor() {
    super();
    this.first = true;
    this.start_mpos = new Vector22();
  }
  static tooldef() {
    return {
      toolpath: "curve1d.transform_bspline",
      inputs: {
        dataPath: new StringProperty(),
        off: new Vec2Property(),
        dpi: new FloatProperty(1)
      },
      is_modal: true,
      outputs: {}
    };
  }
  _undo = void 0;
  storePoints(ctx2) {
    let curve1d = this.getCurve1d(ctx2);
    if (curve1d) {
      let bspline = curve1d.generators.active;
      return Array.from(bspline.points).map((p) => p.copy());
    }
    return [];
  }
  loadPoints(ctx2, ps) {
    let curve1d = this.getCurve1d(ctx2);
    if (curve1d) {
      let bspline = curve1d.generators.active;
      for (let p1 of bspline.points) {
        for (let p2 of ps) {
          if (p2.eid === p1.eid) {
            p1.co.load(p2.co);
            p1.rco.load(p2.rco);
            p1.sco.load(p2.sco);
          }
        }
      }
      bspline.parent._fireEvent("transform", bspline);
      bspline.recalc = RecalcFlags.ALL;
      bspline.updateKnots();
      bspline.update();
      bspline.redraw();
    }
  }
  undoPre(ctx2) {
    this._undo = this.storePoints(ctx2);
  }
  undo(ctx2) {
    this.loadPoints(ctx2, this._undo);
  }
  getCurve1d(ctx2) {
    let { dataPath } = this.getInputs();
    let curve1d;
    try {
      curve1d = ctx2.api.getValue(ctx2, dataPath);
    } catch (error) {
      console.error(error.stack);
      console.error(error.message);
      console.error("Failed to lookup curve1d property at path ", dataPath);
      return;
    }
    return curve1d;
  }
  finish(cancel = false) {
    let ctx2 = this.modal_ctx;
    this.modalEnd(cancel);
    let curve1d = this.getCurve1d(ctx2);
    if (curve1d) {
      curve1d.generators.active.fastmode = false;
    }
    if (cancel) {
      this.undo(ctx2);
    }
  }
  on_pointerup(e2) {
    this.finish();
  }
  modalStart(ctx2) {
    super.modalStart(ctx2);
    let curve1d = this.getCurve1d(ctx2);
    if (!curve1d) {
      console.log("Failed to get curve1d!");
      return;
    }
    let bspline = curve1d.generators.active;
    for (let p of bspline.points) {
      p.startco.load(p.co);
    }
  }
  on_pointermove(e2) {
    let mpos = new Vector22().loadXY(e2.x, e2.y);
    if (this.first) {
      this.start_mpos.load(mpos);
      this.first = false;
      return;
    }
    let curve1d = this.getCurve1d(this.modal_ctx);
    if (curve1d) {
      curve1d.generators.active.fastmode = true;
    }
    const { dpi } = this.getInputs();
    let off = new Vector22(mpos).sub(this.start_mpos).mulScalar(dpi);
    off[1] = -off[1];
    this.inputs.off.setValue(off);
    const bspline = curve1d.generators.active;
    for (let p of bspline.points) {
      p.co.load(p.startco);
    }
    this.exec(this.modal_ctx);
  }
  on_pointerdown(e2) {
    this.finish();
  }
  exec(ctx2) {
    let curve1d = this.getCurve1d(ctx2);
    if (!curve1d) {
      return;
    }
    let bspline = curve1d.generators.active;
    let { off } = this.getInputs();
    const xRange = curve1d.xRange, yRange = curve1d.yRange;
    for (let p of bspline.points) {
      if (p.flag & CurveFlags.SELECT) {
        p.co.add(off);
        p.co[0] = Math.min(Math.max(p.co[0], xRange[0]), xRange[1]);
        p.co[1] = Math.min(Math.max(p.co[1], yRange[0]), yRange[1]);
      }
    }
    bspline.parent._fireEvent("transform", bspline);
    bspline.recalc = RecalcFlags.ALL;
    bspline.updateKnots();
    bspline.update();
    bspline.redraw();
  }
};
ToolOp.register(BSplineTransformOp);
var Curve1DPoint = class _Curve1DPoint {
  static {
    __name(this, "Curve1DPoint");
  }
  constructor(co) {
    this.co = new Vector22(co);
    this.rco = new Vector22(co);
    this.sco = new Vector22(co);
    this.startco = new Vector22();
    this.eid = -1;
    this.flag = 0;
    this.tangent = TangentModes.SMOOTH;
    Object.seal(this);
  }
  get 0() {
    throw new Error("Curve1DPoint get 0");
  }
  get 1() {
    throw new Error("Curve1DPoint get 1");
  }
  /* Needed for file compatibility. */
  set 0(v) {
    this.co[0] = v;
  }
  set 1(v) {
    this.co[1] = v;
  }
  load(b) {
    this.eid = b.eid;
    this.flag = b.flag;
    this.tangent = b.tangent;
    this.co.load(b.co);
    this.rco.load(b.rco);
    this.sco.load(b.sco);
    this.startco.load(b.startco);
    return this;
  }
  set deg(v) {
    console.warn("old file data detected");
  }
  static fromJSON(obj2) {
    let ret2 = new _Curve1DPoint(obj2);
    if ("0" in obj2) {
      ret2.co[0] = obj2[0];
      ret2.co[1] = obj2[1];
    } else {
      ret2.co.load(obj2.co);
    }
    ret2.startco.load(obj2.startco);
    ret2.eid = obj2.eid;
    ret2.flag = obj2.flag;
    ret2.tangent = obj2.tangent;
    ret2.rco.load(obj2.rco);
    return ret2;
  }
  copy() {
    let ret2 = new _Curve1DPoint(this.co);
    ret2.tangent = this.tangent;
    ret2.flag = this.flag;
    ret2.eid = this.eid;
    ret2.startco.load(this.startco);
    ret2.rco.load(this.rco);
    ret2.sco.load(this.sco);
    return ret2;
  }
  toJSON() {
    return {
      co: this.co,
      eid: this.eid,
      flag: this.flag,
      tangent: this.tangent,
      rco: this.rco,
      startco: this.startco
    };
  }
  loadSTRUCT(reader) {
    reader(this);
    this.sco.load(this.co);
    this.rco.load(this.co);
    splineCache.update(this);
  }
};
;
Curve1DPoint.STRUCT = `
Curve1DPoint {
  co      : vec2;
  rco     : vec2;
  sco     : vec2;
  startco : vec2;
  eid     : int;
  flag    : int;
  tangent : int;
}
`;
struct_default.register(Curve1DPoint);
var _udigest2 = new HashDigest();
var BSplineCache = class {
  static {
    __name(this, "BSplineCache");
  }
  constructor() {
    this.curves = [];
    this.map = /* @__PURE__ */ new Map();
    this.maxCurves = 32;
    this.gen = 0;
  }
  limit() {
    if (this.curves.length <= this.maxCurves) {
      return;
    }
    this.curves.sort((a3, b) => b.cache_w - a3.cache_w);
    while (this.curves.length > this.maxCurves) {
      let curve = this.curves.pop();
      this.map.delete(curve.calcHashKey());
    }
  }
  has(curve) {
    let curve2 = this.map.get(curve.calcHashKey());
    return curve2 && curve2.equals(curve);
  }
  get(curve) {
    let key2 = curve.calcHashKey();
    curve._last_cache_key = key2;
    let curve2 = this.map.get(key2);
    if (curve2 && curve2.equals(curve)) {
      curve2.cache_w = this.gen++;
      return curve2;
    }
    curve2 = curve.copy();
    curve2._last_cache_key = key2;
    curve2.updateKnots();
    curve2.regen_basis();
    curve2.regen_hermite();
    this.map.set(curve2);
    this.curves.push(curve2);
    curve2.cache_w = this.gen++;
    this.limit();
    return curve2;
  }
  _remove(key2) {
    let curve = this.map.get(key2);
    this.map.delete(key2);
    this.curves.remove(curve);
  }
  update(curve) {
    let key2 = curve._last_cache_key;
    if (this.map.has(key2)) {
      this._remove(curve);
      this.get(curve);
    }
  }
};
var splineCache = new BSplineCache();
window._splineCache = splineCache;
var _idgen = 1;
var BSplineCurve = class _BSplineCurve extends CurveTypeData {
  static {
    __name(this, "BSplineCurve");
  }
  constructor() {
    super();
    this._bid = _idgen++;
    this._degOffset = 0;
    this.cache_w = 0;
    this._last_cache_key = 0;
    this.fastmode = false;
    this.points = [];
    this.length = 0;
    this.interpolating = false;
    this._ps = [];
    this.hermite = [];
    this.fastmode = false;
    this.deg = 6;
    this.recalc = RecalcFlags.ALL;
    this.basis_tables = [];
    this.eidgen = new IDGen();
    this.add(0, 0);
    this.add(1, 1);
    this.mpos = new Vector22();
    this.on_mousedown = this.on_mousedown.bind(this);
    this.on_mousemove = this.on_mousemove.bind(this);
    this.on_mouseup = this.on_mouseup.bind(this);
    this.on_keydown = this.on_keydown.bind(this);
    this.on_touchstart = this.on_touchstart.bind(this);
    this.on_touchmove = this.on_touchmove.bind(this);
    this.on_touchend = this.on_touchend.bind(this);
    this.on_touchcancel = this.on_touchcancel.bind(this);
  }
  get hasGUI() {
    return this.uidata !== void 0;
  }
  static define() {
    return {
      uiname: "B-Spline",
      name: "bspline",
      typeName: "BSplineCurve"
    };
  }
  calcHashKey(digest = _udigest2.reset()) {
    let d = digest;
    super.calcHashKey(d);
    d.add(this.deg);
    d.add(this.interpolating);
    d.add(this.points.length);
    for (let p of this.points) {
      let x = ~~(p.co[0] * 1024);
      let y = ~~(p.co[1] * 1024);
      d.add(x);
      d.add(y);
      d.add(p.tangent);
    }
    return d.get();
  }
  copyTo(b) {
    b.deg = this.deg;
    b.interpolating = this.interpolating;
    b.fastmode = this.fastmode;
    for (let p of this.points) {
      let p2 = p.copy();
      b.points.push(p2);
    }
    return b;
  }
  copy() {
    let curve = new _BSplineCurve();
    this.copyTo(curve);
    return curve;
  }
  equals(b) {
    if (b.type !== this.type) {
      return false;
    }
    let bad = this.points.length !== b.points.length;
    bad = bad || this.deg !== b.deg;
    bad = bad || this.interpolating !== b.interpolating;
    if (bad) {
      return false;
    }
    for (let i2 = 0; i2 < this.points.length; i2++) {
      let p1 = this.points[i2];
      let p2 = b.points[i2];
      if (p1.co.vectorDistance(p2.co) > 1e-5) {
        return false;
      }
      if (p1.tangent !== p2.tangent) {
        return false;
      }
    }
    return true;
  }
  remove(p) {
    let ret2 = this.points.remove(p);
    this.length = this.points.length;
    return ret2;
  }
  add(x, y, no_update = false) {
    let p = new Curve1DPoint();
    this.recalc = RecalcFlags.ALL;
    p.eid = this.eidgen.next();
    p.co.loadXY(x, y);
    p.sco.load(p.co);
    p.rco.load(p.co);
    this.points.push(p);
    if (!no_update) {
      this.update();
    }
    this.length = this.points.length;
    return p;
  }
  update() {
    super.update();
  }
  _sortPoints() {
    if (!this.interpolating) {
      for (let i2 = 0; i2 < this.points.length; i2++) {
        this.points[i2].rco.load(this.points[i2].co);
      }
    }
    this.points.sort(function(a3, b) {
      return a3.co[0] - b.co[0];
    });
    return this;
  }
  updateKnots(recalc = true, points = this.points) {
    if (recalc) {
      this.recalc = RecalcFlags.ALL;
    }
    this._sortPoints();
    this._ps = [];
    if (points.length < 2) {
      return;
    }
    let a3 = points[0].co[0], b = points[points.length - 1].co[0];
    let degExtra = this.deg;
    this._degOffset = -this.deg;
    for (let i2 = 0; i2 < points.length - 1; i2++) {
      this._ps.push(points[i2]);
    }
    if (degExtra) {
      let last = points.length - 1;
      for (let i2 = 0; i2 < degExtra; i2++) {
        let p = points[last].copy();
        this._ps.push(p);
      }
    }
    if (!this.interpolating) {
      for (let i2 = 0; i2 < this._ps.length; i2++) {
        this._ps[i2].rco.load(this._ps[i2].co);
      }
    }
    for (let i2 = 0; i2 < points.length; i2++) {
      let p = points[i2];
      let x = p.co[0], y = p.co[1];
      p.sco[0] = x;
      p.sco[1] = y;
    }
  }
  toJSON() {
    this._sortPoints();
    let ret2 = super.toJSON();
    ret2 = Object.assign(ret2, {
      points: this.points.map((p) => p.toJSON()),
      deg: this.deg,
      interpolating: this.interpolating,
      eidgen: this.eidgen.toJSON()
    });
    return ret2;
  }
  loadJSON(obj2) {
    super.loadJSON(obj2);
    this.interpolating = obj2.interpolating;
    this.deg = obj2.deg;
    this.length = 0;
    this.points = [];
    this._ps = [];
    if (obj2.range) {
      this.range = [new Vector22(obj2.range[0]), new Vector22(obj2.range[1])];
    }
    this.hightlight = void 0;
    this.eidgen = IDGen.fromJSON(obj2.eidgen);
    this.recalc = RecalcFlags.ALL;
    this.mpos = [0, 0];
    for (let i2 = 0; i2 < obj2.points.length; i2++) {
      this.points.push(Curve1DPoint.fromJSON(obj2.points[i2]));
    }
    this.updateKnots();
    this.redraw();
    return this;
  }
  basis(t, i2) {
    if (this.recalc & RecalcFlags.FULL_BASIS) {
      return this._basis(t, i2);
    }
    if (this.recalc & RecalcFlags.BASIS) {
      this.regen_basis();
      this.recalc &= ~RecalcFlags.BASIS;
    }
    i2 = Math.min(Math.max(i2, 0), this._ps.length - 1);
    t = Math.min(Math.max(t, 0), 1) * 0.999999999;
    let table = this.basis_tables[i2];
    let s = t * (table.length / 4) * 0.99999;
    let j2 = ~~s;
    s -= j2;
    j2 *= 4;
    return bez4(table[j2], table[j2 + 1], table[j2 + 2], table[j2 + 3], s);
  }
  reset(empty = false) {
    this.length = 0;
    this.points = [];
    this._ps = [];
    if (!empty) {
      this.add(0, 0, true);
      this.add(1, 1, true);
    }
    this.recalc = 1;
    this.updateKnots();
    this.update();
    this.redraw();
    return this;
  }
  regen_hermite(steps) {
    if (splineCache.has(this)) {
      console.log("loading spline approx from cached bspline data");
      this.hermite = splineCache.get(this).hermite;
      return;
    }
    if (steps === void 0) {
      steps = this.fastmode ? 120 : 340;
    }
    if (this.interpolating) {
      steps *= 2;
    }
    this.hermite = new Array(steps);
    let table = this.hermite;
    let eps = 1e-5;
    let dt = (1 - eps * 4.001) / (steps - 1);
    let t = eps * 4;
    let lastdv1, lastf3;
    for (let j2 = 0; j2 < steps; j2++, t += dt) {
      let f1 = this._evaluate(t - eps * 2);
      let f22 = this._evaluate(t - eps);
      let f3 = this._evaluate(t);
      let f4 = this._evaluate(t + eps);
      let f5 = this._evaluate(t + eps * 2);
      let dv1 = (f4 - f22) / (eps * 2);
      dv1 /= steps;
      if (j2 > 0) {
        let j22 = j2 - 1;
        table[j22 * 4] = lastf3;
        table[j22 * 4 + 1] = lastf3 + lastdv1 / 3;
        table[j22 * 4 + 2] = f3 - dv1 / 3;
        table[j22 * 4 + 3] = f3;
      }
      lastdv1 = dv1;
      lastf3 = f3;
    }
  }
  solve_interpolating() {
    for (let p of this._ps) {
      p.rco.load(p.co);
    }
    let points = this.points.concat(this.points);
    this._evaluate2(0.5);
    let error1 = /* @__PURE__ */ __name((p) => {
      return this._evaluate(p.co[0]) - p.co[1];
    }, "error1");
    let error = /* @__PURE__ */ __name((p) => {
      return error1(p);
    }, "error");
    let err = 0;
    let g = new Vector22();
    for (let step = 0; step < 25; step++) {
      err = 0;
      for (let p of this._ps) {
        let r1 = error(p);
        const df = 1e-6;
        err += Math.abs(r1);
        if (p === this._ps[this._ps.length - 1]) {
          continue;
        }
        g.zero();
        for (let i2 = 0; i2 < 2; i2++) {
          let orig = p.rco[i2];
          p.rco[i2] += df;
          let r2 = error(p);
          p.rco[i2] = orig;
          g[i2] = (r2 - r1) / df;
        }
        let totgs = g.dot(g);
        if (totgs < 1e-8) {
          continue;
        }
        r1 /= totgs;
        let k2 = 0.5;
        p.rco[0] += -r1 * g[0] * k2;
        p.rco[1] += -r1 * g[1] * k2;
      }
      let th = this.fastmode ? 1e-3 : 5e-5;
      if (err < th) {
        break;
      }
    }
  }
  regen_basis() {
    if (splineCache.has(this)) {
      console.log("loading from cached bspline data");
      this.basis_tables = splineCache.get(this).basis_tables;
      return;
    }
    let steps = this.fastmode ? 64 : 128;
    if (this.interpolating) {
      steps *= 2;
    }
    this.basis_tables = new Array(this._ps.length);
    for (let i2 = 0; i2 < this._ps.length; i2++) {
      let table = this.basis_tables[i2] = new Array((steps - 1) * 4);
      let eps = 1e-5;
      let dt = (1 - eps * 8) / (steps - 1);
      let t = eps * 4;
      let lastdv1 = 0, lastf3 = 0;
      for (let j2 = 0; j2 < steps; j2++, t += dt) {
        let f3 = this._basis(t, i2);
        let dv1;
        if (0) {
          let f22 = this._basis(t - eps, i2);
          let f4 = this._basis(t + eps, i2);
          dv1 = (f4 - f22) / (eps * 2);
        } else {
          dv1 = this._dbasis(t, i2);
        }
        if (isNaN(dv1)) {
          console.log("NaN!");
          debugger;
          dv1 = this._dbasis(t, i2);
        }
        dv1 /= steps;
        if (j2 > 0) {
          let j22 = j2 - 1;
          table[j22 * 4] = lastf3;
          table[j22 * 4 + 1] = lastf3 + lastdv1 / 3;
          table[j22 * 4 + 2] = f3 - dv1 / 3;
          table[j22 * 4 + 3] = f3;
        }
        lastdv1 = dv1;
        lastf3 = f3;
      }
    }
  }
  _dbasis(t, i2) {
    let len = this._ps.length;
    let ps = this._ps;
    function safe_inv(n) {
      return n === 0 ? 0 : 1 / n;
    }
    __name(safe_inv, "safe_inv");
    function bas(s, i3, n) {
      let kn = Math.min(Math.max(i3 + 1, 0), len - 1);
      let knn = Math.min(Math.max(i3 + n, 0), len - 1);
      let knn1 = Math.min(Math.max(i3 + n + 1, 0), len - 1);
      let ki = Math.min(Math.max(i3, 0), len - 1);
      if (n === 0) {
        return s >= ps[ki].rco[0] && s < ps[kn].rco[0] ? 1 : 0;
      } else {
        let a3 = (s - ps[ki].rco[0]) * safe_inv(ps[knn].rco[0] - ps[ki].rco[0] + 1e-4);
        let b = (ps[knn1].rco[0] - s) * safe_inv(ps[knn1].rco[0] - ps[kn].rco[0] + 1e-4);
        return a3 * bas(s, i3, n - 1) + b * bas(s, i3 + 1, n - 1);
      }
    }
    __name(bas, "bas");
    function dbas(s, j2, n) {
      let kn = Math.min(Math.max(j2 + 1, 0), len - 1);
      let knn = Math.min(Math.max(j2 + n, 0), len - 1);
      let knn1 = Math.min(Math.max(j2 + n + 1, 0), len - 1);
      let ki = Math.min(Math.max(j2, 0), len - 1);
      kn = ps[kn].rco[0];
      knn = ps[knn].rco[0];
      knn1 = ps[knn1].rco[0];
      ki = ps[ki].rco[0];
      if (n === 0) {
        return 0;
      } else {
        let div = (ki - knn) * (kn - knn1);
        if (div === 0) {
          return 0;
        }
        return (((ki - s) * dbas(s, j2, n - 1) - bas(s, j2, n - 1)) * (kn - knn1) - ((knn1 - s) * dbas(s, j2 + 1, n - 1) - bas(s, j2 + 1, n - 1)) * (ki - knn)) / div;
      }
    }
    __name(dbas, "dbas");
    let deg = this.deg;
    return dbas(t, i2 + this._degOffset, deg);
  }
  _basis(t, i2) {
    let len = this._ps.length;
    let ps = this._ps;
    function safe_inv(n) {
      return n === 0 ? 0 : 1 / n;
    }
    __name(safe_inv, "safe_inv");
    function bas(s, i3, n) {
      let kp = Math.min(Math.max(i3 - 1, 0), len - 1);
      let kn = Math.min(Math.max(i3 + 1, 0), len - 1);
      let knn = Math.min(Math.max(i3 + n, 0), len - 1);
      let knn1 = Math.min(Math.max(i3 + n + 1, 0), len - 1);
      let ki = Math.min(Math.max(i3, 0), len - 1);
      if (n === 0) {
        return s >= ps[ki].rco[0] && s < ps[kn].rco[0] ? 1 : 0;
      } else {
        let a3 = (s - ps[ki].rco[0]) * safe_inv(ps[knn].rco[0] - ps[ki].rco[0] + 1e-4);
        let b2 = (ps[knn1].rco[0] - s) * safe_inv(ps[knn1].rco[0] - ps[kn].rco[0] + 1e-4);
        return a3 * bas(s, i3, n - 1) + b2 * bas(s, i3 + 1, n - 1);
      }
    }
    __name(bas, "bas");
    let p = this._ps[i2].rco, nk, pk;
    let deg = this.deg;
    let b = bas(t, i2 + this._degOffset, deg);
    return b;
  }
  evaluate(t) {
    if (this.points.length === 0) {
      return 0;
    }
    let a3 = this.points[0].rco, b = this.points[this.points.length - 1].rco;
    if (t < a3[0]) return a3[1];
    if (t > b[0]) return b[1];
    if (this.points.length === 2) {
      t = (t - a3[0]) / (b[0] - a3[0]);
      return a3[1] + (b[1] - a3[1]) * t;
    }
    if (this.recalc) {
      this.regen_basis();
      if (this.interpolating) {
        this.solve_interpolating();
      }
      this.regen_hermite();
      this.recalc = 0;
    }
    t *= 0.999999;
    let table = this.hermite;
    let s = t * (table.length / 4);
    let i2 = Math.floor(s);
    s -= i2;
    i2 *= 4;
    return table[i2] + (table[i2 + 3] - table[i2]) * s;
  }
  /* Root find t on the x axis of the curve.  This
   * is more intuitive for the user.
   */
  _evaluate(t) {
    let start_t = t;
    if (this.points.length === 0) {
      return 0;
    }
    let xmin = this.points[0].rco[0];
    let xmax = this.points[this.points.length - 1].rco[0];
    let steps = this.fastmode ? 16 : 32;
    let s = xmin, ds = (xmax - xmin) / (steps - 1);
    let miny;
    let mins;
    let mindx;
    for (let i2 = 0; i2 < steps; i2++, s += ds) {
      let p = this._evaluate2(s);
      let dx = Math.abs(p[0] - start_t);
      if (mindx === void 0 || dx < mindx) {
        mindx = dx;
        miny = p[1];
        mins = s;
      }
    }
    let start2 = mins - ds, end3 = mins + ds;
    s = mins;
    for (let i2 = 0; i2 < 16; i2++) {
      let p = this._evaluate2(s);
      if (p[0] > start_t) {
        end3 = s;
      } else {
        start2 = s;
      }
      s = (start2 + end3) * 0.5;
      miny = p[1];
    }
    if (miny === void 0) {
      miny = 0;
    }
    return miny;
  }
  _evaluate2(t) {
    let ret2 = eval2_rets.next();
    t *= 0.9999999;
    let sumx = 0;
    let sumy = 0;
    let totbasis = 0;
    for (let i2 = 0; i2 < this._ps.length; i2++) {
      let p = this._ps[i2].rco;
      let b = this.basis(t, i2);
      sumx += b * p[0];
      sumy += b * p[1];
      totbasis += b;
    }
    if (totbasis !== 0) {
      sumx /= totbasis;
      sumy /= totbasis;
    }
    ret2[0] = sumx;
    ret2[1] = sumy;
    return ret2;
  }
  _wrapTouchEvent(e2) {
    return {
      x: e2.touches.length ? e2.touches[0].pageX : this.mpos[0],
      y: e2.touches.length ? e2.touches[0].pageY : this.mpos[1],
      button: 0,
      shiftKey: e2.shiftKey,
      altKey: e2.altKey,
      ctrlKey: e2.ctrlKey,
      isTouch: true,
      commandKey: e2.commandKey,
      stopPropagation: /* @__PURE__ */ __name(() => e2.stopPropagation(), "stopPropagation"),
      preventDefault: /* @__PURE__ */ __name(() => e2.preventDefault(), "preventDefault")
    };
  }
  on_touchstart(e2) {
    this.mpos[0] = e2.touches[0].pageX;
    this.mpos[1] = e2.touches[0].pageY;
    let e22 = this._wrapTouchEvent(e2);
    this.on_mousemove(e22);
    this.on_mousedown(e22);
  }
  loadTemplate(templ) {
    if (templ === void 0 || !templates[templ]) {
      console.warn("Unknown bspline template", templ);
      return;
    }
    templ = templates[templ];
    this.reset(true);
    this.deg = 3;
    for (let i2 = 0; i2 < templ.length; i2++) {
      let p = templ[i2];
      if (p === "DEG") {
        this.deg = templ[i2 + 1];
        i2++;
        continue;
      }
      this.add(p[0], p[1], true);
    }
    this.recalc = 1;
    this.updateKnots();
    this.update();
    this.redraw();
    if (this.parent) {
      this.parent._fireEvent("update", this.parent);
    }
  }
  on_touchmove(e2) {
    this.mpos[0] = e2.touches[0].pageX;
    this.mpos[1] = e2.touches[0].pageY;
    let e22 = this._wrapTouchEvent(e2);
    this.on_mousemove(e22);
  }
  on_touchend(e2) {
    this.on_mouseup(this._wrapTouchEvent(e2));
  }
  on_touchcancel(e2) {
    this.on_touchend(e2);
  }
  deletePoint() {
    for (let i2 = 0; i2 < this.points.length; i2++) {
      let p = this.points[i2];
      if (p.flag & CurveFlags.SELECT) {
        this.points.remove(p);
        i2--;
      }
    }
    this.updateKnots();
    this.update();
    this.regen_basis();
    this.recalc = RecalcFlags.ALL;
    this.redraw();
  }
  makeGUI(container, canvas, drawTransform, datapath, onSourceUpdate) {
    console.warn(this._bid, "makeGUI", this.uidata, this.uidata ? this.uidata.start_mpos : void 0);
    let start_mpos;
    if (this.uidata) {
      start_mpos = this.uidata.start_mpos;
    }
    this.uidata = {
      start_mpos: new Vector22(start_mpos),
      transpoints: [],
      dom: container,
      canvas,
      g: canvas.g,
      transforming: false,
      draw_trans: drawTransform,
      datapath
    };
    console.warn("Building gui");
    canvas.addEventListener("touchstart", this.on_touchstart);
    canvas.addEventListener("touchmove", this.on_touchmove);
    canvas.addEventListener("touchend", this.on_touchend);
    canvas.addEventListener("touchcancel", this.on_touchcancel);
    canvas.addEventListener("mousedown", this.on_mousedown);
    canvas.addEventListener("mousemove", this.on_mousemove);
    canvas.addEventListener("mouseup", this.on_mouseup);
    canvas.addEventListener("keydown", this.on_keydown);
    let bstrip = container.row().strip();
    let makebutton = /* @__PURE__ */ __name((strip, k2) => {
      let uiname = k2[0] + k2.slice(1, k2.length).toLowerCase();
      uiname = uiname.replace(/_/g, " ");
      let icon2 = strip.iconbutton(-1, uiname, () => {
        if (datapath) {
          row.ctx.api.execTool(row.ctx, "curve1d.bspline_load_template", {
            dataPath: datapath,
            template: SplineTemplates[k2]
          });
          onSourceUpdate();
        } else {
          this.loadTemplate(SplineTemplates[k2]);
        }
      });
      icon2.iconsheet = 0;
      icon2.customIcon = SplineTemplateIcons[k2];
    }, "makebutton");
    for (let k2 in SplineTemplates) {
      makebutton(bstrip, k2);
    }
    let row = container.row();
    let fullUpdate = /* @__PURE__ */ __name(() => {
      this.updateKnots();
      this.update();
      this.regen_basis();
      this.recalc = RecalcFlags.ALL;
      this.redraw();
    }, "fullUpdate");
    let Icons2 = row.constructor.getIconEnum();
    let icon = Icons2.LARGE_X !== void 0 ? Icons2.LARGE_X : Icons2.TINY_X;
    if (Icons2.LARGE_X === void 0) {
      console.log(Icons2);
      console.error("Curve widget expects Icons.LARGE_X icon for delete button.");
    }
    row.iconbutton(icon, "Delete Point", () => {
      if (datapath) {
        row.ctx.api.execTool(row.ctx, "curve1d.bspline_delete_point", {
          dataPath: datapath
        });
      } else {
        this.deletePoint();
      }
      onSourceUpdate();
      fullUpdate();
    });
    row.button("Reset", () => {
      if (datapath) {
        row.ctx.api.execTool(row.ctx, "curve1d.reset_bspline", {
          dataPath: datapath
        });
        onSourceUpdate();
      } else {
        this.reset();
      }
    });
    let slider = row.simpleslider(void 0, {
      name: "Degree",
      min: 1,
      max: 7,
      isInt: true,
      callback: /* @__PURE__ */ __name((slider2) => {
        this.deg = Math.floor(slider2.value);
        fullUpdate();
      }, "callback")
    });
    slider.setValue(this.deg);
    let last_deg = this.deg;
    slider.update.after(() => {
      if (last_deg !== this.deg) {
        console.log("degree update", this.deg);
        last_deg = this.deg;
        slider.setValue(this.deg);
      }
    });
    slider.baseUnit = "none";
    slider.displayUnit = "none";
    row = container.row();
    let check = row.check(void 0, "Interpolating");
    check.checked = this.interpolating;
    check.onchange = () => {
      this.interpolating = check.value;
      fullUpdate();
    };
    return this;
  }
  killGUI(container, canvas) {
    if (this.uidata !== void 0) {
      let ud = this.uidata;
      this.uidata = void 0;
      canvas.removeEventListener("touchstart", this.on_touchstart);
      canvas.removeEventListener("touchmove", this.on_touchmove);
      canvas.removeEventListener("touchend", this.on_touchend);
      canvas.removeEventListener("touchcancel", this.on_touchcancel);
      canvas.removeEventListener("mousedown", this.on_mousedown);
      canvas.removeEventListener("mousemove", this.on_mousemove);
      canvas.removeEventListener("mouseup", this.on_mouseup);
      canvas.removeEventListener("keydown", this.on_keydown);
    }
    return this;
  }
  start_transform(useSelected = true) {
    let dpi = 1 / this.uidata.draw_trans[0];
    for (let p of this.points) {
      p.startco.load(p.co);
    }
    let transform_op = new BSplineTransformOp();
    transform_op.inputs.dataPath.setValue(this.uidata.datapath);
    transform_op.inputs.dpi.setValue(dpi);
    this.uidata.dom.ctx.api.execTool(this.uidata.dom.ctx, transform_op);
  }
  on_mousedown(e2) {
    this.uidata.start_mpos.load(this.transform_mpos(e2.x, e2.y));
    this.fastmode = true;
    let mpos = this.transform_mpos(e2.x, e2.y);
    let x = mpos[0], y = mpos[1];
    this.do_highlight(x, y);
    if (this.points.highlight !== void 0) {
      if (!e2.shiftKey) {
        for (let i2 = 0; i2 < this.points.length; i2++) {
          this.points[i2].flag &= ~CurveFlags.SELECT;
        }
        this.points.highlight.flag |= CurveFlags.SELECT;
      } else {
        this.points.highlight.flag ^= CurveFlags.SELECT;
      }
      if (this.uidata.datapath) {
        let state = e2.shiftKey ? !(this.points.highlight.flag & CurveFlags.SELECT) : true;
        this.uidata.dom.ctx.api.execTool(this.uidata.dom.ctx, "curve1d.bspline_select_point", {
          dataPath: this.uidata.datapath,
          state,
          unique: !e2.shiftKey,
          point: this.points.highlight.eid
        });
      }
      this.start_transform();
      this.updateKnots();
      this.update();
      this.redraw();
    } else {
      let uidata = this.uidata;
      if (this.uidata.datapath) {
        let start_mpos = this.uidata.start_mpos;
        this.uidata.dom.ctx.api.execTool(this.uidata.dom.ctx, "curve1d.bspline_add_point", {
          dataPath: this.uidata.datapath,
          x: start_mpos[0],
          y: start_mpos[1]
        });
      } else {
        this.addFromMouse(this.uidata.start_mpos[0], this.uidata.start_mpos[1]);
        this.parent._fire("update", this.parent);
      }
      this.updateKnots();
      this.update();
      this.redraw();
      this.uidata = uidata;
      this.start_transform();
    }
  }
  load(b) {
    if (this === b) {
      return;
    }
    this.recalc = RecalcFlags.ALL;
    this.length = b.points.length;
    this.points.length = 0;
    this.eidgen = b.eidgen.copy();
    this.deg = b.deg;
    this.interpolating = b.interpolating;
    for (let p of b.points) {
      let p2 = new Curve1DPoint();
      p2.load(p);
      if (p === b.points.highlight) {
        this.points.highlight = p2;
      }
      this.points.push(p2);
    }
    this.updateKnots();
    this.update();
    this.redraw();
    return this;
  }
  addFromMouse(x, y) {
    let p = this.add(x, y);
    p.startco.load(p.co);
    this.points.highlight = p;
    for (let p2 of this.points) {
      p2.flag &= ~CurveFlags.SELECT;
    }
    p.flag |= CurveFlags.SELECT;
    this.updateKnots();
    this.update();
    this.redraw();
    this.points.highlight.flag |= CurveFlags.SELECT;
  }
  do_highlight(x, y) {
    let trans = this.uidata.draw_trans;
    let mindis = 1e17, minp = void 0;
    let limit = 19 / trans[0], limitsqr = limit * limit;
    for (let i2 = 0; i2 < this.points.length; i2++) {
      let p = this.points[i2];
      let dx = x - p.sco[0], dy = y - p.sco[1], dis = dx * dx + dy * dy;
      if (dis < mindis && dis < limitsqr) {
        mindis = dis;
        minp = p;
      }
    }
    if (this.points.highlight !== minp) {
      this.points.highlight = minp;
      this.redraw();
    }
  }
  do_transform(x, y) {
    let off = new Vector22([x, y]).sub(this.uidata.start_mpos);
    let xRange = this.parent.xRange;
    let yRange = this.parent.yRange;
    for (let i2 = 0; i2 < this.uidata.transpoints.length; i2++) {
      let p = this.uidata.transpoints[i2];
      p.co.load(p.startco).add(off);
      p.co[0] = Math.min(Math.max(p.co[0], xRange[0]), xRange[1]);
      p.co[1] = Math.min(Math.max(p.co[1], yRange[0]), yRange[1]);
    }
    this.updateKnots();
    this.update();
    this.redraw();
  }
  transform_mpos(x, y) {
    let r = this.uidata.canvas.getClientRects()[0];
    let dpi = devicePixelRatio;
    x -= parseInt(r.left);
    y -= parseInt(r.top);
    x *= dpi;
    y *= dpi;
    let trans = this.uidata.draw_trans;
    x = x / trans[0] - trans[1][0];
    y = -y / trans[0] - trans[1][1];
    return [x, y];
  }
  on_mousemove(e2) {
    if (e2.isTouch && this.uidata.transforming) {
      e2.preventDefault();
    }
    let mpos = this.transform_mpos(e2.x, e2.y);
    let x = mpos[0], y = mpos[1];
    if (this.uidata.transforming) {
      this.do_transform(x, y);
      this.evaluate(0.5);
    } else {
      this.do_highlight(x, y);
    }
  }
  end_transform() {
    this.uidata.transforming = false;
    this.fastmode = false;
    this.updateKnots();
    this.update();
    splineCache.update(this);
  }
  on_mouseup(e2) {
    this.end_transform();
  }
  on_keydown(e2) {
    switch (e2.keyCode) {
      case 88:
      //xkeey
      case 46:
        if (this.points.highlight !== void 0) {
          this.points.remove(this.points.highlight);
          this.recalc = RecalcFlags.ALL;
          this.points.highlight = void 0;
          this.updateKnots();
          this.update();
          if (this._save_hook !== void 0) {
            this._save_hook();
          }
        }
        break;
    }
  }
  draw(canvas, g, draw_trans) {
    g.save();
    if (this.uidata === void 0) {
      return;
    }
    this.uidata.canvas = canvas;
    this.uidata.g = g;
    this.uidata.draw_trans = draw_trans;
    let sz = draw_trans[0], pan = draw_trans[1];
    g.lineWidth *= 1.5;
    let strokeStyle = g.strokeStyle;
    for (let ssi = 0; ssi < 1; ssi++) {
      break;
      let steps = 512;
      for (let si = 0; si < this.points.length; si++) {
        g.beginPath();
        let f3 = 0;
        let df = 1 / (steps - 1);
        for (let i2 = 0; i2 < steps; i2++, f3 += df) {
          let totbasis = 0;
          for (let j2 = 0; j2 < this.points.length; j2++) {
            totbasis += this.basis(f3, j2);
          }
          let val2 = this.basis(f3, si);
          if (ssi)
            val2 /= totbasis === 0 ? 1 : totbasis;
          (i2 === 0 ? g.moveTo : g.lineTo).call(g, f3, ssi ? val2 : val2 * 0.5);
        }
        let color, alpha = this.points[si] === this.points.highlight ? 1 : 0.7;
        if (ssi) {
          color = "rgba(205, 125, 5," + alpha + ")";
        } else {
          color = "rgba(25, 145, 45," + alpha + ")";
        }
        g.strokeStyle = color;
        g.stroke();
      }
    }
    g.strokeStyle = strokeStyle;
    g.lineWidth /= 3;
    let w = 0.03;
    for (let p of this.points) {
      g.beginPath();
      if (p === this.points.highlight) {
        g.fillStyle = "green";
      } else if (p.flag & CurveFlags.SELECT) {
        g.fillStyle = "red";
      } else {
        g.fillStyle = "orange";
      }
      g.rect(p.sco[0] - w / 2, p.sco[1] - w / 2, w, w);
      g.fill();
    }
    g.restore();
  }
  loadSTRUCT(reader) {
    reader(this);
    super.loadSTRUCT(reader);
    if (this.highlightPoint >= 0) {
      for (let p of this.points) {
        if (p.eid === this.highlightPoint) {
          this.points.highlight = p;
        }
      }
      delete this.highlightPoint;
    }
    this.updateKnots();
    this.recalc = RecalcFlags.ALL;
  }
};
BSplineCurve.STRUCT = struct_default.inherit(BSplineCurve, CurveTypeData) + `
  points         : array(Curve1DPoint);
  highlightPoint : int | this.points.highlight ? this.points.highlight.eid : -1;
  deg            : int;
  eidgen         : IDGen;
  interpolating  : bool;
}
`;
struct_default.register(BSplineCurve);
CurveTypeData.register(BSplineCurve);
function makeSplineTemplateIcons(size = 64) {
  let dpi = devicePixelRatio;
  size = ~~(size * dpi);
  for (let k2 in SplineTemplates) {
    let curve = new BSplineCurve();
    curve.loadTemplate(SplineTemplates[k2]);
    curve.fastmode = true;
    let canvas = document.createElement("canvas");
    canvas.width = canvas.height = size;
    let g = canvas.getContext("2d");
    let steps = 64;
    curve.update();
    let scale = 0.5;
    g.translate(-0.5, -0.5);
    g.scale(size * scale, size * scale);
    g.translate(0.5, 0.5);
    let m = 0;
    let tent2 = /* @__PURE__ */ __name((f3) => 1 - Math.abs(Math.fract(f3) - 0.5) * 2, "tent");
    for (let i2 = 0; i2 < steps; i2++) {
      let s = i2 / (steps - 1);
      let f3 = 1 - curve.evaluate(tent2(s));
      s = s * (1 - m * 2) + m;
      f3 = f3 * (1 - m * 2) + m;
      if (i2 === 0) {
        g.moveTo(s, f3);
      } else {
        g.lineTo(s, f3);
      }
    }
    const ls = 7;
    g.lineCap = "round";
    g.strokeStyle = "black";
    g.lineWidth = ls * 3 * dpi / (size * scale);
    g.stroke();
    g.strokeStyle = "white";
    g.lineWidth = ls * dpi / (size * scale);
    g.stroke();
    let url = canvas.toDataURL();
    let img = document.createElement("img");
    img.src = url;
    SplineTemplateIcons[k2] = img;
    SplineTemplateIcons[SplineTemplates[k2]] = img;
  }
}
__name(makeSplineTemplateIcons, "makeSplineTemplateIcons");
var splineTemplatesLoaded = false;
function initSplineTemplates() {
  if (splineTemplatesLoaded) {
    return;
  }
  splineTemplatesLoaded = true;
  for (let k2 in SplineTemplates) {
    console.log("Loading spline template", k2);
    let curve = new BSplineCurve();
    curve.loadTemplate(SplineTemplates[k2]);
    splineCache.get(curve);
  }
  makeSplineTemplateIcons();
  window._SplineTemplateIcons = SplineTemplateIcons;
}
__name(initSplineTemplates, "initSplineTemplates");
window.setTimeout(() => {
  if (config_default.autoLoadSplineTemplates) {
    initSplineTemplates();
  }
}, 0);

// scripts/path.ux/scripts/path-controller/curve/curve1d.js
function mySafeJSONStringify2(obj2) {
  return JSON.stringify(obj2.toJSON(), function(key2) {
    let v = this[key2];
    if (typeof v === "number") {
      if (v !== Math.floor(v)) {
        v = parseFloat(v.toFixed(5));
      } else {
        v = v;
      }
    }
    return v;
  });
}
__name(mySafeJSONStringify2, "mySafeJSONStringify");
function mySafeJSONParse2(buf) {
  return JSON.parse(buf, (key2, val2) => {
  });
}
__name(mySafeJSONParse2, "mySafeJSONParse");
;
window.mySafeJSONStringify = mySafeJSONStringify2;
var _udigest3 = new HashDigest();
var Curve1D = class _Curve1D {
  static {
    __name(this, "Curve1D");
  }
  constructor() {
    this._eventCBs = [];
    this.uiZoom = 1;
    this.xRange = new Vector2().loadXY(0, 1);
    this.yRange = new Vector2().loadXY(0, 1);
    this.clipToRange = false;
    this.generators = [];
    this.VERSION = CURVE_VERSION;
    for (let gen of CurveConstructors) {
      gen = new gen();
      gen.parent = this;
      this.generators.push(gen);
    }
    this.setGenerator("bspline");
  }
  get generatorType() {
    return this.generators.active ? this.generators.active.type : void 0;
  }
  get fastmode() {
    return this._fastmode;
  }
  set fastmode(val2) {
    this._fastmode = val2;
    for (let gen of this.generators) {
      gen.fastmode = val2;
    }
  }
  /** cb_is_dead is a callback that returns true if it
   *  should be removed from the callback list. */
  on(type, cb, owner, cb_is_dead) {
    if (cb_is_dead === void 0) {
      cb_is_dead = /* @__PURE__ */ __name(() => false, "cb_is_dead");
    }
    this._eventCBs.push({ type, cb, owner, dead: cb_is_dead, once: false });
  }
  off(type, cb) {
    this._eventCBs = this._eventCBs.filter((cb2) => cb2.cb !== cb2);
  }
  once(type, cb, owner, cb_is_dead) {
    this.on(type, cb, owner, cb_is_dead);
    this._eventCBs[this._eventCBs.length - 1].once = true;
  }
  subscribed(type, owner) {
    for (let cb of this._eventCBs) {
      if ((!type || cb.type === type) && cb.owner === owner) {
        return true;
      }
    }
    return false;
  }
  _pruneEventCallbacks() {
    this._eventCBs = this._eventCBs.filter((cb) => !cb.dead());
  }
  _fireEvent(evt, data) {
    this._pruneEventCallbacks();
    for (let i2 = 0; i2 < this._eventCBs.length; i2++) {
      let cb = this._eventCBs[i2];
      if (cb.type !== evt) {
        continue;
      }
      try {
        cb.cb(data);
      } catch (error) {
        console.error(error.stack);
        console.error(error.message);
      }
      if (cb.once) {
        this._eventCBs.remove(cb);
        i2--;
      }
    }
  }
  calcHashKey(digest = _udigest3.reset()) {
    let d = digest;
    for (let g of this.generators) {
      g.calcHashKey(d);
    }
    return d.get();
  }
  equals(b) {
    let gen1 = this.generators.active;
    let gen2 = b.generators.active;
    if (!gen1 || !gen2 || gen1.constructor !== gen2.constructor) {
      return false;
    }
    return gen1.equals(gen2);
  }
  load(b) {
    if (b === void 0 || b === this) {
      return this;
    }
    let json2 = struct_default.writeJSON(b, _Curve1D);
    let cpy = struct_default.readJSON(json2, _Curve1D);
    let activeCls = cpy.generators.active.constructor;
    let oldGens = this.generators;
    this.generators = cpy.generators;
    for (let gen of cpy.generators) {
      for (let gen2 of oldGens) {
        if (gen2.constructor === gen.constructor && gen2.load !== void 0) {
          cpy.generators[cpy.generators.indexOf(gen)] = gen2;
          if (gen2.constructor === activeCls) {
            this.generators.active = gen2;
          }
          gen2.parent = this;
          gen2.load(gen);
          gen = gen2;
          break;
        }
      }
      if (gen.constructor === activeCls) {
        this.generators.active = gen;
      }
      gen.parent = this;
    }
    for (let k2 in json2) {
      if (k2 === "generators") {
        continue;
      }
      if (k2.startsWith("_")) {
        continue;
      }
      let v = cpy[k2];
      if (typeof v === "number" || typeof v === "boolean" || typeof v === "string") {
        this[k2] = v;
      } else if (v instanceof Vector2 || v instanceof Vector32 || v instanceof Vector4 || v instanceof Matrix4) {
        this[k2].load(v);
      }
    }
    this._on_change();
    this.redraw();
    return this;
  }
  copy() {
    let json2 = struct_default.writeJSON(this, _Curve1D);
    return struct_default.readJSON(json2, _Curve1D);
  }
  _on_change() {
  }
  redraw() {
    this._fireEvent("draw", this);
  }
  setGenerator(type) {
    for (let gen of this.generators) {
      if (gen.constructor.define().name === type || gen.type === type || gen.constructor.define().typeName === type || gen.constructor === type) {
        if (this.generators.active) {
          this.generators.active.onInactive();
        }
        this.generators.active = gen;
        gen.onActive();
        return;
      }
    }
    throw new Error("unknown curve type " + type);
  }
  toJSON() {
    let ret2 = {
      generators: [],
      uiZoom: this.uiZoom,
      VERSION: this.VERSION,
      active_generator: this.generatorType,
      xRange: this.xRange,
      yRange: this.yRange,
      clipToRange: this.clipToRange
    };
    for (let gen of this.generators) {
      ret2.generators.push(gen.toJSON());
    }
    ret2.generators.sort((a3, b) => a3.type.localeCompare(b.type));
    return ret2;
  }
  getGenerator(type, throw_on_error = true) {
    for (let gen of this.generators) {
      if (gen.type === type) {
        return gen;
      }
    }
    for (let cls2 of CurveConstructors) {
      if (cls2.define().typeName === type) {
        let gen = new cls2();
        gen.type = type;
        gen.parent = this;
        this.generators.push(gen);
        return gen;
      }
    }
    if (throw_on_error) {
      throw new Error("Unknown generator " + type + ".");
    } else {
      return void 0;
    }
  }
  switchGenerator(type) {
    let gen = this.getGenerator(type);
    if (gen !== this.generators.active) {
      let old = this.generators.active;
      this.generators.active = gen;
      old.onInactive(this);
      gen.onActive(this);
    }
    return gen;
  }
  destroy() {
    return this;
  }
  loadJSON(obj2) {
    this.VERSION = obj2.VERSION;
    this.uiZoom = parseFloat(obj2.uiZoom) || this.uiZoom;
    if (obj2.xRange) {
      this.xRange = new Vector2(obj2.xRange);
    }
    if (obj2.yRange) {
      this.yRange = new Vector2(obj2.yRange);
    }
    this.clipToRange = Boolean(obj2.clipToRange);
    for (let gen of obj2.generators) {
      let gen2 = this.getGenerator(gen.type, false);
      if (!gen2 || !(gen2 instanceof CurveTypeData)) {
        console.warn("Bad curve generator class:", gen2);
        if (gen2) {
          this.generators.remove(gen2);
        }
        continue;
      }
      gen2.parent = void 0;
      gen2.reset();
      gen2.loadJSON(gen);
      gen2.parent = this;
      if (gen.type === obj2.active_generator) {
        this.generators.active = gen2;
      }
    }
    if (this.VERSION < 1.1) {
      this.#patchRange();
    }
    return this;
  }
  evaluate(s) {
    if (this.clipToRange) {
      s = Math.min(Math.max(s, this.xRange[0]), this.xRange[1]);
    }
    let f3;
    try {
      f3 = this.generators.active.evaluate(s);
    } catch (error) {
      f3 = 0;
      console.warn(error.stack);
      console.warn(error.message);
    }
    if (this.clipToRange) {
      f3 = Math.min(Math.max(f3, this.yRange[0]), this.yRange[1]);
    }
    return f3;
  }
  integrate(s, quadSteps) {
    return this.generators.active.integrate(s, quadSteps);
  }
  derivative(s) {
    return this.generators.active.derivative(s);
  }
  derivative2(s) {
    return this.generators.active.derivative2(s);
  }
  inverse(s) {
    return this.generators.active.inverse(s);
  }
  reset() {
    this.generators.active.reset();
  }
  update() {
    return this.generators.active.update();
  }
  draw(canvas, g, draw_transform) {
    let w = canvas.width, h2 = canvas.height;
    g.save();
    let sz = draw_transform[0], pan = draw_transform[1];
    g.beginPath();
    g.moveTo(-1, 0);
    g.lineTo(1, 0);
    g.strokeStyle = "red";
    g.stroke();
    g.beginPath();
    g.moveTo(0, -1);
    g.lineTo(0, 1);
    g.strokeStyle = "green";
    g.stroke();
    let f3 = this.xRange[0], steps = 64;
    let df = (this.xRange[1] - this.xRange[0]) / (steps - 1);
    w = 6 / sz;
    let curve = this.generators.active;
    g.beginPath();
    for (let i2 = 0; i2 < steps; i2++, f3 += df) {
      let val2 = this.evaluate(f3);
      (i2 === 0 ? g.moveTo : g.lineTo).call(g, f3, val2, w, w);
    }
    g.strokeStyle = "grey";
    g.stroke();
    if (this.overlay_curvefunc !== void 0) {
      g.beginPath();
      f3 = this.xRange[0];
      for (let i2 = 0; i2 < steps; i2++, f3 += df) {
        let val2 = this.overlay_curvefunc(f3);
        (i2 === 0 ? g.moveTo : g.lineTo).call(g, f3, val2, w, w);
      }
      g.strokeStyle = "green";
      g.stroke();
    }
    this.generators.active.draw(canvas, g, draw_transform);
    g.restore();
    return this;
  }
  loadSTRUCT(reader) {
    this.generators = [];
    reader(this);
    if (this.VERSION <= 0.75) {
      this.generators = [];
      for (let cls2 of CurveConstructors) {
        this.generators.push(new cls2());
      }
      this.generators.active = this.getGenerator("BSplineCurve");
    }
    for (let gen of this.generators.concat([])) {
      if (!(gen instanceof CurveTypeData)) {
        console.warn("Bad generator data found:", gen);
        this.generators.remove(gen);
        continue;
      }
      if (gen.type === this._active) {
        this.generators.active = gen;
      }
    }
    for (let gen of this.generators) {
      gen.parent = this;
    }
    if (this.VERSION < 1.1) {
      this.#patchRange();
    }
    delete this._active;
    this.VERSION = CURVE_VERSION;
  }
  #patchRange() {
    let range = this.getGenerator("BSplineCurve").range;
    if (range) {
      this.xRange.load(range[0]);
      this.yRange.load(range[1]);
    }
  }
};
Curve1D.STRUCT = `
Curve1D {
  generators  : array(abstract(CurveTypeData));
  _active     : string | obj.generators.active.type;
  VERSION     : float;
  uiZoom      : float;
  xRange      : vec2;
  yRange      : vec2;
  clipToRange : bool;
}
`;
struct_default.register(Curve1D);

// scripts/path.ux/scripts/core/anim.js
var Task = class {
  static {
    __name(this, "Task");
  }
  constructor(taskcb) {
    this.task = taskcb;
    this.start = time_ms();
    this.done = false;
  }
};
var AnimManager = class {
  static {
    __name(this, "AnimManager");
  }
  constructor() {
    this.tasks = [];
    this.timer = void 0;
    this.timeOut = 10 * 1e3;
  }
  stop() {
    if (this.timer !== void 0) {
      window.clearInterval(this.timer);
      this.timer = void 0;
    }
  }
  add(task) {
    this.tasks.push(new Task(task));
  }
  remove(task) {
    for (let t of this.tasks) {
      if (t.task === task) {
        t.dead = true;
        this.tasks.remove(t);
        return;
      }
    }
  }
  start() {
    this.timer = window.setInterval(() => {
      for (let t of this.tasks) {
        try {
          t.task();
        } catch (error) {
          t.done = true;
          print_stack(error);
        }
        if (time_ms() - t.start > this.timeOut) {
          t.dead = true;
        }
      }
      for (let i2 = 0; i2 < this.tasks.length; i2++) {
        if (this.tasks[i2].done) {
          let t = this.tasks[i2];
          this.tasks.remove(t);
          i2--;
          try {
            if (t.task.onend) {
              t.task.onend();
            }
          } catch (error) {
            print_stack(error);
          }
        }
      }
    }, 1e3 / 40);
  }
};
var manager2 = new AnimManager();
manager2.start();
var AbstractCommand = class {
  static {
    __name(this, "AbstractCommand");
  }
  constructor() {
    this.cbs = [];
    this.end_cbs = [];
  }
  start(animator, done) {
  }
  exec(animator, done) {
  }
};
var WaitCommand = class extends AbstractCommand {
  static {
    __name(this, "WaitCommand");
  }
  constructor(ms) {
    super();
    this.ms = ms;
  }
  start(animator, done) {
    this.time = animator.time;
  }
  exec(animator, done) {
    if (animator.time - this.time > this.ms) {
      done();
    }
  }
};
var GoToCommand = class extends AbstractCommand {
  static {
    __name(this, "GoToCommand");
  }
  constructor(obj2, key2, value2, time, curve = "ease") {
    super();
    this.object = obj2;
    this.key = key2;
    this.value = value2;
    this.ms = time;
    if (typeof curve === "string") {
      this.curve = new (getCurve(curve))();
    } else {
      this.curve = curve;
    }
  }
  start(animator, done) {
    this.time = animator.time;
    let value2 = this.object[this.key];
    if (Array.isArray(value2)) {
      this.startValue = list3(value2);
    } else {
      this.startValue = value2;
    }
  }
  exec(animator, done) {
    let t = animator.time - this.time;
    let ms = this.ms;
    if (t > ms) {
      done();
      t = ms;
    }
    t /= ms;
    t = this.curve.evaluate(t);
    if (Array.isArray(this.startValue)) {
      let value2 = this.object[this.key];
      for (let i2 = 0; i2 < this.startValue.length; i2++) {
        if (value2[i2] === void 0 || this.value[i2] === void 0) {
          continue;
        }
        value2[i2] = this.startValue[i2] + (this.value[i2] - this.startValue[i2]) * t;
      }
    } else {
      this.object[this.key] = this.startValue + (this.value - this.startValue) * t;
    }
  }
};
var SetCommand = class extends AbstractCommand {
  static {
    __name(this, "SetCommand");
  }
  constructor(obj2, key2, val2) {
    super();
    this.object = obj2;
    this.key = key2;
    this.value = val2;
  }
  start(animator, done) {
    this.object[key] = val;
    done();
  }
};
var Command = class {
  static {
    __name(this, "Command");
  }
  constructor(type, args2) {
    this.args = args2;
    this.cbs = [];
  }
};
var Animator = class {
  static {
    __name(this, "Animator");
  }
  constructor(owner, method = "update") {
    this.on_tick = this.on_tick.bind(this);
    this.on_tick.onend = () => {
      if (this.onend) {
        this.onend();
      }
    };
    this.commands = [];
    this.owner = owner;
    this._done = false;
    this.method = method;
    this.onend = null;
    this.first = true;
    this.time = 0;
    this.last = time_ms();
    this.bind(owner);
  }
  bind(owner) {
    this._done = false;
    this.owner = owner;
    manager2.add(this.on_tick);
  }
  wait(ms) {
    this.commands.push(new WaitCommand(ms));
    return this;
  }
  goto(key2, val2, timeMs, curve = "ease") {
    let cmd = new GoToCommand(this.owner, key2, val2, timeMs, curve);
    this.commands.push(cmd);
    return this;
  }
  set(key2, val2, time) {
    let cmd = new SetCommand(this.owner, key2, val2);
    this.commands.push(cmd);
    return this;
  }
  /** Call this while the current command is still being executed. */
  while(cb) {
    this.commands[this.commands.length - 1].cbs.push(cb);
    return this;
  }
  then(cb) {
    this.commands[this.commands.length - 1].end_cbs.push(cb);
    return this;
  }
  end() {
    if (this._done) {
      return;
    }
    this._done = true;
    manager2.remove(this.on_tick);
    if (this.onend) {
      this.onend();
    }
  }
  on_tick() {
    if (this._done) {
      throw new Error("animation wasn't properly cleaned up");
    }
    let dt = time_ms() - this.last;
    this.time += dt;
    this.last = time_ms();
    if (this.commands.length === 0) {
      this.end();
      return;
    }
    let cmd = this.commands[0];
    let done = false;
    function donecb() {
      done = true;
    }
    __name(donecb, "donecb");
    if (this.first) {
      this.first = false;
      cmd.start(this, donecb);
    }
    try {
      cmd.exec(this, donecb);
    } catch (error) {
      done = true;
      print_stack(error);
    }
    for (let cb of this.commands[0].cbs) {
      try {
        cb();
      } catch (error) {
        print_stack(error);
      }
    }
    if (done) {
      for (let cb of this.commands[0].end_cbs) {
        try {
          cb();
        } catch (error) {
          print_stack(error);
        }
      }
      while (this.commands.length > 0) {
        this.commands.shift();
        done = false;
        if (this.commands.length > 0) {
          this.commands[0].start(this, donecb);
        }
        if (!done) {
          break;
        }
      }
    }
  }
};

// scripts/path.ux/scripts/path-controller/util/parseutil.js
var parseutil_exports = {};
__export(parseutil_exports, {
  PUTLParseError: () => PUTLParseError,
  getTraceBack: () => getTraceBack,
  lexer: () => lexer2,
  parser: () => parser2,
  tokdef: () => tokdef2,
  token: () => token2
});
var token2 = class {
  static {
    __name(this, "token");
  }
  constructor(type, val2, lexpos, lexlen, lineno, lexer4, parser3) {
    this.type = type;
    this.value = val2;
    this.lexpos = lexpos;
    this.lexlen = lexlen;
    this.lineno = lineno;
    this.lexer = lexer4;
    this.parser = parser3;
  }
  setValue(val2) {
    this.value = val2;
    return this;
  }
  toString() {
    if (this.value !== void 0)
      return "token(type=" + this.type + ", value='" + this.value + "')";
    else
      return "token(type=" + this.type + ")";
  }
};
var tokdef2 = class {
  static {
    __name(this, "tokdef");
  }
  constructor(name, regexpr, func2) {
    this.name = name;
    this.re = regexpr;
    this.func = func2;
  }
};
var PUTLParseError = class extends Error {
  static {
    __name(this, "PUTLParseError");
  }
};
var lexer2 = class _lexer {
  static {
    __name(this, "lexer");
  }
  constructor(tokdef3, errfunc) {
    this.tokdef = tokdef3;
    this.tokens = new Array();
    this.lexpos = 0;
    this.lexdata = "";
    this.lineno = 0;
    this.errfunc = errfunc;
    this.tokints = {};
    this.print_tokens = false;
    this.print_debug = false;
    for (let i2 = 0; i2 < tokdef3.length; i2++) {
      this.tokints[tokdef3[i2].name] = i2;
    }
    this.statestack = [["__main__", 0]];
    this.states = { "__main__": [tokdef3, errfunc] };
    this.statedata = 0;
  }
  copy() {
    let ret2 = new _lexer(this.tokdef, this.errfunc);
    for (let k2 in this.states) {
      let state = this.states[k2];
      state = [state[0], state[1]];
      ret2.states[k2] = state;
    }
    ret2.statedata = this.statedata;
    return ret2;
  }
  //errfunc is optional, defines state-specific error function
  add_state(name, tokdef3, errfunc) {
    if (errfunc === void 0) {
      errfunc = /* @__PURE__ */ __name(function(lexer4) {
        return true;
      }, "errfunc");
    }
    this.states[name] = [tokdef3, errfunc];
  }
  tok_int(name) {
  }
  //statedata is optional.
  //it stores state-specific data in lexer.statedata.
  push_state(state, statedata) {
    this.statestack.push([state, statedata]);
    state = this.states[state];
    this.statedata = statedata;
    this.tokdef = state[0];
    this.errfunc = state[1];
  }
  pop_state() {
    let item = this.statestack[this.statestack.length - 1];
    let state = this.states[item[0]];
    this.tokdef = state[0];
    this.errfunc = state[1];
    this.statedata = item[1];
  }
  input(str) {
    while (this.statestack.length > 1) {
      this.pop_state();
    }
    this.lexdata = str;
    this.lexpos = 0;
    this.lineno = 0;
    this.tokens = new Array();
    this.peeked_tokens = [];
  }
  error() {
    if (this.errfunc !== void 0 && !this.errfunc(this))
      return;
    console.log("Syntax error near line " + this.lineno);
    let next = Math.min(this.lexpos + 8, this.lexdata.length);
    console.log("  " + this.lexdata.slice(this.lexpos, next));
    throw new PUTLParseError("Parse error");
  }
  peek() {
    let tok = this.next(true);
    if (tok === void 0)
      return void 0;
    this.peeked_tokens.push(tok);
    return tok;
  }
  peek_i(i2) {
    while (this.peeked_tokens.length <= i2) {
      let t = this.peek();
      if (t === void 0)
        return void 0;
    }
    return this.peeked_tokens[i2];
  }
  at_end() {
    return this.lexpos >= this.lexdata.length && this.peeked_tokens.length === 0;
  }
  next(ignore_peek) {
    if (ignore_peek !== true && this.peeked_tokens.length > 0) {
      let tok2 = this.peeked_tokens[0];
      if (this.print_debug) {
        console.log("PEEK_SHIFTING", "" + tok2);
      }
      this.peeked_tokens.shift();
      if (this.print_tokens) {
        console.log(tok2.toString());
      }
      return tok2;
    }
    if (this.lexpos >= this.lexdata.length)
      return void 0;
    let ts = this.tokdef;
    let tlen = ts.length;
    let lexdata = this.lexdata.slice(this.lexpos, this.lexdata.length);
    let results = [];
    for (let i2 = 0; i2 < tlen; i2++) {
      let t = ts[i2];
      if (t.re === void 0)
        continue;
      let res = t.re.exec(lexdata);
      if (res !== null && res !== void 0 && res.index === 0) {
        results.push([t, res]);
      }
    }
    let max_res = 0;
    let theres = void 0;
    for (let i2 = 0; i2 < results.length; i2++) {
      let res = results[i2];
      if (res[1][0].length > max_res) {
        theres = res;
        max_res = res[1][0].length;
      }
    }
    if (theres === void 0) {
      this.error();
      return;
    }
    let def = theres[0];
    let lexlen = max_res;
    let tok = new token2(def.name, theres[1][0], this.lexpos, lexlen, this.lineno, this, void 0);
    this.lexpos += max_res;
    if (def.func) {
      tok = def.func(tok);
      if (tok === void 0) {
        return this.next(ignore_peek);
      }
    }
    if (this.print_tokens) {
      console.log(tok.toString());
    }
    if (!ignore_peek && this.print_debug) {
      console.log("CONSUME", tok.toString(), "\n" + getTraceBack());
    }
    return tok;
  }
};
function getTraceBack(limit, start2) {
  try {
    throw new Error();
  } catch (error) {
    let stack = error.stack.split("\n");
    stack = stack.slice(1, stack.length);
    if (start2 === void 0) {
      start2 = 0;
    }
    for (let i2 = 0; i2 < stack.length; i2++) {
      let l = stack[i2];
      let j2 = l.length - 1;
      while (j2 > 0 && l[j2] !== "/") {
        j2--;
      }
      let k2 = j2;
      while (k2 >= 0 && l[k2] !== "(") {
        k2--;
      }
      let func2 = l.slice(0, k2).trim();
      let file = l.slice(j2 + 1, l.length - 1);
      l = `  ${func2} (${file})`;
      if (l.search(/parseutil\.js/) >= 0) {
        start2 = Math.max(start2, i2);
      }
      stack[i2] = l;
    }
    if (limit !== void 0) {
      stack.length = Math.min(stack.length, limit);
    }
    if (start2 !== void 0) {
      stack = stack.slice(start2, stack.length);
    }
    stack = stack.join("\n");
    return stack;
  }
}
__name(getTraceBack, "getTraceBack");
var parser2 = class _parser {
  static {
    __name(this, "parser");
  }
  constructor(lexer4, errfunc) {
    this.lexer = lexer4;
    this.errfunc = errfunc;
    this.start = void 0;
    this.userdata = void 0;
  }
  copy() {
    let ret2 = new _parser(this.lexer.copy(), this.errfunc);
    ret2.start = this.start;
    return ret2;
  }
  parse(data, err_on_unconsumed) {
    if (err_on_unconsumed === void 0)
      err_on_unconsumed = true;
    if (data !== void 0)
      this.lexer.input(data);
    let ret2 = this.start(this);
    if (err_on_unconsumed && !this.lexer.at_end() && this.lexer.next() !== void 0) {
      this.error(void 0, "parser did not consume entire input");
    }
    return ret2;
  }
  input(data) {
    this.lexer.input(data);
  }
  error(tok, msg) {
    if (msg === void 0)
      msg = "";
    let estr;
    if (tok === void 0)
      estr = "Parse error at end of input: " + msg;
    else
      estr = "Parse error at line " + (tok.lineno + 1) + ": " + msg;
    let buf = "1| ";
    let ld = this.lexer.lexdata;
    let l = 1;
    for (let i2 = 0; i2 < ld.length; i2++) {
      let c = ld[i2];
      if (c === "\n") {
        l++;
        buf += "\n" + l + "| ";
      } else {
        buf += c;
      }
    }
    console.log("------------------");
    console.log(buf);
    console.log("==================");
    console.log(estr);
    if (this.errfunc && !this.errfunc(tok)) {
      return;
    }
    throw new PUTLParseError(estr);
  }
  peek() {
    let tok = this.lexer.peek();
    if (tok !== void 0)
      tok.parser = this;
    return tok;
  }
  peek_i(i2) {
    let tok = this.lexer.peek_i(i2);
    if (tok !== void 0)
      tok.parser = this;
    return tok;
  }
  peeknext() {
    return this.peek_i(0);
  }
  next() {
    let tok = this.lexer.next();
    if (tok !== void 0)
      tok.parser = this;
    return tok;
  }
  optional(type) {
    let tok = this.peek_i(0);
    if (tok && tok.type === type) {
      this.next();
      return true;
    }
    return false;
  }
  at_end() {
    return this.lexer.at_end();
  }
  expect(type, msg) {
    let tok = this.next();
    if (msg === void 0)
      msg = type;
    if (tok === void 0 || tok.type != type) {
      this.error(tok, "Expected " + msg + ", not " + tok.type);
    }
    return tok.value;
  }
};
function test_parser2() {
  let basic_types = new set([
    "int",
    "float",
    "double",
    "vec2",
    "vec3",
    "vec4",
    "mat4",
    "string"
  ]);
  let reserved_tokens = new set([
    "int",
    "float",
    "double",
    "vec2",
    "vec3",
    "vec4",
    "mat4",
    "string",
    "static_string",
    "array"
  ]);
  function tk2(name, re, func2) {
    return new tokdef2(name, re, func2);
  }
  __name(tk2, "tk");
  let tokens2 = [
    tk2("ID", /[a-zA-Z]+[a-zA-Z0-9_]*/, function(t) {
      if (reserved_tokens.has(t.value)) {
        t.type = t.value.toUpperCase();
      }
      return t;
    }),
    tk2("OPEN", /\{/),
    tk2("CLOSE", /}/),
    tk2("COLON", /:/),
    tk2("JSCRIPT", /\|/, function(t) {
      let js = "";
      let lexer4 = t.lexer;
      while (lexer4.lexpos < lexer4.lexdata.length) {
        let c = lexer4.lexdata[lexer4.lexpos];
        if (c === "\n")
          break;
        js += c;
        lexer4.lexpos++;
      }
      if (js.endsWith(";")) {
        js = js.slice(0, js.length - 1);
        lexer4.lexpos--;
      }
      t.value = js;
      return t;
    }),
    tk2("LPARAM", /\(/),
    tk2("RPARAM", /\)/),
    tk2("COMMA", /,/),
    tk2("NUM", /[0-9]/),
    tk2("SEMI", /;/),
    tk2("NEWLINE", /\n/, function(t) {
      t.lexer.lineno += 1;
    }),
    tk2("SPACE", / |\t/, function(t) {
    })
  ];
  for (let rt in reserved_tokens) {
    tokens2.push(tk2(rt.toUpperCase()));
  }
  function errfunc(lexer4) {
    return true;
  }
  __name(errfunc, "errfunc");
  let lex = new lexer2(tokens2, errfunc);
  console.log("Testing lexical scanner...");
  lex.input(a);
  let tok;
  while (tok = lex.next()) {
    console.log(tok.toString());
  }
  let parser3 = new parser3(lex);
  parser3.input(a);
  function p_Array(p) {
    p.expect("ARRAY");
    p.expect("LPARAM");
    let arraytype = p_Type(p);
    let itername = "";
    if (p.optional("COMMA")) {
      itername = arraytype;
      arraytype = p_Type(p);
    }
    p.expect("RPARAM");
    return { type: "array", data: { type: arraytype, iname: itername } };
  }
  __name(p_Array, "p_Array");
  function p_Type(p) {
    let tok2 = p.peek();
    if (tok2.type === "ID") {
      p.next();
      return { type: "struct", data: '"' + tok2.value + '"' };
    } else if (basic_types.has(tok2.type.toLowerCase())) {
      p.next();
      return { type: tok2.type.toLowerCase() };
    } else if (tok2.type === "ARRAY") {
      return p_Array(p);
    } else {
      p.error(tok2, "invalid type " + tok2.type);
    }
  }
  __name(p_Type, "p_Type");
  function p_Field(p) {
    let field = {};
    console.log("-----", p.peek().type);
    field.name = p.expect("ID", "struct field name");
    p.expect("COLON");
    field.type = p_Type(p);
    field.set = void 0;
    field.get = void 0;
    let tok2 = p.peek();
    if (tok2.type === "JSCRIPT") {
      field.get = tok2.value;
      p.next();
    }
    tok2 = p.peek();
    if (tok2.type === "JSCRIPT") {
      field.set = tok2.value;
      p.next();
    }
    p.expect("SEMI");
    return field;
  }
  __name(p_Field, "p_Field");
  function p_Struct(p) {
    let st = {};
    st.name = p.expect("ID", "struct name");
    st.fields = [];
    p.expect("OPEN");
    while (1) {
      if (p.at_end()) {
        p.error(void 0);
      } else if (p.optional("CLOSE")) {
        break;
      } else {
        st.fields.push(p_Field(p));
      }
    }
    return st;
  }
  __name(p_Struct, "p_Struct");
  let ret2 = p_Struct(parser3);
  console.log(JSON.stringify(ret2));
}
__name(test_parser2, "test_parser");

// scripts/path.ux/scripts/path-controller/toolsys/toolpath.js
var ToolPaths = {};
var initToolPaths_run = false;
function buildParser() {
  let t = /* @__PURE__ */ __name((name, re, func2) => new tokdef2(name, re, func2), "t");
  let tokens2 = [
    t("ID", /[a-zA-Z_$]+[a-zA-Z0-9_$]*/, (t2) => {
      if (t2.value == "true" || t2.value == "false") {
        t2.type = "BOOL";
        t2.value = t2.value == "true";
      }
      return t2;
    }),
    t("LPAREN", /\(/),
    t("RPAREN", /\)/),
    t("LSBRACKET", /\[/),
    t("RSBRACKET", /\]/),
    t("DOT", /\./),
    t("COMMA", /\,/),
    t("EQUALS", /\=/),
    t("STRLIT", /"[^"]*"/, (t2) => {
      t2.value = t2.value.slice(1, t2.value.length - 1);
      return t2;
    }),
    t("STRLIT", /'[^']*'/, (t2) => {
      t2.value = t2.value.slice(1, t2.value.length - 1);
      return t2;
    }),
    t("NUMBER", /-?[0-9]+/, (t2) => {
      t2.value = parseInt(t2.value);
      return t2;
    }),
    t("NUMBER", /-?[0-9]+\.[0-9]*/, (t2) => {
      t2.value = parseFloat(t2.value);
      return t2;
    }),
    t("WS", /[ \n\r\t]/, (t2) => void 0)
    //ignore whitespace
  ];
  let lexerror = /* @__PURE__ */ __name((t2) => {
    console.warn("Parse error");
    return true;
  }, "lexerror");
  let valid_datatypes = {
    "STRLIT": 1,
    "NUMBER": 1,
    "BOOL": 1
  };
  function p_Start(p2) {
    let args2 = {};
    while (!p2.at_end()) {
      let keyword = p2.expect("ID");
      p2.expect("EQUALS");
      let t2 = p2.next();
      if (!(t2.type in valid_datatypes)) {
        throw new PUTLParseError("parse error: unexpected " + t2.type);
      }
      args2[keyword] = t2.value;
    }
    return args2;
  }
  __name(p_Start, "p_Start");
  let lex = new lexer2(tokens2, lexerror);
  let p = new parser2(lex);
  p.start = p_Start;
  return p;
}
__name(buildParser, "buildParser");
var Parser = buildParser();
function parseToolPath(str, check_tool_exists = true) {
  if (!initToolPaths_run) {
    initToolPaths_run = true;
    initToolPaths();
  }
  let startstr = str;
  let i1 = str.search(/\(/);
  let i2 = str.search(/\)/);
  let args2 = "";
  if (i1 >= 0 && i2 >= 0) {
    args2 = str.slice(i1 + 1, i2).trim();
    str = str.slice(0, i1).trim();
  }
  if (!(str in ToolPaths) && check_tool_exists) {
    throw new DataPathError("unknown tool " + str);
  }
  let ret2;
  try {
    ret2 = Parser.parse(args2);
  } catch (error) {
    console.log(error);
    throw new DataPathError(`"${startstr}"
  ${error.message}`);
  }
  return {
    toolclass: ToolPaths[str],
    args: ret2
  };
}
__name(parseToolPath, "parseToolPath");
function testToolParser() {
  let ret2 = parseToolPath("view3d.sometool(selectmode=1 str='str' bool=true)", false);
  return ret2;
}
__name(testToolParser, "testToolParser");
window.parseToolPath = parseToolPath;
function initToolPaths() {
  for (let cls2 of ToolClasses) {
    if (!cls2.hasOwnProperty("tooldef")) {
      continue;
    }
    let def = cls2.tooldef();
    let path = def.toolpath;
    ToolPaths[path] = cls2;
  }
}
__name(initToolPaths, "initToolPaths");

// scripts/path.ux/scripts/path-controller/controller/controller_abstract.js
var ModelInterface = class {
  static {
    __name(this, "ModelInterface");
  }
  constructor() {
    this.prefix = "";
  }
  getToolDef(path) {
    throw new Error("implement me");
  }
  getToolPathHotkey(ctx2, path) {
    return void 0;
  }
  get list() {
    throw new Error("implement me");
    return ListIface;
  }
  createTool(path, inputs = {}, constructor_argument = void 0) {
    throw new Error("implement me");
  }
  //returns tool class, or undefined if one cannot be found for path
  parseToolPath(path) {
    throw new Error("implement me");
  }
  /**
   * runs .undo,.redo if toolstack head is same as tool
   *
   * otherwise, .execTool(ctx, tool) is called.
   *
   * @param compareInputs : check if toolstack head has identical input values, defaults to false
   * */
  execOrRedo(ctx2, toolop, compareInputs = false) {
    return ctx2.toolstack.execOrRedo(ctx2, toolop, compareInputs);
  }
  execTool(ctx2, path, inputs = {}, constructor_argument = void 0, event = void 0) {
    return new Promise((accept, reject) => {
      let tool = path;
      try {
        if (typeof tool == "string" || !(tool instanceof ToolOp)) {
          tool = this.createTool(ctx2, path, inputs, constructor_argument);
        }
      } catch (error) {
        print_stack(error);
        reject(error);
        return;
      }
      accept(tool);
      try {
        ctx2.toolstack.execTool(ctx2, tool, event);
      } catch (error) {
        print_stack(error);
        throw error;
      }
    });
  }
  //used by simple_controller.js for tagging error messages
  pushReportContext(name) {
  }
  //used by simple_controller.js for tagging error messages
  popReportContext() {
  }
  static toolRegistered(tool) {
    throw new Error("implement me");
  }
  static registerTool(tool) {
    throw new Error("implement me");
  }
  //not yet supported by path.ux's controller implementation
  massSetProp(ctx2, mass_set_path, value2) {
    throw new Error("implement me");
  }
  /** takes a mass_set_path and returns an array of individual paths */
  resolveMassSetPaths(ctx2, mass_set_path) {
    throw new Error("implement me");
  }
  /**
   * @example
   *
   * return {
   *   obj      : [object owning property key]
   *   parent   : [parent of obj]
   *   key      : [property key]
   *   subkey   : used by flag properties, represents a key within the property
   *   value    : [value of property]
   *   prop     : [optional toolprop.ToolProperty representing the property definition]
   *   struct   : [optional datastruct representing the type, if value is an object]
   *   mass_set : mass setter string, if controller implementation supports it
   * }
   */
  resolvePath(ctx2, path, ignoreExistence, rootStruct) {
  }
  setValue(ctx2, path, val2, rootStruct) {
    let res = this.resolvePath(ctx2, path, void 0, rootStruct);
    let prop = res.prop;
    if (prop !== void 0 && prop.flag & PropFlags.READ_ONLY) {
      throw new DataPathError("Tried to set read only property");
    }
    if (prop !== void 0 && prop.flag & PropFlags.USE_CUSTOM_GETSET) {
      prop.dataref = res.obj;
      prop.ctx = ctx2;
      prop.datapath = path;
      if (res.subkey !== void 0) {
        let val22 = prop.getValue();
        if (typeof val22 === "object") {
          val22 = val22.copy();
        }
        if (prop.type === PropTypes.FLAG) {
          if (val2) {
            val22 |= prop.values[res.subkey];
          } else {
            val22 &= ~prop.values[res.subkey];
          }
          val2 = val22;
        } else if (prop.type === PropTypes.ENUM) {
          val2 = prop.values[res.subkey];
        } else {
          val22[res.subkey] = val2;
          val2 = val22;
        }
      }
      prop.setValue(val2);
      return;
    }
    if (prop !== void 0) {
      if (prop.type === PropTypes.CURVE && !val2) {
        throw new DataPathError("can't set curve data to nothing");
      }
      let use_range = prop.type & (PropTypes.INT | PropTypes.FLOAT);
      use_range = use_range || res.subkey && prop.type & (PropTypes.VEC2 | PropTypes.VEC3 | PropTypes.VEC4);
      use_range = use_range && prop.range;
      use_range = use_range && !(prop.range[0] === 0 && prop.range[1] === 0);
      use_range = use_range && typeof val2 === "number";
      if (use_range) {
        val2 = Math.min(Math.max(val2, prop.range[0]), prop.range[1]);
      }
    }
    let old = res.obj[res.key];
    if (res.subkey !== void 0 && res.prop !== void 0 && res.prop.type === PropTypes.ENUM) {
      let ival = res.prop.values[res.subkey];
      if (val2) {
        res.obj[res.key] = ival;
      }
    } else if (res.prop !== void 0 && res.prop.type === PropTypes.FLAG) {
      if (res.subkey !== void 0) {
        let ival = res.prop.values[res.subkey];
        if (val2) {
          res.obj[res.key] |= ival;
        } else {
          res.obj[res.key] &= ~ival;
        }
      } else if (typeof val2 === "number" || typeof val2 === "boolean") {
        val2 = typeof val2 === "boolean" ? val2 & 1 : val2;
        res.obj[res.key] = val2;
      } else {
        throw new DataPathError("Expected a number for a bitmask property");
      }
    } else if (res.subkey !== void 0 && isVecProperty(res.prop)) {
      if (res.key !== "") {
        res.obj[res.key][res.subkey] = val2;
      } else {
        res.obj[res.subkey] = val2;
      }
    } else if (res.key === "" && isVecProperty(res.prop)) {
      for (let i2 = 0; i2 < res.obj.length; i2++) {
        res.obj[i2] = val2[i2];
      }
    } else if (!(prop !== void 0 && prop instanceof ListIface)) {
      res.obj[res.key] = val2;
    }
    if (prop !== void 0 && prop instanceof ListIface) {
      prop.set(this, res.obj, res.key, val2);
    } else if (prop !== void 0) {
      prop.dataref = res.obj;
      prop.datapath = path;
      prop.ctx = ctx2;
      prop._fire("change", res.obj[res.key], old);
    }
  }
  getDescription(ctx2, path) {
    let rdef2 = this.resolvePath(ctx2, path);
    if (rdef2 === void 0) {
      throw new DataPathError("invalid path " + path);
    }
    if (!rdef2.prop || !(rdef2.prop instanceof ToolProperty2)) {
      return "";
    }
    let type = rdef2.prop.type;
    let prop = rdef2.prop;
    if (rdef2.subkey !== void 0) {
      let subkey = rdef2.subkey;
      if (type & (PropTypes.VEC2 | PropTypes.VEC3 | PropTypes.VEC4)) {
        if (prop.descriptions && subkey in prop.descriptions) {
          return prop.descriptions[subkey];
        }
      } else if (type & (PropTypes.ENUM | PropTypes.FLAG)) {
        if (!(subkey in prop.values) && subkey in prop.keys) {
          subkey = prop.keys[subkey];
        }
        ;
        if (prop.descriptions && subkey in prop.descriptions) {
          return prop.descriptions[subkey];
        }
      } else if (type === PropTypes.PROPLIST) {
        let val2 = tdef.value;
        if (typeof val2 === "object" && val2 instanceof ToolProperty2) {
          return val2.description;
        }
      }
    }
    return rdef2.prop.description ? rdef2.prop.description : rdef2.prop.uiname;
  }
  validPath(ctx2, path, rootStruct) {
    try {
      this.getValue(ctx2, path, rootStruct);
      return true;
    } catch (error) {
      if (!(error instanceof DataPathError)) {
        throw error;
      }
    }
    return false;
  }
  getPropName(ctx2, path) {
    let i2 = path.length - 1;
    while (i2 >= 0 && path[i2] !== ".") {
      i2--;
    }
    path = path.slice(i2 + 1, path.length).trim();
    if (path.endsWith("]")) {
      i2 = path.length - 1;
      while (i2 >= 0 && path[i2] !== "[") {
        i2--;
      }
      path = path.slice(0, i2).trim();
      return this.getPropName(ctx2, path);
    }
    return path;
  }
  getValue(ctx2, path, rootStruct = void 0) {
    if (typeof ctx2 == "string") {
      throw new Error("You forgot to pass context to getValue");
    }
    let ret2 = this.resolvePath(ctx2, path, void 0, rootStruct);
    if (ret2 === void 0) {
      throw new DataPathError("invalid path " + path);
    }
    let exec = ret2.prop !== void 0 && ret2.prop.flag & PropFlags.USE_CUSTOM_GETSET;
    exec = exec && !(ret2.prop !== void 0 && ret2.prop.type & (PropTypes.VEC2 | PropTypes.VEC3 | PropTypes.VEC4 | PropTypes.QUAT));
    if (exec) {
      ret2.prop.dataref = ret2.obj;
      ret2.prop.datapath = path;
      ret2.prop.ctx = ctx2;
      let val2 = ret2.prop.getValue();
      if (typeof val2 === "string" && ret2.prop.type & (PropTypes.FLAG | PropTypes.ENUM)) {
        val2 = ret2.prop.values[val2];
      }
      if (ret2.subkey && ret2.prop.type === PropTypes.ENUM) {
        val2 = val2 === ret2.prop.values[ret2.subkey];
      } else if (ret2.subkey && ret2.prop.type === PropTypes.FLAG) {
        val2 = val2 & ret2.prop.values[ret2.subkey];
      }
      return val2;
    }
    return ret2.value;
  }
};

// scripts/path.ux/scripts/path-controller/controller/controller_ops.js
var DataPathSetOp = class _DataPathSetOp extends ToolOp {
  static {
    __name(this, "DataPathSetOp");
  }
  constructor() {
    super();
    this.propType = -1;
    this._undo = void 0;
  }
  setValue(ctx2, val2, object) {
    let prop = this.inputs.prop;
    let path = this.inputs.dataPath.getValue();
    if (prop.type & (PropTypes.ENUM | PropTypes.FLAG)) {
      let rdef2 = ctx2.api.resolvePath(ctx2, path);
      if (rdef2.subkey !== void 0) {
        let subkey = rdef2.subkey;
        if (typeof subkey === "string") {
          subkey = rdef2.prop.values[subkey];
        }
        this.inputs.flagBit.setValue(subkey);
        this.inputs.useFlagBit.setValue(true);
      }
    }
    prop.dataref = object;
    prop.ctx = ctx2;
    prop.datapath = path;
    try {
      prop.setValue(val2);
      this.hadError = false;
    } catch (error) {
      console.error("Error setting datapath", path);
      this.hadError = true;
    }
  }
  static create(ctx2, datapath, value2, id, massSetPath2) {
    let rdef2 = ctx2.api.resolvePath(ctx2, datapath);
    if (rdef2 === void 0 || rdef2.prop === void 0) {
      console.warn("DataPathSetOp failed", rdef2, rdef2.prop);
      return;
    }
    let prop = rdef2.prop;
    let tool = new _DataPathSetOp();
    tool.propType = prop.type;
    tool.inputs.destType.setValue(prop.type);
    if (prop && prop.flag & PropFlags.USE_BASE_UNDO) {
      tool.inputs.fullSaveUndo.setValue(true);
    }
    let mask = PropTypes.FLAG | PropTypes.ENUM;
    mask |= PropTypes.VEC2 | PropTypes.VEC3 | PropTypes.VEC4 | PropTypes.QUAT;
    if (rdef2.subkey !== void 0 && prop.type & mask) {
      if (prop.type & (PropTypes.ENUM | PropTypes.FLAG)) {
        let i2 = datapath.length - 1;
        while (i2 >= 0 && datapath[i2] !== "[" && datapath[i2] !== "=") {
          i2--;
        }
        if (i2 >= 0) {
          if (!value2 && prop.type === PropTypes.ENUM) {
            return void 0;
          }
          datapath = datapath.slice(0, i2).trim();
        }
        tool.inputs.prop = new IntProperty();
      } else {
        tool.inputs.prop = new FloatProperty();
      }
      let subkey = rdef2.subkey;
      if (typeof subkey !== "number") {
        subkey = rdef2.prop.values[subkey];
      }
      if (prop.type === PropTypes.FLAG) {
        tool.inputs.flagBit.setValue(subkey);
        tool.inputs.useFlagBit.setValue(true);
      }
      if (prop.type === PropTypes.ENUM) {
        value2 = subkey;
      } else if (prop.type === PropTypes.FLAG) {
        let value22 = ctx2.api.getValue(ctx2, datapath);
        if (typeof value22 !== "number") {
          value22 = typeof value22 === "boolean" ? value2 & 1 : 0;
        }
        if (value2) {
          value22 |= subkey;
        } else {
          value22 &= ~subkey;
        }
        value2 = value22;
      }
    } else {
      tool.inputs.prop = prop.copy();
    }
    tool.inputs.dataPath.setValue(datapath);
    if (massSetPath2) {
      tool.inputs.massSetPath.setValue(massSetPath2);
    } else {
      tool.inputs.massSetPath.setValue("");
    }
    tool.id = id;
    tool.setValue(ctx2, value2, rdef2.obj);
    return tool;
  }
  hash(massSetPath2, dataPath, prop, id) {
    massSetPath2 = massSetPath2 === void 0 ? "" : massSetPath2;
    massSetPath2 = massSetPath2 === null ? "" : massSetPath2;
    let ret2 = "" + massSetPath2 + ":" + dataPath + ":" + prop + ":" + id;
    return ret2;
  }
  hashThis() {
    return this.hash(
      this.inputs.massSetPath.getValue(),
      this.inputs.dataPath.getValue(),
      this.propType,
      this.id
    );
  }
  undoPre(ctx2) {
    if (this.inputs.fullSaveUndo.getValue()) {
      return super.undoPre(ctx2);
    }
    if (this.__ctx)
      ctx2 = this.__ctx;
    this._undo = {};
    let paths2 = /* @__PURE__ */ new Set();
    if (this.inputs.massSetPath.getValue().trim()) {
      let massSetPath2 = this.inputs.massSetPath.getValue().trim();
      paths2 = new Set(ctx2.api.resolveMassSetPaths(ctx2, massSetPath2));
    }
    paths2.add(this.inputs.dataPath.getValue());
    for (let path of paths2) {
      let val2 = ctx2.api.getValue(ctx2, path);
      if (typeof val2 === "object") {
        val2 = val2.copy();
      }
      this._undo[path] = val2;
    }
  }
  undo(ctx2) {
    if (this.__ctx)
      ctx2 = this.__ctx;
    if (this.inputs.fullSaveUndo.getValue()) {
      return super.undo(ctx2);
    }
    for (let path in this._undo) {
      let rdef2 = ctx2.api.resolvePath(ctx2, path);
      if (rdef2.prop !== void 0 && rdef2.prop.type & (PropTypes.ENUM | PropTypes.FLAG)) {
        let old = rdef2.obj[rdef2.key];
        if (rdef2.subkey) {
          let key2 = rdef2.subkey;
          if (typeof key2 !== "number") {
            key2 = rdef2.prop.values[key2];
          }
          if (rdef2.prop.type === PropTypes.FLAG) {
            if (this._undo[path]) {
              rdef2.obj[rdef2.key] |= key2;
            } else {
              rdef2.obj[rdef2.key] &= ~key2;
            }
          } else {
            rdef2.obj[rdef2.key] = key2;
          }
        } else {
          rdef2.obj[rdef2.key] = this._undo[path];
        }
        rdef2.prop.dataref = rdef2.obj;
        rdef2.prop.datapath = path;
        rdef2.prop.ctx = ctx2;
        rdef2.prop._fire("change", rdef2.obj[rdef2.key], old);
      } else {
        try {
          ctx2.api.setValue(ctx2, path, this._undo[path]);
        } catch (error) {
          print_stack(error);
          console.warn("Failed to set property in undo for DataPathSetOp");
        }
      }
    }
  }
  exec(ctx2) {
    if (this.__ctx) {
      ctx2 = this.__ctx;
    }
    let path = this.inputs.dataPath.getValue();
    let massSetPath2 = this.inputs.massSetPath.getValue().trim();
    try {
      ctx2.api.setValue(ctx2, path, this.inputs.prop.getValue());
      this.hadError = false;
    } catch (error) {
      console.log(error.stack);
      console.log(error.message);
      console.log("error setting " + path);
      this.hadError = true;
    }
    if (massSetPath2) {
      let value2 = this.inputs.prop.getValue();
      let useFlagBit = this.inputs.useFlagBit.getValue();
      if (useFlagBit && this.inputs.destType.getValue() === PropTypes.FLAG) {
        let bit = this.inputs.flagBit.getValue();
        value2 = !!(value2 & bit);
      }
      try {
        ctx2.api.massSetProp(ctx2, massSetPath2, value2);
      } catch (error) {
        console.log(error.stack);
        console.log(error.message);
        console.log("error setting " + path);
        this.hadError = true;
      }
    }
  }
  modalStart(ctx2) {
    this.__ctx = ctx2.toLocked();
    super.modalStart(this.__ctx);
    this.exec(this.__ctx);
    this.modalEnd(false);
  }
  static tooldef() {
    return {
      uiname: "Property Set",
      toolpath: "app.prop_set",
      icon: -1,
      flag: ToolFlags.PRIVATE,
      is_modal: true,
      inputs: {
        dataPath: new StringProperty(),
        massSetPath: new StringProperty(),
        fullSaveUndo: new BoolProperty(false),
        flagBit: new IntProperty(),
        useFlagBit: new BoolProperty(),
        destType: new EnumProperty(PropTypes.INT, PropTypes)
      }
    };
  }
};
ToolOp.register(DataPathSetOp);

// scripts/path.ux/scripts/path-controller/curve/curve1d_basic.js
var _udigest4 = new HashDigest();
function feq(a3, b) {
  return Math.abs(a3 - b) < 1e-5;
}
__name(feq, "feq");
var EquationCurve = class extends CurveTypeData {
  static {
    __name(this, "EquationCurve");
  }
  constructor(type) {
    super();
    this.equation = "x";
    this._last_equation = "";
    this._last_xrange = new Vector2();
    this._func = void 0;
  }
  get hasGUI() {
    return this.uidata !== void 0;
  }
  static define() {
    return {
      uiname: "Equation",
      name: "equation",
      typeName: "EquationCurve"
    };
  }
  calcHashKey(digest = _udigest4.reset()) {
    let d = digest;
    super.calcHashKey(d);
    d.add(this.equation);
    d.add(this.parent.xRange[0]);
    d.add(this.parent.xRange[1]);
    return d.get();
  }
  equals(b) {
    return super.equals(b) && this.equation === b.equation;
  }
  toJSON() {
    let ret2 = super.toJSON();
    return Object.assign(ret2, {
      equation: this.equation
    });
  }
  loadJSON(obj2) {
    super.loadJSON(obj2);
    if (obj2.equation !== void 0) {
      this.equation = obj2.equation;
    }
    return this;
  }
  makeGUI(container, canvas, drawTransform) {
    this.uidata = {
      canvas,
      g: canvas.g,
      draw_trans: drawTransform
    };
    let row = container.row();
    let text = this.uidata.textbox = row.textbox(void 0, "" + this.equation);
    text.onchange = (val2) => {
      console.log(val2);
      this.equation = val2;
      this.update();
      this.redraw();
    };
    container.label("Equation");
  }
  killGUI(dom, gui, canvas, g, draw_transform) {
    if (this.uidata !== void 0) {
      this.uidata.textbox.remove();
    }
    this.uidata = void 0;
  }
  updateTextBox() {
    if (this.uidata && this.uidata.textbox) {
      this.uidata.textbox.text = this.equation;
    }
  }
  evaluate(s) {
    let update = this.hermite || this._last_equation !== this.equation;
    update = update || this._last_xrange.vectorDistance(this.parent.xRange) > 0;
    update = update || !this._func;
    if (update) {
      this._last_xrange.load(this.parent.xRange);
      this._last_equation = this.equation;
      this.updateTextBox();
      this.#makeFunc();
      this._evaluate(0);
      if (this._haserror) {
        console.warn("ERROR!");
        return 0;
      }
    }
    return this._func(s);
  }
  #makeFunc() {
    this._func = void 0;
    var sin = Math.sin, cos = Math.cos, pi = Math.PI, PI = Math.PI, e = Math.E, E = Math.E, tan = Math.tan, abs = Math.abs, floor = Math.floor, ceil = Math.ceil, acos = Math.acos, asin = Math.asin, atan = Math.atan, cosh = Math.cos, sinh = Math.sinh, log = Math.log, pow = Math.pow, exp = Math.exp, sqrt = Math.sqrt, cbrt = Math.cbrt, min = Math.min, max = Math.max;
    var func;
    let code = `
    func = function(x) {
      return ${this.equation};
    }
    `;
    try {
      eval(code);
      this._haserror = false;
    } catch (error) {
      this._haserror = true;
      console.warn("Compile error!", error.message);
    }
    this._func = func;
  }
  _evaluate(s) {
    try {
      let f3 = this._func(s);
      this._haserror = false;
      if (isNaN(f3)) {
        return 0;
      }
    } catch (error) {
      this._haserror = true;
      console.warn("ERROR!");
      return 0;
    }
  }
  derivative(s) {
    let df = 1e-4;
    if (s > 1 - df * 3) {
      return (this.evaluate(s) - this.evaluate(s - df)) / df;
    } else if (s < df * 3) {
      return (this.evaluate(s + df) - this.evaluate(s)) / df;
    } else {
      return (this.evaluate(s + df) - this.evaluate(s - df)) / (2 * df);
    }
  }
  derivative2(s) {
    let df = 1e-4;
    if (s > 1 - df * 3) {
      return (this.derivative(s) - this.derivative(s - df)) / df;
    } else if (s < df * 3) {
      return (this.derivative(s + df) - this.derivative(s)) / df;
    } else {
      return (this.derivative(s + df) - this.derivative(s - df)) / (2 * df);
    }
  }
  inverse(y) {
    let steps = 9;
    let ds = 1 / steps, s = 0;
    let best = void 0;
    let ret2 = void 0;
    for (let i2 = 0; i2 < steps; i2++, s += ds) {
      let s1 = s, s2 = s + ds;
      let mid;
      for (let j2 = 0; j2 < 11; j2++) {
        let y1 = this.evaluate(s1);
        let y2 = this.evaluate(s2);
        mid = (s1 + s2) * 0.5;
        if (Math.abs(y1 - y) < Math.abs(y2 - y)) {
          s2 = mid;
        } else {
          s1 = mid;
        }
      }
      let ymid = this.evaluate(mid);
      if (best === void 0 || Math.abs(y - ymid) < best) {
        best = Math.abs(y - ymid);
        ret2 = mid;
      }
    }
    return ret2 === void 0 ? 0 : ret2;
  }
  onActive(parent2, draw_transform) {
  }
  onInactive(parent2, draw_transform) {
  }
  reset() {
    this.equation = "x";
  }
  destroy() {
  }
  draw(canvas, g, draw_transform) {
    g.save();
    if (this._haserror) {
      g.fillStyle = g.strokeStyle = "rgba(255, 50, 0, 0.25)";
      g.beginPath();
      g.rect(0, 0, 1, 1);
      g.fill();
      g.beginPath();
      g.moveTo(0, 0);
      g.lineTo(1, 1);
      g.moveTo(0, 1);
      g.lineTo(1, 0);
      g.lineWidth *= 3;
      g.stroke();
      g.restore();
      return;
    }
    g.restore();
  }
};
EquationCurve.STRUCT = struct_default.inherit(EquationCurve, CurveTypeData) + `
  equation : string;
}
`;
struct_default.register(EquationCurve);
CurveTypeData.register(EquationCurve);
var GuassianCurve = class extends CurveTypeData {
  static {
    __name(this, "GuassianCurve");
  }
  constructor(type) {
    super();
    this.height = 1;
    this.offset = 1;
    this.deviation = 0.3;
  }
  get hasGUI() {
    return this.uidata !== void 0;
  }
  static define() {
    return {
      uiname: "Guassian",
      name: "guassian",
      typeName: "GuassianCurve"
    };
  }
  calcHashKey(digest = _udigest4.reset()) {
    super.calcHashKey(digest);
    let d = digest;
    d.add(this.height);
    d.add(this.offset);
    d.add(this.deviation);
    return d.get();
  }
  equals(b) {
    let r = super.equals(b);
    r = r && feq(this.height, b.height);
    r = r && feq(this.offset, b.offset);
    r = r && feq(this.deviation, b.deviation);
    return r;
  }
  toJSON() {
    let ret2 = super.toJSON();
    return Object.assign(ret2, {
      height: this.height,
      offset: this.offset,
      deviation: this.deviation
    });
  }
  loadJSON(obj2) {
    super.loadJSON(obj2);
    this.height = obj2.height !== void 0 ? obj2.height : 1;
    this.offset = obj2.offset;
    this.deviation = obj2.deviation;
    return this;
  }
  makeGUI(container, canvas, drawTransform) {
    this.uidata = {
      canvas,
      g: canvas.g,
      draw_trans: drawTransform
    };
    this.uidata.hslider = container.slider(void 0, "Height", this.height, -10, 10, 1e-4);
    this.uidata.hslider.onchange = () => {
      this.height = this.uidata.hslider.value;
      this.redraw();
      this.update();
    };
    this.uidata.oslider = container.slider(void 0, "Offset", this.offset, -10, 10, 1e-4);
    this.uidata.oslider.onchange = () => {
      this.offset = this.uidata.oslider.value;
      this.redraw();
      this.update();
    };
    this.uidata.dslider = container.slider(void 0, "STD Deviation", this.deviation, -10, 10, 1e-4);
    this.uidata.dslider.onchange = () => {
      this.deviation = this.uidata.dslider.value;
      this.redraw();
      this.update();
    };
  }
  killGUI(dom, gui, canvas, g, draw_transform) {
    if (this.uidata !== void 0) {
      this.uidata.hslider.remove();
      this.uidata.oslider.remove();
      this.uidata.dslider.remove();
    }
    this.uidata = void 0;
  }
  evaluate(s) {
    let r = this.height * Math.exp(-((s - this.offset) * (s - this.offset)) / (2 * this.deviation * this.deviation));
    return r;
  }
  derivative(s) {
    let df = 1e-4;
    if (s > 1 - df * 3) {
      return (this.evaluate(s) - this.evaluate(s - df)) / df;
    } else if (s < df * 3) {
      return (this.evaluate(s + df) - this.evaluate(s)) / df;
    } else {
      return (this.evaluate(s + df) - this.evaluate(s - df)) / (2 * df);
    }
  }
  derivative2(s) {
    let df = 1e-4;
    if (s > 1 - df * 3) {
      return (this.derivative(s) - this.derivative(s - df)) / df;
    } else if (s < df * 3) {
      return (this.derivative(s + df) - this.derivative(s)) / df;
    } else {
      return (this.derivative(s + df) - this.derivative(s - df)) / (2 * df);
    }
  }
  inverse(y) {
    let steps = 9;
    let ds = 1 / steps, s = 0;
    let best = void 0;
    let ret2 = void 0;
    for (let i2 = 0; i2 < steps; i2++, s += ds) {
      let s1 = s, s2 = s + ds;
      let mid;
      for (let j2 = 0; j2 < 11; j2++) {
        let y1 = this.evaluate(s1);
        let y2 = this.evaluate(s2);
        mid = (s1 + s2) * 0.5;
        if (Math.abs(y1 - y) < Math.abs(y2 - y)) {
          s2 = mid;
        } else {
          s1 = mid;
        }
      }
      let ymid = this.evaluate(mid);
      if (best === void 0 || Math.abs(y - ymid) < best) {
        best = Math.abs(y - ymid);
        ret2 = mid;
      }
    }
    return ret2 === void 0 ? 0 : ret2;
  }
};
GuassianCurve.STRUCT = struct_default.inherit(GuassianCurve, CurveTypeData) + `
  height    : float;
  offset    : float;
  deviation : float;
}
`;
struct_default.register(GuassianCurve);
CurveTypeData.register(GuassianCurve);

// scripts/path.ux/scripts/path-controller/curve/ease.js
function Ease() {
  throw "Ease cannot be instantiated.";
}
__name(Ease, "Ease");
var ease_default = Ease;
Ease.linear = function(t) {
  return t;
};
Ease.none = Ease.linear;
Ease.get = function(amount) {
  if (amount < -1) {
    amount = -1;
  } else if (amount > 1) {
    amount = 1;
  }
  return function(t) {
    if (amount == 0) {
      return t;
    }
    if (amount < 0) {
      return t * (t * -amount + 1 + amount);
    }
    return t * ((2 - t) * amount + (1 - amount));
  };
};
Ease.getPowIn = function(pow3) {
  return function(t) {
    return Math.pow(t, pow3);
  };
};
Ease.getPowOut = function(pow3) {
  return function(t) {
    return 1 - Math.pow(1 - t, pow3);
  };
};
Ease.getPowInOut = function(pow3) {
  return function(t) {
    if ((t *= 2) < 1) return 0.5 * Math.pow(t, pow3);
    return 1 - 0.5 * Math.abs(Math.pow(2 - t, pow3));
  };
};
Ease.quadIn = Ease.getPowIn(2);
Ease.quadOut = Ease.getPowOut(2);
Ease.quadInOut = Ease.getPowInOut(2);
Ease.cubicIn = Ease.getPowIn(3);
Ease.cubicOut = Ease.getPowOut(3);
Ease.cubicInOut = Ease.getPowInOut(3);
Ease.quartIn = Ease.getPowIn(4);
Ease.quartOut = Ease.getPowOut(4);
Ease.quartInOut = Ease.getPowInOut(4);
Ease.quintIn = Ease.getPowIn(5);
Ease.quintOut = Ease.getPowOut(5);
Ease.quintInOut = Ease.getPowInOut(5);
Ease.sineIn = function(t) {
  return 1 - Math.cos(t * Math.PI / 2);
};
Ease.sineOut = function(t) {
  return Math.sin(t * Math.PI / 2);
};
Ease.sineInOut = function(t) {
  return -0.5 * (Math.cos(Math.PI * t) - 1);
};
Ease.getBackIn = function(amount) {
  return function(t) {
    return t * t * ((amount + 1) * t - amount);
  };
};
Ease.backIn = Ease.getBackIn(1.7);
Ease.getBackOut = function(amount) {
  return function(t) {
    return --t * t * ((amount + 1) * t + amount) + 1;
  };
};
Ease.backOut = Ease.getBackOut(1.7);
Ease.getBackInOut = function(amount) {
  amount *= 1.525;
  return function(t) {
    if ((t *= 2) < 1) return 0.5 * (t * t * ((amount + 1) * t - amount));
    return 0.5 * ((t -= 2) * t * ((amount + 1) * t + amount) + 2);
  };
};
Ease.backInOut = Ease.getBackInOut(1.7);
Ease.circIn = function(t) {
  return -(Math.sqrt(1 - t * t) - 1);
};
Ease.circOut = function(t) {
  return Math.sqrt(1 - --t * t);
};
Ease.circInOut = function(t) {
  if ((t *= 2) < 1) return -0.5 * (Math.sqrt(1 - t * t) - 1);
  return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
};
Ease.bounceIn = function(t) {
  return 1 - Ease.bounceOut(1 - t);
};
Ease.bounceOut = function(t) {
  if (t < 1 / 2.75) {
    return 7.5625 * t * t;
  } else if (t < 2 / 2.75) {
    return 7.5625 * (t -= 1.5 / 2.75) * t + 0.75;
  } else if (t < 2.5 / 2.75) {
    return 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375;
  } else {
    return 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
  }
};
Ease.bounceInOut = function(t) {
  if (t < 0.5) return Ease.bounceIn(t * 2) * 0.5;
  return Ease.bounceOut(t * 2 - 1) * 0.5 + 0.5;
};
Ease.getElasticIn = function(amplitude, period) {
  var pi2 = Math.PI * 2;
  return function(t) {
    if (t == 0 || t == 1) return t;
    var s = period / pi2 * Math.asin(1 / amplitude);
    return -(amplitude * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * pi2 / period));
  };
};
Ease.elasticIn = Ease.getElasticIn(1, 0.3);
Ease.getElasticOut = function(amplitude, period) {
  var pi2 = Math.PI * 2;
  return function(t) {
    if (t == 0 || t == 1) return t;
    var s = period / pi2 * Math.asin(1 / amplitude);
    return amplitude * Math.pow(2, -10 * t) * Math.sin((t - s) * pi2 / period) + 1;
  };
};
Ease.elasticOut = Ease.getElasticOut(1, 0.3);
Ease.getElasticInOut = function(amplitude, period) {
  var pi2 = Math.PI * 2;
  return function(t) {
    var s = period / pi2 * Math.asin(1 / amplitude);
    if ((t *= 2) < 1) return -0.5 * (amplitude * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * pi2 / period));
    return amplitude * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - s) * pi2 / period) * 0.5 + 1;
  };
};
Ease.elasticInOut = Ease.getElasticInOut(1, 0.3 * 1.5);

// scripts/path.ux/scripts/path-controller/curve/curve1d_anim.js
function bez32(a3, b, c, t) {
  var r1 = a3 + (b - a3) * t;
  var r2 = b + (c - b) * t;
  return r1 + (r2 - r1) * t;
}
__name(bez32, "bez3");
function bez42(a3, b, c, d, t) {
  var r1 = bez32(a3, b, c, t);
  var r2 = bez32(b, c, d, t);
  return r1 + (r2 - r1) * t;
}
__name(bez42, "bez4");
var ParamKey = class {
  static {
    __name(this, "ParamKey");
  }
  constructor(key2, val2) {
    this.key = key2;
    this.val = val2;
  }
};
ParamKey.STRUCT = `
ParamKey {
  key : string;
  val : float;
}
`;
struct_default.register(ParamKey);
var BOOL_FLAG = 1e17;
var _udigest5 = new HashDigest();
var SimpleCurveBase = class extends CurveTypeData {
  static {
    __name(this, "SimpleCurveBase");
  }
  constructor() {
    super();
    this.type = this.constructor.name;
    let def = this.constructor.define();
    let params = def.params;
    this.params = {};
    for (let k2 in params) {
      this.params[k2] = params[k2][1];
    }
  }
  get hasGUI() {
    return true;
  }
  calcHashKey(digest = _udigest5.reset()) {
    let d = digest;
    super.calcHashKey(d);
    for (let k2 in this.params) {
      digest.add(k2);
      digest.add(this.params[k2]);
    }
    return d.get();
  }
  equals(b) {
    if (this.type !== b.type) {
      return false;
    }
    for (let k2 in this.params) {
      if (Math.abs(this.params[k2] - b.params[k2]) > 1e-6) {
        return false;
      }
    }
    return true;
  }
  redraw() {
    if (this.parent)
      this.parent.redraw();
  }
  makeGUI(container) {
    let def = this.constructor.define();
    let params = def.params;
    for (let k2 in params) {
      let p = params[k2];
      if (p[2] === BOOL_FLAG) {
        let check = container.check(void 0, p[0]);
        check.checked = !!this.params[k2];
        check.key = k2;
        let this2 = this;
        check.onchange = function() {
          this2.params[this.key] = this.checked ? 1 : 0;
          this2.update();
          this2.redraw();
        };
      } else {
        let slider = container.slider(void 0, {
          name: p[0],
          defaultval: this.params[k2],
          min: p[2],
          max: p[3]
        });
        slider.baseUnit = slider.displayUnit = "none";
        slider.key = k2;
        let this2 = this;
        slider.onchange = function() {
          this2.params[this.key] = this.value;
          this2.update();
          this2.redraw();
        };
      }
    }
  }
  killGUI(container) {
    container.clear();
  }
  evaluate(s) {
    throw new Error("implement me!");
  }
  reset() {
  }
  update() {
    super.update();
  }
  draw(canvas, g, draw_transform) {
    let steps = 128;
    let s = 0, ds = 1 / (steps - 1);
    g.beginPath();
    for (let i2 = 0; i2 < steps; i2++, s += ds) {
      let co = this.evaluate(s);
      if (i2) {
        g.lineTo(co[0], co[1]);
      } else {
        g.moveTo(co[0], co[1]);
      }
    }
    g.stroke();
  }
  _saveParams() {
    let ret2 = [];
    for (let k2 in this.params) {
      ret2.push(new ParamKey(k2, this.params[k2]));
    }
    return ret2;
  }
  toJSON() {
    return Object.assign(super.toJSON(), {
      params: this.params
    });
  }
  loadJSON(obj2) {
    for (let k2 in obj2.params) {
      this.params[k2] = obj2.params[k2];
    }
    return this;
  }
  loadSTRUCT(reader) {
    reader(this);
    super.loadSTRUCT(reader);
    let ps = this.params;
    this.params = {};
    let pdef = this.constructor.define().params;
    if (!pdef) {
      console.warn("Missing define function for curve", this.constructor.name);
      return;
    }
    for (let pair of ps) {
      if (pair.key in pdef) {
        this.params[pair.key] = pair.val;
      }
    }
    for (let k2 in pdef) {
      if (!(k2 in this.params)) {
        this.params[k2] = pdef[k2][1];
      }
    }
  }
};
SimpleCurveBase.STRUCT = struct_default.inherit(SimpleCurveBase, CurveTypeData) + `
  params : array(ParamKey) | obj._saveParams();
}
`;
struct_default.register(SimpleCurveBase);
var BounceCurve = class extends SimpleCurveBase {
  static {
    __name(this, "BounceCurve");
  }
  static define() {
    return {
      params: {
        decay: ["Decay", 1, 0.1, 5],
        scale: ["Scale", 1, 0.01, 10],
        freq: ["Freq", 1, 0.01, 50],
        phase: ["Phase", 0, -Math.PI * 2, Math.PI * 2],
        offset: ["Offset", 0, -2, 2]
      },
      name: "bounce",
      uiname: "Bounce",
      typeName: "BounceCurve"
    };
  }
  _evaluate(t) {
    let params = this.params;
    let decay = params.decay + 1;
    let scale = params.scale;
    let freq = params.freq;
    let phase = params.phase;
    let offset = params.offset;
    t *= freq;
    let t2 = Math.abs(Math.cos(phase + t * Math.PI * 2)) * scale;
    ;
    t2 *= Math.exp(decay * t) / Math.exp(decay);
    return t2;
  }
  evaluate(t) {
    let s = this._evaluate(0);
    let e2 = this._evaluate(1);
    return (this._evaluate(t) - s) / (e2 - s) + this.params.offset;
  }
};
CurveTypeData.register(BounceCurve);
BounceCurve.STRUCT = struct_default.inherit(BounceCurve, SimpleCurveBase) + `
}`;
struct_default.register(BounceCurve);
var ElasticCurve = class extends SimpleCurveBase {
  static {
    __name(this, "ElasticCurve");
  }
  constructor() {
    super();
    this._func = void 0;
    this._last_hash = void 0;
  }
  static define() {
    return {
      params: {
        mode: ["Out Mode", false, BOOL_FLAG, BOOL_FLAG],
        amplitude: ["Amplitude", 1, 0.01, 10],
        period: ["Period", 1, 0.01, 5]
      },
      name: "elastic",
      uiname: "Elastic",
      typeName: "ElasticCurve"
    };
  }
  evaluate(t) {
    let hash = ~~(this.params.mode * 127 + this.params.amplitude * 256 + this.params.period * 512);
    if (hash !== this._last_hash || !this._func) {
      this._last_hash = hash;
      if (this.params.mode) {
        this._func = ease_default.getElasticOut(this.params.amplitude, this.params.period);
      } else {
        this._func = ease_default.getElasticIn(this.params.amplitude, this.params.period);
      }
    }
    return this._func(t);
  }
};
CurveTypeData.register(ElasticCurve);
ElasticCurve.STRUCT = struct_default.inherit(ElasticCurve, SimpleCurveBase) + `
}`;
struct_default.register(ElasticCurve);
var EaseCurve = class extends SimpleCurveBase {
  static {
    __name(this, "EaseCurve");
  }
  constructor() {
    super();
  }
  static define() {
    return {
      params: {
        mode_in: ["in", true, BOOL_FLAG, BOOL_FLAG],
        mode_out: ["out", true, BOOL_FLAG, BOOL_FLAG],
        amplitude: ["Amplitude", 1, 0.01, 4]
      },
      name: "ease",
      uiname: "Ease",
      typeName: "EaseCurve"
    };
  }
  evaluate(t) {
    let amp = this.params.amplitude;
    let a1 = this.params.mode_in ? 1 - amp : 1 / 3;
    let a22 = this.params.mode_out ? amp : 2 / 3;
    return bez42(0, a1, a22, 1, t);
  }
};
CurveTypeData.register(EaseCurve);
EaseCurve.STRUCT = struct_default.inherit(EaseCurve, SimpleCurveBase) + `
}`;
struct_default.register(EaseCurve);
var RandCurve = class extends SimpleCurveBase {
  static {
    __name(this, "RandCurve");
  }
  constructor() {
    super();
    this.random = new MersenneRandom();
    this.seed = 0;
  }
  get seed() {
    return this._seed;
  }
  set seed(v) {
    this.random.seed(v);
    this._seed = v;
  }
  static define() {
    return {
      params: {
        amplitude: ["Amplitude", 1, 0.01, 4],
        decay: ["Decay", 1, 0, 5],
        in_mode: ["In", true, BOOL_FLAG, BOOL_FLAG]
      },
      name: "random",
      uiname: "Random",
      typeName: "RandCurve"
    };
  }
  evaluate(t) {
    let r = this.random.random();
    let decay = this.params.decay + 1;
    let amp = this.params.amplitude;
    let in_mode = this.params.in_mode;
    if (in_mode) {
      t = 1 - t;
    }
    let d;
    if (in_mode) {
      d = Math.exp(t * decay) / Math.exp(decay);
    } else {
      d = Math.exp(t * decay) / Math.exp(decay);
    }
    t = t + (r - t) * d;
    if (in_mode) {
      t = 1 - t;
    }
    return t;
  }
};
CurveTypeData.register(RandCurve);
RandCurve.STRUCT = struct_default.inherit(RandCurve, SimpleCurveBase) + `
}`;
struct_default.register(RandCurve);

// scripts/path.ux/scripts/path-controller/curve/curve1d_toolprop.js
var Curve1DProperty = class extends ToolProperty2 {
  static {
    __name(this, "Curve1DProperty");
  }
  constructor(curve, apiname, uiname, description, flag, icon) {
    super(PropTypes.CURVE, void 0, apiname, uiname, description, flag, icon);
    this.data = new Curve1D();
    if (curve !== void 0) {
      this.setValue(curve);
    }
    this.wasSet = false;
  }
  calcMemSize() {
    return 1024;
  }
  equals(b) {
  }
  getValue() {
    return this.data;
  }
  evaluate(t) {
    return this.data.evaluate(t);
  }
  setValue(curve) {
    if (curve === void 0) {
      return;
    }
    this.data.load(curve);
    super.setValue(curve);
  }
  copyTo(b) {
    super.copyTo(b);
    b.setValue(this.data);
  }
};
Curve1DProperty.STRUCT = inherit(Curve1DProperty, ToolProperty2) + `
  data : Curve1D;
}
`;
register(Curve1DProperty);
ToolProperty2.internalRegister(Curve1DProperty);

// scripts/path.ux/scripts/path-controller/controller/controller.js
var PUTLParseError2 = PUTLParseError;
var tk = /* @__PURE__ */ __name((name, re, func2) => new tokdef2(name, re, func2), "tk");
var tokens = [
  tk("ID", /[a-zA-Z_$]+[a-zA-Z_$0-9]*/),
  tk("NUM", /-?[0-9]+/, (t) => {
    t.value = parseInt(t.value);
    return t;
  }),
  tk("NUMBER", /-?[0-9]+\.[0-9]*/, (t) => {
    t.value = parseFloat(t.value);
    return t;
  }),
  tk("STRLIT", /'.*?'/, (t) => {
    t.value = t.value.slice(1, t.value.length - 1);
    return t;
  }),
  tk("STRLIT", /".*?"/, (t) => {
    t.value = t.value.slice(1, t.value.length - 1);
    return t;
  }),
  tk("DOT", /\./),
  tk("EQUALS", /(\=)|(\=\=)/),
  tk("LSBRACKET", /\[/),
  tk("RSBRACKET", /\]/),
  tk("AND", /\&/),
  tk("WS", /[ \t\n\r]+/, (t) => void 0)
  //drop token
];
var lexer3 = new lexer2(tokens, (t) => {
  console.warn("Parse error", t);
  throw new DataPathError();
});
var pathParser = new parser2(lexer3);
var parserStack = new Array(32);
for (let i2 = 0; i2 < parserStack.length; i2++) {
  parserStack[i2] = pathParser.copy();
}
parserStack.cur = 0;
var tool_classes = ToolClasses;
var tool_idgen = 1;
Symbol.ToolID = Symbol("toolid");
function toolkey(cls2) {
  if (!(Symbol.ToolID in cls2)) {
    cls2[Symbol.ToolID] = tool_idgen++;
  }
  return cls2[Symbol.ToolID];
}
__name(toolkey, "toolkey");
var lt = time_ms();
var lastmsg = void 0;
var lcount = 0;
var reportstack = ["api"];
function pushReportName(name) {
  if (reportstack.length > 1024) {
    console.trace("eerk, reportstack overflowed");
    reportstack.length = 0;
    reportstack.push("api");
  }
  reportstack.push(name);
}
__name(pushReportName, "pushReportName");
function report(msg) {
  let name = reportstack.length === 0 ? "api" : reportstack[reportstack.length - 1];
  console2.context(name).warn(msg);
}
__name(report, "report");
function popReportName() {
  reportstack.pop();
}
__name(popReportName, "popReportName");
var DataList = class _DataList extends ListIface {
  static {
    __name(this, "DataList");
  }
  constructor(callbacks2) {
    super();
    if (callbacks2 === void 0) {
      throw new DataPathError("missing callbacks argument to DataList");
    }
    this.cb = {};
    if (typeof callbacks2 === "object" && !Array.isArray(callbacks2)) {
      for (let k2 in callbacks2) {
        this.cb[k2] = callbacks2[k2];
      }
    } else {
      for (let cb of callbacks2) {
        this.cb[cb.name] = cb;
      }
    }
    let check = /* @__PURE__ */ __name((key2) => {
      if (!(key2 in this.cbs)) {
        throw new DataPathError(`Missing ${key2} callback in DataList`);
      }
    }, "check");
  }
  /**
     Generic list API.
  
     * Callbacks is an array of name functions, like so:
     - function getStruct(api, list, key) //return DataStruct type of object in key, key is optional if omitted return base type of all objects?
     - function get(api, list, key)
     - function set(api, list, key, val) //this one has default behavior: list[key] = val
     - function getLength(api, list)
     - function getActive(api, list)
     - function setActive(api, list, key)
     - function getIter(api, list)
     - function getKey(api, list, object) returns object's key in this list, either a string or a number
     * */
  copy() {
    let ret2 = new _DataList([this.cb.get]);
    for (let k2 in this.cb) {
      ret2.cb[k2] = this.cb[k2];
    }
    return ret2;
  }
  get(api2, list4, key2) {
    return this.cb.get(api2, list4, key2);
  }
  getLength(api2, list4) {
    this._check("getLength");
    return this.cb.getLength(api2, list4);
  }
  _check(cb) {
    if (!(cb in this.cb)) {
      throw new DataPathError(cb + " not supported by this list");
    }
  }
  set(api2, list4, key2, val2) {
    if (this.cb.set === void 0) {
      list4[key2] = val2;
    } else {
      this.cb.set(api2, list4, key2, val2);
    }
  }
  getIter(api2, list4) {
    this._check("getIter");
    return this.cb.getIter(api2, list4);
  }
  filter(api2, list4, bitmask) {
    this._check("filter");
    return this.cb.filter(api2, list4, bitmask);
  }
  getActive(api2, list4) {
    this._check("getActive");
    return this.cb.getActive(api2, list4);
  }
  setActive(api2, list4, key2) {
    this._check("setActive");
    this.cb.setActive(api2, list4, key2);
  }
  getKey(api2, list4, obj2) {
    this._check("getKey");
    return this.cb.getKey(api2, list4, obj2);
  }
  getStruct(api2, list4, key2) {
    if (this.cb.getStruct !== void 0) {
      return this.cb.getStruct(api2, list4, key2);
    }
    let obj2 = this.get(api2, list4, key2);
    if (obj2 === void 0)
      return void 0;
    return api2.getStruct(obj2.constructor);
  }
};
var DataStruct = class _DataStruct {
  static {
    __name(this, "DataStruct");
  }
  constructor(members = [], name = "unnamed") {
    this.members = [];
    this.name = name;
    this.pathmap = {};
    this.flag = 0;
    this.dpath = void 0;
    this.inheritFlag = 0;
    for (let m of members) {
      this.add(m);
    }
  }
  clear() {
    this.pathmap = {};
    this.members = [];
    return this;
  }
  copy() {
    let ret2 = new _DataStruct();
    ret2.name = this.name;
    ret2.flag = this.flag;
    ret2.inheritFlag = this.inheritFlag;
    for (let m of this.members) {
      let m2 = m.copy();
      if (m2.type === DataTypes.PROP) {
        m2.data = m2.data.copy();
      }
      ret2.add(m2);
    }
    return ret2;
  }
  /**
   * Like .struct, but the type of struct is looked up
   * for objects at runtime.  Note that to work correctly each object
   * must create its own struct definition via api.mapStruct
   *
   * @param path
   * @param apiname
   * @param uiname
   * @param default_struct : default struct if one can't be looked up
   * @returns {*}
   */
  dynamicStruct(path, apiname, uiname, default_struct = void 0) {
    let ret2 = default_struct ? default_struct : new _DataStruct();
    let dpath = new DataPath(path, apiname, ret2, DataTypes.DYNAMIC_STRUCT);
    ret2.inheritFlag |= this.inheritFlag;
    ret2.dpath = dpath;
    this.add(dpath);
    return ret2;
  }
  struct(path, apiname, uiname, existing_struct = void 0) {
    let ret2 = existing_struct ? existing_struct : new _DataStruct();
    let dpath = new DataPath(path, apiname, ret2, DataTypes.STRUCT);
    ret2.inheritFlag |= this.inheritFlag;
    ret2.dpath = dpath;
    this.add(dpath);
    return ret2;
  }
  customGet(getter) {
    this.dpath.customGet(getter);
    return this;
  }
  customGetSet(getter, setter) {
    this.dpath.customGetSet(getter, setter);
    return this;
  }
  color3(path, apiname, uiname, description) {
    let ret2 = this.vec3(path, apiname, uiname, description);
    ret2.data.subtype = PropSubTypes2.COLOR;
    ret2.range(0, 1);
    ret2.simpleSlider();
    ret2.noUnits();
    return ret2;
  }
  color4(path, apiname, uiname, description = uiname) {
    let ret2 = this.vec4(path, apiname, uiname, description);
    ret2.data.subtype = PropSubTypes2.COLOR;
    ret2.range(0, 1);
    ret2.simpleSlider();
    ret2.noUnits();
    return ret2;
  }
  arrayList(path, apiname, structdef, uiname, description) {
    let ret2 = this.list(path, apiname, [
      /* @__PURE__ */ __name(function getIter(api2, list4) {
        return list4[Symbol.iterator]();
      }, "getIter"),
      /* @__PURE__ */ __name(function getLength(api2, list4) {
        return list4.length;
      }, "getLength"),
      /* @__PURE__ */ __name(function get(api2, list4, key2) {
        return list4[key2];
      }, "get"),
      /* @__PURE__ */ __name(function set4(api2, list4, key2, val2) {
        if (typeof key2 === "string") {
          key2 = parseInt(key2);
        }
        if (key2 < 0 || key2 >= list4.length) {
          throw new DataPathError("Invalid index " + key2);
        }
        list4[key2] = val2;
      }, "set"),
      /* @__PURE__ */ __name(function getKey(api2, list4, obj2) {
        return list4.indexOf(obj2);
      }, "getKey"),
      /* @__PURE__ */ __name(function getStruct(api2, list4, key2) {
        return structdef;
      }, "getStruct")
    ]);
    return ret2;
  }
  color3List(path, apiname, uiname, description) {
    return this.vectorList(3, path, apiname, uiname, description, PropSubTypes2.COLOR);
  }
  color4List(path, apiname, uiname, description) {
    return this.vectorList(4, path, apiname, uiname, description, PropSubTypes2.COLOR);
  }
  vectorList(size, path, apiname, uiname, description, subtype) {
    let type;
    switch (size) {
      case 2:
        type = Vec2Property;
        break;
      case 3:
        type = Vec3Property;
      case 4:
        type = Vec4Property;
    }
    if (type === void 0) {
      throw new DataPathError("Invalid size for vectorList; expected 2 3 or 4");
    }
    let prop = new type(void 0, apiname, uiname, description);
    let pstruct = new _DataStruct(void 0, "Vector");
    pstruct.vec3("", "co", "Coords", "Coordinates");
    let ret2 = this.list(path, apiname, [
      /* @__PURE__ */ __name(function getIter(api2, list4) {
        return list4[Symbol.iterator]();
      }, "getIter"),
      /* @__PURE__ */ __name(function getLength(api2, list4) {
        return list4.length;
      }, "getLength"),
      /* @__PURE__ */ __name(function get(api2, list4, key2) {
        return list4[key2];
      }, "get"),
      /* @__PURE__ */ __name(function set4(api2, list4, key2, val2) {
        if (typeof key2 == "string") {
          key2 = parseInt(key2);
        }
        if (key2 < 0 || key2 >= list4.length) {
          throw new DataPathError("Invalid index " + key2);
        }
        list4[key2] = val2;
      }, "set"),
      /* @__PURE__ */ __name(function getKey(api2, list4, obj2) {
        return list4.indexOf(obj2);
      }, "getKey"),
      /* @__PURE__ */ __name(function getStruct(api2, list4, key2) {
        return pstruct;
      }, "getStruct")
    ]);
    return ret2;
  }
  bool(path, apiname, uiname, description) {
    let prop = new BoolProperty(void 0, apiname, uiname, description);
    let dpath = new DataPath(path, apiname, prop);
    this.add(dpath);
    return dpath;
  }
  vec2(path, apiname, uiname, description) {
    let prop = new Vec2Property(void 0, apiname, uiname, description);
    let dpath = new DataPath(path, apiname, prop);
    this.add(dpath);
    return dpath;
  }
  vec3(path, apiname, uiname, description) {
    let prop = new Vec3Property(void 0, apiname, uiname, description);
    let dpath = new DataPath(path, apiname, prop);
    this.add(dpath);
    return dpath;
  }
  vec4(path, apiname, uiname, description) {
    let prop = new Vec4Property(void 0, apiname, uiname, description);
    let dpath = new DataPath(path, apiname, prop);
    this.add(dpath);
    return dpath;
  }
  float(path, apiname, uiname, description) {
    let prop = new FloatProperty(0, apiname, uiname, description);
    let dpath = new DataPath(path, apiname, prop);
    this.add(dpath);
    return dpath;
  }
  textblock(path, apiname, uiname, description) {
    let prop = new StringProperty(void 0, apiname, uiname, description);
    prop.multiLine = true;
    let dpath = new DataPath(path, apiname, prop);
    this.add(dpath);
    return dpath;
  }
  report(path, apiname, uiname, description) {
    let prop = new ReportProperty(void 0, apiname, uiname, description);
    let dpath = new DataPath(path, apiname, prop);
    this.add(dpath);
    return dpath;
  }
  string(path, apiname, uiname, description) {
    let prop = new StringProperty(void 0, apiname, uiname, description);
    let dpath = new DataPath(path, apiname, prop);
    this.add(dpath);
    return dpath;
  }
  int(path, apiname, uiname, description, prop = void 0) {
    if (!prop) {
      prop = new IntProperty(0, apiname, uiname, description);
    }
    let dpath = new DataPath(path, apiname, prop);
    this.add(dpath);
    return dpath;
  }
  curve1d(path, apiname, uiname, description) {
    let prop = new Curve1DProperty(void 0);
    prop.apiname = apiname;
    prop.uiname = uiname;
    prop.description = description;
    let dpath = new DataPath(path, apiname, prop);
    this.add(dpath);
    return dpath;
  }
  enum(path, apiname, enumdef, uiname, description) {
    let prop;
    if (enumdef instanceof EnumProperty) {
      prop = enumdef;
    } else {
      prop = new EnumProperty(void 0, enumdef, apiname, uiname, description);
    }
    let dpath = new DataPath(path, apiname, prop);
    this.add(dpath);
    return dpath;
  }
  list(path, apiname, funcs) {
    let array = new DataList(funcs);
    let dpath = new DataPath(path, apiname, array);
    dpath.type = DataTypes.ARRAY;
    this.add(dpath);
    return dpath;
  }
  flags(path, apiname, enumdef, uiname, description) {
    let prop;
    if (enumdef === void 0 || !(enumdef instanceof ToolProperty2)) {
      prop = new FlagProperty(void 0, enumdef, apiname, uiname, description);
    } else {
      prop = enumdef;
    }
    let dpath = new DataPath(path, apiname, prop);
    this.add(dpath);
    return dpath;
  }
  remove(m) {
    if (typeof m === "string") {
      m = this.pathmap[m];
    }
    if (!(m.apiname in this.pathmap)) {
      throw new Error("Member not in struct " + m.apiname);
    }
    delete this.pathmap[m.apiname];
    this.members.remove(m);
  }
  fromToolProp(path, prop, apiname = prop.apiname.length > 0 ? prop.apiname : path) {
    let dpath = new DataPath(path, apiname, prop);
    this.add(dpath);
    return dpath;
  }
  add(m) {
    if (m.apiname in this.pathmap) {
      if (window.DEBUG.datapaths) {
        console.warn("Overriding existing member '" + m.apiname + "' in datapath struct", this.name);
      }
      this.remove(this.pathmap[m.apiname]);
    }
    m.flag |= this.inheritFlag;
    this.members.push(m);
    m.parent = this;
    this.pathmap[m.apiname] = m;
    return this;
  }
};
var _map_struct_idgen = 1;
var _map_structs = {};
window._debug__map_structs = _map_structs;
var _dummypath = new DataPath();
var DummyIntProperty = new IntProperty();
var CLS_API_KEY = Symbol("dp_map_id");
var CLS_API_KEY_CUSTOM = Symbol("dp_map_custom");
var DataAPI = class extends ModelInterface {
  static {
    __name(this, "DataAPI");
  }
  constructor() {
    super();
    this.rootContextStruct = void 0;
    this.structs = [];
  }
  get list() {
    return void 0;
  }
  static toolRegistered(cls2) {
    return ToolOp.isRegistered(cls2);
  }
  static registerTool(cls2) {
    console.warn("Outdated function simple_controller.DataAPI.registerTool called");
    return ToolOp.register(cls2);
  }
  getStructs() {
    return this.structs;
  }
  setRoot(sdef) {
    this.rootContextStruct = sdef;
  }
  hasStruct(cls2) {
    return cls2.hasOwnProperty(CLS_API_KEY);
  }
  getStruct(cls2) {
    return this.mapStruct(cls2, false);
  }
  mergeStructs(dest, src) {
    for (let m of src.members) {
      dest.add(m.copy());
    }
  }
  inheritStruct(cls2, parent2, auto_create_parent = false) {
    let st = this.mapStruct(parent2, auto_create_parent);
    if (st === void 0) {
      throw new Error("parent has no struct definition");
    }
    st = st.copy();
    st.name = cls2.name;
    this._addClass(cls2, st);
    return st;
  }
  /**
   * Look up struct definition for a class.
   *
   * @param cls: the class
   * @param auto_create: If true, automatically create definition if not already existing.
   * @returns {IterableIterator<*>}
   */
  _addClass(cls2, dstruct) {
    let key2 = _map_struct_idgen++;
    cls2[CLS_API_KEY] = key2;
    this.structs.push(dstruct);
    _map_structs[key2] = dstruct;
  }
  /* Associate cls with a DataStruct
   * via callback, which will be called
   * with an instance of cls as its argument*/
  mapStructCustom(cls2, callback) {
    this.mapStruct(cls2, true);
    cls2[CLS_API_KEY_CUSTOM] = callback;
  }
  mapStruct(cls2, auto_create = true, name = cls2.name) {
    let key2;
    if (!cls2.hasOwnProperty(CLS_API_KEY)) {
      key2 = void 0;
    } else {
      key2 = cls2[CLS_API_KEY];
    }
    if (key2 === void 0 && auto_create) {
      let dstruct = new DataStruct(void 0, name);
      this._addClass(cls2, dstruct);
      return dstruct;
    } else if (key2 === void 0) {
      throw new Error("class does not have a struct definition: " + name);
    }
    return _map_structs[key2];
  }
  //used for tagging error messages
  pushReportContext(name) {
    pushReportName(name);
  }
  //used for tagging error messages
  popReportContext() {
    popReportName();
  }
  /*
    massSetProp operate on lists.  The idea is to
    write a filter str inside a data path, e.g.
  
    ctx.api.massSetProp(ctx, "obj.list[{$.select}].value", 1);
  
  
    * */
  massSetProp(ctx2, massSetPath2, value2) {
    for (let path of this.resolveMassSetPaths(ctx2, massSetPath2)) {
      this.setValue(ctx2, path, value2);
    }
  }
  resolveMassSetPaths(ctx, massSetPath) {
    if (massSetPath.startsWith("/")) {
      massSetPath = massSetPath.slice(1, massSetPath.length);
    }
    let start = massSetPath.search("{");
    let end = massSetPath.search("}");
    if (start < 0 || end < 0) {
      throw new DataPathError("Invalid mass set datapath: " + massSetPath);
      return;
    }
    let prefix = massSetPath.slice(0, start - 1);
    let filter = massSetPath.slice(start + 1, end);
    let suffix = massSetPath.slice(end + 2, massSetPath.length);
    let rdef = this.resolvePath(ctx, prefix);
    if (!(rdef.prop instanceof DataList)) {
      throw new DataPathError("massSetPath expected a path resolving to a DataList: " + massSetPath);
    }
    let paths = [];
    let list = rdef.prop;
    let api = ctx.api;
    function applyFilter(obj) {
      const forceEval = rdef.dpath.flag & DataFlags.USE_EVAL_MASS_SET_PATHS;
      if (obj === void 0) {
        return void 0;
      } else if (!forceEval && (typeof obj === "object" || typeof obj === "function")) {
        let st = api.mapStruct(obj.constructor, false);
        let path = filter;
        if (path.startsWith("$")) {
          path = path.slice(1, filter.length).trim();
        }
        if (path.startsWith(".")) {
          path = path.slice(1, filter.length).trim();
        }
        try {
          return api.getValue(obj, path, st);
        } catch (error) {
          if (!(error instanceof DataPathError)) {
            print_stack(error);
            console.error("Error in datapath callback");
          }
          return false;
        }
      } else {
        let $ = obj;
        return eval(filter);
      }
    }
    __name(applyFilter, "applyFilter");
    for (let obj2 of list.getIter(this, rdef.value)) {
      if (!applyFilter(obj2)) {
        continue;
      }
      let key2 = "" + list.getKey(this, rdef.value, obj2);
      let path = `${prefix}[${key2}]${suffix}`;
      try {
        this.getValue(ctx, path);
      } catch (error) {
        if (!(error instanceof DataPathError)) {
          print_stack(error);
          console.error(path + ": Error in datapath API");
        }
        continue;
      }
      paths.push(path);
    }
    return paths;
  }
  resolvePath(ctx2, inpath, ignoreExistence = false, dstruct = void 0) {
    let parser3 = parserStack[parserStack.cur++];
    let ret2 = void 0;
    if (inpath[0] === "/") {
      inpath = inpath.slice(1, inpath.length).trim();
    }
    try {
      ret2 = this.resolvePath_intern(ctx2, inpath, ignoreExistence, parser3, dstruct);
    } catch (error) {
      if (!(error instanceof DataPathError)) {
        print_stack(error);
        report("error while evaluating path " + inpath);
      }
      if (window.DEBUG && window.DEBUG.datapaths) {
        print_stack(error);
      }
      ret2 = void 0;
    }
    parserStack.cur--;
    if (ret2 !== void 0 && ret2.prop && ret2.dpath && ret2.dpath.flag & DataFlags.USE_CUSTOM_PROP_GETTER) {
      ret2.prop = this.getPropOverride(ctx2, inpath, ret2.dpath, ret2.obj);
    }
    if (ret2 !== void 0 && ret2.prop && ret2.dpath && ret2.dpath.ui_name_get) {
      let dummy = {
        datactx: ctx2,
        datapath: inpath,
        dataref: ret2.obj
      };
      let name = ret2.dpath.ui_name_get.call(dummy);
      ret2.prop.uiname = "" + name;
    }
    return ret2;
  }
  getPropOverride(ctx2, path, dpath, obj2, prop = dpath.data) {
    prop.ctx = ctx2;
    prop.datapath = path;
    prop.dataref = obj2;
    let newprop = getTempProp(prop.type);
    prop.copyTo(newprop);
    dpath.propGetter.call(prop, newprop);
    prop.ctx = prop.datapath = prop.dataref = void 0;
    return newprop;
  }
  /**
     get meta information for a datapath.
  
     @param ignoreExistence: don't try to get actual data associated with path,
      just want meta information
     */
  resolvePath_intern(ctx2, inpath, ignoreExistence = false, p = pathParser, dstruct = void 0) {
    inpath = inpath.replace("==", "=");
    p.input(inpath);
    dstruct = dstruct || this.rootContextStruct;
    let obj2 = ctx2;
    let lastobj = ctx2;
    let subkey;
    let lastobj2 = void 0;
    let lastkey = void 0;
    let prop = void 0;
    let lastdpath = void 0;
    function p_key() {
      let t = p.peeknext();
      if (t.type === "NUM" || t.type === "STRLIT") {
        p.next();
        return t.value;
      } else {
        throw new PUTLParseError2("Expected list key");
      }
    }
    __name(p_key, "p_key");
    let _i = 0;
    while (!p.at_end()) {
      let key2 = p.expect("ID");
      let dpath = dstruct.pathmap[key2];
      lastdpath = dpath;
      if (dpath === void 0) {
        if (key2 === "length" && prop !== void 0 && prop instanceof DataList) {
          prop.getLength(this, obj2);
          key2 = "length";
          prop = DummyIntProperty;
          prop.name = "length";
          prop.flag = PropFlags.READ_ONLY;
          dpath = _dummypath;
          dpath.type = DataTypes.PROP;
          dpath.data = prop;
          dpath.struct = dpath.parent = dstruct;
          dpath.flag = DataFlags.READ_ONLY;
          dpath.path = "length";
        } else if (key2 === "active" && prop !== void 0 && prop instanceof DataList) {
          let act = prop.getActive(this, obj2);
          if (act === void 0 && !ignoreExistence) {
            throw new DataPathError("no active elem ent for list");
          }
          let actkey = obj2 !== void 0 && act !== void 0 ? prop.getKey(this, obj2, act) : void 0;
          dstruct = prop.getStruct(this, obj2, actkey);
          if (dstruct === void 0) {
            throw new DataPathError("couldn't get data type for " + inpath + "'s element '" + key2 + "'");
          }
          _dummypath.parent = dpath;
          dpath = _dummypath;
          lastobj = obj2;
          obj2 = act;
          dpath.type = DataTypes.STRUCT;
          dpath.data = dstruct;
          dpath.path = key2;
          p.optional("DOT");
          continue;
        } else {
          throw new DataPathError(inpath + ": unknown property " + key2);
        }
      }
      let dynstructobj = void 0;
      if (dpath.type === DataTypes.STRUCT) {
        dstruct = dpath.data;
      } else if (dpath.type === DataTypes.DYNAMIC_STRUCT) {
        let ok = false;
        if (obj2 !== void 0) {
          let obj22;
          if (dpath.flag & DataFlags.USE_CUSTOM_GETSET) {
            let fakeprop = dpath.getSet;
            fakeprop.ctx = ctx2;
            fakeprop.dataref = obj2;
            fakeprop.datapath = inpath;
            obj22 = fakeprop.get();
            fakeprop.ctx = fakeprop.datapath = fakeprop.dataref = void 0;
          } else {
            obj22 = obj2[dpath.path];
          }
          dynstructobj = obj22;
          if (obj22 !== void 0) {
            if (CLS_API_KEY_CUSTOM in obj22.constructor) {
              dstruct = obj22.constructor[CLS_API_KEY_CUSTOM](obj22);
            } else {
              dstruct = this.mapStruct(obj22.constructor, false);
            }
          } else {
            dstruct = dpath.data;
          }
          if (dstruct === void 0) {
            dstruct = dpath.data;
          }
          ok = dstruct !== void 0;
        }
        if (!ok) {
          throw new DataPathError("dynamic struct error for path: " + inpath);
        }
      } else {
        prop = dpath.data;
      }
      if (prop && dpath.flag & DataFlags.USE_CUSTOM_PROP_GETTER) {
        prop = this.getPropOverride(ctx2, inpath, dpath, obj2);
      }
      if (dpath.path.search(/\./) >= 0) {
        let keys2 = dpath.path.split(/\./);
        for (let key3 of keys2) {
          lastobj2 = lastobj;
          lastobj = obj2;
          lastkey = key3;
          if (obj2 === void 0 && !ignoreExistence) {
            throw new DataPathError("no data for " + inpath);
          } else if (obj2 !== void 0) {
            obj2 = obj2[key3.trim()];
          }
        }
      } else {
        lastobj2 = lastobj;
        lastobj = obj2;
        lastkey = dpath.path;
        if (dpath.flag & DataFlags.USE_CUSTOM_GETSET) {
          let fakeprop = dpath.getSet;
          if (!fakeprop && dpath.type === DataTypes.PROP) {
            let prop2 = dpath.data;
            prop2.ctx = ctx2;
            prop2.dataref = obj2;
            prop2.datapath = inpath;
            try {
              obj2 = prop2.getValue();
            } catch (error) {
              print_stack(error);
              obj2 = void 0;
            }
            if (typeof obj2 === "string" && prop2.type & (PropTypes.ENUM | PropTypes.FLAG)) {
              obj2 = prop2.values[obj2];
            }
            prop2.ctx = prop2.dataref = prop2.datapath = void 0;
          } else {
            fakeprop.ctx = ctx2;
            fakeprop.dataref = obj2;
            fakeprop.datapath = inpath;
            obj2 = fakeprop.get();
            fakeprop.ctx = fakeprop.datapath = fakeprop.dataref = void 0;
          }
        } else if (obj2 === void 0 && !ignoreExistence) {
          throw new DataPathError("no data for " + inpath);
        } else if (dpath.type === DataTypes.DYNAMIC_STRUCT) {
          obj2 = dynstructobj;
        } else if (obj2 !== void 0 && dpath.path !== "") {
          obj2 = obj2[dpath.path];
        }
      }
      let t = p.peeknext();
      if (t === void 0) {
        break;
      }
      if (t.type === "DOT") {
        p.next();
      } else if (t.type === "EQUALS" && prop !== void 0 && prop.type & (PropTypes.ENUM | PropTypes.FLAG)) {
        p.expect("EQUALS");
        let t2 = p.peeknext();
        let type = t2 && t2.type === "ID" ? "ID" : "NUM";
        let val2 = p.expect(type);
        let val1 = val2;
        if (typeof val2 == "string") {
          val2 = prop.values[val2];
        }
        if (val2 === void 0) {
          throw new DataPathError("unknown value " + val1);
        }
        if (val2 in prop.keys) {
          subkey = prop.keys[val2];
        }
        key2 = dpath.path;
        obj2 = !!(lastobj[key2] == val2);
      } else if (t.type === "AND" && prop !== void 0 && prop.type & (PropTypes.ENUM | PropTypes.FLAG)) {
        p.expect("AND");
        let t2 = p.peeknext();
        let type = t2 && t2.type === "ID" ? "ID" : "NUM";
        let val2 = p.expect(type);
        let val1 = val2;
        if (typeof val2 == "string") {
          val2 = prop.values[val2];
        }
        if (val2 === void 0) {
          throw new DataPathError("unknown value " + val1);
        }
        if (val2 in prop.keys) {
          subkey = prop.keys[val2];
        }
        key2 = dpath.path;
        obj2 = !!(lastobj[key2] & val2);
      } else if (t.type === "LSBRACKET" && prop !== void 0 && prop.type & (PropTypes.ENUM | PropTypes.FLAG)) {
        p.expect("LSBRACKET");
        let t2 = p.peeknext();
        let type = t2 && t2.type === "ID" ? "ID" : "NUM";
        let val2 = p.expect(type);
        let val1 = val2;
        if (typeof val2 == "string") {
          val2 = prop.values[val2];
        }
        if (val2 === void 0) {
          console.warn(inpath, prop.values, val1, prop);
          throw new DataPathError("unknown value " + val1);
        }
        if (val2 in prop.keys) {
          subkey = prop.keys[val2];
        }
        let bitfield;
        key2 = dpath.path;
        if (!(prop.flag & PropFlags.USE_CUSTOM_GETSET)) {
          bitfield = lastobj ? lastobj[key2] : 0;
        } else {
          prop.dataref = lastobj;
          prop.datapath = inpath;
          prop.ctx = ctx2;
          try {
            bitfield = prop.getValue();
          } catch (error) {
            print_stack(error);
            bitfield = NaN;
          }
        }
        if (lastobj === void 0 && !ignoreExistence) {
          throw new DataPathError("no data for path " + inpath);
        } else if (lastobj !== void 0) {
          if (prop.type === PropTypes.ENUM) {
            obj2 = !!(bitfield === val2);
          } else {
            obj2 = !!(bitfield & val2);
          }
        }
        p.expect("RSBRACKET");
      } else if (t.type === "LSBRACKET" && prop !== void 0 && isVecProperty(prop)) {
        p.expect("LSBRACKET");
        let num2 = p.expect("NUM");
        p.expect("RSBRACKET");
        subkey = num2;
        if (prop !== void 0 && !(prop.type & (PropTypes.VEC2 | PropTypes.VEC3 | PropTypes.VEC4 | PropTypes.QUAT))) {
          lastobj = obj2;
        }
        obj2 = obj2[num2];
      } else if (t.type === "LSBRACKET") {
        p.expect("LSBRACKET");
        if (lastobj && lastkey && typeof lastkey === "string" && lastkey.length > 0) {
          lastobj = lastobj[lastkey];
        }
        lastkey = p_key();
        p.expect("RSBRACKET");
        if (!(prop instanceof DataList)) {
          throw new DataPathError("bad property, not a list");
        }
        obj2 = prop.get(this, lastobj, lastkey);
        dstruct = prop.getStruct(this, lastobj, lastkey);
        if (!dstruct) {
          throw new DataPathError(inpath + ": list has no entry " + lastkey);
        }
        if (p.peeknext() !== void 0 && p.peeknext().type === "DOT") {
          p.next();
        }
      }
      if (_i++ > 1e3) {
        console.warn("infinite loop in resolvePath parser");
        break;
      }
    }
    return {
      dpath: lastdpath,
      parent: lastobj2,
      obj: lastobj,
      value: obj2,
      key: lastkey,
      dstruct,
      prop,
      subkey
    };
  }
  _parsePathOverrides(path) {
    let parts = ["", void 0, void 0];
    const TOOLPATH = 0, NAME = 1, HOTKEY = 2;
    let part = TOOLPATH;
    for (let i2 = 0; i2 < path.length; i2++) {
      let c = path[i2];
      let n = i2 < path.length - 1 ? path[i2 + 1] : "";
      if (c === "|") {
        part = NAME;
        parts[NAME] = "";
        continue;
      } else if (c === ":" && n === ":") {
        part = HOTKEY;
        parts[HOTKEY] = "";
        i2++;
        continue;
      }
      parts[part] += c;
    }
    return {
      path: parts[TOOLPATH].trim(),
      uiname: parts[NAME] ? parts[NAME].trim() : void 0,
      hotkey: parts[HOTKEY] ? parts[HOTKEY].trim() : void 0
    };
  }
  /** Get tooldef for path, applying any modifications, e.g.:
   *  "app.some_tool()|Label::CustomHotkeyString"
   * */
  getToolDef(toolpath) {
    let { path, uiname, hotkey } = this._parsePathOverrides(toolpath);
    let cls2 = this.parseToolPath(path);
    if (cls2 === void 0) {
      throw new DataPathError('unknown path "' + path + '"');
    }
    let def = cls2.tooldef();
    if (uiname) {
      def.uiname = uiname;
    }
    if (hotkey) {
      def.hotkey = hotkey;
    }
    return def;
  }
  getToolPathHotkey(ctx2, toolpath) {
    let { path, uiname, hotkey } = this._parsePathOverrides(toolpath);
    if (hotkey) {
      return hotkey;
    }
    try {
      return this.#getToolPathHotkey_intern(ctx2, path);
    } catch (error) {
      print_stack(error);
      console2.context("api").log("failed to fetch tool path: " + path);
      return void 0;
    }
  }
  #getToolPathHotkey_intern(ctx2, path) {
    let screen = ctx2.screen;
    let this2 = this;
    function searchKeymap(keymap3) {
      if (keymap3 === void 0) {
        return void 0;
      }
      let ret2;
      function search(cb) {
        if (ret2) {
          return;
        }
        for (let hk of keymap3) {
          if (typeof hk.action === "string" && cb(hk.action)) {
            ret2 = hk.buildString();
          }
        }
      }
      __name(search, "search");
      search((tool) => tool.trim() === path.trim());
      search((tool) => this2._parsePathOverrides(tool).path === path.trim());
      return ret2;
    }
    __name(searchKeymap, "searchKeymap");
    if (screen.sareas.length === 0) {
      return searchKeymap(screen.keymap);
    }
    let areacls = screen.sareas[0].area.constructor;
    let area = areacls.getActiveArea();
    if (area) {
      for (let keymap3 of area.getKeyMaps()) {
        let ret2 = searchKeymap(keymap3);
        if (ret2 !== void 0) {
          return ret2;
        }
      }
    }
    for (let sarea of screen.sareas) {
      if (!sarea.area) continue;
      for (let keymap3 of sarea.area.getKeyMaps()) {
        let ret2 = searchKeymap(keymap3);
        if (ret2) {
          return ret2;
        }
      }
    }
    return this.keymap ? searchKeymap(this.keymap) : false;
  }
  parseToolPath(path) {
    try {
      return parseToolPath(path).toolclass;
    } catch (error) {
      if (error instanceof DataPathError) {
        console.warn("warning, bad tool path " + path);
        return void 0;
      } else {
        throw error;
      }
    }
  }
  parseToolArgs(path) {
    return parseToolPath(path).args;
  }
  createTool(ctx2, path, inputs = {}) {
    let cls2;
    let args2;
    if (typeof path == "string" || path instanceof String) {
      let tpath = parseToolPath(path);
      cls2 = tpath.toolclass;
      args2 = tpath.args;
    } else {
      cls2 = path;
      args2 = {};
    }
    if (!cls2) {
      debugger;
      console.error("Unknown tool " + path);
    }
    args2 = { ...args2 };
    const tooldef = cls2._getFinalToolDef();
    if (inputs !== void 0) {
      for (let k2 in inputs) {
        if (!(k2 in tooldef.inputs)) {
          console.warn(cls2.tooldef().uiname + ': Unknown tool property "' + k2 + '"');
          continue;
        }
        if (!(k2 in args2)) {
          args2[k2] = inputs[k2];
        }
      }
    }
    let tool = cls2.invoke(ctx2, args2);
    if (inputs !== void 0) {
      for (let k2 in inputs) {
        if (!(k2 in tool.inputs)) {
          console.warn(cls2.tooldef().uiname + ': Unknown tool property "' + k2 + '"');
          continue;
        }
        tool.inputs[k2].setValue(inputs[k2]);
      }
    }
    return tool;
  }
};
function initSimpleController() {
  initToolPaths();
}
__name(initSimpleController, "initSimpleController");
var dpt = DataPathSetOp;
function getDataPathToolOp() {
  return dpt;
}
__name(getDataPathToolOp, "getDataPathToolOp");
function setDataPathToolOp(cls2) {
  ToolOp.unregister(DataPathSetOp);
  if (!ToolOp.isRegistered(cls2)) {
    ToolOp.register(cls2);
  }
  dpt = cls2;
}
__name(setDataPathToolOp, "setDataPathToolOp");
setImplementationClass(DataAPI);

// scripts/path.ux/scripts/path-controller/util/colorutils.js
var rgb_to_hsv_rets = new cachering2(() => [0, 0, 0], 64);
function rgb_to_hsv(r, g, b) {
  let computedH = 0;
  let computedS = 0;
  let computedV = 0;
  if (r == null || g == null || b == null || isNaN(r) || isNaN(g) || isNaN(b)) {
    throw new Error(`Please enter numeric RGB values! r: ${r} g: ${g} b: ${b}`);
  }
  let minRGB = Math.min(r, Math.min(g, b));
  let maxRGB = Math.max(r, Math.max(g, b));
  if (minRGB === maxRGB) {
    computedV = minRGB;
    let ret3 = rgb_to_hsv_rets.next();
    ret3[0] = 0, ret3[1] = 0, ret3[2] = computedV;
    return ret3;
  }
  let d = r === minRGB ? g - b : b === minRGB ? r - g : b - r;
  let h2 = r === minRGB ? 3 : b === minRGB ? 1 : 5;
  computedH = 60 * (h2 - d / (maxRGB - minRGB)) / 360;
  computedS = (maxRGB - minRGB) / maxRGB;
  computedV = maxRGB;
  let ret2 = rgb_to_hsv_rets.next();
  ret2[0] = computedH, ret2[1] = computedS, ret2[2] = computedV;
  return ret2;
}
__name(rgb_to_hsv, "rgb_to_hsv");
var hsv_to_rgb_rets = new cachering2(() => [0, 0, 0], 64);
function hsv_to_rgb(h2, s, v) {
  let c = 0, m = 0, x = 0;
  let ret2 = hsv_to_rgb_rets.next();
  ret2[0] = ret2[1] = ret2[2] = 0;
  h2 *= 360;
  c = v * s;
  x = c * (1 - Math.abs(h2 / 60 % 2 - 1));
  m = v - c;
  let color;
  function RgbF_Create(r, g, b) {
    ret2[0] = r;
    ret2[1] = g;
    ret2[2] = b;
    return ret2;
  }
  __name(RgbF_Create, "RgbF_Create");
  if (h2 >= 0 && h2 < 60) {
    color = RgbF_Create(c + m, x + m, m);
  } else if (h2 >= 60 && h2 < 120) {
    color = RgbF_Create(x + m, c + m, m);
  } else if (h2 >= 120 && h2 < 180) {
    color = RgbF_Create(m, c + m, x + m);
  } else if (h2 >= 180 && h2 < 240) {
    color = RgbF_Create(m, x + m, c + m);
  } else if (h2 >= 240 && h2 < 300) {
    color = RgbF_Create(x + m, m, c + m);
  } else if (h2 >= 300) {
    color = RgbF_Create(c + m, m, x + m);
  } else {
    color = RgbF_Create(m, m, m);
  }
  return color;
}
__name(hsv_to_rgb, "hsv_to_rgb");
var rgb_to_cmyk_rets = cachering2.fromConstructor(Vector4, 512);
var cmyk_to_rgb_rets = cachering2.fromConstructor(Vector32, 512);
function cmyk_to_rgb(c, m, y, k2) {
  let ret2 = cmyk_to_rgb_rets.next();
  if (k2 === 1) {
    ret2.zero();
    return ret2;
  }
  c = c - c * k2 + k2;
  m = m - m * k2 + k2;
  y = y - y * k2 + k2;
  ret2[0] = 1 - c;
  ret2[1] = 1 - m;
  ret2[2] = 1 - y;
  return ret2;
}
__name(cmyk_to_rgb, "cmyk_to_rgb");
function rgb_to_cmyk(r, g, b) {
  let ret2 = rgb_to_cmyk_rets.next();
  let C = 1 - r;
  let M = 1 - g;
  let Y = 1 - b;
  let var_K = 1;
  if (C < var_K) var_K = C;
  if (M < var_K) var_K = M;
  if (Y < var_K) var_K = Y;
  if (var_K === 1) {
    C = 0;
    M = 0;
    Y = 0;
  } else {
    C = (C - var_K) / (1 - var_K);
    M = (M - var_K) / (1 - var_K);
    Y = (Y - var_K) / (1 - var_K);
  }
  let K = var_K;
  ret2[0] = C;
  ret2[1] = M;
  ret2[2] = Y;
  ret2[3] = K;
  return ret2;
}
__name(rgb_to_cmyk, "rgb_to_cmyk");

// scripts/path.ux/scripts/core/theme.js
var DefaultTheme = {
  base: {
    AreaHeaderBG: "rgba(200, 200, 200, 0.95)",
    BasePackFlag: 0,
    BoxDepressed: "rgba(130,130,130, 1)",
    BoxHighlight: "rgba(151,208,239, 1)",
    "flex-grow": "unset",
    mobileSizeMultiplier: 1,
    DefaultText: new CSSFont({
      font: "sans-serif",
      weight: "normal",
      variant: "normal",
      style: "normal",
      size: 14,
      color: "rgba(35, 35, 35, 1.0)"
    }),
    LabelText: new CSSFont({
      font: "sans-serif",
      weight: "normal",
      variant: "normal",
      style: "normal",
      size: 14,
      color: "rgba(35, 35, 35, 1.0)"
    }),
    TitleText: new CSSFont({
      font: "sans-serif",
      weight: "normal",
      variant: "normal",
      style: "normal",
      size: 12,
      color: "rgba(35, 35, 35, 1.0)"
    }),
    "background-color": "rgba(207,207,207, 0.5)",
    "border-color": "rgba(34,34,34, 1)",
    "border-radius": 12.010619764585666,
    "focus-border-width": 2,
    oneAxisPadding: 2,
    padding: 1
  },
  button: {
    DefaultText: new CSSFont({
      font: "poppins",
      weight: "bold",
      variant: "normal",
      style: "normal",
      size: 12,
      color: "rgba(35,35,35, 1)"
    }),
    "background-color": "rgba(238,238,238, 0.8672412740773168)",
    "border-color": "rgba(255,255,255, 1)",
    "border-radius": 4,
    "border-style": "solid",
    "border-width": 2,
    disabled: {
      DefaultText: new CSSFont({
        font: "poppins",
        weight: "bold",
        variant: "normal",
        style: "normal",
        size: 12,
        color: "rgb(109,109,109)"
      }),
      "background-color": "rgb(19,19,19)",
      "border-color": "#f58f8f",
      "border-style": "solid",
      "border-width": 1
    },
    height: 25,
    highlight: {
      DefaultText: new CSSFont({
        font: "poppins",
        weight: "bold",
        variant: "normal",
        style: "normal",
        size: 12,
        color: "rgba(255,255,255, 1)"
      }),
      "background-color": "rgba(138,222,255, 1)",
      "border-color": "rgba(255,255,255, 1)",
      "border-radius": 4,
      "border-style": "solid",
      "border-width": 2
    },
    "highlight-pressed": {
      DefaultText: new CSSFont({
        font: "poppins",
        weight: "bold",
        variant: "normal",
        style: "normal",
        size: 12,
        color: "rgba(35,35,35, 1)"
      }),
      "background-color": "rgba(113,113,113, 1)",
      "border-color": "#DADCE0",
      "border-style": "solid",
      "border-width": 1
    },
    margin: 4,
    "margin-left": 4,
    "margin-right": 4,
    padding: 1,
    pressed: {
      DefaultText: new CSSFont({
        font: "poppins",
        weight: "bold",
        variant: "normal",
        style: "normal",
        size: 12,
        color: "rgba(35,35,35, 1)"
      }),
      "background-color": "rgba(113,113,113, 1)",
      "border-color": "#DADCE0",
      "border-style": "solid",
      "border-width": 1
    },
    width: 25
  },
  checkbox: {
    CheckSide: "left",
    height: 32,
    width: 32,
    "background-color": "rgb(168,168,168)"
  },
  colorfield: {
    circleSize: 11,
    colorBoxHeight: 24,
    fieldSize: 400,
    height: 256,
    hueHeight: 32,
    width: 256
  },
  colorpickerbutton: {
    height: 32,
    width: 95
  },
  curvewidget: {
    CanvasBG: "rgb(44,44,44)",
    CanvasHeight: 256,
    CanvasWidth: 256
  },
  dropbox: {
    dropTextBG: "rgba(233,233,233, 1)",
    height: 25,
    width: 32
  },
  iconbutton: {
    highlight: {
      "background-color": "rgba(133,182,255,0.8)",
      "border-color": "black",
      "border-radius": 5,
      "border-width": 1,
      height: 32,
      "margin-bottom": 1,
      "margin-left": 2,
      "margin-right": 2,
      "margin-top": 1,
      padding: 2,
      width: 32
    },
    depressed: {
      "background-color": "rgba(42,61,77,0.8)",
      "border-color": "black",
      "border-radius": 5,
      "border-width": 1,
      height: 32,
      "margin-bottom": 1,
      "margin-left": 2,
      "margin-right": 2,
      "margin-top": 1,
      padding: 2,
      width: 32
    },
    "background-color": "rgba(15,15,15, 0)",
    "border-color": "black",
    "border-radius": 5,
    "border-width": 1,
    height: 32,
    "margin-bottom": 1,
    "margin-left": 2,
    "margin-right": 2,
    "margin-top": 1,
    padding: 2,
    width: 32
  },
  iconcheck: {
    highlight: {
      "background-color": "rgba(133,182,255,0.8)",
      "border-color": "black",
      "border-radius": 5,
      "border-width": 1,
      height: 32,
      "margin-bottom": 1,
      "margin-left": 2,
      "margin-right": 2,
      "margin-top": 1,
      padding: 2,
      width: 32
    },
    depressed: {
      "background-color": "rgba(42,61,77,0.8)",
      "border-color": "black",
      "border-radius": 5,
      "border-width": 1,
      height: 32,
      "margin-bottom": 1,
      "margin-left": 2,
      "margin-right": 2,
      "margin-top": 1,
      padding: 2,
      width: 32
    },
    "background-color": "rgba(15,15,15, 0)",
    "border-color": "rgba(237,209,209, 1)",
    "border-radius": 5,
    "border-width": 0,
    drawCheck: true,
    height: 32,
    "margin-bottom": 1,
    "margin-left": 2,
    "margin-right": 2,
    "margin-top": 1,
    padding: 2,
    width: 32
  },
  label: {
    LabelText: new CSSFont({
      font: "sans-serif",
      weight: "normal",
      variant: "normal",
      style: "normal",
      size: 14,
      color: "rgba(35, 35, 35, 1.0)"
    })
  },
  listbox: {
    ListActive: "rgba(200, 205, 215, 1.0)",
    ListHighlight: "rgba(155, 220, 255, 0.5)",
    height: 200,
    width: 110
  },
  menu: {
    MenuBG: "rgba(250, 250, 250, 1.0)",
    "item-radius": 0,
    MenuBorder: "1px solid grey",
    MenuHighlight: "rgba(155, 220, 255, 1.0)",
    MenuSeparator: {
      width: "100%",
      height: 2,
      padding: 0,
      margin: 0,
      border: "none",
      "background-color": "grey"
    },
    "box-shadow": "5px 5px 25px rgba(0,0,0,0.75)",
    MenuSpacing: 5,
    MenuText: new CSSFont({
      font: "sans-serif",
      weight: "normal",
      variant: "normal",
      style: "normal",
      size: 12,
      color: "rgba(25, 25, 25, 1.0)"
    }),
    "padding-top": 0,
    "padding-left": 0,
    "padding-right": 0,
    "padding-bottom": 0,
    "border-color": "grey",
    "border-radius": 5,
    "border-style": "solid",
    "border-width": 1
  },
  notification: {
    DefaultText: new CSSFont({
      font: "poppins",
      weight: "bold",
      variant: "normal",
      style: "normal",
      size: 12,
      color: "rgb(55,55,55)"
    }),
    "background-color": "rgba(72,72,72,0)",
    "border-radius": 5,
    "border-color": "grey",
    "border-width": 1,
    "border-style": "solid",
    ProgressBarBG: "rgb(74,148,183)",
    ProgressBar: "rgb(250,132,58)"
  },
  numslider: {
    "arrow-color": "50%",
    "background-color": "rgba(219,219,219, 1)",
    "border-color": "rgba(255,255,255, 1)",
    "border-radius": 1,
    height: 22,
    highlight: {
      DefaultText: new CSSFont({
        font: "poppins",
        weight: "bold",
        variant: "normal",
        style: "normal",
        size: 12,
        color: "rgb(0,0,0)"
      }),
      "background-color": "rgba(151,208,239, 1)",
      "border-color": "rgba(255,255,255, 1)",
      "border-style": "solid",
      "border-width": 1
    },
    pressed: {
      DefaultText: new CSSFont({
        font: "poppins",
        weight: "bold",
        variant: "normal",
        style: "normal",
        size: 12,
        color: "rgba(0,0,0, 1)"
      }),
      "arrow-color": "rgb(28,28,28)",
      "background-color": "rgba(178,178,178, 1)",
      "border-color": "rgba(255,255,255, 1)",
      "border-style": "solid",
      "border-width": 1
    },
    width: 115
    /*
    'highlight-pressed'            : {
      DefaultText       : new CSSFont({
        font   : 'poppins',
        weight : 'bold',
        variant: 'normal',
        style  : 'normal',
        size   : 12,
        color  : 'rgb(245,245,245)'
      }),
      'background-color': 'rgb(126,126,126)',
      'border-color'    : '#DADCE0',
      'border-style'    : 'solid',
      'border-width'    : 1,
    },*/
  },
  numslider_simple: {
    SlideHeight: 10,
    TextBoxWidth: 45,
    "background-color": "rgba(219,219,219, 1)",
    height: 18,
    labelOnTop: true,
    addLabel: true,
    width: 135
  },
  numslider_textbox: {
    TextBoxHeight: 25,
    TextBoxWidth: 50,
    "background-color": "rgba(219,219,219, 1)",
    height: 25,
    labelOnTop: true,
    addLabel: false,
    width: 120
  },
  panel: {
    HeaderBorderRadius: 5.329650280441558,
    HeaderRadius: 4,
    TitleBackground: "rgba(177,219,255, 1)",
    TitleBorder: "rgba(104,104,104, 1)",
    TitleText: new CSSFont({
      font: "sans-serif",
      weight: "normal",
      variant: "normal",
      style: "normal",
      size: 14,
      color: "rgba(0,0,0, 1)"
    }),
    "background-color": "rgba(184,184,184, 0.7594818376068376)",
    "border-color": "rgba(0,0,0, 0.5598061397157866)",
    "border-radius": 4,
    "border-style": "groove",
    "border-width": 1.141,
    "margin-bottom": 0,
    "margin-bottom-closed": 0,
    "margin-left": 5.6584810220495445,
    "margin-right": 0,
    "margin-top": 0,
    "margin-top-closed": 0,
    "padding-bottom": 0,
    "padding-left": 0,
    "padding-right": 0,
    "padding-top": 0
  },
  richtext: {
    DefaultText: new CSSFont({
      font: "sans-serif",
      weight: "normal",
      variant: "normal",
      style: "normal",
      size: 16,
      color: "rgba(35, 35, 35, 1.0)"
    }),
    "background-color": "rgb(245, 245, 245)"
  },
  screenborder: {
    "border-inner": "grey",
    "border-outer": "rgba(228,228,228, 1)",
    "border-width": 2,
    "mouse-threshold": 8
  },
  scrollbars: {
    border: void 0,
    color: void 0,
    color2: void 0,
    contrast: void 0,
    width: void 0
  },
  sidebar: {
    "background-color": "rgba(55, 55, 55, 0.5)"
  },
  strip: {
    "background-color": "rgba(75,75,75, 0.33213141025641024)",
    "border-color": "rgba(0,0,0, 0.31325409987877156)",
    "border-radius": 8.76503417507447,
    "border-style": "solid",
    "border-width": 1,
    margin: 2,
    oneAxisPadding: 2,
    padding: 1,
    "flex-grow": "unset"
  },
  tabs: {
    "focus-on-tab-click": "false",
    "movable-tabs": "true",
    TabPadding_mobile: 20,
    //padding perpindicular to the label text
    TabPadding: 0,
    TabActive: "rgba(212,212,212, 1)",
    TabBarRadius: 6,
    TabHighlight: "rgba(50, 50, 50, 0.2)",
    TabInactive: "rgba(183,183,183, 1)",
    TabStrokeStyle1: "rgba(0,0,0, 1)",
    TabStrokeStyle2: "rgba(0,0,0, 1)",
    TabText: new CSSFont({
      font: "sans-serif",
      weight: "normal",
      variant: "bold",
      style: "normal",
      size: 15,
      color: "rgba(0,0,0, 1)"
    }),
    "background-color": "rgba(222,222,222, 1)"
  },
  textbox: {
    DefaultText: new CSSFont({
      font: "sans-serif",
      weight: "normal",
      variant: "normal",
      style: "normal",
      size: 14,
      color: "rgba(3,3,3, 1)"
    }),
    "border-color": "rgba(0,0,0,0)",
    "border-width": 1,
    "border-radius": 4,
    "border-style": "solid",
    "background-color": "rgba(245,245,245, 1)"
  },
  tooltip: {
    ToolTipText: new CSSFont({
      font: "sans-serif",
      weight: "bold",
      variant: "normal",
      style: "normal",
      size: 12,
      color: "rgba(35, 35, 35, 1.0)"
    }),
    "background-color": "rgba(255,255,255, 1)",
    "border-color": "rgba(139,139,139, 1)",
    "border-radius": 3,
    "border-style": "solid",
    "border-width": 1,
    padding: 5
  },
  treeview: {
    itemIndent: 10,
    rowHeight: 18
  },
  vecPopupButton: {
    height: 18,
    padding: 3,
    width: 100
  }
};

// scripts/path.ux/scripts/icon_enum.js
function setIconMap(icons) {
  for (let k2 in icons) {
    Icons[k2] = icons[k2];
  }
}
__name(setIconMap, "setIconMap");
var a2 = 0;
var Icons = {
  FOLDER: a2++,
  FILE: a2++,
  TINY_X: a2++,
  SMALL_PLUS: a2++,
  SMALL_MINUS: a2++,
  UNDO: a2++,
  REDO: a2++,
  HELP: a2++,
  UNCHECKED: a2++,
  CHECKED: a2++,
  LARGE_CHECK: a2++,
  CURSOR_ARROW: a2++,
  NOTE_EXCL: a2++,
  SCROLL_DOWN: a2++,
  SCROLL_UP: a2++,
  BACKSPACE: a2++,
  LEFT_ARROW: a2++,
  RIGHT_ARROW: a2++,
  UI_EXPAND: a2++,
  //triangle
  UI_COLLAPSE: a2++,
  //triangle
  BOLD: a2++,
  ITALIC: a2++,
  UNDERLINE: a2++,
  STRIKETHRU: a2++,
  TREE_EXPAND: a2++,
  TREE_COLLAPSE: a2++,
  ZOOM_OUT: a2++,
  ZOOM_IN: a2++,
  LARGE_X: a2++
  /* Used for curve widget delete button. */
};
Icons.ENUM_CHECKED = Icons.CHECKED;
Icons.ENUM_UNCHECKED = Icons.UNCHECKED;

// scripts/path.ux/scripts/core/aspect.js
var exclude = /* @__PURE__ */ new Set([
  "toString",
  "constructor",
  "prototype",
  "__proto__",
  "toLocaleString",
  "hasOwnProperty",
  "shadow"
]);
var UIBase = void 0;
function _setUIBase(uibase) {
  UIBase = uibase;
}
__name(_setUIBase, "_setUIBase");
var AspectKeys = Symbol("aspect-keys");
function initAspectClass(object, blacklist = /* @__PURE__ */ new Set()) {
  let cls2 = object.constructor;
  if (!cls2[AspectKeys]) {
    let validProperty = function(obj2, key2) {
      let descr = Object.getOwnPropertyDescriptor(obj2, key2);
      if (descr && (descr.get || descr.set)) {
        return false;
      }
      let p2 = obj2.constructor;
      do {
        if (p2.prototype) {
          let descr2 = Object.getOwnPropertyDescriptor(p2.prototype, key2);
          if (descr2 && (descr2.set || descr2.get)) {
            return false;
          }
        }
        p2 = p2.__proto__;
      } while (p2 && p2 !== p2.__proto__);
      return true;
    };
    __name(validProperty, "validProperty");
    cls2[AspectKeys] = [];
    let keys2 = [];
    let p = object.__proto__;
    while (p) {
      keys2 = keys2.concat(Reflect.ownKeys(p));
      p = p.__proto__;
    }
    keys2 = new Set(keys2);
    for (let k2 of keys2) {
      let v;
      if (typeof k2 === "string" && k2.startsWith("_")) {
        continue;
      }
      if (k2 === "constructor") {
        continue;
      }
      if (blacklist.has(k2) || exclude.has(k2)) {
        continue;
      }
      if (!validProperty(object, k2)) {
        continue;
      }
      try {
        v = object[k2];
      } catch (error) {
        continue;
      }
      if (typeof v !== "function") {
        continue;
      }
      cls2[AspectKeys].push(k2);
    }
  }
  object.__aspect_methods = /* @__PURE__ */ new Set();
  for (let k2 of cls2[AspectKeys]) {
    AfterAspect.bind(object, k2);
  }
}
__name(initAspectClass, "initAspectClass");
function clearAspectCallbacks(obj2) {
  for (let key2 of obj2.__aspect_methods) {
    obj2[key2].clear();
  }
}
__name(clearAspectCallbacks, "clearAspectCallbacks");
var AfterAspect = class _AfterAspect {
  static {
    __name(this, "AfterAspect");
  }
  constructor(owner, key2) {
    this.owner = owner;
    this.key = key2;
    this.chain = [[owner[key2], false]];
    this.chain2 = [[owner[key2], false]];
    this.root = [[owner[key2], false]];
    let this2 = this;
    let method = this._method = function() {
      let chain = this2.chain;
      let chain2 = this2.chain2;
      chain2.length = chain.length;
      for (let i2 = 0; i2 < chain.length; i2++) {
        chain2[i2] = chain[i2];
      }
      for (let i2 = 0; i2 < chain2.length; i2++) {
        let [cb, node, once] = chain2[i2];
        if (node) {
          let isDead = !node.isConnected;
          if (node instanceof UIBase) {
            isDead = isDead || node.isDead();
          }
          if (isDead) {
            console.warn("pruning dead AfterAspect callback", node);
            chain.remove(chain2[i2]);
            continue;
          }
        }
        if (once && chain.indexOf(chain2[i2]) >= 0) {
          chain.remove(chain2[i2]);
        }
        if (cb && cb.apply) {
          method.value = cb.apply(this, arguments);
        }
      }
      let ret2 = method.value;
      method.value = void 0;
      return ret2;
    };
    this._method_bound = false;
    method.after = this.after.bind(this);
    method.once = this.once.bind(this);
    method.remove = this.remove.bind(this);
    owner[key2].after = this.after.bind(this);
    owner[key2].once = this.once.bind(this);
    owner[key2].remove = this.remove.bind(this);
  }
  static bind(owner, key2) {
    owner.__aspect_methods.add(key2);
    return new _AfterAspect(owner, key2);
  }
  remove(cb) {
    for (let item of this.chain) {
      if (item[0] === cb) {
        this.chain.remove(item);
        return true;
      }
    }
    return false;
  }
  once(cb, node) {
    return this.after(cb, node, true);
  }
  _checkbind() {
    if (!this._method_bound) {
      this.owner[this.key] = this._method;
    }
  }
  clear() {
    this._checkbind();
    this.chain = [[this.root[0][0], this.root[0][1]]];
    this.chain2 = [[this.root[0][0], this.root[0][1]]];
    return this;
  }
  before(cb, node, once) {
    this._checkbind();
    if (cb === void 0) {
      console.warn("invalid call to .after(); cb was undefined");
      return this.owner;
    }
    this.chain = [[cb, node, once]].concat(this.chain);
    return this.owner;
  }
  after(cb, node, once) {
    this._checkbind();
    if (cb === void 0) {
      console.warn("invalid call to .after(); cb was undefined");
      return this.owner;
    }
    this.chain.push([cb, node, once]);
    return this.owner;
  }
};

// scripts/path.ux/scripts/path-controller/dag/eventdag.js
var eventdag_exports = {};
__export(eventdag_exports, {
  DependSocket: () => DependSocket,
  EventGraph: () => EventGraph,
  EventNode: () => EventNode,
  EventSocket: () => EventSocket,
  NodeCapable: () => NodeCapable,
  NodeFlags: () => NodeFlags,
  PropSocketModes: () => PropSocketModes,
  PropertySocket: () => PropertySocket,
  RecalcFlags: () => RecalcFlags2,
  SocketFlags: () => SocketFlags,
  SocketTypes: () => SocketTypes,
  theEventGraph: () => theEventGraph
});
var SocketFlags = {
  UPDATE: 1
};
var NodeFlags = {
  UPDATE: 1,
  SORT_TAG1: 2,
  SORT_TAG2: 4
};
var RecalcFlags2 = {
  RUN: 1,
  RESORT: 2
};
var SocketTypes = {
  INPUT: "inputs",
  OUTPUT: "outputs"
};
var graphIdGen = 1;
var EventSocket = class {
  static {
    __name(this, "EventSocket");
  }
  static socketDef = {
    typeName: "",
    uiName: "",
    flag: 0
  };
  name = "";
  id = graphIdGen++;
  flag = 0;
  edges = [];
  node = void 0;
  type = void 0;
  constructor(node) {
    this.node = node;
  }
  get value() {
    throw new Error("implement me!");
  }
  set value(v) {
    this.flagUpdate();
  }
  get isUpdated() {
    return this.flag & SocketFlags.UPDATE;
  }
  copyFrom(b) {
    this.name = b.name;
    this.flag = b.flag;
    return this;
  }
  copy() {
    return new this.constructor().copyFrom(this);
  }
  flagUpdate() {
    this.flag |= SocketFlags.UPDATE;
    if (!this.node) {
      return;
    }
    if (this.type === SocketTypes.INPUT) {
      this.node.flagUpdate();
    } else {
      for (let sockb of this.edges) {
        sockb.flag |= SocketFlags.UPDATE;
        sockb.node.flagUpdate();
      }
    }
    return this;
  }
  flagResort() {
    if (this.node) {
      this.node.flagResort();
    }
    return this;
  }
  connect(sockb) {
    this.edges.push(sockb);
    sockb.edges.push(this);
    return this;
  }
  hasNode(node) {
    for (let sockb of this.edges) {
      if (sockb.node === node || sockb.node.owner === node) {
        return true;
      }
    }
    return false;
  }
  has(sockb) {
    return this.edges.indexOf(sockb) >= 0;
  }
  disconnect(sockb = void 0) {
    this.flagResort();
    if (sockb === void 0) {
      for (let sock of this.edges) {
        sock.flagUpdate();
        sock.edges.remove(this);
      }
      this.edges.length = 0;
      return this;
    }
    sockb.flagUpdate();
    this.edges.remove(sockb);
    return this;
  }
};
var NodeClasses = [];
var NodeCapable = class {
  static {
    __name(this, "NodeCapable");
  }
  graphNode = void 0;
  static graphNodeDef = {
    typeName: "",
    uiName: "",
    flag: 0,
    /* Sockets inherit. */
    inputs: {},
    outputs: {}
  };
  graphExec() {
  }
};
var EventNode = class _EventNode {
  static {
    __name(this, "EventNode");
  }
  owner = void 0;
  inputs = {};
  outputs = {};
  allsockets = [];
  graph = void 0;
  sortIndex = -1;
  id = graphIdGen++;
  flag = 0;
  static register(cls2, def) {
    cls2.graphNodeDef = def;
    if (!def.typeName) {
      throw new Error("Missing graphNodeDef.typeName");
    }
    NodeClasses.push(cls2);
    return def;
  }
  addSocket(type, key2, sock) {
    this[type][key2] = sock;
    sock.name = key2;
    sock.node = this;
    sock.type = type;
    return this;
  }
  static isNodeCapable(cls2) {
    return cls2.graphNodeDef !== void 0;
  }
  constructor(owner) {
    this.owner = owner;
    let cls2 = owner.constructor;
    let getSockets = /* @__PURE__ */ __name((key2) => {
      let socks = {};
      let p = cls2;
      while (p) {
        if (p.graphNodeDef) {
          let socksDef = p.graphNodeDef[key2] || {};
          for (let k2 in socksDef) {
            if (!(k2 in socks)) {
              socks[k2] = socksDef[k2].copy();
              socks[k2].name = k2;
              socks[k2].node = this;
              socks[k2].type = key2;
              this.allsockets.push(socks[k2]);
            }
          }
        }
        p = p.__proto__;
      }
      return socks;
    }, "getSockets");
    this.inputs = getSockets("inputs");
    this.outputs = getSockets("outputs");
  }
  static init(owner) {
    owner.graphNode = new _EventNode(owner);
    return owner.graphNode;
  }
  flagUpdate() {
    this.flag |= NodeFlags.UPDATE;
    if (this.graph) {
      this.graph.flagUpdate(this);
    }
    return this;
  }
  flagResort() {
    if (this.graph) {
      this.graph.flagResort(this);
    }
    return this;
  }
};
var EventGraph = class {
  static {
    __name(this, "EventGraph");
  }
  nodes = [];
  flag = 0;
  nodeIdMap = /* @__PURE__ */ new Map();
  sockIdMap = /* @__PURE__ */ new Map();
  sortlist = [];
  queueReq = void 0;
  #skipQueueExec = 0;
  constructor() {
  }
  add(node) {
    node = this.eventNode(node);
    node.graph = this;
    this.nodeIdMap.set(node.id, node);
    this.nodes.push(node);
    this.flagResort(node);
    this.flagUpdate(node);
  }
  has(node) {
    node = this.eventNode(node);
    return this.nodeIdMap.has(node.id);
  }
  eventNode(node) {
    if (!(node instanceof EventNode)) {
      node = node.graphNode;
    }
    if (node === void 0) {
      console.warn("Not an event node:", arguments[0]);
      throw new Error("Not an event node");
    }
    return node;
  }
  remove(node) {
    node = this.eventNode(node);
    if (node === void 0) {
      throw new Error("EventGraph.prototype.remove(): node was undefined");
    }
    if (!this.nodeIdMap.get(node.id)) {
      throw new Error("Node is not in event graph");
    }
    this.nodeIdMap.delete(node.id);
    for (let sock of Array.from(node.eventNode.allsockets)) {
      this.sockIdMap.delete(sock.id);
      try {
        sock.disconnect();
      } catch (error) {
        print_stack(error);
        console.error("Failed to disconnect a socket");
      }
    }
    node.graph = void 0;
    this.nodes.remove(node);
    this.flagResort();
  }
  flagResort(node) {
    if (node) {
      node = this.eventNode(node);
    }
    this.flag |= RecalcFlags2.RESORT | RecalcFlags2.RUN;
    return this;
  }
  flagUpdate(node) {
    node = this.eventNode(node);
    this.flag |= RecalcFlags2.RUN;
    if (!this.#skipQueueExec) {
      this.queueExec();
    }
    return this;
  }
  sort() {
    console.warn("Sorting Graph");
    this.flag &= ~RecalcFlags2.RESORT;
    for (let n of this.nodes) {
      n.flag &= ~(NodeFlags.SORT_TAG1 | NodeFlags.SORT_TAG2);
    }
    let sortlist = this.sortlist;
    this.sortlist.length = 0;
    let dosort = /* @__PURE__ */ __name((n) => {
      if (n.flag & NodeFlags.SORT_TAG2) {
        console.error("Cycle in event dag!", n);
        return;
      }
      n.flag |= NodeFlags.SORT_TAG2;
      for (let [k2, socka] of Object.entries(n.inputs)) {
        for (let sockb of socka.edges) {
          let n2 = sockb.node;
          if (!(n2.flag & NodeFlags.SORT_TAG1)) {
            dosort(n2);
          }
        }
      }
      n.flag &= ~NodeFlags.SORT_TAG2;
      n.flag |= NodeFlags.SORT_TAG1;
      n.sortIndex = sortlist.length;
      sortlist.push(n);
      for (let [k2, socka] of Object.entries(n.outputs)) {
        for (let sockb of socka.edges) {
          let n2 = sockb.node;
          if (!(n2.flag & NodeFlags.SORT_TAG1)) {
            dosort(n2);
          }
        }
      }
    }, "dosort");
    for (let n of this.nodes) {
      if (!(n.flag & NodeFlags.SORT_TAG1)) {
        dosort(n);
      }
    }
  }
  queueExec() {
    console.warn("queueExec", this.queueReq);
    this.flag |= RecalcFlags2.RUN;
    if (this.queueReq !== void 0) {
      return;
    }
    this.queueReq = true;
    this.queueReq = window.setTimeout(() => {
      this.queueReq = void 0;
      this.exec();
    }, 0);
  }
  exec() {
    this.flag &= ~RecalcFlags2.RUN;
    if (this.flag & RecalcFlags2.RESORT) {
      this.sort();
    }
    console.warn("Executing Graph");
    this.#skipQueueExec++;
    let sortlist = this.sortlist;
    for (let n of sortlist) {
      if (!(n.flag & NodeFlags.UPDATE)) {
        continue;
      }
      try {
        n.owner.graphExec();
      } catch (error) {
        print_stack(error);
        console.error("Error during event graph execution");
      }
      n.flag &= ~NodeFlags.UPDATE;
      for (let k2 in n.inputs) {
        let sock = n.inputs[k2];
        sock.flag &= ~SocketFlags.UPDATE;
      }
      for (let k2 in n.outputs) {
        let sock = n.outputs[k2];
        if (sock.flag & SocketFlags.UPDATE) {
          for (let sockb of sock.edges) {
            sockb.flag |= SocketFlags.UPDATE;
            sockb.node.flag |= SocketFlags.UPDATE;
          }
          sock.flag &= ~SocketFlags.UPDATE;
        }
      }
    }
    this.#skipQueueExec--;
  }
};
var theEventGraph = new EventGraph();
var strBoolMap = {
  "true": "false",
  "false": "true",
  "on": "off",
  "off": "on",
  "yes": "no",
  "no": "yes"
};
var DependSocket = class extends EventSocket {
  static {
    __name(this, "DependSocket");
  }
  static socketDef = {
    typeName: "depend",
    uiName: "depend",
    flag: 0
  };
  #value = void 0;
  get value() {
    return this.#value;
  }
  set value(v) {
    this.#value = v;
  }
  copyFrom(b) {
    super.copyFrom(b);
    this.#value = b.#value;
    return this;
  }
};
var PropSocketModes = {
  REPLACE: 0,
  MIN: 1,
  MAX: 2
};
var PropertySocket = class extends EventSocket {
  static {
    __name(this, "PropertySocket");
  }
  static socketDef = {
    typeName: "property_socket",
    uiName: "Property Socket",
    flag: 0
  };
  mixMode = PropSocketModes.REPLACE;
  #binding = {
    obj: null,
    key: ""
  };
  #callbacks = [];
  //(newval, oldval) => val
  #invert = false;
  //Invert bool or number properties
  oldValue = void 0;
  mode(mixmode) {
    this.mixMode = mixmode;
    return this;
  }
  copyFrom(b) {
    super.copyFrom(b);
    this.#invert = b.#invert;
    this.#callbacks = Array.from(b.#callbacks);
    this.#binding = b.#binding;
    return this;
  }
  invert(state = true) {
    this.#invert = state;
    return this;
  }
  callback(cb) {
    this.#callbacks.push(cb);
    return this;
  }
  get value() {
    let bind = this.#binding;
    return bind.obj ? bind.obj[bind.key] : void 0;
  }
  set value(v) {
    let old = this.value;
    if (this.#callbacks.length > 0) {
      for (let cb of this.#callbacks) {
        v = cb(v, old);
      }
    }
    if (this.#invert && (typeof v === "number" || typeof v === "boolean" || typeof v === "undefined")) {
      v = !v;
    } else if (this.#invert && typeof v === "string") {
      let s = v.toLowerCase().trim();
      if (s in strBoolMap) {
        v = strBoolMap[s];
      }
    }
    let bind = this.#binding;
    if (bind.obj) {
      bind.obj[bind.key] = v;
    } else {
      console.warn("Attempt to set unbound property socket", this);
    }
  }
  bind(obj2, key2) {
    this.#binding.obj = obj2;
    this.#binding.key = key2;
    return this;
  }
};

// scripts/path.ux/scripts/core/ui_base.js
var _ui_base = void 0;
var TextBox = void 0;
function _setTextboxClass(cls2) {
  TextBox = cls2;
}
__name(_setTextboxClass, "_setTextboxClass");
var ElementClasses = [];
window.__cconst = const_default;
var Vector42 = Vector4;
var EnumProperty2 = EnumProperty;
var Area;
var _setAreaClass = /* @__PURE__ */ __name((cls2) => {
  Area = cls2;
}, "_setAreaClass");
var ErrorColors = {
  WARNING: "yellow",
  ERROR: "red",
  OK: "green"
};
window.__theme = theme;
var registered_has_happened = false;
var tagPrefix = "";
var EventCBSymbol = Symbol("wrapped event callback");
function calcElemCBKey(elem, type, options) {
  return elem._id + ":" + type + ":" + JSON.stringify(options || {});
}
__name(calcElemCBKey, "calcElemCBKey");
function setTagPrefix(prefix3) {
  if (registered_has_happened) {
    throw new Error("have to call ui_base.setTagPrefix before loading any other path.ux modules");
  }
  tagPrefix = "" + prefix3;
}
__name(setTagPrefix, "setTagPrefix");
function getTagPrefix(prefix3) {
  return tagPrefix;
}
__name(getTagPrefix, "getTagPrefix");
var prefix2 = document.getElementById("pathux-tag-prefix");
if (prefix2) {
  console.log("Found pathux-tag-prefix element");
  prefix2 = prefix2.innerText.trim();
  setTagPrefix(prefix2);
}
var class_idgen = 1;
function setTheme(theme2) {
  for (let k2 in theme2) {
    let v = theme2[k2];
    if (typeof v !== "object") {
      theme[k2] = v;
      continue;
    }
    let v0 = theme[k2];
    if (!(k2 in theme)) {
      theme[k2] = {};
    }
    for (let k22 in v) {
      if (k22 in compatMap) {
        let k3 = compatMap[k22];
        if (v[k3] === void 0) {
          v[k3] = v[k22];
        }
        delete v[k22];
        k22 = k3;
      }
      theme[k2][k22] = v[k22];
    }
  }
}
__name(setTheme, "setTheme");
setTheme(DefaultTheme);
var _last_report = time_ms();
function report2() {
  if (time_ms() - _last_report > 350) {
    console.warn(...arguments);
    _last_report = time_ms();
  }
}
__name(report2, "report");
function getDefault(key2, elem) {
  console.warn("Deprecated call to ui_base.js:getDefault");
  if (key2 in theme.base) {
    return theme.base[key2];
  } else {
    throw new Error("Unknown default " + key2);
  }
}
__name(getDefault, "getDefault");
function IsMobile() {
  console.warn("ui_base.IsMobile is deprecated; use util.isMobile instead");
  return isMobile();
}
__name(IsMobile, "IsMobile");
;
var keys = ["margin", "padding", "margin-block-start", "margin-block-end"];
keys = keys.concat(["padding-block-start", "padding-block-end"]);
keys = keys.concat(["margin-left", "margin-top", "margin-bottom", "margin-right"]);
keys = keys.concat(["padding-left", "padding-top", "padding-bottom", "padding-right"]);
var marginPaddingCSSKeys = keys;
var _IconManager = class {
  static {
    __name(this, "_IconManager");
  }
  constructor(image, tilesize, number_of_horizontal_tiles, drawsize) {
    this.tilex = number_of_horizontal_tiles;
    this.tilesize = tilesize;
    this.drawsize = drawsize;
    this.customIcons = /* @__PURE__ */ new Map();
    this.image = image;
    this.promise = void 0;
    this._accept = void 0;
    this._reject = void 0;
  }
  get ready() {
    return this.image && this.image.width;
  }
  onReady() {
    if (this.ready) {
      return new Promise((accept, reject) => {
        accept(this);
      });
    }
    if (this.promise) {
      return this.promise;
    }
    let onload = this.image.onload;
    this.image.onload = (e2) => {
      if (onload) {
        onload.call(this.image, e2);
      }
      if (!this._accept) {
        return;
      }
      let accept = this._accept;
      this._accept = this._reject = this.promise = void 0;
      if (this.image.width) {
        accept(this);
      }
    };
    this.promise = new TimeoutPromise((accept, reject) => {
      this._accept = accept;
      this._reject = reject;
    }, 15e3, true);
    this.promise.catch((error) => {
      print_stack(error);
      this.promise = this._accept = this._reject = void 0;
    });
    return this.promise;
  }
  canvasDraw(elem, canvas, g, icon, x = 0, y = 0) {
    let customIcon = this.customIcons.get(icon);
    if (customIcon) {
      g.drawImage(customIcon.canvas, x, y);
      return;
    }
    let tx = icon % this.tilex;
    let ty = ~~(icon / this.tilex);
    let dpi = elem.getDPI();
    let ts = this.tilesize;
    let ds = this.drawsize;
    if (!this.image) {
      return;
    }
    try {
      g.drawImage(this.image, tx * ts, ty * ts, ts, ts, x, y, ds * dpi, ds * dpi);
    } catch (error) {
      console.log(this.image);
      console.error(error.stack);
      console.error(error.message);
      console.error("failed to draw an icon");
    }
  }
  setCSS(icon, dom, fitsize = void 0) {
    if (!fitsize) {
      fitsize = this.drawsize;
    }
    if (typeof fitsize === "object") {
      fitsize = Math.max(fitsize[0], fitsize[1]);
    }
    dom.style["background"] = this.getCSS(icon, fitsize);
    if (this.customIcons.has(icon)) {
      dom.style["background-size"] = fitsize + "px";
    } else {
      dom.style["background-size"] = fitsize * this.tilex + "px";
    }
    dom.style["background-clip"] = "content-box";
    if (!dom.style["width"]) {
      dom.style["width"] = this.drawsize + "px";
    }
    if (!dom.style["height"]) {
      dom.style["height"] = this.drawsize + "px";
    }
  }
  //icon is an integer
  getCSS(icon, fitsize = this.drawsize) {
    if (icon === -1) {
      return "";
    }
    if (typeof fitsize === "object") {
      fitsize = Math.max(fitsize[0], fitsize[1]);
    }
    let ratio = fitsize / this.tilesize;
    let customIcon = this.customIcons.get(icon);
    if (customIcon !== void 0) {
      let d = 0;
      let css = `url("${customIcon.blobUrl}")`;
      return css;
    }
    let x = -(icon % this.tilex) * this.tilesize * ratio;
    let y = -~~(icon / this.tilex) * this.tilesize * ratio;
    return `url("${this.image.src}") ${x}px ${y}px`;
  }
};
var CustomIcon = class {
  static {
    __name(this, "CustomIcon");
  }
  constructor(manager3, key2, id, baseImage) {
    this.key = key2;
    this.baseImage = baseImage;
    this.images = [];
    this.id = id;
    this.manager = manager3;
  }
  regenIcons() {
    let manager3 = this.manager;
    let doSheet = /* @__PURE__ */ __name((sheet) => {
      let size = sheet.drawsize;
      let canvas = document.createElement("canvas");
      let g = canvas.getContext("2d");
      canvas.width = canvas.height = size;
      g.drawImage(this.baseImage, 0, 0, size, size);
      canvas.toBlob((blob) => {
        let blobUrl = URL.createObjectURL(blob);
        sheet.customIcons.set(this.id, {
          blobUrl,
          canvas
        });
      });
    }, "doSheet");
    for (let sheet of manager3.iconsheets) {
      doSheet(sheet);
    }
  }
};
var IconManager = class {
  static {
    __name(this, "IconManager");
  }
  /**
     images is a list of dom ids of img tags
  
     sizes is a list of tile sizes, one per image.
     you can control the final *draw* size by passing an array
     of [tilesize, drawsize] instead of just a number.
     */
  constructor(images, sizes, horizontal_tile_count) {
    this.iconsheets = [];
    this.tilex = horizontal_tile_count;
    this.customIcons = /* @__PURE__ */ new Map();
    this.customIconIDMap = /* @__PURE__ */ new Map();
    for (let i2 = 0; i2 < images.length; i2++) {
      let size, drawsize;
      if (typeof sizes[i2] == "object") {
        size = sizes[i2][0], drawsize = sizes[i2][1];
      } else {
        size = drawsize = sizes[i2];
      }
      if (isMobile()) {
        drawsize = ~~(drawsize * theme.base.mobileSizeMultiplier);
      }
      this.iconsheets.push(new _IconManager(images[i2], size, horizontal_tile_count, drawsize));
    }
  }
  isReady(sheet = 0) {
    return this.iconsheets[sheet].ready;
  }
  addCustomIcon(key2, image) {
    let icon = this.customIcons.get(key2);
    if (!icon) {
      let maxid = 0;
      for (let k2 in Icons) {
        maxid = Math.max(maxid, Icons[k2] + 1);
      }
      for (let icon2 of this.customIcons.values()) {
        maxid = Math.max(maxid, icon2.id + 1);
      }
      maxid = Math.max(maxid, 1e3);
      let id = maxid;
      icon = new CustomIcon(this, key2, id, image);
      this.customIcons.set(key2, icon);
      this.customIconIDMap.set(id, icon);
    }
    icon.baseImage = image;
    icon.regenIcons();
    return icon.id;
  }
  load(manager22) {
    this.iconsheets = manager22.iconsheets;
    this.tilex = manager22.tilex;
    return this;
  }
  reset(horizontal_tile_count) {
    this.iconsheets.length = 0;
    this.tilex = horizontal_tile_count;
  }
  add(image, size, drawsize = size) {
    this.iconsheets.push(new _IconManager(image, size, this.tilex, drawsize));
    return this;
  }
  canvasDraw(elem, canvas, g, icon, x = 0, y = 0, sheet = 0) {
    let base = this.iconsheets[sheet];
    sheet = this.findSheet(sheet);
    let ds = sheet.drawsize;
    sheet.drawsize = base.drawsize;
    sheet.canvasDraw(elem, canvas, g, icon, x, y);
    sheet.drawsize = ds;
  }
  findClosestSheet(size) {
    let sheets = this.iconsheets.concat([]);
    sheets.sort((a3, b) => a3.drawsize - b.drawsize);
    let sheet;
    for (let i2 = 0; i2 < sheets.length; i2++) {
      if (sheets[i2].drawsize <= size) {
        sheet = sheets[i2];
        break;
      }
    }
    if (!sheet)
      sheet = sheets[sheets.length - 1];
    return this.iconsheets.indexOf(sheet);
  }
  findSheet(sheet) {
    if (sheet === void 0) {
      console.warn("sheet was undefined");
      sheet = 0;
    }
    let base = this.iconsheets[sheet];
    let dpi = UIBase2.getDPI();
    let minsheet = void 0;
    let goal = dpi * base.drawsize;
    for (let sheet2 of this.iconsheets) {
      minsheet = sheet2;
      if (sheet2.drawsize >= goal) {
        break;
      }
    }
    return minsheet === void 0 ? base : minsheet;
  }
  getTileSize(sheet = 0) {
    return this.iconsheets[sheet].drawsize;
    return this.findSheet(sheet).drawsize;
  }
  getRealSize(sheet = 0) {
    return this.iconsheets[sheet].tilesize;
    return this.findSheet(sheet).tilesize;
  }
  //icon is an integer
  getCSS(icon, sheet = 0) {
    let base = this.iconsheets[sheet];
    sheet = this.findSheet(sheet);
    let ds = sheet.drawsize;
    sheet.drawsize = base.drawsize;
    let ret2 = sheet.getCSS(icon);
    sheet.drawsize = ds;
    return ret2;
  }
  setCSS(icon, dom, sheet = 0, fitsize = void 0) {
    let base = this.iconsheets[sheet];
    sheet = this.findSheet(sheet);
    let ds = sheet.drawsize;
    sheet.drawsize = base.drawsize;
    let ret2 = sheet.setCSS(icon, dom, fitsize);
    sheet.drawsize = ds;
    return ret2;
  }
};
var iconmanager = new IconManager([
  document.getElementById("iconsheet16"),
  document.getElementById("iconsheet32"),
  document.getElementById("iconsheet48")
], [16, 32, 64], 16);
window._iconmanager = iconmanager;
var IconSheets = {
  SMALL: 0,
  LARGE: 1,
  XLARGE: 2
};
function iconSheetFromPackFlag(flag) {
  if (flag & PackFlags.CUSTOM_ICON_SHEET) {
    return flag >> PackFlags.CUSTOM_ICON_SHEET_START;
  }
  if (flag & PackFlags.SMALL_ICON && !PackFlags.LARGE_ICON) {
    return 0;
  } else {
    return 1;
  }
}
__name(iconSheetFromPackFlag, "iconSheetFromPackFlag");
function getIconManager() {
  return iconmanager;
}
__name(getIconManager, "getIconManager");
function setIconManager(manager3, IconSheetsOverride) {
  iconmanager.load(manager3);
  if (IconSheetsOverride !== void 0) {
    for (let k2 in IconSheetsOverride) {
      IconSheets[k2] = IconSheetsOverride[k2];
    }
  }
}
__name(setIconManager, "setIconManager");
function makeIconDiv(icon, sheet = 0) {
  let size = iconmanager.getRealSize(sheet);
  let drawsize = iconmanager.getTileSize(sheet);
  let icontest = document.createElement("div");
  icontest.style["width"] = icontest.style["min-width"] = drawsize + "px";
  icontest.style["height"] = icontest.style["min-height"] = drawsize + "px";
  icontest.style["margin"] = "0px";
  icontest.style["padding"] = "0px";
  iconmanager.setCSS(icon, icontest, sheet);
  return icontest;
}
__name(makeIconDiv, "makeIconDiv");
var Vector23 = Vector2;
var Matrix42 = Matrix4;
var dpistack = [];
var UIFlags = {};
var internalElementNames = {};
var externalElementNames = {};
var PackFlags = {
  INHERIT_WIDTH: 1,
  INHERIT_HEIGHT: 2,
  VERTICAL: 4,
  USE_ICONS: 8,
  SMALL_ICON: 16,
  LARGE_ICON: 32,
  FORCE_PROP_LABELS: 64,
  //force propeties (Container.prototype.prop()) to always have labels
  PUT_FLAG_CHECKS_IN_COLUMNS: 128,
  //group flag property checkmarks in columns (doesn't apply to icons)
  WRAP_CHECKBOXES: 256,
  //internal flags
  STRIP_HORIZ: 512,
  STRIP_VERT: 1024,
  STRIP: 512 | 1024,
  SIMPLE_NUMSLIDERS: 2048,
  FORCE_ROLLER_SLIDER: 4096,
  HIDE_CHECK_MARKS: 1 << 13,
  NO_NUMSLIDER_TEXTBOX: 1 << 14,
  CUSTOM_ICON_SHEET: 1 << 15,
  CUSTOM_ICON_SHEET_START: 20,
  //custom icon sheet bits are shifted to here
  NO_UPDATE: 1 << 16,
  LABEL_ON_RIGHT: 1 << 17
};
var first2 = /* @__PURE__ */ __name((iter) => {
  if (iter === void 0) {
    return void 0;
  }
  if (!(Symbol.iterator in iter)) {
    for (let item in iter) {
      return item;
    }
    return void 0;
  }
  for (let item of iter) {
    return item;
  }
}, "first");
var _mobile_theme_patterns = [
  /.*width.*/,
  /.*height.*/,
  /.*size.*/,
  /.*margin.*/,
  /.*pad/,
  /.*radius.*/
];
var _idgen2 = 0;
window._testSetScrollbars = function(color = "grey", contrast = 0.5, width = 15, border = "solid") {
  let buf = styleScrollBars(color, void 0, contrast, width, border, "*");
  CTX.screen.mergeGlobalCSS(buf);
  return buf;
};
function styleScrollBars(color = "grey", color2 = void 0, contrast = 0.5, width = 15, border = "1px groove black", selector = "*") {
  if (!color2) {
    let c = css2color(color);
    let a3 = c.length > 3 ? c[3] : 1;
    c = rgb_to_hsv(c[0], c[1], c[2]);
    let inv = c.slice(0, c.length);
    inv[2] = 1 - inv[2];
    inv[2] += (c[2] - inv[2]) * (1 - contrast);
    inv = hsv_to_rgb(inv[0], inv[1], inv[2]);
    inv.length = 4;
    inv[3] = a3;
    inv = color2css(inv);
    color2 = inv;
  }
  let buf = `

${selector} {
  scrollbar-width : ${width <= 16 ? "thin" : "auto"};
  scrollbar-color : ${color2} ${color};
}

${selector}::-webkit-scrollbar {
  width : ${width}px;
  background-color : ${color};
}

${selector}::-webkit-scrollbar-track {
  background-color : ${color};
  border : ${border};
}

${selector}::-webkit-scrollbar-thumb {
  background-color : ${color2};
  border : ${border};
}
    `;
  return buf;
}
__name(styleScrollBars, "styleScrollBars");
window.styleScrollBars = styleScrollBars;
var _digest2 = new HashDigest();
function calcThemeKey(digest = _digest2.reset()) {
  for (let k2 in theme) {
    let obj2 = theme[k2];
    if (typeof obj2 !== "object") {
      continue;
    }
    for (let k22 in obj2) {
      let v2 = obj2[k22];
      if (typeof v2 === "number" || typeof v2 === "boolean" || typeof v2 === "string") {
        digest.add(v2);
      } else if (typeof v2 === "object" && v2 instanceof CSSFont) {
        v2.calcHashUpdate(digest);
      }
    }
  }
  return digest.get();
}
__name(calcThemeKey, "calcThemeKey");
var _themeUpdateKey = calcThemeKey();
function flagThemeUpdate() {
  _themeUpdateKey = calcThemeKey();
}
__name(flagThemeUpdate, "flagThemeUpdate");
window._flagThemeUpdate = flagThemeUpdate;
var setTimeoutQueue = /* @__PURE__ */ new Set();
var haveTimeout = false;
function timeout_cb() {
  if (setTimeoutQueue.size === 0) {
    haveTimeout = false;
    return;
  }
  for (let item of new Set(setTimeoutQueue)) {
    let { cb, timeout, time } = item;
    if (time_ms() - time < timeout) {
      continue;
    }
    setTimeoutQueue.delete(item);
    try {
      cb();
    } catch (error) {
      console.error(error.stack);
    }
  }
  window.setTimeout(timeout_cb, 0);
}
__name(timeout_cb, "timeout_cb");
function internalSetTimeout(cb, timeout) {
  if (timeout > 100) {
    window.setTimeout(cb, timeout);
    return;
  }
  setTimeoutQueue.add({
    cb,
    timeout,
    time: time_ms()
  });
  if (!haveTimeout) {
    haveTimeout = true;
    window.setTimeout(timeout_cb, 0);
  }
}
__name(internalSetTimeout, "internalSetTimeout");
window.setTimeoutQueue = setTimeoutQueue;
var UIBase2 = class _UIBase extends HTMLElement {
  static {
    __name(this, "UIBase");
  }
  #reflagGraph = false;
  static graphNodeDef = EventNode.register(this, {
    typeName: this.name,
    uiName: this.name,
    inputs: {
      depend: new DependSocket()
    },
    outputs: {
      depend: new DependSocket()
    }
  });
  graphExec() {
    let node = this.graphNode;
    if (node.inputs.depend.isUpdated) {
      node.outputs.depend.flagUpdate();
    }
    for (let k2 in node.inputs) {
      let sock = node.inputs[k2];
      if (!(sock instanceof PropertySocket)) {
        continue;
      }
      let val2 = sock.value;
      let first3 = true;
      for (let sockb of sock.edges) {
        if (first3) {
          val2 = sockb.value;
          first3 = false;
        } else {
          switch (sock.mixMode) {
            case PropSocketModes.REPLACE:
              val2 = sockb.value;
              break;
            case PropSocketModes.MIN:
              val2 = Math.min(val2, sockb.value);
              break;
            case PropSocketModes.MAX:
              val2 = Math.max(val2, sockb.value);
              break;
          }
        }
      }
      sock.value = val2;
    }
    function isNumArray(a3) {
      if (!Array.isArray(a3)) {
        return false;
      }
      for (let i2 = 0; i2 < a3.length; i2++) {
        if (a3[i2] !== void 0 && typeof a3[i2] !== "number" && typeof a3[i2] !== "boolean") {
          return false;
        }
      }
      return true;
    }
    __name(isNumArray, "isNumArray");
    for (let k2 in node.outputs) {
      let sock = node.outputs[k2];
      if (!(sock instanceof PropertySocket)) {
        continue;
      }
      let v = sock.value;
      let changed;
      if (typeof v === "boolean" || typeof v === "string" || typeof v === "number") {
        changed = v !== sock.oldValue;
        sock.oldValue = v;
      } else if (typeof v === "object") {
        if (isNumArray(v)) {
          if (!sock.oldValue) {
            sock.oldValue = Array.from(v);
          } else {
            if (sock.oldValue.length !== v.length) {
              changed = true;
            } else {
              for (let i2 = 0; i2 < sock.oldValue.length; i2++) {
                changed = sock.oldValue[i2] !== v[i2];
              }
            }
            if (sock.oldValue.length !== v.length) {
              sock.oldValue.length = v.length;
            }
            for (let i2 = 0; i2 < v.length; i2++) {
              sock.oldValue[i2] = v.value[i2];
            }
          }
        } else {
          if (sock.oldValue === void 0) {
            sock.oldValue = JSON.stringify(v);
          } else {
            let json2 = JSON.stringify(v);
            changed = json2 !== sock.oldValue;
            sock.oldValue = json2;
          }
        }
      }
      if (changed) {
        console.log("Propagating prop update");
        sock.flagUpdate();
      }
    }
  }
  ensureGraph() {
    console.log("Ensure Graph", this, this.graphNode, this.graphNode.id);
    if (!theEventGraph.has(this)) {
      theEventGraph.add(this);
    }
  }
  flagPropSocketUpdate(path) {
    let sock = this.getPropertySocket(path, SocketTypes.OUTPUT);
    if (sock) {
      console.warn(`Flag socket "${path}" for update`);
      sock.flagUpdate();
    }
    return this;
  }
  getPropertySocket(prop, socktype) {
    let node = this.graphNode;
    let sockets = socktype === SocketTypes.INPUT ? node.inputs : node.outputs;
    if (sockets[prop]) {
      return sockets[prop];
    }
    return void 0;
  }
  ensurePropertySocket(prop, socktype) {
    this.ensureGraph();
    let node = this.graphNode;
    let sockets = socktype === SocketTypes.INPUT ? node.inputs : node.outputs;
    if (sockets[prop]) {
      return sockets[prop];
    }
    let sock = new PropertySocket();
    sock.bind(this, prop);
    node.addSocket(socktype, prop, sock);
    if (prop === "value") {
      sock.callback((v) => {
        if (this.getValue) {
          return this.getValue();
        }
        return this.value;
      });
    }
    return sock;
  }
  /*
    widget.dependsOn("hidden", checkbox, "value")
   */
  dependsOn(dstProp, source, srcProp, srcCallback = void 0, dstCallback = void 0) {
    let sockdst = this.ensurePropertySocket(dstProp, SocketTypes.INPUT);
    let socksrc = source.ensurePropertySocket(srcProp, SocketTypes.OUTPUT);
    if (srcCallback) {
      socksrc.callback(srcCallback);
    }
    sockdst.connect(socksrc);
    return sockdst;
  }
  constructor() {
    super();
    EventNode.init(this);
    this._modalstack = [];
    this._tool_tip_abort_delay = void 0;
    this._tooltip_ref = void 0;
    this._textBoxEvents = false;
    this._themeOverride = void 0;
    this._checkTheme = true;
    this._last_theme_update_key = _themeUpdateKey;
    this._client_disabled_set = void 0;
    this._useNativeToolTips = const_default.useNativeToolTips;
    this._useNativeToolTips_set = false;
    this._has_own_tooltips = void 0;
    this._tooltip_timer = time_ms();
    this.pathUndoGen = 0;
    this._lastPathUndoGen = 0;
    this._useDataPathUndo = void 0;
    this._active_animations = [];
    this._screenStyleTag = document.createElement("style");
    this._screenStyleUpdateHash = 0;
    initAspectClass(this, /* @__PURE__ */ new Set(["appendChild", "animate", "shadow", "removeNode", "prepend", "add", "init"]));
    this.shadow = this.attachShadow({ mode: "open" });
    if (const_default.DEBUG.paranoidEvents) {
      this.__cbs = [];
    }
    this.shadow.appendChild(this._screenStyleTag);
    this.shadow._appendChild = this.shadow.appendChild;
    let appendChild = this.shadow.appendChild;
    this.shadow.appendChild = (child) => {
      if (child && typeof child === "object" && child instanceof _UIBase) {
        child.parentWidget = this;
      }
      return this.shadow._appendChild(child, ...arguments);
    };
    this._wasAddedToNodeAtSomeTime = false;
    this.visibleToPick = true;
    this._override_class = void 0;
    this.parentWidget = void 0;
    let tagname = this.constructor.define().tagname;
    this._id = tagname.replace(/\-/g, "_") + _idgen2++;
    this.default_overrides = {};
    this.my_default_overrides = {};
    this.class_default_overrides = {};
    this._last_description = void 0;
    this._description_final = void 0;
    this._modaldata = void 0;
    this.packflag = this.getDefault("BasePackFlag");
    this._internalDisabled = false;
    this.__disabledState = false;
    this._disdata = void 0;
    this._ctx = void 0;
    this._description = void 0;
    let style = document.createElement("style");
    style.textContent = `
    .DefaultText {
      font: ` + _getFont(this) + `;
    }
    `;
    this.shadow.appendChild(style);
    this._init_done = false;
    let do_touch = /* @__PURE__ */ __name((e2, type, button) => {
      if (haveModal()) {
        return;
      }
      button = button === void 0 ? 0 : button;
      let e22 = copyEvent(e2);
      if (e2.touches.length === 0) {
      } else {
        let t = e2.touches[0];
        e22.pageX = t.pageX;
        e22.pageY = t.pageY;
        e22.screenX = t.screenX;
        e22.screenY = t.screenY;
        e22.clientX = t.clientX;
        e22.clientY = t.clientY;
        e22.x = t.x;
        e22.y = t.y;
      }
      e22.button = button;
      e22 = new MouseEvent(type, e22);
      e22.was_touch = true;
      e22.stopPropagation = e2.stopPropagation.bind(e2);
      e22.preventDefault = e2.preventDefault.bind(e2);
      e22.touches = e2.touches;
      this.dispatchEvent(e22);
    }, "do_touch");
    this.addEventListener("touchstart", (e2) => {
      do_touch(e2, "mousedown", 0);
    }, { passive: false });
    this.addEventListener("touchmove", (e2) => {
      do_touch(e2, "mousemove");
    }, { passive: false });
    this.addEventListener("touchcancel", (e2) => {
      do_touch(e2, "mouseup", 2);
    }, { passive: false });
    this.addEventListener("touchend", (e2) => {
      do_touch(e2, "mouseup", 0);
    }, { passive: false });
    if (this.constructor.define().havePickClipboard) {
      this._clipboardHotkeyInit();
    }
  }
  /*
    set default_overrides(v) {
      console.error("default_overrides was set", v);
      this._default_overrides = v;
    }
  
    get default_overrides() {
      return this._default_overrides;
    }//*/
  get useNativeToolTips() {
    return this._useNativeToolTips;
  }
  set useNativeToolTips(val2) {
    this._useNativeToolTips = val2;
    this._useNativeToolTips_set = true;
  }
  get parentWidget() {
    return this._parentWidget;
  }
  set parentWidget(val2) {
    if (val2) {
      this._wasAddedToNodeAtSomeTime = true;
    }
    this._parentWidget = val2;
  }
  get useDataPathUndo() {
    let p = this;
    while (p) {
      if (p._useDataPathUndo !== void 0) {
        return p._useDataPathUndo;
      }
      p = p.parentWidget;
    }
    return true;
  }
  /**
     causes calls to setPathValue to go through
     toolpath app.datapath_set(path="" newValueJSON="")
  
     every child will inherit
     */
  set useDataPathUndo(val2) {
    this._useDataPathUndo = val2;
  }
  get description() {
    return this._description;
  }
  set description(val2) {
    if (val2 === null) {
      this._description = void 0;
      return;
    }
    this._description = val2;
    if (val2 === void 0 || val2 === null) {
      return;
    }
    if (const_default.showPathsInToolTips && this.hasAttribute("datapath")) {
      let s = "" + this._description;
      let path = this.getAttribute("datapath");
      s += "\n    path: " + path;
      if (this.hasAttribute("mass_set_path")) {
        let m = this.getAttribute("mass_set_path");
        s += "\n    massSetPath: " + m;
      }
      this._description_final = s;
    } else {
      this._description_final = this._description;
    }
    if (const_default.useNativeToolTips) {
      this.title = "" + this._description_final;
    }
  }
  get background() {
    return this.__background;
  }
  set background(bg) {
    this.__background = bg;
    this.overrideDefault("background-color", bg, true);
    this.style["background-color"] = bg;
  }
  get disabled() {
    if (this.parentWidget && this.parentWidget.disabled) {
      return true;
    }
    return !!this._client_disabled_set || !!this._internalDisabled;
  }
  set disabled(v) {
    this._client_disabled_set = v;
    this.__updateDisable(this.disabled);
  }
  get internalDisabled() {
    return this._internalDisabled;
  }
  set internalDisabled(val2) {
    this._internalDisabled = !!val2;
    this.__updateDisable(this.disabled);
  }
  get ctx() {
    return this._ctx;
  }
  set ctx(c) {
    this._ctx = c;
    this._forEachChildWidget((n) => {
      n.ctx = c;
    });
  }
  get _reportCtxName() {
    return "" + this._id;
  }
  get modalRunning() {
    return this._modaldata !== void 0;
  }
  static getIconEnum() {
    return Icons;
  }
  static setDefault(element2) {
    return element2;
  }
  /**DEPRECATED
  
     scaling ratio (e.g. for high-resolution displays)
     */
  static getDPI() {
    return window.devicePixelRatio;
    return window.devicePixelRatio;
  }
  static prefix(name) {
    return tagPrefix + name;
  }
  static internalRegister(cls2) {
    cls2[ClassIdSymbol] = class_idgen++;
    registered_has_happened = true;
    internalElementNames[cls2.define().tagname] = this.prefix(cls2.define().tagname);
    customElements.define(this.prefix(cls2.define().tagname), cls2);
  }
  static getInternalName(name) {
    return internalElementNames[name];
  }
  static createElement(name, internal = false) {
    if (!internal && name in externalElementNames) {
      return document.createElement(name);
    } else if (name in internalElementNames) {
      return document.createElement(internalElementNames[name]);
    } else {
      return document.createElement(name);
    }
  }
  static register(cls2) {
    registered_has_happened = true;
    cls2[ClassIdSymbol] = class_idgen++;
    ElementClasses.push(cls2);
    externalElementNames[cls2.define().tagname] = cls2.define().tagname;
    customElements.define(cls2.define().tagname, cls2);
  }
  /**
   * Defines core attributes of the class
   *
   * @example
   *
   * static define() {return {
   *   tagname             : "custom-element-x",
   *   style               : "[style class in theme]"
   *   subclassChecksTheme : boolean //set to true to disable base class invokation of checkTheme()
   *   havePickClipboard   : boolean //whether element supports mouse hover copy/paste
   *   pasteForAllChildren : boolean //mouse hover paste happens even over child widgets
   *   copyForAllChildren  : boolean //mouse hover copy happens even over child widgets
   * }}
   */
  static define() {
    throw new Error("Missing define() for ux element");
  }
  setUndo(val2) {
    this.useDataPathUndo = val2;
    return this;
  }
  set hidden(state) {
    state = !!state;
    super.hidden = state;
    for (let n of this.shadow.childNodes) {
      n.hidden = state;
    }
    this._forEachChildWidget((n) => {
      n.hide(state);
    });
  }
  get hidden() {
    return super.hidden;
  }
  hide(sethide = true) {
    this.hidden = sethide;
    return this;
  }
  getElementById(id) {
    let ret2;
    let rec = /* @__PURE__ */ __name((n) => {
      if (ret2) {
        return;
      }
      if (n.getAttribute("id") === id || n.id === id) {
        ret2 = n;
      }
      if (n instanceof _UIBase && n.constructor.define().tagname === "panelframe-x") {
        rec(n.contents);
      } else if (n instanceof _UIBase && n.constructor.define().tagname === "tabcontainer-x") {
        for (let k2 in n.tabs) {
          let tab2 = n.tabs[k2];
          if (tab2) {
            rec(tab2);
          }
        }
      }
      for (let n2 of n.childNodes) {
        if (n2 instanceof HTMLElement) {
          rec(n2);
          if (ret2) {
            break;
          }
        }
      }
      if (n.shadow) {
        for (let n2 of n.shadow.childNodes) {
          if (n2 instanceof HTMLElement) {
            rec(n2);
            if (ret2) {
              break;
            }
          }
        }
      }
    }, "rec");
    rec(this);
    return ret2;
  }
  unhide() {
    this.hide(false);
  }
  findArea() {
    let p = this;
    while (p) {
      if (p instanceof Area) {
        return p;
      }
      p = p.parentWidget;
    }
    return p;
  }
  addEventListener(type, cb, options) {
    if (const_default.DEBUG.domEventAddRemove) {
      console.log("addEventListener", type, this._id, options);
    }
    let cb2 = /* @__PURE__ */ __name((e2) => {
      if (const_default.DEBUG.paranoidEvents) {
        if (this.isDead()) {
          this.removeEventListener(type, cb, options);
          return;
        }
      }
      if (const_default.DEBUG.domEvents) {
        pathDebugEvent(e2);
      }
      let area = this.findArea();
      if (area) {
        area.push_ctx_active();
        try {
          let ret2 = cb(e2);
          area.pop_ctx_active();
          return ret2;
        } catch (error) {
          area.pop_ctx_active();
          throw error;
        }
      } else {
        if (const_default.DEBUG.areaContextPushes) {
          console.warn("Element is not part of an area?", element);
        }
        return cb(e2);
      }
    }, "cb2");
    if (!cb[EventCBSymbol]) {
      cb[EventCBSymbol] = /* @__PURE__ */ new Map();
    }
    let key2 = calcElemCBKey(this, type, options);
    cb[EventCBSymbol].set(key2, cb2);
    if (const_default.DEBUG.paranoidEvents) {
      this.__cbs.push([type, cb2, options]);
    }
    return super.addEventListener(type, cb2, options);
  }
  removeEventListener(type, cb, options) {
    if (const_default.DEBUG.paranoidEvents) {
      for (let item of this.__cbs) {
        if (item[0] == type && item[1] === cb._cb2 && "" + item[2] === "" + options) {
          this.__cbs.remove(item);
          break;
        }
      }
    }
    if (const_default.DEBUG.domEventAddRemove) {
      console.log("removeEventListener", type, this._id, options);
    }
    let key2 = calcElemCBKey(this, type, options);
    if (!cb[EventCBSymbol] || !cb[EventCBSymbol].has(key2)) {
      return super.removeEventListener(type, cb, options);
    } else {
      let cb2 = cb[EventCBSymbol].get(key2);
      let ret2 = super.removeEventListener(type, cb2, options);
      cb[EventCBSymbol].delete(key2);
      return ret2;
    }
  }
  connectedCallback() {
  }
  noMarginsOrPadding() {
    let keys2 = ["margin", "padding", "margin-block-start", "margin-block-end"];
    keys2 = keys2.concat(["padding-block-start", "padding-block-end"]);
    keys2 = keys2.concat(["margin-left", "margin-top", "margin-bottom", "margin-right"]);
    keys2 = keys2.concat(["padding-left", "padding-top", "padding-bottom", "padding-right"]);
    for (let k2 of keys2) {
      this.style[k2] = "0px";
    }
    return this;
  }
  /**
   * find owning screen and tell it to update
   * the global tab order
   * */
  regenTabOrder() {
    let screen = this.getScreen();
    if (screen !== void 0) {
      screen.needsTabRecalc = true;
    }
    return this;
  }
  noMargins() {
    this.style["margin"] = this.style["margin-left"] = this.style["margin-right"] = "0px";
    this.style["margin-top"] = this.style["margin-bottom"] = "0px";
    return this;
  }
  noPadding() {
    this.style["padding"] = this.style["padding-left"] = this.style["padding-right"] = "0px";
    this.style["padding-top"] = this.style["padding-bottom"] = "0px";
    return this;
  }
  getTotalRect() {
    let found = false;
    let min3 = new Vector23([1e17, 1e17]);
    let max3 = new Vector23([-1e17, -1e17]);
    let doaabb = /* @__PURE__ */ __name((n) => {
      let rs = n.getClientRects();
      for (let r of rs) {
        min3[0] = Math.min(min3[0], r.x);
        min3[1] = Math.min(min3[1], r.y);
        max3[0] = Math.max(max3[0], r.x + r.width);
        max3[1] = Math.max(max3[1], r.y + r.height);
        found = true;
      }
    }, "doaabb");
    doaabb(this);
    this._forEachChildWidget((n) => {
      doaabb(n);
    });
    if (found) {
      return {
        width: max3[0] - min3[0],
        height: max3[1] - min3[1],
        x: min3[0],
        y: min3[1],
        left: min3[0],
        top: min3[1],
        right: max3[0],
        bottom: max3[1]
      };
    } else {
      return void 0;
    }
  }
  parseNumber(value2, args2 = {}) {
    value2 = ("" + value2).trim().toLowerCase();
    let baseUnit = args2.baseUnit || this.baseUnit;
    let isInt = args2.isInt || this.isInt;
    let sign2 = 1;
    if (value2.startsWith("-")) {
      value2 = value2.slice(1, value2.length).trim();
      sign2 = -1;
    }
    let hexre = /-?[0-9a-f]+h$/;
    if (value2.startsWith("0b")) {
      value2 = value2.slice(2, value2.length).trim();
      value2 = parseInt(value2, 2);
    } else if (value2.startsWith("0x")) {
      value2 = value2.slice(2, value2.length).trim();
      value2 = parseInt(value2, 16);
    } else if (value2.search(hexre) === 0) {
      value2 = value2.slice(0, value2.length - 1).trim();
      value2 = parseInt(value2, 16);
    } else {
      value2 = parseValue(value2, baseUnit);
    }
    if (isInt) {
      value2 = ~~value2;
    }
    return value2 * sign2;
  }
  formatNumber(value2, args2 = {}) {
    let baseUnit = args2.baseUnit || this.baseUnit;
    let displayUnit = args2.displayUnit || this.displayUnit;
    let isInt = args2.isInt || this.isInt;
    let radix = args2.radix || this.radix || 10;
    let decimalPlaces = args2.decimalPlaces || this.decimalPlaces;
    if (isInt && radix !== 10) {
      let ret2 = Math.floor(value2).toString(radix);
      if (radix === 2)
        return "0b" + ret2;
      else if (radix === 16)
        return ret2 + "h";
    }
    return buildString(value2, baseUnit, decimalPlaces, displayUnit);
  }
  setBoxCSS(subkey) {
    let boxcode = "";
    let keys2 = ["left", "right", "top", "bottom"];
    let sub;
    if (subkey) {
      sub = this.getAttribute(subkey) || {};
    }
    let def = /* @__PURE__ */ __name((key2) => {
      if (sub) {
        return this.getSubDefault(subkey, key2);
      }
      return this.getDefault(key2);
    }, "def");
    for (let i2 = 0; i2 < 2; i2++) {
      let key2 = i2 ? "padding" : "margin";
      this.style[key2] = "unset";
      let val2 = def(key2);
      if (val2 !== void 0) {
        for (let j2 = 0; j2 < 4; j2++) {
          this.style[key2 + "-" + keys2[j2]] = val2 + "px";
        }
      }
      for (let j2 = 0; j2 < 4; j2++) {
        let key22 = `${key2}-${keys2[j2]}`;
        let val22 = def(key22);
        if (val22 !== void 0) {
          this.style[key22] = val22 + "px";
        }
      }
    }
    this.style["border-radius"] = def("border-radius") + "px";
    this.style["border"] = `${def("border-width")}px ${def("border-style")} ${def("border-color")}`;
  }
  genBoxCSS(subkey) {
    let boxcode = "";
    let keys2 = ["left", "right", "top", "bottom"];
    let sub;
    if (subkey) {
      sub = this.getAttribute(subkey) || {};
    }
    let def = /* @__PURE__ */ __name((key2) => {
      if (sub) {
        return this.getSubDefault(subkey, key2);
      }
      return this.getDefault(key2);
    }, "def");
    for (let i2 = 0; i2 < 2; i2++) {
      let key2 = i2 ? "padding" : "margin";
      let val2 = def(key2);
      if (val2 !== void 0) {
        boxcode += `${key2}: ${val2} px;
`;
      }
      for (let j2 = 0; j2 < 4; j2++) {
        let key22 = `${key2}-${keys2[j2]}`;
        let val22 = def(key22);
        if (val22 !== void 0) {
          boxcode += `${key22}: ${val2}px;
`;
        }
      }
    }
    boxcode += `border-radius: ${def("border-radius")}px;
`;
    boxcode += `border: ${def("border-width")}px ${def("border-style")} ${def("border-color")};
`;
    return boxcode;
  }
  setCSS(setBG = true) {
    if (setBG) {
      let bg = this.getDefault("background-color");
      if (bg) {
        this.style["background-color"] = bg;
      }
    }
    let zoom = this.getZoom();
    if (zoom === 1) {
      return;
    }
    let transform = "" + this.style["transform"];
    transform = transform.replace(/[ \t\n\r]+/g, " ");
    transform = transform.replace(/, /g, ",");
    let transform2 = transform.replace(/scale\([^)]+\)/, "").trim();
    this.style["transform"] = transform2 + ` scale(${zoom},${zoom})`;
  }
  flushSetCSS() {
    this._init();
    this.setCSS();
    this._forEachChildWidget((c) => {
      if (!(c.packflag & PackFlags.NO_UPDATE)) {
        c.flushSetCSS();
      }
    });
  }
  /* Why is the DOM API argument order swapped here?*/
  replaceChild(newnode, node) {
    for (let i2 = 0; i2 < this.childNodes.length; i2++) {
      if (this.childNodes[i2] === node) {
        super.replaceChild(newnode, node);
        return true;
      }
    }
    for (let i2 = 0; i2 < this.shadow.childNodes.length; i2++) {
      if (this.shadow.childNodes[i2] === node) {
        this.shadow.replaceChild(newnode, node);
        return true;
      }
    }
    console.error("Unknown child node", node);
    return false;
  }
  swapWith(b) {
    let p1 = this.parentNode;
    let p2 = b.parentNode;
    if (this.parentWidget && p1 === this.parentWidget.shadow || p1 === null) {
      p1 = this.parentWidget;
    }
    if (b.parentWidget && p2 === b.parentWidget.shadow || p2 === null) {
      p2 = b.parentWidget;
    }
    if (!p1 || !p2) {
      console.error("Invalid call to UIBase.prototype.swapWith", this, b, p1, p2);
      return false;
    }
    let getPos = /* @__PURE__ */ __name((n, p) => {
      let i3 = Array.prototype.indexOf.call(p.childNodes, n);
      if (i3 < 0 && p.shadow) {
        p = p.shadow;
        i3 = Array.prototype.indexOf.call(p.childNodes, n);
      }
      return [i3, p];
    }, "getPos");
    let [i1, n1] = getPos(this, p1);
    let [i2, n2] = getPos(b, p2);
    console.log("i1, i2, n1, n2", i1, i2, n1, n2);
    let tmp1 = document.createElement("div");
    let tmp2 = document.createElement("div");
    n1.insertBefore(tmp1, this);
    n2.insertBefore(tmp2, b);
    n1.replaceChild(b, tmp1);
    n2.replaceChild(this, tmp2);
    let ptmp = this.parentWidget;
    this.parentWidget = b.parentWidget;
    b.parentWidget = ptmp;
    tmp1.remove();
    tmp2.remove();
    return true;
  }
  traverse(type_or_set) {
    let this2 = this;
    let classes = type_or_set;
    let is_set = type_or_set instanceof Set;
    is_set = is_set || type_or_set instanceof set2;
    is_set = is_set || Array.isArray(type_or_set);
    if (!is_set) {
      classes = [type_or_set];
    }
    let visit = /* @__PURE__ */ new Set();
    return function* () {
      let stack = [this2];
      while (stack.length > 0) {
        let n = stack.pop();
        visit.add(n);
        if (!n || !n.childNodes) {
          continue;
        }
        for (let cls2 of classes) {
          if (n instanceof cls2) {
            yield n;
          }
        }
        for (let c of n.childNodes) {
          if (!visit.has(c)) {
            stack.push(c);
          }
        }
        if (n.shadow) {
          for (let c of n.shadow.childNodes) {
            if (!visit.has(c)) {
              stack.push(c);
            }
          }
        }
      }
    }();
  }
  appendChild(child) {
    if (child instanceof _UIBase) {
      child.ctx = this.ctx;
      child.parentWidget = this;
      child.useDataPathUndo = this.useDataPathUndo;
    }
    return super.appendChild(child);
  }
  _clipboardHotkeyInit() {
    this._clipboard_over = false;
    this._last_clipboard_keyevt = void 0;
    this._clipboard_keystart = () => {
      if (this._clipboard_events) {
        return;
      }
      this._clipboard_events = true;
      window.addEventListener("keydown", this._clipboard_keydown, { capture: true, passive: false });
    };
    this._clipboard_keyend = () => {
      if (!this._clipboard_events) {
        return;
      }
      this._clipboard_events = false;
      window.removeEventListener("keydown", this._clipboard_keydown, { capture: true, passive: false });
    };
    this._clipboard_keydown = (e2, internal_mode) => {
      if (!this.isConnected || !const_default.getClipboardData) {
        this._clipboard_keyend();
        return;
      }
      if (e2 === this._last_clipboard_keyevt || !this._clipboard_over) {
        return;
      }
      let is_copy = e2.keyCode === keymap["C"] && (e2.ctrlKey || e2.commandKey) && !e2.shiftKey && !e2.altKey;
      let is_paste = e2.keyCode === keymap["V"] && (e2.ctrlKey || e2.commandKey) && !e2.shiftKey && !e2.altKey;
      if (!is_copy && !is_paste) {
        return;
      }
      if (!internal_mode) {
        let screen = this.ctx.screen;
        let elem = screen.pickElement(screen.mpos[0], screen.mpos[1]);
        let checkTree = is_paste && this.constructor.define().pasteForAllChildren;
        checkTree = checkTree || is_copy && this.constructor.define().copyForAllChildren;
        while (checkTree && !(elem instanceof TextBox) && elem !== this && elem.parentWidget) {
          console.log("  " + elem._id);
          elem = elem.parentWidget;
        }
        console.warn("COLOR", this._id, elem._id);
        if (elem !== this) {
          this._clipboard_keyend();
          return;
        }
      } else {
        console.warn("COLOR", this._id);
      }
      this._last_clipboard_keyevt = e2;
      if (is_copy) {
        this.clipboardCopy();
        e2.preventDefault();
        e2.stopPropagation();
      }
      if (is_paste) {
        this.clipboardPaste();
        e2.preventDefault();
        e2.stopPropagation();
      }
    };
    let start2 = /* @__PURE__ */ __name((e2) => {
      this._clipboard_over = true;
      this._clipboard_keystart();
    }, "start");
    let stop2 = /* @__PURE__ */ __name((e2) => {
      this._clipboard_over = false;
      this._clipboard_keyend();
    }, "stop");
    this.doOnce(() => {
      this.tabIndex = 0;
    });
    this.addEventListener("keydown", (e2) => {
      return this._clipboard_keydown(e2, true);
    });
    this.addEventListener("pointerover", start2, { capture: true, passive: true });
    this.addEventListener("pointerout", stop2, { capture: true, passive: true });
    this.addEventListener("focus", stop2, { capture: true, passive: true });
  }
  /** set havePickClipboard to true in define() to
   *  enable mouseover pick clipboarding */
  clipboardCopy() {
    throw new Error("implement me!");
  }
  clipboardPaste() {
    throw new Error("implement me!");
  }
  //delayed init
  init() {
    this._init_done = true;
    if (!this.hasAttribute("id") && this._id) {
      this.setAttribute("id", this._id);
    }
  }
  _ondestroy() {
    if (this.tabIndex >= 0) {
      this.regenTabOrder();
    }
    if (const_default.DEBUG.paranoidEvents) {
      for (let item of this.__cbs) {
        this.removeEventListener(item[0], item[1], item[2]);
      }
      this.__cbs = [];
    }
    if (this.ondestroy !== void 0) {
      this.ondestroy();
    }
  }
  remove(trigger_on_destroy = true) {
    if (this.tabIndex >= 0) {
      this.regenTabOrder();
    }
    super.remove();
    if (trigger_on_destroy) {
      this._ondestroy();
    }
    if (this.on_remove) {
      this.on_remove();
    }
    this.parentWidget = void 0;
  }
  /*
  *
  * called when elements are removed.
  * you should assume the element will be reused later;
  * on_destroy is the callback for when elements are permanently destroyed
  * */
  on_remove() {
  }
  removeChild(child, trigger_on_destroy = true) {
    super.removeChild(child);
    if (trigger_on_destroy) {
      child._ondestroy();
    }
  }
  flushUpdate(force = false) {
    this._init();
    this.update();
    this._forEachChildWidget((c) => {
      if (force || !(c.packflag & PackFlags.NO_UPDATE)) {
        if (!c.ctx) {
          c.ctx = this.ctx;
        }
        c.flushUpdate(force);
      }
    });
  }
  //used by container nodes
  /**
   * Iterates over all child widgets,
   * including ones that might be inside
   * of normal DOM nodes.
   *
   * This is done by recursing into the dom
   * tree and stopping at any node that's
   * descended from ui_base.UIBase
   **/
  _forEachChildWidget(cb, thisvar) {
    let rec = /* @__PURE__ */ __name((n) => {
      if (n instanceof _UIBase) {
        if (thisvar !== void 0) {
          cb.call(thisvar, n);
        } else {
          cb(n);
        }
      } else {
        for (let n2 of n.childNodes) {
          rec(n2);
        }
        if (n.shadow !== void 0) {
          for (let n2 of n.shadow.childNodes) {
            rec(n2);
          }
        }
      }
    }, "rec");
    for (let n of this.childNodes) {
      rec(n);
    }
    if (this.shadow) {
      for (let n of this.shadow.childNodes) {
        rec(n);
      }
    }
  }
  checkInit() {
    return this._init();
  }
  _init() {
    if (this._init_done) {
      return false;
    }
    this._init_done = true;
    this.init();
    return true;
  }
  getWinWidth() {
    return window.innerWidth;
  }
  getWinHeight() {
    return window.innerHeight;
  }
  calcZ() {
    let p = this;
    let n = this;
    while (n) {
      if (n.style && n.style["z-index"]) {
        let z = parseFloat(n.style["z-index"]);
        return z;
      }
      n = n.parentNode;
      if (!n) {
        n = p = p.parentWidget;
      }
    }
    return 0;
  }
  pickElement(x, y, args2 = {}, marginy = 0, nodeclass = _UIBase, excluded_classes = void 0) {
    let clip2;
    let mouseEvent;
    let isMouseMove, isMouseDown2;
    if (typeof args2 === "object") {
      nodeclass = args2.nodeclass || _UIBase;
      excluded_classes = args2.excluded_classes;
      clip2 = args2.clip;
      mouseEvent = args2.mouseEvent;
    } else {
      args2 = {
        nodeclass: nodeclass || _UIBase,
        excluded_classes,
        clip: clip2
      };
    }
    if (mouseEvent) {
      isMouseMove = mouseEvent.type === "mousemove" || mouseEvent.type === "touchmove" || mouseEvent.type === "pointermove";
      isMouseDown2 = mouseEvent.buttons || mouseEvent.touches && mouseEvent.touches.length > 0;
    }
    x -= window.scrollX;
    y -= window.scrollY;
    let elem = document.elementFromPoint(x, y);
    if (!elem) {
      return;
    }
    let path = [elem];
    let lastelem = elem;
    let i2 = 0;
    while (elem && elem.shadow) {
      if (i2++ > 1e3) {
        console.error("Infinite loop error");
        break;
      }
      elem = elem.shadow.elementFromPoint(x, y);
      if (elem === lastelem) {
        break;
      }
      if (elem) {
        path.push(elem);
      }
      lastelem = elem;
    }
    path.reverse();
    for (let i3 = 0; i3 < path.length; i3++) {
      let node = path[i3];
      let ok = node instanceof nodeclass;
      if (excluded_classes) {
        for (let cls2 of excluded_classes) {
          ok = ok && !(node instanceof cls2);
        }
      }
      if (clip2) {
        let rect = node.getBoundingClientRect();
        let clip22 = aabb_intersect_2d(clip2.pos, clip2.size, [rect.x, rect.y], [rect.width, rect.height]);
        ok = ok && clip22;
      }
      if (ok) {
        window.elem = node;
        return node;
      }
    }
  }
  __updateDisable(val2) {
    if (!!val2 === !!this.__disabledState) {
      return;
    }
    this.__disabledState = !!val2;
    if (val2 && !this._disdata) {
      let style = this.getDefault("disabled") || this.getDefault("internalDisabled") || {
        "background-color": this.getDefault("DisabledBG")
      };
      this._disdata = {
        style: {},
        defaults: {}
      };
      for (let k2 in style) {
        this._disdata.style[k2] = this.style[k2];
        this._disdata.defaults[k2] = this.default_overrides[k2];
        let v = style[k2];
        if (typeof v === "object" && v instanceof CSSFont) {
          this.style[k2] = style[k2].genCSS();
        } else if (typeof v === "object") {
          continue;
        } else {
          this.style[k2] = style[k2];
        }
        this.default_overrides[k2] = style[k2];
      }
      this.__disabledState = !!val2;
      this.on_disabled();
    } else if (!val2 && this._disdata) {
      for (let k2 in this._disdata.style) {
        this.style[k2] = this._disdata.style[k2];
      }
      for (let k2 in this._disdata.defaults) {
        let v = this._disdata.defaults[k2];
        if (v === void 0) {
          delete this.default_overrides[k2];
        } else {
          this.default_overrides[k2] = v;
        }
      }
      this._disdata = void 0;
      this.__disabledState = !!val2;
      this.on_enabled();
    }
    this.__disabledState = !!val2;
    let visit = /* @__PURE__ */ __name((n) => {
      if (n instanceof _UIBase) {
        let changed = !!n.__disabledState;
        n.__updateDisable(n.disabled);
        changed = changed !== !!n.__disabledState;
        if (changed) {
          n.update();
          n.setCSS();
        }
      }
    }, "visit");
    this._forEachChildWidget(visit);
  }
  on_disabled() {
  }
  on_enabled() {
  }
  pushModal(handlers = this, autoStopPropagation = true, pointerId = void 0, pointerElem = this) {
    if (this._modaldata !== void 0) {
      console.warn("UIBase.prototype.pushModal called when already in modal mode");
      this.popModal();
    }
    let _areaWrangler = contextWrangler.copy();
    contextWrangler.copy(this.ctx);
    function bindFunc(func2) {
      return function() {
        _areaWrangler.copyTo(contextWrangler);
        return func2.apply(handlers, arguments);
      };
    }
    __name(bindFunc, "bindFunc");
    let handlers2 = {};
    for (let k2 in handlers) {
      let func2 = handlers[k2];
      if (typeof func2 !== "function") {
        continue;
      }
      handlers2[k2] = bindFunc(func2);
    }
    if (pointerId !== void 0 && pointerElem) {
      this._modaldata = pushPointerModal(handlers2, autoStopPropagation);
    } else {
      this._modaldata = pushModalLight(handlers2, autoStopPropagation);
    }
    return this._modaldata;
  }
  popModal() {
    if (this._modaldata === void 0) {
      console.warn("Invalid call to UIBase.prototype.popModal");
      return;
    }
    popModalLight(this._modaldata);
    this._modaldata = void 0;
  }
  /** child classes can override this to prevent focus on flash*/
  _flash_focus() {
    this.focus();
  }
  flash(color, rect_element = this, timems = 355, autoFocus = true) {
    if (typeof color != "object") {
      color = css2color(color);
    }
    color = new Vector42(color);
    let csscolor = color2css(color);
    if (this._flashtimer !== void 0 && this._flashcolor !== csscolor) {
      window.setTimeout(() => {
        this.flash(color, rect_element, timems, autoFocus);
      }, 100);
      return;
    } else if (this._flashtimer !== void 0) {
      return;
    }
    let rect = rect_element.getBoundingClientRect();
    if (rect === void 0) {
      return;
    }
    let timer2;
    let tick = 0;
    let max3 = ~~(timems / 20);
    let x = rect.x, y = rect.y;
    let cb = /* @__PURE__ */ __name((e2) => {
      if (timer2 === void 0) {
        return;
      }
      let a3 = 1 - tick / max3;
      div.style["background-color"] = color2css(color, a3 * a3 * 0.5);
      if (tick > max3) {
        window.clearInterval(timer2);
        this._flashtimer = void 0;
        this._flashcolor = void 0;
        timer2 = void 0;
        div.remove();
        if (autoFocus) {
          this._flash_focus();
        }
      }
      tick++;
    }, "cb");
    window.setTimeout(cb, 5);
    this._flashtimer = timer2 = window.setInterval(cb, 20);
    let div = document.createElement("div");
    div.style["pointer-events"] = "none";
    div.tabIndex = void 0;
    div.style["z-index"] = "900";
    div.style["display"] = "float";
    div.style["position"] = _UIBase.PositionKey;
    div.style["margin"] = "0px";
    div.style["left"] = x + "px";
    div.style["top"] = y + "px";
    div.style["background-color"] = color2css(color, 0.5);
    div.style["width"] = rect.width + "px";
    div.style["height"] = rect.height + "px";
    div.setAttribute("class", "UIBaseFlash");
    let screen = this.getScreen();
    if (screen !== void 0) {
      screen._enterPopupSafe();
    }
    document.body.appendChild(div);
    if (autoFocus) {
      this._flash_focus();
    }
    this._flashcolor = csscolor;
    if (screen !== void 0) {
      screen._exitPopupSafe();
    }
  }
  destroy() {
  }
  on_resize(newsize) {
  }
  toJSON() {
    let ret2 = {};
    if (this.hasAttribute("datapath")) {
      ret2.datapath = this.getAttribute("datapath");
    }
    return ret2;
  }
  loadJSON(obj2) {
    if (!this._init_done) {
      this._init();
    }
  }
  getPathValue(ctx2, path) {
    try {
      return ctx2.api.getValue(ctx2, path);
    } catch (error) {
      return void 0;
    }
  }
  undoBreakPoint() {
    this.pathUndoGen++;
  }
  setPathValueUndo(ctx2, path, val2) {
    this.pathSocketUpdate(ctx2, path);
    let mass_set_path = this.getAttribute("mass_set_path");
    let rdef2 = ctx2.api.resolvePath(ctx2, path);
    let prop = rdef2.prop;
    if (ctx2.api.getValue(ctx2, path) === val2) {
      return;
    }
    let toolstack = this.ctx.toolstack;
    let head = toolstack.head;
    let bad = head === void 0 || !(head instanceof getDataPathToolOp());
    bad = bad || head.hashThis() !== head.hash(mass_set_path, path, prop.type, this._id);
    bad = bad || this.pathUndoGen !== this._lastPathUndoGen;
    if (!bad) {
      toolstack.undo();
      head.setValue(ctx2, val2, rdef2.obj);
      toolstack.redo();
    } else {
      this._lastPathUndoGen = this.pathUndoGen;
      let toolop = getDataPathToolOp().create(ctx2, path, val2, this._id, mass_set_path);
      if (!toolop) {
        return;
      }
      ctx2.toolstack.execTool(this.ctx, toolop);
      head = toolstack.head;
    }
    if (!head || head.hadError === true) {
      throw new Error("toolpath error");
    }
  }
  loadNumConstraints(prop = void 0, dom = this, onModifiedCallback = void 0) {
    let modified = false;
    if (!prop) {
      let path;
      if (dom.hasAttribute("datapath")) {
        path = dom.getAttribute("datapath");
      }
      if (path === void 0 && this.hasAttribute("datapath")) {
        path = this.getAttribute("datapath");
      }
      if (typeof path === "string") {
        prop = this.getPathMeta(this.ctx, path);
      }
    }
    let loadAttr = /* @__PURE__ */ __name((propkey, domkey = key, thiskey = key) => {
      let old = this[thiskey];
      if (dom.hasAttribute(domkey)) {
        this[thiskey] = parseFloat(dom.getAttribute(domkey));
      } else if (prop) {
        this[thiskey] = prop[propkey];
      }
      if (this[thiskey] !== old) {
        modified = true;
      }
    }, "loadAttr");
    for (let key2 of NumberConstraints) {
      let thiskey = key2, domkey = key2;
      if (key2 === "range") {
        continue;
      }
      loadAttr(key2, domkey, thiskey);
    }
    let oldmin = this.range[0];
    let oldmax = this.range[1];
    let range = prop ? prop.range : void 0;
    if (range && !dom.hasAttribute("min")) {
      this.range[0] = range[0];
    } else if (dom.hasAttribute("min")) {
      this.range[0] = parseFloat(dom.getAttribute("min"));
    }
    if (range && !dom.hasAttribute("max")) {
      this.range[1] = range[1];
    } else if (dom.hasAttribute("max")) {
      this.range[1] = parseFloat(dom.getAttribute("max"));
    }
    if (this.range[0] !== oldmin || this.range[1] !== oldmax) {
      modified = true;
    }
    let oldint = this.isInt;
    if (dom.getAttribute("integer")) {
      let val2 = dom.getAttribute("integer");
      val2 = ("" + val2).toLowerCase();
      this.isInt = val2 === "null" || val2 === "true" || val2 === "yes" || val2 === "1";
    } else if (prop && prop instanceof IntProperty) {
      this.isInt = true;
    }
    if (!this.isInt !== !oldint) {
      modified = true;
    }
    let oldedit = this.editAsBaseUnit;
    if (this.editAsBaseUnit === void 0) {
      if (prop && prop.flag & PropFlags.EDIT_AS_BASE_UNIT) {
        this.editAsBaseUnit = true;
      } else {
        this.editAsBaseUnit = false;
      }
    }
    if (!this.editAsBaseUnit !== !oldedit) {
      modified = true;
    }
    if (modified) {
      this.setCSS();
      if (onModifiedCallback) {
        onModifiedCallback.call(this);
      }
    }
  }
  /*
      adds a method call to the event queue,
      but only if that method (for this instance, as differentiated
      by ._id) isn't there already.
  
      also, method won't be ran until this.ctx exists
    */
  pushReportContext(key2) {
    if (this.ctx.api.pushReportContext) {
      this.ctx.api.pushReportContext(key2);
    }
  }
  popReportContext() {
    if (this.ctx.api.popReportContext)
      this.ctx.api.popReportContext();
  }
  pathSocketUpdate(ctx2, path) {
    this.flagPropSocketUpdate("value");
    return this;
  }
  setPathValue(ctx2, path, val2) {
    this.pathSocketUpdate(ctx2, path);
    if (this.useDataPathUndo) {
      this.pushReportContext(this._reportCtxName);
      try {
        this.setPathValueUndo(ctx2, path, val2);
      } catch (error) {
        this.popReportContext();
        if (!(error instanceof DataPathError)) {
          throw error;
        } else {
          return;
        }
      }
      this.popReportContext();
      return;
    }
    this.pushReportContext(this._reportCtxName);
    try {
      if (this.hasAttribute("mass_set_path")) {
        ctx2.api.massSetProp(ctx2, this.getAttribute("mass_set_path"), val2);
        ctx2.api.setValue(ctx2, path, val2);
      } else {
        ctx2.api.setValue(ctx2, path, val2);
      }
    } catch (error) {
      this.popReportContext();
      if (!(error instanceof DataPathError)) {
        throw error;
      }
      return;
    }
    this.popReportContext();
  }
  getPathMeta(ctx2, path) {
    this.pushReportContext(this._reportCtxName);
    let ret2 = ctx2.api.resolvePath(ctx2, path);
    this.popReportContext();
    return ret2 !== void 0 ? ret2.prop : void 0;
  }
  getPathDescription(ctx2, path) {
    let ret2;
    this.pushReportContext(this._reportCtxName);
    try {
      ret2 = ctx2.api.getDescription(ctx2, path);
    } catch (error) {
      this.popReportContext();
      if (error instanceof DataPathError) {
        return void 0;
      } else {
        throw error;
      }
    }
    this.popReportContext();
    return ret2;
  }
  getScreen() {
    if (this.ctx !== void 0)
      return this.ctx.screen;
  }
  isDead() {
    return !this.isConnected;
    let p = this, lastp = this;
    function find(c, n) {
      for (let n2 of c) {
        if (n2 === n) {
          return true;
        }
      }
    }
    __name(find, "find");
    while (p) {
      lastp = p;
      let parent2 = p.parentWidget;
      if (!parent2) {
        parent2 = p.parentElement ? p.parentElement : p.parentNode;
      }
      if (parent2 && p && !find(parent2.childNodes, p)) {
        if (parent2.shadow !== void 0 && !find(parent2.shadow.childNodes)) {
          return true;
        }
      }
      p = parent2;
      if (p === document.body) {
        return false;
      }
    }
    return true;
  }
  doOnce(func2, timeout = void 0) {
    if (func2._doOnce === void 0) {
      func2._doOnce_reqs = /* @__PURE__ */ new Set();
      func2._doOnce = function(thisvar, trace2) {
        if (func2._doOnce_reqs.has(thisvar._id)) {
          return;
        }
        func2._doOnce_reqs.add(thisvar._id);
        function f3() {
          if (thisvar.isDead()) {
            func2._doOnce_reqs.delete(thisvar._id);
            if (func2 === thisvar._init || !const_default.DEBUG.doOnce) {
              return;
            }
            console.warn("Ignoring doOnce call for dead element", thisvar._id, func2, trace2);
            return;
          }
          if (!thisvar.ctx) {
            if (const_default.DEBUG.doOnce) {
              console.warn("doOnce call is waiting for context...", thisvar._id, func2);
            }
            internalSetTimeout(f3, 0);
            return;
          }
          func2._doOnce_reqs.delete(thisvar._id);
          func2.call(thisvar);
        }
        __name(f3, "f");
        ;
        internalSetTimeout(f3, timeout);
      };
    }
    let trace = new Error().stack;
    func2._doOnce(this, trace);
  }
  float(x = 0, y = 0, zindex = void 0, positionKey = _UIBase.PositionKey) {
    this.style.position = positionKey;
    this.style.left = x + "px";
    this.style.top = y + "px";
    if (zindex !== void 0) {
      this.style["z-index"] = zindex;
    }
    return this;
  }
  _ensureChildrenCtx() {
    let ctx2 = this.ctx;
    if (ctx2 === void 0) {
      return;
    }
    this._forEachChildWidget((n) => {
      n.parentWidget = this;
      if (n.ctx === void 0) {
        n.ctx = ctx2;
      }
      n._ensureChildrenCtx(ctx2);
    });
  }
  checkThemeUpdate() {
    if (!const_default.enableThemeAutoUpdate) {
      return false;
    }
    if (_themeUpdateKey !== this._last_theme_update_key) {
      this._last_theme_update_key = _themeUpdateKey;
      return true;
    }
    return false;
  }
  abortToolTips(delayMs = 500) {
    if (this._has_own_tooltips) {
      this._has_own_tooltips.stop_timer();
    }
    if (this._tooltip_ref) {
      this._tooltip_ref.remove();
      this._tooltip_ref = void 0;
    }
    this._tool_tip_abort_delay = time_ms() + delayMs;
    return this;
  }
  updateToolTipHandlers() {
    if (!this._useNativeToolTips_set && !const_default.useNativeToolTips !== !this._useNativeToolTips) {
      this._useNativeToolTips = const_default.useNativeToolTips;
    }
    if (!!this.useNativeToolTips === !this._has_own_tooltips) {
      return;
    }
    if (!this.useNativeToolTips) {
      let state = this._has_own_tooltips = {
        start_timer: /* @__PURE__ */ __name((e2) => {
          this._tooltip_timer = time_ms();
        }, "start_timer"),
        stop_timer: /* @__PURE__ */ __name((e2) => {
          this._tooltip_timer = void 0;
        }, "stop_timer"),
        reset_timer: /* @__PURE__ */ __name((e2) => {
          if (this._tooltip_timer !== void 0) {
            this._tooltip_timer = time_ms();
          }
        }, "reset_timer"),
        start_events: [
          "mouseover"
        ],
        reset_events: [
          "mousemove",
          "mousedown",
          "mouseup",
          "touchstart",
          "touchend",
          "keydown",
          "focus"
        ],
        stop_events: [
          "mouseleave",
          "blur",
          "mouseout"
        ],
        handlers: {}
      };
      let bind_handler = /* @__PURE__ */ __name((type, etype) => {
        let handler = /* @__PURE__ */ __name((e2) => {
          if (this._tool_tip_abort_delay !== void 0 && time_ms() < this._tool_tip_abort_delay) {
            this._tooltip_timer = void 0;
            return;
          }
          state[type](e2);
        }, "handler");
        if (etype in state.handlers) {
          console.error(type, "is in handlers already");
          return;
        }
        state.handlers[etype] = handler;
        return handler;
      }, "bind_handler");
      let i2 = 0;
      let lists = [state.start_events, state.stop_events, state.reset_events];
      for (let type of ["start_timer", "stop_timer", "reset_timer"]) {
        for (let etype of lists[i2]) {
          this.addEventListener(etype, bind_handler(type, etype), { passive: true });
        }
        i2++;
      }
    } else {
      console.warn(this.id, "removing tooltip handlers");
      let state = this._has_own_tooltips;
      for (let k2 in this.state.handlers) {
        let handler = this.state.handlers[k2];
        this.removeEventListener(k2, handler);
      }
      this._has_own_tooltips = void 0;
      this._tooltip_timer = void 0;
    }
  }
  updateToolTips() {
    if (this._description_final === void 0 || this._description_final === null || this._description_final.trim().length === 0) {
      return;
    }
    if (!this.ctx || !this.ctx.screen) {
      return;
    }
    this.updateToolTipHandlers();
    if (this.useNativeToolTips || this._tooltip_timer === void 0) {
      return;
    }
    if (this._tool_tip_abort_delay !== void 0 && time_ms() < this._tool_tip_abort_delay) {
      return;
    }
    this._tool_tip_abort_delay = void 0;
    let screen = this.ctx.screen;
    const timelimit = 500;
    let ok = time_ms() - this._tooltip_timer > timelimit;
    let x = screen.mpos[0], y = screen.mpos[1];
    let r = this.getClientRects();
    r = r ? r[0] : r;
    if (!r) {
      ok = false;
    } else {
      ok = ok && x >= r.x && x < r.x + r.width;
      ok = ok && y >= r.y && y < r.y + r.height;
    }
    if (r) {
    }
    ok = ok && !haveModal();
    ok = ok && screen.pickElement(x, y) === this;
    ok = ok && this._description_final;
    if (ok) {
      this._tooltip_ref = _ToolTip.show(this._description_final, this.ctx.screen, x, y);
    } else {
      if (this._tooltip_ref) {
        this._tooltip_ref.remove();
      }
      this._tooltip_ref = void 0;
    }
    if (time_ms() - this._tooltip_timer > timelimit) {
      this._tooltip_timer = void 0;
    }
  }
  updateEventGraph() {
    if (!this.isConnected) {
      this.#reflagGraph = true;
    } else if (this.#reflagGraph) {
      this.#reflagGraph = false;
      for (let [k2, sock] of Object.entries(this.graphNode.inputs)) {
        sock.flagUpdate();
      }
    }
  }
  //called regularly
  update() {
    this.updateToolTips();
    this.updateEventGraph();
    if (this.ctx && this._description === void 0 && this.getAttribute("datapath")) {
      let d = this.getPathDescription(this.ctx, this.getAttribute("datapath"));
      this.description = d;
    }
    if (!this._init_done) {
      this._init();
    }
    if (this._init_done && !this.constructor.define().subclassChecksTheme) {
      if (this.checkThemeUpdate()) {
        console.log("theme update!");
        this.setCSS();
      }
    }
  }
  onadd() {
    if (!this._init_done) {
      this.doOnce(this._init);
    }
    if (this.tabIndex >= 0) {
      this.regenTabOrder();
    }
  }
  getZoom() {
    if (this.parentWidget !== void 0) {
      return this.parentWidget.getZoom();
    }
    return 1;
  }
  /**try to use this method
  
     scaling ratio (e.g. for high-resolution displays)
     for zoom ratio use getZoom()
     */
  getDPI() {
    if (this.parentWidget !== void 0) {
      return this.parentWidget.getDPI();
    }
    return _UIBase.getDPI();
  }
  /**
   * for saving ui state.
   * see saveUIData() export
   *
   * should fail gracefully.
   */
  saveData() {
    return {};
  }
  /**
   * for saving ui state.
   * see saveUIData() export
   *
   * should fail gracefully.
   *
   * also, it doesn't rebuild the object graph,
   * it patches it; for true serialization use
   * the toJSON/loadJSON or STRUCT interfaces.
   */
  loadData(obj2) {
    return this;
  }
  overrideDefault(key2, val2, localOnly = false) {
    this.my_default_overrides[key2] = val2;
    if (!localOnly) {
      this.default_overrides[key2] = val2;
    }
    return this;
  }
  overrideClass(style) {
    this._override_class = style;
  }
  overrideClassDefault(style, key2, val2) {
    if (!(style in this.class_default_overrides)) {
      this.class_default_overrides[style] = {};
    }
    this.class_default_overrides[style][key2] = val2;
  }
  _doMobileDefault(key2, val2, obj2) {
    if (!isMobile())
      return val2;
    const mobilekey = key2 + "_mobile";
    if (obj2 && mobilekey in obj2) {
      return obj2[mobilekey];
    }
    key2 = key2.toLowerCase();
    let ok = false;
    for (let re of _mobile_theme_patterns) {
      if (key2.search(re) >= 0) {
        ok = true;
        break;
      }
    }
    if (ok && theme.base.mobileSizeMultiplier) {
      val2 *= theme.base.mobileSizeMultiplier;
    }
    return val2;
  }
  hasDefault(key2) {
    let p = this;
    while (p) {
      if (key2 in p.default_overrides) {
        return true;
      }
      p = p.parentWidget;
    }
    return this.hasClassDefault(key2);
  }
  hasSubDefault(key2, subkey) {
    return this._hasSubDefault(...arguments, theme) || this._themeOverride && this._hasSubDefault(...arguments, this._themeOverride);
  }
  _hasSubDefault(key2, subkey) {
    let style = this.getStyleClass();
    let obj2 = this.getDefault(key2);
    if (!obj2 || typeof obj2 !== "object") {
      return false;
    }
    return subkey in obj2;
  }
  hasClassSubDefault(key2, subkey, inherit3 = true) {
    return this._hasClassSubDefault(key2, subkey, inherit3, void 0, theme) || this._themeOverride && this._hasClassSubDefault(key2, subkey, inherit3, void 0, this._themeOverride);
  }
  _hasClassSubDefault(key2, subkey, inherit3 = true, style = this.getStyleClass(), themeDef) {
    let th = themeDef;
    th = th[style];
    if (inherit3) {
      if (this._hasClassSubDefault(key2, subkey, false, themeDef)) {
        return true;
      }
      let ret2 = false;
      let def = this.constructor.define();
      if (def.parentStyle) {
        ret2 |= this._hasClassSubDefault(key2, subkey, false, def.parentStyle, themeDef);
      }
      ret2 |= this._hasClassSubDefault(key2, subkey, false, "base", themeDef);
      return ret2;
    }
    if (!th) {
      return false;
    }
    let obj2 = th[key2];
    if (!obj2 || typeof obj2 !== "object") {
      return false;
    }
    return subkey in obj2;
  }
  /** get a sub style from a theme style class.
   *  note that if key is falsy then it just forwards to this.getDefault directly*/
  getSubDefault(key2, subkey, backupkey = subkey, defaultval = void 0, inherit3 = true) {
    if (subkey && subkey in this.my_default_overrides) {
    }
    if (!key2) {
      return this.getDefault(subkey, void 0, defaultval, inherit3);
    }
    let style = this.getDefault(key2, void 0, void 0, inherit3);
    if (!style || typeof style !== "object" || !(subkey in style)) {
      if (defaultval !== void 0) {
        return defaultval;
      } else if (backupkey) {
        return this.getDefault(backupkey, void 0, void 0, inherit3);
      }
    } else {
      return style[subkey];
    }
  }
  getDefault(key2, checkForMobile = true, defaultval = void 0, inherit3 = true) {
    let ret2 = this.getDefault_intern(key2, checkForMobile, defaultval, inherit3);
    if (typeof ret2 === "string" && ret2.trim().toLowerCase().endsWith("px")) {
      let s = ret2.trim().toLowerCase();
      s = s.slice(0, s.length - 2).trim();
      let f3 = parseFloat(s);
      if (!isNaN(f3) && isFinite(f3)) {
        return f3;
      }
    }
    return ret2;
  }
  getDefault_intern(key2, checkForMobile = true, defaultval = void 0, inherit3 = true) {
    if (this.my_default_overrides[key2] !== void 0) {
      let v = this.my_default_overrides[key2];
      return checkForMobile ? this._doMobileDefault(key2, v, this.my_default_overrides) : v;
    }
    let p = this;
    while (p) {
      if (p.default_overrides[key2] !== void 0) {
        let v = p.default_overrides[key2];
        checkForMobile ? this._doMobileDefault(key2, v, p.default_overrides) : v;
      }
      p = p.parentWidget;
    }
    return this.getClassDefault(key2, checkForMobile, defaultval, inherit3);
  }
  getStyleClass() {
    if (this._override_class !== void 0) {
      return this._override_class;
    }
    let p = this.constructor, lastp = void 0;
    while (p && p !== lastp && p !== _UIBase && p !== Object) {
      let def = p.define();
      if (def.style) {
        return def.style;
      }
      if (!p.prototype || !p.prototype.__proto__)
        break;
      p = p.prototype.__proto__.constructor;
    }
    return "base";
  }
  hasClassDefault(key2) {
    let style = this.getStyleClass();
    let p = this;
    while (p) {
      let def = p.class_default_overrides[style];
      if (def && key2 in def) {
        return true;
      }
      p = p.parentWidget;
    }
    let th = this._themeOverride;
    if (th && style in th && key2 in th[style]) {
      return true;
    }
    if (style in theme && key2 in theme[style]) {
      return true;
    }
    return key2 in theme.base;
  }
  getClassDefault(key2, checkForMobile = true, defaultval = void 0, inherit3 = true) {
    let style = this.getStyleClass();
    if (style === "none") {
      return void 0;
    }
    let themeobj;
    let val2;
    let p = this;
    while (p) {
      let def = p.class_default_overrides[style];
      if (def && key2 in def) {
        themeobj = def;
        val2 = def[key2];
        break;
      }
      p = p.parentWidget;
    }
    if (val2 === void 0 && style in theme && !(key2 in theme[style]) && !(key2 in theme.base)) {
      if (window.DEBUG.theme) {
        report2("Missing theme key ", key2, "for", style);
      }
    }
    for (let i2 = 0; i2 < 2; i2++) {
      let th = !i2 ? this._themeOverride : theme;
      if (!th) {
        continue;
      }
      if (val2 === void 0 && style in th && key2 in th[style]) {
        themeobj = th[style];
        val2 = th[style][key2];
      } else if (defaultval !== void 0) {
        themeobj = void 0;
        val2 = defaultval;
      } else if (val2 === void 0 && inherit3) {
        let def = this.constructor.define();
        if (def.parentStyle && key2 in th[def.parentStyle]) {
          val2 = th[def.parentStyle][key2];
          themeobj = th[def.parentStyle];
        } else {
          val2 = th.base[key2];
          themeobj = th.base;
        }
      }
    }
    return checkForMobile ? this._doMobileDefault(key2, val2, themeobj) : val2;
  }
  overrideTheme(theme2) {
    this._themeOverride = theme2;
    this._forEachChildWidget((child) => {
      child.overrideTheme(theme2);
    });
    if (this.ctx) {
      this.flushSetCSS();
      this.flushUpdate();
    }
    return this;
  }
  getStyle() {
    console.warn("deprecated call to UIBase.getStyle");
    return this.getStyleClass();
  }
  /** returns a new Animator instance
   *
   * example:
   *
   * container.animate().goto("style.width", 500, 100, "ease");
   * */
  animate(_extra_handlers = {}, domAnimateOptions = void 0) {
    if (Array.isArray(_extra_handlers)) {
      return super.animate(_extra_handlers, domAnimateOptions);
    }
    let transform = new DOMMatrix(this.style["transform"]);
    let update_trans = /* @__PURE__ */ __name(() => {
      let t = transform;
      let css = "matrix(" + t.a + "," + t.b + "," + t.c + "," + t.d + "," + t.e + "," + t.f + ")";
      this.style["transform"] = css;
    }, "update_trans");
    let handlers = {
      background_get() {
        return css2color(this.background);
      },
      background_set(c) {
        if (typeof c !== "string") {
          c = color2css(c);
        }
        this.background = c;
      },
      dx_get() {
        return transform.m41;
      },
      dx_set(x) {
        transform.m41 = x;
        update_trans();
      },
      dy_get() {
        return transform.m42;
      },
      dy_set(x) {
        transform.m42 = x;
        update_trans();
      }
    };
    let pixkeys = [
      "width",
      "height",
      "left",
      "top",
      "right",
      "bottom",
      "border-radius",
      "border-width",
      "margin",
      "padding",
      "margin-left",
      "margin-right",
      "margin-top",
      "margin-bottom",
      "padding-left",
      "padding-right",
      "padding-bottom",
      "padding-top"
    ];
    handlers = Object.assign(handlers, _extra_handlers);
    let makePixHandler = /* @__PURE__ */ __name((k2, k22) => {
      handlers[k22 + "_get"] = () => {
        let s = this.style[k2];
        if (s.endsWith("px")) {
          return parsepx(s);
        } else {
          return 0;
        }
      };
      handlers[k22 + "_set"] = (val2) => {
        this.style[k2] = val2 + "px";
      };
    }, "makePixHandler");
    for (let k2 of pixkeys) {
      if (!(k2 in handlers)) {
        makePixHandler(k2, `style.${k2}`);
        makePixHandler(k2, `style["${k2}"]`);
        makePixHandler(k2, `style['${k2}']`);
      }
    }
    let handler = {
      get: /* @__PURE__ */ __name((target, key2, receiver) => {
        console.log(key2, handlers[key2 + "_get"], handlers);
        if (key2 + "_get" in handlers) {
          return handlers[key2 + "_get"].call(target);
        } else {
          return target[key2];
        }
      }, "get"),
      set: /* @__PURE__ */ __name((target, key2, val2, receiver) => {
        console.log(key2);
        if (key2 + "_set" in handlers) {
          handlers[key2 + "_set"].call(target, val2);
        } else {
          target[key2] = val2;
        }
        return true;
      }, "set")
    };
    let proxy = new Proxy(this, handler);
    let anim = new Animator(proxy);
    anim.onend = () => {
      this._active_animations.remove(anim);
    };
    this._active_animations.push(anim);
    return anim;
  }
  abortAnimations() {
    for (let anim of list3(this._active_animations)) {
      anim.end();
    }
    this._active_animations = [];
  }
};
function drawRoundBox2(elem, options = {}) {
  drawRoundBox(elem, options.canvas, options.g, options.width, options.height, options.r, options.op, options.color, options.margin, options.no_clear);
}
__name(drawRoundBox2, "drawRoundBox2");
function drawRoundBox(elem, canvas, g, width, height, r = void 0, op = "fill", color = void 0, margin = void 0, no_clear = false) {
  width = width === void 0 ? canvas.width : width;
  height = height === void 0 ? canvas.height : height;
  g.save();
  let dpi = elem.getDPI();
  r = r === void 0 ? elem.getDefault("border-radius") : r;
  if (margin === void 0) {
    margin = 1;
  }
  r *= dpi;
  let r1 = r, r2 = r;
  if (r > (height - margin * 2) * 0.5) {
    r1 = (height - margin * 2) * 0.5;
  }
  if (r > (width - margin * 2) * 0.5) {
    r2 = (width - margin * 2) * 0.5;
  }
  let bg = color;
  if (bg === void 0 && canvas._background !== void 0) {
    bg = canvas._background;
  } else if (bg === void 0) {
    bg = elem.getDefault("background-color");
  }
  if (op === "fill" && !no_clear) {
    g.clearRect(0, 0, width, height);
  }
  g.fillStyle = bg;
  g.strokeStyle = color === void 0 ? elem.getDefault("border-color") : color;
  let w = width, h2 = height;
  let th = Math.PI / 4;
  let th2 = Math.PI * 0.75;
  g.beginPath();
  g.moveTo(margin, margin + r1);
  g.lineTo(margin, h2 - r1 - margin);
  g.quadraticCurveTo(margin, h2 - margin, margin + r2, h2 - margin);
  g.lineTo(w - margin - r2, h2 - margin);
  g.quadraticCurveTo(w - margin, h2 - margin, w - margin, h2 - margin - r1);
  g.lineTo(w - margin, margin + r1);
  g.quadraticCurveTo(w - margin, margin, w - margin - r2, margin);
  g.lineTo(margin + r2, margin);
  g.quadraticCurveTo(margin, margin, margin, margin + r1);
  g.closePath();
  if (op === "clip") {
    g.clip();
  } else if (op === "fill") {
    g.fill();
  } else {
    g.stroke();
  }
  g.restore();
}
__name(drawRoundBox, "drawRoundBox");
;
function _getFont_new(elem, size, font = "DefaultText", do_dpi = true) {
  font = elem.getDefault(font);
  return font.genCSS(size);
}
__name(_getFont_new, "_getFont_new");
function getFont(elem, size, font = "DefaultText", do_dpi = true) {
  return _getFont_new(elem, size, font = "DefaultText", do_dpi = true);
}
__name(getFont, "getFont");
function _getFont(elem, size, font = "DefaultText", do_dpi = true) {
  let dpi = elem.getDPI();
  let font2 = elem.getDefault(font);
  if (font2 !== void 0) {
    return _getFont_new(elem, size, font, do_dpi);
  }
  throw new Error("unknown font " + font);
}
__name(_getFont, "_getFont");
function _ensureFont(elem, canvas, g, size) {
  if (canvas.font) {
    g.font = canvas.font;
  } else {
    let font = elem.getDefault("DefaultText");
    g.font = font.genCSS(size);
  }
}
__name(_ensureFont, "_ensureFont");
var _mc;
function get_measure_canvas() {
  if (_mc !== void 0) {
    return _mc;
  }
  _mc = document.createElement("canvas");
  _mc.width = 256;
  _mc.height = 256;
  _mc.g = _mc.getContext("2d");
  return _mc;
}
__name(get_measure_canvas, "get_measure_canvas");
function measureTextBlock(elem, text, canvas = void 0, g = void 0, size = void 0, font = void 0) {
  let lines = text.split("\n");
  let ret2 = {
    width: 0,
    height: 0
  };
  if (size === void 0) {
    if (font !== void 0 && typeof font === "object") {
      size = font.size;
    }
    if (size === void 0) {
      size = elem.getDefault("DefaultText").size;
    }
  }
  for (let line2 of lines) {
    let m = measureText(elem, line2, canvas, g, size, font);
    ret2.width = Math.max(ret2.width, m.width);
    let h2 = m.height !== void 0 ? m.height : size * 1.25;
    ret2.height += h2;
  }
  return ret2;
}
__name(measureTextBlock, "measureTextBlock");
function measureText(elem, text, canvas = void 0, g = void 0, size = void 0, font = void 0) {
  if (typeof canvas === "object" && canvas !== null && !(canvas instanceof HTMLCanvasElement) && canvas.tagName !== "CANVAS") {
    let args2 = canvas;
    canvas = args2.canvas;
    g = args2.g;
    size = args2.size;
    font = args2.font;
  }
  if (g === void 0) {
    canvas = get_measure_canvas();
    g = canvas.g;
  }
  if (font !== void 0) {
    if (typeof font === "object" && font instanceof CSSFont) {
      font = font.genCSS(size);
    }
    g.font = font;
  } else {
    _ensureFont(elem, canvas, g, size);
  }
  let ret2 = g.measureText(text);
  if (size !== void 0) {
    g.font = void 0;
  }
  return ret2;
}
__name(measureText, "measureText");
function drawText(elem, x, y, text, args2 = {}) {
  let canvas = args2.canvas, g = args2.g, color = args2.color, font = args2.font;
  let size = args2.size;
  if (size === void 0) {
    if (font !== void 0 && font instanceof CSSFont) {
      size = font.size;
    } else {
      size = elem.getDefault("DefaultText").size;
    }
  }
  size *= UIBase2.getDPI();
  if (color === void 0) {
    if (font && font.color) {
      color = font.color;
    } else {
      color = elem.getDefault("DefaultText").color;
    }
  }
  if (font === void 0) {
    _ensureFont(elem, canvas, g, size);
  } else if (typeof font === "object" && font instanceof CSSFont) {
    g.font = font = font.genCSS(size);
  } else if (font) {
    g.font = font;
  }
  if (typeof color === "object") {
    color = color2css(color);
  }
  g.fillStyle = color;
  g.fillText(text, x + 0.5, y + 0.5);
  if (size !== void 0) {
    g.font = void 0;
  }
}
__name(drawText, "drawText");
var PIDX = 0, PSHADOW = 1, PTOT = 2;
function saveUIData(node, key2) {
  if (key2 === void 0) {
    throw new Error("ui_base.saveUIData(): key cannot be undefined");
  }
  let paths2 = [];
  let rec = /* @__PURE__ */ __name((n, path, ni, is_shadow) => {
    path = path.slice(0, path.length);
    let pi2 = path.length;
    for (let i2 = 0; i2 < PTOT; i2++) {
      path.push(void 0);
    }
    path[pi2] = ni;
    path[pi2 + 1] = is_shadow ? 1 : 0;
    if (n instanceof UIBase2) {
      let path2 = path.slice(0, path.length);
      let data = n.saveData();
      let bad = !data;
      bad = bad || typeof data === "object" && Object.keys(data).length === 0;
      if (!bad) {
        path2.push(data);
        if (path2[pi2 + 2]) {
          paths2.push(path2);
        }
      }
    }
    for (let i2 = 0; i2 < n.childNodes.length; i2++) {
      let n2 = n.childNodes[i2];
      rec(n2, path, i2, false);
    }
    let shadow = n.shadow;
    if (!shadow)
      return;
    for (let i2 = 0; i2 < shadow.childNodes.length; i2++) {
      let n2 = shadow.childNodes[i2];
      rec(n2, path, i2, true);
    }
  }, "rec");
  rec(node, [], 0, false);
  return JSON.stringify({
    key: key2,
    paths: paths2,
    _ui_version: 1
  });
}
__name(saveUIData, "saveUIData");
window._saveUIData = saveUIData;
function loadUIData(node, buf) {
  if (buf === void 0 || buf === null) {
    return;
  }
  let obj2 = JSON.parse(buf);
  let key2 = buf.key;
  for (let path of obj2.paths) {
    let n = node;
    let data = path[path.length - 1];
    path = path.slice(2, path.length - 1);
    for (let pi2 = 0; pi2 < path.length; pi2 += PTOT) {
      let ni = path[pi2], shadow = path[pi2 + 1];
      let list4;
      if (shadow) {
        list4 = n.shadow;
        if (list4) {
          list4 = list4.childNodes;
        }
      } else {
        list4 = n.childNodes;
      }
      if (list4 === void 0 || list4[ni] === void 0) {
        n = void 0;
        break;
      }
      n = list4[ni];
    }
    if (n !== void 0 && n instanceof UIBase2) {
      n._init();
      n.loadData(data);
    }
  }
}
__name(loadUIData, "loadUIData");
UIBase2.PositionKey = "fixed";
window._loadUIData = loadUIData;
_setUIBase(UIBase2);

// scripts/path.ux/scripts/widgets/ui_button.js
var keymap2 = keymap;
var EnumProperty3 = EnumProperty, PropTypes2 = PropTypes;
var UIBase3 = UIBase2, PackFlags2 = PackFlags, IconSheets2 = IconSheets;
var parsepx2 = parsepx;
const_default.DEBUG.buttonEvents = true;
var ButtonEventBase = class extends UIBase3 {
  static {
    __name(this, "ButtonEventBase");
  }
  constructor() {
    super();
    this._auto_depress = true;
    this._highlight = false;
    this._pressed = false;
  }
  bindEvents() {
    let press_gen = 0;
    let depress;
    let press = /* @__PURE__ */ __name((e2) => {
      e2.stopPropagation();
      if (!this.modalRunning) {
        let this2 = this;
        this.pushModal({
          on_pointerdown(e3) {
            this.end(e3);
          },
          on_pointerup(e3) {
            this.end(e3);
          },
          on_pointercancel(e3) {
            console.warn("Pointer cancel in button");
            this2.popModal();
          },
          on_keydown(e3) {
            switch (e3.keyCode) {
              case keymap2["Enter"]:
              case keymap2["Escape"]:
              case keymap2["Space"]:
                this.end();
                break;
            }
          },
          end(e3) {
            if (!this2.modalRunning) {
              return;
            }
            this2.popModal();
            depress(e3);
          }
        }, void 0, e2.pointerId);
      }
      if (const_default.DEBUG.buttonEvents) {
        console.log("button press", this._pressed, this.disabled, e2.button);
      }
      if (this.disabled) return;
      this._pressed = true;
      if (this._onpress) {
        this._onpress(this);
      }
      this._redraw();
      e2.preventDefault();
    }, "press");
    depress = /* @__PURE__ */ __name((e2) => {
      if (const_default.DEBUG.buttonEvents)
        console.log("button depress", e2.button, e2.was_touch);
      if (this._auto_depress) {
        this._pressed = false;
        if (this.disabled) return;
        this._redraw();
      }
      if (e2) {
        e2.preventDefault();
        e2.stopPropagation();
        if (isMobile() || e2.type === "pointerup" && e2.button) {
          return;
        }
      }
      this._redraw();
      if (const_default.DEBUG.buttonEvents)
        console.log("button click callback:", this.onclick, this._onpress, this.onpress);
      if (this.onclick && e2 && e2.pointerType !== "mouse") {
        this.onclick(this);
      }
      this.undoBreakPoint();
    }, "depress");
    this.addEventListener("click", () => {
      this._pressed = false;
      this._highlight = false;
      this._redraw();
    });
    this.addEventListener("pointerdown", press, { captured: true, passive: false });
    this.addEventListener("pointerup", depress, { captured: true, passive: false });
    this.addEventListener("pointerover", (e2) => {
      if (this.disabled)
        return;
      this._highlight = true;
      this._redraw();
    });
    this.addEventListener("pointerout", (e2) => {
      if (this.disabled)
        return;
      this._highlight = false;
      this._redraw();
    });
    this.addEventListener("keydown", (e2) => {
      if (this.disabled) return;
      if (const_default.DEBUG.buttonEvents)
        console.log(e2.keyCode);
      switch (e2.keyCode) {
        case 27:
          this.blur();
          e2.preventDefault();
          e2.stopPropagation();
          break;
        case 32:
        //spacebar
        case 13:
          this.click();
          e2.preventDefault();
          e2.stopPropagation();
          break;
      }
    });
    this.addEventListener("focusin", () => {
      if (this.disabled) return;
      this._focus = 1;
      this._redraw();
      this.focus();
    });
    this.addEventListener("blur", () => {
      if (this.disabled) return;
      this._focus = 0;
      this._redraw();
    });
  }
  _redraw() {
  }
};
var Button = class extends ButtonEventBase {
  static {
    __name(this, "Button");
  }
  constructor() {
    super();
    this.label = document.createElement("span");
    this.label.innerText = "button";
    this.shadow.appendChild(this.label);
    this.label.style["pointer-events"] = "none";
    this._pressed = false;
    this._highlight = false;
    this._pressedTime = 0;
    this._pressedTimeout = 100;
    this._auto_depress = true;
    this._last_name = void 0;
    this._last_disabled = void 0;
  }
  get name() {
    return "" + this.getAttribute("name");
  }
  set name(val2) {
    this.setAttribute("name", val2);
  }
  get _pressed() {
    return this.__pressed;
  }
  set _pressed(v) {
    let changed = !v !== !this._pressed;
    if (v) {
      this._pressedTime = time_ms();
    } else if (changed && time_ms() - this._pressedTime < this._pressedTimeout) {
      window.setTimeout(() => {
        this.setCSS();
      }, this._pressedTimeout - (time_ms() - this._pressedTime) + 1);
    }
    this.__pressed = v;
  }
  static define() {
    return {
      tagname: "button-x",
      style: "button"
    };
  }
  init() {
    super.init();
    this.tabIndex = 0;
    this.bindEvents();
    this.setCSS();
  }
  on_enabled() {
    this.setCSS();
  }
  on_disabled() {
    this.setCSS();
  }
  setCSS() {
    super.setCSS();
    if (this.hasDefault("pressedTimeout")) {
      this._pressedTimeout = this.getDefault("pressedTimeout");
    }
    let subkey = void 0;
    let pressed = this._pressed;
    if (!pressed && time_ms() - this._pressedTime < this._pressedTimeout) {
      pressed = true;
    }
    if (this.disabled) {
      subkey = "disabled";
    } else if (pressed && this._highlight) {
      subkey = "highlight-pressed";
    } else if (pressed) {
      subkey = "pressed";
    } else if (this._highlight) {
      subkey = "highlight";
    }
    let h2 = this.getDefault("height");
    this.setBoxCSS(subkey);
    this.label.style["padding"] = this.label.style["margin"] = "0px";
    this.style["background-color"] = this.getSubDefault(subkey, "background-color");
    let font = this.getSubDefault(subkey, "DefaultText");
    this.label.style["font"] = font.genCSS();
    this.label.style["color"] = font.color;
    this.style["display"] = "flex";
    this.style["align-items"] = "center";
    this.style["width"] = "max-content";
    this.style["height"] = h2 + "px";
    this.style["user-select"] = "none";
    this.label.style["user-select"] = "none";
  }
  click() {
    if (this._onpress) {
      let rect = this.getClientRects();
      let x = rect.x + rect.width * 0.5;
      let y = rect.y + rect.height * 0.5;
      let e2 = {
        x,
        y,
        stopPropagation: /* @__PURE__ */ __name(() => {
        }, "stopPropagation"),
        preventDefault: /* @__PURE__ */ __name(() => {
        }, "preventDefault")
      };
      this._onpress(e2);
    }
    super.click();
  }
  _redraw() {
    this.setCSS();
  }
  updateDisabled() {
    if (this._last_disabled !== this.disabled) {
      this._last_disabled = this.disabled;
      this._redraw();
      if (const_default.DEBUG.buttonEvents)
        console.log("disabled update!", this.disabled, this.style["background-color"]);
    }
  }
  update() {
    if (this._last_name !== this.name) {
      this.label.innerHTML = this.name;
      this._last_name = this.name;
    }
  }
};
UIBase3.register(Button);
var OldButton = class extends ButtonEventBase {
  static {
    __name(this, "OldButton");
  }
  constructor() {
    super();
    let dpi = this.getDPI();
    this._last_but_update_key = "";
    this._name = "";
    this._namePad = void 0;
    this._leftPad = 5;
    this._rightPad = 5;
    this._last_w = 0;
    this._last_h = 0;
    this._last_dpi = dpi;
    this._lastw = void 0;
    this._lasth = void 0;
    this.dom = document.createElement("canvas");
    this.g = this.dom.getContext("2d");
    this.dom.setAttribute("class", "canvas1");
    this.dom.tabIndex = 0;
    this._last_bg = void 0;
    this._last_disabled = false;
    this._auto_depress = true;
    this.shadow.appendChild(this.dom);
  }
  get r() {
    return this.getDefault("border-radius");
  }
  set r(val2) {
    this.overrideDefault("border-radius", val2);
  }
  static define() {
    return {
      tagname: "old-button-x",
      style: "button"
    };
  }
  click() {
    if (this._onpress) {
      let rect = this.getClientRects();
      let x = rect.x + rect.width * 0.5;
      let y = rect.y + rect.height * 0.5;
      let e2 = {
        x,
        y,
        stopPropagation: /* @__PURE__ */ __name(() => {
        }, "stopPropagation"),
        preventDefault: /* @__PURE__ */ __name(() => {
        }, "preventDefault")
      };
      this._onpress(e2);
    }
    super.click();
  }
  init() {
    let dpi = this.getDPI();
    let width = ~~(this.getDefault("width") * dpi);
    let height = ~~(this.getDefault("height") * dpi);
    this.dom.width = width;
    this.dom.height = height;
    this.dom.style["width"] = width / dpi + "px";
    this.dom.style["height"] = height / dpi + "px";
    this.dom.style["padding"] = this.dom.style["margin"] = "0px";
    this._name = void 0;
    this.updateName();
    this.bindEvents();
    this._redraw();
  }
  setAttribute(key2, val2) {
    super.setAttribute(key2, val2);
    if (key2 === "name") {
      this.updateName();
      this.updateWidth();
    }
  }
  old_bindEvents() {
    let press_gen = 0;
    let press = /* @__PURE__ */ __name((e2) => {
      e2.stopPropagation();
      if (const_default.DEBUG.buttonEvents) {
        console.log("button press", this._pressed, this.disabled, e2.button);
      }
      if (this.disabled) return;
      this._pressed = true;
      if (isMobile() && this.onclick && e2.button === 0) {
        this.onclick();
      }
      if (this._onpress) {
        this._onpress(this);
      }
      this._redraw();
      e2.preventDefault();
    }, "press");
    let depress = /* @__PURE__ */ __name((e2) => {
      if (const_default.DEBUG.buttonEvents)
        console.log("button depress", e2.button, e2.was_touch);
      if (this._auto_depress) {
        this._pressed = false;
        if (this.disabled) return;
        this._redraw();
      }
      e2.preventDefault();
      e2.stopPropagation();
      if (isMobile() || e2.type === "pointerup" && e2.button) {
        return;
      }
      this._redraw();
      if (const_default.DEBUG.buttonEvents) {
        console.log("button click callback:", this.onclick, this._onpress, this.onpress);
      }
      if (this.onclick && e2.pointerType !== "mouse") {
        this.onclick(this);
      }
      this.undoBreakPoint();
    }, "depress");
    this.addEventListener("mousedown", press, { captured: true, passive: false });
    this.addEventListener("mouseup", depress, { captured: true, passive: false });
    this.addEventListener("mouseover", (e2) => {
      if (this.disabled)
        return;
      this._highlight = true;
      this._repos_canvas();
      this._redraw();
    });
    this.addEventListener("mouseout", (e2) => {
      if (this.disabled)
        return;
      this._highlight = false;
      this._repos_canvas();
      this._redraw();
    });
  }
  updateDisabled() {
    if (this._last_disabled !== this.disabled) {
      this._last_disabled = this.disabled;
      this.dom._background = this.getDefault("background-color");
      this._repos_canvas();
      this._redraw();
      if (const_default.DEBUG.buttonEvents)
        console.log("disabled update!", this.disabled, this.style["background-color"]);
    }
  }
  updateDefaultSize() {
    const dpi = UIBase3.getDPI();
    let height = ~~this.getDefault("height") + this.getDefault("padding");
    let size = this.getDefault("DefaultText").size * 1.33;
    if (height === void 0 || size === void 0 || isNaN(height) || isNaN(size)) {
      return;
    }
    height = ~~(Math.max(height, size) * dpi);
    let cssHeight = height / dpi + "px";
    if (cssHeight !== this.style["height"]) {
      this.style["height"] = cssHeight;
      this.dom.style["height"] = cssHeight;
      this.dom.height = height;
      this._repos_canvas();
      this._redraw();
    }
  }
  _calcUpdateKey() {
    return _themeUpdateKey;
  }
  update() {
    super.update();
    this.style["user-select"] = "none";
    this.dom.style["user-select"] = "none";
    this.updateDefaultSize();
    this.updateWidth();
    this.updateDPI();
    this.updateName();
    this.updateDisabled();
    if (this.background !== this._last_bg) {
      this._last_bg = this.background;
      this._repos_canvas();
      this._redraw();
    }
    let key2 = this._calcUpdateKey();
    if (key2 !== this._last_but_update_key) {
      this._last_but_update_key = key2;
      this.setCSS();
      this._repos_canvas();
      this._redraw();
    }
  }
  setCSS() {
    super.setCSS();
    this.updateBorders();
    let name = this._name;
    if (name === void 0) {
      return;
    }
    let dpi = this.getDPI();
    let pad = this.getDefault("padding");
    let ts = this.getDefault("DefaultText").size;
    let tw = measureText(this, this._genLabel(), {
      size: ts,
      font: this.getDefault("DefaultText")
    }).width + 2 * pad + this._leftPad + this._rightPad;
    if (this._namePad !== void 0) {
      tw += this._namePad;
    }
    let w = this.getDefault("width");
    w = Math.max(w, tw);
    w = ~~w;
    this.dom.style["width"] = w + "px";
    this.updateBorders();
  }
  updateBorders(dom = this.dom) {
    let lwid = this.getDefault("border-width");
    if (lwid) {
      dom.style["border-color"] = this.getDefault("border-color");
      dom.style["border-width"] = lwid + "px";
      dom.style["border-style"] = "solid";
      dom.style["border-radius"] = this.getDefault("border-radius") + "px";
    } else {
      dom.style["border-color"] = "none";
      dom.style["border-width"] = "0px";
      dom.style["border-radius"] = this.getDefault("border-radius") + "px";
    }
  }
  updateName() {
    if (!this.hasAttribute("name")) {
      return;
    }
    let name = this.getAttribute("name");
    if (name !== this._name) {
      this._name = name;
      this.setCSS();
      this._repos_canvas();
      this._redraw();
    }
  }
  updateWidth(w_add = 0) {
  }
  _repos_canvas() {
    let dpi = this.getDPI();
    let w = parsepx2(this.dom.style["width"]);
    let h2 = parsepx2(this.dom.style["height"]);
    let w2 = ~~(w * dpi);
    let h22 = ~~(h2 * dpi);
    w = w2 / dpi;
    h2 = h22 / dpi;
    this.dom.width = w2;
    this.dom.style["width"] = w + "px";
    this.dom.height = h22;
    this.dom.style["height"] = h2 + "px";
  }
  updateDPI() {
    let dpi = this.getDPI();
    if (this._last_dpi !== dpi) {
      this._last_dpi = dpi;
      this.g.font = void 0;
      this.setCSS();
      this._repos_canvas();
      this._redraw();
    }
    if (this.style["background-color"]) {
      this.dom._background = this.style["background-color"];
      this.style["background-color"] = "";
    }
  }
  _genLabel() {
    return "" + this._name;
  }
  _getSubKey() {
    if (this._pressed) {
      return "depressed";
    } else if (this._highlight) {
      return "highlight";
    } else {
      return void 0;
    }
  }
  _redraw(draw_text = true) {
    let dpi = this.getDPI();
    let subkey = this._getSubKey();
    if (this._pressed && this._highlight) {
      this.dom._background = this.getSubDefault(subkey, "highlight-pressed", "BoxHighlight");
    } else if (this._pressed) {
      this.dom._background = this.getSubDefault(subkey, "pressed", "BoxDepressed");
    } else if (this._highlight) {
      this.dom._background = this.getSubDefault(subkey, "highlight", "BoxHighlight");
    } else {
      this.dom._background = this.getSubDefault(subkey, "background-color", "background-color");
    }
    drawRoundBox(this, this.dom, this.g);
    this.updateBorders();
    if (this._focus) {
      let w = this.dom.width, h2 = this.dom.height;
      let p = 1 / dpi;
      this.g.translate(p, p);
      let lw = this.g.lineWidth;
      this.g.lineWidth = this.getDefault("focus-border-width", void 0, 1) * dpi;
      drawRoundBox(this, this.dom, this.g, w - p * 2, h2 - p * 2, this.r, "stroke", this.getDefault("BoxHighlight"));
      this.g.lineWidth = lw;
      this.g.translate(-p, -p);
    }
    if (draw_text) {
      this._draw_text();
    }
  }
  _draw_text() {
    let dpi = this.getDPI();
    let subkey = this._getSubKey();
    let font = this.getSubDefault(subkey, "DefaultText");
    let pad = this.getDefault("padding") * dpi;
    let ts = font.size * dpi;
    let text = this._genLabel();
    let w = this.dom.width, h2 = this.dom.height;
    let tw = measureText(this, text, void 0, void 0, ts, font).width;
    let cx = pad * 0.5 + this._leftPad * dpi;
    let cy = ts + (h2 - ts) / 3;
    let g = this.g;
    drawText(this, ~~cx, ~~cy, text, {
      canvas: this.dom,
      g: this.g,
      size: ts / dpi,
      font
    });
  }
};
UIBase3.internalRegister(OldButton);

// scripts/path.ux/scripts/path-controller/controller.js
var controller_exports = {};
__export(controller_exports, {
  AbstractCurve: () => AbstractCurve,
  BSplineTransformOp: () => BSplineTransformOp,
  BaseVector: () => BaseVector2,
  BoolProperty: () => BoolProperty,
  BounceCurve: () => BounceCurve,
  COLINEAR: () => COLINEAR,
  COLINEAR_ISECT: () => COLINEAR_ISECT,
  CURVE_VERSION: () => CURVE_VERSION,
  ClosestCurveRets: () => ClosestCurveRets,
  ClosestModes: () => ClosestModes,
  Constraint: () => Constraint,
  Context: () => Context,
  ContextFlags: () => ContextFlags,
  ContextOverlay: () => ContextOverlay,
  Curve1D: () => Curve1D,
  Curve1DPoint: () => Curve1DPoint,
  Curve1DProperty: () => Curve1DProperty,
  Curve1dBSplineAddOp: () => Curve1dBSplineAddOp,
  Curve1dBSplineDeleteOp: () => Curve1dBSplineDeleteOp,
  Curve1dBSplineLoadTemplOp: () => Curve1dBSplineLoadTemplOp,
  Curve1dBSplineOpBase: () => Curve1dBSplineOpBase,
  Curve1dBSplineResetOp: () => Curve1dBSplineResetOp,
  Curve1dBSplineSelectOp: () => Curve1dBSplineSelectOp,
  CurveConstructors: () => CurveConstructors,
  CurveFlags: () => CurveFlags,
  CurveTypeData: () => CurveTypeData,
  DataAPI: () => DataAPI,
  DataFlags: () => DataFlags,
  DataList: () => DataList,
  DataPath: () => DataPath,
  DataPathError: () => DataPathError,
  DataPathSetOp: () => DataPathSetOp,
  DataStruct: () => DataStruct,
  DataTypes: () => DataTypes,
  DoubleClickHandler: () => DoubleClickHandler,
  EaseCurve: () => EaseCurve,
  ElasticCurve: () => ElasticCurve,
  EnumKeyPair: () => EnumKeyPair,
  EnumProperty: () => EnumProperty,
  EulerOrders: () => EulerOrders,
  F32BaseVector: () => F32BaseVector,
  F64BaseVector: () => F64BaseVector,
  FEPS: () => FEPS,
  FEPS_DATA: () => FEPS_DATA,
  FLOAT_MAX: () => FLOAT_MAX,
  FLOAT_MIN: () => FLOAT_MIN,
  FlagProperty: () => FlagProperty,
  FloatArrayProperty: () => FloatArrayProperty,
  FloatConstrinats: () => FloatConstrinats,
  FloatProperty: () => FloatProperty,
  HotKey: () => HotKey,
  I16BaseVector: () => I16BaseVector,
  I32BaseVector: () => I32BaseVector,
  I8BaseVector: () => I8BaseVector,
  IntProperty: () => IntProperty,
  IntegerConstraints: () => IntegerConstraints,
  KeyMap: () => KeyMap,
  LINECROSS: () => LINECROSS,
  ListIface: () => ListIface,
  ListProperty: () => ListProperty,
  LockedContext: () => LockedContext,
  MacroClasses: () => MacroClasses,
  MacroLink: () => MacroLink,
  Mat4Property: () => Mat4Property,
  Mat4Stack: () => Mat4Stack,
  Matrix4: () => Matrix4,
  Matrix4UI: () => Matrix4UI,
  MinMax: () => MinMax,
  ModelInterface: () => ModelInterface,
  NumProperty: () => NumProperty,
  NumberConstraints: () => NumberConstraints,
  NumberConstraintsBase: () => NumberConstraintsBase,
  OverlayClasses: () => OverlayClasses,
  PackNode: () => PackNode,
  PackNodeVertex: () => PackNodeVertex,
  ParamKey: () => ParamKey,
  Parser: () => Parser,
  PlaneOps: () => PlaneOps,
  PropClasses: () => PropClasses,
  PropFlags: () => PropFlags,
  PropSubTypes: () => PropSubTypes2,
  PropTypes: () => PropTypes,
  Quat: () => Quat,
  QuatProperty: () => QuatProperty,
  RandCurve: () => RandCurve,
  ReportProperty: () => ReportProperty,
  SQRT2: () => SQRT2,
  SavedToolDefaults: () => SavedToolDefaults,
  SimpleCurveBase: () => SimpleCurveBase,
  Solver: () => Solver,
  SplineTemplateIcons: () => SplineTemplateIcons,
  SplineTemplates: () => SplineTemplates,
  StringProperty: () => StringProperty,
  StringSetProperty: () => StringSetProperty,
  StructFlags: () => StructFlags,
  TangentModes: () => TangentModes,
  ToolClasses: () => ToolClasses,
  ToolFlags: () => ToolFlags,
  ToolMacro: () => ToolMacro,
  ToolOp: () => ToolOp,
  ToolOpIface: () => ToolOpIface,
  ToolPaths: () => ToolPaths,
  ToolProperty: () => ToolProperty2,
  ToolPropertyCache: () => ToolPropertyCache,
  ToolStack: () => ToolStack,
  UI16BaseVector: () => UI16BaseVector,
  UI32BaseVector: () => UI32BaseVector,
  UI8BaseVector: () => UI8BaseVector,
  UndoFlags: () => UndoFlags,
  Vec2Property: () => Vec2Property,
  Vec3Property: () => Vec3Property,
  Vec4Property: () => Vec4Property,
  VecPropertyBase: () => VecPropertyBase,
  Vector2: () => Vector2,
  Vector3: () => Vector32,
  Vector4: () => Vector4,
  _NumberPropertyBase: () => _NumberPropertyBase,
  _old_isect_ray_plane: () => _old_isect_ray_plane,
  _setModalAreaClass: () => _setModalAreaClass,
  _setScreenClass: () => _setScreenClass,
  aabb_intersect_2d: () => aabb_intersect_2d,
  aabb_intersect_3d: () => aabb_intersect_3d,
  aabb_isect_2d: () => aabb_isect_2d,
  aabb_isect_3d: () => aabb_isect_3d,
  aabb_isect_cylinder_3d: () => aabb_isect_cylinder_3d,
  aabb_isect_line_2d: () => aabb_isect_line_2d,
  aabb_isect_line_3d: () => aabb_isect_line_3d,
  aabb_overlap_area: () => aabb_overlap_area,
  aabb_sphere_dist: () => aabb_sphere_dist,
  aabb_sphere_isect: () => aabb_sphere_isect,
  aabb_sphere_isect_2d: () => aabb_sphere_isect_2d,
  aabb_union: () => aabb_union,
  aabb_union_2d: () => aabb_union_2d,
  angle_between_vecs: () => angle_between_vecs,
  barycentric_v2: () => barycentric_v2,
  binomial: () => binomial,
  buildParser: () => buildParser,
  buildToolOpAPI: () => buildToolOpAPI,
  buildToolSysAPI: () => buildToolSysAPI,
  calc_projection_axes: () => calc_projection_axes,
  circ_from_line_tan: () => circ_from_line_tan,
  circ_from_line_tan_2d: () => circ_from_line_tan_2d,
  clip_line_w: () => clip_line_w,
  closestPoint: () => closestPoint,
  closest_point_on_line: () => closest_point_on_line,
  closest_point_on_quad: () => closest_point_on_quad,
  closest_point_on_tri: () => closest_point_on_tri,
  cmyk_to_rgb: () => cmyk_to_rgb,
  colinear: () => colinear,
  colinear2d: () => colinear2d,
  config: () => config_exports,
  convex_quad: () => convex_quad,
  copyEvent: () => copyEvent,
  corner_normal: () => corner_normal,
  customPropertyTypes: () => customPropertyTypes,
  defaultDecimalPlaces: () => defaultDecimalPlaces,
  defaultRadix: () => defaultRadix,
  dihedral_v3_sqr: () => dihedral_v3_sqr,
  dist_to_line: () => dist_to_line,
  dist_to_line_2d: () => dist_to_line_2d,
  dist_to_line_sqr: () => dist_to_line_sqr,
  dist_to_tri_v3: () => dist_to_tri_v3,
  dist_to_tri_v3_old: () => dist_to_tri_v3_old,
  dist_to_tri_v3_sqr: () => dist_to_tri_v3_sqr,
  evalHermiteTable: () => evalHermiteTable,
  eventWasTouch: () => eventWasTouch,
  eventgraph: () => eventdag_exports,
  excludedKeys: () => excludedKeys,
  expand_line: () => expand_line,
  expand_rect2d: () => expand_rect2d,
  feps: () => feps,
  genHermiteTable: () => genHermiteTable,
  gen_circle: () => gen_circle,
  getCurve: () => getCurve,
  getDataPathToolOp: () => getDataPathToolOp,
  getTempProp: () => getTempProp,
  getVecClass: () => getVecClass,
  get_boundary_winding: () => get_boundary_winding,
  get_rect_lines: () => get_rect_lines,
  get_rect_points: () => get_rect_points,
  get_tri_circ: () => get_tri_circ,
  graphGetIslands: () => graphGetIslands,
  graphPack: () => graphPack,
  haveModal: () => haveModal,
  hsv_to_rgb: () => hsv_to_rgb,
  html5_fileapi: () => html5_fileapi_exports,
  initSimpleController: () => initSimpleController,
  initSplineTemplates: () => initSplineTemplates,
  initToolPaths: () => initToolPaths,
  inrect_2d: () => inrect_2d,
  isLeftClick: () => isLeftClick,
  isMouseDown: () => isMouseDown,
  isNum: () => isNum,
  isNumber: () => isNumber,
  isVecProperty: () => isVecProperty,
  isect_ray_plane: () => isect_ray_plane,
  keymap: () => keymap,
  keymap_latin_1: () => keymap_latin_1,
  line_isect: () => line_isect,
  line_line_cross: () => line_line_cross,
  line_line_isect: () => line_line_isect,
  lzstring: () => lz_string_default,
  makeCircleMesh: () => makeCircleMesh,
  makeDerivedOverlay: () => makeDerivedOverlay,
  makeVector2: () => makeVector2,
  makeVector3: () => makeVector3,
  makeVector4: () => makeVector4,
  math: () => math_exports,
  minmax_verts: () => minmax_verts,
  modalstack: () => modalstack,
  normal_poly: () => normal_poly,
  normal_quad: () => normal_quad,
  normal_quad_old: () => normal_quad_old,
  normal_tri: () => normal_tri,
  nstructjs: () => struct_default,
  parseToolPath: () => parseToolPath,
  parseutil: () => parseutil_exports,
  pathDebugEvent: () => pathDebugEvent,
  pathParser: () => pathParser,
  point_in_aabb: () => point_in_aabb,
  point_in_aabb_2d: () => point_in_aabb_2d,
  point_in_hex: () => point_in_hex,
  point_in_tri: () => point_in_tri,
  popModalLight: () => popModalLight,
  popReportName: () => popReportName,
  project: () => project,
  pushModalLight: () => pushModalLight,
  pushPointerModal: () => pushPointerModal,
  pushReportName: () => pushReportName,
  quad_bilinear: () => quad_bilinear,
  registerTool: () => registerTool,
  reverse_keymap: () => reverse_keymap,
  rgb_to_cmyk: () => rgb_to_cmyk,
  rgb_to_hsv: () => rgb_to_hsv,
  rot2d: () => rot2d,
  setContextClass: () => setContextClass,
  setDataPathToolOp: () => setDataPathToolOp,
  setDefaultUndoHandlers: () => setDefaultUndoHandlers,
  setImplementationClass: () => setImplementationClass,
  setNotifier: () => setNotifier,
  setPropTypes: () => setPropTypes,
  simple_tri_aabb_isect: () => simple_tri_aabb_isect,
  singleMouseEvent: () => singleMouseEvent,
  solver: () => solver_exports,
  test: () => test,
  testToolParser: () => testToolParser,
  tet_volume: () => tet_volume,
  toolprop_abstract: () => toolprop_abstract_exports,
  tri_angles: () => tri_angles,
  tri_area: () => tri_area,
  trilinear_co: () => trilinear_co,
  trilinear_co2: () => trilinear_co2,
  trilinear_v3: () => trilinear_v3,
  unproject: () => unproject,
  util: () => util_exports,
  vectormath: () => vectormath_exports,
  winding: () => winding,
  winding_axis: () => winding_axis
});

// scripts/path.ux/scripts/path-controller/util/solver.js
var solver_exports = {};
__export(solver_exports, {
  Constraint: () => Constraint,
  Solver: () => Solver
});
var Constraint = class {
  static {
    __name(this, "Constraint");
  }
  constructor(name, func2, klst, params, k2 = 1) {
    this.glst = [];
    this.klst = klst;
    this.wlst = [];
    this.k = k2;
    this.params = params;
    this.name = name;
    for (let ks of klst) {
      this.glst.push(new Float64Array(ks.length));
      const ws = new Float64Array(ks.length);
      for (let i2 = 0; i2 < ws.length; i2++) {
        ws[i2] = 1;
      }
      this.wlst.push(ws);
    }
    this.df = 5e-4;
    this.threshold = 1e-4;
    if (func2 !== void 0) {
      this.func = func2;
    }
    if (!this.funcDv) {
      this.funcDv = null;
    }
  }
  postSolve() {
  }
  evaluate(no_dvs = false) {
    let r1 = this.func(this.params);
    if (this.funcDv) {
      this.funcDv(this.params, this.glst);
      return r1;
    }
    if (Math.abs(r1) < this.threshold)
      return 0;
    let df = this.df;
    if (no_dvs)
      return r1;
    for (let i2 = 0; i2 < this.klst.length; i2++) {
      let gs = this.glst[i2];
      let ks = this.klst[i2];
      for (let j2 = 0; j2 < ks.length; j2++) {
        let orig = ks[j2];
        ks[j2] += df;
        let r2 = this.func(this.params);
        ks[j2] = orig;
        gs[j2] = (r2 - r1) / df;
      }
    }
    return r1;
  }
};
var Solver = class {
  static {
    __name(this, "Solver");
  }
  constructor() {
    this.constraints = [];
    this.gk = 0.99;
    this.simple = false;
    this.randCons = false;
    this.threshold = 0.01;
  }
  remove(con) {
    this.constraints.remove(con);
  }
  add(con) {
    this.constraints.push(con);
  }
  solveStep(gk = this.gk) {
    let err = 0;
    let cons = this.constraints;
    for (let ci = 0; ci < cons.length; ci++) {
      let ri = ci;
      if (this.randCons) {
        ri = ~~(Math.random() * this.constraints.length * 0.99999);
      }
      let con = cons[ri];
      let r1 = con.evaluate();
      if (r1 === 0)
        continue;
      err += Math.abs(r1);
      let totgs = 0;
      for (let i2 = 0; i2 < con.klst.length; i2++) {
        let ks = con.klst[i2], gs = con.glst[i2];
        for (let j2 = 0; j2 < ks.length; j2++) {
          totgs += gs[j2] * gs[j2];
        }
      }
      if (totgs === 0) {
        continue;
      }
      r1 /= totgs;
      for (let i2 = 0; i2 < con.klst.length; i2++) {
        let ks = con.klst[i2], gs = con.glst[i2], ws = con.wlst[i2];
        for (let j2 = 0; j2 < ks.length; j2++) {
          ks[j2] += -r1 * gs[j2] * con.k * gk * ws[j2];
        }
        con.postSolve();
      }
    }
    return err;
  }
  solveStepSimple(gk = this.gk) {
    let err = 0;
    let cons = this.constraints;
    for (let ci = 0; ci < cons.length; ci++) {
      let ri = ci;
      if (this.randCons) {
        ri = ~~(Math.random() * this.constraints.length * 0.99999);
      }
      let con = cons[ri];
      let r1 = con.evaluate();
      if (r1 === 0)
        continue;
      err += Math.abs(r1);
      let totgs = 0;
      for (let i2 = 0; i2 < con.klst.length; i2++) {
        let ks = con.klst[i2], gs = con.glst[i2];
        for (let j2 = 0; j2 < ks.length; j2++) {
          totgs += gs[j2] * gs[j2];
        }
      }
      if (totgs === 0) {
        continue;
      }
      totgs = 1e-4 / Math.sqrt(totgs);
      for (let i2 = 0; i2 < con.klst.length; i2++) {
        let ks = con.klst[i2], gs = con.glst[i2], ws = con.wlst[j];
        for (let j2 = 0; j2 < ks.length; j2++) {
          ks[j2] += -totgs * gs[j2] * con.k * gk * ws[j2];
        }
      }
      con.postSolve();
    }
    return err;
  }
  solve(steps, gk = this.gk, printError = false) {
    let err = 0;
    for (let i2 = 0; i2 < steps; i2++) {
      if (this.simple) {
        err = this.solveStepSimple(gk);
      } else {
        err = this.solveStep(gk);
      }
      if (printError) {
        console.warn("average error:", (err / this.constraints.length).toFixed(4));
      }
      if (err < this.threshold / this.constraints.length) {
        break;
      }
    }
    return err;
  }
};

// scripts/path.ux/scripts/path-controller/util/graphpack.js
var idgen2 = 0;
var PackNodeVertex = class extends Vector2 {
  static {
    __name(this, "PackNodeVertex");
  }
  constructor(node, co) {
    super(co);
    this.node = node;
    this._id = idgen2++;
    this.edges = [];
    this._absPos = new Vector2();
  }
  get absPos() {
    this._absPos.load(this).add(this.node.pos);
    return this._absPos;
  }
  [Symbol.keystr]() {
    return this._id;
  }
};
var PackNode = class {
  static {
    __name(this, "PackNode");
  }
  constructor() {
    this.pos = new Vector2();
    this.vel = new Vector2();
    this.oldpos = new Vector2();
    this._id = idgen2++;
    this.size = new Vector2();
    this.verts = [];
  }
  [Symbol.keystr]() {
    return this._id;
  }
};
function copyGraph(nodes) {
  let ret2 = [];
  let idmap = {};
  for (let n of nodes) {
    let n2 = new PackNode();
    n2._id = n._id;
    n2.pos.load(n.pos);
    n2.vel.load(n.vel);
    n2.size.load(n.size);
    n2.verts = [];
    idmap[n2._id] = n2;
    for (let v of n.verts) {
      let v2 = new PackNodeVertex(n2, v);
      v2._id = v._id;
      idmap[v2._id] = v2;
      n2.verts.push(v2);
    }
    ret2.push(n2);
  }
  for (let n of nodes) {
    for (let v of n.verts) {
      let v2 = idmap[v._id];
      for (let v3 of v.edges) {
        v2.edges.push(idmap[v3._id]);
      }
    }
  }
  return ret2;
}
__name(copyGraph, "copyGraph");
function getCenter(nodes) {
  let cent = new Vector2();
  for (let n of nodes) {
    cent.add(n.pos);
  }
  if (nodes.length === 0)
    return cent;
  cent.mulScalar(1 / nodes.length);
  return cent;
}
__name(getCenter, "getCenter");
function loadGraph(nodes, copy) {
  let idmap = {};
  for (let i2 = 0; i2 < nodes.length; i2++) {
    nodes[i2].pos.load(copy[i2].pos);
    nodes[i2].oldpos.load(copy[i2].oldpos);
    nodes[i2].vel.load(copy[i2].vel);
  }
}
__name(loadGraph, "loadGraph");
function graphGetIslands(nodes) {
  let islands = [];
  let visit1 = new set2();
  let rec = /* @__PURE__ */ __name((n, island) => {
    island.push(n);
    visit1.add(n);
    for (let v of n.verts) {
      for (let e2 of v.edges) {
        let n2 = e2.node;
        if (n2 !== n && !visit1.has(n2)) {
          rec(n2, island);
        }
      }
    }
  }, "rec");
  for (let n of nodes) {
    if (visit1.has(n)) {
      continue;
    }
    let island = [];
    islands.push(island);
    rec(n, island);
  }
  return islands;
}
__name(graphGetIslands, "graphGetIslands");
function graphPack(nodes, margin_or_args = 15, steps = 10, updateCb = void 0) {
  let margin = margin_or_args;
  let speed = 1;
  if (typeof margin === "object") {
    let args2 = margin;
    margin = args2.margin ?? 15;
    steps = args2.steps ?? 10;
    updateCb = args2.updateCb;
    speed = args2.speed ?? 1;
  }
  let orignodes = nodes;
  nodes = copyGraph(nodes);
  let decay = 1;
  let decayi = 0;
  let min3 = new Vector2().addScalar(1e17);
  let max3 = new Vector2().addScalar(-1e17);
  let tmp = new Vector2();
  for (let n of nodes) {
    min3.min(n.pos);
    tmp.load(n.pos).add(n.size);
    max3.max(tmp);
  }
  let size = new Vector2(max3).sub(min3);
  for (let n of nodes) {
    n.pos[0] += (Math.random() - 0.5) * 5 / size[0] * speed;
    n.pos[1] += (Math.random() - 0.5) * 5 / size[1] * speed;
  }
  let nodemap = {};
  for (let n of nodes) {
    n.vel.zero();
    nodemap[n._id] = n;
    for (let v of n.verts) {
      nodemap[v._id] = v;
    }
  }
  let visit = new set2();
  let verts = new set2();
  let isect = [];
  let disableEdges = false;
  function edge_c(params) {
    let [v1, v2, restlen] = params;
    if (disableEdges) return 0;
    return Math.abs(v1.absPos.vectorDistance(v2.absPos) - restlen);
  }
  __name(edge_c, "edge_c");
  let p1 = new Vector2();
  let p2 = new Vector2();
  let s1 = new Vector2();
  let s2 = new Vector2();
  function loadBoxes(n1, n2, margin1 = margin) {
    p1.load(n1.pos);
    p2.load(n2.pos);
    s1.load(n1.size);
    s2.load(n2.size);
    p1.subScalar(margin1);
    p2.subScalar(margin1);
    s1.addScalar(margin1 * 2);
    s2.addScalar(margin1 * 2);
  }
  __name(loadBoxes, "loadBoxes");
  let disableArea = false;
  function area_c(params) {
    let [n1, n2] = params;
    if (disableArea)
      return 0;
    loadBoxes(n1, n2);
    let a1 = n1.size[0] * n1.size[1];
    let a22 = n2.size[0] * n2.size[1];
    return aabb_overlap_area(p1, s1, p2, s2);
    return aabb_overlap_area(p1, s1, p2, s2) / (a1 + a22);
  }
  __name(area_c, "area_c");
  let lasterr, besterr, best;
  let err;
  let islands = graphGetIslands(nodes);
  let fakeVerts = [];
  for (let island of islands) {
    let n = island[0];
    let fv = new PackNodeVertex(n);
    fakeVerts.push(fv);
  }
  let solveStep1 = /* @__PURE__ */ __name((gk = 1) => {
    let solver = new Solver();
    isect.length = 0;
    visit = new set2();
    if (fakeVerts.length > 1) {
      for (let i3 = 1; i3 < fakeVerts.length; i3++) {
        let v1 = fakeVerts[0];
        let v2 = fakeVerts[i3];
        let rlen = 1;
        let con = new Constraint("edge_c", edge_c, [v1.node.pos, v2.node.pos], [v1, v2, rlen]);
        con.k = 0.25;
        solver.add(con);
      }
    }
    for (let n1 of nodes) {
      for (let v of n1.verts) {
        verts.add(v);
        for (let v2 of v.edges) {
          if (v2._id < v._id) continue;
          let rlen = n1.size.vectorLength() * 0;
          let con = new Constraint("edge_c", edge_c, [v.node.pos, v2.node.pos], [v, v2, rlen]);
          con.k = 1;
          solver.add(con);
        }
      }
      for (let n2 of nodes) {
        if (n1 === n2) continue;
        let key2 = Math.min(n1._id, n2._id) + ":" + Math.max(n1._id, n2._id);
        if (visit.has(key2)) continue;
        loadBoxes(n1, n2);
        let area = aabb_overlap_area(p1, s1, p2, s2);
        if (area > 0.01) {
          let size2 = decay * (n1.size.vectorLength() + n2.size.vectorLength()) * speed;
          n1.pos[0] += (Math.random() - 0.5) * size2;
          n1.pos[1] += (Math.random() - 0.5) * size2;
          n2.pos[0] += (Math.random() - 0.5) * size2;
          n2.pos[1] += (Math.random() - 0.5) * size2;
          isect.push([n1, n2]);
          visit.add(key2);
        }
      }
      for (let [n12, n2] of isect) {
        let con = new Constraint("area_c", area_c, [n12.pos, n2.pos], [n12, n2]);
        solver.add(con);
        con.k = 1;
      }
    }
    return solver;
  }, "solveStep1");
  let i2 = 1;
  let solveStep = /* @__PURE__ */ __name((gk = 0.5) => {
    let solver = solveStep1();
    if (i2 % 40 === 0) {
      let c1 = getCenter(nodes);
      let rfac = 1e3;
      if (best) loadGraph(nodes, best);
      for (let n of nodes) {
        n.pos[0] += (Math.random() - 0.5) * rfac * speed;
        n.pos[1] += (Math.random() - 0.5) * rfac * speed;
        n.vel.zero();
      }
      let c2 = getCenter(nodes);
      c1.sub(c2);
      for (let n of nodes) {
        n.pos.add(c1);
      }
    }
    let err2 = 1e17;
    for (let n of nodes) {
      n.oldpos.load(n.pos);
      n.pos.addFac(n.vel, 0.5);
    }
    disableEdges = false;
    disableArea = true;
    solver.solve(1, gk);
    disableEdges = true;
    disableArea = false;
    for (let j2 = 0; j2 < 10; j2++) {
      solver = solveStep1();
      err2 = solver.solve(10, gk * speed);
    }
    for (let n of nodes) {
      n.vel.load(n.pos).sub(n.oldpos);
    }
    disableEdges = false;
    disableArea = true;
    err2 = 0;
    for (let con of solver.constraints) {
      err2 += con.evaluate(true);
    }
    disableEdges = false;
    disableArea = false;
    lasterr = err2;
    let add = Math.random() * besterr * Math.exp(-i2 * 0.1);
    if (besterr === void 0 || err2 < besterr + add) {
      best = copyGraph(nodes);
      besterr = err2;
    }
    i2++;
    return err2;
  }, "solveStep");
  for (let j2 = 0; j2 < steps; j2++) {
    solveStep();
    decayi++;
    decay = Math.exp(-decayi * 0.1);
  }
  min3.zero().addScalar(1e17);
  max3.zero().addScalar(-1e17);
  for (let node of best ? best : nodes) {
    min3.min(node.pos);
    p2.load(node.pos).add(node.size);
    max3.max(p2);
  }
  for (let node of best ? best : nodes) {
    node.pos.sub(min3);
  }
  loadGraph(orignodes, best ? best : nodes);
  if (updateCb) {
    if (nodes._timer !== void 0) {
      window.clearInterval(nodes._timer);
    }
    nodes._timer = window.setInterval(() => {
      let time = time_ms();
      while (time_ms() - time < 50) {
        let err2 = solveStep();
      }
      if (cconst.DEBUG.boxPacker) {
        console.log("err", (besterr / nodes.length).toFixed(2), (lasterr / nodes.length).toFixed(2), "isects", isect.length);
      }
      if (best) loadGraph(orignodes, best);
      if (updateCb() === false) {
        clearInterval(nodes._timer);
        return;
      }
    }, 100);
    let timer2 = nodes._timer;
    return {
      stop: /* @__PURE__ */ __name(() => {
        if (best) loadGraph(nodes, best);
        window.clearInterval(timer2);
        nodes._timer = void 0;
      }, "stop")
    };
  }
}
__name(graphPack, "graphPack");

// scripts/path.ux/scripts/widgets/ui_menu.js
var EnumProperty4 = EnumProperty, PropTypes3 = PropTypes;
var UIBase4 = UIBase2, PackFlags3 = PackFlags, IconSheets3 = IconSheets;
function getpx(css) {
  return parseFloat(css.trim().replace("px", ""));
}
__name(getpx, "getpx");
function debugmenu() {
  if (window.DEBUG && window.DEBUG.menu) {
    console.warn("%cmenu:", "color:blue", ...arguments);
  }
}
__name(debugmenu, "debugmenu");
var Menu = class _Menu extends UIBase4 {
  static {
    __name(this, "Menu");
  }
  constructor() {
    super();
    this.parentMenu = void 0;
    this._was_clicked = false;
    this.items = [];
    this.autoSearchMode = true;
    this._ignoreFocusEvents = false;
    this.closeOnMouseUp = true;
    this._submenu = void 0;
    this.ignoreFirstClick = false;
    this.itemindex = 0;
    this.closed = false;
    this.started = false;
    this.activeItem = void 0;
    this.overrideDefault("DefaultText", this.getDefault("MenuText"));
    this.container = document.createElement("span");
    this.container.style["display"] = "flex";
    this.container.style["color"] = this.getDefault("MenuText").color;
    this.container.setAttribute("class", "menucon");
    this.dom = document.createElement("ul");
    this.dom.setAttribute("class", "menu");
    let style = this.menustyle = document.createElement("style");
    this.buildStyle();
    this.dom.setAttribute("tabindex", -1);
    this.shadow.appendChild(style);
    this.shadow.appendChild(this.container);
  }
  static define() {
    return {
      tagname: "menu-x",
      style: "menu"
    };
  }
  float(x, y, zindex = void 0) {
    let dpi = this.getDPI();
    let rect = this.dom.getClientRects();
    let maxx = this.getWinWidth() - 10;
    let maxy = this.getWinHeight() - 10;
    if (rect.length > 0) {
      rect = rect[0];
      if (y + rect.height > maxy) {
        y = maxy - rect.height - 1;
      }
      if (x + rect.width > maxx) {
        x = maxx - rect.width - 1;
      }
    }
    super.float(x, y, 50);
  }
  click() {
    if (this._was_clicked) {
      return;
    }
    if (this.ignoreFirstClick) {
      this.ignoreFirstClick = Math.max(this.ignoreFirstClick - 1, 0);
      return;
    }
    if (!this.activeItem || this.activeItem._isMenu) {
      return;
    }
    this._was_clicked = true;
    if (this.onselect) {
      try {
        this.onselect(this.activeItem._id);
      } catch (error) {
        print_stack(error);
        console.log("Error in menu callback");
      }
    }
    this.close();
  }
  _ondestroy() {
    if (this.started) {
      menuWrangler.popMenu(this);
      if (this.onclose) {
        this.onclose();
      }
    }
  }
  init() {
    super.init();
    this.setCSS();
  }
  close() {
    if (this.closed) {
      return;
    }
    this.closed = true;
    if (this.started) {
      menuWrangler.popMenu(this);
    }
    this.started = false;
    if (this._popup) {
      this._popup.end();
      this._popup = void 0;
    }
    this.remove();
    this.dom.remove();
    if (this.onclose) {
      this.onclose(this);
    }
  }
  _select(dir, focus = true) {
    if (this.activeItem === void 0) {
      for (let item of this.items) {
        if (!item.hidden) {
          this.setActive(item, focus);
          break;
        }
      }
    } else {
      let i2 = this.items.indexOf(this.activeItem);
      let item = this.activeItem;
      do {
        i2 = (i2 + dir + this.items.length) % this.items.length;
        item = this.items[i2];
        if (!item.hidden) {
          break;
        }
      } while (item !== this.activeItem);
      this.setActive(item, focus);
    }
    if (this.hasSearchBox) {
      this.activeItem.scrollIntoView();
    }
  }
  selectPrev(focus = true) {
    return this._select(-1, focus);
  }
  selectNext(focus = true) {
    return this._select(1, focus);
  }
  start_fancy(prepend, setActive = true) {
    return this.startFancy(prepend, setActive);
  }
  setActive(item, focus = true) {
    if (this.activeItem === item) {
      return;
    }
    if (this.activeItem) {
      this.activeItem.style["background-color"] = this.getDefault("MenuBG");
      if (focus) {
        this.activeItem.blur();
      }
    }
    if (item) {
      item.style["background-color"] = this.getDefault("MenuHighlight");
      if (focus) {
        item.focus();
      }
    }
    this.activeItem = item;
  }
  startFancy(prepend, setActive = true) {
    this.hasSearchBox = true;
    this.started = true;
    menuWrangler.pushMenu(this);
    let dom2 = document.createElement("div");
    this.dom.setAttribute("class", "menu");
    dom2.setAttribute("class", "menu");
    let sbox = this.textbox = UIBase4.createElement("textbox-x");
    this.textbox.parentWidget = this;
    dom2.appendChild(sbox);
    dom2.appendChild(this.dom);
    dom2.style["height"] = "300px";
    this.dom.style["height"] = "300px";
    this.dom.style["overflow"] = "scroll";
    if (prepend) {
      this.container.prepend(dom2);
    } else {
      this.container.appendChild(dom2);
    }
    dom2.parentWidget = this.container;
    sbox.focus();
    sbox.onchange = () => {
      let t = sbox.text.trim().toLowerCase();
      for (let item of this.items) {
        item.hidden = true;
        item.remove();
      }
      for (let item of this.items) {
        let ok = t == "";
        ok = ok || item.innerHTML.toLowerCase().search(t) >= 0;
        if (ok) {
          item.hidden = false;
          this.dom.appendChild(item);
        } else if (item === this.activeItem) {
          this.selectNext(false);
        }
      }
    };
    sbox.addEventListener("keydown", (e2) => {
      switch (e2.keyCode) {
        case 27:
          this.close();
          break;
        case 13:
          this.click(this.activeItem);
          this.close();
          break;
      }
    });
  }
  start(prepend = false, setActive = true) {
    this.closed = false;
    this.started = true;
    this.focus();
    menuWrangler.pushMenu(this);
    let dokey = /* @__PURE__ */ __name((key2) => {
      let val2 = this.getDefault(key2);
      if (typeof val2 === "number") {
        val2 = "" + val2 + "px";
      }
      if (val2 !== void 0) {
        this.dom.style[key2] = val2;
      }
    }, "dokey");
    dokey("padding");
    dokey("padding-top");
    dokey("padding-left");
    dokey("padding-right");
    dokey("padding-bottom");
    if (this.items.length > 15 && this.autoSearchMode) {
      return this.start_fancy(prepend, setActive);
    }
    if (prepend) {
      this.container.prepend(this.dom);
    } else {
      this.container.appendChild(this.dom);
    }
    if (!setActive)
      return;
    this.setCSS();
    this.flushUpdate();
    window.setTimeout(() => {
      this.flushUpdate();
      if (this.activeItem === void 0) {
        this.activeItem = this.dom.childNodes[0];
      }
      if (this.activeItem === void 0) {
        return;
      }
      this.activeItem.focus();
    }, 0);
  }
  addItemExtra(text, id = void 0, hotkey, icon = -1, add = true, tooltip = void 0) {
    let dom = document.createElement("span");
    dom.style["display"] = "inline-flex";
    dom.hotkey = hotkey;
    dom.icon = icon;
    let icon_div;
    if (1) {
      icon_div = makeIconDiv(icon, IconSheets3.SMALL);
    } else {
      let tilesize = iconmanager.getTileSize(IconSheets3.SMALL);
      icon_div = document.createElement("span");
      icon_div.style["padding"] = icon_div.style["margin"] = "0px";
      icon_div.style["width"] = tilesize + "px";
      icon_div.style["height"] = tilesize + "px";
    }
    icon_div.style["display"] = "inline-flex";
    icon_div.style["margin-right"] = "1px";
    icon_div.style["align"] = "left";
    let span = document.createElement("span");
    span.style["font"] = getFont(this, void 0, "MenuText");
    let dpi = this.getDPI();
    let tsize = this.getDefault("MenuText").size;
    let canvas = document.createElement("canvas");
    let g = canvas.getContext("2d");
    g.font = span.style["font"];
    let rect = span.getClientRects();
    let twid = Math.ceil(g.measureText(text).width);
    let hwid;
    if (hotkey) {
      dom.hotkey = hotkey;
      g.font = getFont(this, void 0, "HotkeyText");
      hwid = Math.ceil(g.measureText(hotkey).width / UIBase4.getDPI());
      twid += hwid + 8;
    }
    span.innerText = text;
    span.style["word-wrap"] = "none";
    span.style["white-space"] = "pre";
    span.style["overflow"] = "hidden";
    span.style["text-overflow"] = "clip";
    span.style["width"] = ~~twid + "px";
    span.style["padding"] = "0px";
    span.style["margin"] = "0px";
    dom.style["width"] = "100%";
    dom.appendChild(icon_div);
    dom.appendChild(span);
    if (hotkey) {
      let hotkey_span = document.createElement("span");
      hotkey_span.innerText = hotkey;
      hotkey_span.style["display"] = "inline-flex";
      hotkey_span.style["margin"] = "0px";
      hotkey_span.style["margin-left"] = "auto";
      hotkey_span.style["margin-right"] = "0px";
      hotkey_span.style["padding"] = "0px";
      hotkey_span.style["font"] = getFont(this, void 0, "HotkeyText");
      hotkey_span.style["color"] = this.getDefault("HotkeyTextColor");
      hotkey_span.style["width"] = "max-content";
      hotkey_span.style["text-align"] = "right";
      hotkey_span.style["justify-content"] = "right";
      hotkey_span["flex-wrap"] = "nowrap";
      hotkey_span["text-wrap"] = "nowrap";
      dom.appendChild(hotkey_span);
    }
    let ret2 = this.addItem(dom, id, add);
    ret2.hotkey = hotkey;
    ret2.icon = icon;
    ret2.label = text ? text : ret2.innerText;
    if (tooltip) {
      ret2.title = tooltip;
    }
    return ret2;
  }
  //item can be menu or text
  addItem(item, id, add = true, tooltip = void 0) {
    id = id === void 0 ? item : id;
    let text = item;
    if (typeof item === "string" || item instanceof String) {
      let dom = document.createElement("dom");
      dom.style["text-align"] = "left";
      dom.textContent = item;
      item = dom;
    } else {
      text = item.textContent;
    }
    let li = document.createElement("li");
    li.setAttribute("tabindex", this.itemindex++);
    li.setAttribute("class", "menuitem");
    if (tooltip !== void 0) {
      li.title = tooltip;
    }
    if (item instanceof _Menu) {
      let dom = document.createElement("span");
      dom.innerHTML = "" + item.title;
      dom._id = dom.id = id;
      dom.setAttribute("class", "menu");
      li.style["width"] = "100%";
      li.appendChild(dom);
      li._isMenu = true;
      li._menu = item;
      item.parentMenu = this;
      item.hidden = false;
      item.container = this.container;
    } else {
      li._isMenu = false;
      li.appendChild(item);
    }
    li._id = id;
    this.items.push(li);
    li.label = text ? text : li.innerText.trim();
    if (add) {
      li.addEventListener("blur", (e2) => {
        if (this._ignoreFocusEvents) {
          return;
        }
        if (this.activeItem && !this.activeItem._isMenu) {
          this.setActive(void 0, false);
        }
      });
      let onfocus = /* @__PURE__ */ __name((e2) => {
        if (this._ignoreFocusEvents) {
          return;
        }
        let active = this.activeItem;
        if (this._submenu) {
          this._submenu.close();
          this._submenu = void 0;
        }
        if (li._isMenu) {
          li._menu.onselect = (item2) => {
            this.onselect(item2);
            li._menu.close();
            this.close();
          };
          li._menu.start(false, false);
          this._submenu = li._menu;
        }
        this.setActive(li, false);
      }, "onfocus");
      let onclick = /* @__PURE__ */ __name((e2) => {
        onfocus(e2);
        e2.stopPropagation();
        e2.preventDefault();
        if (this.activeItem !== void 0 && this.activeItem._isMenu) {
          return;
        }
        this.click();
      }, "onclick");
      li.addEventListener("contextmenu", (e2) => e2.preventDefault());
      this.addEventListener("contextmenu", (e2) => e2.preventDefault());
      li.addEventListener("pointerup", onclick, { capture: true });
      li.addEventListener("click", onclick, { capture: true });
      li.addEventListener("pointerdown", onclick, { capture: true });
      li.addEventListener("focus", (e2) => {
        onfocus(e2);
        onfocus(e2);
      });
      li.addEventListener("pointermove", (e2) => {
        onfocus(e2);
        li.focus();
      });
      li.addEventListener("mouseover", (e2) => {
        onfocus(e2);
        li.focus();
      });
      li.addEventListener("mouseenter", (e2) => {
        onfocus(e2);
        li.focus();
      });
      li.addEventListener("pointerover", (e2) => {
        onfocus(e2);
        li.focus();
      });
      this.dom.appendChild(li);
    }
    return li;
  }
  _getBorderStyle() {
    let r = this.getDefault("border-width");
    let s = this.getDefault("border-style");
    let c = this.getDefault("border-color");
    return `${r}px ${s} ${c}`;
  }
  buildStyle() {
    let pad1 = isMobile() ? 2 : 0;
    pad1 += this.getDefault("MenuSpacing");
    let boxShadow = "";
    if (this.hasDefault("box-shadow")) {
      boxShadow = "box-shadow: " + this.getDefault("box-shadow") + ";";
    }
    let sepcss = this.getDefault("MenuSeparator");
    if (typeof sepcss === "object") {
      let s = "";
      for (let k2 in sepcss) {
        let v = sepcss[k2];
        if (typeof v === "number") {
          v = v.toFixed(4) + "px";
        }
        s += `    ${k2}: ${v};
`;
      }
      sepcss = s;
    }
    let itemRadius = 0;
    if (this.hasDefault("item-radius")) {
      itemRadius = this.getDefault("item-radius");
    } else {
      itemRadius = this.getDefault("border-radius");
    }
    this.menustyle.textContent = `
        .menucon {
          position:fixed;
          float:left;
          
          border-radius : ${this.getDefault("border-radius")}px;

          display: block;
          -moz-user-focus: normal;
          ${boxShadow}
        }
        
        ul.menu {
          display        : flex;
          flex-direction : column;
          flex-wrap      : nowrap;
          width          : max-content;
          
          margin : 0px;
          padding : 0px;
          border : ${this._getBorderStyle()};
          border-radius : ${this.getDefault("border-radius")}px;
          -moz-user-focus: normal;
          background-color: ${this.getDefault("MenuBG")};
          color : ${this.getDefault("MenuText").color};
        }
        
        .menuitem {
          display : flex;
          flex-wrap : nowrap;
          flex-direction : row;          
          
          list-style-type:none;
          -moz-user-focus: normal;
          
          margin : 0;
          padding : 0px;
          padding-right: 16px;
          padding-left: 16px;
          padding-top : ${pad1}px;
          padding-bottom : ${pad1}px;
          
          border-radius : ${itemRadius}px;
          
          color : ${this.getDefault("MenuText").color};
          font : ${this.getDefault("MenuText").genCSS()};
          background-color: ${this.getDefault("MenuBG")};
        }
        
        .menuseparator {
          ${sepcss}
        }
        
        .menuitem:focus {
          display : flex;
          text-align: left;
          
          border : none;
          outline : none;
          border-radius : ${itemRadius}px;
          
          background-color: ${this.getDefault("MenuHighlight")};
          color : ${this.getDefault("MenuText").color};
          -moz-user-focus: normal;
        }
      `;
  }
  setCSS() {
    super.setCSS();
    this.buildStyle();
    this.container.style["color"] = this.getDefault("MenuText").color;
    this.style["color"] = this.getDefault("MenuText").color;
  }
  seperator() {
    let bar = document.createElement("div");
    bar.setAttribute("class", "menuseparator");
    this.dom.appendChild(bar);
    return this;
  }
  menu(title) {
    let ret2 = UIBase4.createElement("menu-x");
    ret2.setAttribute("name", title);
    this.addItem(ret2);
    return ret2;
  }
  calcSize() {
  }
};
Menu.SEP = Symbol("menu seperator");
UIBase4.internalRegister(Menu);
var DropBox = class extends OldButton {
  static {
    __name(this, "DropBox");
  }
  constructor() {
    super();
    this.lockTimer = 0;
    this._template = void 0;
    this._searchMenuMode = false;
    this.altKey = void 0;
    this._value = 0;
    this._last_datapath = void 0;
    this.r = 5;
    this._menu = void 0;
    this._auto_depress = false;
    this._onpress = this._onpress.bind(this);
  }
  get searchMenuMode() {
    return this._searchMenuMode;
  }
  set searchMenuMode(v) {
    this._searchMenuMode = v;
  }
  get template() {
    return this._template;
  }
  set template(v) {
    this._template = v;
  }
  get value() {
    return this._value;
  }
  set value(v) {
    this.setValue(v);
  }
  get menu() {
    return this._menu;
  }
  set menu(val2) {
    this._menu = val2;
    if (val2 !== void 0) {
      this._name = val2.title;
      this.updateName();
    }
  }
  static define() {
    return {
      tagname: "dropbox-x",
      style: "dropbox"
    };
  }
  init() {
    super.init();
    this.setAttribute("menu-button", "true");
    this.updateWidth();
  }
  setCSS() {
    this.style["user-select"] = "none";
    this.dom.style["user-select"] = "none";
    let keys2;
    if (this.getAttribute("simple")) {
      keys2 = ["margin-left", "margin-right", "padding-left", "padding-right"];
    } else {
      keys2 = [
        "margin",
        "margin-left",
        "margin-right",
        "margin-top",
        "margin-bottom",
        "padding",
        "padding-left",
        "padding-right",
        "padding-top",
        "padding-bottom"
      ];
    }
    let setDefault = /* @__PURE__ */ __name((key2) => {
      if (this.hasDefault(key2)) {
        this.style[key2] = this.getDefault(key2, void 0, 0) + "px";
      }
    }, "setDefault");
    for (let k2 of keys2) {
      setDefault(k2);
    }
  }
  _genLabel() {
    let s = super._genLabel();
    let ret2 = "";
    if (s.length === 0) {
      s = "(error)";
    }
    this.altKey = s[0].toUpperCase().charCodeAt(0);
    for (let i2 = 0; i2 < s.length; i2++) {
      if (s[i2] === "&" && i2 < s.length - 1 && s[i2 + 1] !== "&") {
        this.altKey = s[i2 + 1].toUpperCase().charCodeAt(0);
      } else if (s[i2] === "&" && i2 < s.length - 1 && s[i2 + 1] === "&") {
        continue;
      } else {
        ret2 += s[i2];
      }
    }
    return ret2;
  }
  updateWidth() {
    let dpi = this.getDPI();
    let ts = this.getDefault("DefaultText").size;
    let tw = this.g.measureText(this._genLabel()).width / dpi;
    tw = ~~tw;
    tw += 15;
    if (!this.getAttribute("simple")) {
      tw += 35;
    }
    if (tw !== this._last_w) {
      this._last_w = tw;
      this.dom.style["width"] = tw + "px";
      this.style["width"] = tw + "px";
      this.width = tw;
      this.overrideDefault("width", tw);
      this._repos_canvas();
      this._redraw();
    }
    return 0;
  }
  updateBorders() {
    super.updateBorders(this);
  }
  updateDataPath() {
    if (!this.ctx || !this.hasAttribute("datapath")) {
      return;
    }
    let wasError = false;
    let prop, val2;
    try {
      this.pushReportContext(this._reportCtxName);
      prop = this.ctx.api.resolvePath(this.ctx, this.getAttribute("datapath")).prop;
      val2 = this.ctx.api.getValue(this.ctx, this.getAttribute("datapath"));
      prop = prop && prop.prop ? prop.prop : prop;
      this.popReportContext();
    } catch (error) {
      print_stack(error);
      wasError = true;
    }
    if (wasError) {
      this.disabled = true;
      this.setCSS();
      this._redraw();
      return;
    } else {
      this.disabled = false;
      this.setCSS();
      this._redraw();
    }
    if (!prop) {
      return;
    }
    if (this.prop === void 0) {
      this.prop = prop;
    }
    prop = this.prop;
    let name = this.getAttribute("name");
    if (prop.type & (PropTypes3.ENUM | PropTypes3.FLAG)) {
      name = prop.ui_value_names[prop.keys[val2]];
    } else {
      name = "" + val2;
    }
    if (name !== this.getAttribute("name")) {
      this.setAttribute("name", name);
      this.updateName();
    }
  }
  update() {
    let path = this.getAttribute("datapath");
    if (path && path !== this._last_datapath) {
      this._last_datapath = path;
      this.prop = void 0;
      this.updateDataPath();
    }
    super.update();
    let key2 = this.getDefault("dropTextBG");
    if (key2 !== this._last_dbox_key) {
      this._last_dbox_key = key2;
      this.setCSS();
      this._redraw();
    }
    if (this.hasAttribute("datapath")) {
      this.updateDataPath();
    }
  }
  _build_menu_template() {
    if (this._menu !== void 0 && this._menu.parentNode !== void 0) {
      this._menu.remove();
    }
    let template = this._template;
    if (typeof template === "function") {
      template = template();
    }
    this._menu = createMenu(this.ctx, "", template);
    return this._menu;
  }
  _build_menu() {
    if (this._template) {
      this._build_menu_template();
      return;
    }
    let prop = this.prop;
    if (this.prop === void 0) {
      return;
    }
    if (this._menu !== void 0 && this._menu.parentNode !== void 0) {
      this._menu.remove();
    }
    let menu = this._menu = UIBase4.createElement("menu-x");
    menu.setAttribute("name", "");
    menu._dropbox = this;
    let valmap = {};
    let enummap = prop.values;
    let iconmap = prop.iconmap;
    let uimap = prop.ui_value_names;
    let desr = prop.descriptions || {};
    for (let k2 in enummap) {
      let uk = k2;
      valmap[enummap[k2]] = k2;
      if (uimap !== void 0 && k2 in uimap) {
        uk = uimap[k2];
      }
      let tooltip = desr[k2];
      if (iconmap && iconmap[k2]) {
        menu.addItemExtra(uk, enummap[k2], void 0, iconmap[k2], void 0, tooltip);
      } else {
        menu.addItem(uk, enummap[k2], void 0, tooltip);
      }
    }
    menu.onselect = (id) => {
      this._pressed = false;
      this._pressed = false;
      this._redraw();
      this._menu = void 0;
      let callProp = true;
      if (this.hasAttribute("datapath")) {
        let rdef2 = this.ctx.api.resolvePath(this.ctx, this.getAttribute("datapath"));
        let prop2 = rdef2.dpath.data;
        callProp = !rdef2 || !rdef2.dpath || !(rdef2.dpath.data instanceof ToolProperty);
      }
      this._value = this._convertVal(id);
      if (callProp) {
        this.prop.setValue(id);
      }
      this.setAttribute("name", this.prop.ui_value_names[valmap[id]]);
      if (this.onselect) {
        this.onselect(id);
      }
      if (this.hasAttribute("datapath") && this.ctx) {
        this.setPathValue(this.ctx, this.getAttribute("datapath"), id);
      }
    };
  }
  _onpress(e2) {
    this.abortToolTips(1e3);
    if (this._menu !== void 0) {
      this.lockTimer = time_ms();
      this._pressed = false;
      this._redraw();
      let menu2 = this._menu;
      this._menu = void 0;
      menu2.close();
      return;
    }
    if (time_ms() - this.lockTimer < 200) {
      return;
    }
    this._build_menu();
    if (this._menu === void 0) {
      return;
    }
    this._menu.autoSearchMode = false;
    this._menu._dropbox = this;
    this.dom._background = this.getDefault("BoxDepressed");
    this._background = this.getDefault("BoxDepressed");
    this._redraw();
    this._pressed = true;
    this.setCSS();
    let onclose = this._menu.onclose;
    this._menu.onclose = () => {
      this.lockTimer = time_ms();
      this._pressed = false;
      this._redraw();
      let menu2 = this._menu;
      if (menu2) {
        this._menu = void 0;
        menu2._dropbox = void 0;
      }
      if (onclose) {
        onclose.call(menu2);
      }
    };
    let menu = this._menu;
    let screen = this.getScreen();
    let dpi = this.getDPI();
    let x = e2.x, y = e2.y;
    let rects = this.dom.getBoundingClientRect();
    let rheight = rects.height;
    x = rects.x - window.scrollX;
    y = rects.y + rheight - window.scrollY;
    if (!window.haveElectron) {
    }
    if (const_default.menusCanPopupAbove && y > screen.size[1] * 0.5 && !this.searchMenuMode) {
      let con2 = screen.popup(this, 500, 400, false, 0);
      con2.style["z-index"] = "-10000";
      con2.style["position"] = UIBase4.PositionKey;
      document.body.appendChild(con2);
      con2.style["visibility"] = "hidden";
      con2.add(menu);
      menu.start();
      let time = time_ms();
      let timer2 = window.setInterval(() => {
        if (time_ms() - time > 1500) {
          window.clearInterval(timer2);
          return;
        }
        let r = menu.dom.getBoundingClientRect();
        if (!r || r.height < 55) {
          return;
        }
        window.clearInterval(timer2);
        y -= r.height + rheight;
        menu.dom.remove();
        con2.remove();
        let popup = this._popup = menu._popup = screen.popup(this, x, y, false, 0);
        popup.noMarginsOrPadding();
        popup.add(menu);
        menu.start();
        popup.style["left"] = x + "px";
        popup.style["top"] = y + "px";
      }, 1);
      return;
    }
    let con = this._popup = menu._popup = screen.popup(this, x, y, false, 0);
    con.noMarginsOrPadding();
    con.add(menu);
    if (this.searchMenuMode) {
      menu.startFancy();
    } else {
      menu.start();
    }
  }
  _redraw() {
    if (this.getAttribute("simple")) {
      let color;
      this.g.clearRect(0, 0, this.dom.width, this.dom.height);
      if (this._highlight) {
        drawRoundBox2(this, { canvas: this.dom, g: this.g, color: this.getDefault("BoxHighlight") });
      }
      if (this._focus) {
        drawRoundBox2(this, {
          canvas: this.dom,
          g: this.g,
          color: this.getDefault("BoxHighlight"),
          op: "stroke",
          no_clear: true
        });
        drawRoundBox(this, this.dom, this.g, void 0, void 0, 2, "stroke");
      }
      this._draw_text();
      return;
    }
    super._redraw(false);
    let g = this.g;
    let w = this.dom.width, h2 = this.dom.height;
    let dpi = this.getDPI();
    let p = 10 * dpi;
    let p2 = dpi;
    let bg = this.getDefault("dropTextBG");
    if (bg !== void 0) {
      g.fillStyle = bg;
      g.beginPath();
      g.rect(p2, p2, this.dom.width - p2 - h2, this.dom.height - p2 * 2);
      g.fill();
    }
    g.fillStyle = "rgba(50, 50, 50, 0.2)";
    g.strokeStyle = "rgba(50, 50, 50, 0.8)";
    g.beginPath();
    let sz = 0.3;
    g.moveTo(w - h2 * 0.5 - p, p);
    g.lineTo(w - p, p);
    g.moveTo(w - h2 * 0.5 - p, p + sz * h2 / 3);
    g.lineTo(w - p, p + sz * h2 / 3);
    g.moveTo(w - h2 * 0.5 - p, p + sz * h2 * 2 / 3);
    g.lineTo(w - p, p + sz * h2 * 2 / 3);
    g.lineWidth = 1;
    g.stroke();
    this._draw_text();
  }
  _convertVal(val2) {
    if (typeof val2 === "string" && this.prop) {
      if (val2 in this.prop.values) {
        return this.prop.values[val2];
      } else if (val2 in this.prop.keys) {
        return this.prop.keys[val2];
      } else {
        return void 0;
      }
    }
    return val2;
  }
  setValue(val2, setLabelOnly = false) {
    if (val2 === void 0 || val2 === this._value) {
      return;
    }
    val2 = this._convertVal(val2);
    if (val2 === void 0) {
      console.warn("Bad val", arguments[0]);
      return;
    }
    this._value = val2;
    if (this.prop !== void 0 && !setLabelOnly) {
      this.prop.setValue(val2);
      let val22 = val2;
      if (val22 in this.prop.keys)
        val22 = this.prop.keys[val22];
      val22 = this.prop.ui_value_names[val22];
      this.setAttribute("name", "" + val22);
      this._name = "" + val22;
    } else {
      this.setAttribute("name", "" + val2);
      this._name = "" + val2;
    }
    if (this.onchange && !setLabelOnly) {
      this.onchange(val2);
    }
    this.setCSS();
    this.updateDataPath();
    this._redraw();
  }
};
UIBase4.internalRegister(DropBox);
var MenuWrangler = class {
  static {
    __name(this, "MenuWrangler");
  }
  constructor() {
    this.screen = void 0;
    this.menustack = [];
    this.lastPickElemTime = time_ms();
    this._closetimer = 0;
    this.closeOnMouseUp = void 0;
    this.closereq = void 0;
    this.timer = void 0;
  }
  get closetimer() {
    return this._closetimer;
  }
  set closetimer(v) {
    debugmenu("set closertime", v);
    this._closetimer = v;
  }
  get menu() {
    return this.menustack.length > 0 ? this.menustack[this.menustack.length - 1] : void 0;
  }
  pushMenu(menu) {
    debugmenu("pushMenu");
    this.spawnreq = void 0;
    if (this.menustack.length === 0 && menu.closeOnMouseUp) {
      this.closeOnMouseUp = true;
    }
    this.menustack.push(menu);
  }
  popMenu(menu) {
    debugmenu("popMenu");
    return this.menustack.pop();
  }
  endMenus() {
    debugmenu("endMenus");
    for (let menu of this.menustack) {
      menu.close();
    }
    this.menustack = [];
  }
  searchKeyDown(e2) {
    let menu = this.menu;
    e2.stopPropagation();
    menu._ignoreFocusEvents = true;
    menu.textbox.focus();
    menu._ignoreFocusEvents = false;
    switch (e2.keyCode) {
      case keymap["Enter"]:
        menu.click(menu.activeItem);
        break;
      case keymap["Escape"]:
        menu.close();
        break;
      case keymap["Up"]:
        menu.selectPrev(false);
        break;
      case keymap["Down"]:
        menu.selectNext(false);
        break;
    }
  }
  on_keydown(e2) {
    window.menu = this.menu;
    if (this.menu === void 0) {
      return;
    }
    if (this.menu.hasSearchBox) {
      return this.searchKeyDown(e2);
    }
    let menu = this.menu;
    switch (e2.keyCode) {
      case keymap["Left"]:
      //left
      case keymap["Right"]:
        if (menu._dropbox) {
          let dropbox = menu._dropbox;
          if (e2.keyCode === keymap["Left"]) {
            dropbox = dropbox.previousElementSibling;
          } else {
            dropbox = dropbox.nextElementSibling;
          }
          if (dropbox !== void 0 && dropbox instanceof DropBox) {
            this.endMenus();
            dropbox._onpress(e2);
          }
        }
        break;
      case keymap["Up"]:
        menu.selectPrev();
        break;
      case keymap["Down"]:
        menu.selectNext();
        break;
      /*
            let item = menu.activeItem;
            if (!item) {
              item = menu.items[0];
            }
      
            if (!item) {
              return;
            }
      
            let item2;
            let i = menu.items.indexOf(item);
      
            if (e.keyCode == 38) {
              i = (i - 1 + menu.items.length) % menu.items.length;
            } else {
              i = (i + 1) % menu.items.length;
            }
      
            item2 = menu.items[i];
      
            if (item2) {
              menu.setActive(item2);
            }
            break;//*/
      case 13:
      //return key
      case 32:
        menu.click(menu.activeItem);
        break;
      case 27:
        menu.close();
        break;
    }
  }
  on_pointerdown(e2) {
    if (this.menu === void 0 || this.screen === void 0) {
      this.closetimer = time_ms();
      return;
    }
    let screen = this.screen;
    let x = e2.pageX, y = e2.pageY;
    let element2 = screen.pickElement(x, y);
    if (element2 !== void 0 && (element2 instanceof DropBox || isMobile())) {
      this.endMenus();
      e2.preventDefault();
      e2.stopPropagation();
    }
  }
  on_pointerup(e2) {
    if (this.menu === void 0 || this.screen === void 0) {
      this.closetimer = time_ms();
      return;
    }
    let screen = this.screen;
    let x = e2.pageX, y = e2.pageY;
    let element2 = screen.pickElement(x, y, void 0, void 0, DropBox);
    if (element2 !== void 0) {
      this.closeOnMouseUp = false;
    } else {
      element2 = screen.pickElement(x, y, void 0, void 0, Menu);
      if (element2 && this.closeOnMouseUp) {
        element2.click();
      }
    }
  }
  findMenu(x, y) {
    let screen = this.screen;
    let element2 = screen.pickElement(x, y);
    if (element2 === void 0) {
      return;
    }
    if (element2 instanceof Menu) {
      return element2;
    }
    let w = element2;
    while (w) {
      if (w instanceof Menu) {
        return w;
        break;
      }
      w = w.parentWidget;
    }
    return void 0;
  }
  on_pointermove(e2) {
    if (this.menu && this.menu.hasSearchBox) {
      this.closetimer = time_ms();
      this.closereq = void 0;
      return;
    }
    if (this.menu === void 0 || this.screen === void 0) {
      this.closetimer = time_ms();
      this.closereq = void 0;
      return;
    }
    let screen = this.screen;
    let x = e2.pageX, y = e2.pageY;
    let element2;
    let menu = this.menu;
    if (menu) {
      let r = menu.getBoundingClientRect();
      let pad = 15;
      if (r && x >= r.x - pad && y >= r.y - pad && x <= r.x + r.width + pad * 2 && y <= r.y + r.height + pad * 2) {
        element2 = menu;
      }
    }
    if (!element2 && time_ms() - this.lastPickElemTime > 250) {
      element2 = screen.pickElement(x, y);
      this.lastPickElemTime = time_ms();
    }
    if (element2 === void 0) {
      return;
    }
    if (element2 instanceof Menu) {
      this.closetimer = time_ms();
      this.closereq = void 0;
      return;
    }
    let destroy = element2.hasAttribute("menu-button") && element2.hasAttribute("simple");
    destroy = destroy && element2.menu !== this.menu;
    if (destroy) {
      let menu2 = this.menu;
      while (menu2 !== element2.menu) {
        menu2 = menu2.parentMenu;
        destroy = destroy && (menu2 === void 0 || menu2 !== element2.menu);
      }
    }
    if (destroy) {
      this.endMenus();
      this.closetimer = time_ms();
      this.closereq = void 0;
      element2._onpress(e2);
      return;
    }
    let ok = false;
    let w = element2;
    while (w) {
      if (w instanceof Menu) {
        ok = true;
        break;
      }
      if (w.hasAttribute("menu-button") && w.menu === this.menu) {
        ok = true;
        break;
      }
      w = w.parentWidget;
    }
    if (!ok) {
      this.closereq = this.menu;
    } else {
      this.closetimer = time_ms();
      this.closereq = void 0;
    }
  }
  update() {
    let closetime = const_default.menu_close_time;
    closetime = closetime === void 0 ? 50 : closetime;
    let close = this.closereq && this.closereq === this.menu;
    close = close && time_ms() - this.closetimer > closetime;
    if (close) {
      this.closereq = void 0;
      this.endMenus();
    }
  }
  startTimer() {
    if (this.timer) {
      this.stopTimer();
    }
    this.timer = setInterval(() => {
      debugmenu("start menu wrangler interval");
      this.update();
    }, 150);
  }
  stopTimer() {
    if (this.timer) {
      debugmenu("stop menu wrangler interval");
      clearInterval(this.timer);
      this.timer = void 0;
    }
  }
};
var menuWrangler = window._menuWrangler = new MenuWrangler();
var wrangerStarted = false;
function startMenuEventWrangling(screen) {
  menuWrangler.screen = screen;
  if (wrangerStarted) {
    return;
  }
  wrangerStarted = true;
  for (let k2 in DomEventTypes) {
    if (menuWrangler[k2] === void 0) {
      continue;
    }
    let dom = k2.search("key") >= 0 ? window : document.body;
    dom = window;
    dom.addEventListener(DomEventTypes[k2], menuWrangler[k2].bind(menuWrangler), { passive: false, capture: true });
  }
  menuWrangler.screen = screen;
  menuWrangler.startTimer();
}
__name(startMenuEventWrangling, "startMenuEventWrangling");
window._startMenuEventWrangling = startMenuEventWrangling;
function setWranglerScreen(screen) {
  startMenuEventWrangling(screen);
}
__name(setWranglerScreen, "setWranglerScreen");
function getWranglerScreen() {
  return menuWrangler.screen;
}
__name(getWranglerScreen, "getWranglerScreen");
function createMenu(ctx2, title, templ) {
  let menu = UIBase4.createElement("menu-x");
  menu.ctx = ctx2;
  menu.setAttribute("name", title);
  let SEP = menu.constructor.SEP;
  let id = 0;
  let cbs = {};
  let doItem = /* @__PURE__ */ __name((item) => {
    if (item !== void 0 && item instanceof Menu) {
      menu.addItem(item);
    } else if (typeof item == "string") {
      let def, hotkey;
      try {
        def = ctx2.api.getToolDef(item);
      } catch (error) {
        menu.addItem("(tool path error)", id++);
        return;
      }
      if (!def.hotkey) {
        try {
          hotkey = ctx2.api.getToolPathHotkey(ctx2, item);
        } catch (error) {
          print_stack(error);
          console.warn("error getting hotkey for tool " + item);
          hotkey = void 0;
        }
      } else {
        hotkey = def.hotkey;
      }
      menu.addItemExtra(def.uiname, id, hotkey, def.icon);
      cbs[id] = /* @__PURE__ */ function(toolpath) {
        return function() {
          ctx2.api.execTool(ctx2, toolpath);
        };
      }(item);
      id++;
    } else if (item === SEP) {
      menu.seperator();
    } else if (typeof item === "function" || item instanceof Function) {
      doItem(item());
    } else if (item instanceof Array) {
      let hotkey = item.length > 2 ? item[2] : void 0;
      let icon = item.length > 3 ? item[3] : void 0;
      let tooltip = item.length > 4 ? item[4] : void 0;
      let id2 = item.length > 5 ? item[5] : id++;
      if (hotkey !== void 0 && hotkey instanceof HotKey) {
        hotkey = hotkey.buildString();
      }
      menu.addItemExtra(item[0], id2, hotkey, icon, void 0, tooltip);
      cbs[id2] = /* @__PURE__ */ function(cbfunc, arg) {
        return function() {
          cbfunc(arg);
        };
      }(item[1], id2);
    } else if (typeof item === "object") {
      let { name, callback, hotkey, icon, tooltip } = item;
      let id2 = item.id !== void 0 ? item.id : id++;
      if (hotkey !== void 0 && hotkey instanceof HotKey) {
        hotkey = hotkey.buildString();
      }
      menu.addItemExtra(name, id2, hotkey, icon, void 0, tooltip);
      cbs[id2] = /* @__PURE__ */ function(cbfunc, arg) {
        return function() {
          cbfunc(arg);
        };
      }(callback, id2);
    }
  }, "doItem");
  for (let item of templ) {
    doItem(item);
  }
  menu.onselect = (id2) => {
    cbs[id2]();
  };
  return menu;
}
__name(createMenu, "createMenu");
function startMenu(menu, x, y, searchMenuMode = false, safetyDelay = 55) {
  menuWrangler.endMenus();
  let screen = menu.ctx.screen;
  let con = menu._popup = screen.popup(void 0, x, y, false, safetyDelay);
  con.noMarginsOrPadding();
  con.add(menu);
  if (searchMenuMode) {
    menu.startFancy();
  } else {
    menu.start();
  }
  menu.flushUpdate();
  menu.flushSetCSS();
  menu._popup.flushUpdate();
  menu._popup.flushSetCSS();
}
__name(startMenu, "startMenu");

// scripts/path.ux/scripts/platforms/electron/electron_api.js
var _nativeTheme;
function getNativeTheme() {
  if (_nativeTheme) {
    return _nativeTheme;
  }
  let remote = getElectron().remote;
  if (!remote) {
    ipcRenderer.invoke("nativeTheme");
  } else {
    _nativeTheme = remote.nativeTheme;
  }
  return _nativeTheme;
}
__name(getNativeTheme, "getNativeTheme");
function getElectronVersion() {
  let key2 = navigator.userAgent;
  let i2 = key2.search("Electron");
  key2 = key2.slice(i2 + 9, key2.length);
  i2 = key2.search(/[ \t]/);
  if (i2 >= 0) {
    key2 = key2.slice(0, i2);
  }
  key2 = key2.trim();
  key2 = key2.split(".").map((f3) => parseInt(f3));
  return key2;
}
__name(getElectronVersion, "getElectronVersion");
function getElectron() {
  return __require("electron");
}
__name(getElectron, "getElectron");
function myRequire(mod) {
  return globalThis.require(mod);
}
__name(myRequire, "myRequire");
function getFilename(path) {
  let filename = path.replace(/\\/g, "/");
  let i2 = filename.length - 1;
  while (i2 >= 0 && filename[i2] !== "/") {
    i2--;
  }
  if (filename[i2] === "/") {
    i2++;
  }
  if (i2 > 0) {
    filename = filename.slice(i2, filename.length).trim();
  }
  return filename;
}
__name(getFilename, "getFilename");
var _menu_init = false;
var _init = false;
var electron_menu_idgen = 1;
var ipcRenderer;
var ElectronMenu = class extends Array {
  static {
    __name(this, "ElectronMenu");
  }
  constructor(args2 = {}) {
    super();
    this._ipcId = electron_menu_idgen++;
    for (let k2 in args2) {
      this[k2] = args2[k2];
    }
  }
  insert(i2, item) {
    this.length++;
    let j2 = this.length - 1;
    while (j2 > i2) {
      this[j2] = this[j2 - 1];
      j2--;
    }
    this[i2] = item;
    return this;
  }
  static setApplicationMenu(menu) {
    initElectronIpc();
    ipcRenderer.invoke("set-menu-bar", menu);
  }
  closePopup() {
    ipcRenderer.invoke("close-menu", this._ipcId);
  }
  append(item) {
    this.push(item);
  }
  popup(args2) {
    let { x, y, callback } = args2;
    callback = wrapRemoteCallback("popup_menu_click", callback);
    const { ipcRenderer: ipcRenderer2 } = __require("electron");
    ipcRenderer2.invoke("popup-menu", this, x, y, callback);
  }
};
var callbacks = {};
var keybase = 1;
function wrapRemoteCallback(key2, callback) {
  key2 = "remote_" + key2 + keybase++;
  callbacks[key2] = callback;
  return key2;
}
__name(wrapRemoteCallback, "wrapRemoteCallback");
var ipcInit = false;
function initElectronIpc() {
  if (ipcInit) {
    return;
  }
  ipcInit = true;
  ipcRenderer = __require("electron").ipcRenderer;
  ipcRenderer.on("invoke-menu-callback", (event, key2, args2) => {
    callbacks[key2].apply(void 0, args2);
  });
  ipcRenderer.on("nativeTheme", (event, module) => {
    _nativeTheme = Object.assign({}, module);
    _nativeTheme._themeSource = _nativeTheme.themeSource;
    Object.defineProperty(_nativeTheme, "themeSource", {
      get() {
        return this._themeSource;
      },
      set(v) {
        ipcRenderer.invoke("nativeTheme.setThemeSource", v);
      }
    });
  });
}
__name(initElectronIpc, "initElectronIpc");
var ElectronMenuItem = class {
  static {
    __name(this, "ElectronMenuItem");
  }
  constructor(args2) {
    for (let k2 in args2) {
      this[k2] = args2[k2];
    }
    if (this.click) {
      this.click = wrapRemoteCallback("menu_click", this.click);
    }
  }
};
function patchDropBox() {
  initElectronIpc();
  if (const_default.noElectronMenus) {
    return;
  }
  DropBox.prototype._onpress = /* @__PURE__ */ __name(function _onpress(e2) {
    if (this._menu !== void 0) {
      this._menu.close();
      this._menu = void 0;
      this._pressed = false;
      this._redraw();
      return;
    }
    this._build_menu();
    let emenu = buildElectronMenu(this._menu);
    this._menu.close = () => {
      emenu.closePopup();
    };
    if (this._menu === void 0) {
      return;
    }
    this._menu._dropbox = this;
    this.dom._background = this.getDefault("BoxDepressed");
    this._background = this.getDefault("BoxDepressed");
    this._redraw();
    this._pressed = true;
    this.setCSS();
    let onclose = this._menu.onclose;
    this._menu.onclose = () => {
      this._pressed = false;
      this._redraw();
      let menu2 = this._menu;
      if (menu2) {
        this._menu = void 0;
        menu2._dropbox = void 0;
      }
      if (onclose) {
        onclose.call(menu2);
      }
    };
    let menu = this._menu;
    let screen = this.getScreen();
    let dpi = this.getDPI();
    let x = e2.x, y = e2.y;
    let rects = this.dom.getClientRects();
    x = rects[0].x;
    y = rects[0].y + Math.ceil(rects[0].height);
    x = ~~x;
    y = ~~y;
    emenu.popup({
      x,
      y,
      callback: /* @__PURE__ */ __name(() => {
        if (this._menu) {
          this._menu.onclose();
        }
      }, "callback")
    });
  }, "_onpress");
}
__name(patchDropBox, "patchDropBox");
var on_tick = /* @__PURE__ */ __name(() => {
  let nativeTheme = getNativeTheme();
  if (nativeTheme) {
    let mode = nativeTheme.shouldUseDarkColors ? "dark" : "light";
    if (mode !== const_default.colorSchemeType) {
      nativeTheme.themeSource = const_default.colorSchemeType;
    }
  }
}, "on_tick");
function checkInit() {
  if (window.haveElectron && !_init) {
    _init = true;
    patchDropBox();
    setInterval(on_tick, 350);
  }
}
__name(checkInit, "checkInit");
var iconcache = {};
function makeIconKey(icon, iconsheet, invertColors) {
  return "" + icon + ":" + iconsheet + ":" + invertColors;
}
__name(makeIconKey, "makeIconKey");
function getNativeIcon(icon, iconsheet = 0, invertColors = false, size = 16) {
  let icongen;
  try {
    icongen = myRequire("./icogen.js");
  } catch (error) {
    icongen = myRequire("./icogen.cjs");
  }
  window.icongen = icongen;
  let nativeImage = getElectron().nativeImage;
  let manager3 = getIconManager();
  let sheet = manager3.findSheet(iconsheet);
  let images = [];
  let sizes = icongen.GetRequiredICOImageSizes();
  if (1) {
    let iconsheet2 = manager3.findClosestSheet(size);
    let tilesize = manager3.getTileSize(iconsheet2);
    let canvas = document.createElement("canvas");
    let g = canvas.getContext("2d");
    canvas.width = canvas.height = size;
    if (invertColors) {
      g.filter = "invert(100%)";
    }
    let scale = size / tilesize;
    g.scale(scale, scale);
    manager3.canvasDraw({ getDPI: /* @__PURE__ */ __name(() => 1, "getDPI") }, canvas, g, icon, 0, 0, iconsheet2);
    let header = "data:image/png;base64,";
    let data = canvas.toDataURL();
    data = data.slice(header.length, data.length);
    data = Buffer.from(data, "base64");
    myRequire("fs").writeFileSync("./myicon2.png", data);
    images.push(data);
  }
  return "myicon2.png";
  return icon;
  return void 0;
  window._icon = icon;
  return icon;
}
__name(getNativeIcon, "getNativeIcon");
var map2 = {
  CTRL: "Control",
  ALT: "Alt",
  SHIFT: "Shift",
  COMMAND: "Command"
};
function buildElectronHotkey(hk) {
  hk = hk.trim().replace(/[ \t-]+/g, "+");
  for (let k2 in map2) {
    hk = hk.replace(k2, map2[k2]);
  }
  return hk;
}
__name(buildElectronHotkey, "buildElectronHotkey");
function buildElectronMenu(menu) {
  let electron = getElectron().remote;
  initElectronIpc();
  let emenu = new ElectronMenu();
  let buildItem = /* @__PURE__ */ __name((item) => {
    if (item._isMenu) {
      let menu2 = item._menu;
      return new ElectronMenuItem({
        submenu: buildElectronMenu(item._menu),
        label: menu2.getAttribute("title")
      });
    }
    let hotkey = item.hotkey;
    let icon = item.icon;
    let label = "" + item.label;
    if (hotkey && typeof hotkey !== "string") {
      hotkey = buildElectronHotkey(hotkey);
    } else {
      hotkey = "" + hotkey;
    }
    if (icon < 0) {
      icon = void 0;
    }
    let args2 = {
      id: "" + item._id,
      label,
      accelerator: hotkey,
      icon: icon ? getNativeIcon(icon) : void 0,
      click: /* @__PURE__ */ __name(function() {
        menu.onselect(item._id);
      }, "click"),
      registerAccelerator: false
    };
    return new ElectronMenuItem(args2);
  }, "buildItem");
  for (let item of menu.items) {
    emenu.append(buildItem(item));
  }
  return emenu;
}
__name(buildElectronMenu, "buildElectronMenu");
function initMenuBar(menuEditor, override = false) {
  checkInit();
  if (!window.haveElectron) {
    return;
  }
  if (_menu_init && !override) {
    return;
  }
  _menu_init = true;
  let menu = new ElectronMenu();
  let _roles = /* @__PURE__ */ new Set([
    "undo",
    "redo",
    "cut",
    "copy",
    "paste",
    "delete",
    "about",
    "quit",
    "open",
    "save",
    "load",
    "paste",
    "cut",
    "zoom"
  ]);
  let roles = {};
  for (let k2 of _roles) {
    roles[k2] = k2;
  }
  roles = Object.assign(roles, {
    "select all": "selectAll",
    "file": "fileMenu",
    "edit": "editMenu",
    "view": "viewMenu",
    "app": "appMenu",
    "help": "help",
    "zoom in": "zoomIn",
    "zoom out": "zoomOut"
  });
  let header = menuEditor.header;
  for (let dbox of header.traverse(DropBox)) {
    dbox._build_menu();
    dbox.update();
    dbox._build_menu();
    let menu2 = dbox._menu;
    menu2.ctx = dbox.ctx;
    menu2._init();
    menu2.update();
    let title = dbox._genLabel();
    let args2 = {
      label: title,
      tooltip: dbox.description,
      submenu: buildElectronMenu(menu2)
    };
    menu.insert(0, new ElectronMenuItem(args2));
  }
  ElectronMenu.setApplicationMenu(menu);
}
__name(initMenuBar, "initMenuBar");
var platform = class extends PlatformAPI {
  static {
    __name(this, "platform");
  }
  static showOpenDialog(title, args2 = new FileDialogArgs()) {
    console.log(args2.filters);
    let eargs = {
      defaultPath: args2.defaultPath,
      filters: this._sanitizeFilters(args2.filters ?? []),
      properties: [
        "openFile",
        "showHiddenFiles",
        "createDirectory"
      ]
    };
    if (args2.multi) {
      eargs.properties.push("multiSelections");
    }
    if (!args2.addToRecentList) {
      eargs.properties.push("dontAddToRecent");
    }
    initElectronIpc();
    return new Promise((accept, reject) => {
      ipcRenderer.invoke("show-open-dialog", eargs, wrapRemoteCallback("open-dialog", (ret2) => {
        if (ret2.canceled || ret2.cancelled) {
          reject("cancel");
        } else {
          accept(ret2.filePaths.map((f3) => new FilePath(f3, getFilename(f3))));
        }
      }), wrapRemoteCallback("show-open-dialog", (error) => {
        reject(error);
      }));
    });
  }
  static _sanitizeFilters(filters) {
    let filters2 = [];
    for (let filter2 of filters) {
      if (Array.isArray(filter2)) {
        let ext = filter2[0];
        filter2 = { extensions: filter2 };
        ext = ext.replace(/\./g, "").trim().toLowerCase();
        if (ext in mimeMap) {
          filter2.mime = mimeMap[ext];
        }
        filter2.name = ext;
      }
      console.log(filter2.extensions);
      filter2.extensions = filter2.extensions.map((f3) => f3.startsWith(".") ? f3.slice(1, f3.length) : f3);
      filters2.push(filter2);
    }
    return filters2;
  }
  static showSaveDialog(title, filedata_cb, args2 = new FileDialogArgs()) {
    console.log(args2.filters);
    let eargs = {
      defaultPath: args2.defaultPath,
      filters: this._sanitizeFilters(args2.filters ?? []),
      properties: [
        "openFile",
        "showHiddenFiles",
        "createDirectory"
      ]
    };
    if (args2.multi) {
      eargs.properties.push("multiSelections");
    }
    if (!args2.addToRecentList) {
      eargs.properties.push("dontAddToRecent");
    }
    return new Promise((accept, reject) => {
      initElectronIpc();
      let onthen = /* @__PURE__ */ __name((ret2) => {
        if (ret2.canceled) {
          reject("cancel");
        } else {
          let path = ret2.filePath;
          let filedata = filedata_cb();
          if (filedata instanceof ArrayBuffer) {
            filedata = new Uint8Array(filedata);
          }
          __require("fs").writeFileSync(path, filedata);
          console.log("saved file", filedata);
          accept(new FilePath(path, getFilename(path)));
        }
      }, "onthen");
      let oncatch = /* @__PURE__ */ __name((error) => {
        reject(error);
      }, "oncatch");
      ipcRenderer.invoke("show-save-dialog", eargs, wrapRemoteCallback("dialog", onthen), wrapRemoteCallback("dialog", oncatch));
    });
  }
  static readFile(path, mime) {
    return new Promise((accept, reject) => {
      let fs = __require("fs");
      if (isMimeText(mime)) {
        accept(fs.readFileSync(path.data, "utf8"));
      } else {
        accept(fs.readFileSync(path.data).buffer);
      }
    });
  }
  static writeFile(data, handle, mime) {
    return new Promise((accept, reject) => {
      let fs = __require("fs");
      fs.writeFileSync(handle.data, data);
      accept(handle);
    });
  }
};

export {
  struct_default,
  MovingAvg,
  isMobile,
  list3 as list,
  time_ms,
  cachering2 as cachering,
  set2 as set,
  print_stack,
  MersenneRandom,
  strhash,
  HashDigest,
  util_exports,
  Vector4,
  Vector32 as Vector3,
  Vector2,
  Matrix4,
  PropTypes,
  PropFlags,
  parseValue,
  isNumber,
  buildString,
  NumberConstraints,
  PropSubTypes2 as PropSubTypes,
  ToolProperty2 as ToolProperty,
  IntProperty,
  BoolProperty,
  FloatProperty,
  EnumProperty,
  FlagProperty,
  Vec2Property,
  Vec3Property,
  eventWasTouch,
  _setScreenClass,
  pushPointerModal,
  pushModalLight,
  popModalLight,
  haveModal,
  keymap,
  HotKey,
  KeyMap,
  getAreaIntName,
  AreaTypes,
  setAreaTypes,
  areaclasses,
  AreaWrangler,
  contextWrangler,
  aabb_overlap_area,
  MinMax,
  math_exports,
  const_default,
  parsepx,
  color2css3 as color2css,
  color2web,
  css2color2 as css2color,
  web2color,
  validateWebColor,
  validateCSSColor,
  theme,
  CSSFont,
  EventHandler,
  CurveConstructors,
  DataPathError,
  setNotifier,
  makeDerivedOverlay,
  ContextOverlay,
  Context,
  ToolClasses,
  ToolFlags,
  UndoFlags,
  SavedToolDefaults,
  ToolOp,
  ToolMacro,
  ToolStack,
  buildToolSysAPI,
  initSplineTemplates,
  Curve1D,
  DataStruct,
  DataAPI,
  rgb_to_hsv,
  hsv_to_rgb,
  cmyk_to_rgb,
  rgb_to_cmyk,
  setIconMap,
  Icons,
  _setTextboxClass,
  _setAreaClass,
  ErrorColors,
  setTheme,
  IconManager,
  iconmanager,
  IconSheets,
  iconSheetFromPackFlag,
  getIconManager,
  setIconManager,
  PackFlags,
  styleScrollBars,
  flagThemeUpdate,
  UIBase2 as UIBase,
  drawRoundBox,
  getFont,
  measureTextBlock,
  measureText,
  drawText,
  saveUIData,
  loadUIData,
  Button,
  OldButton,
  controller_exports,
  Menu,
  startMenuEventWrangling,
  setWranglerScreen,
  getWranglerScreen,
  createMenu,
  startMenu,
  ElectronMenu,
  wrapRemoteCallback,
  ElectronMenuItem,
  checkInit,
  iconcache,
  getNativeIcon,
  buildElectronHotkey,
  buildElectronMenu,
  initMenuBar,
  platform,
  electron_api_exports
};
/*!mobile-detect v1.4.4 2019-09-21*/
/*!@license Copyright 2013, Heinrich Goebl, License: MIT, see https://github.com/hgoebl/mobile-detect.js*/
//# sourceMappingURL=chunk-AOJSD5TM.js.map
