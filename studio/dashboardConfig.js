export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60057d8e685d26851ed72a8a',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-mq1ppj4b',
                  apiId: '9e9851f3-24ff-42c1-9bee-bcb0d218eb45'
                },
                {
                  buildHookId: '60057d8ee91328d42682c95f',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-er493ms2',
                  apiId: '1402f9f5-8b35-4f93-b4b1-64c07ae115f7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/markhext/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-er493ms2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
