const SubsOptData = [
  {
    optStep: 1,
    optType: 'radio',
    questions: { queryMain: '사이즈는', querySub: '어떻게 하시겠어요?' },
    selectOpt: {
      queryKey: 'size',
      optList: [
        { id: 1, value: 'Medium' },
        { id: 2, value: 'Large' },
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
        { id: 1, value: '1회' },
        { id: 2, value: '2회' },
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
        { id: 1, value: '주 3일' },
        { id: 2, value: '주 4일' },
        { id: 3, value: '주 5일' },
        { id: 4, value: '주 6일' },
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
        { id: 0, value: '구독 주기를 선택해주세요' },
        { id: 1, value: '2주' },
        { id: 2, value: '3주' },
        { id: 3, value: '4주' },
        { id: 4, value: '5주' },
        { id: 5, value: '6주' },
        { id: 6, value: '7주' },
        { id: 7, value: '8주' },
      ],
    },
  },
  {
    optStep: 5,
    optType: 'datepicker',
    questions: { queryMain: '구독은 언제부터', querySub: '시작하시겠어요?' },
    selectOpt: {
      queryKey: 'food_start',
      optList: [
        {
          id: 1,
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
        { id: 1, value: '네! 추천해주세요' },
        { id: 2, value: '아니요, 직접 고를래요' },
      ],
    },
  },
];

export default SubsOptData;
