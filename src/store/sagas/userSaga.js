import { call, put, takeEvery } from 'redux-saga/effects';
import * as api from '../../apis'
import * as actions from '../slices/userSlice'
function* getUsers() {
    try {
        const response = yield call(api.fetchUsers)
        yield put(actions.getUsersSuccess(response.data))
    } catch (error) {
        yield put(actions.getUsersFailure());
    }
}
function* getUser(action) {
    try {
        const response = yield call(api.fetchUser, action.payload)
        yield put(actions.getUserSuccess(response.data))
    } catch (error) {
        yield put(actions.getUserFailure());
    }
}
function* userSaga() {
    yield takeEvery('user/getUsersStart', getUsers);
    yield takeEvery('user/getUserStart', getUser);
}
export default userSaga;