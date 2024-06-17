import { Math } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Math 求值',
  path: '/math-evaluator',
  description: '评估数学表达式，就像类固醇上的计算器（你可以使用函数，如sqrt，cos，sin，abs，…）',
  keywords: [
    'math',
    'evaluator',
    'acos',
    'acosh',
    'acot',
    'acoth',
    'acsc',
    'acsch',
    'asec',
    'asech',
    'asin',
    'asinh',
    'atan',
    'atan2',
    'atanh',
    'cos',
    'cosh',
    'cot',
    'coth',
    'csc',
    'csch',
    'sec',
    'sech',
    'sin',
    'sinh',
    'tan',
    'tanh',
  ],
  component: () => import('./math-evaluator.vue'),
  icon: Math,
});
