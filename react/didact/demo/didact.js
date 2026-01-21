function createElement(type, props, ...children) {

}

// namespace
const Didact = {
    createElement, // 生成VDOM，一次生成 内存中
    render // 真是DOM并挂载
}
// babel 给的
const element = Didact.createElement(
    "div",
    { id: "foo" },
    Didact.createElement("a", null, "bar"),
    Didact.createElement("b")
);

Didact.render(element, document.getElementById("root")); // 生成真实DOM，一次生成 真实DOM 浏览器