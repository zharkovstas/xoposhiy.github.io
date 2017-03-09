let which = prepare([
	'гипертекстовый векторный',
	'интегрированный с Декларантом',
	'интегрированный с Гособлаком',
	'интегрированный с ОФД',
	'интегрированный с Контур.Маркетом',
	'интегрированный с Контур.Поставками',
	'интегрированный с Фейсбуком',
	'встроенный в Диадок',
	'встроенный в Фокус',
	'встроенный в Кабинет УЦ',
	'юридически значимый',
	'совместимый с 1C',
	'криптографически стойкий',
	'надёжно защищённый',
	'минималистичный',
	'краудсорсинговый',
	'аудиовизуальный',
	'децентрализованный',
	'распределённый',
	'бесплатный',
	'условно-бесплатный',
	'удобный в использовании',
	'мимимишный',
]);

let withWhat = prepare([
	'с подпиской на год',
	'с показом рекламы',
	'с краудфандингом',
	'с пользовательским контентом',
	'с дополненной реальностью',
	'в виртуальной реальности',
	'с блокчейном',
	'с открытым исходным кодом',
	'с геймификацией',
	'с машинным обучением и сплит-тестированием',
	'с глубоким обучением и нейронными сетями',
	'с графиками и push-уведомлениями',
	'с ботом в Телеграме',
	'с дзен-режимом',
	'с тёмной темой оформления',
	'с промокодами и инвайтами',
	'с онлайн-консультантом',
	'с оплатой через WeChat',
	'с Apple Pay',
	'с автоматическим обновлением',
	'с персонализацией',
	'с активной обратной связью',
	'с настраиваемым интерфейсом',
	'с возможностью редактирования',
	'с таблицей рекордов',
	'с цепочками согласования',
	'с открытыми данными',
	'с шахматкой и калькулятором',
	'с пошаговыми инструкциями',
	'с социальной сетью',
	'с лайками и избранным',
	'с электронной подписью',
	'с компьютерным зрением',
	'с выгрузкой в интернет-банк',
	'с форматно-логическим контролем',
	'с элементами PvP',
	'с обсценной лекcикой',
	'с проверкой знаний',
	'с биткоином и криптовалютами',
	'с конкурсами и ценными призами',
	'с Bluetooth',
	'с эксклюзивным контентом',
	'с автоматизированной обработкой',
	'с индивидуальными доработками',
	'со скорингом',
	'со сдачей в аренду',
	
]);

let what = prepare([
	'документооборот',
	'бухгалтерский учёт',
	'товароучёт',
	'онлайн-курс по программированию',
	'расчёт зарплаты',
	'удостоверяющий центр',
	'хакатон',
	'веб-сервис',
	'продукт',
	'облачный диск',
	'фреймворк',
	'помощник',
	'онлайн-университет',
	'агрегатор поставщиков',
	'поисковый движок',
	'интернет-аукцион',
	'хостинг',
	'новостной портал',
	'справочник сотрудников',
	'конструктор сайтов',
	'персональный сайт',
	'личный кабинет',
	'генератор идей',
	'генератор документов',
	'программно-аппаратный комплекс',
	'API',
	'пакет офисных приложений',
	'набивалка!',
	'справочно-правовая система!',
	'экспертная система!',
	'платформа!',
	'клепалка формочек!',
	'торговая площадка!',
	'конференция!',
]);

let forWhom = prepare([
	'для бизнес-аналитиков',
	'для гиков',
	'для обладателей носимых устройств',
	'для закрытых сообществ',
	'для участников госзакупок',
	'для сотрудников ФНС',
	'для сотрудников ПФР',
	'для сотрудников ФСС',
	'для сотрудников Росстата',
	'для лиц, принимающих решения',
	'для бухгалтеров',
	'для кадровиков',
	'для безопасников',
	'для руководителей',
	'для менеджеров среднего звена',
	'для стажёров',
	'для менеджеров по продажам',
	'для плохих девочек',
	'для плохих мальчиков',
	'для суровых бэкендеров',
	'для современных фронтендеров',
	'для опытных тестировщиков',
	'для перфекционистов',
	'для творческих профессионалов',
	'для хипстеров',
	'для девопсов',
	'для системных аналитиков',
	'для читателей Контур.Диалога',
	'для тех, кто думает о будущем',
	'для консультантов контакт-центра',
	'для поколения Y',
	'для души',
	'для успокоения совести',
	'для развития партнёрской сети',
	'для управленческого учёта',
	'для юристов',
	'для владельцев Android-устройств',
	'для последнего iPhone',
	'для бюджетников',
	'для стимулирования предпринимательства',
	'для государства',
	'для борцов с коррупцией',
	'для начинающих программистов',
	'для сырьевых корпораций',
	'для геймеров',
	'для туристов',
	'для тинейджеров',
	'для спортсменов-любителей',
	'для любителей российских сериалов',
	'для автолюбителей',
	'для пешеходов',
	'для велосипедистов',
	'для людей со слабым здоровьем',
	'для ипотечников',
	'для молодых родителей',
	'для пенсионеров',
	'для рекрутёров',
	'для одиноких сердец',
]);

function prepare(array){
	var res = shuffle(array).map(p => replaceNbsp(p));
	return res;
}

function replaceNbsp(name){
	return name.replace(/\s(.{1,3})\s+/g, ' $1&nbsp;').
		replace(/^(.{1,3})\s+/g, '$1&nbsp;');
}

function shuffle(a) {
	return a;
	var j, x, i;
	for (i = a.length; i; i--) {
		j = Math.floor(Math.random() * i);
		x = a[i - 1];
		a[i - 1] = a[j];
		a[j] = x;
	}
	return a;
}
