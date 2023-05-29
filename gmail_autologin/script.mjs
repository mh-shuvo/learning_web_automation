import puppeteer from "puppeteer";
const browser = await puppeteer.launch({
   headless:false,
   defaultViewport:{
    width:1920,height:1080
   },
   userDataDir:"temporary"
});

const page = await browser.newPage();
await page.goto("https://accounts.google.com/",{
    waitUntil:"networkidle2"
})
await page.waitForSelector('input[name=identifier]')
await page.type('input[name=identifier]',"shuvo@aslgroup.com.bd")

await page.evaluate(() => {
    const buttons = document.querySelectorAll('button');
    const lastButton = buttons[buttons.length-2];
    lastButton.click();
  });

await page.waitForSelector('input[name=Passwd]')
await page.type('input[name=Passwd]',"Mehedi@2020")

await page.evaluate(() => {
    const buttons = document.querySelectorAll('button');
    const lastButton = buttons[buttons.length-2];
    lastButton.click();
});
  