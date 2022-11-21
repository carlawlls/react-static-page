import React from "react"
import ReactDOM from "react-dom/client"

function Header() {
  return (
      <header>
          <nav className="navbar">
              <img src="./react-logo.png" width="40px" />
              <ul className="nav-items">
                  <li>Pricing</li>
                  <li>About</li>
                  <li>Contact</li>
              </ul>
          </nav>
      </header>
  )
}

function Page() {
    <div>
        <Header />
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
}

// ReactDOM.render(page, document.getElementById("root"))

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Page />)
