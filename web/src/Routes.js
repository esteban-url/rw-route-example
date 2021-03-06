// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Private } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/signin" page={SigninPage} name="signin" />
      <Private unauthenticated="signin">
        {/* two private routes on the same line? 🚨🚨🚨🚨🚨 */}
        <Route path="/secret" page={SecretPage} name="secret" /> <Route path="/dashboard" page={DashboardPage} name="dashboard" />
      </Private>
      {/* two public routes on the same line? ✅✅✅✅✅ */}
      <Route path="/" page={HomePage} name="home" /> <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
