export interface UserInfoDTO{
  results: UserInfo[],
}

export interface UserInfo{
  gender: string,
  name:{
    first: string,
    last: string,
  },
  location:{
    city: string,
  },
  email: string,
  dob:{
    age: string,
  },
  picture:{
    large: string,
  },


};
