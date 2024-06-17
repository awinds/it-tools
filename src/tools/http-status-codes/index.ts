import { HttpRound } from '@vicons/material';
import { defineTool } from '../tool';

import { codesByCategories } from './http-status-codes.constants';

export const tool = defineTool({
  name: 'HTTP 状态码',
  path: '/http-status-codes',
  description: '所有HTTP状态代码的列表，它们的名称和含义。',
  keywords: [
    'http',
    'status',
    'codes',
    ...codesByCategories.flatMap(({ codes }) => codes.flatMap(({ code, name }) => [String(code), name])),
  ],
  component: () => import('./http-status-codes.vue'),
  icon: HttpRound,
  createdAt: new Date('2023-04-13'),
});
