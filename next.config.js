module.exports = {
  images: {
    domains: [
      'upload.wikimedia.org',
      'images.amcnetworks.com',
      'vignette.wikia.nocookie.net',
      "s-i.huffpost.com",
      'media1.popsugar-assets.com',
      'res.cloudinary.com',
      'i.pinimg.com',
      'static.wikia.nocookie.net',
      'm.media-amazon.com'
    ]
  },
  webpack(config)
  {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}