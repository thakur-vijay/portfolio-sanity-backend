export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'aboutSection',
      title: 'About Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
        },
        {
          name: 'about',
          title: 'About',
          type: 'array',
          of: [
            {
              type: 'block',
              styles: [
                {title: 'Normal', value: 'normal'},
                {title: 'Heading', value: 'h2'},
                {title: 'Quote', value: 'blockquote'},
              ],
              lists: [
                {title: 'Bullet', value: 'bullet'},
                {title: 'Number', value: 'number'},
              ],
              marks: {
                decorators: [
                  {title: 'Strong', value: 'strong'},
                  {title: 'Emphasis', value: 'em'},
                ],
                annotations: [
                  {
                    name: 'link',
                    title: 'Link',
                    type: 'object',
                    fields: [
                      {
                        name: 'href',
                        title: 'URL',
                        type: 'url',
                      },
                    ],
                  },
                ],
              },
            },
          ],
        },
      ],
    },
    {
      name: 'principleSection',
      title: 'Principle Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
        },
        {
          name: 'principles',
          title: 'Principles',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                },
                {
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                },
              ]
            },
          ],
        },
      ],
    },
    {
      name: 'beyondCodeSection',
      title: 'Beyond Code Section',
      type: 'object',
      fields: [
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
        },
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
        },
      ],
    },
    {
      name: 'collaborationMessage',
      title: 'Collaboration Message',
      type: 'string',
    },
  ],
}
