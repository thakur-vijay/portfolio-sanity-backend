export default {
  name: 'user',
  title: 'User',
  type: 'document',

  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',

      fields: [
        {
          name: 'github',
          title: 'GitHub URL',
          type: 'url',
          description: 'Example: https://github.com/yourusername',
          validation: (Rule) =>
            Rule.required().uri({
              scheme: ['http', 'https'],
            }),
        },

        {
          name: 'linkedin',
          title: 'LinkedIn URL',
          type: 'url',
          description: 'Example: https://linkedin.com/in/yourusername',
          validation: (Rule) =>
            Rule.required().uri({
              scheme: ['http', 'https'],
            }),
        },

        {
          name: 'twitter',
          title: 'Twitter / X URL',
          type: 'url',
          description: 'Optional',
          validation: (Rule) =>
            Rule.uri({
              scheme: ['http', 'https'],
            }),
        },
        {
          name: 'mail',
          title: 'E-mail',
          type: 'string',
          description: 'Example: hello@example.com',
          validation: (Rule) =>
            Rule.required(),
        },
      ],
    },
  ],
}
