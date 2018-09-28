describe("How to play with list of elements", function() {
	it("Open Angular js webSite", function() {
		browser.get("https://juliemr.github.io/protractor-demo/");

		// Addition
		element(by.model("first")).sendKeys("10");
		element(by.model("operator")).element(by.css("option:nth-child(1)"))
				.click();
		element(by.model("second")).sendKeys("9");
		element(by.id("gobutton")).click();

		// Division
		element(by.model("first")).sendKeys("10");
		element(by.model("operator")).element(by.css("option:nth-child(2)"))
				.click();
		element(by.model("second")).sendKeys("9");
		element(by.id("gobutton")).click();

		// Multiplication
		element(by.model("first")).sendKeys("10");
		element(by.model("operator")).element(by.css("option:nth-child(4)"))
				.click();
		element(by.model("second")).sendKeys("9");

		element(by.id("gobutton")).click();
		/*
		 * element(by.repeater("result in memory")).element(
		 * by.css("td:nth-child(3)")).getText().then(function(text) {
		 * console.log(text); expect("90").toBe(text);
		 *  })
		 */
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