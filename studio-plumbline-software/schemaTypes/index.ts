import {objectTypes} from './objects'
import {pageTypes} from './pages'
import {service} from './service'
import {stage} from './stage'

export const schemaTypes = [...objectTypes, ...pageTypes, service, stage]
