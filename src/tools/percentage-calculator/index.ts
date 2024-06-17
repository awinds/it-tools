import { Percentage } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: '百分比计算器',
  path: '/percentage-calculator',
  description: '轻松计算从一个值到另一个值或从一个百分比到一个值的百分比。',
  keywords: ['percentage', 'calculator', 'calculate', 'value', 'number', '%'],
  component: () => import('./percentage-calculator.vue'),
  icon: Percentage,
  createdAt: new Date('2023-06-18'),
});
