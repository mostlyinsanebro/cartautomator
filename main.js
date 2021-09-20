let puppeteer = require("puppeteer");

let arr = process.argv.slice(2);
let brr = [];
for (let i = 0; i < arr.length; i++) {
    brr[i] = arr[i];
}

let searchfor = brr[0];

let browserObj = puppeteer.launch({
    headless: false,
    defaultViewport: null,

    // slowMo: 10,
    args: ["--start-maximized"]
})


let Browser, page, pagesarray, elementarray, firstpage, i, secondpage;
i = 0;
browserObj.then(function (browser) {
    let newtabwillbeopenedPromise = browser.newPage();
    Browser = browser;
    return newtabwillbeopenedPromise;
})
    .then(function (newtab) {
        page = newtab;

        let googlewillbeopenedPromise = page.goto("https://www.google.com");

        return googlewillbeopenedPromise;
    })
    .then(function () {
        let liwillbetypedPromise = page.type('.pR49Ae.gsfi', 'amazon',{delay:100});

        return liwillbetypedPromise;
    })
    .then(function () {
        let enterwillbepressedPromise = page.keyboard.press("Enter");

        return enterwillbepressedPromise;
    })
    .then(function () {
        let waitforSelectorPromise = page.waitForSelector('.cfxYMc.JfZTW.c4Djg.MUxGbd.v0nnCb', { visible: true });

        return waitforSelectorPromise;
    })
    .then(function () {
        let clickonSelectorPromise = page.click('.cfxYMc.JfZTW.c4Djg.MUxGbd.v0nnCb', );

        return clickonSelectorPromise;
    })

    .then(function () {
        let waitforSelectorPromise = page.waitForSelector('#twotabsearchtextbox', { visible: true });

        return waitforSelectorPromise;
    })
    .then(function () {
        let usernamewillbetypedPromise = page.type('#twotabsearchtextbox', searchfor,{delay:100});

        return usernamewillbetypedPromise;
    })
    .then(function () {
        let enterwillbetypedPromise = page.keyboard.press("Enter", );

        return enterwillbetypedPromise;
    })
    .then(function () {
        let waitForselectorPromise = page.waitForSelector('.s-image', { visible: true });
        return waitForselectorPromise;
    })
    .then(function () {
        let arraywillberetuernedPromise = page.$$('.s-image');
        return arraywillberetuernedPromise;
    })

    .then(function (array) {
        let elementwillbeclickedPromise = array[i].click();

        i++;

        elementarray = array;

        return elementwillbeclickedPromise;
    })
    .then(function () {
        let waitPromise = page.waitFor(2000);

        return waitPromise;
    })
    .then(function () {
        let noofpagesPromise = Browser.pages();

        return noofpagesPromise;
    })
    .then(function (pagesarr) {
        page = pagesarr[2];

        pagesarray = pagesarr;


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

        let addtocartPromise = addtoCart(page, pagesarray, elementarray, i);
        i++;
        return addtocartPromise;

    })
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
    .then(function(){
        let cartwillbeopenedPromise=page.click('#nav-cart-text-container');

        return cartwillbeopenedPromise;
    })
    .then(function () {
        console.log("items added to cart");
    })



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
