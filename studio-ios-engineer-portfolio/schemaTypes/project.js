export default {
  name: 'project',
  title: 'Project',
  type: 'document',

  fields: [
    {
      name: 'appName',
      title: 'App Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'tagline',
      title: 'One Line About App',
      type: 'string',
      description: 'Short one-line summary of the app.',
      validation: (Rule) => Rule.max(120),
    },

    {
      name: 'appType',
      title: 'App Type',
      type: 'string',
      description: 'Example: Fintech, Social, Fitness, Productivity',
    },

    {
      name: 'appIcon',
      title: 'App Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
    },

    {
      name: 'description',
      title: 'App Description',
      type: 'text',
      description: 'Detailed description about the project/app.',
    },

    {
      name: 'techStack',
      title: 'Tech Stack',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      options: {
        layout: 'tags',
      },
      description:
        'Add technologies used like SwiftUI, UIKit, Firebase, Mapbox, etc.',
    },

    {
      name: 'screenshots',
      title: 'Screenshots',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      description: 'Upload app screenshots here.',
    },
  ],
}