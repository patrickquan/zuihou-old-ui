import axiosApi from "./AxiosApi.js"

const apiList = {
  // 级联获取地域
  getMyMsgsPageList: "/msgs/msgsCenterInfo/page",
  //标记消息
  markMsgs: "/msgs/msgsCenterInfo/mark"
}
export default {
  getMyMsgsPageList(data) {
    return axiosApi({
      method: "get",
      url: apiList.getMyMsgsPageList,
      data
    })
  },
  markMsgs(data) {
    return axiosApi({
      method: "get",
      url: apiList.markMsgs,
      data
    })
  }
}
