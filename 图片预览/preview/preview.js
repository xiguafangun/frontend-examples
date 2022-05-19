// 知识点：DOM 操作
// 课件链接：https://3yya.com/courseware/chapter/162

// 获取所有 .preview 元素
for (let img of document.querySelectorAll(".preview")) {
    // 知识点：事件
    // 课件链接：https://3yya.com/courseware/chapter/168
    // 绑定点击事件
    img.addEventListener("click", () => {
        // 创建预览器
        let container = document.createElement("div")
        container.classList.add("preview-container")
        container.onclick = function () {
            container.remove()
        }

        // 创建预览图片
        let innerImg = document.createElement("img")
        innerImg.classList.add("image")

        // 将预览图片的 src 设置为绑定图片的 src
        innerImg.src = img.src

        // 绑定滚动事件
        container.onwheel = function (event) {
            // 在页面有滚动条的情况下
            // 防止页面滚动
            event.preventDefault()

            // 知识点：获取元素样式属性值
            // 课件链接：https://3yya.com/courseware/chapter/160#获取样式的值
            const width = getComputedStyle(innerImg).width.slice(0, -2) // 获取当前图片宽度
            const height = getComputedStyle(innerImg).height.slice(0, -2) // 获取当前图片高度

            // 知识点：滚动事件
            // MDN 文档：https://developer.mozilla.org/zh-CN/docs/Web/API/WheelEvent
            if (event.deltaY > 0) {
                // 向上滚动放大
                innerImg.style.width = parseInt(width) * 1.2 + "px"
                innerImg.style.height = parseInt(height) * 1.2 + "px"
            } else if (event.deltaY < 0) {
                // 向下滚动缩小
                innerImg.style.width = parseInt(width) * 0.8 + "px"
                innerImg.style.height = parseInt(height) * 0.8 + "px"
            }
        }

        // 图片添加到预览器中
        container.append(innerImg)

        // 预览器添加到 body 中
        document.body.append(container)
    })
}
