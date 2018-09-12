module.exports = {
  siteMetadata: {
	title: 'Krew Real LLC',
	description: 'Complete courses about the best tools and design systems. Prototype and build apps with React and Swift. 60 hours of video content and resource materials. No coding experience required.',
	keywords: 'react course, react for designers, ios development, sketch app, swift app course, arkit 2, after effects, create sketch plugin'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '9ffaquad83wg',
        accessToken: '219e9e6479a63cb9c6a68a663ab0db3ba9068eea7abb3b5df359e161efd747dd'
      }
    }
  ],
}