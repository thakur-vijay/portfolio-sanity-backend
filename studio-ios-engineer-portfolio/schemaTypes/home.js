export default {
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    {
      name: 'homeSection',
      title: 'Home Section',
      type: 'object',
      fields: [
        {
          name: 'professionTitle',
          title: 'Profession Title',
          type: 'string',
        },
        {
          name: 'professionLocation',
          title: 'Profession Location',
          type: 'string',
        },
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'text',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: 'philosophySection',
      title: 'Philosophy Section',
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
          type: 'text',
        },
        {
          name: 'roleTags',
          title: 'Role Tags',
          type: 'array',
          of: [{type: 'string'}],
        },
      ],
    },
    {
      name: 'projectsSection',
      title: 'Projects Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'subtitle',
          title: 'SubTitle',
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
      name: 'skillsSection',
      title: 'Skills Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'subTitle',
          title: 'Sub Title',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
        },
        {
          name: 'skills',
          title: 'Skills',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'name',
                  title: 'Skill Name',
                  type: 'string',
                },
                {
                  name: 'svgCode',
                  title: 'SVG Code',
                  type: 'text',
                  description: 'Paste raw SVG code here.',
                },
              ],
              preview: {
                select: {
                  title: 'name',
                },
              },
            },
          ],
        },
      ],
    },
    {
      name: 'impactSection',
      title: 'Impact Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'subTitle',
          title: 'Sub Title',
          type: 'string',
        },
        {
          name: 'stats',
          title: 'Stats',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'value',
                  title: 'Value',
                  type: 'string',
                },
                {
                  name: 'label',
                  title: 'Label',
                  type: 'string',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'experienceSection',
      title: 'Experience Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'subTitle',
          title: 'Sub Title',
          type: 'string',
        },
      ],
    },
    {
      name: 'ctaSection',
      title: 'CTA Section',
      type: 'object',
      fields: [
        {
          name: 'eyebrow',
          title: 'Eyebrow',
          type: 'string',
          description: 'Small top label text',
        },
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          description: 'Main large heading',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          description: 'Supporting small text',
        },
      ],
    },
  ],
}
