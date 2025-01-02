module.exports = {
    apps: [
      // Next.js application configuration
      {
        name: 'levizr-nextjs-app',
        script: 'node_modules/.bin/next',
        args: 'start',
        cwd: '/home/ubuntu/levizr_image_generator',
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: '1G',
        env: {
          NODE_ENV: 'production',
          PORT: 3000,
        },
      },
      // Python script configuration
      {
        name: 'levizr-python-server',
        script: './server/main.py', // Main Python script
        cwd: '/home/ubuntu/levizr_image_generator',
        interpreter: '/home/ubuntu/levizr_image_generator/l-python/bin/python', // Correct interpreter path
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: '512M',
        env: {
          NODE_ENV: 'production',
        },
      },
    ],
  };
  