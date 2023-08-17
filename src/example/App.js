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
  "attrs": {
    "name": "测试规则1",
    "remark": "作测试规则使用",
    "enabled": true,
    "ruleType": "conditionRule",
    "ruleIsPublic": 2
  },
  "conditionRules": [
    {
      "id": "root",
      "rootCondition": {
        "id": "ROOT",
        "type": "and",
        "subConditions": [
          {
            "id": "9892c9c8f69167b98abaeb9c49a54143",
            "type": "normal",
            "expression": {
              "left": {
                "id": "16241e17b7afc0af5f8a740957412fe4",
                "type": "variable",
                "value": {
                  "groupCode": [
                    "_1"
                  ],
                  "groupLabel": "用户",
                  "propCode": "uid",
                  "propLabel": "uid"
                },
                "data": "{\"groupCode\":[\"_1\"],\"groupLabel\":\"用户\",\"propCode\":\"uid\",\"propLabel\":\"uid\"}"
              },
              "operator": {
                "label": "等于",
                "charator": "=="
              },
              "right": {
                "id": "1513759d7b684dd9bea2c52a4380e1f7",
                "type": "input",
                "value": "1",
                "data": "1"
              }
            }
          },
          {
            "id": "f5a468a8cfa3c61a971d0d4535586755",
            "type": "normal",
            "expression": {
              "left": {
                "id": "f03723977d34bb7a0a10983cc6c6485e",
                "type": "variable",
                "value": {
                  "groupCode": [
                    "_1"
                  ],
                  "groupLabel": "用户",
                  "propCode": "cid",
                  "propLabel": "cid"
                },
                "data": "{\"groupCode\":[\"_1\"],\"groupLabel\":\"用户\",\"propCode\":\"cid\",\"propLabel\":\"cid\"}"
              },
              "operator": {
                "label": "等于",
                "charator": "=="
              },
              "right": {
                "id": "1f4962bffdf19226a026ed4284dd334a",
                "type": "input",
                "value": "2",
                "data": "2"
              }
            }
          },
          {
            "id": "a254592c7d737a60e885a9991573fed8",
            "type": "and",
            "subConditions": [
              {
                "id": "7e7998e770c26a88543602d76b08f041",
                "type": "normal",
                "expression": {
                  "left": {
                    "id": "eccbc12e509cfad9e5bfb646f5ee9e98",
                    "type": "func",
                    "value": {
                      "actionName": "date",
                      "methodName": "getNowDate",
                      "methodLabel": "格式化日期",
                      "parameters": [
                        {
                          "name": "格式",
                          "type": "String",
                          "value": {
                            "id": "c72cc5586e6f57e96b4b4254215f15b4@eccbc12e509cfad9e5bfb646f5ee9e98",
                            "type": "input",
                            "value": "yyyyMMdd",
                            "data": "yyyyMMdd"
                          }
                        }
                      ]
                    },
                    "data": "{\"actionName\":\"date\",\"methodName\":\"getNowDate\",\"methodLabel\":\"格式化日期\",\"parameters\":[{\"name\":\"格式\",\"type\":\"String\",\"value\":{\"id\":\"c72cc5586e6f57e96b4b4254215f15b4@eccbc12e509cfad9e5bfb646f5ee9e98\",\"type\":\"input\",\"value\":\"yyyyMMdd\",\"data\":\"yyyyMMdd\"}}]}"
                  },
                  "operator": {
                    "label": "等于",
                    "charator": "=="
                  },
                  "right": {
                    "id": "e182e66852b3a2a9449fe6470c95d5f6",
                    "type": "input",
                    "value": "20230306",
                    "data": "20230306"
                  }
                }
              },
              {
                "id": "666a8fb496d85d5a6aaebce6b55be98f",
                "type": "and",
                "subConditions": [
                  {
                    "id": "044e6b8276f3a9d6f4e43512c1be19d4",
                    "type": "normal",
                    "expression": {
                      "left": {
                        "id": "3051e65587391336980c5e1d58374100",
                        "type": "func",
                        "value": {
                          "actionName": "date",
                          "methodName": "addForDay",
                          "methodLabel": "日期加时间",
                          "parameters": [
                            {
                              "name": "目标日期",
                              "type": "Date",
                              "value": {
                                "id": "7dc032a0ad5a58f300f182827997217e@3051e65587391336980c5e1d58374100",
                                "type": "func",
                                "value": {
                                  "actionName": "date",
                                  "methodName": "getNowDate",
                                  "methodLabel": "格式化日期",
                                  "parameters": [
                                    {
                                      "name": "格式",
                                      "type": "String",
                                      "value": {
                                        "id": "746a304078859f17fd17194636cf0e46@7dc032a0ad5a58f300f182827997217e@3051e65587391336980c5e1d58374100",
                                        "type": "input",
                                        "value": "yyyyMMdd",
                                        "data": "yyyyMMdd"
                                      }
                                    }
                                  ]
                                },
                                "data": "{\"actionName\":\"date\",\"methodName\":\"getNowDate\",\"methodLabel\":\"格式化日期\",\"parameters\":[{\"name\":\"格式\",\"type\":\"String\",\"value\":{\"id\":\"746a304078859f17fd17194636cf0e46@7dc032a0ad5a58f300f182827997217e@3051e65587391336980c5e1d58374100\",\"type\":\"input\",\"value\":\"yyyyMMdd\",\"data\":\"yyyyMMdd\"}}]}"
                              }
                            },
                            {
                              "name": "格式",
                              "type": "String",
                              "value": {
                                "id": "27f512e00804ce6bd167a39ec77d9ff2@3051e65587391336980c5e1d58374100",
                                "type": "input",
                                "value": "yyyyMMdd",
                                "data": "yyyyMMdd"
                              }
                            },
                            {
                              "name": "时间",
                              "type": "String",
                              "value": {
                                "id": "97ec89259670b5ccae8cc696455b9c4c@3051e65587391336980c5e1d58374100",
                                "type": "input",
                                "value": "1d",
                                "data": "1d"
                              }
                            }
                          ]
                        },
                        "data": "{\"actionName\":\"date\",\"methodName\":\"addForDay\",\"methodLabel\":\"日期加时间\",\"parameters\":[{\"name\":\"目标日期\",\"type\":\"Date\",\"value\":{\"id\":\"7dc032a0ad5a58f300f182827997217e@3051e65587391336980c5e1d58374100\",\"type\":\"func\",\"value\":{\"actionName\":\"date\",\"methodName\":\"getNowDate\",\"methodLabel\":\"格式化日期\",\"parameters\":[{\"name\":\"格式\",\"type\":\"String\",\"value\":{\"id\":\"746a304078859f17fd17194636cf0e46@7dc032a0ad5a58f300f182827997217e@3051e65587391336980c5e1d58374100\",\"type\":\"input\",\"value\":\"yyyyMMdd\",\"data\":\"yyyyMMdd\"}}]},\"data\":\"{\\\"actionName\\\":\\\"date\\\",\\\"methodName\\\":\\\"getNowDate\\\",\\\"methodLabel\\\":\\\"格式化日期\\\",\\\"parameters\\\":[{\\\"name\\\":\\\"格式\\\",\\\"type\\\":\\\"String\\\",\\\"value\\\":{\\\"id\\\":\\\"746a304078859f17fd17194636cf0e46@7dc032a0ad5a58f300f182827997217e@3051e65587391336980c5e1d58374100\\\",\\\"type\\\":\\\"input\\\",\\\"value\\\":\\\"yyyyMMdd\\\",\\\"data\\\":\\\"yyyyMMdd\\\"}}]}\"}},{\"name\":\"格式\",\"type\":\"String\",\"value\":{\"id\":\"27f512e00804ce6bd167a39ec77d9ff2@3051e65587391336980c5e1d58374100\",\"type\":\"input\",\"value\":\"yyyyMMdd\",\"data\":\"yyyyMMdd\"}},{\"name\":\"时间\",\"type\":\"String\",\"value\":{\"id\":\"97ec89259670b5ccae8cc696455b9c4c@3051e65587391336980c5e1d58374100\",\"type\":\"input\",\"value\":\"1d\",\"data\":\"1d\"}}]}"
                      },
                      "operator": {
                        "label": "等于",
                        "charator": "=="
                      },
                      "right": {
                        "id": "31d95de591eae8adc7c6eda7822ceb9e",
                        "type": "input",
                        "value": "20230307",
                        "data": "20230307"
                      }
                    }
                  },
                  {
                    "id": "9fb1dde1e27d7fc19e011c384250864a",
                    "type": "normal",
                    "expression": {
                      "left": {
                        "id": "72097cad43e6f0ea39304c41e95e41a7",
                        "type": "variable",
                        "value": {
                          "groupCode": [
                            "_2"
                          ],
                          "groupLabel": "设备",
                          "propCode": "root",
                          "propLabel": "root"
                        },
                        "data": "{\"groupCode\":[\"_2\"],\"groupLabel\":\"设备\",\"propCode\":\"root\",\"propLabel\":\"root\"}"
                      },
                      "operator": {
                        "label": "等于",
                        "charator": "=="
                      },
                      "right": {
                        "id": "c0fee59fd3bccf2e8794f725df1a8678",
                        "type": "input",
                        "value": "1",
                        "data": "1"
                      }
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      "trueActions": [],
      "falseActions": []
    }
  ],
  "loopTarget": {
    "value": {}
  },
  "startActions": [],
  "endActions": []
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
