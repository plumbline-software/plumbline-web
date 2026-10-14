import type {StructureResolver} from 'sanity/structure'
import {singletons} from './schemaTypes/pages'

// Each page is one fixed document; services and stages are lists.
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      ...singletons.map(({id, type, title}) =>
        S.listItem().title(title).id(id).child(S.document().schemaType(type).documentId(id)),
      ),
      S.divider(),
      S.documentTypeListItem('service').title('Services'),
      S.documentTypeListItem('stage').title('Process stages'),
    ])

const singletonTypes = new Set(singletons.map((s) => s.type))
export const singletonActions = new Set(['publish', 'discardChanges', 'restore'])
export const isSingletonType = (type: string) => singletonTypes.has(type)
