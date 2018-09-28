/**
 * 
 */
describe('Protractor first Steps',function(){
	it('Opens angularjs application',function(){
		//browser.get() will hit angularjs.org application url
		
		browser.get("https://juliemr.github.io/protractor-demo/");
		browser.get("https://angularjs.org").then(function(){
			//browser.sleep(9000);
			console.log("I am The last step to execute");
		});



	});
	//Each It block should considered as 1 spec
	it('close browser',function(){
				
	})
})