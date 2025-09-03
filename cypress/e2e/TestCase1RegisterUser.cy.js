const LoginPage = new LoginPage();
const CreateAccountPage = new CreateAccountPage();

describe('Test Case 1: Register User', () => {
  let userDetails;

  beforeEach(() => {
    // Gerar dados dinâmicos com Faker
    userDetails = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      day: faker.number.int({ min: 1, max: 28 }).toString(),
      month: faker.date.month(),
      year: faker.number.int({ min: 1950, max: 2005 }).toString(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      company: faker.company.name(),
      address1: faker.location.streetAddress(),
      address2: faker.location.secondaryAddress(),
      country: 'United States', // Um país estático para simplificar
      state: faker.location.state(),
      city: faker.location.city(),
      zipcode: faker.location.zipCode('#####'),
      mobileNumber: faker.phone.number(),
    };
  });

  it('Register a new user and delete the account', () => {
    // 2. Navegar para a URL
    cy.visit('http://automationexercise.com');

    // 3. Verificar que a página inicial é visível
    cy.get('a[href="/"]').should('be.visible').and('contain.text', 'Home');

    // 4. Clicar em 'Signup / Login'
    signupLoginPage.acessarPaginaLogin();

    // 5. Verificar que 'New User Signup!' é visível
    cy.get(signupLoginPage.newUserSignupTitle).should('be.visible').and('contain.text', 'New User Signup!');

    // 6. Inserir nome e endereço de e-mail
    // 7. Clicar no botão 'Signup'
    signupLoginPage.preencherFormularioSignup(userDetails.name, userDetails.email);

    // 8. Verificar que 'ENTER ACCOUNT INFORMATION' é visível
    cy.get(signupLoginPage.accountInformationTitle).should('be.visible').and('contain.text', 'ENTER ACCOUNT INFORMATION');

    // 9. Preencher detalhes da conta
    // 10. Marcar 'Sign up for our newsletter!'
    // 11. Marcar 'Receive special offers from our partners!'
    createAccountPage.preencherDetalhesDaConta('Male', userDetails.password, userDetails.day, userDetails.month, userDetails.year);
    createAccountPage.marcarCheckboxes();
    
    // 12. Preencher detalhes do endereço
    createAccountPage.preencherDetalhesDoEndereco(
      userDetails.firstName,
      userDetails.lastName,
      userDetails.company,
      userDetails.address1,
      userDetails.address2,
      userDetails.country,
      userDetails.state,
      userDetails.city,
      userDetails.zipcode,
      userDetails.mobileNumber
    );

    // 13. Clicar em 'Create Account button'
    createAccountPage.clicarCriarConta();

    // 14. Verificar que 'ACCOUNT CREATED!' é visível
    cy.get(createAccountPage.accountCreatedTitle).should('be.visible').and('contain.text', 'ACCOUNT CREATED!');
    
    // 15. Clicar no botão 'Continue'
    createAccountPage.clicarContinuar();

    // 16. Verificar que 'Logged in as username' é visível
    cy.get('a').should('contain.text', `Logged in as ${userDetails.name}`);

    // 17. Clicar em 'Delete Account'
    createAccountPage.clicarDeletarConta();

    // 18. Verificar que 'ACCOUNT DELETED!' é visível e clicar 'Continue'
    cy.get(createAccountPage.accountDeletedTitle).should('be.visible').and('contain.text', 'ACCOUNT DELETED!');
    cy.get(createAccountPage.continueButton).click();
  });
});
