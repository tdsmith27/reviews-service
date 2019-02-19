module.exports = {
  apps: [
    {
      name: "reviews-service",
      script: "./server/index.js"
    }
  ],
  deploy: {
    production: {
      user: "ubuntu",
      host: "ec2-13-58-187-52.us-east-2.compute.amazonaws.com",
      key: "~/.ssh/reviews-service.pem",
      ref: "origin/master",
      repo: "https://github.com/the-home-repot/reviews-service.git",
      path: "/home/ubuntu/reviews-service",
      "post-deploy":
        "npm install && npm run react-deploy && pm2 startOrRestart ecosystem.config.js"
    }
  }
};
