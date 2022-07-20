import { call, put, takeEvery } from 'redux-saga/effects';
import * as api from '../../apis'
import { getUsersSuccess, getUsersFailure } from '../slices/userSlice'
function* getUsers() {
    try {
        const response = yield call(api.fetchUsers)
        yield put(getUsersSuccess(response.data))
    } catch (error) {
        yield put(getUsersFailure());
    }
}

function* userSaga() {
    yield takeEvery('user/getUsersStart', getUsers);
}
export default userSaga;