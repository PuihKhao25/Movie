export const ResError = {
  SYS_ERROR: { message: "System error" },
  MISS_USER_PASS: { code: "AUT0001", message: "Miss Username or Password!" },
  USERNAME_NOT_EXIST: { code: "AUT0002", message: "Username does not exist" },
  PASS_NOT_EXIST: { code: "AUT0003", message: "Password invalid!" },
  CODE_INVALID: { code: "AUT0004", message: "Verification code invalid" },
  CODE_EXPIRED: { code: "AUT0005", message: "Verification code expired" },

  USERNAME_INVALID: {
    code: "ADM0001",
    message: "Username must contain at least 4 characters",
  },
  FULLNAME_INVALID: {
    code: "ADM0002",
    message: "Fullname contains up to 50 characters",
  },
  EMAIL_INVALID: {
    code: "ADM0003",
    message: "Email cannot be blank or syntax incorrect",
  },
  ACCOUNT_EXISTED: { code: "ADM0004", message: "Email or Name already exists" },
  ACCOUNT_NOT_EXISTED: { code: "ADM0005", message: "Account not exist" },

  TOKEN_INVALID: { code: "TKN001", message: "Token invalid" },

  UNAUTHORIZED: { code: "UNA401", message: "Unauthorized" },
  ACCESS_DENIED: { code: "UNA403", message: "Access denied" },

  VIDEO_TITLE_EMPTY: { code: "VID0001", message: "Video title is empty" },
  VIDEO_TYPE_EMPTY: { code: "VID0002", message: "Video type is empty" },
  VIDEO_URL_EMPTY: { code: "VID0003", message: "Video url is empty" },
  VIDEO_TYPE_INVALID: { code: "VID0004", message: "Video type invalid" },

  NOT_FOUND_DATA: { code: "COM0001", message: "Not found data" },
  STATUS_EMPTY: { code: "COM0002", message: "Status is empty" },
};
