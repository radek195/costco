module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm run start',
      headful: true,
      url: [
        'http://localhost:3000',
        // 'http://localhost:3000/costco/coffees',
        // 'http://localhost:3000/costco/teas',
        // 'http://localhost:3000/costco',
      ],
    },
        assert: {
            assertions: {
          'categories:performance': ['error', {minScore: 90}]
      }  
    },  
    upload: {
      target: 'filesystem',
      outputDir: './lighthouse-reports',
    },
  },
}
