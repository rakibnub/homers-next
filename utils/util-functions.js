import {LOCAL_STORAGE_KEYS, objectsAgainstKeys} from './local-storage';
import axios from 'axios';
import {store} from '@states/store';
import {
  enqueueSnackBar,
  setTopScreenLoaderActive,
  setTopScreenLoaderUnActive,
} from '@states/slices/loader.slice';

const API_GATEWAY = 'https://0e74-115-186-157-96.ngrok.io/';
const doesNotRequireToken = ['user/login', 'user/save'];

const dispatch = store.dispatch;

export const HTTP_METHODS = {
  GET_METHOD: 'GET',
  POST_METHOD: 'POST',
  DELETE_METHOD: 'DELETE',
  PUT_METHOD: 'PUT',
  PATCH_METHOD: 'PATCH',
};

export const API = async completeAxiosOptions => {
  const {
    method,
    formData,
    body,
    apiUrl,
    serviceUrl,
    customHeaders,
    queryParams,
  } = completeAxiosOptions;
  const {getValue: jwtToken} = objectsAgainstKeys(LOCAL_STORAGE_KEYS.jwtToken);
  dispatch(setTopScreenLoaderActive());
  try {
    let finalApiURL = API_GATEWAY + serviceUrl + apiUrl;
    let requestHeaders = customHeaders || {};
    requestHeaders.Accept = 'application/json, text/plain';
    if (doesNotRequireToken.indexOf(apiUrl) === -1) {
      requestHeaders.Authorization = `Bearer ${jwtToken}`;
    }
    const apiData = await axios.request({
      method: method || HTTP_METHODS.GET_METHOD,
      url: finalApiURL,
      data: body || formData,
      params: queryParams || {},
      headers: requestHeaders,
    });
    dispatch(setTopScreenLoaderUnActive());
    if (apiData.status === 200 && !apiData.data.hasError) {
      dispatch(
        enqueueSnackBar({message: 'Login Successful', snackbarType: 'success'}),
      );
      return apiData.data;
    }
    dispatch(
      enqueueSnackBar({message: apiData.data.message, snackbarType: 'error'}),
    );
  } catch (exception) {
    console.log('Error Occurred in API in util-function.js: ', exception);
  }
};

API.getData = (apiUrl, options) =>
  API({...options, method: HTTP_METHODS.GET_METHOD, apiUrl});

API.postData = (apiUrl, options) =>
  API({...options, method: HTTP_METHODS.POST_METHOD, apiUrl});

API.deleteData = (apiUrl, options) =>
  API({...options, method: HTTP_METHODS.DELETE_METHOD, apiUrl});

API.putData = (apiUrl, options) =>
  API({...options, method: HTTP_METHODS.PUT_METHOD, apiUrl});

API.patchData = (apiUrl, options) =>
  API({...options, method: HTTP_METHODS.PATCH_METHOD, apiUrl});

export const callAPIWithRedux =
  (
    completeAxiosOptions,
    actionType,
    keyToSet,
    alternateActionType,
    doStoreInLS = false,
    callbackFunction = () => {},
  ) =>
  async dispatch => {
    const apiData = await API(completeAxiosOptions);
    if (doStoreInLS) {
      localStorage.setItem('user', JSON.stringify(apiData));
    }
    if (apiData) {
      dispatch({
        type: actionType,
        payload: {[keyToSet]: apiData},
      });
      callbackFunction();
    } else if (alternateActionType) {
      dispatch({
        type: alternateActionType,
      });
    }
  };
