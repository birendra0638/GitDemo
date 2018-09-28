describe("How to play with list of elements", function() {
	function Add(firstNum,secNum){
		element(by.model("first")).sendKeys(firstNum);
		element(by.model("operator")).element(by.css("option:nth-child(1)"))
				.click();
		element(by.model("second")).sendKeys(secNum);
		element(by.id("gobutton")).click();
		
	}
	function Div(firstNum,secNum){
		element(by.model("first")).sendKeys(firstNum);
		element(by.model("operator")).element(by.css("option:nth-child(2)"))
				.click();
		element(by.model("second")).sendKeys(secNum);
		element(by.id("gobutton")).click();
		
	}
	function Mul(firstNum,secNum){
		element(by.model("first")).sendKeys(firstNum);
		element(by.model("operator")).element(by.css("option:nth-child(4)"))
				.click();
		element(by.model("second")).sendKeys(secNum);
		element(by.id("gobutton")).click();
		
	}
	
	
	it("Open Angular js webSite", function() {
		browser.get("https://juliemr.github.io/protractor-demo/");
		Add(5,8);
		Div(9,3);
		Mul(7,8);

		element.all(by.repeater("result in memory")).count().then(
				function(count) {
					console.log(count);
				})
				//here we will find out  all available records (i.e row )
		element.all(by.repeater("result in memory")).each(
				function(row) {
					//here we will find column from a specific  row  by taking row (i.e. itemas reference and print on console.
					row.element(by.css("td:nth-child(3)")).getText().then(
							function(columnText) {
								console.log(columnText);
							})
				})

	})
})