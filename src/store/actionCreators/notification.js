import {
  SUCCESS_NOTIFICATION,
  ERROR_NOTIFICATION,
  CLEAR_ALL_NOTIFICATIONS,
} from "../actionTypes/notification";

function displaySuccessNotification(message) {
  return {
    type: SUCCESS_NOTIFICATION,
    payload: {
      success: message,
    },
  };
}

function displayErrorNotification(message) {
  return {
    type: ERROR_NOTIFICATION,
    payload: {
      error: message,
    },
  };
}

function clearAllNotifications(message) {
  return {
    type: CLEAR_ALL_NOTIFICATIONS,
  };
}

export {
  displaySuccessNotification,
  displayErrorNotification,
  clearAllNotifications,
};
