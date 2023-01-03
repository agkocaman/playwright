const { chromium } = require('playwright');

(async() => { // anonymous arrow function
    // function code
  
  	// launching browser
    const browser = await chromium.launch({ headless:false , slowMo:100 });
  	// creating a page inside browser
  	const page = await browser.newPage();
   	// navigating to site
    await page.goto('https://demoqa.com/alerts');
    //code to handle the alerts
    page.once('dialog', async dialog =>{
        console.log(dialog.message());
        await dialog.accept();
    });
    await page.click('#confirmButton');

    page.once('dialog', async dialog =>{
        console.log(dialog.message());
        await dialog.accept('Gökhan');
    });
    await page.click('#promtButton')

   // await browser.close();
  
})(); 