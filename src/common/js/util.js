// 防抖函数(防止一直刷新对象)
// 第一个参数是要执行的函数,第二个参数是，延迟的时间
// 返回的也是一个函数
export function debounce(func, delay) {
    let timer = null;
    return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}