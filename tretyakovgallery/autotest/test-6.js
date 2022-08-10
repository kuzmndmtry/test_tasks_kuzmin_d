const puppeteer = require('puppeteer');


    async function test6TG() {
    console.log('Запуск браузера');
    const browser = await puppeteer.launch({headless: false, slowMo: 100});

    console.log('Создание новой вкладки в браузере');
    const page = await browser.newPage();

    console.log('Переход по ссылке');
    await page.goto('https://www.tretyakovgallery.ru/');
  
    console.log('Закрытие уведомлений');
    const modeNot1 = await page.$('#header > div.header.header-fixed > div.notifications-box > div > div.notification-item.__red > div > button > svg'); 
    await modeNot1.click();

    const modeNot2 = await page.$('#header > div.header.header-fixed > div.notifications-box > div > div.notification-item.__blue > div > button > svg');  
    await modeNot2.click();

    console.log('Запуск поиска по сайту');
    const modeSearch = await page.$('#header > div.header.header-fixed > div.wrapper > div > div > div.header-top__right > ul.header-top__actions > li:nth-child(2) > button > svg'); 
    await modeSearch.click();

    console.log('Ввод запроса в поле поиска');
    const searchField = await page.$('#header > div.popups-wrapper > div > form > div > div.popup__search.popup-search.input__group > input');
    await searchField.type('Врубель');
  
    console.log('Переход на страницу поиска');
    const clickSearch = await page.$('#header > div.popups-wrapper > div > form > div > div.popup__search.popup-search.input__group > button > svg > path:nth-child(1)'); 
    await clickSearch.click();

    console.log('Ожидание перехода в страницу поисковых результатов');
    await page.waitForNavigation();

    console.log('Получение элементов результата поиска');
    const result = await page.$('#header > div.content > div > div');

    console.log('Сравнение ОР и ФР');
    if (result==null) {
        console.log('Результаты поиска не отобразились');
    } else {
          console.log('Результаты поиска отобразились')
    }
    
    console.log('Создание скриншота ФР');
    await page.screenshot({path: 'test-6-TG-Result.png'});


    console.log('Закрытие браузера');
    await browser.close();
}


test6TG();