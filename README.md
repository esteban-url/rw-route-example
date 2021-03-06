## private routes error

this repo shows the rror not handled by redwood when private routes are in the same line. like this:

```
    <Router>
      <Route path="/signin" page={SigninPage} name="signin" />
      <Private unauthenticated="signin">
        {/* two private routes on the same line? 🚨🚨🚨🚨🚨 */}
        <Route path="/secret" page={SecretPage} name="secret" /> <Route path="/dashboard" page={DashboardPage} name="dashboard" />
      </Private>
      {/* two public routes on the same line? ✅✅✅✅✅ */}
      <Route path="/" page={HomePage} name="home" /> <Route notfound page={NotFoundPage} />
    </Router>
```

# Redwood

> **WARNING:** RedwoodJS software has not reached a stable version 1.0 and should not be considered suitable for production use. In the "make it work; make it right; make it fast" paradigm, Redwood is in the later stages of the "make it work" phase.

## Getting Started
- [Tutorial](https://redwoodjs.com/tutorial/welcome-to-redwood): getting started and complete overview guide.
- [Docs](https://redwoodjs.com/docs/introduction): using the Redwood Router, handling assets and files, list of command-line tools, and more.
- [Redwood Community](https://community.redwoodjs.com): get help, share tips and tricks, and collaborate on everything about RedwoodJS.

### Setup

We use Yarn as our package manager. To get the dependencies installed, just do this in the root directory:

```terminal
yarn install
```

### Fire it up

```terminal
yarn redwood dev
```

Your browser should open automatically to `http://localhost:8910` to see the web app. Lambda functions run on `http://localhost:8911` and are also proxied to `http://localhost:8910/.redwood/functions/*`.
