//how to deal with key board events?
////dealing with window

describe("How to play with dropdown", function() {
	
	
	it("Open Angular js Posse webSite", function() {
		
		
		browser.get("http://posse.com/");
		element(by.model("userInputQuery")).sendKeys("river");
		browser.actions().mouseMove(element(by.model("locationQuery")).sendKeys("london")).perform();
		/*how to deal with key board events?
		its possible through sendKeys() function only but wee need to use ARROWDOWN,ENTER etc keywords from Protractor as 
		parameter to the method sendKeys().*/
		
		browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
		browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function(){
			browser.sleep(500);
			
			expect(element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).count()).toEqual(7);
			
			element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).get(0).click();
			element(by.css("a[ng-href*='London/River Island']")).click().then(function(){
				browser.sleep(3000)
				
				browser.getTitle().then(function(title){
						console.log("Title before switching window="+title);
					})
				//dealing with window
				browser.getAllWindowHandles().then(function(handle){
					
					browser.switchTo().window(handle[1]);
					browser.getTitle().then(function(title){
						console.log("Title after switching window="+title);
					})
					browser.switchTo().window(handle[0]);
					browser.getTitle().then(function(title){
						console.log("Title after switching window 2nd time="+title);
					})
				})
				
				
			})
			
		})
		
		
		
		
	})
})