var map1 = L.map('map1').setView([50.448619, 30.540416], 11);


var locationsAnri = [
    // anri
    // туду добавить поля круглосуточно или нет булевым типом, урл на гугл карте, урл картинки, номер телефона
    // разделить ссылки гугла и картинок на оддельные элементы массива

    ['https://goo.gl/maps/zFDFBMTNBXgaJck7A', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no', ' Аптека "Анрі-Фарм"', 'вулиця Осіння, 33, Київ, 03164', '09:00–22:00', 50.466699117686616, 30.34806101488652, '0994951892', '(099)495 18 92'],
    ['https://goo.gl/maps/zkt8PyaNJ77rrH667', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no', ' Аптека "Анрі-Фарм"', 'проспект Свободи, 2Д, Київ, 04108', 'цілодобово', 50.5052674229508, 30.438224204929856, '0502519349', '(050)251 93 49'],
    ['https://goo.gl/maps/5P3Xft31jhhDhSvH9', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no', ' Аптека "Анрі-Фарм"', 'Харківське шосе, 19, Київ, 02090', '09:00–22:30', 50.43183856412183, 30.63425527609167, '0954270081', '(095)427 00 81'],
    ['https://goo.gl/maps/idw8iHcQgKb5csC27', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Миколи Закревського, 95В, Київ, 02232', ' цілодобово', 50.53010760081691, 30.623075945410942, '0506292488', '(050)629 24 88'],
    ['https://goo.gl/maps/c7JKT9W8Ss9zmRab6', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Золотоустівська, 50, Київ, 01135', ' цілодобово', 50.453972251787285, 30.486504819880818, '0662863025', '(066)286 30 25'],
    ['https://goo.gl/maps/YiK4VbUnGGcA2DfB9', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Єлизавети Чавдар, 18, Київ, 02140', ' цілодобово ', 50.38934392286923, 30.62456580453867, '0667178939', '(066)717 89 39'],
    ['https://goo.gl/maps/9UuXXXrB9L7NZJs9A', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Кудряшова, 20, Київ, 03035', ' цілодобово ', 50.430133469044094, 30.48730896629583, '0506800723', '(050)680 07 23'],
    ['https://goo.gl/maps/zDQPpgAQgRNjiyEq6', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Анни Ахматової, 22, Київ, 02068', ' цілодобово ', 50.408612430436655, 30.62499102026852, '0956252728', '(095)625 27 28'],
    ['https://goo.gl/maps/owPtw3Mv2aXzc9rC9', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'Оболонський проспект, 35, Київ, 04205', ' цілодобово ', 50.51838752273385, 30.497810139101823, '0956326751', '(095)632 67 51'],
    ['https://goo.gl/maps/1Ko3sFKxBNFRFuoT8', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Михайла Драгомирова, 14a, Київ, 01103', ' цілодобово ', 50.411628361664555, 30.545929991606652, '0664900749', '(066)490 07 49'],
    ['https://goo.gl/maps/CTujkc25yW7XrE767', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Регенераторна, 4, корпус 5, Київ, 02160', ' цілодобово ', 50.43543842000733, 30.622625918420763, '0669500951', '(066)950 09 51'],
    ['https://goo.gl/maps/EbEXvK6P3VVTZhgL6', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Академіка Вільямса, 19/14, Київ, 03191', ' цілодобово', 50.38457083365781, 30.455571924761216, '0958197998', '(095)819 79 98'],
    ['https://goo.gl/maps/SDSkYL6B3FoJJkVH7', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Олени Пчілки, 8, Київ, 02081', ' цілодобово ', 50.41676288867068, 30.633538611025106, '0501999742', '(050)199 97 42'],
    ['https://goo.gl/maps/mPR3GSXdJ3XwLVGC8', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'проспект Петра Григоренка, 5А, Київ, 02068', ' цілодобово', 50.41293332542966, 30.62844523376203, '0954502660', '(095)450 26 60'],
    ['https://goo.gl/maps/S6L9aDfZT8XG58XY7', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Народного Ополчення, 7, Київ, 03151', ' цілодобово ', 50.41924723991995, 30.45689083561105, '0955824022', '(095)582 40 22'],
    ['https://goo.gl/maps/1Ko3sFKxBNFRFuoT8', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Михайла Драгомирова, 14, Київ, 01103', ' цілодобово ', 50.41210605783218, 30.54576060953296, '0956536039', '(095)653 60 39'],
    ['https://goo.gl/maps/bth9oT4MpxSRjZ18A', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'проспект Леся Курбаса, 15 А, Київ, 03194', ' 08:00–22:00 ', 50.42477952924036, 30.372256013199312, '0667536192', '(066)753 61 92'],
    ['https://goo.gl/maps/ecVKxA5NPANJcs9P6', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Звіринецька, 47, Київ, 01014', ' цілодобово', 50.40858351924882, 30.554559491433043, '0956643821', '(095)664 38 21'],
    ['https://goo.gl/maps/Gfishhoa4D5FpmjR6', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Петра Сагайдачного, 20А, Софіївська Борщагівка, Київська обл., 08131', ' цілодобово ', 50.385578098370225, 30.3818310763512, '0665300433', '(066)530 04 33'],
    ['https://goo.gl/maps/dCQApa3FrFCs5aUR7', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Федора Ернста, 16Б, Київ, 03048', ' цілодобово', 50.41638656118946, 30.466023959003827, '0507673744', '	(050)767 37 44'],
    ['https://goo.gl/maps/WPmUTzuuqSUYRg788', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Маршала Тимошенка, 29, Київ, 04205', ' цілодобово', 50.51292131802866, 30.501314958871465, '0665003992', '(066)500 39 92'],
    ['https://goo.gl/maps/pLzCG1h6zEb3zQPt6', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Жулянська, 2А, Крюківщина, Київська обл., 08136 ', 'цілодобово ', 50.377220994830274, 30.37864839652145, '0951359882', '(095)135 98 82'],
    ['https://goo.gl/maps/xYKTvf2fDVSS4cqq6', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Регенераторна, 4, корпус 11, Київ, 02000', ' цілодобово ', 50.43508202631791, 30.618764882124374, '0666923661', '(066)692 36 61'],
    ['https://goo.gl/maps/3FvvMh51k9aj78ZU9', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Соборна, 10А, Петропавлівська Борщагівка, Київська обл., 08130', ' цілодобово ', 50.43700491295075, 30.349020704897818, '0994514653', '(099)451 46 53'],
    ['https://goo.gl/maps/UFpTPDssqjLjiikE6', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Чорновола, 6А, Бровари, Київська обл., 07400', ' цілодобово', 50.51762555765333, 30.780670004900827, '0996305215', '(099)630 52 15'],
    ['https://goo.gl/maps/xWm7oXdQE9X1i1hk6', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Вишнева, 27, Крюківщина, Київська обл., 08136 ', 'цілодобово ', 50.378815556366135, 30.37135846256648, '0990648776', '(099)064 87 76'],
    ['https://goo.gl/maps/SzFXzSfqZQTqFsNk7', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Бориса Гмирі, 18, Київ, 02140', ' цілодобово ', 50.391008339353135, 30.63100970489618, '0993745282', '(099)374 52 82'],
    ['https://goo.gl/maps/Zj5JC5an4bhaw2qW6', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Бориса Гмирі, 4, Київ, 02140', ' цілодобово ', 50.39425775026431, 30.62686239509791, '0665940283', '(066)594 02 83'],
    ['https://goo.gl/maps/GLN9bLGRFpR11BY8A', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Метрологічна, 14Б, Київ, 03143', ' цілодобово ', 50.349851363670446, 30.476386023931788, '0994476248', '(099)447 62 48'],
    ['https://goo.gl/maps/hduiQj3UGR2r8hrY8', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'проспект Героїв Сталінграда, 4, корпус 7, Київ, 04210', ' цілодобово ', 50.4924723285503, 30.52382553373514, '0665300412', '(066)530 04 12'],
    ['https://goo.gl/maps/DUCzSJRUWzSe5EkJ6', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Раїси Окіпної, 10А, Київ, 02002', ' цілодобово ', 50.44827282988547, 30.58986183373363, '0668829378', '(066)882 93 78'],
    ['https://goo.gl/maps/m7Ze6JrfxKgNc7dr6', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', '(ТИМЧАСОВО ЗАЧИНЕНА) проспект Миколи Бажана, 1Е, Київ, 02121', ' - ', 50.39604142096403, 30.61509361675423, ' - ', ' - '],
    ['https://goo.gl/maps/FqhGguwCvww4JC6TA', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Зарічна, 1Б, Київ, 02132', ' цілодобово ', 50.39578422177343, 30.59963028965772, '0665300368', '(066)530 03 68'],
    ['https://goo.gl/maps/hxdAHQkzG34uCbYS7', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця В\'ячеслава Чорновола, 26/2, Київ, 01135', ' цілодобово ', 50.45187771080551, 30.483344649182964, '0665300336', '(066)530 03 36'],
    ['https://goo.gl/maps/kEj2Coh2H9fcX7mYA', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Івана Франка, 6, Софіївська Борщагівка, місто Київ, 04070', ' цілодобово ', 50.40010317946842, 30.373364176165595, '0505701842', '(050)570 18 42'],
    ['https://goo.gl/maps/if5EHNcHUjfagdjE7', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Олени Пчілки, 2а, Київ, 04542', ' цілодобово ', 50.416745769322645, 30.62485019350552, '0660039372', '(066)003 93 72'],
    ['https://goo.gl/maps/sPKWcqkSzyUon8tr8', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Михайла Драгоманова, 10, Київ, 02068', ' цілодобово ', 50.414053042681225, 30.636590533837897, '0668200442', '(066)820 04 42'],
    ['https://goo.gl/maps/EJdj5GzdqVdHpfhd8', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Тираспольська, 58, Київ, 04136', ' цілодобово ', 50.48183057947976, 30.413743905004416, '0503726515', '(050)372 65 15'],
    ['https://goo.gl/maps/xEyxYNBkM447zsw3A', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Професора Підвисоцького, 5, Київ, 02000', ' цілодобово ', 50.41571564417682, 30.546388746943766, '0504070874', '(050)407 08 74'],
    ['https://goo.gl/maps/YWH4h73Lj2q9HYou5', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'проспект Героїв Сталінграда, 6, корпус 6, Київ 02000', ' 09:00–22:00 ', 50.49455357402796, 30.521559812195907, '0504070882', '(050)407 08 82'], //40 на карте не нашло
    ['https://goo.gl/maps/8jQKaVMKHqaCqDay8', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Басейна, 23/52, Київ, 02000 ', 'цілодобово ', 50.439161179981724, 30.52530318965931, '0957300046', '(095)730 00 46'],
    ['https://goo.gl/maps/LHyEVCztgr7Y2Eyk7', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Балукова, 1 -Е, Крюківщина, Київська обл., 08977', ' цілодобово ', 50.37446966391583, 30.375417133401893, '0507300018', '(050)730 00 18'],
    ['https://goo.gl/maps/bVzCXn2dVcT4AcDT8', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Семьи Кульженкив, 37, Київ, 02000', ' цілодобово ', 50.52070462007844, 30.46680868610183, '0504581557', '(050)458 15 57'],
    ['https://goo.gl/maps/YDQaqQHRZbeXMe8w7', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Садовая, 1, Новосілки, Київська обл., 03027', ' цілодобово ', 50.34773463369959, 30.449387625131052, '0504581548', '(050)458 15 48'],//45 не нашло на картах
    ['https://goo.gl/maps/pLERBZaANbknqm9p8', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Петра Сагайдачного, 20А, Софіївська Борщагівка, Київська обл., 08131', ' цілодобово ', 50.38535344838777, 30.38172761775713, '0994200673', '(099)420 06 73'],
    ['https://goo.gl/maps/WXM64orSJMr7YrTg6', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Жилянська, 59, Київ, 02000', ' цілодобово ', 50.437246180245616, 30.49967737578535, '0503672958', '(050)367 29 58'],
    ['https://goo.gl/maps/2q5CqqebsU1SisFt5', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Воскресенська, 18, Київ, 02000', ' цілодобово ', 50.47024949796505, 30.602251649806963, '0503358942', '(050)335 89 42'],
    ['https://goo.gl/maps/uAFmbx4dc2xbavBN9', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Андрія Аболмасова, 6, Київ, 02000', ' цілодобово ', 50.459286458445455, 30.585316749183246, '0503072993', '(050)307 29 93'],
    ['https://goo.gl/maps/ch3XBKVsjnj9REEA8', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Першотравнева, 24, Вишневе, Київська обл., 08132', ' 09:00–21:00 ', 50.38070570560026, 30.382283675154895, '0505215803', '(050)521 58 03'],
    ['https://goo.gl/maps/Hq3zfPfmtVe1eTzq5', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Василя Тютюнника, 56, Київ, 02000', ' цілодобово ', 50.417620243196716, 30.52750933568949, '0503212810', '(050)321 28 10'],
    ['https://goo.gl/maps/2qjYrHL3WtxiDhL36', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'проспект Героїв Небесної Сотні, 36, Софіївська Борщагівка, Київська обл., 08147 ', 'цілодобово ', 50.40836951213412, 30.32706241735673, '0952730923', '(095)273 09 23'],
    ['https://goo.gl/maps/Ao51MDvStkR2ehzV9', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'Супермаркет «Фора», вулиця Одеська, 22, Крюківщина, Київська обл., 08136', ' цілодобово ', 50.37044924844433, 30.381839722195416, '0503942776', '(050)394 27 76'],
    ['https://goo.gl/maps/CjyKPQqjCF8sMcnf8', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'провулок Ізяславський, буд. 46-49, Київ, 02000', ' цілодобово ', 50.394576667391256, 30.426558866525305, '0504493405', '(050)449 34 05'],
    ['https://goo.gl/maps/PePtCYTxon6pCFKL6', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'проспект Академіка Палладіна, 22, Київ, 02000 ', 'цілодобово ', 50.46142311214684, 30.35703355488191, '0503092342', '(050)309 23 42'],
    ['https://goo.gl/maps/zx6h4nbJRuXvvNnh8', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Композитора Мейтуса, 4, Київ, 03189', ' цілодобово ', 50.387142479466675, 30.463296518493266, '0506525987', '(050)652 59 87'],
    ['https://goo.gl/maps/EmCj2gZy4YvhdaoP6', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Богдана Хмельницького, 66, Київ, 02000', ' цілодобово ', 50.44768774754104, 30.5042670338391, '0503435984', '(050)343 59 84'],
    ['https://goo.gl/maps/kU23YikHKDt75uAq7', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Радистів, 14, Київ, 02000', ' 08:00–21:00 ', 50.47623962819861, 30.67169858651317, '0504047481', '(050)404 74 81'],
    ['https://goo.gl/maps/T7HKDLWPuZDyzAKu6', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Данила Щербаківського, 52, Київ, 02000', ' цілодобово ', 50.47061797026333, 30.406307256511496, '0504047482', '(050)404 74 82'],
    ['https://goo.gl/maps/DfZwUeDbpFY19GwH7', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Петра Чаадаєва, 2, Київ, 02000', ' цілодобово ', 50.43475181602662, 30.37372219666808, '0503942778', '(050)394 27 78'],
    ['https://goo.gl/maps/MvMgExLtaK49TjQ17', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'проспект Мартинова, 1, Софіївська Борщагівка, Київська обл.', ' цілодобово ', 50.39887603286038, 30.392800289779654, '0503276614', '(050)327 66 14'], //63 не нашло на картах
    ['https://goo.gl/maps/ZuwgrwgDJ6ddBE7n6', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'провулок Ясиноватский, 10, Киев, 03118', ' цілодобово ', 50.50319642462894, 30.42381330891969, '0950409500', '(095)040 95 00'], //64 не нашло на картах
    ['https://g.page/varshavsky',             'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'проспект Правди, 45-Б, Київ, 04108', ' цілодобово ', 50.50319642462894, 30.42381330891969, '0952409760', '	(095)240 97 60'],

  ];
var locationsApg = [
    // APG
    ['https://goo.gl/maps/W3xU6EKV9GagEerG6', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека APG pharmacy', 'проспект Петра Григоренка, 20, Київ, 02000 ', 'цілодобово ', 50.41009328499565, 30.626539364075796, '0503772483', '(050)377 24 83'], 
    ['https://goo.gl/maps/6wW1UUnggyAYFDH5A', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека APG pharmacy', 'вулиця Зарічна, 3А, Київ, 02000', ' 08:00–21:00 ', 50.39687176008701, 30.600006403510367, '0667400465', '(066)740 04 65'],
    ['https://goo.gl/maps/2fLZ4n8sjm5KLmLo9', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека APG pharmacy', 'вулиця Михайла Драгомирова, 20, Київ, 02000', ' 08:00–22:00 ', 50.40928505517745, 30.543896847759225, '0504581554', '(050)458 15 54'], 
    ['https://goo.gl/maps/gEBACoaywp85ZiLn6', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека APG pharmacy', 'вулиця Європейська, 2А, Крюківщина, Київська обл., 08136', ' 08:00–22:00 ', 50.37840922283909, 30.381034485321994, '0952391367', '(095)239 13 67'],
]

L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}.png', {
    attribution: '<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap</a>'
}).addTo(map1);

var pinAnri = L.icon({
    iconUrl: 'anri-pin.svg',

    iconSize:     [43, 47], // size of the icon
    iconAnchor:   [25, 36], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -37] // point from which the popup should open relative to the iconAnchor
});
var pinApg = L.icon({
    iconUrl: 'apg-pin.svg',

    iconSize:     [43, 47],
    iconAnchor:   [25, 36], 
    popupAnchor:  [-3, -37]
});


for (var i = 0; i < locationsAnri.length; i++) {

    let geoLink =  locationsAnri[i][0];
    let imgLink =  locationsAnri[i][1];
    let brand =    locationsAnri[i][2];
    let address =  locationsAnri[i][3];
    let workTime = locationsAnri[i][4];
    let geoX =     locationsAnri[i][5];
    let geoY =     locationsAnri[i][6];
    let telNum =   locationsAnri[i][7];
    let phoneNum = locationsAnri[i][8];

    marker = new L.marker([geoX, geoY], {icon: pinAnri})
      .bindPopup('<a class="map__link" href="' + geoLink + '"> <img class="popUpImg" src="' + imgLink + '">' + brand + '<br>' + address + ' <br> Графік роботи: ' + workTime + ' </a>' + '<a class="map__link tel__link" href="tel:+38'+ telNum +'">' + 'Телефон: ' +  phoneNum + '</a>')
      .addTo(map1);
  }
  

for (var i = 0; i < locationsApg.length; i++) {

    let geoLink =  locationsApg[i][0];
    let imgLink =  locationsApg[i][1];
    let brand =    locationsApg[i][2];
    let address =  locationsApg[i][3];
    let workTime = locationsApg[i][4];
    let geoX =     locationsApg[i][5];
    let geoY =     locationsApg[i][6];
    let telNum =   locationsAnri[i][7];
    let phoneNum = locationsAnri[i][8];

    marker = new L.marker([geoX, geoY], {icon: pinApg})
      .bindPopup('<a class="map__link apg" href="' + geoLink + '"> <img class="popUpImg" src="' + imgLink + '">' + brand + '<br>' + address + ' <br> Години роботи: ' + workTime + ' </a>' + '<a class="map__link tel__link apg" href="tel:+38'+ telNum +'">' + 'Телефон: ' +  phoneNum + '</a>')
      .addTo(map1);
}
















   