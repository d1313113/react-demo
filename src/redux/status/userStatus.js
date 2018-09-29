export const isUserRegister = (userInfo) => {
  if (userInfo.age && userInfo.height && userInfo.gender) {
    return {
      isRegister: true,
      ...userInfo
    };
  } else {
    return {
      isRegister: false,
      ...userInfo
    };
  }
};
