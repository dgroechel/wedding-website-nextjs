
module.exports = {
  images: {
    domains: ["weddingphotos2410.s3.us-east-2.amazonaws.com"],
  },
};

const withImages = require('next-images')
module.exports = withImages()

