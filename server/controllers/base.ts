const https = require('https');

const options = {
  hostname: 'https://www.api-football.com',
  path: '/demo/v2/leagues',
  headers: {
    'X-RapidAPI-Key': 'c86f5e649b566fd38bbc741f54d784db'
  }
};

export abstract class BaseCtrl {
  public errorForbidden = 403;
  public statusOk = 200;
  public badRequest = 400;
  abstract model: any;

  // Get all
  getAll = async (req, res) => {
    try {
      https
        .get(options, resp => {
          let data = '';
          console.log('resp', resp);
          // debugger;
          // A chunk of data has been recieved.
          resp.on('data', chunk => {
            data += chunk;
          });

          // The whole response has been received. Print out the result.
          resp.on('end', () => {
            console.log(JSON.parse(data).explanation);
          });
        })
        .on('error', err => {
          console.log('Error: ' + err.message);
        });

      const docs = [
        {
          id: '1',
          image: '../../../../assets/images/gettyimages-961697338.jpg',
          fullName: 'Nir Zigdon',
          shortTitle:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
          status: 'test me',
          numberOfFriends: null,
          numberOfPhotos: null,
          numberOfLikes: null
        }
      ];

      res.status(this.statusOk).json(docs);
    } catch (err) {
      return res.status(this.badRequest).json({ error: err.message });
    }
  };
}
