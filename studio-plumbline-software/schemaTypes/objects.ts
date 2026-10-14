import {defineArrayMember, defineField, defineType} from 'sanity'

// Lucide icon names (https://lucide.dev/icons). The site renders whichever is picked.
const ICONS = [
  'Accessibility',
  'BookOpen',
  'Building2',
  'CirclePause',
  'ClipboardList',
  'Clock',
  'Code',
  'Compass',
  'Contrast',
  'Database',
  'FilePen',
  'FileSearch',
  'FileText',
  'FlaskConical',
  'FolderOpen',
  'Gauge',
  'GitBranch',
  'Globe',
  'Hammer',
  'Inbox',
  'Keyboard',
  'Layers',
  'LifeBuoy',
  'ListChecks',
  'Mail',
  'MessageSquare',
  'MessageSquareWarning',
  'Monitor',
  'Package',
  'PhoneCall',
  'Plug',
  'Reply',
  'ScanEye',
  'Search',
  'SearchCheck',
  'Send',
  'Server',
  'ShieldCheck',
  'Trash2',
  'User',
  'UserCheck',
  'Users',
  'Wrench',
]

export const iconField = (required = true) =>
  defineField({
    name: 'icon',
    type: 'string',
    options: {list: ICONS},
    validation: (r) => (required ? r.required() : r),
  })

const req = (name: string, type = 'string', extra = {}) =>
  defineField({name, type, validation: (r) => r.required(), ...extra})

export const richText = defineType({
  name: 'richText',
  title: 'Rich text',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [{title: 'Normal', value: 'normal'}],
      lists: [{title: 'Bullet', value: 'bullet'}],
      marks: {
        decorators: [{title: 'Strong', value: 'strong'}],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'Link',
            fields: [
              defineField({
                name: 'href',
                type: 'url',
                description: 'A full URL, a site path like /about, or mailto:',
                validation: (r) =>
                  r.required().uri({allowRelative: true, scheme: ['http', 'https', 'mailto']}),
              }),
            ],
          },
        ],
      },
    }),
  ],
})

export const seo = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    req('title', 'string', {description: 'Browser tab and search result title.'}),
    req('description', 'text', {rows: 2}),
  ],
})

export const cta = defineType({
  name: 'cta',
  title: 'Closing call to action',
  type: 'object',
  description: 'Leave empty to use the default from Site settings.',
  fields: [
    defineField({name: 'heading', type: 'string'}),
    defineField({
      name: 'copy',
      type: 'string',
      description: 'The reply-time sentence is added after this automatically.',
    }),
  ],
})

export const flow = defineType({
  name: 'flow',
  title: 'Flow diagram',
  type: 'object',
  fields: [
    defineField({
      name: 'steps',
      type: 'array',
      validation: (r) => r.min(2).max(5),
      of: [
        defineArrayMember({
          type: 'object',
          name: 'step',
          fields: [iconField(), req('title'), req('note', 'text', {rows: 2})],
        }),
      ],
    }),
    defineField({name: 'caption', type: 'string'}),
  ],
})

export const photo = defineType({
  name: 'photo',
  title: 'Photo band',
  type: 'image',
  description: 'Set the hotspot to keep the subject in frame when the band is cropped.',
  options: {hotspot: true},
  validation: (r) => r.required(),
  fields: [
    req('alt', 'string', {description: 'Describe the photo for people who cannot see it.'}),
    req('caption'),
    defineField({name: 'creditName', title: 'Photographer', type: 'string'}),
    defineField({name: 'creditUrl', title: 'Photo source URL', type: 'url'}),
  ],
})

export const handoverPack = defineType({
  name: 'handoverPack',
  title: 'Handover folder',
  type: 'object',
  fields: [
    req('folder'),
    req('tag'),
    defineField({
      name: 'files',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'packFile',
          fields: [req('name', 'string', {description: 'End with / for a folder.'}), req('note')],
        }),
      ],
    }),
    req('caption'),
  ],
})

export const docSection = defineType({
  name: 'docSection',
  title: 'Section',
  type: 'object',
  fields: [
    req('heading'),
    iconField(false),
    defineField({
      name: 'stats',
      type: 'array',
      description: 'Optional big numbers shown above the text.',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'stat',
          fields: [req('label'), req('value')],
          preview: {select: {title: 'value', subtitle: 'label'}},
        }),
      ],
    }),
    defineField({name: 'body', type: 'richText'}),
    defineField({
      name: 'handoverPack',
      type: 'handoverPack',
      description: 'Optional, shown below the text.',
    }),
  ],
  preview: {select: {title: 'heading'}},
})

export const objectTypes = [richText, seo, cta, flow, photo, handoverPack, docSection]
