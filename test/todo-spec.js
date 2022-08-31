describe('test my site', function() {
    it('should add a todo', function() {
      browser.get('http://localhost:4200/');
  
      element(by.model('todoList.todoText')).sendKeys('write first protractor test');
      element(by.css('[value="add"]')).click();

    });
  });