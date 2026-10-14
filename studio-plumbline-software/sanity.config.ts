import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {isSingletonType, singletonActions, structure} from './structure'

export default defineConfig({
  name: 'default',
  title: 'plumbline-software',

  projectId: '1wwmdgze',
  dataset: 'production',

  plugins: [structureTool({structure}), visionTool()],

  schema: {
    types: schemaTypes,
    // Pages can't be created or duplicated from "New document"; they exist once each.
    templates: (templates) => templates.filter(({schemaType}) => !isSingletonType(schemaType)),
  },

  document: {
    actions: (actions, {schemaType}) =>
      isSingletonType(schemaType)
        ? actions.filter(({action}) => action && singletonActions.has(action))
        : actions,
  },
})
