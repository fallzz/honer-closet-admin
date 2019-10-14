import { router } from "../routes";

/* eslint-disable no-console */

//임시
export const setSelectedPost = (state, data) => {
        state.selectedPost = data;
    }
    //


const clickHomeButton = (state) => {
    state.toggleMenuflag = false;
    state.menuSelector = -1;
}

const clickMenuButtonIcon = (state, menuNumber) => {
    state.toggleMenuflag = true;
    state.menuSelector = menuNumber;
}

const clickSubMenuButton = (state, menuNumber, subMenuNumber) => {
    state.menuSelector = menuNumber;
    state.submenuSelector = subMenuNumber;
}

const toggleButtonClick = (state) => {
    state.toggleMenuflag = !state.toggleMenuflag;
}

const movePage = (num) => {
    router.go(num);
}

const setCustomer = (state, data) => {
    state.customer.rows = [];

    for (let i = 0; i < data.length; i++) {
        data[i].Password = undefined;
        data[i].CertificationNum = undefined;
        data[i].isSolar = undefined;


        if (data[i].Sex == "0") data[i].Sex = "남성";
        else data[i].Sex = "여성";
        if (data[i].Specification == "0") data[i].Specification = "관리자";
        else if (data[i].Specification == "1") data[i].Specification = "학생";
        else data[i].Specification = "교수";
        if (data[i].isCertificated == "0") data[i].isCertificated = "O";
        else data[i].isCertificated = "X";

        if (data[i].createdAt != null) {
            data[i].createdAt = data[i].createdAt.substr(0, 10);
        }

        state.customer.rows.push(data[i]);
    }

    console.log('setCustomer: success data set');
}

const setBoard = (state, data) => {
    state.board.rows = [];

    for (let i = 0; i < data.length; i++) {
        if (data[i].Specification == "0") data[i].Specification = "공지사항";
        else if (data[i].Specification == "1") data[i].Specification = "FAQ";
        else data[i].Specification = "리뷰";
        if (data[i].isHidden == "0") data[i].isCertificated = "O";
        else data[i].isHidden = "X";

        data[i].createdAt = data[i].createdAt.substr(0, 10);

        state.board.rows.push(data[i]);
    }

    console.log('setBoard: success data set');
}

const setProduct = (state, data) => {
    state.product.rows = [];
    state.cards[0].data = 0
    state.cards[2].data = 0
    state.cards[3].data = 0

    for (let i = 0; i < data.length; i++) {
        if (data[i].Progress == "9") continue;

        data[i].SellerID = undefined;
        data[i].BuyerID = undefined;
        data[i].Image1 = undefined;
        data[i].Image2 = undefined;
        data[i].Image3 = undefined;
        data[i].Image4 = undefined;
        data[i].Video = undefined;

        if (data[i].Specification == "T") data[i].Specification = "상의";
        else if (data[i].Specification == "B") data[i].Specification = "하의";
        else if (data[i].Specification == "C") data[i].Specification = "외투";
        else if (data[i].Specification == "G") data[i].Specification = "잡화";
        else if (data[i].Specification == "S") data[i].Specification = "정장류";
        else data[i].Specification = "기타";

        if (data[i].Progress == "0") data[i].Progress = "등록완료";
        else if (data[i].Progress == "1") {
            data[i].Progress = "판매중";
            state.cards[3].data += 1;
        } else if (data[i].Progress == "2") {
            data[i].Progress = "입금대기";
            state.cards[0].data += 1;
        } else if (data[i].Progress == "3") {
            data[i].Progress = "판매완료";
            state.cards[2].data += data[i].LastPrice;
        } else if (data[i].Progress == "4") data[i].Progress = "감모손실";

        data[i].createdAt = data[i].createdAt.substr(0, 10);

        state.product.rows.push(data[i]);
    }

    console.log('setProduct: success data set');
}

export { clickHomeButton, clickMenuButtonIcon, toggleButtonClick, clickSubMenuButton, movePage, setCustomer, setBoard, setProduct }