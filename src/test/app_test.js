
Feature('App');

Scenario('App renders', (I) => {
    I.amOnPage('/');
    I.see('Create a new Space:');
    I.see('Name');
    I.see('Memory');
    I.see('Disk');
});

Scenario('Create a new space', (I) => {
    I.amOnPage('/');
    I.fillField('name', 'IdrisSpace');
    I.fillField('memory', '1');
    I.fillField('disk', '82');
    I.click('#create');
})

Scenario('Confirm space is listed on page', (I) => {
    I.amOnPage('/');
    I.see('IdrisSpace')
})


