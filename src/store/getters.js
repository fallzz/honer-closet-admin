export const getSelectedPost = (state) => {
    return state.selectedPost;
}
export const getSelectedPostID = (state) => {
    let selectedPostIDs = { requestName: "Board", id: [], Code: [] };

    if (state.menuSelector == 1) {
        selectedPostIDs.requestName = "Customer"
    } else if (state.menuSelector == 3) {
        selectedPostIDs.requestName = "Product"
        for (let i = 0; i < state.selectedPost.length; i++) {
            selectedPostIDs.Code.push(state.selectedPost[i].Code)
        }
    }

    for (let i = 0; i < state.selectedPost.length; i++) {
        selectedPostIDs.id.push(state.selectedPost[i].id)
    }

    return selectedPostIDs;
}
export const getSelectedPostID_discount_20 = (state) => {
    let selectedPostIDs = { requestName: "Product/discount", DiscountRate: 20, Code: [], FirstPrice: [] };

    for (let i = 0; i < state.selectedPost.length; i++) {
        selectedPostIDs.Code.push(state.selectedPost[i].Code)
        selectedPostIDs.FirstPrice.push(state.selectedPost[i].FirstPrice)
    }

    return selectedPostIDs;
}
export const getSelectedPostID_discount_30 = (state) => {
    let selectedPostIDs = { requestName: "Product/discount", DiscountRate: 30, Code: [], FirstPrice: [] };

    for (let i = 0; i < state.selectedPost.length; i++) {
        selectedPostIDs.Code.push(state.selectedPost[i].Code)
        selectedPostIDs.FirstPrice.push(state.selectedPost[i].FirstPrice)
    }

    return selectedPostIDs;
}
export const getSelectedPostID_sale = (state) => {
    let selectedPostIDs = { requestName: "Product/sale", Code: [], id: [] };

    for (let i = 0; i < state.selectedPost.length; i++) {
        selectedPostIDs.Code.push(state.selectedPost[i].Code)
    }

    return selectedPostIDs;
}

export const getSelectedPostID_selloff = (state) => {
        let selectedPostIDs = { requestName: "Product/selloff", Code: [], id: [] };

        for (let i = 0; i < state.selectedPost.length; i++) {
            selectedPostIDs.Code.push(state.selectedPost[i].Code)
        }

        return selectedPostIDs;
    }
    //


const selectedMenuNumber = (state) => {
    return state.menuSelector;
}
const selectedMenuTitle = (state) => {
    if (state.menuSelector == -1) {
        return "관리자메인";
    }
    return state.menuTitles[state.menuSelector];
}
const getSubmenus = (state) => {
    if (state.menuSelector == -1) {
        return "관리자메인";
    }
    return state.submenus[state.menuSelector];
}
const toggleMenuIsOn = (state) => {
    return state.toggleMenuflag;
}
const selectedSubmenu = (state) => {
    if (state.menuSelector == -1) {
        return "관리자메인";
    }
    return state.menuTitles[state.menuSelector]
}

const getCards = (state) => {
    return state.cards;
}

const getCustomer = (state) => {
    return state.customer;
}
const getAdmin = (state) => {
    let admins = { columns: state.customer.columns, rows: [] };

    for (let i = 0; i < state.customer.rows.length; i++) {
        if (state.customer.rows[i].Specification == "관리자") {
            admins.rows.push(state.customer.rows[i]);
        }
    }

    return admins;
}
const getBirthdayCustomer = (state) => {
    let birthdayPerson = { columns: state.customer.columns, rows: [] };

    let today = new Date();
    today = (today.getMonth + 1) + '-';

    for (let i = 0; i < state.customer.rows.length; i++) {
        if (state.customer.rows[i].Birth == null) continue;
        if (state.customer.rows[i].Birth.substr(5, 5) == today) {
            birthdayPerson.rows.push(state.customer.rows[i]);
        }
    }

    return birthdayPerson;
}


const getBoard = (state) => {
    return state.board;
}
const getNotice = (state) => {
    let notices = { columns: state.board.columns, rows: [] };

    for (let i = 0; i < state.board.rows.length; i++) {
        if (state.board.rows[i].Specification == "공지사항") {
            notices.rows.push(state.board.rows[i]);
        }
    }

    return notices;
}
const getFAQ = (state) => {
    let FAQs = { columns: state.board.columns, rows: [] };

    for (let i = 0; i < state.board.rows.length; i++) {
        if (state.board.rows[i].Specification == "FAQ") {
            FAQs.rows.push(state.board.rows[i]);
        }
    }

    return FAQs;
}
const getReview = (state) => {
    let reviews = { columns: state.board.columns, rows: [] };

    for (let i = 0; i < state.board.rows.length; i++) {
        if (state.board.rows[i].Specification == "리뷰") {
            reviews.rows.push(state.board.rows[i]);
        }
    }

    return reviews;
}
const getProduct = (state) => {
    return state.product;
}
const getProductProgressing = (state) => { //getProducts로 압축 가능하긴 함 하지만 서버에서 제대로 받는게 옳다고 봄
    let progressList = { columns: state.product.columns, rows: [] };

    for (let i = 0; i < state.product.rows.length; i++) {
        if (state.product.rows[i].Progress == '입금대기') {
            progressList.rows.push(state.product.rows[i]);
        }
    }

    return progressList;
}
const getTop = (state) => { //getProducts로 압축 가능하긴 함 하지만 서버에서 제대로 받는게 옳다고 봄
    let topList = { columns: state.product.columns, rows: [] };

    for (let i = 0; i < state.product.rows.length; i++) {
        if (state.product.rows[i].Code.charAt(0) == 'T') {
            topList.rows.push(state.product.rows[i]);
        }
    }

    return topList;
}
const getTopProgressing = (state) => {
    let topProgressList = { columns: state.product.columns, rows: [] };

    for (let i = 0; i < state.product.rows.length; i++) {
        if (state.product.rows[i].Code.charAt(0) == 'T' && state.product.rows[i].Progress == "입금대기") {
            topProgressList.rows.push(state.product.rows[i]);
        }
    }

    return topProgressList;
}
const getBottom = (state) => { //getProducts로 압축 가능하긴 함 하지만 서버에서 제대로 받는게 옳다고 봄
    let bottomList = { columns: state.product.columns, rows: [] };

    for (let i = 0; i < state.product.rows.length; i++) {
        if (state.product.rows[i].Code.charAt(0) == 'B') {
            bottomList.rows.push(state.product.rows[i]);
        }
    }

    return bottomList;
}
const getBottomProgressing = (state) => {
    let bottomProgressList = { columns: state.product.columns, rows: [] };

    for (let i = 0; i < state.product.rows.length; i++) {
        if (state.product.rows[i].Code.charAt(0) == 'B' && state.product.rows[i].Progress == "입금대기") {
            bottomProgressList.rows.push(state.product.rows[i]);
        }
    }

    return bottomProgressList;
}
const getCoat = (state) => { //getProducts로 압축 가능하긴 함 하지만 서버에서 제대로 받는게 옳다고 봄
    let coatList = { columns: state.product.columns, rows: [] };

    for (let i = 0; i < state.product.rows.length; i++) {
        if (state.product.rows[i].Code.charAt(0) == 'O') {
            coatList.rows.push(state.product.rows[i]);
        }
    }

    return coatList;
}
const getCoatProgressing = (state) => {
    let coatProgressList = { columns: state.product.columns, rows: [] };

    for (let i = 0; i < state.product.rows.length; i++) {
        if (state.product.rows[i].Code.charAt(0) == 'C' && state.product.rows[i].Progress == "입금대기") {
            coatProgressList.rows.push(state.product.rows[i]);
        }
    }

    return coatProgressList;
}
const getGeneral = (state) => { //getProducts로 압축 가능하긴 함 하지만 서버에서 제대로 받는게 옳다고 봄
    let generalList = { columns: state.product.columns, rows: [] };

    for (let i = 0; i < state.product.rows.length; i++) {
        if (state.product.rows[i].Code.charAt(0) == 'G') {
            generalList.rows.push(state.product.rows[i]);
        }
    }

    return generalList;
}
const getGeneralProgressing = (state) => {
    let generalProgressList = { columns: state.product.columns, rows: [] };

    for (let i = 0; i < state.product.rows.length; i++) {
        if (state.product.rows[i].Code.charAt(0) == 'G' && state.product.rows[i].Progress == "입금대기") {
            generalProgressList.rows.push(state.product.rows[i]);
        }
    }

    return generalProgressList;
}
const getSuit = (state) => { //getProducts로 압축 가능하긴 함 하지만 서버에서 제대로 받는게 옳다고 봄
    let suitList = { columns: state.product.columns, rows: [] };

    for (let i = 0; i < state.product.rows.length; i++) {
        if (state.product.rows[i].Code.charAt(0) == 'S') {
            suitList.rows.push(state.product.rows[i]);
        }
    }

    return suitList;
}
const getSuitProgressing = (state) => {
    let suitProgressList = { columns: state.product.columns, rows: [] };

    for (let i = 0; i < state.product.rows.length; i++) {
        if (state.product.rows[i].Code.charAt(0) == 'S' && state.product.rows[i].Progress == "입금대기") {
            suitProgressList.rows.push(state.product.rows[i]);
        }
    }

    return suitProgressList;
}
const getOthers = (state) => { //getProducts로 압축 가능하긴 함 하지만 서버에서 제대로 받는게 옳다고 봄
    let othersList = { columns: state.product.columns, rows: [] };

    for (let i = 0; i < state.product.rows.length; i++) {
        if (state.product.rows[i].Code.charAt(0) == 'E') {
            othersList.rows.push(state.product.rows[i]);
        }
    }

    return othersList;
}
const getOthersProgressing = (state) => {
    let othersProgressList = { columns: state.product.columns, rows: [] };

    for (let i = 0; i < state.product.rows.length; i++) {
        if (state.product.rows[i].Code.charAt(0) == 'E' && state.product.rows[i].Progress == "입금대기") {
            othersProgressList.rows.push(state.product.rows[i]);
        }
    }

    return othersProgressList;
}

export {
    selectedMenuNumber,
    selectedMenuTitle,
    getSubmenus,
    toggleMenuIsOn,
    selectedSubmenu,

    getCards,

    getCustomer,
    getAdmin,
    getBirthdayCustomer,

    getBoard,
    getNotice,
    getFAQ,
    getReview,

    getProduct,
    getProductProgressing,
    getTop,
    getTopProgressing,
    getBottom,
    getBottomProgressing,
    getCoat,
    getCoatProgressing,
    getGeneral,
    getGeneralProgressing,
    getSuit,
    getSuitProgressing,
    getOthers,
    getOthersProgressing
}