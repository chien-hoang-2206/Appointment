const BASE_PREFIX = 'api';
const ApiConstants = {
    BRANCH: `/branches`,
    ACCOUNT: `/account`,
    DEPARTMENT: `/department`,
    LOGIN: '/account/login',
    SIGNUP: '/account',
    PATIENT: `/patient`,







    // old
    CATEGORIES: `/categories`,
    BOOKING_USER: `/booking/user`,
    BOOKING_PGT: `/booking/pgt`,

    PAYMENT_URL: 'payment/create_payment_url',
    PAYMENT_USER: 'payment/user',
    PAYMENT: 'payment',

    BOOKING: `/booking`,
    BOOKING_CHART: `/booking/chart`,
    BOOKING_TOP: `/booking/top`,
    BOOKING_TIME: `/booking/time`,
    PGT_FEEDBACK: `/pgt/feedback`,
    PGT: `/pgt`,
    BANNER: `/banner`,
    ACCOUNT_PHOTO: '/account/photo',
    ACCOUNT_PGT: '/account/pgt',

    HOME: `${BASE_PREFIX}/novels`,
    READING_HISTORY_ACC: `${BASE_PREFIX}/history`,
    CHAPTER_NOVEL: `${BASE_PREFIX}/chapters`,
    BOOKMARK: `${BASE_PREFIX}/bookmarks`,
}

export default ApiConstants

export { BASE_PREFIX }
