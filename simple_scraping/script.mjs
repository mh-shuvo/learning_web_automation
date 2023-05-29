import puppeteer from "puppeteer";
const browser = await puppeteer.launch({
   headless:true,
   defaultViewport:{
    width:1920,height:1080
   },
   userDataDir:"temporary"
});

const page = await browser.newPage();
// Get the all services from asl.aero
await page.goto('https://www.asl.aero/');
  
  // Wait for the services section to load
  await page.waitForSelector('.flex-service-container .item-box');
  
  // Get the services
  const services = await page.evaluate(() => {
    return [...document.querySelectorAll('h4[class=title]')].map(e=>e.textContent);
  });
  
  console.log('Services:');
  services.forEach(service => console.log(service));
  
browser.close()