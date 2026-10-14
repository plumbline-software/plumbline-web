import {defineArrayMember, defineField, defineType} from 'sanity'

export const service = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({name: 'name', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'slug',
      type: 'slug',
      description:
        'Used in /services#slug links and the contact form. Changing it breaks old links.',
      options: {source: 'name'},
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'order',
      type: 'number',
      description: 'Lower numbers show first.',
      validation: (r) => r.required().integer(),
    }),
    defineField({
      name: 'summary',
      type: 'string',
      description: 'One line, shown on the home page.',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      rows: 2,
      description: 'Lead sentence on the Services page.',
      validation: (r) => r.required(),
    }),
    defineField({name: 'detail', type: 'text', rows: 4, validation: (r) => r.required()}),
    defineField({
      name: 'bullets',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
    }),
  ],
  orderings: [{title: 'Display order', name: 'order', by: [{field: 'order', direction: 'asc'}]}],
  preview: {select: {title: 'name', subtitle: 'summary'}},
})
