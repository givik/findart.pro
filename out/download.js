const fs = require('fs');
const axios = require('axios');

const downloadFolder = './downloads';

// Create the downloads folder if it doesn't exist
if (!fs.existsSync(downloadFolder)) {
  fs.mkdirSync(downloadFolder);
}

const downloadImages = async (images) => {
  for (const imageObj of images) {
    const imageUrl = imageObj.image;
    const imageName = imageUrl.substring(imageUrl.lastIndexOf('/') + 1);
    const imagePath = `${downloadFolder}/${imageName}`;

    try {
      const response = await axios.get(imageUrl, { responseType: 'stream' });
      response.data.pipe(fs.createWriteStream(imagePath));

      // Wait for the image to be fully downloaded before moving to the next one
      await new Promise((resolve, reject) => {
        response.data.on('end', resolve);
        response.data.on('error', reject);
      });

      console.log(`Downloaded: ${imageName}`);
    } catch (error) {
      console.error(`Failed to download ${imageName}: ${error.message}`);
    }
  }
};

// Read JSON data from file
const jsonString = fs.readFileSync('data.json', 'utf-8');
const jsonArray = JSON.parse(jsonString);

// Start downloading images
downloadImages(jsonArray);
