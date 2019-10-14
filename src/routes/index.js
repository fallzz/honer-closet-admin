import Vue from 'vue'
import Router from 'vue-router'

import MainContents from '@/views/Main/MainContents'
import SettingContents from '@/views/Setting/SettingContents'
import CustomerContents from '@/views/Customer/CustomerContents'

import BoardContents from '@/views/Board/BoardContents'
import NoticeContents from '@/views/Board/NoticeContents'
import FAQContents from '@/views/Board/FAQContents'
import ReviewContents from '@/views/Board/ReviewContents'
import WritePost from '@/views/Board/WritePost'

import StockContents from '@/views/Stock/StockContents'
import TopOfStock from '@/views/Stock/TopOfStock'
import BottomOfStock from '@/views/Stock/BottomOfStock'
import CoatOfStock from '@/views/Stock/CoatOfStock'
import GeneralOfStock from '@/views/Stock/GeneralOfStock'
import SuitOfStock from '@/views/Stock/SuitOfStock'
import OthersOfStock from '@/views/Stock/OthersOfStock'

Vue.use(Router)

export const router = new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'Main',
            component: MainContents
        },
        {
            path: '/Setting',
            name: 'Setting',
            component: SettingContents
        },
        {
            path: '/Customer',
            name: 'Customer',
            component: CustomerContents
        },
        {
            path: '/Board',
            name: 'Board',
            component: BoardContents
        },
        {
            path: '/Board/WritePost',
            name: 'WritePost',
            component: WritePost
        },
        {
            path: '/Board/notice',
            name: 'Notice',
            component: NoticeContents
        },
        {
            path: '/Board/faq',
            name: 'FAQ',
            component: FAQContents
        },
        {
            path: '/Board/review',
            name: 'Review',
            component: ReviewContents
        },
        {
            path: '/Stock',
            name: 'Stock',
            component: StockContents
        },
        {
            path: '/Stock/top',
            name: 'TopOfStock',
            component: TopOfStock
        },
        {
            path: '/Stock/bottom',
            name: 'BottomOfStock',
            component: BottomOfStock
        },
        {
            path: '/Stock/coat',
            name: 'CoatOfStock',
            component: CoatOfStock
        },
        {
            path: '/Stock/general',
            name: 'GeneralOfStock',
            component: GeneralOfStock
        },
        {
            path: '/Stock/suit',
            name: 'SuitOfStock',
            component: SuitOfStock
        },
        {
            path: '/Stock/others',
            name: 'OthersOfStock',
            component: OthersOfStock
        }
    ]
})