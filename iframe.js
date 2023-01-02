const { webkit } = require('playwright');

(async() => { // anonymous arrow function
    // function code
  
  	// launching browser
    const browser = await webkit.launch({ headless:false , slowMo:100 });
  	// creating a page inside browser
  	const page = await browser.newPage();
   	// navigating to site
    await page.goto('https://demoqa.com/frames');
    //logic to handle the iframes
    const frame = await page.frame({url: /\/sample/});
    const heading = await frame.$('h1');
    console.log(await heading.innerText());


  	// closing browser
    await browser.close();
  
})(); // function calls itself