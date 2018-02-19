# Picture (/File) Upload Demo

![Picture (/File) Upload Demo]("/file_upload.png")

*Run `npm install` in project folder to setup server and in client folder to setup client*
*Run with `npm run dev`*
*Requires local mongodb server to be running*

Server-side (based on https://ciphertrick.com/2017/02/28/file-upload-with-nodejs-and-gridfs-mongodb/)
- MongoDB (gridfs for large > 16MB file storage)
- Node
- Express

Client-side
- React (created with CRA)

Both can be run together using
`npm run dev` or `yarn dev`

This setup is based on https://medium.freecodecamp.org/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0

Keys are changes in server's package.json:

```
"scripts": {
  "client": "cd client && npm start",
  "server": "nodemon server.js",
  "dev": "concurrently --kill-others-on-fail \"yarn server\" \"yarn client\""
},
"devDependencies": {
  "concurrently": "^3.5.0"
}
```


Only a demo, needs lots more work, e.g. validating that files are images, etc.
