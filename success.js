const figlet = require('figlet');

// change the first argument of the call to figlet to have it print on success
figlet.text(
  'PTRI 4 is awesome!!!',
  { horizontalLayout: 'full' },
  (err, data) => {
    if (err) {
      console.log('Something went wrong...');
      console.dir(err);
      return;
    }
    console.log(data);
  }
);
