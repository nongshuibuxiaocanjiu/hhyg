// 普通提示
function toast(title, duration = 3000) {
  uni.showToast({
    title,
    icon: "none",
    duration
  })
}
// 失败提示
toast.err = function toast(title, duration = 3000) {
  uni.showToast({
    title,
    icon: "error",
    duration
  })
}
// 成功提示
toast.succcess = function toast(title, duration = 3000) {
  uni.showToast({
    title,
    icon: "succcess",
    duration
  })
}

export default toast
