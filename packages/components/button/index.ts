import { withInstall } from 'element-plus/utils'

import DeleteButton from './src/delete-button.vue'
import type { SFCWithInstall } from '@element-plus/utils'

export const ElCard: SFCWithInstall<typeof Card> = withInstall(Card)
export default ElCard

export * from './src/card'
export type { CardInstance } from './src/instance'
