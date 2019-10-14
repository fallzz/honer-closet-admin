import Vue from 'vue';
import Vuex from 'vuex';

import * as getters from './getters';
import * as mutations from './mutations';

import axios from 'axios';
import { fetchList, createItem } from '../api/index.js';
//import * as mutations from './mutations'
//import * as getters from './getters'

Vue.use(Vuex);

const URL = "http://202.31.202.253"
const PORT = 5000


export const store = new Vuex.Store({
    state: {
        headerText: "Administrator",
        menuSelector: -1,
        submenuSelector: 0,
        menuTitles: ["환경설정", "회원관리", "게시판관리", "재고관리", "정산관리(준비중)"],
        submenus: [
            [{ title: "사용자페이지설정", route: "/Setting" }, { title: "관리자테마설정(준비중)", route: "/Setting/adminpage" }],
            [{ title: "유저관리", route: "/Customer" }, { title: "메일발송(준비중)", route: "/Customer/mail" }, { title: "로그관리(준비중)", route: "/Customer/logs" }],
            [{ title: "전체 게시글", route: "/Board" }, { title: "공지사항", route: "/Board/notice" }, { title: "FAQ관리", route: "/Board/faq" }, { title: "리뷰관리", route: "/Board/review" }],
            [{ title: "재고관리", route: "/Stock" }],
            [{ title: "정산관리", route: "/Count" }, { title: "현금흐름표", route: "/Count/cash" }]
        ],
        toggleMenuflag: false,
        cards: [{
                title: '입금대기',
                icon: 'fas fa-shopping-cart fa-3x',
                dataFormat: '건',
                data: 0,
                route: '/Stock/sale'
            },
            {
                title: '최근리뷰',
                icon: 'fas fa-comment-dots fa-3x',
                dataFormat: '건',
                data: 0,
                route: '/Board/review'
            },
            {
                title: '매출액',
                icon: 'fas fa-won-sign fa-3x',
                dataFormat: '원',
                data: 0,
                route: '/Count'
            },
            {
                title: '판매 중 상품',
                icon: 'fas fa-archive fa-3x',
                dataFormat: '개',
                data: 0,
                route: '/Count'
            }
        ],
        customer: {
            columns: [{
                    label: 'No',
                    field: 'id',
                    type: 'number'
                },
                {
                    label: 'ID',
                    field: 'Name',
                },
                {
                    label: 'Email',
                    field: 'E_mail',
                },
                {
                    label: '성별',
                    field: 'Sex',
                },
                {
                    label: '회원 구분',
                    field: 'Specification',
                },
                {
                    label: '폰번호',
                    field: 'PhoneNum',
                },
                {
                    label: '인증여부',
                    field: 'isCertificated'
                },
                {
                    label: '생년월일',
                    field: 'Birth',
                    type: 'date',
                    dateInputFormat: 'yyyyMMdd',
                    dateOutputFormat: 'yyyy-MM-dd'
                },
                {
                    label: '가입일',
                    field: 'createdAt',
                    type: 'date',
                    dateInputFormat: 'yyyy-MM-dd',
                    dateOutputFormat: 'yyyy-MM-dd'
                },
            ],
            rows: []
        },
        board: {
            columns: [{
                    label: '글 번호',
                    field: 'id',
                    type: 'number'
                },
                {
                    label: '구분',
                    field: 'Specification',
                },
                {
                    label: '제목',
                    field: 'Title',
                },
                {
                    label: '내용',
                    field: 'Contents',
                },
                {
                    label: '작성자',
                    field: 'Writer',
                },
                {
                    label: '게시일',
                    field: 'createdAt',
                    type: 'date',
                    dateInputFormat: 'yyyy-MM-dd',
                    dateOutputFormat: 'yyyy-MM-dd'
                },
                {
                    label: '비밀글 여부',
                    field: 'isHidden',
                }
            ],
            rows: []
        },
        product: {
            columns: [{
                    label: '썸네일',
                    field: 'Thumbnail',
                },
                {
                    label: '코드',
                    field: 'Code',
                },
                {
                    label: '분류',
                    field: 'Specification',
                },
                {
                    label: '상품설명',
                    field: 'Info',
                },
                {
                    label: '등록일',
                    field: 'createdAt',
                    type: 'date',
                    dateInputFormat: 'yyyy-MM-dd',
                    dateOutputFormat: 'yyyy-MM-dd'
                },
                {
                    label: '1차 판매가',
                    field: 'FirstPrice',
                    type: 'number',
                },
                {
                    label: '할인율',
                    field: 'DiscountRate',
                    type: 'number'
                },
                {
                    label: '최종 판매가',
                    field: 'LastPrice',
                    type: 'number'
                },
                {
                    label: '판매진행상황',
                    field: 'Progress',
                }
            ],
            rows: []
        },
    },
    getters: getters,
    mutations: mutations,
    actions: {
        async getRequest(context, requestName) {
            const response = await fetchList(requestName);
            this.commit(`set${requestName}`, response.data);
            return response;
        },
        async createRequest(context, payload) {
            const response = await createItem(payload);
            this.dispatch('getRequest', payload.requestName); //update item
            return response;
        },


        updateRequest: function(context, payload) {
            if (payload.requestName == "Product") {
                payload.data.Code = payload.data.Specification + payload.data.codeSex + payload.data.codeState + payload.data.codeNumber;
                axios.patch(`${URL}:${PORT}/${payload.requestName}/${payload.data.Code}`, payload.data)
                    .then((response) => {
                        this.dispatch('getRequest', "Product");
                        console.log(`update${payload.requestName}: request success`);
                    })
                    .catch(response => {
                        console.log(`update${payload.requestName}: request failed`);
                    });
                return;
            } else if (payload.requestName == "Product/sale") {
                for (let i = 0; i < payload.Code.length; i++) {
                    axios.patch(`${URL}:${PORT}/${payload.requestName}/${payload.Code[i]}`)
                        .then((response) => {
                            this.dispatch('getRequest', "Product");
                            console.log(`update${payload.requestName}: request success`);
                        })
                        .catch(response => {
                            console.log(`update${payload.requestName}: request failed`);
                        });
                }
                return;
            } else if (payload.requestName == "Product/discount") {
                for (let i = 0; i < payload.Code.length; i++) {
                    axios.patch(`${URL}:${PORT}/${payload.requestName}/${payload.Code[i]}`, { DiscountRate: payload.DiscountRate, FirstPrice: payload.FirstPrice[i] })
                        .then((response) => {
                            this.dispatch('getRequest', "Product");
                            console.log(`update${payload.requestName}: request success`);
                        })
                        .catch(response => {
                            console.log(`update${payload.requestName}: request failed`);
                        });
                }
                return;
            } else if (payload.requestName == "Product/selloff") {
                for (let i = 0; i < payload.Code.length; i++) {
                    axios.patch(`${URL}:${PORT}/${payload.requestName}/${payload.Code[i]}`)
                        .then((response) => {
                            this.dispatch('getRequest', "Product");
                            console.log(`update${payload.requestName}: request success`);
                        })
                        .catch(response => {
                            console.log(`update${payload.requestName}: request failed`);
                        });
                }
                return;
            }

            axios.patch(`${URL}:${PORT}/${payload.requestName}/${payload.data.id[0]}`, payload.data)
                .then((response) => {
                    this.dispatch('getRequest', payload.requestName);
                    console.log(`update${payload.requestName} : request success`);
                })
                .catch(response => {
                    console.log(response);
                    console.log(`update${payload.requestName}: request failed`);
                });
        },
        deleteRequest: function(context, payload) {
            //product
            if (payload.requestName == "Product") {
                for (let i = 0; i < payload.Code.length; i++) {
                    axios.delete(`${URL}:${PORT}/${payload.requestName}/${payload.Code[i]}`)
                        .then((response) => {
                            this.dispatch('getRequest', payload.requestName);
                            console.log(`delete${payload.requestName}: request success`);
                        })
                        .catch(response => {
                            console.log(`delete${payload.requestName}: request failed`);
                        });

                    return;
                }
            }

            for (let i = 0; i < payload.id.length; i++) {
                axios.delete(`${URL}:${PORT}/${payload.requestName}/${payload.id[i]}`)
                    .then((response) => {
                        this.dispatch('getRequest', payload.requestName);
                        console.log(`delete${payload.requestName}: request success`);
                    })
                    .catch(response => {
                        console.log(`delete${payload.requestName}: request failed`);
                    });
            }
        },


        uploadRequest: function(context, payload) {
            let formData = new FormData();
            formData.append('img', payload.event.target.files[0]);

            axios.post(`${URL}:${PORT}/setting/${payload.requestName}/img/${payload.fileName}`, formData, {
                    headers: {
                        'Contents-Type': 'multipart/form-data'
                    }
                })
                .then((response) => {
                    console.log('uploadRequest: request success ' + response);
                })
                .catch(response => {
                    console.log(response);
                    console.log('uploadRequest: request failed');
                });
            location.reload()
        },
    },
});