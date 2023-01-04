
const { chromium } = require('playwright');

(async() => { // anonymous arrow function
    // function code
  
  	// launching browser
    const browser = await chromium.launch();
  	// creating a page inside browser
  	const page = await browser.newPage();
   	// navigating to site
    await page.goto('https://www.haberturk.com/');
    await page.screenshot({path:'deneme.png'});
    const header = await page.$('#MarketHorizontal');
    await header.screenshot({path : 'header.png'})
    await page.screenshot({path:'full.png', fullPage:true});
  	// closing browser
    await browser.close();
  
})(); // function calls itself