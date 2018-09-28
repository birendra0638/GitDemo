describe("Practice for Automation", function() {
	
	function selectItem(prodName){
		element.all(by.tagName("app-card")).each(function(item) {
			item.element(by.css("h4 a")).getText().then(function(text) {
				if(text==prodName){
					item.element(by.css("button[class*='btn-info']")).click();
				}
			})
			
		})
	}
	
	it("Open  Angularjs webSite", function() {

		browser.get("https://qaclickacademy.github.io/protocommerce/");
		
		element(by.css("input[class*='ng-invalid']")).sendKeys("Birendra");
		element(by.name("email")).sendKeys("birendra@gmail.com");
		element(by.id("exampleInputPassword1")).sendKeys("birendra");
		
		element(by.id("exampleCheck1")).click();
		
		element(by.cssContainingText("[id='exampleFormControlSelect1'] option","Female")).click();
		
		//element(by.cssContainingText("[id"))
		element.all(by.name("inlineRadioOptions")).first().click();
		
		element(by.name("bday")).sendKeys("07-06-1988");
		
		element(by.buttonText("Submit")).click().then(function(){
			
			element(by.css("div[class*='alert-success']")).getText().then(function(text){
				//expect("Success! The Form has been submitted successfully!.").toContain(text);
				
				console.log(text);
			})
			
		})
		element(by.name("name")).clear();
		element(by.name("name")).sendKeys("b").then(function() {
			element(by.css("[class='alert alert-danger']")).getText().then(function(text) {
				console.log(text);
				
			})
			
		})
		
		element(by.linkText("Shop")).click();
		//capture all card into a list and iterate through each card and capture the link of each card and compare 
		//if link matched then click on add button.
		selectItem("Samsung Note 8");
		selectItem("iphone X");
		selectItem("Nokia Edge");


		element(by.partialLinkText("Checkout")).getText().then(function(btnText) {
			var result=btnText.split("(");
			
			var num= Number(result[1].trim().charAt(0));
			var x=num-1;
			console.log(x);
			
			//expect(result[1].trim().charAt(0)).toBe(3);
			
			
			
			
		})
		
		//click on the Checkout button->grab the indivisual order total amount  and store in different variable
		//add all three number and comapre the summation value with total amount order value.
		
		element(by.partialLinkText("Checkout")).click();
	/*	element.all(by.className("col-sm-1 col-md-1 text-center")).each(function(item) {
			item.element(by.tagName("strong")).getText().then(function(text) {
				var result=text.split(".");
				var total= result[1];
				//console.log(total.length);
				for(var i=0;i<total.length;i++){
					
					console.log(total[i]);
				}
				

			})
			
		})*/
		
		element.all(by.tagName("tr")).each(function(item){
			//item.element(by.className("col-sm-1 col-md-1 text-center")).element(by.tagName("strong")).getText().then(function(text){
				item.element(by.css("td[class*='text-center'] strong")).getText().then(function(text){
				var value=text.split(".");
				var amount=number(value[1]);
				console.log(amount);
				
			})
		})
		
		
		
	})
})