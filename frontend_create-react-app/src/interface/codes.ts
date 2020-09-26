export enum Code {
  SUCCESS,
  ERROR_FOR_UNKNOWN,
  ERROR_FOR_YOU_SHOULD_LOGIN_FIRST,
  ERROR_FOR_SOCKET_NOT_INITIALIZED,

  SERVER_REQUEST_FAIL_FOR_BUSY,
  SERVER_REQUEST_FAIL_FOR_NOT_PRIVILEGE,
  SERVER_REQUEST_FAIL_FOR_NAME_EMPTY,
  SERVER_REQUEST_FAIL_FOR_NAME_CONFLICT,
  SERVER_REQUEST_FAIL_FOR_TOKEN_NOT_VALID,
  SERVER_REQUEST_FAIL_FOR_BOT_START_ERROR,

  SOCKET_DISCONNECTED_NOT_DAEMON,
  SOCKET_DISCONNECTED_WITH_DAEMON,

  USER_REGISTER_FAILED_FOR_NAME_EXISTED,
  USER_REGISTER_FAILED_FOR_INVALID_USERNAME,
  USER_REGISTER_FAILED_FOR_INVALID_PASSWORD,
  USER_REGISTER_FAILED_FOR_UNKNOWN_REASONS,

  USER_LOGIN_FAILED_FOR_NOT_EXIST,
  USER_LOGIN_FAILED_FOR_INCORRECT_PASSWORD,
  USER_LOGIN_FAILED_FOR_INCORRECT_USERNAME_OR_PASSWORD,
  USER_LOGIN_FAILED_FOR_INVALID_USERNAME,
  USER_LOGIN_FAILED_FOR_INVALID_PASSWORD,
  USER_LOGIN_FAILED_FOR_UNKNOWN_REASONS,
}
