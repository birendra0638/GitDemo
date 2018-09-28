describe("How to play with dropdown", function() {

	function Calculation(firstNum, secNum, operator) {
		element(by.model("first")).sendKeys(firstNum);
		element(by.model("second")).sendKeys(secNum);

		element.all(by.tagName("option")).each(function(item) {
			item.getAttribute("value").then(function(value) {
				//console.log(value);
				if (value == operator) {
					item.click();
				}

			})

		})

		element(by.id("gobutton")).click();

	}

	it("Open Angular js webSite", function() {
		browser.get("https://juliemr.github.io/protractor-demo/");
		Calculation(10, 11, "MULTIPLICATION");
		Calculation(5, 7, "DIVISION");
		Calculation(5, 7, "ADDITION");
		element.all(by.repeater("result in memory")).each(
				function(row) {
					//here we will find column from a specific  row  by taking row (i.e. itemas reference and print on console.
					row.element(by.css("td:nth-child(3)")).getText().then(
							function(columnText) {
								console.log(columnText);
								console.log(columnText);
								console.log(columnText);
								console.log(columnText);
								console.log(columnText);
								console.log(columnText);
								console.log(columnText);
							})
				})

	})
})