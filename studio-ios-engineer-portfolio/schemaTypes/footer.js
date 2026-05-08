export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',

  fields: [
    {
      name: 'copyrightMessage',
      title: 'Copyright Message',
      type: 'string',
      description: 'Example: © 2026 Vijay Thakur. All rights reserved.',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'rightSideMessage',
      title: 'Right Side Message',
      type: 'string',
      description: 'Example: Made on iPhone, MacBook, and a lot of espresso.',
      validation: (Rule) => Rule.required(),
    },
  ],
}
