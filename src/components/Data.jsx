

const qnaList = [
    {
        q: '식물을 놓을 곳에 빛이 얼마나 비추나요? ',
        a: [
            { answer: '음지', 'answerLight':1, type: [] },
            { answer: '반음지', 'answerLight':2, type: [] },
            { answer: '반양지', 'answerLight':3, type: [] },
            { answer: '양지', 'answerLight':4, type: [] },
        ]
    },
    {
        q: '물을 얼마나 자주 줄 수 있나요? ',
        a: [
            { answer: '일주일에 1~2번', 'answerWater' : 1, type: [] },
            { answer: '일주일에 3~4번','answerWater' : 2, type: [] },
            { answer: '일주일에 5번 이상','answerWater' : 3, type: [] },
        ]
    },
    {
        q: '집에 평균 기온은 어느 정도입니까?',
        a: [
            { answer: '0~10도', 'answerTemperature' : 5, type: [] },
            { answer: '11~20도', 'answerTemperature' : 15, type: [] },
            { answer: '21~30도', 'answerTemperature' : 25, type: [] },
        ]
    },
    {
        q: '평소 식물을 키워본 경험이 있으신가요?',
        a: [
            { answer: '아직 식물을 키워본 경험이 없다', 'answerLevel' : 1, type: [] },
            { answer: '식물을 키워보진 않았지만, 식물에 관심이 있다', 'answerLevel' : 2, type: [] },
            { answer: '식물을 키워본 경험이 있다', 'answerLevel' : 3, type: [] },
        ]
    },
    {
        q: '사시는 곳은 어디인가요?',
        a: [
            { answer: '반지하', 'answerTemperature' : -6, 'answerLight':-0.7, type: [] },
            { answer: '7층 이하의 주거지',  'answerTemperature' : 1, 'answerLight':0.1, type: [] },
            { answer: '8층 이상의 주거지',  'answerTemperature' : -2, 'answerLight': 0.7, type: [] },
        ]
    },
    {
        q: '일주일에 며칠 정도 외부 약속이 있나요?',
        a: [
            { answer: '0~2일', 'answerWater' : 0.7, 'answerLevel' : 0.7, type: [] },
            { answer: '3~4일', 'answerWater' : -0.1, 'answerLevel' : -0.1, type: [] },
            { answer: '5일 이상', 'answerWater' : -0.8, 'answerLevel' : -0.8, type: [] },
        ]
    },
    {
        q: '식물을 어느 장소에서 키울 예정이신가요?',
        a: [
            { answer: '빛이 잘 드는 베란다', 'answerTemperature' : -1, 'answerLight': 0.3, type: [] },
            { answer: '빛이 잘 안드는 베란다', 'answerTemperature' : -3, 'answerLight': -0.3, type: [] },
            { answer: '빛이 잘 드는 실내', 'answerTemperature' : 2, 'answerLight': 0.3, type: [] },
            { answer: '빛이 잘 안드는 실내', 'answerTemperature' : -4, 'answerLight': -0.4, type: [] },
        ]
    },
    {
        q: '사는 지역은 어디입니까?',
        a: [
            { answer: '북부 지역', 'answerTemperature' : -2, type: [] },
            { answer: '중부 지역', 'answerTemperature' : 0, type: [] },
            { answer: '남부 지역', 'answerTemperature' : 2, type: [] },
        ]
    },
]

export default qnaList;    