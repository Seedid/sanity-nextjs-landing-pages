export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '618c162402d27f17910f28a0',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-g5fnbnu5',
                  apiId: '50e95cad-1181-415e-893d-388c47836c5e'
                },
                {
                  buildHookId: '618c1625c5a9571b4d1d41f8',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-bhndagjk',
                  apiId: 'c46d5acb-7562-4973-bbbe-a4a6a35a7414'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Seedid/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-bhndagjk.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
