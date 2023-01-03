const { chromium } = require('playwright');

(async() => { // anonymous arrow function
    // function code
  
  	// launching browser
    const browser = await chromium.launch();
  	// creating a page inside browser
  	const page = await browser.newPage();
   	// navigating to site
    await page.goto('https://demoqa.com/automation-practice-form');
    // element handles
    const firstName = await page.$('#firstName');
    const sportCheck = await page.$('#hobbies-checkbox-1');
    const sumbit = await page.$('#submit')
    //print the element state
    console.log(" firstName  Disabled? ..:"+ await firstName.isDisabled());
    console.log(" firstName  Enabled? ..:"+await firstName.isEnabled());
    console.log(" firstName  Edittable? ..:"+  await firstName.isEditable());
    console.log(" SportCheck Checked ..:"+  await sportCheck.isChecked());
    console.log(" SportCheck Visible ..:"+ await sportCheck.isVisible());
    console.log(" Sumbit Hidden ..:"+await sumbit.isHidden() );
    console.log(" Sumbit Visible ..:"+ await sumbit.isVisible());

  	// closing browser
    await browser.close();
  
})(); 