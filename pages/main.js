const { I } = inject();

module.exports = {
    fields: {
        password: '#password',
        username: '#username'
    },
    buttons: {
        login: '.button:nth-child(1)',
        resetPassword: '.reset-password-link',
    },

    login(username, password) {
        I.fillField(this.fields.username, username);
        I.fillField(this.fields.password, password);
        I.click(this.buttons.login);
    },

    goToPasswordReset(){
        I.click(this.buttons.resetPassword);
    },
}
