import { call, put, takeEvery } from 'redux-saga/effects';
import * as api from '../../apis'
import { getUsersSuccess, getUsersFailure, getUserFailure, getUserSuccess } from '../slices/userSlice'
function* getUsers() {
    try {
        const response = yield call(api.fetchUsers)
        yield put(getUsersSuccess(response.data))
    } catch (error) {
        yield put(getUsersFailure());
    }
}
function* getUser(action) {
    try {
        const response = yield call(api.fetchUser, action.payload)
        yield put(getUserSuccess(response.data))
    } catch (error) {
        yield put(getUserFailure());
    }
}
function* userSaga() {
    yield takeEvery('user/getUsersStart', getUsers);
    yield takeEvery('user/getUserStart', getUser);
}
export default userSaga;