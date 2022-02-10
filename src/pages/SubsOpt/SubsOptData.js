const SubsOptData = [
  {
    optStep: 1,
    optType: 'radio',
    questions: { queryMain: '사이즈는', querySub: '어떻게 하시겠어요?' },
    selectOpt: {
      queryKey: 'size',
      optList: [
        { id: 1, content: 'Medium' },
        { id: 2, content: 'Large' },
      ],
    },
  },

  {
    optStep: 2,
    optType: 'radio',
    questions: { queryMain: '하루에', querySub: '몇 회 드시겠어요?' },
    selectOpt: {
      queryKey: 'food_day_count',
      optList: [
        { id: 1, content: '1회' },
        { id: 2, content: '2회' },
      ],
    },
  },

  {
    optStep: 3,
    optType: 'radio',
    questions: { queryMain: '1주일에', querySub: '몇 일 드시겠어요?' },
    selectOpt: {
      queryKey: 'food_week_count',
      optList: [
        { id: 1, content: '주 3일' },
        { id: 2, content: '주 4일' },
        { id: 3, content: '주 5일' },
        { id: 4, content: '주 6일' },
      ],
    },
  },
  {
    optStep: 4,
    optType: 'dropdown',
    questions: { queryMain: '몇 주 동안', querySub: '구독하시겠어요?' },
    selectOpt: {
      queryKey: 'food_period',
      optList: [
        {
          id: 0,
          content: [
            '구독 주기를 선택해주세요',
            '2주',
            '3주',
            '4주',
            '5주',
            '6주',
            '7주',
            '8주',
          ],
        },
      ],
    },
  },
  {
    optStep: 5,
    optType: 'datepicker',
    questions: { queryMain: '구독은 언제부터', querySub: '시작하시겠어요?' },
    selectOpt: {
      queryKey: 'food_start_date',
      optList: [
        {
          id: 1,
          content: [
            new Date().getFullYear(),
            (new Date().getMonth() + 1).toString().padStart(2, '0'),
            new Date().getDate().toString().padStart(2, '0'),
          ].join('-'),
        },
      ],
    },
  },
  {
    optStep: 6,
    optType: 'button',
    questions: { queryMain: '추천 식단으로', querySub: '드시겠어요?' },
    selectOpt: {
      queryKey: 'product',
      optList: [
        { id: 1, content: '네! 추천해주세요' },
        { id: 2, content: '아니요, 직접 고를래요' },
      ],
    },
  },
];

export default SubsOptData;
