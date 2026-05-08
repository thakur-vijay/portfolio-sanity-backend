export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      description: 'Leave empty if currently working here.',
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      description: 'Example: Principal iOS Engineer',
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
      description: 'Example: Bverse Labs',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      description: 'Short summary about your role and responsibilities.',
    },
    {
      name: 'points',
      title: 'Key Highlights',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      description: 'Add achievement or impact points one by one.',
    },
  ],
}
