import axios from 'axios';

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
    baseURL: 'http://202.31.202.253:5000',
};

// 2. API 함수들을 정리
function fetchList(requestName) {
    try {
        const response = axios.get(`${config.baseURL}/${requestName}`);
        console.log(`get${requestName} : request success`);
        return response;
    } catch (error) {
        console.log(error);
    }
}

function createItem(payload) {
    if (payload.requestName == "Product") {
        payload.data.Code = payload.data.Specification + payload.data.codeSex + payload.data.codeState + payload.data.codeNumber;
    }

    try {
        const response = axios.post(`${config.baseURL}/${payload.requestName}`, payload.data);
        console.log(`create${payload.requestName} : request success`);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export {
    fetchList,
    createItem,
};