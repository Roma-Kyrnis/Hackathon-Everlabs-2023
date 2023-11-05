Hello there :)

1. Insure that you have correct Node and Npm version installed by checking for compatibility in the package.json field "engines"
2. Have you already created your Google Console account?... Are you sure?... Maybe you want to create OAuth 2.0 client. And copy all credentials from downloaded file into the file "credentials.json". Put file in the root path of the backendhackathon-everlabs-2023-backend project. Add "redirect_uris" to "credentials.json" file in "web" object as a array of strings. Don't forgot to add "Authorized JavaScript origins" and "Authorized redirect URIs" in the client.
3. Install npm dependencies
4. Run "authGmailToken" script to make a "token.json" file. It'll get you access to send emails from your work or personal Gmail account. If everything alright you'll get list of Labels. Refresh_token (can be expired after 6 month)[https://www.npmjs.com/package/googleapis].
5. Run "start" script
6. Run "start-ws" script to use chats

Notes:
- The file token.json stores the user's access and refresh tokens, and is
  created automatically when the authorization flow completes for the first
  time.
