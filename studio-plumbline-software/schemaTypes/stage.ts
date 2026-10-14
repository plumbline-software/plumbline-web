import {defineField, defineType} from 'sanity'
import {iconField} from './objects'

export const stage = defineType({
  name: 'stage',
  title: 'Process stage',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'order',
      type: 'number',
      description: 'Lower numbers show first.',
      validation: (r) => r.required().integer(),
    }),
    iconField(),
    defineField({name: 'copy', type: 'text', rows: 3, validation: (r) => r.required()}),
    defineField({
      name: 'you',
      title: 'What you do',
      type: 'text',
      rows: 2,
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'us',
      title: 'What Plumbline does',
      type: 'text',
      rows: 2,
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'outcome',
      title: 'You get',
      type: 'text',
      rows: 2,
      validation: (r) => r.required(),
    }),
  ],
  orderings: [{title: 'Display order', name: 'order', by: [{field: 'order', direction: 'asc'}]}],
  preview: {select: {title: 'title', subtitle: 'outcome'}},
})
