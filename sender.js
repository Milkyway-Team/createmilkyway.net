const fs = require('fs');
const path = require('path');
const sendMail = require('./email');

const main = async () => {
  //const fileAttachments = [
  //  {
  //    filename: 'attachment1.txt',
  //    content: 'This is a plain text file sent as an attachment',
  //  },
  //  {
  //    path: path.join(__dirname, './attachment2.txt'),
  //  },
  //  {
  //    filename: 'websites.pdf',
  //    path: 'https://www.labnol.org/files/cool-websites.pdf',
  //  },
  //
  //  {
  //    filename: 'image.png',
  //    content: fs.createReadStream(path.join(__dirname, './attach.png')),
  //  },
  //];

  const options = {
    from: 'Milkyway Team <createmilkywaymodpack@gmail.com>',
    to: 'joelherbst07@gmail.com',
    cc: '',
    //replyTo: 'amit@labnol.org',
    subject: 'Password Reset 🔐',
    text: 'This email is sent from the command line',
    html: `<p>Hey <b>iHouqLF</b>, </p> <p> looks like you forgot your password once again. Click this <a href="https://digitalinspiration.com">Link</a> to reset your password.</p> <p>If you don't know anything about a password reset, ignore or delete this email.</p>`,
    //attachments: fileAttachments,
    textEncoding: 'base64',
    headers: [
      { key: 'X-Application-Developer', value: 'Joel Herbst' },
      { key: 'X-Application-Version', value: 'v1.0.0.0' },
    ],
  };

  const messageId = await sendMail(options);
  return messageId;
};

main()
  .then((messageId) => console.log('Message sent successfully:', messageId))
  .catch((err) => console.error(err));