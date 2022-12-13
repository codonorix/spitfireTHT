# Full stack developer assessment

You will be required to build an application that will fetch contacts existing in a HubSpot portal and display them neatly on a web page.

The application should allow you to delete contacts, and also to add new contacts.

The application should consist of a separate client application (for user interaction) and a server (for making API requests to HubSpot). A basic boilerplate for these have been set up in this repository.

You will be given access to a demo HubSpot portal.

**NB** - All contacts in the portal are fictional. This is not real data.

## Instructions

- Use the HubSpot API to display the 20 most recent contacts in the portal in whatever format you see fit. Pagination is not necessary.
- Please display the contact’s full name, email and at least 2 other properties for each contact record.
- The application should allow creation of contacts via the HubSpot API. Users should be able to create a contact by filling in a form. Fields required for contact creation should include First Name, Last Name, Email, ID Number and Birthday. The form should have validation to ensure data quality.
- The application should allow the deletion of contacts via the HubSpot API.
- The application should follow good UI/UX principles
- The application should be mobile responsive.
- There is no need for auth between client and server.
- There is no need to host this application online. We will run it locally from the repository.

**NOTE:** This repository has been set up using ExpressJS and Create React App. **We recommend using this stack.** Should you prefer to use a different tech stack, you may do so, but please be prepared to justify this decision. Additionally, should you use a different stack, please provide **explicit** instructions for running your application locally so that we may run and test it.

**NOTE:** Please feel free to modify/add/ remove any files, file structure or boilerplate code in your application.

**NOTE:** BONUS POINTS WILL BE GIVEN FOR THE USE OF TYPESCRIPT

## Resources

- Find out more about HubSpot [here.](https://www.hubspot.com/)
- See [here](https://share.vidyard.com/watch/j25JPpN8TitttgZiXy7Ynu?) a demonstration of where to find contact data in HubSpot.
- See [here](https://developers.hubspot.com/docs/api/private-apps) the documentation for creating and using a HubSpot private app. This will give you the credentials that you need to access the HubSpot API.
- See [here](https://developers.hubspot.com/docs/api/overview) the HubSpot API reference documentation, listing the endpoints you will need for your application.
