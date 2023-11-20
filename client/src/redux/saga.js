const { call, put, takeEvery } = require("redux-saga/effects");
const { postLogin } = require("../helper/FetchData");
const { OnloginSuccess, OnloginFail } = require("./actions");
const { ON_LOGIN_ACCOUNT } = require("./actionTypes");
function* sagaLogin({paload:params}){
    try{
        const response = yield call(postLogin,params)
        console.log(response);
        yield put(OnloginSuccess(response.data))
    }catch(error){
        yield put(OnloginFail(error))
    }
}

function* blogSaga(){
    yield takeEvery(ON_LOGIN_ACCOUNT,sagaLogin)
}

export default blogSaga