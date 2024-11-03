export function Button() {
    const test = "some word"

    return <button onClick={()=>click(test)}>Custom button</button>
}

function click(test) {
    console.log("click");
}

function hello() {
    console.log("hello");
}
