
// function Ok() {
//     return (
//         <h1>Hello Nischal</h1>
//     )
// }




// ReactDOM.render(
//     <div>
//         {/* <Navbar /> */}
//         <Ok />
//     </div>,
//     document.getElementById("root"));


// const navbar = (
//     <nav>
//         <h1>Bob's Bistro</h1>
//         <ul>
//             <li>Menu</li>
//             <li>About</li>
//             <li>Contacts</li>
//         </ul>
//     </nav>
// )


// function TempName() {
//     return (
//         <div className="container">
//             <img src="react.png" width="40px" />
//             <h1>Fun facts about React</h1>
//         </div>
//     )
// }

// ReactDOM.render(<TempName />, document.getElementById('root'))


// ReactDOM.render(navbar, document.getElementById('root'))

// function LearningReact() {
//     return (
//         <ul>
//             <li>React is easy</li>
//             <li>React is Popular</li>
//             <li>React saves time</li>
//         </ul>
//     )
// }


// ReactDOM.render(<LearningReact />, document.getElementById('root'))

let countEl = document.querySelector("#count-el")
let saveEl = document.querySelector("#btn-save")
let infoEl = document.querySelector("#count-info")

let count = 0;

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    infoEl.textContent += count + "-"
    countZero();

}


function reset() {
    countZero();
    infoEl.textContent = "Today's Count:"
}

function countZero() {
    count = 0;
    countEl.textContent = 0;
}