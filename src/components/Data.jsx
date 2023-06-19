

const qnaList = [
    {
        q: '식물을 놓을 곳에 빛이 얼마나 비추나요? ',
        a: [
            { answer: '음지', value:1, rel:'answerWater', type: [] },
            { answer: '반음지', value:2, rel:'answerWater', type: [] },
            { answer: '반양지', value:3, rel:'answerWater', type: [] },
            { answer: '양지', value:4, rel:'answerWater', type: [] },
        ]
    },
    {
        q: '물을 얼마나 많이 주시나요?질문value 햇빛끼리 물끼리value값 넣어주기 ',
        a: [
            { answer: '하루에 7번 줄 수 있음', value:1, rel:'water', type: [] },
            { answer: '하루에 4번 줄 수 있음', value:2, rel:'water', type: [] },
            { answer: '하루에 1번 줄 수 있음', value:3, rel:'water', type: [] },
        ]
    },
    {
        q: '집에 햇빛을 많이 받나요?',
        a: [
            { answer: '실외에서 키울 수 있습니다', value:1, rel:'water', type: [] },
            { answer: '반그늘에서 키울 수 있습니다.', value:2, rel:'water', type: [] },
            { answer: '그늘입니다~~', value:3, rel:'water', type: [] },
        ]
    },

]

export default qnaList;    