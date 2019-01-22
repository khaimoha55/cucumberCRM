package step_def;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginStepDefinition {
 
	WebDriver driver;
	
	@Given("^user is already on Login Page$")
	public void user_is_already_on_Login_Page() {
		
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\sameena fatima\\eclipse-workspace\\cumtest\\drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://www.freecrm.com");
		 
	}
	
	@When("^title of login page is Free CRM$")
	public void title_of_login_page_is_Free_CRM() {
		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("#1 Free CRM software in the cloud for sales and service", title);
	}
	
	

	
	
	@Then("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String username, String password) {
		driver.findElement(By.name("username")).sendKeys(username);
		driver.findElement(By.name("password")).sendKeys(password);
		
	}
	
	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button() {
		WebElement loginBtn = driver.findElement(By.xpath("//input[@type='submit']"));
		JavascriptExecutor js = (JavascriptExecutor)driver;
    	js.executeScript("arguments[0].click();", loginBtn);
		
	}

	@Then("^user is on home page$")
	public void user_is_on_home_page() {
		String title = driver.getTitle();
		System.out.println("Home Page title::" +title);
		Assert.assertEquals("CRMPRO", title);
		}
	
	@Then ("^user click on contacts link$")
		public void Then_user_click_on_contacts_link() {
		driver.switchTo().frame("mainpanel");
		driver.findElement(By.xpath("//a[contains(text(),'Contacts')]")).click();
		
		}
	
	@Then ("^contactsLabel is displayed$")
	public void Then_contactsLabel_is_displayed() {
		boolean flag = driver.findElement(By.xpath("//td[contains(text(),'Contacts')]")).isDisplayed();
		System.out.println(flag);
		Assert.assertTrue("if contactsLabel is not displayed  ", flag);
	}
	

	@Then("^user move to new contact page$")
	public void user_move_to_new_contact_page() {
		//driver.switchTo().frame("mainpanel");
		Actions action = new Actions(driver);
		action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Contacts')]"))).build().perform();
		driver.findElement(By.xpath("//a[@title='New Contact']")).click();
	}
	
		
	@Then ("^username is displayed$")
	public void Then_username_is_displayed() {
		boolean isDisplayed =driver.findElement(By.xpath("//td[contains(text(),'User: khaiyum')]")).isDisplayed();
		System.out.println(isDisplayed);
		Assert.assertTrue(isDisplayed);
	}
	
	@Then("^user enters contact details \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_contact_details_and(String firstname, String lastname, String company) {
		driver.findElement(By.id("first_name")).sendKeys(firstname);
		driver.findElement(By.id("surname")).sendKeys(lastname);
		driver.findElement(By.name("client_lookup")).sendKeys(company);
		driver.findElement(By.xpath("//input[@type='submit' and @value='Save']")).click();
	}
	
	
	 @Then("^user is on new contacts page$")
	 public void Then_user_is_on_new_contacts_page(){
		 
		 boolean flag1  =  driver.findElement(By.xpath("//td[contains(text(),'contacts')]")).isDisplayed();
		 System.out.println(flag1);
		 Assert.assertTrue(flag1);
	 }
		 
		 

	 
	
	@Then("^Close the browser$")
	public void close_the_browser() {
	driver.quit();
	}


}
