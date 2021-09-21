let puppeteer = require("puppeteer");

//taking the user input for search item using command line argument
let arr = process.argv.slice(2);
let brr = [];
for (let i = 0; i < arr.length; i++) {
    brr[i] = arr[i];
}
let searchfor = brr[0];

//browser will be opened in fullscreen mode
let browserObj = puppeteer.launch({
    headless: false,
    defaultViewport: null,

    // slowMo: 10,
    args: ["--start-maximized"]
})


let Browser, page, pagesarray, elementarray, firstpage, i, secondpage;
i = 0;
//new page(tab) will be opened , the browserobj will return the browser object that will be passed to 
//this function and it will return the newtab object
browserObj.then(function (browser) {
    let newtabwillbeopenedPromise = browser.newPage();
    Browser = browser;
    return newtabwillbeopenedPromise;
})
//google.com will be searched
    .then(function (newtab) {
        page = newtab;

        let googlewillbeopenedPromise = page.goto("https://www.google.com");

        return googlewillbeopenedPromise;
    })

    //amazon will be typed in google search bar
    .then(function () {
        let liwillbetypedPromise = page.type('.pR49Ae.gsfi', 'amazon');

        return liwillbetypedPromise;
    })

    //enter will be pressed
    .then(function () {
        let enterwillbepressedPromise = page.keyboard.press("Enter");

        return enterwillbepressedPromise;
    })
    
    //wait for the first link to appear after clicking enter on the screen
    .then(function () {
        let waitforSelectorPromise = page.waitForSelector('.cfxYMc.JfZTW.c4Djg.MUxGbd.v0nnCb', { visible: true });

        return waitforSelectorPromise;
    })
    //first link will be clicked
    .then(function () {
        let clickonSelectorPromise = page.click('.cfxYMc.JfZTW.c4Djg.MUxGbd.v0nnCb', );

        return clickonSelectorPromise;
    })
    //promise will wait for amazon search bar to appear on screen
    .then(function () {
        let waitforSelectorPromise = page.waitForSelector('#twotabsearchtextbox', { visible: true });

        return waitforSelectorPromise;
    })
    //search item will be typed in amazon search bar
    .then(function () {
        let usernamewillbetypedPromise = page.type('#twotabsearchtextbox', searchfor, );

        return usernamewillbetypedPromise;
    })
    //enter will be pressed
    .then(function () {
        let enterwillbetypedPromise = page.keyboard.press("Enter", );

        return enterwillbetypedPromise;
    })
    //will wait for four stars and up element to appear on screen
    .then(function()
    {
        let fourstarsandupwillbewaitedforPromise=page.waitForSelector('.a-icon.a-icon-star-medium.a-star-medium-4',{visible:true});

        return fourstarsandupwillbewaitedforPromise;
    })

    //will click the four stars and up element
    .then(function()
    {
        let fourstarswillbeclickedPromise=page.click('.a-icon.a-icon-star-medium.a-star-medium-4',{delay:1000});

        return fourstarswillbeclickedPromise;
    })



    
    //will wait for item image
    .then(function () {
        let waitForselectorPromise = page.waitForSelector('.s-image', { visible: true });
        return waitForselectorPromise;
    })
    //will return the array of all item images present on screen
    .then(function () {
        let arraywillberetuernedPromise = page.$$('.s-image');
        return arraywillberetuernedPromise;
    })
    //first item will be clicked
    .then(function (array) {
        let elementwillbeclickedPromise = array[i].click();

        i++;

        elementarray = array;

        return elementwillbeclickedPromise;
    })
    //static wait-> to give time to all tabs to load
    .then(function () {
        let waitPromise = page.waitFor(2000);

        return waitPromise;
    })
    //will return the array containing all the tabs , in the browser. 
    .then(function () {
        let noofpagesPromise = Browser.pages();

        return noofpagesPromise;
    })
    //reference of newly opened page i.e the item page will be given to page
    //and promisewill wait for add to cart button to appear on screen
    .then(function (pagesarr) {
        page = pagesarr[2];

        pagesarray = pagesarr;


        let waitForSelectorPromise = page.waitForSelector('#add-to-cart-button', { visible: true });

        return waitForSelectorPromise;
    })
    //add to cart button will be clicked
    .then(function () {
        let selectorwillbeclickedPromise = page.click('#add-to-cart-button');

        return selectorwillbeclickedPromise;
    })
    //static wait
    .then(function () {
        let waitPromise = page.waitFor(2000);

        return waitPromise;
    })
    //tab will be closed and reference of first page i.e all items page
    //will be given to page
    .then(function () {
        let tabwillbeclosedPromise = page.close();
        page = pagesarray[1];
        return tabwillbeclosedPromise;
    })
    //function used for adding subsequent items to cart
    .then(function () {

        let addtocartPromise = addtoCart(page, pagesarray, elementarray, i);
        i++;
        return addtocartPromise;

    })

    //function addtocart used
    .then(function () {

        let addtocartPromise = addtoCart(page, pagesarray, elementarray, i);
        i++;
        return addtocartPromise;

    })
    .then(function () {

        let addtocartPromise = addtoCart(page, pagesarray, elementarray, i);
        i++;
        return addtocartPromise;

     })
    // .then(function () {

    //     let addtocartPromise = addtoCart(page, pagesarray, elementarray, i);
    //     i++;
    //     return addtocartPromise;

    // })
    //cart will be opened
    .then(function(){
        let cartwillbeopenedPromise=page.click('#nav-cart-text-container');

        return cartwillbeopenedPromise;
    })
    .then(function () {
        console.log("items having four stars and above related to added to cart");
    })





    

//this function will add item to cart based on its index on the items-page
function addtoCart(page, pagesarray, elementarray, i) {
    return new Promise(function (resolve, reject) {
        let elementwillbeclickedPromise = elementarray[i].click();



        elementwillbeclickedPromise.then(function () {
            let waitPromise = page.waitFor(2000);

            return waitPromise;
        })
            .then(function () {
                let noofpagesPromise = Browser.pages();

                return noofpagesPromise;
            })
            .then(function (pagesarr) {
                page = pagesarr[pagesarr.length - 1];

                //firstpage=pagesarr[2];

                let waitForSelectorPromise = page.waitForSelector('#add-to-cart-button', { visible: true });

                return waitForSelectorPromise;
            })
            .then(function () {
                let selectorwillbeclickedPromise = page.click('#add-to-cart-button');

                return selectorwillbeclickedPromise;
            })
            .then(function () {
                let waitPromise = page.waitFor(2000);

                return waitPromise;
            })
            .then(function () {
                let tabwillbeclosedPromise = page.close();
                page = pagesarray[1];
                return tabwillbeclosedPromise;
            })

            .then(function () {
                resolve();
            }).catch(function () {
                reject();
            })
    })
}

// .then(function(){
    //     let waitPromise=page.waitFor(2000);

    //     return waitPromise;
    // })
    // .then(function(){
    //     let noofpagesPromise=Browser.pages();

    //     return noofpagesPromise;
    // })
    // .then(function(pagesarr)
    // {
    //     page=pagesarr[pagesarr.length-1];

    //     //firstpage=pagesarr[2];

    //     let waitForSelectorPromise=page.waitForSelector('#add-to-cart-button',{visible:true});

    //     return waitForSelectorPromise;
    // })
    // .then(function()
    // {
    //     let selectorwillbeclickedPromise=page.click('#add-to-cart-button');

    //     return selectorwillbeclickedPromise;
    // })
    // .then(function()
    // {
    //     let waitPromise=page.waitFor(2000);

    //     return waitPromise;
    // })
    // .then(function()
    // {
    //     let tabwillbeclosedPromise=page.close();
    //     page=pagesarray[1];
    //     return tabwillbeclosedPromise;
    //  })
     ////////////////////////////////////////////////3



    // .then(function()
    // {
    //     let tabwillbeclosedPromise=page.close();
    //     page=pagesarray[1];
    //     return tabwillbeclosedPromise;
    //  })


    // .then(function () {
    //     let elementwillbeclickedPromise = elementarray[i].click();

    //     i++;

    //     return elementwillbeclickedPromise;
    // })
    // .then(function(){
    //     let waitPromise=page.waitFor(2000);

    //     return waitPromise;
    // })
    // .then(function(){
    //     let noofpagesPromise=Browser.pages();

    //     return noofpagesPromise;
    // })
    // .then(function(pagesarr)
    // {
    //     page=pagesarr[pagesarr.length-1];

    //     //firstpage=pagesarr[2];

    //     let waitForSelectorPromise=page.waitForSelector('#add-to-cart-button',{visible:true});

    //     return waitForSelectorPromise;
    // })
    // .then(function()
    // {
    //     let selectorwillbeclickedPromise=page.click('#add-to-cart-button');

    //     return selectorwillbeclickedPromise;
    // })
    // .then(function()
    // {
    //     let waitPromise=page.waitFor(2000);

    //     return waitPromise;
    // })
    // .then(function()
    // {
    //     let tabwillbeclosedPromise=page.close();
    //     page=pagesarray[1];
    //     return tabwillbeclosedPromise;
    //  })

    //  ///click on cart
    // //  .then(function(){
    // //      let waitPromise=page.waitFor(2000);

    // //      return waitPromise;
    // //  })
    // //  .then(function(){
    // //      let cartwillbeclickedPromise=page.click('.nav-cart-icon nav-sprite');

    // //      return cartwillbeclickedPromise;
    // //  })
    // /////////////////////////////////////////////////4
    // .then(function () {
    //     let elementwillbeclickedPromise = elementarray[i].click();

    //     i++;

    //     return elementwillbeclickedPromise;
    // })
    // .then(function(){
    //     let waitPromise=page.waitFor(2000);

    //     return waitPromise;
    // })
    // .then(function(){
    //     let noofpagesPromise=Browser.pages();

    //     return noofpagesPromise;
    // })
    // .then(function(pagesarr)
    // {
    //     page=pagesarr[pagesarr.length-1];

    //     //firstpage=pagesarr[2];

    //     let waitForSelectorPromise=page.waitForSelector('#add-to-cart-button',{visible:true});

    //     return waitForSelectorPromise;
    // })
    // .then(function()
    // {
    //     let selectorwillbeclickedPromise=page.click('#add-to-cart-button');

    //     return selectorwillbeclickedPromise;
    // })
    // .then(function()
    // {
    //     let waitPromise=page.waitFor(2000);

    //     return waitPromise;
    // })
    // .then(function()
    // {
    //     let tabwillbeclosedPromise=page.close();
    //     page=pagesarray[1];
    //     return tabwillbeclosedPromise;
    //  })

    //  /////////////////////////////////////////////////////5
    //  .then(function () {
    //     let elementwillbeclickedPromise = elementarray[i].click();

    //     i++;

    //     return elementwillbeclickedPromise;
    // })
    // .then(function(){
    //     let waitPromise=page.waitFor(2000);

    //     return waitPromise;
    // })
    // .then(function(){
    //     let noofpagesPromise=Browser.pages();

    //     return noofpagesPromise;
    // })
    // .then(function(pagesarr)
    // {
    //     page=pagesarr[pagesarr.length-1];

    //     //firstpage=pagesarr[2];

    //     let waitForSelectorPromise=page.waitForSelector('#add-to-cart-button',{visible:true});

    //     return waitForSelectorPromise;
    // })
    // .then(function()
    // {
    //     let selectorwillbeclickedPromise=page.click('#add-to-cart-button');

    //     return selectorwillbeclickedPromise;
    // })
    // .then(function()
    // {
    //     let waitPromise=page.waitFor(2000);

    //     return waitPromise;
    // })
    // .then(function(){
    //     let cartwillbeclickedPromise=page.click('#nav-cart-text-container');

    //     return cartwillbeclickedPromise;
    // })

    /***signin code starts************************************************************* */
    // .then(function () {
    //     let waitforSelectorPromise = page.waitForSelector('#nav-link-accountList-nav-line-1', { visible: true });

    //     return waitforSelectorPromise;
    // })
    // .then(function () {
    //     let clickonSelectorPromise = page.click('#nav-link-accountList-nav-line-1', { delay: 100 });

    //     return clickonSelectorPromise;
    // })
    // .then(function () {
    //     let waitforSelectorPromise = page.waitForSelector('#ap_email', { visible: true });

    //     return waitforSelectorPromise;
    // })
    // .then(function () {
    //     let usernamewillbetypedPromise = page.type('#ap_email', 'abhi8059395364@gmail.com', { delay: 100 });

    //     return usernamewillbetypedPromise;
    // })
    // .then(function () {
    //     let clickonSelectorPromise = page.click('#continue-announce', { delay: 100 });

    //     return clickonSelectorPromise;
    // })
    // .then(function () {
    //     let waitforSelectorPromise = page.waitForSelector('#ap_password', { visible: true });

    //     return waitforSelectorPromise;
    // })
    // .then(function () {
    //     let usernamewillbetypedPromise = page.type('#ap_password', 'Aloomatar@123', { delay: 100 });

    //     return usernamewillbetypedPromise;
    // })
    // .then(function () {
    //     let clickonSelectorPromise = page.click('input[type="checkbox"]', { delay: 100 });

    //     return clickonSelectorPromise;
    // })
    // .then(function () {
    //     let clickonSelectorPromise = page.click('#signInSubmit', { delay: 100 });

    //     return clickonSelectorPromise;
    // })

    /*******signin code ends********************************************************8 */
