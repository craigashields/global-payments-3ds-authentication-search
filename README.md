<div align="center">

  <h1>Global Payments 3DS Authentication Reporting</h1>
  
  <p>
    The Global Payments 3D Secure 2 solution provides complete flexibility for reporting transaction authentications. The search request returns a summary object allowing you to see a high-level outcome of the authentication. You can then follow the standard Obtain Authentication Data step to get more detail, including the data required for authorization.

  </p>

<!-- Badges -->
<p>
<a href="https://github.com/craigashields/global-payments-3ds-authentication-search/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/craigashields/global-payments-3ds-authentication-search" alt="contributors" />
</a>
<a href="">
    <img src="https://img.shields.io/github/last-commit/craigashields/global-payments-3ds-authentication-search" alt="last update" />
</a>
<a href="https://github.com/craigashields/global-payments-3ds-authentication-search/network/members">
    <img src="https://img.shields.io/github/forks/craigashields/global-payments-3ds-authentication-search" alt="forks" />
</a>
<a href="https://github.com/craigashields/global-payments-3ds-authentication-search/stargazers">
    <img src="https://img.shields.io/github/stars/craigashields/global-payments-3ds-authentication-search" alt="stars" />
</a>
<a href="https://github.com/craigashields/global-payments-3ds-authentication-search/issues/">
    <img src="https://img.shields.io/github/issues/craigashields/global-payments-3ds-authentication-search" alt="open issues" />
</a>
</p>  
<h4>
    <a href="https://github.com/craigashields/global-payments-3ds-authentication-search/issues/">Report Bug</a>
  </h4>
</div>

# Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)

## Description

I needed to use these Global Payments APIs for some work I was doing so thought I'd put this up as a quick example of calling the APIs and generating the secure hashes.

Further information can be found on the Global Payments docs site

- [Generate Hash](https://developer.globalpay.com/api/3d-secure-two#generate-hash)
- [Authentication Reporting](https://developer.globalpay.com/ecommerce/3d-secure-version2/authentication-reporting)

The repo shows examples of calling the following:

- Authentication Search
- Obtain Authentication Date

## Installation

To install and set up the project, follow these steps:

1. Clone the repository:

   ```
   git clone [repository url]
   ```

   Remember to delete the existing .git folder

   OR

   Use Template

2. Initialise local git repo (optional)

   ```
   git init
   ```

3. Navigate to the project directory: cd [project directory]
4. Install dependencies:

   ```
   npm install
   ```

## Usage

Once the project is installed and set up, you can use it as follows:

1. Create `.env` in project directory.
2. Add the following to the environment file (the values will be available from your Global Payments account manager or through the portal)

   ```
   MERCHANT_ID=
   ACCOUNT_ID=
   SHARED_SECRET=
   SEARCH_API_URL=https://api.sandbox.globalpay-ecommerce.com/3ds2/authentications/search
   OBTAIN_API_URL=https://api.sandbox.globalpay-ecommerce.com/3ds/authentications/
   ```

3. Open the `index.js` file. The `main` function calls both Global Payments APIs just as an example but you can remove the call you don't want. For the authencation search call, I have included the `server_trans_id` as an optional search parameter. There are more, check the Global Payments docs for more info.

4. To run the functions, open `Terminal` and run `node index.js`. The results from the API will be written to the console.
