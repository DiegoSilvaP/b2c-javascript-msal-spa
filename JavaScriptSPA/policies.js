// Enter here the user flows and custom policies for your B2C application
// To learn more about user flows, visit https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
// To learn more about custom policies, visit https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview

const b2cPolicies = {
    names: {
        signUpSignIn: "b2c_1a_signup_signin",
        forgotPassword: "b2c_1a_PasswordReset",
        editProfile: "b2c_1a_ProfileEdit"
    },
    authorities: {
        signUpSignIn: {
            authority: "https://login.playpocb2c.tk/playpocb2c.tk/B2C_1A_signup_signin",
        },
        forgotPassword: {
            authority: "https://login.playpocb2c.tk/playpocb2c.tk/B2C_1A_PasswordReset",
        },
        editProfile: {
            authority: "https://login.playpocb2c.tk/playpocb2c.tk/B2C_1A_ProfileEdit"
        }
    },
}