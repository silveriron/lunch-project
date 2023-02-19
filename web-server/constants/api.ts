const KAKAO_URL = "//dapi.kakao.com";

export const KAKAO_SDK_URL = `${KAKAO_URL}/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY}&libraries=services,clusterer&autoload=false`;
export const KAKAO_COORD2ADDRESS_API = `${KAKAO_URL}/v2/local/geo/coord2address.json`;
export const KAKAO_KEYWORD_API = `${KAKAO_URL}/v2/local/search/keyword.json`;
