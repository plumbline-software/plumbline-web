import {defineArrayMember, defineField, defineType, type FieldDefinition} from 'sanity'
import {iconField} from './objects'

const str = (name: string, title?: string) =>
  defineField({name, title, type: 'string', validation: (r) => r.required()})
const txt = (name: string, title?: string) =>
  defineField({name, title, type: 'text', rows: 3, validation: (r) => r.required()})
const rich = (name: string, title?: string) => defineField({name, title, type: 'richText'})
const group = (name: string, title: string, fields: FieldDefinition[]) =>
  defineField({name, title, type: 'object', options: {collapsible: true}, fields})
const list = (name: string, fields: FieldDefinition[], title?: string) =>
  defineField({
    name,
    title,
    type: 'array',
    of: [defineArrayMember({type: 'object', name: 'item', fields})],
  })
const seo = defineField({name: 'seo', title: 'SEO', type: 'seo'})
const cta = defineField({name: 'cta', type: 'cta'})
const flow = defineField({name: 'flow', type: 'flow'})
const page = (name: string, title: string, fields: FieldDefinition[]) =>
  defineType({name, title, type: 'document', fields, preview: {prepare: () => ({title})}})

export const siteSettings = page('siteSettings', 'Site settings', [
  str('name'),
  str('shortName', 'Short name'),
  str('tagline'),
  defineField({name: 'email', type: 'string', validation: (r) => r.required().email()}),
  str('location'),
  str('replyTime', 'Reply time (e.g. "two business days")'),
  group('founder', 'Founder', [
    str('background', 'Background (completes "you work directly with the founder, …")'),
    txt('why', 'Why Plumbline exists'),
    defineField({name: 'linkedin', type: 'url', description: 'Leave empty to hide.'}),
    defineField({name: 'github', type: 'url', description: 'Leave empty to hide.'}),
  ]),
  defineField({
    name: 'timelines',
    title: 'Contact form timeline options',
    type: 'array',
    of: [defineArrayMember({type: 'string'})],
  }),
  defineField({...seo, title: 'Default SEO (home page)'}),
  defineField({
    name: 'ogImage',
    title: 'Social share image',
    type: 'image',
    description: '1200 × 630. Shown when a link to the site is shared.',
    validation: (r) => r.required(),
    fields: [str('alt')],
  }),
  defineField({...cta, title: 'Default closing call to action'}),
  group('notFound', 'Page not found (404)', [str('heading'), txt('body')]),
])

export const homePage = page('homePage', 'Home', [
  seo,
  group('hero', 'Hero', [
    str('heading'),
    str('kicker'),
    txt('lead'),
    rich('founderLine', 'Founder line'),
  ]),
  group('process', 'How an engagement runs', [str('heading'), str('copy')]),
  group('servicesIntro', 'What we build', [str('heading'), str('copy'), str('showcaseCaption')]),
  group('handover', 'What you get at the end', [
    str('heading'),
    txt('copy'),
    defineField({name: 'pack', type: 'handoverPack'}),
    list('points', [str('title'), rich('body')]),
  ]),
  defineField({name: 'photo', type: 'photo'}),
  group('founderIntro', 'Founder intro', [
    str('heading'),
    txt('lead'),
    txt('body'),
    list('roles', [iconField(), str('label')]),
  ]),
  group('enterprise', 'Enterprise', [
    str('heading'),
    txt('copy'),
    list('items', [
      iconField(),
      str('title'),
      txt('copy'),
      defineField({name: 'linkLabel', type: 'string'}),
      defineField({name: 'href', type: 'string', description: 'Site path, e.g. /accessibility'}),
    ]),
  ]),
  cta,
])

export const aboutPage = page('aboutPage', 'About', [
  seo,
  str('heading'),
  rich('intro'),
  flow,
  defineField({name: 'photo', type: 'photo'}),
  group('founder', 'Founder', [
    str('heading'),
    str('role'),
    str('credential'),
    rich('evidence'),
    str('disclaimer'),
  ]),
  group('principles', 'Principles', [
    str('heading'),
    str('copy'),
    list('items', [iconField(), str('title'), str('copy'), txt('detail')]),
  ]),
  cta,
])

export const approachPage = page('approachPage', 'Approach', [
  seo,
  str('heading'),
  txt('copy'),
  flow,
  cta,
])

export const servicesPage = page('servicesPage', 'Services', [
  seo,
  str('heading'),
  txt('copy'),
  flow,
  group('capabilities', 'What we work with', [
    str('heading'),
    txt('copy'),
    list('groups', [
      iconField(),
      str('title'),
      defineField({name: 'items', type: 'array', of: [defineArrayMember({type: 'string'})]}),
    ]),
  ]),
  cta,
])

export const contactPage = page('contactPage', 'Contact', [
  seo,
  str('heading'),
  txt('copy'),
  flow,
  list('faqs', [str('question'), txt('answer')], 'Common questions'),
])

// Privacy, Accessibility and "How this site was built" share this shape.
export const docPage = defineType({
  name: 'docPage',
  title: 'Reading page',
  type: 'document',
  fields: [
    seo,
    str('heading'),
    txt('intro'),
    flow,
    defineField({name: 'sections', type: 'array', of: [defineArrayMember({type: 'docSection'})]}),
    defineField({...cta, description: 'Optional. Shown only when a heading is set.'}),
  ],
  preview: {select: {title: 'heading'}},
})

export const singletons = [
  {id: 'siteSettings', type: 'siteSettings', title: 'Site settings'},
  {id: 'homePage', type: 'homePage', title: 'Home'},
  {id: 'aboutPage', type: 'aboutPage', title: 'About'},
  {id: 'approachPage', type: 'approachPage', title: 'Approach'},
  {id: 'servicesPage', type: 'servicesPage', title: 'Services'},
  {id: 'contactPage', type: 'contactPage', title: 'Contact'},
  {id: 'privacyPage', type: 'docPage', title: 'Privacy'},
  {id: 'accessibilityPage', type: 'docPage', title: 'Accessibility'},
  {id: 'howBuiltPage', type: 'docPage', title: 'How this site was built'},
]

export const pageTypes = [
  siteSettings,
  homePage,
  aboutPage,
  approachPage,
  servicesPage,
  contactPage,
  docPage,
]
