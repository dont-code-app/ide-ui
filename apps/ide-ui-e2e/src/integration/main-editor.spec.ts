import {
  getAppMainEntityName,
  getAppNameInput,
  getEntityFieldName,
  getEntityFieldType,
  getEntityFieldTypeString,
  getLoadSchemaButton
} from '../support/main-editor.po';


describe('main-editor', () => {
  beforeEach(() => cy.visit('/'));

  it('should display correct text', () => {
    getLoadSchemaButton().click();
    // Function helper example, see `../support/app.po.ts` file

    getAppNameInput().type('To Do App');
    getAppMainEntityName().type('ToDo');
    getEntityFieldName().type('name');
    getEntityFieldType().click();
    getEntityFieldTypeString().contains('string');
    getEntityFieldTypeString().click();
  });
});
