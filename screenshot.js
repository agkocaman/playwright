
const { chromium } = require('playwright');

(async() => { // anonymous arrow function
    // function code
  
  	// launching browser
    const browser = await chromium.launch({ headless:false , slowMo:100 });
  	// creating a page inside browser
  	const page = await browser.newPage();
   	// navigating to site
    await page.goto('https://google.com/');
    await page.screenshot({path:'deneme.png'});
    const header = await page.$('#gb');
    await header.screenshot({path : 'header.png'})
  	// closing browser
    await browser.close();
  
})(); // function calls itself