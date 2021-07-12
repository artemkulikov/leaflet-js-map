var map1 = L.map('map1').setView([50.448619, 30.540416], 11);


var locationsAnri = [
    // anri
    ['https://goo.gl/maps/zFDFBMTNBXgaJck7A', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no', ' Аптека "Анрі-Фарм"', 'вулиця Осіння, 33, Київ, 03164', '09:00–22:00', 50.466699117686616, 30.34806101488652, '0994951892'],
    ['https://goo.gl/maps/zkt8PyaNJ77rrH667', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no', ' Аптека "Анрі-Фарм"', 'проспект Свободи, 2Д, Київ, 04108', 'цілодобово', 50.5052674229508, 30.438224204929856, '0502519349'],
    ['https://goo.gl/maps/5P3Xft31jhhDhSvH9', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no', ' Аптека "Анрі-Фарм"', 'Харківське шосе, 19, Київ, 02090', '09:00–22:30', 50.43183856412183, 30.63425527609167, '0954270081'],
    ['https://goo.gl/maps/idw8iHcQgKb5csC27', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Миколи Закревського, 95В, Київ, 02232', ' цілодобово', 50.53010760081691, 30.623075945410942, '0506292488'],
    ['https://goo.gl/maps/c7JKT9W8Ss9zmRab6', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Золотоустівська, 50, Київ, 01135', ' цілодобово', 50.453972251787285, 30.486504819880818, '0662863025'],
    ['https://goo.gl/maps/YiK4VbUnGGcA2DfB9', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Єлизавети Чавдар, 18, Київ, 02140', ' цілодобово ', 50.38934392286923, 30.62456580453867, '0667178939'],
    ['https://goo.gl/maps/9UuXXXrB9L7NZJs9A', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Кудряшова, 20, Київ, 03035', ' цілодобово ', 50.430133469044094, 30.48730896629583, '0506800723'],
    ['https://goo.gl/maps/zDQPpgAQgRNjiyEq6', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Анни Ахматової, 22, Київ, 02068', ' цілодобово ', 50.408612430436655, 30.62499102026852, '0956252728'],
    ['https://goo.gl/maps/owPtw3Mv2aXzc9rC9', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'Оболонський проспект, 35, Київ, 04205', ' цілодобово ', 50.51838752273385, 30.497810139101823, '0956326751'],
    ['https://goo.gl/maps/1Ko3sFKxBNFRFuoT8', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Михайла Драгомирова, 14a, Київ, 01103', ' цілодобово ', 50.411628361664555, 30.545929991606652, '0664900749'],
    ['https://goo.gl/maps/CTujkc25yW7XrE767', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Регенераторна, 4, корпус 5, Київ, 02160', ' цілодобово ', 50.43543842000733, 30.622625918420763, '0669500951'],
    ['https://goo.gl/maps/EbEXvK6P3VVTZhgL6', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Академіка Вільямса, 19/14, Київ, 03191', ' цілодобово', 50.38457083365781, 30.455571924761216, '0958197998'],
    ['https://goo.gl/maps/SDSkYL6B3FoJJkVH7', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Олени Пчілки, 8, Київ, 02081', ' цілодобово ', 50.41676288867068, 30.633538611025106, '0501999742'],
    ['https://goo.gl/maps/mPR3GSXdJ3XwLVGC8', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'проспект Петра Григоренка, 5А, Київ, 02068', ' цілодобово', 50.41293332542966, 30.62844523376203, '0954502660'],
    ['https://goo.gl/maps/S6L9aDfZT8XG58XY7', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Народного Ополчення, 7, Київ, 03151', ' цілодобово ', 50.41924723991995, 30.45689083561105, '0955824022'],
    ['https://goo.gl/maps/1Ko3sFKxBNFRFuoT8', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Михайла Драгомирова, 14, Київ, 01103', ' цілодобово ', 50.41210605783218, 30.54576060953296, '0956536039'],
    ['https://goo.gl/maps/bth9oT4MpxSRjZ18A', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'проспект Леся Курбаса, 15 А, Київ, 03194', ' 08:00–22:00 ', 50.42477952924036, 30.372256013199312, '0667536192'],
    ['https://goo.gl/maps/ecVKxA5NPANJcs9P6', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Звіринецька, 47, Київ, 01014', ' цілодобово', 50.40858351924882, 30.554559491433043, '0956643821'],
    ['https://goo.gl/maps/Gfishhoa4D5FpmjR6', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Петра Сагайдачного, 20А, Софіївська Борщагівка, Київська обл., 08131', ' цілодобово ', 50.385578098370225, 30.3818310763512, '0665300433'],
    ['https://goo.gl/maps/dCQApa3FrFCs5aUR7', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Федора Ернста, 16Б, Київ, 03048', ' цілодобово', 50.41638656118946, 30.466023959003827, '0507673744'],
    ['https://goo.gl/maps/WPmUTzuuqSUYRg788', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Маршала Тимошенка, 29, Київ, 04205', ' цілодобово', 50.51292131802866, 30.501314958871465, '0665003992'],
    ['https://goo.gl/maps/pLzCG1h6zEb3zQPt6', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Жулянська, 2А, Крюківщина, Київська обл., 08136 ', 'цілодобово ', 50.377220994830274, 30.37864839652145, '0951359882'],
    ['https://goo.gl/maps/xYKTvf2fDVSS4cqq6', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Регенераторна, 4, корпус 11, Київ, 02000', ' цілодобово ', 50.43508202631791, 30.618764882124374, '0666923661'],
    ['https://goo.gl/maps/3FvvMh51k9aj78ZU9', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Соборна, 10А, Петропавлівська Борщагівка, Київська обл., 08130', ' цілодобово ', 50.43700491295075, 30.349020704897818, '0994514653'],
    ['https://goo.gl/maps/UFpTPDssqjLjiikE6', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Чорновола, 6А, Бровари, Київська обл., 07400', ' цілодобово', 50.51762555765333, 30.780670004900827, '0996305215'],
    ['https://goo.gl/maps/xWm7oXdQE9X1i1hk6', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Вишнева, 27, Крюківщина, Київська обл., 08136 ', 'цілодобово ', 50.378815556366135, 30.37135846256648, '0990648776'],
    ['https://goo.gl/maps/SzFXzSfqZQTqFsNk7', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Бориса Гмирі, 18, Київ, 02140', ' цілодобово ', 50.391008339353135, 30.63100970489618, '0993745282'],
    ['https://goo.gl/maps/Zj5JC5an4bhaw2qW6', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Бориса Гмирі, 4, Київ, 02140', ' цілодобово ', 50.39425775026431, 30.62686239509791, '0665940283'],
    ['https://goo.gl/maps/GLN9bLGRFpR11BY8A', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Метрологічна, 14Б, Київ, 03143', ' цілодобово ', 50.349851363670446, 30.476386023931788, '0994476248'],
    ['https://goo.gl/maps/hduiQj3UGR2r8hrY8', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'проспект Героїв Сталінграда, 4, корпус 7, Київ, 04210', ' цілодобово ', 50.4924723285503, 30.52382553373514, '0665300412'],
    ['https://goo.gl/maps/DUCzSJRUWzSe5EkJ6', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Раїси Окіпної, 10А, Київ, 02002', ' цілодобово ', 50.44827282988547, 30.58986183373363, '0668829378'],
    ['https://goo.gl/maps/m7Ze6JrfxKgNc7dr6', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', '(ТИМЧАСОВО ЗАЧИНЕНА) проспект Миколи Бажана, 1Е, Київ, 02121', ' - ', 50.39604142096403, 30.61509361675423, ' - '],
    ['https://goo.gl/maps/FqhGguwCvww4JC6TA', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Зарічна, 1Б, Київ, 02132', ' цілодобово ', 50.39578422177343, 30.59963028965772, '0665300368'],
    ['https://goo.gl/maps/hxdAHQkzG34uCbYS7', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця В\'ячеслава Чорновола, 26/2, Київ, 01135', ' цілодобово ', 50.45187771080551, 30.483344649182964, '0665300336'],
    ['https://goo.gl/maps/kEj2Coh2H9fcX7mYA', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Івана Франка, 6, Софіївська Борщагівка, місто Київ, 04070', ' цілодобово ', 50.40010317946842, 30.373364176165595, '0505701842'],
    ['https://goo.gl/maps/if5EHNcHUjfagdjE7', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Олени Пчілки, 2а, Київ, 04542', ' цілодобово ', 50.416745769322645, 30.62485019350552, '0660039372'],
    ['https://goo.gl/maps/sPKWcqkSzyUon8tr8', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Михайла Драгоманова, 10, Київ, 02068', ' цілодобово ', 50.414053042681225, 30.636590533837897, '0668200442'],
    ['https://goo.gl/maps/EJdj5GzdqVdHpfhd8', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Тираспольська, 58, Київ, 04136', ' цілодобово ', 50.48183057947976, 30.413743905004416, '0503726515'],
    ['https://goo.gl/maps/xEyxYNBkM447zsw3A', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Професора Підвисоцького, 5, Київ, 02000', ' цілодобово ', 50.41571564417682, 30.546388746943766, '0504070874'],
    ['https://goo.gl/maps/YWH4h73Lj2q9HYou5', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'проспект Героїв Сталінграда, 6, корпус 6, Київ 02000', ' 09:00–22:00 ', 50.49455357402796, 30.521559812195907, '0504070882'], //40 на карте не нашло
    ['https://goo.gl/maps/8jQKaVMKHqaCqDay8', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Басейна, 23/52, Київ, 02000 ', 'цілодобово ', 50.439161179981724, 30.52530318965931, '0957300046'],
    ['https://goo.gl/maps/LHyEVCztgr7Y2Eyk7', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Балукова, 1 -Е, Крюківщина, Київська обл., 08977', ' цілодобово ', 50.37446966391583, 30.375417133401893, '0507300018'],
    ['https://goo.gl/maps/bVzCXn2dVcT4AcDT8', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Семьи Кульженкив, 37, Київ, 02000', ' цілодобово ', 50.52070462007844, 30.46680868610183, '0504581557'],
    ['https://goo.gl/maps/YDQaqQHRZbeXMe8w7', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Садовая, 1, Новосілки, Київська обл., 03027', ' цілодобово ', 50.34773463369959, 30.449387625131052, '0504581548'],//45 не нашло на картах
    ['https://goo.gl/maps/pLERBZaANbknqm9p8', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Петра Сагайдачного, 20А, Софіївська Борщагівка, Київська обл., 08131', ' цілодобово ', 50.38535344838777, 30.38172761775713, '0994200673'],
    ['https://goo.gl/maps/WXM64orSJMr7YrTg6', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Жилянська, 59, Київ, 02000', ' цілодобово ', 50.437246180245616, 30.49967737578535, '0503672958'],
    ['https://goo.gl/maps/2q5CqqebsU1SisFt5', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Воскресенська, 18, Київ, 02000', ' цілодобово ', 50.47024949796505, 30.602251649806963, '0503358942'],
    ['https://goo.gl/maps/uAFmbx4dc2xbavBN9', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Андрія Аболмасова, 6, Київ, 02000', ' цілодобово ', 50.459286458445455, 30.585316749183246, '0503072993'],
    ['https://goo.gl/maps/ch3XBKVsjnj9REEA8', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Першотравнева, 24, Вишневе, Київська обл., 08132', ' 09:00–21:00 ', 50.38070570560026, 30.382283675154895, '0505215803'],
    ['https://goo.gl/maps/Hq3zfPfmtVe1eTzq5', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Василя Тютюнника, 56, Київ, 02000', ' цілодобово ', 50.417620243196716, 30.52750933568949, '0503212810'],
    ['https://goo.gl/maps/2qjYrHL3WtxiDhL36', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'проспект Героїв Небесної Сотні, 36, Софіївська Борщагівка, Київська обл., 08147 ', 'цілодобово ', 50.40836951213412, 30.32706241735673, '0952730923'],
    ['https://goo.gl/maps/Ao51MDvStkR2ehzV9', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'Супермаркет «Фора», вулиця Одеська, 22, Крюківщина, Київська обл., 08136', ' цілодобово ', 50.37044924844433, 30.381839722195416, '0503942776'],
    ['https://goo.gl/maps/CjyKPQqjCF8sMcnf8', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'провулок Ізяславський, буд. 46-49, Київ, 02000', ' цілодобово ', 50.394576667391256, 30.426558866525305, '0504493405'],
    ['https://goo.gl/maps/PePtCYTxon6pCFKL6', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'проспект Академіка Палладіна, 22, Київ, 02000 ', 'цілодобово ', 50.46142311214684, 30.35703355488191, '0503092342'],
    ['https://goo.gl/maps/zx6h4nbJRuXvvNnh8', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Композитора Мейтуса, 4, Київ, 03189', ' цілодобово ', 50.387142479466675, 30.463296518493266, '0506525987'],
    ['https://goo.gl/maps/EmCj2gZy4YvhdaoP6', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Богдана Хмельницького, 66, Київ, 02000', ' цілодобово ', 50.44768774754104, 30.5042670338391, '0503435984'],
    ['https://goo.gl/maps/kU23YikHKDt75uAq7', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Радистів, 14, Київ, 02000', ' 08:00–21:00 ', 50.47623962819861, 30.67169858651317, '0504047481'],
    ['https://goo.gl/maps/T7HKDLWPuZDyzAKu6', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Данила Щербаківського, 52, Київ, 02000', ' цілодобово ', 50.47061797026333, 30.406307256511496, '0504047482'],
    ['https://goo.gl/maps/DfZwUeDbpFY19GwH7', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'вулиця Петра Чаадаєва, 2, Київ, 02000', ' цілодобово ', 50.43475181602662, 30.37372219666808, '0503942778'],
    ['https://goo.gl/maps/MvMgExLtaK49TjQ17', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'проспект Мартинова, 1, Софіївська Борщагівка, Київська обл.', ' цілодобово ', 50.39887603286038, 30.392800289779654, '0503276614'], //63 не нашло на картах
    ['https://goo.gl/maps/ZuwgrwgDJ6ddBE7n6', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'провулок Ясиноватский, 10, Киев, 03118', ' цілодобово ', 50.50319642462894, 30.42381330891969, '0950409500'], //64 не нашло на картах
    ['https://g.page/varshavsky',             'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека "Анрі-Фарм"', 'проспект Правди, 45-Б, Київ, 04108', ' цілодобово ', 50.50319642462894, 30.42381330891969, '0952409760'],

  ];
var locationsApg = [
    // APG
    ['https://goo.gl/maps/W3xU6EKV9GagEerG6', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека APG pharmacy', 'проспект Петра Григоренка, 20, Київ, 02000 ', 'цілодобово ', 50.41009328499565, 30.626539364075796, '0503772483'], 
    ['https://goo.gl/maps/6wW1UUnggyAYFDH5A', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека APG pharmacy', 'вулиця Зарічна, 3А, Київ, 02000', ' 08:00–21:00 ', 50.39687176008701, 30.600006403510367, '0667400465'],
    ['https://goo.gl/maps/2fLZ4n8sjm5KLmLo9', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека APG pharmacy', 'вулиця Михайла Драгомирова, 20, Київ, 02000', ' 08:00–22:00 ', 50.40928505517745, 30.543896847759225, '0504581554'], 
    ['https://goo.gl/maps/gEBACoaywp85ZiLn6', 'https://lh5.googleusercontent.com/p/AF1QipOznXg93i_93lOysSxf8VfsUSlT5GxptZERBH9w=w236-h94-p-k-no',  'Аптека APG pharmacy', 'вулиця Європейська, 2А, Крюківщина, Київська обл., 08136', ' 08:00–22:00 ', 50.37840922283909, 30.381034485321994, '0952391367'],
]

L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}.png', {
    attribution: '<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap</a>'
}).addTo(map1);

var pinAnri = L.icon({
    iconUrl: 'img/anri-pin.svg',

    iconSize:     [43, 47], // size of the icon
    iconAnchor:   [25, 36], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -17] // point from which the popup should open relative to the iconAnchor
});
var pinApg = L.icon({
    iconUrl: 'img/apg-pin.svg',

    iconSize:     [43, 47],
    iconAnchor:   [25, 36], 
    popupAnchor:  [-3, -17]
});


for (var i = 0; i < locationsAnri.length; i++) {

    let geoLink =  locationsAnri[i][0];
    let imgLink =  locationsAnri[i][1];
    let brand =    locationsAnri[i][2];
    let address =  locationsAnri[i][3];
    let workTime = locationsAnri[i][4];
    let geoX =     locationsAnri[i][5];
    let geoY =     locationsAnri[i][6];
    let telLink =  locationsAnri[i][7];
    let phoneNum = '('+telLink.substr(0, 3)+')'+telLink.substr(3, 3)+'-'+telLink.substr(6, 2)+'-'+telLink.substr(8, 2);


    marker = new L.marker([geoX, geoY], {icon: pinAnri})
      .bindPopup('<a target="_blank" class="map__link" href="' + geoLink + '"> <img class="popUpImg" src="' + imgLink + '">' + brand + '<br>' + address + ' <br> Графік роботи: ' + workTime + ' </a>' + '<a class="map__link tel__link" href="tel:+38'+ telLink +'">' + 'Телефон: ' +  phoneNum + '</a>')
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
    let telLink =  locationsApg[i][7];
    let phoneNum = '('+telLink.substr(0, 3)+')'+telLink.substr(3, 3)+'-'+telLink.substr(6, 2)+'-'+telLink.substr(8, 2);

    marker = new L.marker([geoX, geoY], {icon: pinApg})
      .bindPopup('<a target="_blank" class="map__link apg" href="' + geoLink + '"> <img class="popUpImg" src="' + imgLink + '">' + brand + '<br>' + address + ' <br> Години роботи: ' + workTime + ' </a>' + '<a class="map__link tel__link apg" href="tel:+38'+ telLink +'">' + 'Телефон: ' +  phoneNum + '</a>')
      .addTo(map1);
}



var searchControl = new L.esri.Controls.Geosearch().addTo(map1);

var results = new L.LayerGroup().addTo(map1);

searchControl.on('results', function(data){
  results.clearLayers();
  for (var i = data.results.length - 1; i >= 0; i--) {
    results.addLayer(L.marker(data.results[i].latlng));
  }
});

setTimeout(function(){$('.pointer').fadeOut('slow');},3400);











   