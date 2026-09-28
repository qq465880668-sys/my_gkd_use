import { defineApp } from 'gkd-kit/define';

export default defineApp({
  id: 'com.phoenix.read',
  name: '红果短剧',
  groups: [
    {
      name: '跳过开屏广告',
      key: 1,
      rules: [
        {
          matches: '[text*="跳过"][visibleToUser=true]',
          action: 'click',
        },
      ],
    },
  ],
});
