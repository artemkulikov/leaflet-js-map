var map = L.map('map').setView([50.457619, 30.526416], 11);

var locationsAnri = [
    // anri
    [" Аптека \"Анрі-Фарм\" <br> вулиця Осіння, 33, Київ, 03164", 50.466699117686616, 30.34806101488652],
    ["Аптека \"Анрі-Фарм\" <br> проспект Свободи, 2Д, Київ, 04108", 50.5052674229508, 30.438224204929856],
    ["Аптека \"Анрі-Фарм\" <br> Харківське шосе, 19, Київ, 02090", 50.43183856412183, 30.63425527609167],
    ["Аптека \"Анрі-Фарм\" <br> вулиця Миколи Закревського, 95В, Київ, 02232", 50.53010760081691, 30.623075945410942],
    ["Аптека \"Анрі-Фарм\" <br> вулиця Золотоустівська, 50, Київ, 01135", 50.453972251787285, 30.486504819880818],
    ["Аптека \"Анрі-Фарм\" <br> вулиця Єлизавети Чавдар, 18, Київ, 02140", 50.38934392286923, 30.62456580453867],
    ["Аптека \"Анрі-Фарм\" <br> вулиця Кудряшова, 20, Київ, 03035", 50.430133469044094, 30.48730896629583],
    ["Аптека \"Анрі-Фарм\" <br> вулиця Анни Ахматової, 22, Київ, 02068", 50.408612430436655, 30.62499102026852],
    ["Аптека \"Анрі-Фарм\" <br> Оболонський проспект, 35, Київ, 04205", 50.51838752273385, 30.497810139101823],
    ["Аптека \"Анрі-Фарм\" <br> вулиця Михайла Драгомирова, 14, Київ, 01103", 50.41210605783218, 30.54576060953296],
    ["Аптека \"Анрі-Фарм\" <br> вулиця Регенераторна, 4, корпус 5, Київ, 02160", 50.43543842000733, 30.622625918420763],
    ["Аптека \"Анрі-Фарм\" <br> вулиця Академіка Вільямса, 19/14, Київ, 03191", 50.38457083365781, 30.455571924761216],
    ["Аптека \"Анрі-Фарм\" <br> вулиця Олени Пчілки, 8, Київ, 02081", 50.41676288867068, 30.633538611025106],
    ["Аптека \"Анрі-Фарм\" <br> проспект Петра Григоренка, 5А, Київ, 02068", 50.41293332542966, 30.62844523376203],
    ["Аптека \"Анрі-Фарм\" <br> вулиця Народного Ополчення, 7, Київ, 03151", 50.41924723991995, 30.45689083561105],
    ["Аптека \"Анрі-Фарм\" <br> проспект Леся Курбаса, 15 А, Київ, 03194", 50.42477952924036, 30.372256013199312],
    ["Аптека \"Анрі-Фарм\" <br> вулиця Звіринецька, 47, Київ, 01014", 50.40858351924882, 30.554559491433043],
    ["Аптека \"Анрі-Фарм\" <br> вулиця Петра Сагайдачного, 20А, Софіївська Борщагівка, Київська обл., 08131", 50.385578098370225, 30.3818310763512],
    ["Аптека \"Анрі-Фарм\" <br> вулиця Федора Ернста, 16Б, Київ, 03048", 50.41638656118946, 30.466023959003827],
    ["Аптека \"Анрі-Фарм\" <br> вулиця Маршала Тимошенка, 29, Київ, 04205", 50.51292131802866, 30.501314958871465],
    ["Аптека \"Анрі-Фарм\" <br> вулиця Жулянська, 2А, Крюківщина, Київська обл., 08136", 50.377220994830274, 30.37864839652145],
    ["Аптека \"Анрі-Фарм\" <br> вулиця Регенераторна, 4, корпус 11, Київ, 02000", 50.43508202631791, 30.618764882124374],
    ["Аптека \"Анрі-Фарм\" <br> вулиця Соборна, 10А, Петропавлівська Борщагівка, Київська обл., 08130", 50.43700491295075, 30.349020704897818],
    ["Аптека \"Анрі-Фарм\" <br> вулиця Чорновола, 6А, Бровари, Київська обл., 07400", 50.51762555765333, 30.780670004900827],
    ["Аптека \"Анрі-Фарм\" <br> вулиця Вишнева, 27, Крюківщина, Київська обл., 08136", 50.378815556366135, 30.37135846256648],
    ["Аптека \"Анрі-Фарм\" <br> вулиця Бориса Гмирі, 18, Київ, 02140", 50.391008339353135, 30.63100970489618],
    ["Аптека \"Анрі-Фарм\" <br> вулиця Бориса Гмирі, 4, Київ, 02140", 50.39425775026431, 30.62686239509791],
    ["Аптека \"Анрі-Фарм\" <br> вулиця Метрологічна, 14Б, Київ, 03143", 50.349851363670446, 30.476386023931788],
    ["Аптека \"Анрі-Фарм\" <br> проспект Героїв Сталінграда, 4, корпус 7, Київ, 04210", 50.4924723285503, 30.52382553373514],
    ["Аптека \"Анрі-Фарм\" <br> вулиця Раїси Окіпної, 10А, Київ, 02002", 50.44827282988547, 30.58986183373363],
    ["Аптека \"Анрі-Фарм\" (ТИМЧАСОВО ЗАЧИНЕНА)<br> проспект Миколи Бажана, 1Е, Київ, 02121", 50.396039410475474, 30.615096335302873],
    ["Аптека \"Анрі-Фарм\" <br> вулиця Зарічна, 1Б, Київ, 02132", 50.39578422177343, 30.59963028965772],
    ["Аптека \"Анрі-Фарм\" <br> вулиця В'ячеслава Чорновола, 26/2, Київ, 01135", 50.45187771080551, 30.483344649182964],
    ["Аптека \"Анрі-Фарм\" <br> вулиця Івана Франка, 6, Софіївська Борщагівка, місто Київ, 04070", 50.40010317946842, 30.373364176165595],
    ["Аптека \"Анрі-Фарм\" <br> вулиця Олени Пчілки, 2а, Київ, 04542", 50.416745769322645, 30.62485019350552],
    ["Аптека \"Анрі-Фарм\" <br> вулиця Михайла Драгоманова, 10, Київ, 02068", 50.414053042681225, 30.636590533837897],
    ["Аптека \"Анрі-Фарм\" <br> вулиця Тираспольська, 58, Київ, 04136", 50.48183057947976, 30.413743905004416],
    ["Аптека \"Анрі-Фарм\" <br> вулиця Професора Підвисоцького, 5, Київ, 02000", 50.41571564417682, 30.546388746943766],
    ["Аптека \"Анрі-Фарм\" <br> проспект Героїв Сталінграда, 6, корпус 6, Київ 02000", 50.49455357402796, 30.521559812195907], //40 на карте не нашло
    ["Аптека \"Анрі-Фарм\" <br> вулиця Басейна, 23/52, Київ, 02000", 50.439161179981724, 30.52530318965931],
    ["Аптека \"Анрі-Фарм\" <br> вулиця Балукова, 1 -Е, Крюківщина, Київська обл., 08977", 50.37446966391583, 30.375417133401893],
    ["Аптека \"Анрі-Фарм\" <br> вулиця Семьи Кульженкив, 37, Київ, 02000", 50.52070462007844, 30.46680868610183],
    ["Аптека \"Анрі-Фарм\" <br> вулиця Садовая, 1, Новосілки, Київська обл., 03027", 50.34773463369959, 30.449387625131052],//45 не нашло на картах
    ["Аптека \"Анрі-Фарм\" <br> вулиця Петра Сагайдачного, 20А, Софіївська Борщагівка, Київська обл., 08131", 50.38535344838777, 30.38172761775713],
    ["Аптека \"Анрі-Фарм\" <br> вулиця Жилянська, 59, Київ, 02000", 50.437246180245616, 30.49967737578535],
    ["Аптека \"Анрі-Фарм\" <br> вулиця Воскресенська, 18, Київ, 02000", 50.47024949796505, 30.602251649806963],
    ["Аптека \"Анрі-Фарм\" <br> вулиця Андрія Аболмасова, 6, Київ, 02000", 50.459286458445455, 30.585316749183246],
    ["Аптека \"Анрі-Фарм\" <br> вулиця Першотравнева, 24, Вишневе, Київська обл., 08132", 50.38070570560026, 30.382283675154895],
    ["Аптека \"Анрі-Фарм\" <br> вулиця Василя Тютюнника, 56, Київ, 02000", 50.417620243196716, 30.52750933568949],
    ["Аптека \"Анрі-Фарм\" <br> проспект Героїв Небесної Сотні, 36, Софіївська Борщагівка, Київська обл., 08147", 50.40836951213412, 30.32706241735673],
    ["Аптека \"Анрі-Фарм\" <br> Супермаркет «Фора», вулиця Одеська, 22, Крюківщина, Київська обл., 08136", 50.37044924844433, 30.381839722195416],
    ["Аптека \"Анрі-Фарм\" <br> провулок Ізяславський, буд. 46-49, Київ, 02000", 50.394576667391256, 30.426558866525305],
    ["Аптека \"Анрі-Фарм\" <br> проспект Академіка Палладіна, 22, Київ, 02000", 50.46142311214684, 30.35703355488191],
    ["Аптека \"Анрі-Фарм\" <br> вулиця Композитора Мейтуса, 4, Київ, 03189", 50.387142479466675, 30.463296518493266],
    ["Аптека \"Анрі-Фарм\" <br> вулиця Богдана Хмельницького, 66, Київ, 02000", 50.44768774754104, 30.5042670338391],
    ["Аптека \"Анрі-Фарм\" <br> вулиця Радистів, 14, Київ, 02000", 50.47623962819861, 30.67169858651317],
    ["Аптека \"Анрі-Фарм\" <br> вулиця Данила Щербаківського, 52, Київ, 02000", 50.47061797026333, 30.406307256511496],
    ["Аптека \"Анрі-Фарм\" <br> вулиця Петра Чаадаєва, 2, Київ, 02000", 50.43475181602662, 30.37372219666808],
    ["Аптека \"Анрі-Фарм\" <br> проспект Мартинова, 1, Софіївська Борщагівка, Київська обл.", 50.39887603286038, 30.392800289779654], //63 не нашло на картах
    ["Аптека \"Анрі-Фарм\" <br> провулок Ясиноватский, 10, Киев, 03118", 50.50319642462894, 30.42381330891969], //64 не нашло на картах
    ["Аптека \"Анрі-Фарм\" <br> проспект Правди, 45-Б, Київ, 04108", 50.50319642462894, 30.42381330891969],
  ];
var locationsApg = [
    // APG
    ["Аптека APG pharmacy <br> проспект Петра Григоренка, 20, Київ, 02000", 50.41009328499565, 30.626539364075796],
    ["Аптека APG pharmacy <br> вулиця Зарічна, 3А, Київ, 02000", 50.39687176008701, 30.600006403510367],
    ["Аптека APG pharmacy <br> вулиця Михайла Драгомирова, 20, Київ, 02000", 50.40928505517745, 30.543896847759225],
    ["Аптека APG pharmacy <br> вулиця Європейська, 2А, Крюківщина, Київська обл., 08136", 50.37840922283909, 30.381034485321994],
]

L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}.png', {
    attribution: '<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap</a>'
}).addTo(map);

var pinAnri = L.icon({
    iconUrl: 'anri-pin.svg',

    iconSize:     [43, 47], // size of the icon
    iconAnchor:   [25, 36], // point of the icon which will correspond to marker's location
    popupAnchor:  [-6, -40] // point from which the popup should open relative to the iconAnchor
});
var pinApg = L.icon({
    iconUrl: 'apg-pin.svg',

    iconSize:     [43, 47],
    iconAnchor:   [25, 36], 
    popupAnchor:  [-6, -40]
});

for (var i = 0; i < locationsAnri.length; i++) {
    marker = new L.marker([locationsAnri[i][1], locationsAnri[i][2]], {icon: pinAnri})
      .bindPopup(locationsAnri[i][0])
      .addTo(map);
  }

for (var i = 0; i < locationsApg.length; i++) {
    marker = new L.marker([locationsApg[i][1], locationsApg[i][2]], {icon: pinApg})
      .bindPopup(locationsApg[i][0])
      .addTo(map);
}
