import React from 'react';
import RuleEditor from '../lib';

const mockFuncs = [
  {
    label: '日期',
    value: 'date',
    id: 'date',
    children: [
      {
        value: 'getNowDate',
        label: '格式化日期',
        parameters: [{ name: '格式', type: 'String' }]
      },
      {
        value: 'addForDay',
        label: '日期加时间',
        parameters: [{ name: '目标日期', type: 'Date'}, { name: '格式', type: 'String' }, { name: '时间', type: 'String' }]
      }
    ]
  }
];

const mockVariables = [
  {
    label: '用户',
    value: '_1',
    desc: '描述用户的一些信息',
    children: [
      { label: 'uid', value: 'uid', dictType: '' },
      { label: 'cid', value: 'cid', dictType: '' },
      { label: 'ip', value: 'ip', dictType: '' }
    ]
  },
  {
    label: '设备',
    value: '_2',
    desc: '描述设备的一些信息',
    children: [
      { label: '设备类型', value: 'deviceType' },
      { label: '设备名称', value: 'deviceName' },
      { label: 'root', value: 'root' }
    ]
  }
];

const mockConstants = [
  {
    label: '会员等级',
    value: 'userLevel',
    children: [{ label: '普通会员', value: '普通会员' },{ label: '白银会员', value: '白银会员' },{ label: '黄金会员', value: '黄金会员' }]
  }
];

const initialValue = {
  attrs: {
    name: '测试规则1',
    remark: '作测试规则使用',
    enabled: true,
    ruleType: 'conditionRule',
    ruleIsPublic: 2
  },
  conditionRules: [
    {
      id:'root',
      rootCondition: {
        id: 'ROOT',
        type: 'and',
        subConditions: [
        ]
      },
      trueActions: [
        
      ],
      falseActions: [
        
      ]
    }
  ],
  loopTarget: {
    
  },
  startActions: [
    
  ],
  endActions: [
    
  ]
};

const App = () => {
  return (
    <RuleEditor
      disabled={false}
      initialValue={initialValue}
      constants={mockConstants}
      variables={mockVariables}
      funcs={mockFuncs}
      onChange={value => console.log('value', value)}
      onSubmit={v => console.log('保存', v)}
      onCancel={() => alert('取消保存')}
    ></RuleEditor>
  );
};

export default App;
